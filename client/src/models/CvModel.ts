export interface CvModel {
    cvs: Cv[];
    cv: Cv;
}



const FullName = z.object({
    first: z.string(),
    last: string;
})


const CvSchema = z.object({
    fullName: FullName;
    _id: z.string().uuid(),
    userId: z.string(),
    theme: Theme;
    image: z.string(),
    about: z.string(),
    title: z.string(),
    subTitle: z.string(),
    address: Address,
    skillsSummary: z.array(Education),
    contacts: z.array(Contact),
    educations: z.array(Education),
    techExperiences: z.array(Education),
    softwareKnowledges: z.array(SoftwareKnowledge),
    experiences: z.array(Experience),
    socials: z.array(Social)
})

const CvStateSchema = z.object({
    cvs: z.array(CvSchema),
    cv: CvSchema,
})



export interface Cv {
    fullName: FullName;
    _id: string;
    userId: string;
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
import { z } from 'zod'



