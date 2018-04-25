function init() {
    var data = [{
        type: 'bar',
        x: [8.75, 4.60],
        y: ['Site A', 'Site B'],
        orientation: 'h',
        marker:{
            color: 'rgb(255, 153, 0)'
        }
      }];

    var layout = {
        height: 450,
        width: 650
    };

    Plotly.plot("bar1", data, layout);
}

function updatePlotly(newdata) {
    var PIE = document.getElementById("bar1");
    Plotly.restyle(PIE, "x",[newdata]);
}

function getData(dataset) {
    var data = [];
    switch (dataset) {
        case "dataset1":
            data = [8.75, 4.60];
            break;
        case "dataset2":
            data = [19.80, 21.52];
            break;
        case "dataset3":
            data = [7.00, 5.32];
            break;
        default:
            data = [8.75, 4.60];
    }
    updatePlotly(data);
}

Plotly.d3.select("#selDataset1").on("change", function () {
    console.log(this.value);
    getData(this.value);
})

init();
