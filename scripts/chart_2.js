d3.dsv(";","./data/147_vehiculos_mal_estacionados.csv", d3.autoType).then((data) => {
  let dataPalermo = data.filter(d => d.domicilio_barrio == "PALERMO");
  let chart = Plot.plot({
    marks: [
      Plot.barX(
        dataPalermo,
        Plot.groupY({ x: "sum" }, {y: "prestacion"})
      )
    ],
    style: {
      color: "#B41818",
      fontSize: "12px",
    },
    height: 300,
    width: 1000,
    marginLeft: 450,
    y: { label: "", tickFormat: (d) => formatoEjeX(d)},
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
