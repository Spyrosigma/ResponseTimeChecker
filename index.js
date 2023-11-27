let myTimer = setInterval(counter, 1000);
let count = Math.floor((Math.random() * 5) + 3);
function counter() {
    count -= 1
    // document.getElementById('counter').innerHTML = count;
    if (count == 0) {
        clearInterval(myTimer);
        let startTime = performance.now();
        document.getElementById('myButton').style.backgroundColor = "rgb(0, 243, 252)";

        let click_count = 0;
        document.getElementById('myButton').onclick = function () {
            let endtime = performance.now();
            let time_taken = endtime -  startTime;
            document.getElementById('temp_converted').innerHTML = time_taken/1000 + ' Seconds ! ';
            click_count += 1;

            if (click_count % 2) {
                document.getElementById('myButton').style.backgroundColor = "rgb(22, 252, 53)";
            }
            else {
                document.getElementById('myButton').style.backgroundColor = "rgb(0, 243, 252)";
            }
        }
    }
}

