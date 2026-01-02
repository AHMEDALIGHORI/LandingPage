// ============================================
// Internationalization (i18n) System
// ============================================

// Translations object
const translations = {
    fr: {
        // Navigation
        nav: {
            welcome: "Bienvenue",
            about: "À propos",
            services: "Services",
            workingHours: "Heures d'ouverture",
            blog: "Blog",
            contact: "Contact"
        },
        // Hero Section
        hero: {
            badge: "Fiable pour 1000+ Entreprises",
            line1: "Services",
            line2: "Professionnels",
            line3: "",
            line4: "Auxquels Vous",
            line5: "Pouvez Faire Confiance",
            description: "Oris Strategy SA fournit des solutions commerciales complètes incluant la création d'entreprise, la comptabilité, la fiscalité et les services fiduciaires. Nous aidons votre entreprise à prospérer.",
            btnStart: "Commencer Aujourd'hui",
            btnServices: "Nos Services"
        },
        // Stats
        stats: {
            companies: "Entreprises Créées",
            clients: "Clients Satisfaits",
            experience: "Années d'Expérience",
            satisfaction: "Taux de Satisfaction"
        },
        // Services
        services: {
            title: "Nos Services",
            subtitle: "Solutions commerciales complètes adaptées à vos besoins",
            companyCreation: {
                title: "Création d'Entreprise",
                desc: "Assistance experte pour créer votre entité commerciale. Nous gérons toutes les exigences légales et la documentation pour vous démarrer rapidement."
            },
            accounting: {
                title: "Comptabilité et Fiscalité",
                desc: "Services comptables professionnels et planification fiscale pour maintenir vos finances en ordre et maximiser vos économies."
            },
            domiciliation: {
                title: "Domiciliation d'Entreprise",
                desc: "Services d'adresse professionnelle et solutions de domiciliation pour vos besoins d'enregistrement d'entreprise."
            },
            selfEmployed: {
                title: "Support pour Indépendants",
                desc: "Services de support complets pour les travailleurs indépendants, de l'enregistrement à la conformité continue."
            },
            medical: {
                title: "Services Fiduciaires Médicaux",
                desc: "Services fiduciaires spécialisés pour les professionnels de la santé, garantissant la conformité aux réglementations sanitaires."
            },
            consulting: {
                title: "Conseil en Entreprise",
                desc: "Conseil stratégique en entreprise pour vous aider à prendre des décisions éclairées et développer votre entreprise efficacement."
            },
            learnMore: "En Savoir Plus"
        },
        // CTA Section
        cta: {
            title: "Prêt à Commencer Votre Parcours d'Affaires ?",
            subtitle: "Laissez-nous gérer les complexités pendant que vous vous concentrez sur ce qui compte le plus - faire croître votre entreprise.",
            button: "Planifier une Consultation Gratuite"
        },
        // About
        about: {
            title: "À Propos d'Oris Strategy SA",
            desc1: "Avec plus de 15 ans d'expérience, Oris Strategy SA a été un partenaire de confiance pour les entreprises de toutes tailles. Nous combinons expertise, dévouement et service personnalisé pour aider nos clients à réussir.",
            desc2: "Notre équipe de professionnels s'engage à fournir un service exceptionnel et à construire des relations à long terme avec nos clients. Nous comprenons que chaque entreprise est unique, et nous adaptons nos services à vos besoins spécifiques.",
            expertTeam: "Équipe d'Experts",
            expertDesc: "Professionnels certifiés avec des années d'expérience",
            clientFocused: "Centré sur le Client",
            clientDesc: "Votre succès est notre priorité",
            trusted: "Fiable et Fiable",
            trustedDesc: "Nous avons bâti notre réputation sur la confiance et la fiabilité",
            quality: "Service de Qualité",
            qualityDesc: "Excellence dans tous les aspects de notre prestation de service",
            quickResponse: "Réponse Rapide",
            quickDesc: "Service rapide et efficace quand vous en avez le plus besoin"
        },
        // Working Hours
        workingHours: {
            title: "Heures d'Ouverture",
            subtitle: "Visitez-nous pendant nos heures d'ouverture ou prenez rendez-vous",
            regularHours: "Heures Régulières",
            mondayFriday: "Lundi - Vendredi",
            saturday: "Samedi",
            sunday: "Dimanche",
            byAppointment: "Sur Rendez-vous",
            closed: "Fermé",
            contactInfo: "Informations de Contact",
            phone: "Téléphone",
            email: "Email",
            address: "Adresse"
        },
        // Blog
        blog: {
            title: "Dernières Actualités et Blog",
            subtitle: "Restez informé de nos dernières idées et actualités commerciales",
            businessTips: "Conseils d'Affaires",
            taxUpdates: "Mises à Jour Fiscales",
            industryNews: "Actualités de l'Industrie",
            readMore: "Lire la Suite"
        },
        // Contact
        contact: {
            title: "Contactez-Nous",
            subtitle: "Prêt à commencer? Contactez-nous aujourd'hui et discutons de la façon dont nous pouvons aider votre entreprise à croître.",
            sendMessage: "Envoyez-nous un Message",
            fullName: "Nom Complet",
            email: "Adresse Email",
            phone: "Numéro de Téléphone",
            service: "Service Intéressé",
            selectService: "Sélectionnez un service",
            message: "Message",
            messagePlaceholder: "Parlez-nous de vos besoins...",
            send: "Envoyer le Message",
            contactInfo: "Informations de Contact",
            businessHours: "Heures d'Ouverture",
            whyChoose: "Pourquoi Nous Choisir",
            yearsExp: "15+ Ans d'Expérience",
            expertTeam: "Équipe Professionnelle d'Experts",
            personalized: "Service Personnalisé",
            competitive: "Prix Compétitifs",
            confidential: "100% Confidentiel"
        },
        // Footer
        footer: {
            description: "Services commerciaux professionnels auxquels vous pouvez faire confiance. Aider les entreprises à réussir depuis 2008.",
            services: "Services",
            company: "Entreprise",
            privacy: "Politique de Confidentialité",
            terms: "Conditions d'Utilisation"
        }
    },
    en: {
        nav: {
            welcome: "Welcome",
            about: "About",
            services: "Services",
            workingHours: "Working hours",
            blog: "Blog",
            contact: "Contact"
        },
        hero: {
            badge: "Trusted by 1000+ Businesses",
            line1: "Professional",
            line2: "Business",
            line3: "Services",
            line4: "You Can",
            line5: "Trust",
            description: "Oris Strategy SA provides comprehensive business solutions including company creation, accounting, taxation, and fiduciary services. We help your business thrive.",
            btnStart: "Get Started Today",
            btnServices: "Our Services"
        },
        stats: {
            companies: "Companies Created",
            clients: "Happy Clients",
            experience: "Years Experience",
            satisfaction: "Satisfaction Rate"
        },
        services: {
            title: "Our Services",
            subtitle: "Comprehensive business solutions tailored to your needs",
            companyCreation: {
                title: "Company Creation",
                desc: "Expert assistance in setting up your business entity. We handle all legal requirements and documentation to get you started quickly."
            },
            accounting: {
                title: "Accounting & Taxation",
                desc: "Professional accounting services and tax planning to keep your finances in order and maximize your savings."
            },
            domiciliation: {
                title: "Company Domiciliation",
                desc: "Professional business address services and domiciliation solutions for your company registration needs."
            },
            selfEmployed: {
                title: "Self-Employed Support",
                desc: "Comprehensive support services for self-employed individuals, from registration to ongoing compliance."
            },
            medical: {
                title: "Medical Fiduciary Services",
                desc: "Specialized fiduciary services for medical professionals, ensuring compliance with healthcare regulations."
            },
            consulting: {
                title: "Business Consulting",
                desc: "Strategic business consulting to help you make informed decisions and grow your business effectively."
            },
            learnMore: "Learn More"
        },
        // CTA Section
        cta: {
            title: "Ready to Start Your Business Journey?",
            subtitle: "Let us handle the complexities while you focus on what matters most - growing your business.",
            button: "Schedule a Free Consultation"
        },
        about: {
            title: "About Oris Strategy SA",
            desc1: "With over 15 years of experience, Oris Strategy SA has been a trusted partner for businesses of all sizes. We combine expertise, dedication, and personalized service to help our clients succeed.",
            desc2: "Our team of professionals is committed to providing exceptional service and building long-term relationships with our clients. We understand that every business is unique, and we tailor our services to meet your specific needs.",
            expertTeam: "Expert Team",
            expertDesc: "Certified professionals with years of experience",
            clientFocused: "Client Focused",
            clientDesc: "Your success is our priority",
            trusted: "Trusted & Reliable",
            trustedDesc: "We've built our reputation on trust and reliability",
            quality: "Quality Service",
            qualityDesc: "Excellence in every aspect of our service delivery",
            quickResponse: "Quick Response",
            quickDesc: "Fast and efficient service when you need it most"
        },
        workingHours: {
            title: "Working Hours",
            subtitle: "Visit us during our business hours or schedule an appointment",
            regularHours: "Regular Hours",
            mondayFriday: "Monday - Friday",
            saturday: "Saturday",
            sunday: "Sunday",
            byAppointment: "By Appointment",
            closed: "Closed",
            contactInfo: "Contact Information",
            phone: "Phone",
            email: "Email",
            address: "Address"
        },
        blog: {
            title: "Latest News & Blog",
            subtitle: "Stay updated with our latest insights and business news",
            businessTips: "Business Tips",
            taxUpdates: "Tax Updates",
            industryNews: "Industry News",
            readMore: "Read More"
        },
        contact: {
            title: "Get In Touch",
            subtitle: "Ready to get started? Contact us today and let's discuss how we can help your business grow.",
            sendMessage: "Send us a Message",
            fullName: "Full Name",
            email: "Email Address",
            phone: "Phone Number",
            service: "Service Interested In",
            selectService: "Select a service",
            message: "Message",
            messagePlaceholder: "Tell us about your needs...",
            send: "Send Message",
            contactInfo: "Contact Information",
            businessHours: "Business Hours",
            whyChoose: "Why Choose Us?",
            yearsExp: "15+ Years of Experience",
            expertTeam: "Expert Professional Team",
            personalized: "Personalized Service",
            competitive: "Competitive Pricing",
            confidential: "100% Confidential"
        },
        footer: {
            description: "Professional business services you can trust. Helping businesses succeed since 2008.",
            services: "Services",
            company: "Company",
            privacy: "Privacy Policy",
            terms: "Terms of Service"
        }
    },
    de: {
        nav: {
            welcome: "Willkommen",
            about: "Über uns",
            services: "Dienstleistungen",
            workingHours: "Arbeitszeiten",
            blog: "Blog",
            contact: "Kontakt"
        },
        hero: {
            badge: "Vertrauen von 1000+ Unternehmen",
            line1: "Professionelle",
            line2: "Geschäfts-",
            line3: "dienstleistungen",
            line4: "Denen Sie",
            line5: "Vertrauen Können",
            description: "Oris Strategy SA bietet umfassende Geschäftslösungen einschließlich Unternehmensgründung, Buchhaltung, Besteuerung und Treuhanddienstleistungen. Wir helfen Ihrem Unternehmen zu gedeihen.",
            btnStart: "Heute Beginnen",
            btnServices: "Unsere Dienstleistungen"
        },
        stats: {
            companies: "Unternehmen Gegründet",
            clients: "Zufriedene Kunden",
            experience: "Jahre Erfahrung",
            satisfaction: "Zufriedenheitsrate"
        },
        services: {
            title: "Unsere Dienstleistungen",
            subtitle: "Umfassende Geschäftslösungen, die auf Ihre Bedürfnisse zugeschnitten sind",
            companyCreation: {
                title: "Unternehmensgründung",
                desc: "Fachkundige Unterstützung bei der Gründung Ihres Unternehmens. Wir übernehmen alle rechtlichen Anforderungen und Dokumentationen, um Sie schnell zu starten."
            },
            accounting: {
                title: "Buchhaltung & Besteuerung",
                desc: "Professionelle Buchhaltungsdienstleistungen und Steuerplanung, um Ihre Finanzen in Ordnung zu halten und Ihre Ersparnisse zu maximieren."
            },
            domiciliation: {
                title: "Firmensitz",
                desc: "Professionelle Geschäftsadressdienste und Sitzlösungen für Ihre Unternehmensregistrierung."
            },
            selfEmployed: {
                title: "Unterstützung für Selbstständige",
                desc: "Umfassende Unterstützungsdienste für Selbstständige, von der Registrierung bis zur laufenden Compliance."
            },
            medical: {
                title: "Medizinische Treuhanddienstleistungen",
                desc: "Spezialisierte Treuhanddienstleistungen für medizinische Fachkräfte, die die Einhaltung der Gesundheitsvorschriften gewährleisten."
            },
            consulting: {
                title: "Unternehmensberatung",
                desc: "Strategische Unternehmensberatung, um Ihnen zu helfen, fundierte Entscheidungen zu treffen und Ihr Unternehmen effektiv zu entwickeln."
            },
            learnMore: "Mehr Erfahren"
        },
        // CTA Section
        cta: {
            title: "Bereit, Ihre Geschäftsreise zu beginnen?",
            subtitle: "Lassen Sie uns die Komplexität bewältigen, während Sie sich auf das konzentrieren, was am wichtigsten ist - das Wachstum Ihres Unternehmens.",
            button: "Kostenlose Beratung vereinbaren"
        },
        about: {
            title: "Über Oris Strategy SA",
            desc1: "Mit über 15 Jahren Erfahrung war Oris Strategy SA ein vertrauenswürdiger Partner für Unternehmen aller Größen. Wir kombinieren Expertise, Engagement und personalisierten Service, um unseren Kunden zum Erfolg zu verhelfen.",
            desc2: "Unser Team von Fachleuten ist bestrebt, außergewöhnlichen Service zu bieten und langfristige Beziehungen zu unseren Kunden aufzubauen. Wir verstehen, dass jedes Unternehmen einzigartig ist, und wir passen unsere Dienstleistungen an Ihre spezifischen Bedürfnisse an.",
            expertTeam: "Expertenteam",
            expertDesc: "Zertifizierte Fachkräfte mit jahrelanger Erfahrung",
            clientFocused: "Kundenorientiert",
            clientDesc: "Ihr Erfolg ist unsere Priorität",
            trusted: "Vertrauenswürdig & Zuverlässig",
            trustedDesc: "Wir haben unseren Ruf auf Vertrauen und Zuverlässigkeit aufgebaut",
            quality: "Qualitätsservice",
            qualityDesc: "Exzellenz in jedem Aspekt unserer Serviceerbringung",
            quickResponse: "Schnelle Antwort",
            quickDesc: "Schneller und effizienter Service, wenn Sie ihn am meisten brauchen"
        },
        workingHours: {
            title: "Arbeitszeiten",
            subtitle: "Besuchen Sie uns während unserer Geschäftszeiten oder vereinbaren Sie einen Termin",
            regularHours: "Reguläre Zeiten",
            mondayFriday: "Montag - Freitag",
            saturday: "Samstag",
            sunday: "Sonntag",
            byAppointment: "Nach Vereinbarung",
            closed: "Geschlossen",
            contactInfo: "Kontaktinformationen",
            phone: "Telefon",
            email: "E-Mail",
            address: "Adresse"
        },
        blog: {
            title: "Neueste Nachrichten & Blog",
            subtitle: "Bleiben Sie auf dem Laufenden mit unseren neuesten Erkenntnissen und Geschäftsnachrichten",
            businessTips: "Geschäftstipps",
            taxUpdates: "Steueraktualisierungen",
            industryNews: "Branchennachrichten",
            readMore: "Weiterlesen"
        },
        contact: {
            title: "Kontakt Aufnehmen",
            subtitle: "Bereit zu beginnen? Kontaktieren Sie uns noch heute und lassen Sie uns besprechen, wie wir Ihrem Unternehmen beim Wachstum helfen können.",
            sendMessage: "Senden Sie uns eine Nachricht",
            fullName: "Vollständiger Name",
            email: "E-Mail-Adresse",
            phone: "Telefonnummer",
            service: "Interessierter Service",
            selectService: "Wählen Sie einen Service",
            message: "Nachricht",
            messagePlaceholder: "Erzählen Sie uns von Ihren Bedürfnissen...",
            send: "Nachricht Senden",
            contactInfo: "Kontaktinformationen",
            businessHours: "Geschäftszeiten",
            whyChoose: "Warum Uns Wählen?",
            yearsExp: "15+ Jahre Erfahrung",
            expertTeam: "Expertenteam von Fachleuten",
            personalized: "Personalisierter Service",
            competitive: "Wettbewerbsfähige Preise",
            confidential: "100% Vertraulich"
        },
        footer: {
            description: "Professionelle Geschäftsdienstleistungen, denen Sie vertrauen können. Unternehmen zum Erfolg verhelfen seit 2008.",
            services: "Dienstleistungen",
            company: "Unternehmen",
            privacy: "Datenschutzrichtlinie",
            terms: "Nutzungsbedingungen"
        }
    }
};

// Current language (default: French)
let currentLang = localStorage.getItem('selectedLanguage') || 'fr';

// Function to change language
function changeLanguage(lang) {
    if (!translations[lang]) return;
    
    currentLang = lang;
    localStorage.setItem('selectedLanguage', lang);
    
    const t = translations[lang];
    
    // Update navigation
    document.querySelectorAll('[data-i18n="nav.welcome"]').forEach(el => el.textContent = t.nav.welcome);
    document.querySelectorAll('[data-i18n="nav.about"]').forEach(el => el.textContent = t.nav.about);
    document.querySelectorAll('[data-i18n="nav.services"]').forEach(el => el.textContent = t.nav.services);
    document.querySelectorAll('[data-i18n="nav.workingHours"]').forEach(el => el.textContent = t.nav.workingHours);
    document.querySelectorAll('[data-i18n="nav.blog"]').forEach(el => el.textContent = t.nav.blog);
    document.querySelectorAll('[data-i18n="nav.contact"]').forEach(el => el.textContent = t.nav.contact);
    
    // Update hero section
    document.querySelectorAll('[data-i18n="hero.badge"]').forEach(el => el.textContent = t.hero.badge);
    document.querySelectorAll('[data-i18n="hero.line1"]').forEach(el => el.textContent = t.hero.line1);
    document.querySelectorAll('[data-i18n="hero.line2"]').forEach(el => el.textContent = t.hero.line2);
    document.querySelectorAll('[data-i18n="hero.line3"]').forEach(el => el.textContent = t.hero.line3);
    document.querySelectorAll('[data-i18n="hero.line4"]').forEach(el => el.textContent = t.hero.line4);
    document.querySelectorAll('[data-i18n="hero.line5"]').forEach(el => el.textContent = t.hero.line5);
    document.querySelectorAll('[data-i18n="hero.description"]').forEach(el => el.textContent = t.hero.description);
    document.querySelectorAll('[data-i18n="hero.btnStart"]').forEach(el => el.textContent = t.hero.btnStart);
    document.querySelectorAll('[data-i18n="hero.btnServices"]').forEach(el => el.textContent = t.hero.btnServices);
    
    // Update stats
    document.querySelectorAll('[data-i18n="stats.companies"]').forEach(el => el.textContent = t.stats.companies);
    document.querySelectorAll('[data-i18n="stats.clients"]').forEach(el => el.textContent = t.stats.clients);
    document.querySelectorAll('[data-i18n="stats.experience"]').forEach(el => el.textContent = t.stats.experience);
    document.querySelectorAll('[data-i18n="stats.satisfaction"]').forEach(el => el.textContent = t.stats.satisfaction);
    
    // Update services
    document.querySelectorAll('[data-i18n="services.title"]').forEach(el => el.textContent = t.services.title);
    document.querySelectorAll('[data-i18n="services.subtitle"]').forEach(el => el.textContent = t.services.subtitle);
    document.querySelectorAll('[data-i18n="services.learnMore"]').forEach(el => el.textContent = t.services.learnMore);
    
    // Update CTA
    document.querySelectorAll('[data-i18n="cta.title"]').forEach(el => el.textContent = t.cta.title);
    document.querySelectorAll('[data-i18n="cta.subtitle"]').forEach(el => el.textContent = t.cta.subtitle);
    document.querySelectorAll('[data-i18n="cta.button"]').forEach(el => el.textContent = t.cta.button);

    // Update service cards
    const serviceCards = [
        { key: 'companyCreation', index: 0 },
        { key: 'accounting', index: 1 },
        { key: 'domiciliation', index: 2 },
        { key: 'selfEmployed', index: 3 },
        { key: 'medical', index: 4 },
        { key: 'consulting', index: 5 }
    ];
    
    serviceCards.forEach(({ key, index }) => {
        const cards = document.querySelectorAll('#services .card-hover');
        if (cards[index]) {
            const title = cards[index].querySelector('h3');
            const desc = cards[index].querySelector('p');
            if (title) title.textContent = t.services[key].title;
            if (desc) desc.textContent = t.services[key].desc;
        }
    });
    
    // Update about
    document.querySelectorAll('[data-i18n="about.title"]').forEach(el => el.textContent = t.about.title);
    document.querySelectorAll('[data-i18n="about.desc1"]').forEach(el => el.textContent = t.about.desc1);
    document.querySelectorAll('[data-i18n="about.desc2"]').forEach(el => el.textContent = t.about.desc2);
    
    // Update working hours
    document.querySelectorAll('[data-i18n="workingHours.title"]').forEach(el => el.textContent = t.workingHours.title);
    document.querySelectorAll('[data-i18n="workingHours.subtitle"]').forEach(el => el.textContent = t.workingHours.subtitle);
    
    // Update blog
    document.querySelectorAll('[data-i18n="blog.title"]').forEach(el => el.textContent = t.blog.title);
    document.querySelectorAll('[data-i18n="blog.subtitle"]').forEach(el => el.textContent = t.blog.subtitle);
    document.querySelectorAll('[data-i18n="blog.readMore"]').forEach(el => el.textContent = t.blog.readMore);
    
    // Update contact
    document.querySelectorAll('[data-i18n="contact.title"]').forEach(el => el.textContent = t.contact.title);
    document.querySelectorAll('[data-i18n="contact.subtitle"]').forEach(el => el.textContent = t.contact.subtitle);
    document.querySelectorAll('[data-i18n="contact.sendMessage"]').forEach(el => el.textContent = t.contact.sendMessage);
    document.querySelectorAll('[data-i18n="contact.fullName"]').forEach(el => el.textContent = t.contact.fullName);
    document.querySelectorAll('[data-i18n="contact.email"]').forEach(el => el.textContent = t.contact.email);
    document.querySelectorAll('[data-i18n="contact.phone"]').forEach(el => el.textContent = t.contact.phone);
    document.querySelectorAll('[data-i18n="contact.service"]').forEach(el => el.textContent = t.contact.service);
    document.querySelectorAll('[data-i18n="contact.message"]').forEach(el => el.textContent = t.contact.message);
    document.querySelectorAll('[data-i18n="contact.send"]').forEach(el => el.textContent = t.contact.send);
    
    // Update contact form labels and placeholders
    const nameLabel = document.querySelector('label[for="name"]');
    const emailLabel = document.querySelector('label[for="email"]');
    const phoneLabel = document.querySelector('label[for="phone"]');
    const serviceLabel = document.querySelector('label[for="service"]');
    const messageLabel = document.querySelector('label[for="message"]');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageTextarea = document.getElementById('message');
    const serviceSelect = document.getElementById('service');
    
    if (nameLabel) nameLabel.textContent = t.contact.fullName;
    if (emailLabel) emailLabel.textContent = t.contact.email;
    if (phoneLabel) phoneLabel.textContent = t.contact.phone;
    if (serviceLabel) serviceLabel.textContent = t.contact.service;
    if (messageLabel) messageLabel.textContent = t.contact.message;
    if (nameInput) nameInput.placeholder = t.contact.fullName;
    if (emailInput) emailInput.placeholder = t.contact.email;
    if (phoneInput) phoneInput.placeholder = t.contact.phone;
    if (messageTextarea) messageTextarea.placeholder = t.contact.messagePlaceholder;
    if (serviceSelect) {
        serviceSelect.innerHTML = `<option value="">${t.contact.selectService}</option>
            <option value="company-creation">${t.services.companyCreation.title}</option>
            <option value="accounting">${t.services.accounting.title}</option>
            <option value="domiciliation">${t.services.domiciliation.title}</option>
            <option value="self-employed">${t.services.selfEmployed.title}</option>
            <option value="medical">${t.services.medical.title}</option>
            <option value="consulting">${t.services.consulting.title}</option>`;
    }
    
    // Update working hours details
    document.querySelectorAll('[data-i18n="workingHours.regularHours"]').forEach(el => el.textContent = t.workingHours.regularHours);
    document.querySelectorAll('[data-i18n="workingHours.mondayFriday"]').forEach(el => el.textContent = t.workingHours.mondayFriday);
    document.querySelectorAll('[data-i18n="workingHours.saturday"]').forEach(el => el.textContent = t.workingHours.saturday);
    document.querySelectorAll('[data-i18n="workingHours.sunday"]').forEach(el => el.textContent = t.workingHours.sunday);
    document.querySelectorAll('[data-i18n="workingHours.contactInfo"]').forEach(el => el.textContent = t.workingHours.contactInfo);
    
    // Update about section details
    document.querySelectorAll('[data-i18n="about.expertTeam"]').forEach(el => el.textContent = t.about.expertTeam);
    document.querySelectorAll('[data-i18n="about.expertDesc"]').forEach(el => el.textContent = t.about.expertDesc);
    document.querySelectorAll('[data-i18n="about.clientFocused"]').forEach(el => el.textContent = t.about.clientFocused);
    document.querySelectorAll('[data-i18n="about.clientDesc"]').forEach(el => el.textContent = t.about.clientDesc);
    
    // Update blog posts
    const blogPosts = document.querySelectorAll('#blog .card-hover');
    if (blogPosts.length >= 3) {
        const blogCategories = [t.blog.businessTips, t.blog.taxUpdates, t.blog.industryNews];
        blogPosts.forEach((post, index) => {
            const category = post.querySelector('span');
            if (category && blogCategories[index]) {
                category.textContent = blogCategories[index];
            }
        });
    }
    
    // Update contact info section
    document.querySelectorAll('[data-i18n="contact.contactInfo"]').forEach(el => el.textContent = t.contact.contactInfo);
    document.querySelectorAll('[data-i18n="contact.businessHours"]').forEach(el => el.textContent = t.contact.businessHours);
    document.querySelectorAll('[data-i18n="contact.whyChoose"]').forEach(el => el.textContent = t.contact.whyChoose);
    document.querySelectorAll('[data-i18n="contact.yearsExp"]').forEach(el => el.textContent = t.contact.yearsExp);
    document.querySelectorAll('[data-i18n="contact.expertTeam"]').forEach(el => el.textContent = t.contact.expertTeam);
    document.querySelectorAll('[data-i18n="contact.personalized"]').forEach(el => el.textContent = t.contact.personalized);
    document.querySelectorAll('[data-i18n="contact.competitive"]').forEach(el => el.textContent = t.contact.competitive);
    document.querySelectorAll('[data-i18n="contact.confidential"]').forEach(el => el.textContent = t.contact.confidential);
    
    // Update language button
    const langBtn = document.getElementById('language-btn');
    if (langBtn) {
        const langNames = { fr: 'French', en: 'English', de: 'German' };
        langBtn.querySelector('span').textContent = langNames[lang];
    }
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    changeLanguage(currentLang);
});

// ============================================
// Modern Scroll Animations System
// ============================================

// Scroll Progress Indicator
const scrollProgress = document.getElementById('scroll-progress');
window.addEventListener('scroll', () => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    if (scrollProgress) {
        scrollProgress.style.width = scrolled + '%';
    }
});

// Language Dropdown Toggle
const languageBtn = document.getElementById('language-btn');
const languageDropdown = document.getElementById('language-dropdown');

if (languageBtn && languageDropdown) {
    // Toggle dropdown
    languageBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        e.preventDefault();
        const isHidden = languageDropdown.classList.contains('hidden');
        
        // Close all other dropdowns
        document.querySelectorAll('[id$="-dropdown"]').forEach(dropdown => {
            if (dropdown !== languageDropdown) {
                dropdown.classList.add('hidden');
            }
        });
        
        // Toggle current dropdown
        if (isHidden) {
            languageDropdown.classList.remove('hidden');
            // Rotate chevron
            const chevron = languageBtn.querySelector('i');
            if (chevron) {
                chevron.style.transform = 'rotate(180deg)';
            }
        } else {
            languageDropdown.classList.add('hidden');
            const chevron = languageBtn.querySelector('i');
            if (chevron) {
                chevron.style.transform = 'rotate(0deg)';
            }
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (languageBtn && languageDropdown && 
            !languageBtn.contains(e.target) && 
            !languageDropdown.contains(e.target)) {
            languageDropdown.classList.add('hidden');
            const chevron = languageBtn.querySelector('i');
            if (chevron) {
                chevron.style.transform = 'rotate(0deg)';
            }
        }
    });

    // Close dropdown when selecting a language
    if (languageDropdown) {
        languageDropdown.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const selectedLangText = link.textContent.trim();
                const langMap = { 'French': 'fr', 'English': 'en', 'German': 'de' };
                const langCode = langMap[selectedLangText];
                
                if (langCode) {
                    changeLanguage(langCode);
                }
                
                languageDropdown.classList.add('hidden');
                const chevron = languageBtn.querySelector('i');
                if (chevron) {
                    chevron.style.transform = 'rotate(0deg)';
                }
            });
        });
    }
    
    // Add transition for chevron
    if (languageBtn) {
        const chevron = languageBtn.querySelector('i');
        if (chevron) {
            chevron.style.transition = 'transform 0.3s ease';
        }
    }
}

// Mobile Menu Toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
        const icon = mobileMenuBtn.querySelector('i');
        if (mobileMenu.classList.contains('hidden')) {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        } else {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
            const icon = mobileMenuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Navbar Scroll Effect
const navbar = document.getElementById('navbar');
let ticking = false;

function updateNavbar() {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
        navbar?.classList.add('scrolled');
    } else {
        navbar?.classList.remove('scrolled');
    }
    
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        window.requestAnimationFrame(() => {
            updateNavbar();
            // Update active nav links
            updateActiveNavLinks();
        });
        ticking = true;
    }
});

// Function to update active nav links
function updateActiveNavLinks() {
    const currentScroll = window.pageYOffset;
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link-custom');
    const navbarHeight = navbar?.offsetHeight || 80;
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        const sectionId = section.getAttribute('id');
        
        if (currentScroll + navbarHeight + 100 >= sectionTop && 
            currentScroll + navbarHeight + 100 < sectionTop + sectionHeight) {
            current = sectionId;
        }
    });

    const sectionMap = {
        'home': 'Welcome',
        'about': 'About',
        'services': 'Services',
        'working-hours': 'Working hours',
        'blog': 'Blog',
        'contact': 'Contact'
    };

    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (current && href === `#${current}`) {
            link.classList.add('active');
        } else if (!current && (href === '#home' || link.textContent.trim() === 'Welcome')) {
            link.classList.add('active');
        }
    });
}

// Initial call to set active link on page load
document.addEventListener('DOMContentLoaded', () => {
    updateActiveNavLinks();
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Don't prevent default for language dropdown links
        if (href === '#' || this.closest('#language-dropdown')) {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
            const offsetTop = target.offsetTop - navbarHeight - 10;
            window.scrollTo({
                top: Math.max(0, offsetTop),
                behavior: 'smooth'
            });
            
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    });
});

// Modern Intersection Observer for Scroll Animations
const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Unobserve after animation to improve performance
            animationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
});

// Initialize animations on page load
document.addEventListener('DOMContentLoaded', () => {
    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll(
        '.fade-up, .fade-in, .slide-left, .slide-right, .scale-in, .rotate-in'
    );
    
    animatedElements.forEach(el => {
        animationObserver.observe(el);
    });

    // Text reveal animation
    const textRevealElements = document.querySelectorAll('.text-reveal');
    textRevealElements.forEach(el => {
        const words = el.textContent.split(' ');
        el.innerHTML = words.map((word, index) => 
            `<span style="transition-delay: ${index * 0.05}s">${word}</span>`
        ).join(' ');
        
        // Observe the parent element
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        observer.observe(el);
    });

    // Animate hero section immediately on load
    const heroElements = document.querySelectorAll('#home .slide-left, #home .slide-right, #home .fade-up, #home .fade-in');
    heroElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('animate');
        }, index * 150);
    });
});

// Counter Animation for Statistics
function animateCounter(element, target, duration = 2000, suffix = '') {
    let start = 0;
    const increment = target / (duration / 16);
    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target + suffix;
            element.classList.add('count-animate');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start) + suffix;
        }
    }, 16);
}

// Stats Counter Observer
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach((stat, index) => {
                setTimeout(() => {
                    const target = parseInt(stat.getAttribute('data-target'));
                    const suffix = stat.getAttribute('data-suffix') || '';
                    if (target) {
                        stat.textContent = '0' + suffix;
                        animateCounter(stat, target, 2000, suffix);
                    }
                }, index * 100);
            });
            entry.target.classList.add('animated');
        }
    });
}, { threshold: 0.5 });

// Observe stats section
const statsSection = document.getElementById('home');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Back to Top Button
const backToTopBtn = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.remove('hidden');
    } else {
        backToTopBtn.classList.add('hidden');
    }
});

if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact Form Handling
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form data
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            service: document.getElementById('service').value,
            message: document.getElementById('message').value
        };

        // Validate form
        if (!formData.name || !formData.email || !formData.message) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }

        // Simulate form submission
        showFormMessage('Thank you for your message! We will get back to you soon.', 'success');
        
        // Reset form
        contactForm.reset();
    });
}

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.classList.remove('hidden');
    
    if (type === 'success') {
        formMessage.classList.remove('bg-red-100', 'text-red-700', 'border-red-400');
        formMessage.classList.add('bg-green-100', 'text-green-700', 'border', 'border-green-400');
    } else {
        formMessage.classList.remove('bg-green-100', 'text-green-700', 'border-green-400');
        formMessage.classList.add('bg-red-100', 'text-red-700', 'border', 'border-red-400');
    }

    // Hide message after 5 seconds
    setTimeout(() => {
        formMessage.classList.add('hidden');
    }, 5000);
}

// Smooth parallax effect for hero section
let parallaxTicking = false;
window.addEventListener('scroll', () => {
    if (!parallaxTicking) {
        window.requestAnimationFrame(() => {
            const heroSection = document.getElementById('home');
            if (heroSection && window.pageYOffset < window.innerHeight) {
                const scrolled = window.pageYOffset;
                const parallaxElements = heroSection.querySelectorAll('.parallax-slow');
                parallaxElements.forEach((el, index) => {
                    const speed = 0.3 + (index * 0.1);
                    el.style.transform = `translateY(${scrolled * speed}px)`;
                });
            }
            parallaxTicking = false;
        });
        parallaxTicking = true;
    }
});

// Performance optimization: Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Add smooth reveal animation on page load
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger initial hero animations
    setTimeout(() => {
        const heroElements = document.querySelectorAll('#home .slide-left, #home .slide-right');
        heroElements.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('animate');
            }, index * 200);
        });
    }, 100);
});

// Enhanced button ripple effect
document.querySelectorAll('.btn-primary, button[type="submit"]').forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Lazy loading for images (if any are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Smooth scroll behavior enhancement
document.documentElement.style.scrollBehavior = 'smooth';

// ============================================
// Animated Particles Background
// ============================================
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    if (!particlesContainer) return;
    
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 4 + 2;
        particle.style.width = size + 'px';
        particle.style.height = size + 'px';
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animationDelay = Math.random() * 20 + 's';
        particle.style.animationDuration = (Math.random() * 10 + 15) + 's';
        
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// ============================================
// FAQ Accordion
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');
                
                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                    }
                });
                
                // Toggle current item
                item.classList.toggle('active', !isActive);
            });
        }
    });
});

// ============================================
// Toast Notification System
// ============================================
function showToast(message, type = 'success') {
    // Remove existing toast
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create new toast
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
    const iconColor = type === 'success' ? '#10b981' : '#ef4444';
    
    toast.innerHTML = `
        <i class="fas ${icon}" style="color: ${iconColor}; font-size: 1.5rem;"></i>
        <span>${message}</span>
    `;
    
    document.body.appendChild(toast);
    
    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 100);
    
    // Hide and remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// Toast notification is already integrated in the form handler above

// ============================================
// Enhanced Scroll Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-up, .fade-in, .slide-left, .slide-right, .scale-in');
    animatedElements.forEach(el => {
        scrollObserver.observe(el);
    });
});

// ============================================
// Smooth Scroll with Offset
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        if (href === '#' || this.closest('#language-dropdown')) {
            return;
        }
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const navbarHeight = document.getElementById('navbar')?.offsetHeight || 80;
            const offsetTop = target.offsetTop - navbarHeight - 10;
            window.scrollTo({
                top: Math.max(0, offsetTop),
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Enhanced Card Interactions
// ============================================
document.querySelectorAll('.card-hover').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Parallax effect is already handled above, no need to duplicate
