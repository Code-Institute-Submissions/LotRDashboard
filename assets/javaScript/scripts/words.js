queue()
    .defer(d3.json, "../assets/javaScript/data/wordsByChar.json")
    .await(makeGraphs);

function makeGraphs(error, nameData) {
    var ndx = crossfilter(nameData);

    show_race_selector(ndx);
    show_name_data(ndx);
    show_book_data(ndx);
    //show_race_data(ndx);
    dc.renderAll();
}



//selector tool for defining races
function show_race_selector(ndx) {
    dim = ndx.dimension(dc.pluck("Race"));
    group = dim.group();

    dc.selectMenu("#race-selector")
        .dimension(dim)
        .group(group);
}


//Display graph showing the number of times a particular race has a speaking part (Not including the words spoken)
function show_name_data(ndx) {
    var dim = ndx.dimension(dc.pluck('Race'));
    var group = dim.group();

    dc.barChart('#character-graph')
        .width(700)
        .height(350)
        .margins({ top: 10, right: 60, bottom: 30, left: 60 })
        .dimension(dim)
        .group(group)
        .transitionDuration(500)
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .xAxisLabel("Number of times a Race has spoken")
        .yAxis().ticks(25);
}

//For the purposes of data display, FILM has been used instead of Chapter, this will help show correlation
// This is to show a deep display of how a stacked chart would show the different races.

function show_book_data(ndx) {
    var dim = ndx.dimension(dc.pluck('Film'));
    var group = dim.group();

    var wordsByAinur = dim.group().reduceSum(function(d) {
        if (d.Race === "Ainur") {
            return d.Words;
        }
        else {
            return 0;
        }
    });
    var wordsByDead = dim.group().reduceSum(function(d) {
        if (d.Race === "Dead") {
            return d.Words;
        }
        else {
            return 0;
        }
    });
    var wordsByDwarf = dim.group().reduceSum(function(d) {
        if (d.Race === "Dwarf") {
            return d.Words;
        }
        else {
            return 0;
        }
    });
    var wordsByElf = dim.group().reduceSum(function(d) {
        if (d.Race === "Elf") {
            return d.Words;
        }
        else {
            return 0;
        }
    });
    var wordsByEnt = dim.group().reduceSum(function(d) {
        if (d.Race === "Ent") {
            return d.Words;
        }
        else {
            return 0;
        }
    });
    var wordsByHobbit = dim.group().reduceSum(function(d) {
        if (d.Race === "Hobbit") {
            return d.Words;
        }
        else {
            return 0;
        }
    });
    var wordsByMen = dim.group().reduceSum(function(d) {
        if (d.Race === "Men") {
            return d.Words;
        }
        else {
            return 0;
        }
    });
    var wordsByNazgul = dim.group().reduceSum(function(d) {
        if (d.Race === "Nazgul") {
            return d.Words;
        }
        else {
            return 0;
        }
    });
    var wordsByOrc = dim.group().reduceSum(function(d) {
        if (d.Race === "Orc") {
            return d.Words;
        }
        else {
            return 0;
        }
    });

    var stackedChart = dc.barChart("#book");
    stackedChart
        .width(715)
        .height(350)
        .margins({ top: 10, right: 70, bottom: 30, left: 50 })
        .dimension(dim)
        .group(group)
        .stack(wordsByAinur, "Ainur")
        .stack(wordsByDead, "Undead")
        .stack(wordsByDwarf, "Dwarves")
        .stack(wordsByElf, "Elves")
        .stack(wordsByEnt, "Ents")
        .stack(wordsByHobbit, "Hobbits")
        .stack(wordsByMen, "Men")
        .stack(wordsByNazgul, "Nazgul")
        .stack(wordsByOrc, "Orcs")
        .x(d3.scale.ordinal())
        .xUnits(dc.units.ordinal)
        .legend(dc.legend().x(650).y(0).itemHeight(15).gap(5))

}


//Pie chart data

function show_race_data(ndx) {
    var dim = ndx.dimension(dc.pluck('Race'));
    var raceCharGroup = dim.group().reduce(
        function(p, v) { // add
            p[v.Character] = (p[v.Character] || 0) + 1;
            return p;
        },
        function(p, v) { // remove
            if (--p[v.Character] === 0)
                delete p[v.Character];
            return p;
        },

        dc.pieChart.valueAccessor(function(kv) {
            return Object.keys(kv.value).length;
        })
    );

    dc.pieChart('#race-graph')
        .height(550)
        .width(300)
        .radius(90)
        .transitionDuration(1500)
        .dimension(dim)
        .group(raceCharGroup);
}
