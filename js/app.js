class Dropdown {
  constructor() {
    const dropBtn = document.getElementById("dropBtn");
    const dropdownContent = document.getElementById("dropdownContent");

    dropdownContent.style.display = "none";

    this.show();
    this.hide();
  }

  show() {
    dropBtn.addEventListener("mouseover", () => {
      if (dropdownContent.style.display === "none") {
        dropdownContent.style.display = "block";
        dropdownContent.style.transition = "display .5s easy"
        return;
      }
    });
  }

  hide() {
    dropBtn.addEventListener("mouseout", () => {
      dropdownContent.style.display = "none";
    });
  }
}

new Dropdown();
