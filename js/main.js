$(document).ready(function () {
  const log = exprsn => {
    return console.log(exprsn);
  };

  let tabControls = [...document.querySelectorAll('[aria-controls]')];

  tabControls.map(tabControl => {
    tabControl.addEventListener("click", e => {
      let card = e.target.parentNode;
      let control = e.target;
      card.classList.toggle("active")
    })
  })
});