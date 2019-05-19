d3.json('../assets/javaScript/data/characters.json', function(error, data) {

    function tabulate(data, columns) {
        var table = d3.select('#list').append('table')
            .attr("style", "border: 1px solid wheat")
        var thead = table.append('thead')
        var tbody = table.append('tbody');

        // append the header row
        thead.append('tr')
            .selectAll('th')
            .data(columns).enter()
            .append('th')
            .text(function(column) { return column; });

        // create a row for each object in the data
        var rows = tbody.selectAll('tr')
            .data(data)
            .enter()
            .append('tr');

        // create a cell in each row for each column
        var cells = rows.selectAll('td')
            .data(function(row) {
                return columns.map(function(column) {
                    return { column: column, value: row[column] };
                });
            })
            .enter()
            .append('td')
            .html(function(d) {
                let regex = /^(http:\/\/)/; //This REGEX was not in the example table given below..
                if (regex.test(d.value)) {
                    return `<a href='${d.value}' target="_blank">Link to Wikia</a>`;
                }
                else {
                    return d.value;
                }

            });

        return table;
    }

    // render the table(s)
    tabulate(data, ['Name', 'Url', 'Race']);

});


// the above basic table was available at http://www.d3noob.org/2013/02/add-html-table-to-your-d3js-graph.html
