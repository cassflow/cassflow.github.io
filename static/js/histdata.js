
// Parse the Data
 var datacsv = d3.csv("/data.csv");
 datacsv.then(function(data){ 
// d3.csv("https://raw.githubusercontent.com/holtzy/D3-graph-gallery/master/DATA/data_cleveland.csv", function(data) {

// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 130};
var width = 1200 - margin.left - margin.right;
var height = 1200 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#histdata")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");


  // Add X axis
  var x = d3.scaleLinear()
    .domain([1750, 2023])
    .range([ 0, width]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x))

  // Y axis
  var y = d3.scaleBand()
    .domain(data.map(function(d) { return d.Author; }))
    .range([ 0, height ])
    .padding(3);
  svg.append("g")
    .call(d3.axisLeft(y))
    

  // Lines
  svg.selectAll("myline")
    .data(data)
    .enter()
    .append("line")
      .attr("x1", function(d) { return x(d.DOB); })
      .attr("x2", function(d) { return x(d.DOD); })
      .attr("y1", function(d) { return y(d.Author); })
      .attr("y2", function(d) { return y(d.Author); })
      .attr("stroke", "grey")
      .attr("stroke-width", function(d) { return d.References + "px"; })

  // Circles of variable 1
  svg.selectAll("mycircle")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function(d) { return x(d.DOB); })
      .attr("cy", function(d) { return y(d.Author); })
      .attr("r", function(d) { return +d.References + +3; })
      .style("fill", "#69b3a2")

  // Circles of variable 2
  svg.selectAll("mycircle")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function(d) { return x(d.DOD); })
      .attr("cy", function(d) { return y(d.Author); })
      .attr("r", function(d) { return +d.References + +3; })
      .style("fill", "#4C4082")
})