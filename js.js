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

}