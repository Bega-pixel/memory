const cards = document.querySelectorAll('.memory-card');

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {

    if(lockBoard) return;

  this.classList.toggle('flip');
    if(!hasFlippedCard){
        hasFlippedCard = true;
        firstCard = this;

       // console.log({hasFlippedCard, firstCard})
    }else{
        hasFlippedCard = false;
        secondCard = this;

       // console.log({firstCard, secondCard});
       //match
       //console.log(firstCard.dataset.framework);
       //console.log(secondCard.dataset.framework);
       if(firstCard.dataset.framework === secondCard.dataset.framework){
           firstCard.removeEventListener('click', flipCard);
           secondCard.removeEventListener('click', flipCard);
       }else{
           lockBoard = true;
           setTimeout(()=> {
            firstCard.classList.remove('flip');
            secondCard.classList.remove('flip');
            lockBoard = false;
           },1500);
       }
    }
}

(function shuffle() {
    cards.forEach(card => {
      let randomPos = Math.floor(Math.random() * 12);
      card.style.order = randomPos;
    });
  })();

cards.forEach(card => card.addEventListener('click', flipCard));
