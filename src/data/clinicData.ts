import { ServiceItem, TechnologyItem, BeforeAfterCase, PatientReview, FAQItem } from '../types/clinic';

export const CLINIC_INFO = {
  name: "Clinique Vitalia",
  doctorLead: "Équipe Médicale & Chirurgiens Spécialistes",
  role: "Établissement Médical Privé & Pôle Chirurgical",
  specialty: "Médecine Spécialisée, Chirurgie & Urgences",
  clinicName: "Clinique Vitalia — Établissement Médical Privé",
  phone: "+225 27 22 49 50 00",
  phoneDisplay: "+225 27 22 49 50 00",
  emergencyPhone: "+225 07 07 49 50 00",
  address: "Boulevard de la Riviera Palmeraie, Commune de Cocody, Abidjan",
  metro: "Cocody Riviera Palmeraie (Axe Rue Ministre / Carrefour Guiraud)",
  hours: "Accueil & Urgences 24h/7j | Consultations : Lun - Sam 07h30 - 20h00",
  email: "contact@clinique-vitalia.ci",
  yearsExperience: "20+",
  surgeriesPerYear: "500+",
  successRate: "99.4%",
  partnerBrand: "Partenaire des Meilleurs Centres d'Excellence",
  ambassadorTitle: "Pôle Médical de Référence à Abidjan",
  rppsNumber: "Agrément Ministère de la Santé et de l'Hygiène Publique de Côte d'Ivoire",
};

export const CLINICAL_PROBLEMS: ServiceItem[] = [
  {
    id: "recession",
    title: "Recouvrement des récessions gingivales",
    subtitle: "Greffe de gencive micro-chirurgicale",
    category: "Parodontie Esthétique",
    description: "Correction esthétique et fonctionnelle du déchaussement dentaire par greffe de tissu conjonctif. Protège la racine dentaire contre la sensibilité au froid et prévient la perte osseuse.",
    indications: [
      "Racines dénudées et sensibles au chaud/froid",
      "Perte progressive de la gencive protectrice",
      "Gêne esthétique lors du sourire"
    ],
    duration: "45 à 60 minutes",
    anesthesia: "Anesthésie locale indolore assistée par ordinateur ou sédation",
    recovery: "Cicatrisation rapide en 5 à 7 jours sans éviction sociale",
    imageFallbackGradient: "from-amber-900/60 to-stone-900/90",
    accentBadge: "Micro-chirurgie mini-invasive"
  },
  {
    id: "extraction",
    title: "Extractions chirurgicales complexes",
    subtitle: "Dents de sagesse & racines fracturées",
    category: "Chirurgie Buccale",
    description: "Extraction atraumatique préservant intégralement le capital osseux et gingival en vue d'une pose d'implant immédiate ou ultérieure. Prise en charge des dents enclavées sous scanner 3D.",
    indications: [
      "Dents de sagesse incluses ou mal positionnées",
      "Dents cariées non conservables",
      "Infections récurrentes ou kystes maxillaires"
    ],
    duration: "20 à 40 minutes",
    anesthesia: "Anesthésie locale potentialisée ou sédation consciente au MEOPA",
    recovery: "Protocole anti-œdème optimisé, reprise d'activité dès 24h à 48h",
    imageFallbackGradient: "from-stone-900 to-slate-950",
    accentBadge: "Préservation osseuse maximale"
  },
  {
    id: "implants",
    title: "Pose d'implants dentaires Straumann®",
    subtitle: "Titane Roxolid® & SLActive®",
    category: "Implantologie",
    description: "Remplacement fixe définitif d'une ou plusieurs dents absentes. Utilisation exclusive des implants de référence mondiale Straumann®, garantissant une ostéointégration accélérée en seulement 3 à 4 semaines.",
    indications: [
      "Édentement unitaire ou plural",
      "Alternative aux bridges délabrants pour les dents voisines",
      "Restauration de la mastication et de l'alignement dentaire"
    ],
    duration: "30 minutes par implant",
    anesthesia: "Anesthésie locale ciblée (totalement indolore)",
    recovery: "Aucune douleur post-opératoire majeure, simple inconfort transitoire",
    imageFallbackGradient: "from-neutral-900 to-stone-950",
    accentBadge: "Garantie internationale à vie"
  },
  {
    id: "bone_graft",
    title: "Régénération osseuse guidée (ROG)",
    subtitle: "Comblement osseux & Sinus Lift",
    category: "Chirurgie Pré-implantaire",
    description: "Reconstruction en volume et en hauteur de l'os alvéolaire résorbé au moyen de biomatériaux ostéoconducteurs certifiés et de membranes de collagène résorbables sous guidage piézo-électrique.",
    indications: [
      "Perte osseuse ancienne après extraction",
      "Volume insuffisant sous le sinus maxillaire",
      "Atrophie osseuse sévère"
    ],
    duration: "60 à 90 minutes",
    anesthesia: "Anesthésie locale avec monitoring continu ou sédation intraveineuse",
    recovery: "Maturation osseuse contrôlée par imagerie Cone Beam de contrôle",
    imageFallbackGradient: "from-cyan-950/70 to-slate-900/90",
    accentBadge: "Précision Piézo-chirurgicale"
  }
];

export const TECHNOLOGIES: TechnologyItem[] = [
  {
    id: "all_on_4",
    title: "Protocole All-on-4® / All-on-6®",
    shortDesc: "Restauration d'une arcade complète sur 4 à 6 implants avec mise en charge fixe le jour même.",
    fullDesc: "Protocole chirurgical révolutionnaire développé pour restaurer l'ensemble de la mâchoire sans greffe osseuse préalable. Les deux implants postérieurs sont inclinés à 45° pour exploiter le volume osseux dense disponible, permettant de fixer un bridge définitif ou transitoire vissé en 24h chrono.",
    highlight: "Dents fixes immédiates en 24 heures sans greffe osseuse",
    timeframe: "Intervention en 1 journée, fixation prothétique le soir même",
    idealFor: "Patients édentés complets ou ayant des dents résiduelles condamnées",
    guarantee: "Suivi post-opératoire personnalisé et garantie Straumann ProArch",
    hotspotTarget: 'implant'
  },
  {
    id: "immediate",
    title: "Implantation immédiate post-extraction",
    shortDesc: "Pose de l'implant dans l'alvéole immédiatement après l'extraction de la dent compromise.",
    fullDesc: "Permet de regrouper en une seule séance chirurgicale l'extraction et la mise en place de la racine en titane. Cette technique préserve l'architecture naturelle de la gencive et le profil d'émergence esthétique, tout en divisant par deux la durée totale du traitement.",
    highlight: "Réduction de 50% du temps global de traitement",
    timeframe: "1 seule séance chirurgicale au lieu de deux",
    idealFor: "Dents antérieures fracturées, traumatismes ou mobilités isolées",
    guarantee: "Préservation optimale du contour gingival",
    hotspotTarget: 'abutment'
  },
  {
    id: "guided_3d",
    title: "Chirurgie 3D assistée par ordinateur",
    shortDesc: "Planification numérique tridimensionnelle et guide chirurgical d'une précision au 1/10e de mm.",
    fullDesc: "Grâce à la fusion de nos scanners Cone Beam 3D et de nos caméras optiques intra-orales, la position exacte de chaque implant est simulée virtuellement avant même de toucher le patient. Un guide chirurgical stéréolithographique sur mesure dirige la fraise avec une précision submillimétrique.",
    highlight: "Chirurgie flapless (sans ouverture large de la gencive) sans cicatrice",
    timeframe: "Planification virtuelle 48h en amont, chirurgie 2x plus rapide",
    idealFor: "Cas complexes, proximité du nerf alvéolaire ou des cavités sinusiennes",
    guarantee: "Sécurité anatomique absolue certifiée",
    hotspotTarget: 'bone'
  },
  {
    id: "classical",
    title: "Implantation classique en 2 temps",
    shortDesc: "Protocole standard de référence avec ostéointégration progressive sous gencive fermée.",
    fullDesc: "La méthode historique la plus documentée au monde. L'implant est positionné dans l'os puis recouvert de la gencive pendant 2 à 3 mois afin d'assurer une fusion biologique parfaite entre le titane et les cellules osseuses avant la pose de la couronne définitive en céramique zircone.",
    highlight: "Taux de succès documenté supérieur à 99.4%",
    timeframe: "2 à 3 mois de phase de cicatrisation sécurisée",
    idealFor: "Os de densité modérée ou antécédents médicaux particuliers",
    guarantee: "Solidité mécanique et intégration biologique maximale",
    hotspotTarget: 'crown'
  }
];

export const ALL_ON_4_INDICATORS = [
  {
    id: "total_absence",
    title: "Absence totale de dents",
    description: "Édentement complet du maxillaire supérieur ou inférieur avec fonte progressive de l'os.",
    badge: "Indication Majeure"
  },
  {
    id: "teeth_destroyed",
    title: "Majorité des dents condamnées",
    description: "Dents sévèrement déchaussées ou cariées qui ne permettent plus une fonction masticatoire décente.",
    badge: "Priorité Fonctionnelle"
  },
  {
    id: "parodontitis",
    title: "Parodontite terminale",
    description: "Mobilités généralisées et douleurs répétées rendant inefficaces les soins conservateurs.",
    badge: "Stoppe l'infection"
  },
  {
    id: "speed_requirement",
    title: "Rejet des appareils amovibles",
    description: "Volonté absolue de quitter le dentier amovible qui bouge pour un sourire fixe, esthétique et pérenne dès le jour J.",
    badge: "Confort Fixe Immédiat"
  }
];

export const BEFORE_AFTER_CASES: BeforeAfterCase[] = [
  {
    id: "case-allon4-arcade",
    title: "Réhabilitation complète bimaxillaire All-on-4®",
    patientProfile: "Patient de 58 ans, porteur d'appareils amovibles instables depuis 12 ans",
    problem: "Édentement presque complet, résorption osseuse et perte de dimension verticale du visage.",
    solution: "Pose de 4 implants Straumann® en bas et 6 en haut, pose d'un bridge céramique zircone fixe en 24h.",
    technique: "Protocole All-on-4® avec chirurgie guidée 3D",
    timeline: "Sourire fixe en 24h, stabilisation définitive à 3 mois",
    beforeLabel: "Avant : Édentement & prothèse instable",
    afterLabel: "Après : Arcade fixe en céramique zircone",
    beforeImgUrl: "/assets/aistudio/image_e41f658e.webp",
    afterImgUrl: "/assets/aistudio/image_e41f658e.webp"
  },
  {
    id: "case-incisive-esthetique",
    title: "Remplacement incisive centrale & greffe conjonctive",
    patientProfile: "Patiente de 34 ans, traumatisme sportif avec fracture radiculaire sous-gingivale",
    problem: "Perte brutale de l'incisive centrale supérieure avec affaissement de la papille gingivale.",
    solution: "Extraction atraumatique, implant immédiat SLActive® et greffe de tissu conjonctif pour un galbe parfait.",
    technique: "Implantation immédiate post-extractionnelle avec mise en charge esthétique",
    timeline: "Couronne provisoire le jour même, couronne définitive à 8 semaines",
    beforeLabel: "Avant : Dent fracturée & asymétrie",
    afterLabel: "Après : Intégration naturelle invisible",
    beforeImgUrl: "/assets/aistudio/image_e41f658e.webp",
    afterImgUrl: "/assets/aistudio/image_e41f658e.webp"
  }
];

export const PATIENT_REVIEWS: PatientReview[] = [
  {
    id: "rev-1",
    author: "Kouadio Marc-A.",
    location: "Cocody Riviera Palmeraie",
    treatment: "All-on-4® Arcade Supérieure",
    rating: 5,
    date: "Il y a 3 semaines",
    text: "Après des années d'hésitation, j'ai été accueilli à la Clinique Vitalia. Le professionnalisme de l'équipe et les explications en imagerie 3D m'ont immédiatement rassuré. L'intervention s'est déroulée en toute sérénité sans aucune douleur. Le soir même, je rentrais chez moi avec mes dents fixes. C'est une renaissance."
  },
  {
    id: "rev-2",
    author: "Éléonore V.",
    location: "Abidjan Cocody Ambassades",
    treatment: "2 Implants Straumann + Greffe ROG",
    rating: 5,
    date: "Il y a 1 mois",
    text: "La clinique est d'un niveau d'hygiène, de modernité et de confort exceptionnel. Aucun œdème grâce aux protocoles chirurgicaux de pointe. Mon bridge provisoire était déjà parfait, le définitif en zircone est tout simplement indiscernable de mes vraies dents."
  },
  {
    id: "rev-3",
    author: "Ibrahim D.",
    location: "Riviera Golf, Cocody",
    treatment: "Dents de sagesse incluses & chirurgie",
    rating: 5,
    date: "Il y a 2 mois",
    text: "Extraction de dents de sagesse complexes réalisée avec une maîtrise chirurgicale impressionnante. Équipe aux petits soins, plateau technique impeccable et suivi personnalisé dès le lendemain. Je recommande vivement la Clinique Vitalia."
  }
];

export const FAQ_LIST: FAQItem[] = [
  {
    question: "La pose d'un implant dentaire est-elle douloureuse ?",
    answer: "Non. L'intervention est réalisée sous anesthésie locale profonde hautement ciblée, complétée si besoin par une sédation consciente. Pendant l'acte, vous ne ressentez aucune douleur, uniquement de légères vibrations. Après l'intervention, la douleur post-opératoire est généralement minime et parfaitement contrôlée par des antalgiques simples.",
    category: "douleur"
  },
  {
    question: "Qu'est-ce que le protocole All-on-4® et en quoi est-il différent ?",
    answer: "Le protocole All-on-4® permet de remplacer toutes les dents d'une arcade avec seulement 4 implants judicieusement angulés, évitant ainsi les greffes osseuses longues et coûteuses. Une prothèse fixe provisoire hautement esthétique est vissée dans les 24 heures suivant la chirurgie, vous permettant de manger et sourire dès le premier jour.",
    category: "implant"
  },
  {
    question: "Combien de temps dure un implant dentaire ?",
    answer: "Les implants Straumann® en alliage Roxolid® que nous posons disposent d'un taux de succès clinique supérieur à 99% à 10 ans. Avec une hygiène bucco-dentaire rigoureuse et des contrôles annuels au cabinet, ils durent toute la vie. Ils bénéficient d'ailleurs d'une garantie internationale à vie.",
    category: "implant"
  },
  {
    question: "Comment se déroule la première consultation de diagnostic ?",
    answer: "La consultation initiale dure 45 minutes. Elle comprend un examen clinique approfondi, la réalisation sur place d'un scanner 3D Cone Beam haute résolution, l'analyse numérique de votre volume osseux et la remise d'un plan de traitement précis avec devis détaillé et simulation du résultat.",
    category: "deroulement"
  },
  {
    question: "Quelle prise en charge par la Sécurité Sociale et les mutuelles ?",
    answer: "La pose de l'implant est un acte hors nomenclature Sécurité Sociale (la couronne sur implant bénéficie d'une base de remboursement). Cependant, la très grande majorité des mutuelles santé proposent désormais des forfaits annuels d'implantologie conséquents. Nous vous remettons un devis codifié pour une prise en charge optimale par votre complémentaire.",
    category: "tarifs"
  }
];
