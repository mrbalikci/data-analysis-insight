function init() {
    var data = [{
        type: 'bar',
        x: [8.59, 10.01, 4.48, 6.47],
        y: ['Site A Plat', 'Site A Int', 'Site B Plat', 'Site B Int'],
        orientation: 'h',
        marker:{
            color: 'rgb(255, 51, 153)'
        }
      }];

    var layout = {
        height: 450,
        width: 650
    };

    Plotly.plot("bar4", data, layout);
}

function updatePlotly(newdata) {
    var PIE = document.getElementById("bar4");
    Plotly.restyle(PIE, "x", [newdata]);
}

function getData(dataset) {
    var data = [];
    switch (dataset) {
        case "dataset1111":
            data = [8.59, 10.01, 4.48, 6.47];
            break;
        case "dataset2222":
            data = [14.25, 56.34, 16.61, 73.22];
            break;
        case "dataset3333":
            data = [6.32, 10.27, 5.84, 1.92];
            break;
        default:
            data = [8.59, 10.01, 4.48, 6.47];
    }
    updatePlotly(data);
}

Plotly.d3.select("#selDataset4").on("change", function () {
    console.log(this.value);
    getData(this.value);
})

init();
