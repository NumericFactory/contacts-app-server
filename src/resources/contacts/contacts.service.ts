import type { Contact } from '~~/types/contacts'
import { contacts } from '~/data'
import { NotFoundException } from '~/utils/exceptions'

export class ContactsService {
    /**
     * On copie localement les contacts pour pouvoir insérer, supprimer etc
     */
    contacts: Contact[] = contacts

    /**
     * Trouve tous les contacts
     */
    findAll(): Contact[] {
        return this.contacts
    }

    /**
     * Trouve un contact en particulier
     * @param id - ID unique de l'contact
     */
    findOne(id: number): Contact | undefined {
        return this.contacts.find(contact => contact.id === id)
    }

    /**
     * Met à jour un contact en particulier
     *
     * /!\ Idéalement, il faudrait vérifier le contenu de la requête avant de le sauvegarder.
     *
     * @param contactData - 
     * Un objet correspondant à un contact, il ne contient pas forcément tout un contact. 
     * Attention, on ne prend pas l'id avec.
     * @param id - ID unique de l'contact
     */
    update(contactData: Partial<Contact>, id: number): Contact | undefined {
        const index = this.contacts.findIndex(contact => contact.id === id)

        if (index === -1) {
            throw new NotFoundException('contact introuvable')
        }

        /* On ne met jamais l'id à jour */
        delete contactData.id

        this.contacts[index] = { ...this.contacts[index], ...contactData }
        return this.contacts[index]
    }

    /**
     * Créé un contact
     *
     * /!\ Idéalement, il faudrait vérifier le contenu de la requête avant de le sauvegarder.
     *
     * @param contactData - Un objet correspondant à un contact. Attention, on ne prend pas l'id avec.
     */
    create(contactData: Omit<Contact, 'id'>): Contact {
        const newContact: Contact = {
            ...contactData,
            /* /!\ Ne pas faire ceci dans un vrai projet */
            // id: Math.floor(Math.random() * 100)
            id: this.autoincrementId()
        }

        this.contacts = [...this.contacts, newContact];
        return newContact
    }

    /**
     * Suppression d'un contact
     */
    delete(id: number) {
        this.contacts = this.contacts.filter(contact => contact.id !== id)
    }


    /* Utility function auto-increment*/
    autoincrementId() {
        return this.contacts[this.contacts.length - 1].id + 1
    }
}
