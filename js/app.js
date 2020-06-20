class Dropdown {
  constructor() {
    const dropBtn = document.getElementById("dropBtn");
    const dropdownContent = document.getElementById("dropdownContent");
    // const btnAcordion = document.getElementById("btnAcordion")
    // const acordionContent = document.getElementById("acordionContent")

    dropdownContent.style.display = "none";

    this.showMenu();
    this.hideMenu();
    this.showAcordion();
  }

  showMenu() {
    dropBtn.addEventListener("mouseover", () => {
      if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
        dropdownContent.style.transition = "display .5s easy";
        return;
      }
    });
  }

  hideMenu() {
    dropBtn.addEventListener("mouseout", () => {
      dropdownContent.style.display = "none";
    });
  }

  showAcordion() {
    const acordionContent = document.getElementById("acordionContent");
    const menuAcordion = document.getElementById("menuAcordion");

    menuAcordion.addEventListener("click", (e) => {
      // console.log(e)

      let sibling = e.target.nextElementSibling;

      if (sibling.style.display === "block") {
        sibling.style.display = "none";
      } else {
        sibling.style.display = "block";
      }
    });
  }
}

new Dropdown();
