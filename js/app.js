class Dropdown {
  constructor() {
    const dropBtn = document.getElementById("dropBtn");
    const dropdownContent = document.getElementById("dropdownContent");    

    dropdownContent.style.display = "none";

    this.showMenu();
    this.hideMenu();
    this.showAcordion();
    this.showModal();
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
    const btnAcordion = document.getElementById("btnAcordion");
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

  showModal() {
    const btnModal = document.querySelector(".btnModal");
    const btnClose = document.querySelector(".close");
    const modalWindow = document.querySelector(".modalWindow");

    btnModal.addEventListener("click", () => {
      modalWindow.style.display = "block";
    });

    btnClose.addEventListener('click', () => {
      modalWindow.style.display = "none"
    })
  }
}

new Dropdown();
