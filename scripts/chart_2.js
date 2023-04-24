d3.dsv(";","./data/147_vehiculos_mal_estacionados.csv", d3.autoType).then((data) => {
    let dataPalermo = data.filter(d => d.domicilio_barrio == "PALERMO");
    let dataAME = data.filter(d => d.prestacion == "VEHÍCULO MAL ESTACIONADO");
    let chart = Plot.plot({
      marks: [
        Plot.dot(dataPalermo, {
          x: 'hora_ingreso',
          y: 'domiclio_calle',
          r: dataAME,
          fill: 'cluster',
        }),
      ],
      color: {
        scheme: 'dark2',
        legend: true,
      },
    });
    d3.select('#chart_2').append(() => chart)
  });
  
