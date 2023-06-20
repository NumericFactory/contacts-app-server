import type { Contact } from '~~/types/contacts'

/**
 * On imagine que ce sont des données reçues de la base de données
 *
 * On spécifie ici que `contacts` est un tableau de `Contact`
 */
export const contacts: Contact[] = [
    { id: 1, name: "Bill Musk", type: 'student', email: 'bill.musk@ms.co', tel: '0741414141' },
    { id: 2, name: "Elon Gates", type: 'student', email: 'elon.gates@tesla.com', tel: '0742424242' },
    { id: 3, name: "John Doe", type: 'teacher', email: 'john.doe@epita.fr', tel: '0743434343' },
    { id: 4, name: "Bob Dylan", type: 'student', email: 'bob.dylan@duluth.com', tel: '0682868745' },
    { id: 5, name: "Alice Opays-desmerveilles", type: 'student', email: 'alice.merveille@disney.com', tel: '0699999999' },
];