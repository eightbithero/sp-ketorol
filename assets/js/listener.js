var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
var target = '_blank';

if (isSafari){
    target = '_parent';
}


if (window.addEventListener) {
    window.addEventListener("message", handlerRedirect);
} else {
    // IE8
    window.attachEvent("onmessage", handlerRedirect);
}

function handlerRedirect(message) {
    var link = message.data;
    console.log(link);

    if(link.indexOf('outer__') != -1) {
        link = link.slice(7);
        var userAgent = window.navigator.userAgent;

        var parentOpener = window.opener;
        window.opener = null;
        window.open(link, target);
        console.log(link);
        window.opener = parentOpener;

    }
}
