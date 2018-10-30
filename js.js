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
    values: [19, 26, 55],
    labels: ['Residential', 'Non-Residential', 'Utility'],
    type: 'pie'
  }];

  Plotly.newPlot('divEvolving1', data);

  // Graph 2 Evolving 2
  var data = [{
    y: [19, 26, 55],
    x: ['Residential', 'Non-Residential', 'Utility'],
    type: 'bar'
  }];

  Plotly.newPlot('divEvolving2', data);

  // Graph 3 Evolving 3
  var trace1 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    name: 'SF Zoo',
    type: 'bar'
  };

  var trace2 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [12, 18, 29],
    name: 'LA Zoo',
    type: 'bar'
  };

  var data = [trace1, trace2];

  Plotly.newPlot('divEvolving3', data);

  // Graph 4 Evolving 4
  var trace1 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [20, 14, 23],
    name: 'SF Zoo',
    error_y: {
      type: 'data',
      array: [0.5, 1, 2],
      visible: true
    },
    type: 'bar'
  };

  var trace2 = {
    x: ['giraffes', 'orangutans', 'monkeys'],
    y: [12, 18, 29],
    name: 'LA Zoo',
    error_y: {
      type: 'data',
      array: [0.5, 1, 2],
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