queue()
    .defer(d3.json, "../assets/javaScript/data/movies.json")
    .await(makeGraphs);

function makeGraphs(error, nameData) {
    var ndx = crossfilter(nameData);

    show_movie_stats(ndx);
    show_movie_revenue(ndx);

    dc.renderAll();
}

function show_movie_stats(ndx) {
    var dim = ndx.dimension(dc.pluck('RottenTomatoesScore'));
    var group = dim.group();

    dc.barChart('#movie-scores')
        .width(1500)
        .height(450)
        .margins({ top: 10, right: 50, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .transitionDuration(400)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Review Score")
        .yAxis().ticks(10)
}

function show_movie_revenue(ndx) {
    var name_dim = ndx.dimension(dc.pluck("Name"));
    var total_revenue = name_dim.group().reduceSum(dc.pluck("BoxOfficeRevenueInMillions"));

    dc.pieChart("#movie-profits")
        .height(400)
        .width(450)
        .radius(400)
        .transitionDuration(1000)
        .dimension(name_dim)
        .group(total_revenue);
}
