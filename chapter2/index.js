/// <reference path="../node_modules/@types/d3/index.d.ts" />
window.addEventListener("DOMContentLoaded", function () {
    d3.csv("../data/cities.csv", function (data) { return dataViz(data); });
});
function dataViz(incomingData) {
    d3.select("body").selectAll("div.cities")
        .data(incomingData)
        .enter()
        .append("div")
        .attr("class", "cities")
        .html(function (d) { return d.label; });
}
