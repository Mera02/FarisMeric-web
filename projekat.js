function showSidebar(){
    const sidebar = document.querySelector('#sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('#sidebar')
    sidebar.style.display = 'none'
}


function switcher() {
    var body = document.body;
    var modeToggle = document.getElementById('mode-toggle');
    var newArrivalsText = document.querySelector('.okololijevo h2');
    var newArrivalsButton = document.querySelector('.okololijevo button');
    var info1 = document.querySelector('.cetslika1 .info h2');
    var info2 = document.querySelector('.cetslika2 .info h2');
    var info3 = document.querySelector('.cetslika3 .info h2');
    var info1p = document.querySelector('.cetslika1 .info .ncijena');
    var info2p = document.querySelector('.cetslika2 .info .ncijena');
    var info3p = document.querySelector('.cetslika3 .info .ncijena');
    var infobutton1 = document.querySelector('.cetslika1 .info button');
    var infobutton2 = document.querySelector('.cetslika2 .info button');
    var infobutton3 = document.querySelector('.cetslika3 .info button');
    var meniItems = document.querySelectorAll('.meniitem');
    var navInput = document.querySelector('.navbar form .navbarinput input');
    var navButton = document.querySelector('.navbar form .navbarinput button');
    var formLabels = document.querySelectorAll('#formacijela label');
    var formInputs = document.querySelectorAll('#formacijela input, #formacijela textarea');
    var formButton = document.querySelector('#formacijela button');
    var kontakt = document.querySelector('.kontakt h2');
    var kontaktParagraphs = document.querySelectorAll('.kontakt p'); // Select all paragraphs within the .kontakt div

    body.classList.toggle('white-mode');
    modeToggle.checked = !modeToggle.checked;

    if (body.classList.contains('white-mode')) {

        meniItems.forEach(function(item) {
            item.style.color = 'lightblue';
        });

        // Set styles for all paragraphs within .kontakt div
        kontaktParagraphs.forEach(function(paragraph) {
            paragraph.style.color = 'black';
        });

        newArrivalsText.style.color = 'black';
        newArrivalsButton.style.backgroundColor = 'black';
        newArrivalsButton.style.borderColor = 'black';
        info1.style.color = 'black';
        info2.style.color = 'black';
        info3.style.color = 'black';
        info1p.style.color = 'black';
        info2p.style.color = 'black';
        info3p.style.color = 'black';
        infobutton1.style.color = 'black';
        infobutton2.style.color = 'black';
        infobutton3.style.color = 'black';
        infobutton1.style.borderColor = 'black';
        infobutton2.style.borderColor = 'black';
        infobutton3.style.borderColor = 'black';
        navInput.style.borderColor = 'lightblue';
        navButton.style.color = 'lightblue';
        navButton.style.borderColor = 'lightblue';
        kontakt.style.color = 'black';

        formLabels.forEach(function(label) {
            label.style.color = 'black';
        });

        formInputs.forEach(function(input) {
            input.style.borderColor = 'black';
        });

        formButton.style.color = 'black';
        formButton.style.borderColor = 'black';

    } else {

        meniItems.forEach(function(item) {
            item.style.color = 'white';
        });

        kontakt.style.color = 'white';

        // Set styles for all paragraphs within .kontakt div
        kontaktParagraphs.forEach(function(paragraph) {
            paragraph.style.color = 'white';
        });

        newArrivalsText.style.color = 'white';
        newArrivalsButton.style.backgroundColor = 'transparent';
        newArrivalsButton.style.borderColor = 'white';
        info1.style.color = 'white';
        info2.style.color = 'white';
        info3.style.color = 'white';
        info1p.style.color = 'white';
        info2p.style.color = 'white';
        info3p.style.color = 'white';
        infobutton1.style.color = 'white';
        infobutton2.style.color = 'white';
        infobutton3.style.color = 'white';
        infobutton1.style.borderColor = 'white';
        infobutton2.style.borderColor = 'white';
        infobutton3.style.borderColor = 'white';
        navInput.style.borderColor = 'white';
        navButton.style.color = 'white';
        navButton.style.borderColor = 'white';

        formLabels.forEach(function(label) {
            label.style.color = 'white';
        });

        formInputs.forEach(function(input) {
            input.style.borderColor = 'white';
        });

        formButton.style.color = 'white';
        formButton.style.borderColor = 'white';
    }
}



document.addEventListener("DOMContentLoaded", function() {
    // Get all product images
    var productImages = document.querySelectorAll('.product-image');

    // Add click event listener to each image
    productImages.forEach(function(image) {
        image.addEventListener('click', function() {
            var largeImageSrc = this.src; // Get the source of the clicked image
            showLargeImage(largeImageSrc); // Call function to display large image
        });
    });

    // Function to display large image in overlay
    function showLargeImage(src) {
        var overlay = document.getElementById('overlay');
        var largeImage = document.getElementById('large-image');
        largeImage.src = src; // Set the source of the large image to the clicked image source
        overlay.style.display = 'flex'; // Show overlay
    }

    // Hide overlay when clicking outside of the large image
    var overlay = document.getElementById('overlay');
    overlay.addEventListener('click', function(e) {
        if (e.target === this) {
            this.style.display = 'none';
        }
    });
});


/* pocinjemo sa view more */

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('moredetails1').addEventListener('click', function() {
        // Redirect to the details page
        window.location.href = 'details1.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('moredetails2').addEventListener('click', function() {
        // Redirect to the details page
        window.location.href = 'details2.html';
    });
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('moredetails3').addEventListener('click', function() {
        // Redirect to the details page
        window.location.href = 'details3.html';
    });
});
