import imgProjet1 from '../asset/projetBookie.png';
import imgProjet2 from '../asset/projetSophieBluel.png';
import imgProjet3 from '../asset/projetNinaResultat.png';
import imgProjet4 from '../asset/projetKasa.png';
import imgProjet5 from '../asset/projetMonVieuxGrimoir.png';
import imgProjet6 from '../asset/projetMenuMaker.png';

export const projects = [
  {
    id: 1,
    image: imgProjet1,
    title: 'Bookie',
    description: 'Développement d’un site web pour Booki permettant de rechercher des hébergements et des activités. Travail en HTML et CSS pour intégrer les maquettes fournies, en respectant les spécifications techniques.',
    lienGitHub: "https://github.com/AFlourez/Bookie",
  },
  {
    id: 2,
    image: imgProjet2,
    title: 'Sophie Bluel- Architecte d\'Intérieur',
    description: 'Conception et développement de la partie front-end du site portfolio d’une architecte d’intérieur. Développement des pages de présentation des travaux, de la page de connexion administrateur, ainsi qu’une modale pour l’upload de médias.',
    lienGitHub: "https://github.com/AFlourez/Sophie-Bluel-Architecte-d-int-rieur",
  },
  {
    id: 3,
    image: imgProjet3,
    title: 'Optimisation SEO et Performances pour Nina Carducci',
    description: 'Optimisation des performances et du référencement SEO du site de Nina Carducci, photographe. Amélioration du chargement du site, optimisation des images, mise en place du référencement local, correction des bugs de navigation, et ajout des metas pour les réseaux sociaux. Livraison d’un rapport d’intervention détaillant les actions et leur impact.',
    lienGitHub: "https://github.com/AFlourez/nina-carducci-modifi-",
  },
  {
    id: 4,
    image: imgProjet4, 
    title: 'Refonte du site Kasa (React + NodeJS)',
    description: 'Refonte complète du site de location d’appartements Kasa. Développement d’une application React avec React Router, en suivant les maquettes Figma responsives. Création de composants tels que la galerie d’images avec défilement circulaire et le menu déroulant avec animations. Mise en place de la structure de données à partir d’un fichier JSON pour afficher les annonces de logement.',
    lienGitHub: "https://github.com/AFlourez/Kasa",
  },
  {
    id: 5,
    image: imgProjet5, 
    title: 'Site de notation de livres "Mon Vieux Grimoire"',
    description: 'Développement du back-end pour un site de notation de livres, permettant aux membres d’ajouter un livre et de lui attribuer une note. Mise en place de l’API pour gérer l’ajout de livres, les évaluations et les images. Optimisation des images envoyées par les utilisateurs pour respecter les bonnes pratiques du Green Code.',
    lienGitHub: "https://github.com/AFlourez/Mon-vieux-Grimoire",
  },
  {
    id: 6,
    image: imgProjet6,
    title: 'Développement du site "Menu Maker"',
    description: 'Gestion de projet et développement front-end du site "Menu Maker", permettant aux restaurateurs de créer et afficher leurs menus. Préparation des spécifications techniques, organisation d’un tableau Kanban et suivi des tâches en cours, en collaboration avec un dev back-end. Recherche sur les dernières technologies pour intégrer dans le projet.',
    lienGitHub: "",
  }
  
];
