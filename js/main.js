$(document).ready(function() {
  const log = exprsn => {
    return console.log(exprsn);
  };

  class Tab {
    constructor(control) {
      this.control = control;
      this.name = this.control.attributes["aria-controls"].value;
      this.card = this.control.parentNode;
      this.state = this.control.attributes["aria-selected"].value;
    }
  }

  let tabArray = [];

  const tabHandler = () => {
    tabArray.map(elem => {
      //log(elem);
      // logs: {card-2: Tab}
    });
  };

  let tabControls = [...document.querySelectorAll("[aria-controls]")];

  tabControls.map(tabControl => {
    let controlName = tabControl.getAttribute("aria-controls");
    let controls = new Tab(tabControl);
    tabArray.push({ [controlName]: controls });

    tabControl.addEventListener("click", e => {
      let card = e.target.parentNode;
      let control = e.target;
      card.classList.toggle("active");
    });
  });

  let tabMatrix = [0, 0, 0, 0];

  const clearMatrix = matrix => {
    let tmpArr = [];
    matrix.forEach(elem => {
      tmpArr.push(0);
    });
    return (matrix = tmpArr);
  };

  const setActiveField = position => {
    clearMatrix(tabMatrix);
    tabMatrix[position] = 1;
    log(tabMatrix);
  };

  log(tabMatrix);
  setActiveField(2);
  setActiveField(3);
  setActiveField(1);

  tabHandler();
});
