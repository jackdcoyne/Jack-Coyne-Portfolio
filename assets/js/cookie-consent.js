document.addEventListener('DOMContentLoaded', function() {
    const consentBanner = document.getElementById("cookieConsentBanner");
    const cookieConsent = getCookie("ga_consent");

    // Check if consent has been previously given
    if (cookieConsent === "true") {
        loadGoogleAnalytics(); // Load Google Analytics if already consented
        consentBanner.style.display = 'none';
    } else {
        consentBanner.style.display = 'block';
    }

    document.getElementById("acceptButton").addEventListener("click", function() {
        setCookie("ga_consent", "true", 365);
        consentBanner.style.display = 'none';
        loadGoogleAnalytics(); // Load Google Analytics upon consent
    });

    document.getElementById("rejectButton").addEventListener("click", function() {
        setCookie("ga_consent", "false", 365);
        consentBanner.style.display = 'none';
    });
});

function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function loadGoogleAnalytics() {
    console.log("Loading Google Analytics");
    window.dataLayer = window.dataLayer || [];
    function gtag(){ dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', 'G-61XTPJ1F43');

    var script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-61XTPJ1F43';
    document.head.appendChild(script);
}