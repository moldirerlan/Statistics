function calculateStatistics() {
    const numbersString = document.getElementById('numbers').value;
    const numbersArray = numbersString.split(',').map(Number);
    
    // Calculate Mean
    const sum = numbersArray.reduce((acc, val) => acc + val, 0);
    const mean = sum / numbersArray.length;
    document.getElementById('mean').textContent = `Mean: ${mean.toFixed(2)}`;

    // Calculate Confidence Interval (assuming a normal distribution)
    const stdDeviation = calculateStandardDeviation(numbersArray, mean);
    const stdError = stdDeviation / Math.sqrt(numbersArray.length);
    const confidenceMultiplier = 1.96; // for a 95% confidence interval
    const marginOfError = confidenceMultiplier * stdError;
    const confidenceInterval = [mean - marginOfError, mean + marginOfError];
    document.getElementById('confidenceInterval').textContent = `95% Confidence Interval: [${confidenceInterval[0].toFixed(2)}, ${confidenceInterval[1].toFixed(2)}]`;
}

function calculateStandardDeviation(array, mean) {
    const sumOfSquares = array.reduce((acc, val) => acc + Math.pow(val - mean, 2), 0);
    return Math.sqrt(sumOfSquares / (array.length - 1));
}
