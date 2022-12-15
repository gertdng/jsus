var diceeplayer1=Math.floor(Math.random() * 6) + 1
var diceeplayer2=Math.floor(Math.random() * 6) + 1


document.querySelector('.img1').setAttribute('src', 'images/dice'+diceeplayer1+'.png')
document.querySelector('.img2').setAttribute('src', 'images/dice'+diceeplayer2+'.png')

if(diceeplayer1>diceeplayer2){document.querySelector('h1').innerText="🚩player 1 win "}
if(diceeplayer2>diceeplayer1){document.querySelector('h1').innerText="player 2 win 🚩"}
if(diceeplayer2===diceeplayer1){document.querySelector('h1').innerText="draw"}