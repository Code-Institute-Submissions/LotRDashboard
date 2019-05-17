/* Attempted fetching of JSON data to enable ability for external link appending through jQuery. This provided me with some bugs however and 
    also disallowed me from viewing the data.

myJson = fetch('https://lotr-dashboard-dano5342.c9users.io/assets/javaScript/data/characters.json')
    .then(function(response) {
        return response.json();
    })
    .then(function(myJson) {
        console.log(JSON.stringify(myJson));
    });

*/








d3.json('../assets/javaScript/data/characters.json', function (error,data) {

  function tabulate(data, columns) {
		var table = d3.select('#list').append('table')
				.attr("style", "margin-left:150px", "style", "border: 1px solid wheat")
		var thead = table.append('thead')
		var	tbody = table.append('tbody');

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
		    return columns.map(function (column) {
		      return {column: column, value: row[column]};
		    });
		  })
		  .enter()
		  .append('td')
		    .html(function(d) { return d.value; });

	  return table;
	}

	// render the table(s)
	tabulate(data, ['Name', 'Url', 'Race']);

});


// the above basic table was available at http://www.d3noob.org/2013/02/add-html-table-to-your-d3js-graph.html


myJson = fetch('https://dano5342.github.io/LotRDashboard/assets/javaScript/data/characters.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
  });





/*var json = require("../assets/javaScript/data/characters.json")
console.log(json)
var characters = json;


function generateDynamicTable() {

    var noOfCharacters = characters.length;

    if (noOfCharacters > 0) {


        // CREATE DYNAMIC TABLE.
        var table = document.createElement("table");
        table.style.width = '50%';
        table.setAttribute('border', '1');
        table.setAttribute('cellspacing', '0');
        table.setAttribute('cellpadding', '5');

        var col = []; // define an empty array
        for (var i = 0; i < noOfCharacters; i++) {
            for (var key in characters[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // CREATE TABLE HEAD .
        var tHead = document.createElement("thead");


        // CREATE ROW FOR TABLE HEAD .
        var hRow = document.createElement("tr");

        // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");
            th.innerHTML = col[i];
            hRow.appendChild(th);
        }
        tHead.appendChild(hRow);
        table.appendChild(tHead);

        // CREATE TABLE BODY .
        var tBody = document.createElement("tbody");

        // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
        for (var i = 0; i < noOfCharacters; i++) {

            var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .


            for (var j = 0; j < col.length; j++) {
                var td = document.createElement("td");
                td.innerHTML = characters[i][col[j]];
                bRow.appendChild(td);
            }
            tBody.appendChild(bRow)

        }
        table.appendChild(tBody);


        // FINALLY ADD THE NEWLY CREATED TABLE WITH JSON DATA TO A CONTAINER.
        var divContainer = document.getElementById("#char-list");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);

    }
}
*/
