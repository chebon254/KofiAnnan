//Create A Responsive Menu Hide Show Side Menu
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const menu = document.querySelector(".links");
// Onclick For Menu Bar
menuBtn.onclick = ()=>{
    menu.classList.add("active");
    menuBtn.classList.add("hide");
}

// Onclick For Cancel Menu 
cancelBtn.onclick = ()=>{
    menu.classList.remove("active");
    menuBtn.classList.remove("hide");
}

/* === Overlay === */
// Select the element you want to listen to
const expert_member = document.getElementById('expert-btn');
const expert_member_close = document.getElementById('cancel-expert');

// Add an event listener to the element
expert_member.addEventListener('click', () => {
  document.getElementById("single-overlay").style.display = "block";
});

// Add an event listener to the element
expert_member_close.addEventListener('click', () => {
  document.getElementById("single-overlay").style.display = "none";
});

/* === ||Overlay === */