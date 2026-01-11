// app/types/index.ts
export interface Doctor {
    id: number;
    name: string;
    specialty: string;
    experience: string;
    location: string;
    image: string;
    available: string;
    time: string;
    bio: string;
    education: string[];
    services: string[];
}
export interface Service {
    id: number;
    title: string;
    description: string;
    icon: string; // Changed from JSX.Element to string
    detailedDescription: string;
    doctors: number[];
}
