queue()
    .defer(d3.json, "../assets/javaScript/data/characters.json")
    .await(makeTable);
    
function makeTable(){
    var characters = myCharacters.length;
    
    if(characters > 0){
        var table = document.createElement("table");
        table.style.width = "80%";
        table.setAttribute("border", "1");
        table.setAttribute("cellspacing", "1");
        table.setAttribute("cellpadding", "5");
        
        var col = [];
        for (var i = 0; i < characters; i++){
            for (var key in characters[i]){
                if (col.indexOf(key) === -1){
                    col.push(key);
                }
            }
        }
        
        var tHead = document.createElement("thead");
        
        var hRow = document.createElement("tr");
        
        for (var i = 0; i < col.length; i++){
            var th = document.createElement("th");
            th.innerHTML = col[i];
            hRow.appendChild(th);
        }
        tHead.appendChild(hRow);
        table.appendChild(tHead);
        
        var divContainer = document.getElementById("#char-list");
        divContainer.innerHTML = "";
        divContainer.appendChild(table);
        
    }
}