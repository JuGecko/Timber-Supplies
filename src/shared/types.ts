import { JSX } from "react";

export enum SelectedPage {
    Home = "home",
    OurStory = "ourstory",
    Services = "services",
    Contact = "contact"
}

// this represents the object that's in the Array in ourstory's index
export interface OurStoryType {
    icon: JSX.Element;
    title: string;
    description: string;
}

export interface ServiceType {
    name: string,
    description?: string;
    image: string;
}