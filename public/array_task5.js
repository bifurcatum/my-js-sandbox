const inputData = '1 и -5.8 или 10 хотя 34 + -5.3 и 73';

function getMinMax(str) {

    let data = str
        .split(' ')
        .map((item) => parseFloat(item))
        .filter(item => isFinite(item) == true)
        .map(item => item)
        .sort(function(a, b) { return a - b; })

    return {
        min: data[0],
        max: data[data.length-1]
    }
   }
