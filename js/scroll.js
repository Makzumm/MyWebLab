window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 80 != document.documentElement.scrollTop > 80) {
      document.querySelector(".header__logo").style.fontSize = "20px";
  } else {
      document.querySelector(".header__logo").style.fontSize = "40px";
  }
}

const headerLinkOne = document.querySelector(".header-list__link-one");
const headerLinkTwo = document.querySelector(".header-list__link-two");
const headerLinkThree = document.querySelector(".header-list__link-three");

const addClassOne = () => headerLinkOne.classList.add("is-hidden");
const removeClassOne = () => headerLinkOne.classList.remove("is-hidden");

const addClassTwo = () => headerLinkTwo.classList.add("is-hidden");
const removeClassTwo = () => headerLinkTwo.classList.remove("is-hidden");

const addClassThree = () => headerLinkThree.classList.add("is-hidden");
const removeClassThree = () => headerLinkThree.classList.remove("is-hidden");

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (document.body.scrollTop > 80 != document.documentElement.scrollTop > 80) { addClassOne() }
  else { removeClassOne() }
  
})

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (document.body.scrollTop > 80 != document.documentElement.scrollTop > 80) { addClassTwo() }
  else { removeClassTwo() }
  
})

window.addEventListener('scroll', function() { 
  scrollpos = window.scrollY;

  if (document.body.scrollTop > 80 != document.documentElement.scrollTop > 80) { addClassThree() }
  else { removeClassThree() }
  
})