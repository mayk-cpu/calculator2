
            let clickSound = new Audio("click.mp3");
            function toggleTheme() {
                document.body.classList.toggle("dark");

                if (document.body.classList.contains("dark")){
                    localStorage.setItem("theme", "dark");
                } else {
                    localStorage.setItem("theme", "light");
                }
            }
            function addNumber(number) {
                clickSound.currentTime = 0;
                if (window.innerWidth > 768){
                    clickSound.play();
                }
               let display = document.getElementById("display");
               if (display.value.length >= 16) {
                return;
               }
               let lastChar = display.value.slice(-1);

               if (
                display.value === ""
                &&
                (number === "+" || number === "*" || number === "/")
               )
               {
                return;
               }

               if (
                (number === "+" || number === "-" || number === "*" || number === "/")
                &&
                (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/")
               ) {
                return;
               }
               if (number === ".") {
                let parts = display.value.split(/[\+\-\*\/]/);
                let lastPart = parts[parts.length - 1];

                if (lastPart.includes(".")) {
                    return;
                }
               }
               display.value += number;
            }
            function calculate () {
                try {
                     let expression = document.getElementById("display").value;
                     let result = eval(expression);
                     document.getElementById("display").value = result;
                     let historyItem = document.createElement ("p");
                     historyItem.innerText = expression + " = " + result;
                     document.getElementById("history").appendChild(historyItem);
                     let history = document.getElementById("history");

                     while (history.children.length > 11) {
                        history.removeChild(history.children[1]);
                     }
                     localStorage.setItem("history", history.innerHTML);
                     
                } catch {
                    let display = document.getElementById("display");
                        display.value = "Ошибка";
                        display.classList.add("error");
                        setTimeout(() => {
                            display.classList.remove("error");
                        }, 300);
                }               
            }
            function percent () {
                    let display = document.getElementById("display");
                    try {
                        display.value = eval(display.value) / 100;
                    } catch {
                        let display = document.getElementById("display");
                        display.value = "Ошибка";
                        display.classList.add("error");
                        setTimeout(() => {
                            display.classList.remove("error");
                        }, 300);
                    }
                }
            function clearDisplay () {
                document.getElementById ("display").value = "";
            }      
            function clearHistory () {
                document.getElementById("history").innerHTML = "<h3>История</h3>";

                 localStorage.removeItem("history");
            }  
            function deleteLast (){
                let current = document.getElementById ("display").value;
                document.getElementById ("display").value = current.slice(0,-1);
            }
            document.addEventListener("keydown", function(event) {
                if (!isNaN(event.key) || event.key ==="+" || event.key === "-" || event.key === "*" || event.key ===  "/" || event.key === "." || event.key === "(" || event.key === ")") {
                    addNumber(event.key);
                }
                if (event.key === "Enter") {
                    calculate();
            }
            if (event.key === "Backspace") {
                deleteLast();
            }
            if (event.key === "Escape") {
                clearDisplay ();
            }
        });
        let savedHistory = localStorage.getItem("history");
        
        if (savedHistory) {
            document.getElementById("history").innerHTML = savedHistory;
        }
        let savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark");
        }
        function changeSign() {
            let display = document.getElementById("display");

            if (display.value !== "") {
                display.value = Number(display.value) * -1;
            }
        }
        if ("serviceWorker" in navigator){
            navigator.serviceWorker.register("service-worker.js")
            .then(() => console.log("Service Worker registered"));
        }

            let clickSound = new Audio("click.mp3");
            function toggleTheme() {
                document.body.classList.toggle("dark");

                if (document.body.classList.contains("dark")){
                    localStorage.setItem("theme", "dark");
                } else {
                    localStorage.setItem("theme", "light");
                }
            }
            function addNumber(number) {
                clickSound.currentTime = 0;
                if (window.innerWidth > 768){
                    clickSound.play();
                }
               let display = document.getElementById("display");
               if (display.value.length >= 16) {
                return;
               }
               let lastChar = display.value.slice(-1);

               if (
                display.value === ""
                &&
                (number === "+" || number === "*" || number === "/")
               )
               {
                return;
               }

               if (
                (number === "+" || number === "-" || number === "*" || number === "/")
                &&
                (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/")
               ) {
                return;
               }
               if (number === ".") {
                let parts = display.value.split(/[\+\-\*\/]/);
                let lastPart = parts[parts.length - 1];

                if (lastPart.includes(".")) {
                    return;
                }
               }
               display.value += number;
            }
            function calculate () {
                try {
                     let expression = document.getElementById("display").value;
                     let result = eval(expression);
                     document.getElementById("display").value = result;
                     let historyItem = document.createElement ("p");
                     historyItem.innerText = expression + " = " + result;
                     document.getElementById("history").appendChild(historyItem);
                     let history = document.getElementById("history");

                     while (history.children.length > 11) {
                        history.removeChild(history.children[1]);
                     }
                     localStorage.setItem("history", history.innerHTML);
                     
                } catch {
                    let display = document.getElementById("display");
                        display.value = "Ошибка";
                        display.classList.add("error");
                        setTimeout(() => {
                            display.classList.remove("error");
                        }, 300);
                }               
            }
            function percent () {
                    let display = document.getElementById("display");
                    try {
                        display.value = eval(display.value) / 100;
                    } catch {
                        let display = document.getElementById("display");
                        display.value = "Ошибка";
                        display.classList.add("error");
                        setTimeout(() => {
                            display.classList.remove("error");
                        }, 300);
                    }
                }
            function clearDisplay () {
                document.getElementById ("display").value = "";
            }      
            function clearHistory () {
                document.getElementById("history").innerHTML = "<h3>История</h3>";

                 localStorage.removeItem("history");
            }  
            function deleteLast (){
                let current = document.getElementById ("display").value;
                document.getElementById ("display").value = current.slice(0,-1);
            }
            document.addEventListener("keydown", function(event) {
                if (!isNaN(event.key) || event.key ==="+" || event.key === "-" || event.key === "*" || event.key ===  "/" || event.key === "." || event.key === "(" || event.key === ")") {
                    addNumber(event.key);
                }
                if (event.key === "Enter") {
                    calculate();
            }
            if (event.key === "Backspace") {
                deleteLast();
            }
            if (event.key === "Escape") {
                clearDisplay ();
            }
        });
        let savedHistory = localStorage.getItem("history");
        
        if (savedHistory) {
            document.getElementById("history").innerHTML = savedHistory;
        }
        let savedTheme = localStorage.getItem("theme");

        if (savedTheme === "dark") {
            document.body.classList.add("dark");
        }
        function changeSign() {
            let display = document.getElementById("display");

            if (display.value !== "") {
                display.value = Number(display.value) * -1;
            }
        }
if ("serviceWorker" in navigator){
            navigator.serviceWorker.register("service-worker.js")
            .then(() => console.log("Service Worker registered"));
}
