/// <reference path="../node_modules/@types/d3/index.d.ts" />

window.addEventListener("DOMContentLoaded", () => {
    d3.csv("../data/cities.csv", data => dataViz(data));
});

function dataViz(incomingData: any[]) {
    d3.select("body").selectAll("div.cities")
        .data(incomingData)
        .enter()
        .append("div")
            .attr("class", "cities")
            .html(d => d.label);
}