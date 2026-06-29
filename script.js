/*
 * LES DONNées
 */
const data = {
  fr: {
    aboutTitle: "À propos de moi",
    about_info_title: "Infos & Contact",
    about_hobbies_title: "Passions",

    aboutInfo: [
      { label: "Email :", value: "mohamed.camara@etu.univ-smb.fr" },
      { label: "Email personnel :", value: "medcamara1095@gmail.com" },
      { label: "Téléphone :", value: "06 35 72 75 46" },
      { label: "Ville :", value: "Annecy" },
      { label: "Études :", value: "BUT Informatique — IUT d’Annecy" },
    ],

    //   about: `
    //Si jamais j ai besoin d'une breve presentation
    // `,
    hobby_DB: "La conception et gestion de base de données",
    hobby_web: "Développement web",
    hobby_mangas: "Regarder et lire des mangas",
    hobby_sport: "Sport",
    hobby_music: "Ecouter de la musique",
    hobby_projects: "Création de projets personnels",

    // aboutTitle: "À propos de moi",
    // about: `
    //   Je suis Mohamed Camara, étudiant en deuxième année de BUT Informatique à l’IUT d’Annecy.
    //   Passionné par la programmation, le développement web et la conception logicielle,
    //   je cherche à améliorer mes compétences à travers des projets concrets et des expériences professionnelles.
    //   Je suis motivé, curieux, sérieux et toujours prêt à apprendre de nouvelles technologies.
    // `,

    parcoursTitle: "Parcours",
    eduTitle: "Éducation",
    expTitle: "Expériences",
    projectsTitle: "Projets universitaires",
    portfolioTitle: "Portfolio",
    skillsTitle: "Compétences techniques",
    languagesTitle: "Langues",
    referencesTitle: "Références",
    cvPreview: "Aperçu du CV",

    education: [
      {
        title: "BUT Informatique — IUT Annecy",
        period: "2024 - Présent",
        short: "Développement, programmation, BDD",
      },
      {
        title: "Classes préparatoires scientifiques",
        period: "2023 - 2024",
        short: "Maths, physique, informatique",
      },
      {
        title: "Baccalauréat Scientifique",
        period: "2022",
        short: "Mention Bien, Mauritanie",
      },
    ],

    experiences: [
      {
        title:
          "Stagiaire Développeur Data & Full-Stack — Mairie de Dingy-St-Clair",
        period: "04/2026-06/2026",
        short:
          "Conception from scratch d'un ERP :Rédaction du cahier des charges, modélisation SQL (PostgreSQL/PostGIS), développement Laravel, automatisation ETL, Conformité RGPD, Conformité RGPD.",
      },
      {
        title: "Employé polyvalent — McDonald's",
        period: "10/2024-08/2025",
        short:
          "Service client, gestion d'équipe en flux tendu et respect strict des procédures opérationnelles",
      },

      {
        title: "Employé polyvalent — Sodexo (Jeux Olympiques 2024)",
        period: "06/2024 - 08/2024",
        short: "Accueil des athlètes, service client, Gestion de stocks",
      },
      {
        title: "Mini-Stage Web Designer — ALISON",
        period: "06/2023 - 08/2023",
        short: "Site responsive Bootstrap",
      },
    ],

    projects: [
      {
        title: "Projet universitaire Laravel — Site Web",
        period: "10/2025 – 01/2026",
        short:
          "Développement d’une application web complète en Laravel avec authentification, CRUD, PostgreSQL et UML.",
      },
      {
        title: "Projet universitaire — Application de gestion (C# / .NET)",
        period: "04/2025 – 06/2025",
        short:
          "Développement d’une application complète en C#/.NET, PostgreSql et UML (gestion cours, moniteurs, inscriptions)",
      },
      {
        title: "Projet universitaire C# — Gameplay",
        period: "10/2024 – 01/2025",
        short:
          "Développement d’un jeu interactif en C#/.NET : gameplay, collisions, sprites et architecture orientée objet.",
      },
    ],

    portfolio: [
      {
        title:
          "Stagiaire Data Engineer & Développeur Full-Stack — Mairie de Dingy-Saint-Clair",
        tags: [
          "PostgreSQL",
          "PostGIS",
          "ETL & Data Cleansing",
          "Merise",
          "UML",
          "Laravel",
          "PHP",
          "SQL Avancé",
          "Analyse de besoins",
          "Audit",
          "RGPD",
        ],
        img: "img/tableau_bord.png",
        link: "https://github.com/CAMARAMohamed01/stage_erp_mairie",
        detail: `
    Conception et développement complet ("from scratch") d'une solution centralisée de gestion patrimoniale et de suivi technique.
    - Analyse des besoins et modélisation de la base de données (Merise/UML).
    - Mise en place d'une base de données relationnelle et spatiale (PostgreSQL/PostGIS).
    - Développement de scripts ETL pour le nettoyage et la migration de données historiques (fichiers Excel complexes).
    - Développement d'une interface web sécurisée (Laravel) avec gestion des droits d'accès.
    - Conformité RGPD : Protection des données à caractère personnel et sécurisation des accès.
    - Rédaction de la documentation technique et utilisateur.

    Compétences développées :
    - Ingénierie des données & ETL
    - Architecture Base de Données
    - Développement full-stack sécurisé
    - Sécurité des données & Conformité RGPD
    - Gestion de projet métier & Recueil des besoins
    - Communication
  `,
      },
      {
        title: "Projet Laravel — Site Web",
        tags: ["Laravel", "PHP", "HTML", "PostgreSQL", "UML", "Merise"],
        img: "img/leboncoin.jpg",
        link: "https://github.com/CAMARAMohamed01/Sae_leboncoin",
        detail: `
          Développement complet d’un site web Laravel :
          - Authentification
          - CRUD complet
          - Base de données PostgreSQL optimisée
          - UML (cas d’usage + classes)

          Technologies :
        - PHP LARAVEL
        - HTML
        - PostgreSQL
        - UML (diagrammes de use case, de classes, de séquences, d'états...)
        - BPMN
        `,
      },
      {
        title: "Employé polyvalent — McDonald's",
        tags: [
          "Travail d’équipe",
          "Rapidité",
          "Service client",
          "Restauration",
        ],
        img: "img/mcdo.jpg",
        link: "https://www.mcdonalds.fr/",
        detail: `
        Expérience en restauration rapide au sein de McDonald's.
        - Accueil et service client
        - Préparation des commandes
        - Gestion du rythme en heures de pointe
        - Respect des procédures d’hygiène et de sécurité
        - Travail d’équipe en environnement dynamique
        
        Compétences développées :
        - Relation client
        - Réactivité
        - Organisation
        - Communication
  `,
      },
      {
        title: "Projet Universitaire — Application de gestion (C# / .NET)",
        tags: ["C#", ".NET", "PostgreSQL", "UML", "Merise"],
        img: "img/esf.png",
        link: "https://github.com/CAMARAMohamed01/SAE2.01",
        detail: `
        Projet universitaire : 
        Développement d'une application complète de gestion pour administrer :
        - Moniteurs
        - Cours
        - Inscriptions etc

        Technologies :
        - C# / .NET
        - PostgreSQL
        - UML (diagrammes de use case, de classes, d'états...)
    `,
      },
      {
        title: "Projet C# — Gameplay",
        tags: ["C#", ".NET", "Game Dev", "POO"],
        img: "img/jeu.png",
        link: "https://github.com/CAMARAMohamed01",
        detail: `
        Développement d’un jeu 2D interactif en C#/.NET.
        - Conception des mécaniques (attaque, défense, interactions)
        - Gestion des collisions et des sprites
        - Architecture orientée objet
        - Interfaces utilisateur dynamiques
        - Optimisation des performances

        Technologies :
        - C# / .NET
        - POO
  `,
      },
      {
        title: "Employé polyvalent — Sodexo (Jeux Olympiques 2024)",
        tags: ["Accueil", "Service", "Événementiel", "JO 2024"],
        img: "img/jo.jpg",
        link: "https://www.sodexo.fr/secteurs/sodexo-live",
        detail: `
        Mission événementielle pour les Jeux Olympiques 2024.
        - Accueil des athlètes et visiteurs
        - Service en restauration collective
        - Gestion des flux et respect des protocoles
        - Travail en équipe dans un contexte international
        - Adaptation rapide à des situations variées

        Compétences développées :
        - Sens du service
        - Gestion des priorités
        - Travail sous pression
        - Communication interculturelle
  `,
      },
      {
        title: "Web Designer — ALISON",
        tags: ["Bootstrap", "Responsive Design", "UX/UI", "Web Design"],
        img: "img/alison.png",
        link: "https://alison.com/",
        detail: `
        Conception de sites web modernes et responsives.
        - Création de maquettes et interfaces
        - Intégration HTML/CSS avec Bootstrap
        - Optimisation de l’expérience utilisateur (UX/UI)
        - Tests mobiles et adaptation multi-écran
        - Collaboration avec l’équipe sur les choix graphiques

        Technologies :
        - Bootstrap
        - HTML / CSS
        - UX/UI
  `,
      },
    ],

    skills: [
      { title: "Systèmes d’exploitation", items: ["Windows", "Linux"] },
      {
        title: "Langages orientés objet",
        items: ["C# .NET", "Python", "PHP"],
      },
      { title: "Langages web", items: ["HTML", "CSS", "JavaScript", "PHP"] },
      { title: "Bases de données", items: ["PostgreSQL", "SQL"] },
    ],

    languages: [
      { lang: "Soninké", level: "Langue maternelle" },
      { lang: "Anglais", level: "B1" },
    ],

    references: [
      {
        name: "Pascal COLIN",
        role: "Professeur UML & SQL — IUT Annecy",
        email: "pascal.colin@univ-smb.fr",
      },
      {
        name: "Luc DAMAS",
        role: "Professeur Web — IUT Annecy",
        email: "luc.damas@univ-smb.fr",
      },
    ],
  },

  /*
   * VERSION ANGLAISE
   */
  en: {
    aboutTitle: "About Me",
    about_info_title: "Info & Contact",
    about_hobbies_title: "Hobbies",

    aboutInfo: [
      { label: "Email:", value: "mohamed.camara@etu.univ-smb.fr" },
      { label: "Personal email:", value: "medcamara1095@gmail.com" },
      { label: "Phone:", value: "06 35 72 75 46" },
      { label: "City:", value: "Annecy" },
      { label: "Studies:", value: "BUT Computer Science — IUT Annecy" },
    ],

    //   about: `

    // `,
    hobby_DB: "Database design and management",
    hobby_web: "Web development",
    hobby_mangas: "Watch and read mangas",
    hobby_sport: "Sports",
    hobby_music: "Listen to music",
    hobby_projects: "Personal project creation",

    parcoursTitle: "Path",
    eduTitle: "Education",
    expTitle: "Work Experience",
    projectsTitle: "University Projects",
    portfolioTitle: "Portfolio",
    skillsTitle: "Technical Skills",
    languagesTitle: "Languages",
    referencesTitle: "References",
    cvPreview: "CV Preview",

    education: [
      {
        title: "BUT Computer Science — IUT Annecy",
        period: "2024 - Present",
        short: "Programming, development, DB",
      },
      {
        title: "Preparatory Scientific Classes",
        period: "2023 - 2024",
        short: "Maths, physics, CS",
      },
      {
        title: "Scientific Baccalaureate",
        period: "2022",
        short: "With honors, Mauritania",
      },
    ],

    experiences: [
      {
        title: "Data & Full-Stack Developer Intern — Dingy-St-Clair City Hall",
        period: "04/2026 - 06/2026",
        short:
          "Built an ERP from scratch: Requirements specification, SQL modeling (PostgreSQL/PostGIS), Laravel development, ETL automation, and GDPR compliance.",
      },
      {
        title: "Versatile Employee — McDonald's",
        period: "10/2024 - 08/2025",
        short: "Customer service, preparation",
      },
      {
        title: "Employe — Sodexo (Olympic Games)",
        period: "06/2024 - 08/2024",
        short: "Athlete welcoming, service, inventory management",
      },
      {
        title: "Web Designer Intern — ALISON",
        period: "06/2023 - 08/2023",
        short: "Responsive Bootstrap site",
      },
    ],

    projects: [
      {
        title: "Universitary Projet — Site Web (Laravel / PHP)",
        period: "10/2025 – 01/2026",
        short:
          "Development of a complete web site in Laravel with authentication, CRUD, PostgreSQL and UML.",
      },
      {
        title: "University Project — Management App (C# / .NET)",
        period: "04/2025 – 06/2025",
        short:
          "Complete C#/.NET application with pgSql(courses, instructors, registrations)",
      },
      {
        title: "Universitary Projet C# — Gameplay",
        period: "10/2024 – 01/2025",
        short:
          "Development of an interactive 2D game in C#/.NET: gameplay (attacks/defenses), collisions, sprites and object-oriented architecture.",
      },
    ],

    portfolio: [
      {
        title:
          "Data Engineer & Full-Stack Developer Intern — Dingy-Saint-Clair City Hall",
        tags: [
          "PostgreSQL",
          "PostGIS",
          "ETL & Data Cleansing",
          "Merise",
          "UML",
          "Laravel",
          "PHP",
          "Advanced SQL",
          "Requirements Analysis",
          "Audit",
          "GDPR",
        ],
        img: "img/tableau_bord.png",
        link: "https://github.com/CAMARAMohamed01/stage_erp_mairie",
        detail: `
    End-to-end design and development ("from scratch") of a centralized asset management and technical tracking ERP solution.
    - Requirements analysis and database modeling (Merise/UML).
    - Implementation of a relational and spatial database (PostgreSQL/PostGIS).
    - Development of ETL scripts for cleaning and migrating historical data (from complex Excel files).
    - Development of a secure web interface (Laravel) with role-based access control (RBAC).
    - GDPR Compliance: Protection of personal data and secure access management.
    - Drafting of technical and user documentation.

    Skills developed:
    - Data Engineering & ETL
    - Database Architecture
    - Secure Full-Stack Development
    - Data Security & GDPR Compliance
    - IT Project Management & Requirements Gathering
    - Communication
  `,
      },
      {
        title: "Laravel Project — Web site",
        tags: ["Laravel", "PHP", "HTML", "PostgreSQL", "UML", "Merise"],
        img: ".img/leboncoin.jpg",
        link: "https://github.com/CAMARAMohamed01/Sae_leboncoin",
        detail: `
          Full Laravel application:
          - Authentication
          - CRUD
          - Optimized PostgreSQL database
          - UML diagrams

          Technologies :
          - PHP LARAVEL
          -HTML
          - PostgreSQL
          - UML (use case diagrams, class diagrams, state diagrams, etc.)
          - BPMN
        `,
      },
      {
        title: "Multi-skilled Employe — McDonald's",
        tags: ["Teamwork", "Customer Service", "Food Service", "Fast-paced"],
        img: "img/mcdo.jpg",
        link: "https://www.mcdonalds.fr/",
        detail: `
        Fast-food work experience at McDonald's.
        - Customer reception and assistance
        - Order preparation and quality control
        - Handling peak-hour rush efficiently
        - Compliance with hygiene and safety standards
        - Teamwork in a fast-paced environment

        Skills gained:
        - Customer relations
        - Reactivity
        - Organization
        - Communication
  `,
      },
      {
        title: "Universitary Projet — Management application (C# / .NET)",
        tags: ["C#", ".NET", "PostgreSQL", "UML", "Merise"],
        img: "img/esf.png",
        link: "https://github.com/CAMARAMohamed01/SAE2.01",
        detail: `
        University Project :
        Development of a complete management application to administer:

        - Instructors

        - Courses

        - Registrations, etc.

        Technologies :
        - C# / .NET
        - PostgreSQL
        - UML (diagrammes de use case, de classes, d'états...)
    `,
      },
      {
        title: "C# Project — Gameplay",
        tags: ["C#", ".NET", "Game Dev", "OOP"],
        img: "img/jeu.png",
        link: "https://github.com/CAMARAMohamed01",
        detail: `
        Development of an interactive 2D game using C#/.NET.
        - Gameplay mechanics (attack, defense, interactions)
        - Collision and sprite management
        - Object-oriented architecture
        - Dynamic user interface
        - Performance optimization

        Technologies:
        - C# / .NET
        - OOP
  `,
      },
      {
        title: "Versatile Employee — Sodexo (2024 Olympic Games)",
        tags: ["Hospitality", "Service", "Event", "Olympics"],
        img: ".img/jo.jpg",
        link: "https://www.sodexo.fr/secteurs/sodexo-live",
        detail: `
        Event mission during the 2024 Olympic Games.
        - Welcoming athletes and visitors
        - Food service and customer assistance
        - Managing large crowds and following protocols
        - Teamwork in an international environment
        - Ability to adapt to changing situations\n

        Skills gained:
        - Service-oriented mindset
        - Priority management
        - Working under pressure
        - Intercultural communication
  `,
      },
      {
        title: "Web Designer — ALISON",
        tags: ["Bootstrap", "Responsive Design", "UX/UI", "Web Design"],
        img: ".img/alison.png",
        link: "https://alison.com/",
        detail: `
        Design and development of modern responsive websites.
        - Creation of mockups and interfaces
        - HTML/CSS integration using Bootstrap
        - UX/UI optimization for user experience
        - Mobile testing and multi-device adaptation
        - Collaboration with the team on graphic choices

        Technologies:
        - Bootstrap
        - HTML / CSS
        - UX/UI
  `,
      },
    ],

    skills: [
      {
        title: "Operating Systems",
        items: [
          { name: "Windows", level: 90 },
          { name: "Linux", level: 60 },
        ],
      },
      {
        title: "Object-oriented languages",
        items: [
          { name: "C# .NET", level: 65 },
          { name: "Python", level: 70 },
          { name: "PHP", level: 50 },
        ],
      },
      {
        title: "Web languages",
        items: [
          { name: "HTML", level: 75 },
          { name: "CSS", level: 65 },
          { name: "JavaScript", level: 75 },
          { name: "PHP", level: 70 },
        ],
      },
      {
        title: "Databases",
        items: [
          { name: "PostgreSQL", level: 80 },
          { name: "SQL", level: 60 },
        ],
      },
    ],

    languages: [
      { lang: "Soninke", level: "Native speaker", levelValue: 100 },
      { lang: "English", level: "B1", levelValue: 50 },
    ],

    references: [
      {
        name: "Pascal COLIN",
        role: "UML & SQL Teacher — IUT Annecy",
        email: "pascal.colin@univ-smb.fr",
      },
      {
        name: "Luc DAMAS",
        role: "Web Teacher — IUT Annecy",
        email: "luc.damas@univ-smb.fr",
      },
    ],
  },
};

/*
 * Les elements DOM
 */
let lang = "fr";

const aboutText = document.getElementById("about-text");
const parcoursEdu = document.getElementById("parcours-education");
const parcoursExp = document.getElementById("parcours-experiences");
const parcoursProjects = document.getElementById("parcours-projects");
const portfolioList = document.getElementById("portfolio-list");
const skillsList = document.getElementById("skills-list");
const languagesList = document.getElementById("languages-list");
const referencesList = document.getElementById("references-list");
const filterInput = document.getElementById("filter-input");

const cvModal = document.getElementById("cv-modal");
const viewCvBtn = document.getElementById("view-cv-btn");
const closeCvBtn = document.getElementById("close-cv");
const printCvBtn = document.getElementById("print-cv");
const cvFrame = document.getElementById("cv-frame");

const langToggle = document.getElementById("lang-toggle");

/*
 * UTILITAIRES
 */
function clear(node) {
  while (node.firstChild) node.removeChild(node.firstChild);
}

function createCard(obj) {
  const card = document.createElement("div");
  card.classList.add("card");

  if (obj.img) {
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("card-img");
    imgDiv.style.backgroundImage = `url('${obj.img}')`;
    // Lien cliquable sur l'image
    if (obj.link) {
      imgDiv.style.cursor = "pointer";
      imgDiv.onclick = () => window.open(obj.link, "_blank");
    }
    card.appendChild(imgDiv);
  }

  const content = document.createElement("div");
  content.classList.add("card-content");

  const h3 = document.createElement("h3");
  h3.textContent = obj.title;
  card.appendChild(h3);

  if (obj.period) {
    const p = document.createElement("p");
    p.classList.add("period"); // Pour styliser en CSS
    p.textContent = obj.period;
    content.appendChild(p);
  }

  if (obj.short) {
    const p = document.createElement("p");
    p.textContent = obj.short;
    card.appendChild(p);
  }

  if (obj.tags) {
    const box = document.createElement("div");
    obj.tags.forEach((t) => {
      let tag = document.createElement("span");
      tag.classList.add("badge");
      tag.textContent = t;
      box.appendChild(tag);
    });
    card.appendChild(box);
  }

  if (obj.detail) {
    const btn = document.createElement("button");
    btn.textContent = "Details";
    btn.addEventListener("click", () => {
      if (card.classList.contains("open")) {
        card.classList.remove("open");
        card.querySelector(".detail").remove();
        btn.textContent = "Details";
      } else {
        card.classList.add("open");
        const d = document.createElement("p");
        d.classList.add("detail");
        // d.textContent = obj.detail;
        d.innerHTML = obj.detail.trim().replace(/\n/g, "<br>"); //Pour ne pas coller tous les details

        card.appendChild(d);
        btn.textContent = "Close";
      }
    });
    card.appendChild(btn);
  }
  card.appendChild(content);
  return card;
}

/*
 RENDU DES SECTIONS
 */
function renderAbout() {
  document.querySelector('[data-i18n="about_title"]').textContent =
    data[lang].aboutTitle;

  // aboutText.textContent = data[lang].about.trim(); pas esoin pour l'instant

  // remplir la liste Infos & Contact
  const aboutInfoList = document.getElementById("about-info-list");
  aboutInfoList.innerHTML = "";

  data[lang].aboutInfo.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<strong>${item.label}</strong> ${item.value}`;
    aboutInfoList.appendChild(li);
  });
  // passions
  document.querySelector('[data-i18n="hobby_DB"]').textContent =
    data[lang].hobby_DB;

  document.querySelector('[data-i18n="hobby_projects"]').textContent =
    data[lang].hobby_projects;

  document.querySelector('[data-i18n="hobby_web"]').textContent =
    data[lang].hobby_web;

  document.querySelector('[data-i18n="hobby_mangas"]').textContent =
    data[lang].hobby_mangas;

  document.querySelector('[data-i18n="hobby_sport"]').textContent =
    data[lang].hobby_sport;

  document.querySelector('[data-i18n="hobby_music"]').textContent =
    data[lang].hobby_music;
}

function renderParcours() {
  clear(parcoursEdu);
  clear(parcoursExp);
  clear(parcoursProjects);

  data[lang].education.forEach((e) => parcoursEdu.appendChild(createCard(e)));
  data[lang].experiences.forEach((e) => parcoursExp.appendChild(createCard(e)));
  data[lang].projects.forEach((p) =>
    parcoursProjects.appendChild(createCard(p)),
  );

  document.querySelector('[data-i18n="edu_title"]').textContent =
    data[lang].eduTitle;
  document.querySelector('[data-i18n="exp_title"]').textContent =
    data[lang].expTitle;
  document.querySelector('[data-i18n="projects_title"]').textContent =
    data[lang].projectsTitle;
}

// function renderPortfolio(filter = "") {
//   clear(portfolioList);

//   data[lang].portfolio.forEach((item) => {
//     const f = filter.toLowerCase();
//     const match =
//       item.title.toLowerCase().includes(f) ||
//       item.tags.join(" ").toLowerCase().includes(f);

//     if (match) portfolioList.appendChild(createCard(item));
//   });

//   document.querySelector('[data-i18n="portfolio_title"]').textContent =
//     data[lang].portfolioTitle;
// }

function initFilterCheckboxes() {
  const container = document.getElementById("filter-checkboxes");
  container.innerHTML = ""; // vider avant de régénérer

  // Récupère tous les tags uniques
  const allTags = new Set();
  data[lang].portfolio.forEach((item) => {
    item.tags.forEach((tag) => allTags.add(tag));
  });

  // Création des checkboxes
  allTags.forEach((tag) => {
    const wrapper = document.createElement("div");
    wrapper.classList.add("tag-item");

    const checkbox = document.createElement("input");
    const label = document.createElement("label");

    checkbox.type = "checkbox";
    checkbox.id = "tag-" + tag;
    checkbox.value = tag;

    label.setAttribute("for", "tag-" + tag);
    label.textContent = tag;

    checkbox.addEventListener("change", updatePortfolioFilter);

    wrapper.appendChild(checkbox);
    wrapper.appendChild(label);

    container.appendChild(wrapper);
  });
}

///////////////////////
function updatePortfolioFilter() {
  const selectedTags = Array.from(
    document.querySelectorAll("#filter-checkboxes input:checked"),
  ).map((cb) => cb.value);

  renderPortfolio(selectedTags);
}

function renderPortfolio(selectedTags = []) {
  // clear(portfolioList);
  portfolioList.style.opacity = "0"; // Transition douce/ Nouveau
  setTimeout(() => {
    //nouveau
    clear(portfolioList); // nouveau

    data[lang].portfolio.forEach((item) => {
      const match =
        selectedTags.length === 0 ||
        selectedTags.every((tag) => item.tags.includes(tag));

      if (match) portfolioList.appendChild(createCard(item));
    });

    document.querySelector('[data-i18n="portfolio_title"]').textContent =
      data[lang].portfolioTitle;

    portfolioList.style.opacity = "1"; //nouveau
  }, 200); //nouveau
}

function renderSkills() {
  clear(skillsList);

  data[lang].skills.forEach((skill) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const h3 = document.createElement("h3");
    h3.textContent = skill.title;
    card.appendChild(h3);

    // FR : compétences listées simplement
    if (lang === "fr") {
      const ul = document.createElement("ul");
      skill.items.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
      });
      card.appendChild(ul);
    }

    // EN : barre pour chaque compétence
    if (lang === "en") {
      skill.items.forEach((item) => {
        const row = document.createElement("div");
        row.style.marginTop = "10px";

        // Nom
        const p = document.createElement("p");
        p.textContent = item.name;
        row.appendChild(p);

        // Barre
        const barContainer = document.createElement("div");
        barContainer.classList.add("level-bar");

        const bar = document.createElement("div");
        bar.classList.add("level-fill");
        bar.style.width = item.level + "%";

        barContainer.appendChild(bar);
        row.appendChild(barContainer);

        card.appendChild(row);
      });
    }

    skillsList.appendChild(card);
  });

  document.querySelector('[data-i18n="skills_title"]').textContent =
    data[lang].skillsTitle;
}

function renderLanguages() {
  clear(languagesList);

  data[lang].languages.forEach((l) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const h3 = document.createElement("h3");
    h3.textContent = l.lang;

    const p = document.createElement("p");
    p.textContent = l.level;

    card.appendChild(h3);
    card.appendChild(p);

    // Barre en ANGLAIS seulement
    if (lang === "en" && l.levelValue !== undefined) {
      const barContainer = document.createElement("div");
      barContainer.classList.add("level-bar");

      const fill = document.createElement("div");
      fill.classList.add("level-fill");
      fill.style.width = l.levelValue + "%";

      barContainer.appendChild(fill);
      card.appendChild(barContainer);
    }

    languagesList.appendChild(card);
  });

  document.querySelector('[data-i18n="languages_title"]').textContent =
    data[lang].languagesTitle;
}

/////////////////////////////////////////////////////////////////////////////////

function renderReferences() {
  clear(referencesList);

  data[lang].references.forEach((r) => {
    const card = document.createElement("div");
    card.classList.add("card");

    const h3 = document.createElement("h3");
    h3.textContent = r.name;

    const p1 = document.createElement("p");
    p1.textContent = r.role;

    const p2 = document.createElement("p");
    p2.textContent = r.email;

    card.appendChild(h3);
    card.appendChild(p1);
    card.appendChild(p2);

    referencesList.appendChild(card);
  });

  document.querySelector('[data-i18n="references_title"]').textContent =
    data[lang].referencesTitle;
}

/*
  ÉVÈNEMENTS*/

viewCvBtn.addEventListener("click", () => {
  cvFrame.setAttribute("src", "./portfolio.pdf");
  cvModal.classList.remove("hidden");
});

closeCvBtn.addEventListener("click", () => {
  cvModal.classList.add("hidden");
  cvFrame.removeAttribute("src");
});

printCvBtn.addEventListener("click", () => {
  try {
    cvFrame.contentWindow.print();
  } catch {
    window.open(cvFrame.src, "_blank");
  }
});

cvModal.addEventListener("click", (e) => {
  if (e.target === cvModal) {
    cvModal.classList.add("hidden");
    cvFrame.removeAttribute("src");
  }
});

langToggle.addEventListener("click", () => {
  lang = lang === "fr" ? "en" : "fr";
  langToggle.textContent = lang === "fr" ? "EN" : "FR";

  renderAbout();
  renderParcours();
  // renderPortfolio(filterInput.value);
  renderSkills();
  renderLanguages();
  renderReferences();
  initFilterCheckboxes();
  updatePortfolioFilter();
});

/*************************************************
 * INITIALISATION
 ***********************************************/
(function init() {
  renderAbout();
  renderParcours();
  renderPortfolio();
  renderSkills();
  renderLanguages();
  renderReferences();
  initFilterCheckboxes();
  updatePortfolioFilter();
})();

/* ---- Bouton Entrer ---- */
document.getElementById("enter-btn").addEventListener("click", () => {
  window.scrollTo({
    top: window.innerHeight,
    behavior: "smooth",
  });
});

document.getElementById("enter-btn").addEventListener("click", () => {
  document.getElementById("animated-name").classList.add("animate-name");
});

/* ---- Navbar apparaît après scroll ---- */
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    document.body.classList.add("scrolled");
  } else {
    document.body.classList.remove("scrolled");
  }
});

/* ---- Typing automatique ---- */
function typeText(element, text, speed = 60) {
  let index = 0;

  function typing() {
    if (index < text.length) {
      element.textContent += text[index];
      index++;
      setTimeout(typing, speed);
    }
  }

  typing();
}

const welcomeText = "Bienvenue sur mon portefolio";
const welcomeElement = document.getElementById("welcome-typed");

welcomeElement.textContent = "";
typeText(welcomeElement, welcomeText, 55);

/* ---- Particules ---- */
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 120; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    speedX: (Math.random() - 0.5) * 0.5,
    speedY: (Math.random() - 0.5) * 0.5,
  });
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
    if (p.y < 0 || p.y > canvas.height) p.speedY *= -1;

    // ctx.fillStyle = "rgba(255, 240, 220, 0.6)";
    ctx.fillStyle = "rgba(212, 168, 43, 0.4)"; // Couleur Or (#D4A82B)
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
  });

  requestAnimationFrame(animateParticles);
}

animateParticles();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
