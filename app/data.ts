// Data.ts
import { Product } from "@/app/types";

export const products: Product[] = [
  {
    id: 1,
    imageSrc:"/images/clinics/miami/1.png",
    media:["/images/clinics/miami/1.png","/images/clinics/miami/2.png"],
    title: "Clinics - Miami, FL",
    description: "We will be hosting our clinics soon, save your place!",
    pastDescription: "What an incredible experience we had!",
    badge: "Inscriptions open!",
    date: "May 31, Jun 1, 2/2024",
    endDate:"07/02/2024",
    location: "Orange Bowl Field at Harris Field Park, Miami, FL",
    paymentLink: "https://buy.stripe.com/28o3egdwU9KlcrSbII",
   
  },
  {
   id: 2,
    imageSrc: "/images/camps/colombia/1.png",
    media:["/images/camps/colombia/1.png","/images/camps/colombia/2.png","/images/camps/colombia/3.png","/images/camps/colombia/4.png"],
    title: "Campus - Medellin, Colombia",
    description: "Exaiting news! We will be present in campus event in Colombia",
    pastDescription: "What an incredible experience we had!",
    badge: "Inscriptions open!",
    date: "Jun 8,9,10,11/2024",
    endDate:"06/11/2024",
    location: "Cancha Politecnico Colombiano Jaime Isaza Cadavid, Medellin, Colombia",
    paymentLink: "https://google.com",
   
  },
];

export const events = [
  {
    id: 1,
    imageSrc: "/images/categories/clinics.png",
    title: "Soccer Clinics - Miami, FL",
    description: "description of the event",
    link: "clinics", 
  },
  {
    id: 2,
    imageSrc: "/images/categories/camps.png",
    title: "Soccer Clinics - Miami, FL",
    description: "description of the event",
    link: "camps",  
  },
  {
    id: 3,
    imageSrc: "/images/categories/tryouts.png",
    title: "Soccer Clinics - Miami, FL",
    description: "description of the event",
    link: "tryouts", 
  },
];


export const clinics = [
  {
    id: 1,
    imageSrc: "/images/clinics/miami/1.png",
   
  },
  {
    id: 2,
    imageSrc: "/images/clinics/miami/2.png",

  },
  {
    id: 3,
    imageSrc: "/images/clinics/miami/3.png",
  
  },
   {
    id: 4,
    imageSrc:"/images/clinics/miami/4.png",
   
  },
  {
    id: 5,
    imageSrc: "/images/clinics/miami/5.png",

  },
  {
    id: 6,
    imageSrc: "/images/clinics/miami/6.png",
  
  },
   {
    id: 7,
    imageSrc: "/images/clinics/miami/7.png",

  },
  {
    id: 8,
    imageSrc: "/images/clinics/miami/8.png",
  
  },
];

export const tryouts = [
  {
    id: 1,
    imageSrc: "/images/tryouts/miami/1.png",
   
  },
  {
    id: 2,
     imageSrc: "/images/tryouts/miami/2.png",

  },
  {
    id: 3,
     imageSrc: "/images/tryouts/miami/5.png",
  
  },
   {
    id: 4,
     imageSrc: "/images/tryouts/miami/7.png",
  
  },
   {
    id: 5,
     imageSrc: "/images/tryouts/miami/8.png",
  
  },
   {
    id: 6,
     imageSrc: "/images/tryouts/miami/10.png",
  
  },
   {
    id: 7,
     imageSrc: "/images/tryouts/miami/13.png",
  
  },
];

export const camps = [
  {
    id: 1,
    imageSrc: "/images/camps/colombia/1.png",
   
  },
  {
    id: 2,
    imageSrc: "/images/camps/colombia/2.png",

  },
  {
    id: 3,
    imageSrc: "/images/camps/colombia/3.png",
  
  },
   {
    id: 4,
    imageSrc: "/images/camps/colombia/4.png",
  
  },
];

export const aboutus = [
  {
    id: 1,
    imageSrc: "/images/clinics/miami/8.png",
   
  },
  {
    id: 2,
    imageSrc: "/images/camps/colombia/4.png",

  },
  {
    id: 3,
    imageSrc:"/images/camps/colombia/3.png",
  
  },
  {
    id: 4,
    imageSrc:"/images/camps/colombia/1.png",
   
  },
  {
    id: 5,
    imageSrc: "/images/tryouts/miami/1.png",

  },
  {
    id: 6,
    imageSrc: "/images/tryouts/miami/7.png",
  
  },
   {
    id: 7,
    imageSrc: "/images/clinics/miami/4.png",
  
  },
];




export const contactFormFields = [
  {
    id: 0,
    image: "/images/contactus/banner1.png" },
  {
    id: 1,
    name: "name",
    label: "Name",
    type: "text",
    required: true,
  },
  {
    id: 2,
    name: "email",
    label: "Email",
    type: "email",
    required: true,
  },
  {
    id: 3,
    name: "message",
    label: "Message",
    type: "textarea",
    required: true,
    rows: 4,
  },
];




export interface Square {
  id: number;
  src: string;
}

export const squareData: Square[] = [
  {
    id: 1,
    src: "/images/home/1.png",
  },
  {
    id: 2,
    src: "/images/home/2.jpeg",
  },
  {
    id: 3,
    src: "/images/home/3.jpg",
  },
  {
    id: 4,
    src: "/images/home/4.jpeg",
  },
  {
    id: 5,
    src: "/images/home/5.jpeg",
  },
  {
    id: 6,
    src: "/images/home/6.jpeg",
  },
  {
    id: 7,
    src: "/images/home/7.jpeg",
  },
  {
    id: 8,
    src: "/images/home/8.jpg",
  },
  {
    id: 9,
    src: "/images/home/9.jpg",
  },
  {
    id: 10,
    src: "/images/home/10.jpg",
  },
  {
    id: 11,
    src: "/images/home/11.jpg",
  },
  {
    id: 12,
    src: "/images/home/12.jpg",
  },
  {
    id: 13,
    src: "/images/home/13.jpg",
  },
  {
    id: 14,
    src: "/images/home/14.jpg",
  },
  {
    id: 15,
    src: "/images/home/15.jpg",
  },
  {
    id: 16,
    src: "/images/home/16.jpg",
  },
];