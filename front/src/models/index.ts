import type { Dayjs } from 'dayjs';

export interface ProfileModel {
    profileId: string;
    profile: Profile;
}

export interface Profile {
    fullName: FullName;
    _id: string;
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
    beginDate: Dayjs | null;
    endDate: Dayjs | null;
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
    skills: string[];
}