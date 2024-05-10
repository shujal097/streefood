let rows = document.getElementsByClassName('uprow');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        for (let row of rows) {
            row.classList.add('active');
        }
    } else {
        for (let row of rows) {
            row.classList.remove('active');
        }
    }
});

//game system
let scrval = 0;
let randomw;
 let bub = document.querySelector('.bubbles');
function bubbles(){
    
  
for(let i = 1;i<=130+10;i++){
    var rn = Math.floor(Math.random()*10)
    bub.innerHTML += `<div class="bubble">${rn}</div>`
}
}
//timer
let sec = 60;
  function timer(){
   
    if (sec>0){
        sec--;
         document.querySelector('.timer').textContent= sec;
    }else{
        clearInterval(timer);
        bub.innerHTML='<b>Game Over</b>';
    }


  }

function hits(){
    randomw = Math.floor(Math.random()*10)
    document.getElementById('hits').textContent = randomw;

}

function score(){
     
       scrval += 10;
       document.getElementById('score').textContent = scrval;
}
function wrngNum(){
     scrval -=10;
     document.getElementById('score').textContent = scrval;
}
bub.addEventListener('click',(details)=>{
         let clickNum = (Number(details.target.textContent));
         if (clickNum === randomw) {
            score();
            hits();
         }else{
             wrngNum()
         }
     });


setInterval(timer,1000);
hits();
bubbles();

