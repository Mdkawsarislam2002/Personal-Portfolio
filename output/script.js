// =========================   Pre-Loader  start ==================================== //
let preLoader = document.querySelector("#loader");
window.addEventListener("load", () => {
  preLoader.style.display = "none";
});
// =========================   Pre-Loader   end ====================================
// =========================   Menu bar  start====================================
let mobilMenuContent = document.getElementById("mobile-content");
let mobileMenuBtn = document.getElementById("mobile-icon");

mobileMenuBtn.addEventListener("click", () => {
  mobilMenuContent.classList.toggle("toggle");
});

// =========================   Menu bar  End  ====================================

const ResumeBtn = document.getElementById("ResumeBtn");
ResumeBtn.addEventListener("click", (tag) => {
  tag.preventDefault();
  alert("Sorry , Look's LIke Resume Is Not available Right Now ");
});
