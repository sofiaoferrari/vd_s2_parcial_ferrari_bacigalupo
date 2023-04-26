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
            fill: "count",
          })),        
      ],

      style: {
        overflow: "visible",
        fontSize: "14px",
        backgroundColor: "#FFFBEB",
      },
      x: {
        label: "Hora denuncia",
      },
      y: {
        label: "Calle", 
        labelAnchor: "top",
      },
      grid: true,
      nice: true,
      line: true,
      color: {
        type: "categorical",
        style: {
          fontSize: "14px",
        }
      },
      width: 800,
      height: 450,
      marginTop: 40,
    marginLeft: 60,
      marginBottom: 60,
    })
    d3.select('#chart_3').append(() => chart)
    });
