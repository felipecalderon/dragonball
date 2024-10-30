export const enum Race {
    'Saiyan',
    'Namekian',
    'Human',
    'Majin',
    'Frieza Race',
    'Jiren Race',
    'Android',
    'God',
    'Angel',
    'Evil',
    'Unknown',
    'Nucleico benigno',
    'Nucleico',
}

export const enum Gender {
    'Male',
    'Female',
    'Other',
    'Unknown',
}

export const enum Affiliation {
    'Z Fighter',
    'Red Ribbon Army',
    'Namekian Warrior',
    'Freelancer',
    'Army of Frieza',
    'Other',
    'Pride Troopers',
    'Assistant of Vermoud',
    'Assistant of Beerus',
    'Villain',
}
export interface Character {
    id: number
    name: string
    ki: string
    maxKi: string
    race: Race
    gender: Gender
    description: string
    image: string
    affiliation: Affiliation
    deletedAt: null | string
    originPlanet?: string
}
