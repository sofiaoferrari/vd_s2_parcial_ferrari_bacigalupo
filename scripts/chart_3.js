d3.dsv(";","./data/147_vehiculos_mal_estacionados.csv", d3.autoType).then((data) => {
    let dataCalles = data.filter(d => d.domiclio_calle == "BULNES" || d.domiclio_calle == "CERVIÑO AV." 
    || d.domiclio_calle == "CHARCAS"|| d.domiclio_calle ==  "GURRUCHAGA" || d.domiclio_calle == "CIUDAD DE LA PAZ" 
    || d.domiclio_calle == "GUEMES" || d.domiclio_calle == "MIGUELETES" || d.domiclio_calle == "SANTA FE AV.");
    dataCalles.map(item => {
      let horaIngresoCompleta = d3.timeParse('%H:%M:%S')(item.hora_ingreso)
      item.solo_hora_ingreso = horaIngresoCompleta.getHours()
    });
    let chart = Plot.plot({
      marks: [
        Plot.dot(dataCalles, 
          Plot.group({r: "count"}, {
            y: "domiclio_calle", 
            x: "solo_hora_ingreso",
          }))
      ],
      style: {
        overflow: "visible",
        fontSize: "14px",
      },
      margin:45, 
      grid: true,
      nice: true,
      line: true,
      color: {
        legend: true,
        style: {
          fontSize: "14px",
        }
      },
      width: 1000,
      height: 450,
      marginLeft: 190,
      marginTop: 0,
    })
    d3.select('#chart_3').append(() => chart)
    });
