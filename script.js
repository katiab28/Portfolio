const arrow = document.querySelector(".arrow");
const hero = document.querySelector(".hero");

const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll("#navbar a");

const nav = document.getElementById("navbar");
const allSections = document.querySelectorAll("section");

/*gestione sezioni al click della navbar*/
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    setTimeout(() => {
      revealSections();
    }, 500);
  });
});

//gestione modale
function openModal(videoUrl) {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("modalVideo");
  //const video = document.getElementById("projectVideo");
  //const source = document.getElementById("videoSource");
  
  //source.src = videoSrc;
  iframe.src = videoUrl;
  //video.load(); // aggiorna il video

  modal.style.display = "block";
}

function closeModal() {
  const modal = document.getElementById("videoModal");
  const iframe = document.getElementById("modalVideo");
  //const video = document.getElementById("projectVideo");

  iframe.src = ""; // ferma il video
  modal.style.display = "none";
  //video.pause(); // ferma il video quando chiudi
}


// scroll verso il basso
function scrollToContent() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth",
    block: "start"
  });

 // attiva animazione anche dopo click
  setTimeout(() => {
    revealSections();
  }, 500);
}


//comparsa sezioni
function revealSections() {
  const triggerTop = window.innerHeight * 0.8;
  const triggerBottom = window.innerHeight * 0.2;


  allSections.forEach(section => {
    const rect = section.getBoundingClientRect();

    if (rect.top < triggerTop && rect.bottom > triggerBottom) {
      section.classList.add("show");
    } else{
      section.classList.remove("show");
    }
  });
}

/*freccia animata*/
setTimeout(() => {
  arrow.classList.add("show", "bounce");
}, 2000);

// navbar appare quando scrolli
window.addEventListener("scroll", () => {

  //altezza hero
  const heroHeight = hero.offsetHeight;

  //freccia scompare quando la hero esce
  if(window.scrollY > 80){
    arrow.classList.add("hide");
  } else {
    arrow.classList.remove("hide");
  }

  //navbar che compare quando esco dalla hero
  if (window.scrollY > heroHeight - 120) {
    nav.classList.add("visible");
  } else {
    nav.classList.remove("visible");
  }


  //navbar dinamica
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    
    if (window.scrollY >= sectionTop - 150) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");

    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });

  //comparsa sezioni
  revealSections();
  
});