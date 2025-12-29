import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navbar
    'nav.home': 'Accueil',
    'nav.search': 'Rechercher',
    'nav.categories': 'Catégories',
    'nav.become_provider': 'Devenir prestataire',
    'nav.dashboard': 'Tableau de bord',
    'nav.login': 'Connexion',
    'nav.signup': 'Inscription',
    
    // Hero Section
    'hero.title': 'Trouvez les meilleurs prestataires de services près de chez vous',
    'hero.subtitle': 'Connectez-vous avec des professionnels qualifiés pour tous vos besoins de services à domicile et professionnels.',
    'hero.search_service': 'Quel service recherchez-vous ?',
    'hero.search_location': 'Ville ou région',
    'hero.search_button': 'Rechercher',
    'hero.popular': 'Populaires :',
    
    // Features
    'features.verified.title': 'Prestataires vérifiés',
    'features.verified.desc': 'Tous nos prestataires sont vérifiés et évalués par la communauté.',
    'features.booking.title': 'Réservation facile',
    'features.booking.desc': 'Réservez en quelques clics et gérez vos rendez-vous en ligne.',
    'features.payment.title': 'Paiement sécurisé',
    'features.payment.desc': 'Paiements sécurisés et garantie satisfaction sur tous les services.',
    
    // Categories
    'categories.title': 'Parcourez par catégorie',
    'categories.subtitle': 'Explorez nos différentes catégories de services',
    'categories.view_all': 'Voir toutes les catégories',
    'categories.providers': 'prestataires',
    
    // Category Names
    'category.plumbing': 'Plomberie',
    'category.electricity': 'Électricité',
    'category.cleaning': 'Ménage',
    'category.gardening': 'Jardinage',
    'category.moving': 'Déménagement',
    'category.renovation': 'Rénovation',
    
    // Providers
    'providers.title': 'Prestataires populaires',
    'providers.subtitle': 'Découvrez nos prestataires les mieux notés',
    'providers.view_all': 'Voir tous les prestataires',
    'providers.contact': 'Contacter',
    'providers.view_profile': 'Voir le profil',
    'providers.reviews': 'avis',
    'providers.from': 'À partir de',
    'providers.per_hour': '/heure',
    
    // CTA Section
    'cta.title': 'Devenez prestataire sur BantuHire',
    'cta.subtitle': 'Rejoignez notre communauté de professionnels et développez votre activité.',
    'cta.button': 'Commencer maintenant',
    
    // Search Page
    'search.title': 'Trouver un prestataire',
    'search.results': 'prestataires trouvés',
    'search.filters': 'Filtres',
    'search.sort_by': 'Trier par',
    'search.relevance': 'Pertinence',
    'search.rating': 'Note',
    'search.price_low': 'Prix croissant',
    'search.price_high': 'Prix décroissant',
    'search.load_more': 'Charger plus de résultats',
    
    // Provider Profile
    'profile.about': 'À propos',
    'profile.services': 'Services proposés',
    'profile.reviews': 'Avis clients',
    'profile.gallery': 'Galerie',
    'profile.contact': 'Contacter',
    'profile.request_quote': 'Demander un devis',
    'profile.response_time': 'Temps de réponse',
    'profile.completed_jobs': 'Missions terminées',
    'profile.member_since': 'Membre depuis',
    'profile.verified': 'Profil vérifié',
    'profile.available': 'Disponible',
    'profile.write_review': 'Écrire un avis',
    
    // Become Provider Page
    'become.hero_title': 'Rejoignez BantuHire en tant que prestataire',
    'become.hero_subtitle': 'Développez votre activité en rejoignant notre communauté de professionnels qualifiés.',
    'become.benefits_title': 'Pourquoi rejoindre BantuHire ?',
    'become.benefit1_title': 'Visibilité accrue',
    'become.benefit1_desc': 'Accédez à des milliers de clients potentiels dans votre région.',
    'become.benefit2_title': 'Gestion simplifiée',
    'become.benefit2_desc': 'Gérez vos réservations et paiements depuis une seule plateforme.',
    'become.benefit3_title': 'Support dédié',
    'become.benefit3_desc': 'Bénéficiez d\'un accompagnement personnalisé pour développer votre activité.',
    'become.benefit4_title': 'Revenus garantis',
    'become.benefit4_desc': 'Recevez vos paiements de manière sécurisée et régulière.',
    'become.form_title': 'Inscription prestataire',
    'become.full_name': 'Nom complet',
    'become.email': 'Email',
    'become.phone': 'Téléphone',
    'become.city': 'Ville',
    'become.service_category': 'Catégorie de service',
    'become.select_category': 'Sélectionner une catégorie',
    'become.experience': 'Années d\'expérience',
    'become.description': 'Description de vos services',
    'become.description_placeholder': 'Décrivez vos services et votre expérience...',
    'become.documents': 'Documents (CV, certifications)',
    'become.submit': 'Soumettre ma candidature',
    
    // Dashboard
    'dashboard.title': 'Tableau de bord',
    'dashboard.profile': 'Mon Profil',
    'dashboard.missions': 'Mes Missions',
    'dashboard.stats': 'Statistiques',
    'dashboard.edit_profile': 'Modifier le profil',
    'dashboard.save': 'Enregistrer',
    'dashboard.cancel': 'Annuler',
    'dashboard.current_missions': 'Missions en cours',
    'dashboard.completed_missions': 'Missions terminées',
    'dashboard.pending': 'En attente',
    'dashboard.in_progress': 'En cours',
    'dashboard.completed': 'Terminée',
    'dashboard.total_earnings': 'Revenus totaux',
    'dashboard.missions_completed': 'Missions terminées',
    'dashboard.average_rating': 'Note moyenne',
    'dashboard.views': 'Vues du profil',
    'dashboard.name': 'Nom',
    'dashboard.profession': 'Profession',
    'dashboard.hourly_rate': 'Tarif horaire',
    'dashboard.bio': 'Bio',
    'dashboard.skills': 'Compétences',
    'dashboard.skills_placeholder': 'Séparez par des virgules',
    
    // Footer
    'footer.description': 'La première plateforme de mise en relation entre particuliers et prestataires de services en Afrique.',
    'footer.for_clients': 'Pour les clients',
    'footer.find_provider': 'Trouver un prestataire',
    'footer.how_it_works': 'Comment ça marche',
    'footer.guarantees': 'Nos garanties',
    'footer.for_providers': 'Pour les prestataires',
    'footer.register': 'S\'inscrire',
    'footer.advantages': 'Avantages',
    'footer.resources': 'Ressources',
    'footer.about': 'À propos',
    'footer.help': 'Aide',
    'footer.blog': 'Blog',
    'footer.contact': 'Contact',
    'footer.rights': 'Tous droits réservés.',
    
    // Common
    'common.loading': 'Chargement...',
    'common.error': 'Une erreur est survenue',
    'common.success': 'Succès',
    'common.close': 'Fermer',
    'common.confirm': 'Confirmer',
    'common.delete': 'Supprimer',
    'common.edit': 'Modifier',
    'common.view': 'Voir',
    'common.back': 'Retour',
    'common.next': 'Suivant',
    'common.previous': 'Précédent',
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.search': 'Search',
    'nav.categories': 'Categories',
    'nav.become_provider': 'Become a Provider',
    'nav.dashboard': 'Dashboard',
    'nav.login': 'Login',
    'nav.signup': 'Sign Up',
    
    // Hero Section
    'hero.title': 'Find the Best Service Providers Near You',
    'hero.subtitle': 'Connect with qualified professionals for all your home and professional service needs.',
    'hero.search_service': 'What service are you looking for?',
    'hero.search_location': 'City or region',
    'hero.search_button': 'Search',
    'hero.popular': 'Popular:',
    
    // Features
    'features.verified.title': 'Verified Providers',
    'features.verified.desc': 'All our providers are verified and rated by the community.',
    'features.booking.title': 'Easy Booking',
    'features.booking.desc': 'Book in a few clicks and manage your appointments online.',
    'features.payment.title': 'Secure Payment',
    'features.payment.desc': 'Secure payments and satisfaction guarantee on all services.',
    
    // Categories
    'categories.title': 'Browse by Category',
    'categories.subtitle': 'Explore our different service categories',
    'categories.view_all': 'View all categories',
    'categories.providers': 'providers',
    
    // Category Names
    'category.plumbing': 'Plumbing',
    'category.electricity': 'Electricity',
    'category.cleaning': 'Cleaning',
    'category.gardening': 'Gardening',
    'category.moving': 'Moving',
    'category.renovation': 'Renovation',
    
    // Providers
    'providers.title': 'Popular Providers',
    'providers.subtitle': 'Discover our top-rated providers',
    'providers.view_all': 'View all providers',
    'providers.contact': 'Contact',
    'providers.view_profile': 'View Profile',
    'providers.reviews': 'reviews',
    'providers.from': 'From',
    'providers.per_hour': '/hour',
    
    // CTA Section
    'cta.title': 'Become a Provider on BantuHire',
    'cta.subtitle': 'Join our community of professionals and grow your business.',
    'cta.button': 'Get Started Now',
    
    // Search Page
    'search.title': 'Find a Provider',
    'search.results': 'providers found',
    'search.filters': 'Filters',
    'search.sort_by': 'Sort by',
    'search.relevance': 'Relevance',
    'search.rating': 'Rating',
    'search.price_low': 'Price: Low to High',
    'search.price_high': 'Price: High to Low',
    'search.load_more': 'Load more results',
    
    // Provider Profile
    'profile.about': 'About',
    'profile.services': 'Services Offered',
    'profile.reviews': 'Customer Reviews',
    'profile.gallery': 'Gallery',
    'profile.contact': 'Contact',
    'profile.request_quote': 'Request a Quote',
    'profile.response_time': 'Response Time',
    'profile.completed_jobs': 'Completed Jobs',
    'profile.member_since': 'Member Since',
    'profile.verified': 'Verified Profile',
    'profile.available': 'Available',
    'profile.write_review': 'Write a Review',
    
    // Become Provider Page
    'become.hero_title': 'Join BantuHire as a Provider',
    'become.hero_subtitle': 'Grow your business by joining our community of qualified professionals.',
    'become.benefits_title': 'Why Join BantuHire?',
    'become.benefit1_title': 'Increased Visibility',
    'become.benefit1_desc': 'Access thousands of potential clients in your area.',
    'become.benefit2_title': 'Simplified Management',
    'become.benefit2_desc': 'Manage your bookings and payments from a single platform.',
    'become.benefit3_title': 'Dedicated Support',
    'become.benefit3_desc': 'Benefit from personalized support to grow your business.',
    'become.benefit4_title': 'Guaranteed Income',
    'become.benefit4_desc': 'Receive your payments securely and regularly.',
    'become.form_title': 'Provider Registration',
    'become.full_name': 'Full Name',
    'become.email': 'Email',
    'become.phone': 'Phone',
    'become.city': 'City',
    'become.service_category': 'Service Category',
    'become.select_category': 'Select a category',
    'become.experience': 'Years of Experience',
    'become.description': 'Description of Your Services',
    'become.description_placeholder': 'Describe your services and experience...',
    'become.documents': 'Documents (CV, certifications)',
    'become.submit': 'Submit My Application',
    
    // Dashboard
    'dashboard.title': 'Dashboard',
    'dashboard.profile': 'My Profile',
    'dashboard.missions': 'My Missions',
    'dashboard.stats': 'Statistics',
    'dashboard.edit_profile': 'Edit Profile',
    'dashboard.save': 'Save',
    'dashboard.cancel': 'Cancel',
    'dashboard.current_missions': 'Current Missions',
    'dashboard.completed_missions': 'Completed Missions',
    'dashboard.pending': 'Pending',
    'dashboard.in_progress': 'In Progress',
    'dashboard.completed': 'Completed',
    'dashboard.total_earnings': 'Total Earnings',
    'dashboard.missions_completed': 'Missions Completed',
    'dashboard.average_rating': 'Average Rating',
    'dashboard.views': 'Profile Views',
    'dashboard.name': 'Name',
    'dashboard.profession': 'Profession',
    'dashboard.hourly_rate': 'Hourly Rate',
    'dashboard.bio': 'Bio',
    'dashboard.skills': 'Skills',
    'dashboard.skills_placeholder': 'Separate with commas',
    
    // Footer
    'footer.description': 'The first platform connecting individuals with service providers in Africa.',
    'footer.for_clients': 'For Clients',
    'footer.find_provider': 'Find a Provider',
    'footer.how_it_works': 'How It Works',
    'footer.guarantees': 'Our Guarantees',
    'footer.for_providers': 'For Providers',
    'footer.register': 'Register',
    'footer.advantages': 'Advantages',
    'footer.resources': 'Resources',
    'footer.about': 'About',
    'footer.help': 'Help',
    'footer.blog': 'Blog',
    'footer.contact': 'Contact',
    'footer.rights': 'All rights reserved.',
    
    // Common
    'common.loading': 'Loading...',
    'common.error': 'An error occurred',
    'common.success': 'Success',
    'common.close': 'Close',
    'common.confirm': 'Confirm',
    'common.delete': 'Delete',
    'common.edit': 'Edit',
    'common.view': 'View',
    'common.back': 'Back',
    'common.next': 'Next',
    'common.previous': 'Previous',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    return (saved as Language) || 'fr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
