window.onload = function () {

  // Graph 0 Basic
  var divBasic = document.getElementById('divBasic');
  Plotly.plot(divBasic, [{
    x: [1, 2, 3, 4, 5],
    y: [1, 2, 4, 8, 16]
  }], {
      margin: { t: 0 }
    });

  // Graph 1 Evolving 1
  var data = [{
    labels: ['Renault', 'Ford', 'Volkswagen'],
    values: [15, 22, 40],
    type: 'pie'
  }];

  Plotly.newPlot('divEvolving1', data);

  // Graph 2 Evolving 2
  var data = [{
    x: ['Renault', 'Ford', 'Volkswagen'],
    y: [15, 22, 40],
    type: 'bar'
  }];

  Plotly.newPlot('divEvolving2', data);

  // Graph 3 Evolving 3
  var trace1 = {
    x: ['Entornos', 'Hardware', 'Marcas'],
    y: [7.5, 6, 9],
    name: 'DAM',
    type: 'bar'
  };

  var trace2 = {
    x: ['Entornos', 'Hardware', 'Marcas'],
    y: [7.5, 8, 5],
    name: 'DAW',
    type: 'bar'
  };

  var data = [trace1, trace2];

  Plotly.newPlot('divEvolving3', data);

  // Graph 4 Evolving 4
  var trace1 = {
    x: ['Entornos', 'Hardware', 'Marcas'],
    y: [7.5, 6, 9],
    name: 'DAM',
    error_y: {
      type: 'data',
      array: [0.5, 1.5, 1],
      visible: true
    },
    type: 'bar'
  };

  var trace2 = {
    x: ['Entornos', 'Hardware', 'Marcas'],
    y: [7.5, 8, 5],
    name: 'DAW',
    error_y: {
      type: 'data',
      array: [1.5, 0.5, 3],
      visible: true
    },
    type: 'bar'
  };

  var data = [trace1, trace2];

  Plotly.newPlot('divEvolving4', data);

  // Graph 5 Complex
  Plotly.d3.csv('https://raw.githubusercontent.com/plotly/datasets/master/api_docs/mt_bruno_elevation.csv', function (err, rows) {
    function unpack(rows, key) {
      return rows.map(function (row) { return row[key]; });
    }

    var z_data = []
    for (i = 0; i < 24; i++) {
      z_data.push(unpack(rows, i));
    }

    var data = [{
      z: z_data,
      type: 'surface'
    }];

    var layout = {
      title: 'Mt Bruno Elevation',
      autosize: false,
      width: 500,
      height: 500,
      margin: {
        l: 65,
        r: 50,
        b: 65,
        t: 90,
      }
    };
    Plotly.newPlot('divComplex', data, layout);
  });
}