// Função para definir o cookie
function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Função para pegar o cookie
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

// Função para verificar se o cookie já foi aceito
function checkCookieConsent() {
    var consent = getCookie("cookieConsent");
    if (!consent) {
        document.getElementById("cookie-banner").style.display = "block";
    }
}

// Quando o usuário aceita, oculta o banner e define o cookie
document.getElementById("accept-cookies").addEventListener("click", function() {
    setCookie("cookieConsent", "accepted", 30); // Cookie válido por 30 dias
    document.getElementById("cookie-banner").style.display = "none";
});

// Checa o consentimento ao carregar a página
checkCookieConsent();
