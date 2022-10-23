export interface Welcome {
    id: string;
    cv: Cv[];
}

export interface Cv {
    fullName: FullName;
    _id: string;
    userId: string;
    font: string;
    theme: Theme;
    image: string;
    about: string;
    title: string;
    subTitle: string;
    address: Address;
    skillsSummary: Education[];
    contacts: Contact[];
    educations: Education[];
    techExperiences: Education[];
    softwareKnowledges: SoftwareKnowledge[];
    experiences: Experience[];
    socials: Social[];
}

export interface Address {
    country: string;
    province: string;
    region: string;
}

export interface Contact {
    label: string;
    icon: string;
}

export interface Education {
    label: string;
}

export interface Experience {
    title: string;
    company: Company;
    description: string;
    beginDate: string;
    endDate: string;
    skills: Education[];
}

export interface Company {
    name: string;
    url: string;
}

export interface FullName {
    first: string;
    last: string;
}

export interface Social {
    label: string;
    icon: string;
    link: string;
}

export interface SoftwareKnowledge {
    label: string;
    skills: Education[];
}

export interface Theme {
    color: string;
    font: string;
    lang: string;
}
