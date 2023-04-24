d3.dsv(";","./data/147_vehiculos_mal_estacionados.csv", d3.autoType).then((data) => {
  let dataPalermo = data.filter(d => d.domicilio_barrio == "PALERMO");
  let dataCalle = dataPalermo.filter(d => d.domicilio_calle == ""); 
  let chart = Plot.plot({
    marks: [
      Plot.barY(
        dataPalermo,
        Plot.groupX({ y: "sum" }, { x: "canal"})
      )
    ],
    style: {
      color: "#B41818",
      fontSize: "12px",
    },
    height: 300,
    width: 800,
  });
  d3.select("#chart_3").append(() => chart);
});
