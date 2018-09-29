'use strict';

document.addEventListener('DOMContentLoaded', function() {
var menuButton = document.querySelector('.for-dropdown');
var subMenu = document.querySelector('.dropdown');
    
    menuButton.addEventListener('mouseover', function() {
        subMenu.style.display = 'block';
     });
 
    menuButton.addEventListener('mouseout', function() {
        subMenu.style.display = 'none';
      });
    
    //zadanie 2 
    
    
    function showHide(){
                var textArea = this.previousElementSibling;
        
        if (textArea.style.display === 'none' || textArea.style.display === '') {
          textArea.style.display = 'block';
            this.innerHTML = 'MNIEJ <span class="glyphicon glyphicon-chevron-up"></span>';
        } else {            
        textArea.style.display = 'none';
        this.innerHTML = 'WIĘCEJ <span class="glyphicon glyphicon-chevron-down"></span>';
        }
    }
    
    var buttons = document.querySelectorAll('.read-more');
    
 //   buttons[0].addEventListener('click', showhide);

        for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', showHide);
    }

// zadanie 3

var menuBox = document.querySelector('.navbar');

    window.addEventListener('scroll', function() {
      menuBox.style.borderBottom = '1px solid #7f7f7f';
    });
});