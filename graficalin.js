function carga(){
    let rain=[
        [0,2],
    [1,7],
    [2,0],
    [3,25],
    [4,37],
    [5,0],
   
];
    let meses = [
        [0, "Enero"],
        [1, "Febrero"],
        [2, "Marzo"],
        [3, "Abril"],
        [4, "Mayo"],
        [5, "Junio"],
        
    ];
    Flotr.draw(
        document.getElementById("chart"),
        [{
            data:rain,
            lines:{show:true},
            label:"Precio del dolar",
        },
      
    ], 
    {
        yaxis:{min:0,max:40,color:"white",
            tickFormatter:function(val) 
            {return "" + val;},
            tickDecimals:0},
            y2axis:{min:10, max:30, tickDecimals:0},
            xaxis:{tickDecimals:0,},
            xaxis:{ticks:meses, color:"white"},
    },
   
    );
    }
    