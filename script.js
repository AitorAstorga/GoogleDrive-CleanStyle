// ==UserScript==
// @name         Google Drive - Clean Style
// @namespace    http://tampermonkey.net/
// @version      2.0.0
// @description  Reduce card margin: Set the margin of the cards in the grid view of the files to 1px. Modify background colours: Less blue, cleaner white background.
// @author       Aitor Astorga Saez de Vicuña
// @match        https://drive.google.com/drive/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Function to modify the styles of the specified elements
    function changeStyles(elements, styleProperties) {
        for (const element of elements) {
            for (const property in styleProperties) {
                element.style[property] = styleProperties[property];
            }
        }
    }

    // Function to apply custom styles when the page content is loaded
    function applyCustomStyles() {
        const elementsGudAKb = document.getElementsByClassName('gudAKb');
        const elementsS55KNe = document.getElementsByClassName('s55KNe');
        const elementsVhoiaeKkxPLb = document.getElementsByClassName('vhoiae.KkxPLb');

        const customStylesMargin = {
            'margin': '1px'
        };

        const customStylesBackground = {
            '--dt-surface1': '#ffffff',
            '--dt-surface2': '#f7f7f7'
        };

        changeStyles(elementsGudAKb, customStylesMargin);
        changeStyles(elementsS55KNe, customStylesMargin);
        changeStyles(elementsVhoiaeKkxPLb, customStylesBackground);
    }

    // Apply custom styles when the page is loaded or updated
    const observer = new MutationObserver(applyCustomStyles);
    observer.observe(document.body, { childList: true, subtree: true });

    // Apply custom styles immediately for the elements already present in the DOM
    applyCustomStyles();
})();
