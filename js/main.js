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

  const generateTabMatrix = controlsArr => {
    tabMatrix = [];
    controlsArr.map(tabControl => {
      let controls = new Tab(tabControl);
      tabMatrix.push(controls);
    });
    return tabMatrix;
  };

  const stateMatrix = {
    tabMatrix: [],

    clearMatrix() {
      this.tabMatrix.forEach(e => {
        e.state = false;
        // log(e.card);
        e.card.classList.remove("active");
      });
    },
    changeFieldState(field) {
      return !field;
    },
    activateField(selectedFieldName) {
      this.tabMatrix.forEach(tabField => {
        if (tabField.name === selectedFieldName) {
          tabField.state = this.changeFieldState(tabField.state);
          //log(selectedFieldName);
          //log(tabField.card);
          tabField.card.classList.toggle("active");
        }
      });
    },
    selectOne(selectedFieldName) {
      this.clearMatrix();
      this.activateField(selectedFieldName);
    },
    selectMany(selectedFieldName) {
      this.activateField(selectedFieldName);
    },

    set setDB(db) {
      this.tabMatrix = db;
      //log(this.tabMatrix);
    }
  };

  const tabsActivator = () => {
    let tabControls = [...document.querySelectorAll("[aria-controls]")];
    let tabArray = generateTabMatrix(tabControls);
    stateMatrix.setDB = tabArray;
    log(stateMatrix.tabMatrix);

    tabControls.forEach(tabControl => {
      tabControl.addEventListener("click", e => {
        let card = e.target.parentNode;
        //let selectedTab = e.target.getAttribute("aria-controls");
        // card.classList.toggle("active");
        stateMatrix.selectOne(e.target.getAttribute("aria-controls"));
      });
    });
  };

  tabsActivator();
});
