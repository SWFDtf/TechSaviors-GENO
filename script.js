// Set current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
}

// Age selection functionality
function selectAge(ageGroup) {
    // Hide age selection and show main content
    document.getElementById('age-selection').style.display('none');
    document.getElementById('age-selection').style.display('block');


    // Apply theme based on age group
    document.body.className = ''; // Reset any existing theme
    document.body.classList.add(`theme-${ageGroup}`);
    
    // Update content based on age group
    updateContent(ageGroup);
    
    // Scroll to top of main content
    window.scrollTo(0, 0);
}

// Update content based on age group
function updateContent(ageGroup) {
    const content = getContentForAgeGroup(ageGroup);
    
    // Update hero section
    document.getElementById('hero-title').textContent = content.hero.title;
    document.getElementById('hero-text').textContent = content.hero.text;
    
    // Update services section
    document.getElementById('services-title').textContent = content.services.title;
    document.getElementById('services-subtitle').textContent = content.services.subtitle;
    
    // Update service cards
    document.getElementById('computer-title').textContent = content.services.computer.title;
    document.getElementById('computer-text').textContent = content.services.computer.text;
    document.getElementById('ipad-title').textContent = content.services.ipad.title;
    document.getElementById('ipad-text').textContent = content.services.ipad.text;
    document.getElementById('screen-title').textContent = content.services.screen.title;
    document.getElementById('screen-text').textContent = content.services.screen.text;
    document.getElementById('software-title').textContent = content.services.software.title;
    document.getElementById('software-text').textContent = content.services.software.text;
    
    // Update about section
    document.getElementById('about-title').textContent = content.about.title;
    document.getElementById('about-text-1').textContent = content.about.text1;
    document.getElementById('about-text-2').textContent = content.about.text2;
    
    // Update contact section
    document.getElementById('contact-title').textContent = content.contact.title;
    document.getElementById('contact-text').textContent = content.contact.text;
    document.getElementById('contact-hours').textContent = content.contact.hours;
    document.getElementById('contact-btn').textContent = content.contact.button;
    
    // Add animations based on age group
    if (ageGroup === '9-11') {
        addAnimationsForKids();
    }
}

// Add playful animations for younger kids
function addAnimationsForKids() {
    const serviceIcons = document.querySelectorAll('.service-icon');
    serviceIcons.forEach(icon => {
        icon.classList.add('animate-float');
    });
    
    const ageIcons = document.querySelectorAll('.age-icon');
    ageIcons.forEach(icon => {
        icon.classList.add('animate-float');
    });
}

// Content for different age groups
function getContentForAgeGroup(ageGroup) {
    const content = {
        '9-11': {
            hero: {
                title: 'Technik-Hilfe für Kinder!',
                text: 'Wir sind hier, um deine Computerprobleme zu lösen und dein iPad wieder wie neu zu machen! Unsere freundlichen Technik-Helfer am Gymnasium Essen Nord-Ost können alle möglichen technischen Probleme lösen.'
            },
            services: {
                title: 'Was wir reparieren können',
                subtitle: 'Hier sind die Möglichkeiten, wie wir deine Technik besser machen können!',
                computer: {
                    title: 'Computer & Laptop Hilfe',
                    text: 'Ist dein Computer langsam oder funktioniert nicht richtig? Wir können ihn schneller machen und alle Probleme beheben!'
                },
                ipad: {
                    title: 'iPad Reparaturen',
                    text: 'Hast du Probleme mit deinem iPad? Wir können helfen, es zu reparieren und wieder wie neu zu machen!'
                },
                screen: {
                    title: 'Neue Displayschutzfolien',
                    text: 'Ist deine iPad-Displayschutzfolie zerkratzt oder löst sich ab? Wir können eine neue anbringen, um dein iPad zu schützen!'
                },
                software: {
                    title: 'App & Programm Hilfe',
                    text: 'Hast du Probleme mit Apps oder Programmen? Wir können dir helfen, sie wieder zum Laufen zu bringen!'
                }
            },
            about: {
                title: 'Wer sind wir?',
                text1: 'Wir sind ein freundliches Team am Gymnasium Essen Nord-Ost, das gerne Kindern bei ihren technischen Problemen hilft! Wir wissen, dass Computer und iPads manchmal schwierig sein können, und wir sind hier, um sie für dich besser zu machen.',
                text2: 'Egal ob dein Computer langsam ist, dein iPad Probleme hat oder du eine neue Displayschutzfolie brauchst, wir sind hier, um zu helfen!'
            },
            contact: {
                title: 'Hier findest du uns!',
                text: 'Wir sind am Gymnasium Essen Nord-Ost. Frag einfach einen Lehrer, wo du das TechSaviours-Team findest!',
                hours: 'Schultage während der Mittagspause',
                button: 'Frag einen Lehrer um Hilfe'
            }
        },
        '12-13': {
            hero: {
                title: 'Technik-Support für Schüler',
                text: 'Hast du Probleme mit deinem Computer oder iPad? Wir sind hier, um zu helfen! Unser Team am Gymnasium Essen Nord-Ost bietet Unterstützung für alle deine technischen Bedürfnisse, von der Behebung von Softwareproblemen bis hin zu Hardwarereparaturen.'
            },
            services: {
                title: 'Unsere Leistungen',
                subtitle: 'Wir bieten eine Reihe von Diensten an, um deine Geräte reibungslos laufen zu lassen.',
                computer: {
                    title: 'Computer & Laptop Support',
                    text: 'Wir können bei langsamen Computern, Softwareproblemen und anderen Problemen helfen, damit dein Gerät wieder richtig funktioniert.'
                },
                ipad: {
                    title: 'iPad Support',
                    text: 'Wir bieten Unterstützung bei iPad-Problemen, einschließlich App-Problemen, Systemfehlern und allgemeiner Fehlerbehebung.'
                },
                screen: {
                    title: 'Displayschutzfolien-Austausch',
                    text: 'Wir können alte oder beschädigte Displayschutzfolien auf deinem iPad ersetzen, um dein Gerät zu schützen und wie neu aussehen zu lassen.'
                },
                software: {
                    title: 'Software-Unterstützung',
                    text: 'Wir können bei Softwareproblemen helfen, einschließlich Anwendungsfehlern, Systemupdates und Programminstallationen.'
                }
            },
            about: {
                title: 'Über TechSaviours GENO',
                text1: 'TechSaviours GENO ist ein Support-Team am Gymnasium Essen Nord-Ost. Wir haben uns darauf spezialisiert, Schülern bei ihren technischen Bedürfnissen zu helfen und sicherzustellen, dass deine Geräte richtig funktionieren, damit du dich auf das Lernen konzentrieren kannst.',
                text2: 'Unsere Dienste umfassen die Behebung von Hardwareproblemen, die Lösung von Softwareproblemen und den Austausch von iPad-Displayschutzfolien, um deine Geräte zu schützen und effizient zu halten.'
            },
            contact: {
                title: 'Wo du uns findest',
                text: 'Du findest uns am Gymnasium Essen Nord-Ost. Suche nach dem TechSaviours GENO-Schild oder frage im Schulbüro nach.',
                hours: 'Montag bis Freitag während der Mittagspausen und nach der Schule bis 15:30 Uhr',
                button: 'Hilfe anfordern'
            }
        },
        '14-18': {
            hero: {
                title: 'Technische Unterstützung für Jugendliche',
                text: 'TechSaviours GENO bietet umfassende technische Unterstützung für alle deine Geräte. Unser Team am Gymnasium Essen Nord-Ost ist spezialisiert auf die Fehlersuche und Lösung von Hardware- und Softwareproblemen für PCs, Laptops und iPads.'
            },
            services: {
                title: 'Technische Support-Dienste',
                subtitle: 'TechSaviours GENO bietet umfassende technische Support-Dienste für die Schulgemeinschaft.',
                computer: {
                    title: 'PC & Laptop Technischer Support',
                    text: 'Umfassende Fehlersuche und Reparaturdienste für Hardware- und Softwareprobleme auf Windows- und Mac-Geräten.'
                },
                ipad: {
                    title: 'iPad Technische Unterstützung',
                    text: 'Fachkundige Hilfe bei iOS-Problemen, App-Konfigurationen, Systemoptimierungen und allgemeiner iPad-Wartung.'
                },
                screen: {
                    title: 'iPad Displayschutzfolien-Service',
                    text: 'Professionelle Entfernung alter Displayschutzfolien und präzise Installation neuer Folien, die eine blasenfreie Anwendung und optimalen Geräteschutz gewährleisten.'
                },
                software: {
                    title: 'Software-Fehlerbehebung',
                    text: 'Lösung von Softwarekonflikten, Anwendungsfehlern, Systemoptimierung und Unterstützung bei Softwareinstallationen und -konfigurationen.'
                }
            },
            about: {
                title: 'Über unsere Organisation',
                text1: 'TechSaviours GENO ist eine technische Support-Initiative am Gymnasium Essen Nord-Ost. Unser Team besteht aus sachkundigen Technikern, die sich der Bereitstellung hochwertiger Support-Dienste für die technischen Bedürfnisse der Schulgemeinschaft verschrieben haben.',
                text2: 'Wir sind spezialisiert auf die Diagnose und Lösung einer Vielzahl von technischen Problemen, von Hardwarefehlfunktionen bis hin zu Softwarekonfigurationen, um sicherzustellen, dass Schüler und Mitarbeiter zuverlässigen Zugang zu funktionierender Technologie haben.'
            },
            contact: {
                title: 'Kontaktinformationen',
                text: 'Unser Support-Center befindet sich am Gymnasium Essen Nord-Ost. Für Unterstützung besuche uns bitte während unserer Öffnungszeiten oder kontaktiere uns, um einen Termin zu vereinbaren.',
                hours: 'Montag bis Freitag: 10:00 - 15:30 Uhr (während der Schultage)',
                button: 'Termin vereinbaren'
            }
        }
    };
    
    return content[ageGroup];
}

// Smooth scrolling for navigation
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Add event listeners to all navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        scrollToSection(targetId);
    });
});

// Add hover effects to service cards
const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
        card.style.boxShadow = 'var(--shadow-hover)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
        card.style.boxShadow = 'var(--shadow)';
    });
});

// Add responsive behavior for window resize
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        nav.style.display = 'block';
    } else {
        nav.style.display = 'none';
    }
});
