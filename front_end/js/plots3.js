function init() {
    var data = [{
        type: 'bar',
        x: [10.54, 7.01, 5.03, 3.77],
        y: ['Site A FRBO', 'Site A PM', 'Site B FRBO', 'Site B PM'],
        orientation: 'h',
        marker:{
            color: 'rgb(0, 153, 51)'
        }
      }];

    var layout = {
        height: 450,
        width: 650
    };

    Plotly.plot("bar3", data, layout);
}

function updatePlotly(newdata) {
    var PIE = document.getElementById("bar3");
    Plotly.restyle(PIE, "x", [newdata]);
}

function getData(dataset) {
    var data = [];
    switch (dataset) {
        case "dataset111":
            data = [10.54, 7.01, 5.03, 3.77];
            break;
        case "dataset222":
            data = [13.38, 29.20, 15.72, 36.26];
            break;
        case "dataset333":
            data = [6.24, 7.84, 6.03, 3.94];
            break;
        default:
            data = [10.54, 7.01, 5.03, 3.77];
    }
    updatePlotly(data);
}

Plotly.d3.select("#selDataset3").on("change", function () {
    console.log(this.value);
    getData(this.value);
})

init();
