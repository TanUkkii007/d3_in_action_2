/// <reference path="../node_modules/@types/d3/index.d.ts" />
window.addEventListener("DOMContentLoaded", function () {
    var yScale = d3.scaleLinear()
        .domain([0, 24500])
        .range([0, 100]);
    d3.select("svg")
        .selectAll("rect")
        .data([14, 68, 24500, 430, 19, 1000, 5555])
        .enter()
        .append("rect")
        .attr("x", function (d, i) { return i * 10; })
        .attr("width", 10)
        .attr("height", function (d) { return yScale(d); })
        .attr("y", function (d) { return 100 - yScale(d); })
        .style("fill", "#FE9922")
        .style("stroke", "#9A887A")
        .style("stroke-width", "1px");
});
