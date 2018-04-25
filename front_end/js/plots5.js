d3.select("#selected-dropdown").text("What do you think we could do to move travelers from inquiries to bookings?");

d3.select("select")
  .on("change",function(d){
    var selected = d3.select("#d3-dropdown").node().value;
    console.log( selected );
    d3.select("#selected-dropdown").text(selected);
})