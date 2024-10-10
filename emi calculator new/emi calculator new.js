// Get the range and number inputs
const loanAmountRange = document.getElementById('loanAmountRange');
const loanAmountNumber = document.getElementById('loanAmountNumber');
const interestRateRange = document.getElementById('interestRateRange');
const interestRateNumber = document.getElementById('interestRateNumber');
const tenureRange = document.getElementById('tenureRange');
const tenureNumber = document.getElementById('tenureNumber');
const emiResult = document.getElementById('emiResult');

// Synchronize Loan Amount inputs
loanAmountRange.addEventListener('input', function() {
    loanAmountNumber.value = this.value;
});
loanAmountNumber.addEventListener('input', function() {
    if (this.value >= loanAmountRange.min && this.value <= loanAmountRange.max) {
        loanAmountRange.value = this.value;
    }
});

// Synchronize Interest Rate inputs
interestRateRange.addEventListener('input', function() {
    interestRateNumber.value = this.value;
});
interestRateNumber.addEventListener('input', function() {
    if (this.value >= interestRateRange.min && this.value <= interestRateRange.max) {
        interestRateRange.value = this.value;
    }
});

// Synchronize Tenure inputs
tenureRange.addEventListener('input', function() {
    tenureNumber.value = this.value;
});
tenureNumber.addEventListener('input', function() {
    if (this.value >= tenureRange.min && this.value <= tenureRange.max) {
        tenureRange.value = this.value;
    }
});

// EMI Calculation Formula
function calculateEMI() {
    const loanAmount = parseFloat(loanAmountNumber.value);
    const annualInterestRate = parseFloat(interestRateNumber.value);
    const tenureYears = parseFloat(tenureNumber.value);

    const monthlyInterestRate = annualInterestRate / 12 / 100;
    const numberOfMonths = tenureYears * 12;

    const emi =
        (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
        (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);

    return emi.toFixed(2); // Returns EMI rounded to two decimal places
}

// Update EMI when the button is clicked
document.getElementById('calculateEMI').addEventListener('click', function() {
    const emi = calculateEMI();
    emiResult.textContent = emi;
});
// Function to update slider background
function updateSliderBackground(slider) {
    const min = slider.min;
    const max = slider.max;
    const value = slider.value;

    const percentage = ((value - min) / (max - min)) * 100;

    slider.style.background = `linear-gradient(to right, #007bff ${percentage}%, #ddd ${percentage}%)`;
}

// Get all sliders
// const loanAmountRange = document.getElementById('loanAmountRange');
// const interestRateRange = document.getElementById('interestRateRange');
// const tenureRange = document.getElementById('tenureRange');

// Initialize the background when page loads
updateSliderBackground(loanAmountRange);
updateSliderBackground(interestRateRange);
updateSliderBackground(tenureRange);

// Update background when slider moves
loanAmountRange.addEventListener('input', function() {
    updateSliderBackground(this);
});

interestRateRange.addEventListener('input', function() {
    updateSliderBackground(this);
});

tenureRange.addEventListener('input', function() {
    updateSliderBackground(this);
});
