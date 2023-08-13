const cards = ["Guadalupe", "Ollie", "Aki"];

function writeCards(cards) {
const newCards=[]
  for (let i = 0; i < cards.length; i++) {
    newCards.push(`Thank you, ${cards[i]}, for the wonderful surprise gift!`);
    }
    return newCards;
}
writeCards(cards);


function countDown() { 
    let counDwn = 10;
    while (counDwn > -1){
        console.log(counDwn--)
    }}
   

    
