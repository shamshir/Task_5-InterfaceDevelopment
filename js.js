window.onload = function () {
    var div1 = document.getElementById('div1');
    Plotly.plot(div1, [{
        x: [1, 2, 3, 4, 5],
        y: [1, 2, 4, 8, 16]
    }], {
            margin: { t: 0 }
        });
}