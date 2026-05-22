const translations = {
    fr: {
        'header.title': 'Volley Région Morges',
        'header.tagline': 'Association de Volleyball Jeunesse',
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.teams': 'Équipes',
        'nav.contact': 'Contact',
        'hero.title': 'Bienvenue',
        'hero.subtitle': 'Rejoignez-nous pour une expérience de volleyball inoubliable!',
        'about.title': 'À propos de nous',
        'about.description1': 'Volley Région Morges est une association dédiée à la promotion du volleyball pour les jeunes joueurs dans la région de Morges.',
        'about.description2': 'Nous accueillons les jeunes talents, des débutants découvrant le sport jusqu\'aux compétiteurs expérimentés en développement.',
        'teams.title': 'Nos Équipes Jeunesse',
        'teams.u12': 'U12 Mixte',
        'teams.u12desc': 'Initiation au volleyball pour les plus jeunes',
        'teams.u14': 'U14 Mixte',
        'teams.u14desc': 'Développement des techniques fondamentales',
        'teams.u16': 'U16 Filles & Garçons',
        'teams.u16desc': 'Entraînement compétitif et progression',
        'teams.u18': 'U18 Filles & Garçons',
        'teams.u18desc': 'Préparation aux compétitions régionales',
        'contact.title': 'Nous Contacter',
        'contact.email': 'Email :',
        'contact.location': 'Localisation :',
        'footer.rights': 'Tous droits réservés.'
    },
    de: {
        'header.title': 'Volley Region Morges',
        'header.tagline': 'Jugend-Volleyballverband',
        'nav.home': 'Startseite',
        'nav.about': 'Über uns',
        'nav.teams': 'Teams',
        'nav.contact': 'Kontakt',
        'hero.title': 'Willkommen',
        'hero.subtitle': 'Treten Sie uns bei für ein unvergessliches Volleyballerlebnis!',
        'about.title': 'Über uns',
        'about.description1': 'Volley Region Morges ist ein Verband, der sich der Förderung von Volleyball für junge Spieler in der Region Morges widmet.',
        'about.description2': 'Wir begrüßen junge Talente, von Anfängern bis hin zu erfahrenen Wettbewerbern in der Entwicklung.',
        'teams.title': 'Unsere Jugendteams',
        'teams.u12': 'U12 Gemischte Mannschaft',
        'teams.u12desc': 'Einführung in Volleyball für die Jüngsten',
        'teams.u14': 'U14 Gemischte Mannschaft',
        'teams.u14desc': 'Entwicklung der grundlegenden Techniken',
        'teams.u16': 'U16 Mädchen & Jungen',
        'teams.u16desc': 'Wettbewerbstraining und Fortschritt',
        'teams.u18': 'U18 Mädchen & Jungen',
        'teams.u18desc': 'Vorbereitung auf regionale Wettbewerbe',
        'contact.title': 'Kontaktieren Sie uns',
        'contact.email': 'E-Mail:',
        'contact.location': 'Standort:',
        'footer.rights': 'Alle Rechte vorbehalten.'
    },
    it: {
        'header.title': 'Volley Regione Morges',
        'header.tagline': 'Associazione Pallavolo Giovanile',
        'nav.home': 'Home',
        'nav.about': 'Chi Siamo',
        'nav.teams': 'Squadre',
        'nav.contact': 'Contatti',
        'hero.title': 'Benvenuti',
        'hero.subtitle': 'Unisciti a noi per un\'esperienza di pallavolo indimenticabile!',
        'about.title': 'Chi Siamo',
        'about.description1': 'Volley Regione Morges è un\'associazione dedicata alla promozione della pallavolo per i giovani giocatori nella regione di Morges.',
        'about.description2': 'Accogliamo giovani talenti, dai principianti ai competitori esperti in sviluppo.',
        'teams.title': 'Le Nostre Squadre Giovanili',
        'teams.u12': 'U12 Misto',
        'teams.u12desc': 'Introduzione alla pallavolo per i più piccoli',
        'teams.u14': 'U14 Misto',
        'teams.u14desc': 'Sviluppo delle tecniche fondamentali',
        'teams.u16': 'U16 Ragazze & Ragazzi',
        'teams.u16desc': 'Allenamento competitivo e progressione',
        'teams.u18': 'U18 Ragazze & Ragazzi',
        'teams.u18desc': 'Preparazione alle competizioni regionali',
        'contact.title': 'Contattaci',
        'contact.email': 'Email:',
        'contact.location': 'Posizione:',
        'footer.rights': 'Tutti i diritti riservati.'
    },
    en: {
        'header.title': 'Volley Region Morges',
        'header.tagline': 'Youth Volleyball Association',
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.teams': 'Teams',
        'nav.contact': 'Contact',
        'hero.title': 'Welcome',
        'hero.subtitle': 'Join us for an unforgettable volleyball experience!',
        'about.title': 'About Us',
        'about.description1': 'Volley Region Morges is an association dedicated to promoting volleyball for young players in the Morges region.',
        'about.description2': 'We welcome young talents, from beginners discovering the sport to experienced competitors in development.',
        'teams.title': 'Our Youth Teams',
        'teams.u12': 'U12 Mixed',
        'teams.u12desc': 'Introduction to volleyball for the youngest',
        'teams.u14': 'U14 Mixed',
        'teams.u14desc': 'Development of fundamental techniques',
        'teams.u16': 'U16 Girls & Boys',
        'teams.u16desc': 'Competitive training and progression',
        'teams.u18': 'U18 Girls & Boys',
        'teams.u18desc': 'Preparation for regional competitions',
        'contact.title': 'Contact Us',
        'contact.email': 'Email:',
        'contact.location': 'Location:',
        'footer.rights': 'All rights reserved.'
    }
};

function getCurrentLanguage() {
    return localStorage.getItem('language') || 'fr';
}

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    updatePageLanguage(lang);
}

function updatePageLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    document.documentElement.lang = lang;
    updateLanguageButtons(lang);
}

function updateLanguageButtons(lang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

document.addEventListener('DOMContentLoaded', function() {
    const currentLang = getCurrentLanguage();
    updatePageLanguage(currentLang);

    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const selectedLang = this.getAttribute('data-lang');
            setLanguage(selectedLang);
        });
    });
});