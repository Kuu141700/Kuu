var images = document.querySelectorAll(".image-caption-container img");
var modal = document.getElementById("imageModal");
var modalImg = document.getElementById("img01");
var span = document.getElementsByClassName("close")[0];

images.forEach((img) => {
  img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
  };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside the image
modal.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Keyboard support for closing modal (Escape key)
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && modal.style.display === "block") {
    modal.style.display = "none";
  }
});
