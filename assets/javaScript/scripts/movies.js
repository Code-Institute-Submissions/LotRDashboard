queue()
    .defer(d3.json, "../assets/javaScript/data/movies.json")
    .await(makeGraphs);

function makeGraphs(error, nameData) {
    var ndx = crossfilter(nameData);

    show_movie_stats(ndx);
    show_movie_revenue(ndx);
    show_movie_budget(ndx);
    show_academy_data(ndx);
    show_trilogy_selector(ndx);
    dc.renderAll();
}


function show_trilogy_selector(ndx) {
    dim = ndx.dimension(dc.pluck("Series"));
    group = dim.group();

    dc.selectMenu("#trilogy-selector")
        .dimension(dim)
        .group(group);
}


// Rotten Tomato score for each film
function show_movie_stats(ndx) {
    var dim = ndx.dimension(dc.pluck('Name'));
    var group = dim.group().reduceSum(dc.pluck("RottenTomatoesScore"));

    dc.barChart('#movie-scores')
        .width(600)
        .height(500)
        .margins({ top: 10, right: 50, bottom: 100, left: 70 })
        .dimension(dim)
        .group(group)
        .transitionDuration(400)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Review Score")
        .yAxis().ticks(10)

}


//Pie Chart showing Profits for each movie
function show_movie_revenue(ndx) {
    var name_dim = ndx.dimension(dc.pluck("Name")); // take the name
    var total_revenue = name_dim.group().reduceSum(dc.pluck("BoxOfficeRevenueInMillions")); //take profits

    dc.pieChart("#movie-profits")
        .height(300)
        .width(720)
        .radius(600)
        .innerRadius(40)
        .transitionDuration(1000)
        .dimension(name_dim)
        .group(total_revenue)
        .legend(dc.legend())

}


function show_movie_budget(ndx) {
    var name_dim = ndx.dimension(dc.pluck("Name")); //Take Name
    var total_budget = name_dim.group().reduceSum(dc.pluck("BudgetInMillions")); //take the budget

    dc.pieChart("#movie-budget")
        .height(300)
        .width(720)
        .radius(600)
        .innerRadius(40)
        .transitionDuration(1000)
        .dimension(name_dim)
        .group(total_budget)
        .legend(dc.legend())
}


//Chart for Academy Award wins.


function show_academy_data(ndx) {
    var dim = ndx.dimension(dc.pluck('Name'));
    var group = dim.group().reduceSum(dc.pluck("AcademyAwardWins"));

    dc.barChart('#academy-wins')
        .width(600)
        .height(500)
        .margins({ top: 10, right: 50, bottom: 100, left: 70 })
        .dimension(dim)
        .group(group)
        .transitionDuration(400)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Oscar Wins")
        .yAxis().ticks(10)

}
