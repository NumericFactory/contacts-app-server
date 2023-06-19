import type { Contact } from '~~/types/contacts'

/**
 * On imagine que ce sont des données reçues de la base de données
 *
 * On spécifie ici que `animals` est un tableau contenant des `Animal`
 */
export const contacts: Contact[] = [
    { id: 1, name: "Jerome Dinnat", type: 'student' },
    { id: 2, name: "Sandrine Binutti", type: 'student' },
    { id: 3, name: "Adrien Defever", type: 'student' },
    { id: 4, name: "Xavier Morice", type: 'student' },
    { id: 5, name: "Herve Fondain", type: 'student' },
    { id: 6, name: "Frederic Lossignol", type: 'teacher' },
    { id: 7, name: "Alpha-ibrahima Diallo", type: 'student' },
    { id: 8, name: "Caroline Lambert", type: 'student' },
    { id: 9, name: "Choukri Bouabana", type: 'student' },
    { id: 10, name: "Eric Chardon", type: 'student' },
    { id: 11, name: "Nicolas Mauge", type: 'student' },
    { id: 12, name: "Sophie Nguyen-do", type: 'student' },
    { id: 13, name: "Stephane Eveille", type: 'student' },
];