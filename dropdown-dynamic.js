//Code that creates the dropdown dynamically from list
var x = document.getElementById("sel");
i = 0
while (i < stationList.length) {
    var option = document.createElement("option");
    option.text = (stationList[i].name);
    x.add(option, x[i + 1]);
    i++
}