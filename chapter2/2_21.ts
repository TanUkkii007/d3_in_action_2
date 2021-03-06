/// <reference path="../node_modules/@types/d3/index.d.ts" />

window.addEventListener("DOMContentLoaded", () => {
    d3.csv("../data/cities.csv", data => dataVis(data));

    function dataVis(incomingData) {
        const maxPopulation = d3.max(incomingData, (d: {population: string}) => parseInt(d.population));
        const yScale = d3.scaleLinear().domain([0, maxPopulation]).range([0,460]);

        d3.select("svg").attr("style", "height: 480px; width: 600px;");

        d3.select("svg")
            .selectAll("rect")
            .data(incomingData)
            .enter()
            .append("rect")
            .attr("width", 50)
            .attr("height", (d: {population: string}) => yScale(parseInt(d.population)))
            .attr("x", (d,i) => i * 60)
            .attr("y", (d: {population: string}) => 480 - yScale(parseInt(d.population)))
            .style("fill", "#FE9922")
            .style("stroke", "#9A8B7A")
            .style("stroke-width", "1px");
    }
});