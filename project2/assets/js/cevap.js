//Theme switcher
function switchTheme() {
  var body = document.body;
  var navbar = document.querySelector('.navbar');
  var themeSwitcher = document.getElementById('themeSwitcher');

  body.classList.toggle('dark-theme');
  navbar.classList.toggle('dark-theme');

  // Toggle font size if needed
  body.classList.toggle('large-font');

  // Update button text based on the current theme
  if (body.classList.contains('dark-theme')) {
      themeSwitcher.textContent = 'White Mode';
  } else {
      themeSwitcher.textContent = 'Dark Mode';
  }
}


//INTERACTIVE GALLERY

function openModal(imageSrc, captionText) {
  var modal = document.getElementById("modal");
  var modalImg = document.getElementById("modal-image");
  var caption = document.getElementById("caption");

  modal.style.display = "block";
  modalImg.src = imageSrc;
  caption.innerHTML = captionText;
}

function closeModal() {
  var modal = document.getElementById("modal");
  modal.style.display = "none";
}


//edit i delete


function editItem(itemId) {
  var newText = prompt("Enter new text:");
  if (newText !== null) {
      document.getElementById(itemId).textContent = newText;
      alert("Edit success!");
  }
}

function deleteItem(itemId) {
  var confirmation = confirm("Are you sure you want to delete this item?");
  if (confirmation) {
      document.getElementById(itemId).remove();
      alert("Delete success!");
  }
}

/*  CONTENT TOGGLE */

function toggleContent() {
  var content = document.querySelector('.citat p');
  var button = document.getElementById('toggleButton');

  if (content.style.display === "none") {
      content.style.display = "block";
      button.textContent = "Hide Content";
  } else {
      content.style.display = "none";
      button.textContent = "Show Content";
  }
}