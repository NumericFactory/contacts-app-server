export type ContactCategory = 'student' | 'teacher'

export interface Contact {
    id: number
    name: string
    type: ContactCategory
}