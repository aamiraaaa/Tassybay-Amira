function calculateSavings() {

    let income = parseFloat(document.getElementById("income").value);
    let percent = parseFloat(document.getElementById("percent").value);
    let goal = parseFloat(document.getElementById("goal").value);

    if (!income || !percent || !goal) {
        document.getElementById("result").innerText = "Please enter valid numbers.";
        return;
    }

    let monthlySavings = income * (percent / 100);

    let monthsNeeded = Math.ceil(goal / monthlySavings);

    document.getElementById("result").innerHTML =
        "You save ₸" + monthlySavings.toFixed(2) + " per month.<br>" +
        "To reach ₸" + goal + " you need about " + monthsNeeded + " months.";
}
