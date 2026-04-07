function startCountdown() {
    let num = parseInt(document.getElementById("numberInput").value);
    let resultDiv = document.getElementById("result");

    if (isNaN(num) || num < 1) {
        resultDiv.innerHTML = "Please enter a valid number!";
        return;
    }

    resultDiv.innerHTML=num;

    let interval = setInterval(() => {
        num--;

        if (num >= 1) {
            resultDiv.innerHTML = num;
        } else {
            resultDiv.innerHTML = "Done";
            clearInterval(interval);
        }
    }, 1000);
}