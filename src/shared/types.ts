import { JSX } from "react";

export enum SelectedPage {
    Home = "home",
    OurStory = "ourstory",
    Pricing = "pricing",
    Contact = "contact"
}

// this represents the object that's in the Array in ourstory's index
export interface OurStoryType {
    icon: JSX.Element;
    title: string;
    description: string;
}