let currentExperience = 0;
const totalExperiences = 3;

// Fonction pour basculer entre light et dark mode
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('themeToggle');

    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    }
}

// Charger le thème sauvegardé
window.addEventListener('load', function () {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('themeToggle');

    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        themeToggle.textContent = '☀️';
    }

    // Animation des barres de compétences
    const skillBars = document.querySelectorAll('.skill-progress');
    skillBars.forEach(bar => {
        const width = bar.style.width;
        bar.style.width = '0%';
        setTimeout(() => {
            bar.style.width = width;
        }, 500);
    });
});

function showSection(sectionName) {
    // Masquer toutes les sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Afficher la section demandée
    document.getElementById(sectionName).classList.add('active');

    // Mettre à jour la navigation
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => link.classList.remove('active'));

    const activeLinks = document.querySelectorAll(`[onclick="showSection('${sectionName}')"]`);
    activeLinks.forEach(link => link.classList.add('active'));
}

function downloadCV(event) {
    // Créer un lien temporaire vers le fichier PDF réel
    const link = document.createElement('a');
    link.href = './docs/Mze_ABDALLAH_CV.pdf';
    link.download = 'CV_Mze_ABDALLAH_SOILIHI.pdf';
    link.style.display = 'none';
    
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Message de confirmation sans alert
    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ CV téléchargé !';
    btn.style.background = '#4caf50';
    btn.style.color = 'white';
    
    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
        btn.style.color = '';
    }, 2000);
}


function nextExperience() {
    currentExperience = (currentExperience + 1) % totalExperiences;
    updateExperienceSlider();
}

function previousExperience() {
    currentExperience = (currentExperience - 1 + totalExperiences) % totalExperiences;
    updateExperienceSlider();
}

function updateExperienceSlider() {
    const container = document.getElementById('experienceContainer');
    const translateX = -currentExperience * 100;
    container.style.transform = `translateX(${translateX}%)`;
}

function sendMessage(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;

    // Créer un message de confirmation
    const form = event.target;
    const submitBtn = form.querySelector('.btn');
    const originalText = submitBtn.textContent;

    submitBtn.textContent = `✓ Message envoyé ! Merci ${name}`;
    submitBtn.style.background = '#4caf50';

    // Réinitialiser le formulaire
    event.target.reset();

    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.background = '';
    }, 3000);
}

function showDemo(projectName) {
    const demoMessages = {
        'E-Commerce Platform': 'La démo de la plateforme e-commerce serait disponible ici. Vous pourriez voir le système de panier, la gestion des produits et le processus de paiement.',
        'Chatbot IA': 'La démo du chatbot IA serait disponible ici. Vous pourriez interagir avec l\'assistant virtuel et voir comment il répond aux questions.',
        'App Mobile Fitness': 'La démo de l\'application fitness serait disponible ici. Vous pourriez voir le tracking d\'entraînement et les statistiques personnalisées.',
        'Jeu Web Multijoueur': 'La démo du jeu multijoueur serait disponible ici. Vous pourriez tester le gameplay et voir le système de matchmaking.'
    };

    const btn = event.target;
    const originalText = btn.textContent;
    btn.textContent = '✓ Démo en cours...';
    btn.style.background = '#4caf50';

    setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = '';
    }, 2000);
}