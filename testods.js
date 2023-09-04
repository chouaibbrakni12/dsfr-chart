// Créer un élément de script
var scriptElement = document.createElement('script');

// Définir l'attribut src avec l'URL du script distant
scriptElement.src = 'https://www.googletagmanager.com/gtag/js?id=G-PL59JDF7NJ';

// Définir l'attribut async pour charger le script de manière asynchrone
scriptElement.async = true;

// Ajouter le script à la balise head de la page
document.head.appendChild(scriptElement);

// Initialiser la variable dataLayer si elle n'existe pas
window.dataLayer = window.dataLayer || [];

// Définir la fonction gtag
function gtag() {
 dataLayer.push(arguments);
}

// Appeler gtag('js', new Date());
gtag('js', new Date());

// Appeler gtag('config', 'G-PL59JDF7NJ');
gtag('config', 'G-PL59JDF7NJ');