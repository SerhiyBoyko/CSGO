// tabs

let tabLinks = document.querySelectorAll(".tabs__link");
let tabContent = document.querySelectorAll(".tabcontent");

tabLinks.forEach(function(el) {
   el.addEventListener("click", openTabs);
});

function openTabs(el) {
   let btnTarget = el.currentTarget;
   let tab = btnTarget.dataset.tab;

   tabContent.forEach(function(el) {
      el.classList.remove("active");
   });

   tabLinks.forEach(function(el) {
      el.classList.remove("active");
   });

   document.querySelector("#" + tab).classList.add("active");
   
   btnTarget.classList.add("active");
}



document.addEventListener('readystatechange', event => {
    if (event.target.readyState === "complete") {
        let clockdiv = document.getElementsByClassName("clock");
        let countDownDate = new Array();
        for (let i = 0; i < clockdiv.length; i++) {
            countDownDate[i] = new Array();
            countDownDate[i]['el'] = clockdiv[i];
            countDownDate[i]['time'] = new Date(clockdiv[i].getAttribute('data-date')).getTime();
            countDownDate[i]['hours'] = 0;
            countDownDate[i]['minutes'] = 0;
        }
      
        let countdownfunction = setInterval(function() {
            for (let i = 0; i < countDownDate.length; i++) {
                let now = new Date().getTime();
                let distance = countDownDate[i]['time'] - now;
                countDownDate[i]['hours'] = Math.floor((distance / (1000 * 60 * 60 )));
                countDownDate[i]['minutes'] = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

                if (distance < 0) {
                   countDownDate[i]['el'].querySelector('.hours').innerHTML = 0;
                   countDownDate[i]['el'].querySelector('.minutes').innerHTML = 0;
                }else{
                   countDownDate[i]['el'].querySelector('.hours').innerHTML = countDownDate[i]['hours'];
                   countDownDate[i]['el'].querySelector('.minutes').innerHTML = countDownDate[i]['minutes'];
                }
            }
        }, 1000);
    }
});


