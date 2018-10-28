window.onload = function () {

    // Graph 1
    var div1 = document.getElementById('div1');
    Plotly.plot(div1, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16]
    }], {
            margin: { t: 0 }
        });

    // Graph 2
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
        Plotly.newPlot('div2', data, layout);
    });

    // Graph 3
    var trace1 = {
        x: ['Trial 1', 'Trial 2', 'Trial 3'],
        y: [3, 6, 4],
        name: 'Control',
        error_y: {
          type: 'data',
          array: [1, 0.5, 1.5],
          visible: true
        },
        type: 'bar'
      };
      var trace2 = {
        x: ['Trial 1', 'Trial 2', 'Trial 3'],
        y: [4, 7, 3],
        name: 'Experimental',
        error_y: {
          type: 'data',
          array: [0.5, 1, 2],
          visible: true
        },
        type: 'bar'
      };
      var data = [trace1, trace2];
      var layout = {barmode: 'group'};
      Plotly.newPlot('div3', data, layout);

      // Graph 4
      var data = [{
        values: [19, 26, 55],
        labels: ['Residential', 'Non-Residential', 'Utility'],
        type: 'pie'
      }];
      
      var layout = {
        height: 400,
        width: 500
      };
      
      Plotly.newPlot('div4', data, layout);

      // Graph 5
      var data = [{
        y: [19, 26, 55],
        x: ['Residential', 'Non-Residential', 'Utility'],
        type: 'bar'
      }];
      
      var layout = {
        height: 400,
        width: 500
      };
      
      Plotly.newPlot('div5', data, layout);

}