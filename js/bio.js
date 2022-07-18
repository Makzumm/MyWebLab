(() => {
  const bioOpen = document.querySelector("[data-modal-open]");
  const bioModal = document.querySelector("[data-modal]");
  const bodyClassToggle = document.querySelector("body");

    bioOpen.addEventListener("click", () => {
      
    bioModal.classList.toggle("is-invisible");

    bodyClassToggle.classList.toggle("body-modal-open");
    
  });
})();

(() => {
    const bioClose = document.querySelector("[data-modal-close]");
    const bioModal = document.querySelector("[data-modal]");
    const bodyClassToggle = document.querySelector("body");


    bioClose.addEventListener("click", () => {
      
    bioModal.classList.toggle("is-invisible");

    bodyClassToggle.classList.toggle("body-modal-open");
    
  });

})();