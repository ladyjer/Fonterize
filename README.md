# Fonterize
Here's a GreaseMonkey Script which changes font family on almost every part of the web page you are surfing.

I've tested three different techniques, cause I want to change dinamically added text too - added after the document load phase has been completed I mean.

    DOMSubtreeModified, pay attention, DOMSubtreeModified is DEPRECATED
    DOM MutationObserver
    CSS Hack by Daniel Buchner
