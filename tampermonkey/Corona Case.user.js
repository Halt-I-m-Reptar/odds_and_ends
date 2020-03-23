// ==UserScript==
// @name         Corona Case
// @namespace    https://corona-check.herokuapp.com/
// @version      0.1
// @description  Who doesn't like sarcasm?!
// @author       Peter Creutzberger
// @match        https://corona-check.herokuapp.com/
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    Array.from(document.getElementsByTagName("p")).forEach( (cur, index) => {
        if ( index > 0 ) { cur.innerHTML = newCase(cur.innerHTML); }
    });

    function newCase(text) {
        return text.split("").reduce( (acc, cur, index) => {
            return acc += index % 2 === 0 ? cur.toLowerCase() : cur.toUpperCase();
        }, "");
    }
})();