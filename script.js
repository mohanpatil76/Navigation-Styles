let langBtnArr = document.querySelectorAll(".button");
let cardsArr = document.querySelectorAll(".card");

for (let i = 0; i < langBtnArr.length; i++) {
    langBtnArr[i].addEventListener("click", async event => {
        langBtnArr[i].classList.add("clickAnimate");
        setTimeout(function(){
            langBtnArr[i].classList.remove("clickAnimate");
        }, 1000);
        if (!navigator.clipboard) {
            // If clipboard API not available
            return
        }
        let token = langBtnArr[i].getAttribute("cardToken");
        let lang = langBtnArr[i].classList[1];
        let text = getText(token, lang);
        try {
            await navigator.clipboard.writeText(text);
        } catch (err) {
            console.error('Failed to copy!', err)
        }
    })
}

function getText(token, lang) {
    let text;
    for (let i = 0; i < code.length; i++) {
        let codeToken = code[i].cardToken;
        if (token == codeToken) {
            text = code[i][lang];
        }
    }
    return text;
}

let observer = new IntersectionObserver(handleIntersection);
for(let i =0; i < cardsArr.length; i++){
    observer.observe(cardsArr[i]);
}

function handleIntersection(cardsArr) {
    cardsArr.map((card) => {
      if (card.isIntersecting) {
        card.target.classList.add('visible')
      } else {
        card.target.classList.remove('visible')
      }
    });
  }