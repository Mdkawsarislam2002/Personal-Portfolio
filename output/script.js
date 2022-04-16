{
  // =========================   Pre-Loader   ==================================== //
  let preLoader = document.querySelector("#loader");
  window.addEventListener("load", () => {
    preLoader.style.display = "none";
  });

  let mobilMenuContent = document.getElementById("mobile-content");
  let mobileMenuBtn = document.getElementById("mobile-icon");

  mobileMenuBtn.addEventListener("click", () => {
    mobilMenuContent.classList.toggle("toggle");
  });
}
const ResumeBtn = document.getElementById("ResumeBtn");
ResumeBtn.addEventListener("click", (tag) => {
  tag.preventDefault();
  alert("Sorry , Look's LIke Resume Is Not available Right Now ");
});
