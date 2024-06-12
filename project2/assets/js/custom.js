$(document).ready(function() {
  $("main#spapp > section").height($(document).height() - 60);

  var app = $.spapp({
      defaultView: "#homepage",
      templateDir: "./tpl/",
      pageNotFound: "error_404"
  });

  app.route({
      view: 'homepage',
      load: 'homepage.html',
      onReady: function() {
          document.getElementById('viewMoreBtn').addEventListener('click', function() {
              window.location.hash = '#porcije';
          });
      }
  });

  //I OVO JE DATA DRIVEN CONTENT

  app.route({
    view: 'porcije',
    load: 'porcije.html',
    onReady: function() {
        $.ajax({
            url: 'data/products.json',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                var productList = $('#productList');
                productList.empty();
                data.forEach(function(product) {
                    productList.append('<div class="product-item"><h3>' + product.name + '</h3><p>' + product.description + '</p><p><b>' + product.price + '</b></p></div>');
                });
            }
        });

        // OVO JE DATA DRIVEN CONTENT
        $(document).ready(function() {
          // OVO BRISE KONTENT KAD SE RELOADA
          $('.platemeso').empty();
          
          $.ajax({
              url: 'data/jedan.json',
              dataType: 'json',
              success: function(data) {
                  $.each(data.plates, function(index, plate) {
                      var plateHtml = '<div class="platasve" style="font-weight: bold; font-size: 32px;">' + plate.name + ' ' + plate.price  + '</div>';
                      $('.platemeso').append(plateHtml);
                  });
              }
          });
      });
      
    }
});

// VALIDACIJA FORME I TOASTR I PASSWORD STRENGTH

  app.route({
      view: 'forma',
      load: 'forma.html',
      onReady: function() {
          $('#contactForm').validate({
              rules: {
                  prvoime: "required",
                  lastnejm: "required",
                  email: {
                      required: true,
                      email: true
                  },
                  password: {
                      required: true,
                      minlength: 6
                  }
              },
              messages: {
                  prvoime: "Please enter your first name",
                  lastnejm: "Please enter your last name",
                  email: "Please enter a valid email address",
                  password: {
                      required: "Please provide a password",
                      minlength: "Your password must be at least 6 characters long"
                  }
              },
              submitHandler: function(form) {
                // OVO ISPOD JE TOASTR PORUKA
                  setTimeout(function() {
                      toastr.success('Form submitted successfully!');
                      $('#contactForm')[0].reset();
                  }, 500);
              }
          });

          // OVO JE PASSWORD STRENGTH INDICATOR
          document.getElementById("password").addEventListener("input", function () {
              const strengthIndicator = document.getElementById("password-strength");
              const password = this.value;
              let strength = 0;

              if (password.match(/[a-z]/)) {
                  strength += 1;
              }
              if (password.match(/[A-Z]/)) {
                  strength += 1;
              }
              if (password.match(/[0-9]/)) {
                  strength += 1;
              }
              if (password.match(/[$@#!%*?&]/)) {
                  strength += 1;
              }

              strengthIndicator.style.width = strength * 25 + "%";

              if (strength === 0) {
                  strengthIndicator.className = "";
                  strengthIndicator.style.width = "0%";
              } else if (strength === 1) {
                  strengthIndicator.className = "strength-weak";
              } else if (strength === 2) {
                  strengthIndicator.className = "strength-medium";
              } else if (strength >= 3) {
                  strengthIndicator.className = "strength-strong";
              }
          });
      }
  });

  // OVO JE ONAJ ACCORIDON MENU ZA FAQ

  app.route({
      view: 'pitanja',
      load: 'faq.html',
      onReady: function() {
          const accordionItems = document.querySelectorAll('.accordion-item');
          accordionItems.forEach(item => {
              item.querySelector('.accordion-item-header').addEventListener('click', function() {
                  this.nextElementSibling.classList.toggle('active');
              });
          });
      }
  });
  
  app.run();
});
