d3.dsv(";","./data/147_vehiculos_mal_estacionados.csv", d3.autoType).then((data) => {
  let dataPalermo = data.filter(d => d.domicilio_barrio == "PALERMO");
  let chart = Plot.plot({
    marks: [
      Plot.barX(
        dataPalermo,
        Plot.groupY({ x: "sum" }, {y: "prestacion", fill: "prestacion"})
      ),
    ],
    style: {
      fontSize: "14px",
      overflow: "visible",
      backgroundColor: "#FFFBEB",
    },
    color: {
      scheme: "blues",
      range: [0.7,1]
    },
    height: 450,
    width: 800,
    marginLeft: 60,
    marginTop:30,
    marginBottom: 40,
    grid: true,
    nice: true,
    line: true,
    x: {
      label: 'Cantidad de denuncias',
    },
    y: {
      label: 'Prestacion',
      tickFormat: (d) => formatoEjeX(d),
      // tickRotate: 30,
      labelAnchor: "top",
    },
  });

  d3.select("#chart_2").append(() => chart);
  function formatoEjeX(data){
    if (data == "INCONVENIENTES PARA EL ESTACIONAMIENTO DE BICICLETAS EN GARAJES"){
      return "BICICLETAS EN GARAJES"
    } else if (data == "IRREGULARIDADES CON RESERVAS DE ESPACIOS PARA ESTACIONAMIENTO DE VEHÍCULOS DE PERSONAS CON DISCAPACIDAD") {
      return "IRREGULARIDADES ESTACIONAMIENTO PERSONAS CON DISCAPACIDAD"
    } else {
       return data
    }
  }
})