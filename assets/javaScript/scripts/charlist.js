var json = require("../assets/javaScript/data/characters.json")
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
