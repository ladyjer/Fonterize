// ==UserScript==
// @name Fonterize
// @namespace http://www.ladyj.eu
// @description Change font family everywhere
// @version 1.0
// @include *
// ==/UserScript==

const MY_FAVOURITE_FONT = 'Courier New';


function beautify(doc) {
    var elems = doc.getElementsByTagName('*');
    for (var i = elems.length -1; i >= 0; i--) {
        var elm = elems[i];
        elm.style.fontFamily = MY_FAVOURITE_FONT;
    }
}

beautify(document);

/* START WITH CSS Hack */
var style = document.createElement('style');
style.type    = 'text/css';
style.innerHTML = '@keyframes nodeInserted {  ' +
                  '  from { ' +
                  '     clip: rect(0px, auto, auto, auto); ' +
                  '  }                                     ' +
                  '  to {                                  ' +
                  '     clip: rect(0px, auto, auto, auto); ' +
                  '  }                                     ' +
                  '  }                                     ' +
                  '                                        ' +
                  '  body,  {                              ' +
                  '      animation-duration: 0.001s;       ' +
                  '      animation-name:     nodeInserted; ' +
                  ' }';
document.getElementsByTagName('head')[0].appendChild(style);


document.addEventListener('animationstart', function(event){
    if (event.animationName == 'nodeInserted'){
        beautify(event.currentTarget);
    }
}, true);
/* END OF CSS Hack */

/* START WITH DOM MutationObserver*
// select the target node
var target = document.querySelector('body');

// create an observer instance
var observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        beautify(this);
    });
});
// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true }
// pass in the target node, as well as the observer options
observer.observe(target, config);
/* END WITH DOM MutationObserver*/

/* START WITH DOMSubtreeModified *
document.addEventListener('DOMSubtreeModified', function(event){
    if (event.animationName == 'nodeInserted'){
        beautify(event.currentTarget);
    }
}, false);
/* END WITH DOMSubtreeModified */
