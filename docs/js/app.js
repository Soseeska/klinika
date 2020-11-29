let regBtn = document.getElementById("regbtn");
regBtn.addEventListener("click", function(){
    let modal = document.getElementById("registration");
    modal.style.display = "block";
})

let closeBtn = document.getElementById("close");
closeBtn.addEventListener("click", function(){
  let registration = document.getElementById("registration");
    registration.style.display = "none";
})

let modal = document.getElementById("registration");
window.onclick = (e)=>{
    if (e.target == modal){
        modal.style.display = "none";
        let inputs = document.querySelectorAll('input');
        for (let input of inputs) {
            input.value = '';
        };
    }
}

