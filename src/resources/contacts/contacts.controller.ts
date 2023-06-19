import { Router } from 'express'
import { ContactsService } from '~/resources/contacts/contacts.service'
import { BadRequestException, NotFoundException } from '~/utils/exceptions'
/**
 * Nous créeons un `Router` Express, il nous permet de créer des routes en dehors du fichier `src/index.ts`
 */
const ContactsController = Router()

/**
 * Instance de notre service
 */
const service = new ContactsService()

/**
 * Trouver tous les contacts
 */
ContactsController.get('/', (req, res) => {
    return res
        .status(200)
        .json(service.findAll())
})

/**
 * Trouver un contact en particulier
 */
ContactsController.get('/:id', (req, res) => {
    const id = Number(req.params.id)

    if (!Number.isInteger(id)) {
        throw new BadRequestException('ID non valide')
    }

    const contact = service.findOne(id)

    if (!contact) {
        throw new NotFoundException('Contact introuvable')
    }

    return res
        .status(200)
        .json(contact)
})

/**
 * Créer un contact
 */
ContactsController.post('/', (req, res) => {
    const createdContact = service.create(req.body)

    return res
        .status(201)
        .json(createdContact)
})

/**
 * Mettre à jour d'un contact
 */
ContactsController.patch('/:id', (req, res) => {
    const id = Number(req.params.id)

    if (!Number.isInteger(id)) {
        throw new BadRequestException('ID invalide')
    }

    const updatedContact = service.update(req.body, id)

    return res
        .status(200)
        .json(updatedContact)
})

/**
 * Suppression d'un contact
 */
ContactsController.delete('/:id', (req, res) => {
    const id = Number(req.params.id)

    if (!Number.isInteger(id)) {
        throw new BadRequestException('ID invalide')
    }

    service.delete(id)
    return res
        .status(200)
        .json(id)
})

/**
 * On expose notre controller pour l'utiliser dans `src/index.ts`
 */
export { ContactsController }