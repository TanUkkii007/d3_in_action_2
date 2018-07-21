/// <reference path="../node_modules/@types/d3/index.d.ts" />
window.addEventListener("DOMContentLoaded", function () {
    d3.csv("../data/cities.csv", function (data) { return dataVis(data); });
    function dataVis(incomingData) {
        var maxPopulation = d3.max(incomingData, function (d) { return parseInt(d.population); });
        var yScale = d3.scaleLinear().domain([0, maxPopulation]).range([0, 460]);
        
        d3.select("svg").attr("style", "height: 480px; width: 600px;");
        d3.select("svg")
            .selectAll("rect")
            .data(incomingData)
            .enter()
            .append("rect")
            .attr("width", 50)
            .attr("height", function (d) { return yScale(parseInt(d.population)); })
            .attr("x", function (d, i) { return i * 60; })
            .attr("y", function (d) { return 480 - yScale(parseInt(d.population)); })
            .style("fill", "#FE9922")
            .style("stroke", "#9A8B7A")
            .style("stroke-width", "1px");
    }
});
