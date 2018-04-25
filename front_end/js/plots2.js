function init() {
    var data = [{
        type: 'bar',
        x: [6.18, 11.84, 3.55, 6.84],
        y: ['Site A 2016', 'Site A 2017', 'Site B 2016', 'Site B 2017'],
        orientation: 'h',
        marker:{
            color: 'rgb(153, 51, 153)'
        }
      }];

    var layout = {
        height: 450,
        width: 650
    };

    Plotly.plot("bar2", data, layout);
}

function updatePlotly(newdata) {
    var PIE = document.getElementById("bar2");
    Plotly.restyle(PIE, "x", [newdata]);
}

function getData(dataset) {
    var data = [];
    switch (dataset) {
        case "dataset11":
            data = [6.18, 11.84, 3.55, 6.84];
            break;
        case "dataset22":
            data = [22.02, 18.41, 19.59, 23.66];
            break;
        case "dataset33":
            data = [5.12, 8.17, 3.25, 7.28];
            break;
        default:
            data = [6.18, 11.84, 3.55, 6.84];
    }
    updatePlotly(data);
}

Plotly.d3.select("#selDataset2").on("change", function () {
    console.log(this.value);
    getData(this.value);
})

init();
