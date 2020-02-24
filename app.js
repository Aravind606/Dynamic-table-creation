function addRow() {
  var table = document.getElementById("table");
  var length = table.rows.length;
  var x = document.createElement("tr");
  x.setAttribute("id", "row" + length);
  var y = document.createElement("td");
  y.innerHTML = length;
  y.setAttribute("id", "tl" + length);
  var z = document.createElement("td");
  z.setAttribute("id", "tr" + length);
  var button = document.createElement("button");
  button.innerHTML = "Delete";
  button.setAttribute("id", "trb" + length);
  button.setAttribute("onClick", "delEle(" + length + ")");
  button.setAttribute("class", "btn btn-primary btn-lg ")
  z.appendChild(button);
  x.appendChild(y);
  x.appendChild(z);
  table.append(x);
}

function delEle(param) {
  var table = document.getElementById("table");
  var length = table.rows.length;
  var delElement = document.getElementById("row" + param);
  delElement.remove();

  for (var i = param + 1; i <= length - 1; i++) {
    var x = document.getElementById("row" + i);
    x.setAttribute("id", "row" + (i - 1));
    var y = document.getElementById("tl" + i);
    y.innerHTML = i - 1;
    y.setAttribute("id", "tl" + (i - 1))
    var z = document.getElementById("tr" + i);
    z.setAttribute("id", "tr" + (i - 1));
    var button = document.getElementById("trb" + i);
    button.setAttribute("id", "trb" + (i - 1));
    button.setAttribute("onClick", "delEle(" + (i - 1) + ")");
  }

}