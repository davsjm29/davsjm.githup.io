var kil = [[[0,55]],[[1,55]],[[2,47]],[[3,47]]];
var mat = [
    [0, "Papel"],
    [1, "PET"],
    [2, "Aluminio"],
    [3, "Vidrio"],
 

];
Flotr.draw(document.getElementById("chart2"), kil, {
    title: "Materiales vendidos",
    colors: ["#ae0001", "#2a623d", "#222f5b", "#f0c75e"],
    bars: {
        show: true,
        barWidth: 0.5,
        shadowSize: 0,
        fillOpacity: 1,
        lineWidth: 0
    },
    yaxis: {
        min: 0,
        tickDecimals: 0,
        color: "white"
    },
    xaxis: {
        ticks: mat,
        color: "white"
    },
    grid: {
        horizontalLines: true,
        verticalLines: true
    },
 
});
   