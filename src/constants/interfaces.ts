export const enum Race {
    'Saiyan' = 'Saiyan',
    'Namekian' = 'Namekian',
    'Human' = 'Human',
    'Majin' = 'Majin',
    'Frieza Race' = 'Frieza Race',
    'Jiren Race' = 'Jiren Race',
    'Android' = 'Android',
    'God' = 'God',
    'Angel' = 'Angel',
    'Evil' = 'Evil',
    'Unknown' = 'Unknown',
    'Nucleico benigno' = 'Nucleico benigno',
    'Nucleico' = 'Nucleico',
}

export const enum Gender {
    'Male' = 'Male',
    'Female' = 'Female',
    'Other' = 'Other',
    'Unknown' = 'Unknown',
}

export const enum Affiliation {
    'Z Fighter' = 'Z Fighter',
    'Red Ribbon Army' = 'Red Ribbon Army',
    'Namekian Warrior' = 'Namekian Warrior',
    'Freelancer' = 'Freelancer',
    'Army of Frieza' = 'Army of Frieza',
    'Other' = 'Other',
    'Pride Troopers' = 'Pride Troopers',
    'Assistant of Vermoud' = 'Assistant of Vermoud',
    'Assistant of Beerus' = 'Assistant of Beerus',
    'Villain' = 'Villain',
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
