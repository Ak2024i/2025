function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = '错误';
    }
}

function calculateSquareRoot() {
    const value = parseFloat(document.getElementById('display').value);
    if (value >= 0) {
        document.getElementById('display').value = Math.sqrt(value);
    } else {
        document.getElementById('display').value = '错误';
    }
}

function calculateSin() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.sin(value * Math.PI / 180);
}

function calculateCos() {
    const value = parseFloat(document.getElementById('display').value);
    document.getElementById('display').value = Math.cos(value * Math.PI / 180);
}

function downloadResult() {
    const result = document.getElementById('display').value;
    if (result) {
        const blob = new Blob([result], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = '计算结果.txt';
        a.click();
        URL.revokeObjectURL(url);
    }
}
