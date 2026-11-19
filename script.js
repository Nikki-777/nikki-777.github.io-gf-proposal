//Elements
const envelope =document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn =  document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const bunnyImg = document.getElementById("letter-bunny");
const buttons =  document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

//Click Envelope

envelope.addEventListener("click",()=>{
    envelope.style.display="none";
    letter.style.display="flex";

    setTimeout( ()=>{
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

//Loic to move the NO btn
noBtn.addEventListener("mouseover",()=>{
    const min = 100;
    const max = 100;

    const distance = Math.random() * (max-min)+min;
    const angle = Math.random()*Math.PI*2;

    const moveX =  Math.cos(angle)*distance;
    const moveY = Math.sin(angle)*distance;

    noBtn.style.transition = "transform 0.2s ease";
    noBtn.style.transform= `translate(${moveX}px, ${moveY}px)`;
});
//Logic to make YES  btn grow 

//let yesScale=1;

//yesBtn.style.position = "relative"
//yesBtn.style.transformOrigin = "center center";
//yesBtn.style.transition= "transform 0.3 ease";

//noBtn.addEventListener("click", ()=> {
  //  yesScale+=2;

    //if(yesBtn.style.position !== "fixed"){
      //  yesBtn.style.position = "fixed";
        //yesBtn.style.top = "50%";
        //yesBtn.style.left = "50%";
       // yesBtn.style.transform = 'translate(-50%, -50%) scale(${yesScale})';
    //}else{
        //yesBtn.style.transform = 'translate(-50%, -50%) scale(${yesScale})';
//}
//});

//YES is clicked 

yesBtn.addEventListener("click", ()=>{
    title.textContent = "(¸,¤°´✿.｡.:* 𝖸𝖠𝖸𝖸𝖸𝖸 Ԝ𝖤'𝖱𝖤 𝖭ᝪԜ 𝖬𝖠𝖱𝖱𝖨𝖤𝖣𝖣 *.:｡.✿`°¤,¸)";

    bunnyImg.src = "bunny_dance.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display="none";

    finalText.style.display= "block";

});