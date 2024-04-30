document.addEventListener('DOMContentLoaded', function() {
    const consentBanner = document.querySelector(".cookieConsentBanner");
    const acceptButton = document.getElementById("acceptButton");

    // Function to set a cookie
    function setCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "") + expires + "; path=/";
    }

    // Function to get a cookie
    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1);
            if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    // Check if the cookie exists
    if (getCookie("consentGiven")) {
        consentBanner.style.display = 'none';
    } else {
        consentBanner.style.display = 'block';
    }

    // Set cookie and hide banner on button click
    acceptButton.addEventListener("click", function() {
        setCookie("consentGiven", "true", 365); // Set cookie for 365 days
        consentBanner.style.display = 'none';
    });
});
