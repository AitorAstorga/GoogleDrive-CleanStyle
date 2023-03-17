// ==UserScript==
// @name         Google Drive - Clean Style
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Reduce card margin: Set the margin of the cards in the grid view of the files to 1px. Modify background colours: Less blue, cleaner white background.
// @author       Aitor Astorga Saez de Vicuña
// @match        https://drive.google.com/drive/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var colorSurface1 = "#ffffff"; //f7f7f7
    var colorSurface2 = "#f7f7f7";

    setInterval(function() {
        // Check if current page is on drive.google.com and .gudAKb class exists
        if (window.location.hostname === 'drive.google.com' && document.querySelector('.gudAKb')) {
            var elements = document.querySelectorAll('.s55KNe .gudAKb');
            for (var i = 0; i < elements.length; i++) {
              elements[i].style.setProperty('margin', '1px', 'important');
            }

            // Replace styles
            var css = '.vhoiae.KkxPLb {--dt-surface1: ' + colorSurface1 + ' !important; --dt-surface2: ' + colorSurface2 + '  !important;}';
            var style = document.createElement('style');
            style.appendChild(document.createTextNode(css));
            document.head.appendChild(style);

            // Modify background color of search bar and buttons
            var searchStyle = document.createElement('style');
            searchStyle.appendChild(document.createTextNode('#gb form[role="search"]:not(:focus-within), #gb .a-WErN3d-OEtP0:not(:focus-within) { background: var(--dt-surface3,#fff) !important;}'));
            document.head.appendChild(searchStyle);

            // Log a message to the console to confirm that the code has executed
            console.log('Margin updated successfully');
        }
    }, 500);
})();
