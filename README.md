# Fonterize
Here's a GreaseMonkey Script which changes font family on almost every part of the web page you are surfing.

I've tested three different techniques, cause I want to change dinamically added text too - added after the document load phase has been completed I mean.

[DOMSubtreeModified](http://www.w3.org/TR/DOM-Level-3-Events/#event-type-DOMSubtreeModified), pay attention, DOMSubtreeModified is DEPRECATED

[DOM MutationObserver](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)

[Css Hack](http://www.backalleycoder.com/2012/04/25/i-want-a-damnodeinserted/) by Daniel Buchner
