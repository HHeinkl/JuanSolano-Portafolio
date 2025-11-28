document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. Lógica del Menú Móvil ---
    const menuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if(menuBtn && navMenu) {
        menuBtn.addEventListener('click', () => {
            if (navMenu.style.display === 'flex') {
                navMenu.style.display = 'none';
            } else {
                navMenu.style.display = 'flex';
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '100%';
                navMenu.style.left = '0';
                navMenu.style.width = '100%';
                navMenu.style.backgroundColor = 'rgba(15, 15, 15, 0.98)';
                navMenu.style.padding = '1.5rem';
                navMenu.style.borderBottom = '1px solid var(--border-color)';
            }
        });
    }

    // --- 2. Animaciones al Scroll (Intersection Observer) ---
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.fade-in, .stagger-item');
    animatedElements.forEach(el => observer.observe(el));


    // --- 3. Traducción Español / Inglés ---
    
    const translations = {
        es: {
            nav_about: "Sobre mí",
            nav_skills: "Habilidades",
            nav_values: "Valores",
            nav_projects: "Proyectos",
            nav_contact: "Contacto",
            hero_subtitle: "Donde la creatividad encuentra el código",
            btn_projects: "Ver proyectos",
            btn_contact: "Contactar",
            btn_download_cv: "Descargar Currículum", 
            
            contact_title: "Hablemos de tu proyecto", 
            contact_sub: "Envíame un mensaje directo y te responderé lo antes posible.",
            btn_send: "Enviar Mensaje",
            
            form_name_ph: "Tu Nombre",
            form_email_ph: "Tu Correo Electrónico",
            form_subject_ph: "Asunto del Mensaje",
            form_message_ph: "Tu Mensaje...",

            section_about: "Sobre mí",
            profile_title: "Perfil Profesional",
            profile_text: "Ingeniero en Desarrollo de Software con experiencia en soporte técnico y en la creación de soluciones tecnológicas en backend utilizando .NET MVC, Spring Boot, Angular e implementación de APIs de Inteligencia Artificial.",
            mission_title: "Misión",
            mission_text: "Brindar soluciones tecnológicas innovadoras y funcionales que impulsen la productividad y eficiencia de las organizaciones, aplicando mis conocimientos en programación y desarrollo web.",
            vision_title: "Visión",
            vision_text: "Convertirme en un profesional altamente especializado en desarrollo de software y arquitectura de soluciones tecnológicas, contribuyendo a proyectos con impacto positivo.",
            
            section_skills: "Habilidades Técnicas",
            skill_fe: "Frontend",
            skill_be: "Backend",
            skill_resp: "Responsive",
            skill_devops: "DevOps",
            section_values: "Valores",
            val_innovation: "Innovación",
            val_innovation_text: "Buscar constantemente nuevas formas de resolver problemas mediante la tecnología.",
            val_resp: "Responsabilidad",
            val_resp_text: "Cumplir con compromiso y ética en cada proyecto.",
            val_team: "Trabajo en equipo",
            val_team_text: "Colaborar para alcanzar metas comunes.",
            val_learn: "Aprendizaje continuo",
            val_learn_text: "Mantenerme en constante actualización tecnológica.",
            val_customer: "Orientación al cliente",
            val_customer_text: "Desarrollar soluciones centradas en el usuario.",
            val_quality: "Calidad",
            val_quality_text: "Entregar productos de alta calidad y rendimiento.",
            
            section_projects: "Proyectos Destacados",
            
            proj_system: "Sitio web de Gimnasio", 
            proj_system_text: "Plataforma web para registro y gestión de gimnasio", 
            
            proj_summary: "Página de Resúmenes Automatizada", 
            proj_summary_text: "Página para generación de resúmenes y presentaciones usando AI", 
        },
        en: {
            nav_about: "About Me",
            nav_skills: "Skills",
            nav_values: "Values",
            nav_projects: "Projects",
            nav_contact: "Contact",
            hero_subtitle: "Where creativity meets code",
            btn_projects: "View Projects",
            btn_contact: "Contact",
            btn_download_cv: "Download Resume (CV)",
            
            contact_title: "Let's talk about your project",
            contact_sub: "Send me a direct message and I'll reply as soon as possible.",
            btn_send: "Send Message",

            form_name_ph: "Your Name",
            form_email_ph: "Your Email",
            form_subject_ph: "Message Subject",
            form_message_ph: "Your Message...",
            
            section_about: "About Me",
            profile_title: "Professional Profile",
            profile_text: "Software Development Engineer with experience in technical support and the creation of backend technological solutions using .NET MVC, Spring Boot, Angular, and the implementation of Artificial Intelligence APIs.",
            mission_title: "Mission",
            mission_text: "Providing innovative and functional technological solutions that drive organizational productivity and efficiency, applying my knowledge in programming and web development.",
            vision_title: "Vision",
            vision_text: "To become a highly specialized professional in software development and technological solution architecture, contributing to projects with positive impact.",
            
            section_skills: "Technical Skills",
            skill_fe: "Frontend",
            skill_be: "Backend",
            skill_resp: "Responsive",
            skill_devops: "DevOps",
            section_values: "Values",
            val_innovation: "Innovation",
            val_innovation_text: "Constantly seeking new ways to solve problems through technology.",
            val_resp: "Responsibility",
            val_resp_text: "Fulfilling every project with commitment and ethics.",
            val_team: "Teamwork",
            val_team_text: "Collaborating to achieve common goals.",
            val_learn: "Continuous Learning",
            val_learn_text: "Keeping constantly updated with technology.",
            val_customer: "Customer Focus",
            val_customer_text: "Developing user-centered solutions.",
            val_quality: "Quality",
            val_quality_text: "Delivering high-quality and high-performance products.",
            
            section_projects: "Featured Projects",
            
            proj_system: "Gym Website",
            proj_system_text: "Web platform for gym registration and management",
            
            proj_summary: "Automated Summaries Page", 
            proj_summary_text: "Page for generating summaries and presentations using AI", 
        }
    };

    const langToggle = document.getElementById('lang-toggle');
    const langText = document.querySelector('.lang-text');
    let currentLang = 'es';

    // Inicializar textos al cargar la página
    updateTexts();

    if(langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'es' ? 'en' : 'es';
            langText.textContent = currentLang === 'es' ? 'EN' : 'ES';
            updateTexts();
        });
    }

    function updateTexts() {
        // Seleccionamos elementos que tienen data-i18n (contenido) o data-i18n-placeholder (atributos)
        const elements = document.querySelectorAll('[data-i18n], [data-i18n-placeholder]');
        
        elements.forEach(element => {
            // 1. Manejo del contenido de texto (data-i18n)
            const key = element.getAttribute('data-i18n');
            if (translations[currentLang][key]) {
                if (key === 'hero_subtitle') {
                    if (currentLang === 'en') {
                        element.innerHTML = 'Where <span class="accent-text">creativity</span> meets <span class="accent-text">code</span>';
                    } else {
                        element.innerHTML = 'Donde la <span class="accent-text">creatividad</span> encuentra el <span class="accent-text">código</span>';
                    }
                } else {
                    element.textContent = translations[currentLang][key];
                }
            }
            
            // 2. Manejo del atributo placeholder (data-i18n-placeholder)
            const placeholderKey = element.getAttribute('data-i18n-placeholder');
            if (placeholderKey && translations[currentLang][placeholderKey]) {
                element.setAttribute('placeholder', translations[currentLang][placeholderKey]);
            }
        });

        // 3. Traducción de contenido por ID (para el botón de CV)
        const downloadBtn = document.getElementById('download-cv-btn');
        if (downloadBtn) {
            downloadBtn.innerHTML = ''; // Limpiar contenido anterior
            const key = 'btn_download_cv'; 
            if (translations[currentLang][key]) {
                const icon = document.createElement('span');
                icon.className = 'material-icons';
                icon.textContent = 'download';
                downloadBtn.appendChild(icon);
                downloadBtn.appendChild(document.createTextNode(' ' + translations[currentLang][key]));
            }
        }
    }
});