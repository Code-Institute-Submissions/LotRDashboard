queue()
    .defer(d3.json, "../LotRDashboard/assets/javaScript/data/movies.json")
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




function show_trilogy_selector(ndx) { //selector for the 2 trilogies
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
        .height(window.innerHeight - 300)
        .width(window.innerWidth - 65 % window)
        .margins({ top: 10, right: 50, bottom: 100, left: 70 })
        .dimension(dim)
        .group(group)
        .transitionDuration(400)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Review Score")
        .colors(d3.scale.ordinal().domain([0, 6])
            .range(["#F2E96B"]))
        .yAxis().ticks(10);


}


//Bar Chart for Revenue
function show_movie_revenue(ndx) {
    var dim = ndx.dimension(dc.pluck("Name")); // take the name
    var total_revenue = dim.group().reduceSum(dc.pluck("BoxOfficeRevenueInMillions")); //take revenue

    dc.barChart("#movie-profits")
        .height(window.innerHeight - 250)
        .width(window.innerWidth - 65 % window)
        .margins({ top: 10, right: 50, bottom: 100, left: 70 })
        .transitionDuration(1000)
        .dimension(dim)
        .group(total_revenue)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Revenue in Millions")
        .colors(d3.scale.ordinal().domain([0, 6])
            .range(["#F2E96B"]))
        .yAxis().ticks(10);

}

//Bar chart for Budget
function show_movie_budget(ndx) {
    var dim = ndx.dimension(dc.pluck("Name")); //Take Name
    var total_budget = dim.group().reduceSum(dc.pluck("BudgetInMillions")); //take the budget

    dc.barChart("#movie-budget")
        .height(window.innerHeight - 250)
        .width(window.innerWidth - 65 % window)
        .margins({ top: 10, right: 50, bottom: 100, left: 70 })
        .transitionDuration(1000)
        .dimension(dim)
        .group(total_budget)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Budget in Millions")
        .colors(d3.scale.ordinal().domain([0, 6])
            .range(["#F2E96B"]))
        .yAxis().ticks(10);
}


//Chart for Academy Award wins.


function show_academy_data(ndx) {
    var dim = ndx.dimension(dc.pluck('Name'));
    var group = dim.group().reduceSum(dc.pluck("AcademyAwardWins"));

    dc.barChart('#academy-wins')
        .width(window.innerWidth - 65 % window)
        .height(window.innerHeight - 300)
        .margins({ top: 10, right: 50, bottom: 100, left: 70 })
        .dimension(dim)
        .group(group)
        .transitionDuration(400)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Oscar Wins")
        .colors(d3.scale.ordinal().domain([0, 6])
            .range(["#F2E96B"]))
        .yAxis().ticks(10);
}
