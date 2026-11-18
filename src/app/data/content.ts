export const LOGO = 'logo-africalabo.svg'; // remplacer par logo-africalabo.png (à déposer dans public/)
export const COMPANY = 'AFRICA-LABO SARL';

export interface Category { code: string; title: string; text: string; img: string; alt: string; bg: string; delay: number; }
export interface Sector { icon: string; title: string; sub: string; delay: number; }
export interface Testimonial { quote: string; name: string; role: string; avatar: string; delay: number; }

export const navLinks = [
  { href: '#about', label: 'À propos' },
  { href: '#services', label: 'Produits' },
  { href: '#secteurs', label: 'Secteurs' },
  { href: '#testimonials', label: 'Témoignages' },
];

export const stats = [
  { number: '+50', label: 'Clients actifs' },
  { number: '7', label: "Années d'expertise" },
  { number: '4', label: 'Secteurs couverts' },
];

export const categories: Category[] = [
  { code: 'PROD-01', title: "Matériels d'emballage", text: "Solutions d'emballage pour produits industriels et pharmaceutiques.", img: 'images/africalabo4.jpg', alt: 'Emballage', bg: '#C9922E', delay: 0 },
  { code: 'PROD-02', title: 'Étiquetage & marquage', text: "Équipements et consommables d'étiquetage professionnel.", img: 'images/africalabo5.jpg', alt: 'Étiquetage', bg: '#8B5E15', delay: 60 },
  { code: 'PROD-03', title: 'Consommables de labo', text: 'Verrerie, filtres, réactifs courants et consommables divers.', img: 'images/africalabo6.jpg', alt: 'Consommables', bg: '#0A1428', delay: 120 },
  { code: 'PROD-04', title: 'Balances & mesure', text: 'Instruments de pesée et de mesure pour laboratoire et industrie.', img: 'images/africalabo7.jpg', alt: 'Balances', bg: '#5C6570', delay: 0 },
  { code: 'PROD-05', title: 'Conservation au froid', text: 'Solutions de réfrigération et chaîne du froid pour produits sensibles.', img: 'images/africalabo8.jpg', alt: 'Froid', bg: '#8B5E15', delay: 60 },
  { code: 'PROD-06', title: 'Équipements divers', text: "Large gamme d'équipements techniques selon vos besoins.", img: 'images/africalabo1.jpg', alt: 'Équipements', bg: '#C9922E', delay: 120 },
];

export const sectors: Sector[] = [
  { icon: '🏭', title: 'Agroalimentaire', sub: 'Emballage & conditionnement', delay: 0 },
  { icon: '💊', title: 'Industrie pharmaceutique', sub: 'Emballage pharmaceutique', delay: 60 },
  { icon: '🔬', title: 'Laboratoires', sub: 'Équipement & consommables', delay: 120 },
  { icon: '🏥', title: 'Structures de santé', sub: 'Fournitures techniques', delay: 180 },
];

// Témoignages et photos d'exemple : à remplacer par de vrais avis avant publication
export const testimonials: Testimonial[] = [
  { quote: "AFRICA-LABO nous livre des matériels d'emballage de qualité constante. La réactivité et le suivi sont exemplaires.", name: "Dr. Eya'a", role: 'Directeur, Labo Pharma', avatar: 'https://picsum.photos/seed/al1/100/100', delay: 0 },
  { quote: "Grâce à leurs solutions d'étiquetage, nous avons gagné en efficacité sur nos lignes de conditionnement. Un partenaire fiable.", name: 'Mme. Ngo Biyong', role: 'Responsable QA, Agro-Industrie', avatar: 'https://picsum.photos/seed/al2/100/100', delay: 80 },
  { quote: "La gamme de consommables et l'assistance technique font d'AFRICA-LABO un fournisseur de choix pour notre centre de recherche.", name: 'Pr. Tchakounté', role: 'Chercheur, Université de Douala', avatar: 'https://picsum.photos/seed/al3/100/100', delay: 160 },
];

export const contact = {
  person: 'Mme MBANGO Winnie',
  phoneLabel: '+237 691 855 590',
  phoneHref: 'tel:+237691855590',
  email: 'mbangowinnie10@gmail.com',
  site: 'https://www.africalabo.com',
  siteLabel: 'www.africalabo.com',
  whatsapp: 'https://wa.me/237691855590',
  address: 'Douala, Cameroun',
};
