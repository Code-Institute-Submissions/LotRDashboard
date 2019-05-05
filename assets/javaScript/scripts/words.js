queue()
    .defer(d3.json, "../assets/javaScript/data/wordsByChar.json")
    .await(makeGraphs);
    
function makeGraphs(error, nameData){
    var ndx = crossfilter(nameData);
    
    show_name_data(ndx);
    show_race_data(ndx);
    
    
    dc.renderAll();
}


function show_name_data(ndx){
    var dim = ndx.dimension(dc.pluck('Character'));
    var group = dim.group();
    
    dc.barChart('#character-graph')
        .width(1500)
        .height(600)
        .margins({top: 10, right: 50, bottom: 30, left: 50})
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Character")
        .yAxis().ticks(20);
}

function show_race_data(ndx) {
    var race_dim = ndx.dimension(dc.pluck('Race'));
    var total_chars_per_race = race_dim.group().reduceSum(dc.pluck('Character'));
    
    
    dc.pieChart('#race-graph')
        .height(550)
        .radius(90)
        .transitionDuration(1500)
        .dimension(race_dim)
        .group(total_chars_per_race);
}