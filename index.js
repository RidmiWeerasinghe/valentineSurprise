const btnYes = document.getElementById("btn-yes")
const btnNo = document.getElementById("btn-no")
const mainContainer = document.getElementById("main-container")
let count = -1

const no = ["come on...🥰","Just once?😙","Try meeee!🥰", "Pretty pleasee😋", "Just once?😚","You're gonna say YES😍"]

btnYes.addEventListener("click", function(){
    console.log("Yes btn clicked")
    mainContainer.innerHTML = `
    <img src="assets/kisses.gif" class="img-kisses"/>
    <h2>Love youuuu ❤️!</h2>`
    yesMp3.play()
})
btnNo.addEventListener("click",function(){
    if(count === 5){
        btnNo.hidden = true
    }
    count++
    btnNo.textContent = no[count]
    increaseBtnSize()
    
})

function increaseBtnSize(){
   let currentH = window.getComputedStyle(btnYes,null).getPropertyValue("height")
   let currentFS = window.getComputedStyle(btnYes,null).getPropertyValue("font-size")
   let increasedH = parseFloat(currentH) + 50
   let increasedFS = parseFloat(currentFS) + 10

   btnYes.style.height = increasedH+"px"
   btnYes.style.width = increasedH+"px"
   btnYes.style.fontSize = increasedFS+"px"
}

//sound
function sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }
}
const yesMp3 = new sound("./assets/won.mp3")