// app/data/services.ts
import { Doctor, Service } from '../type';

export const doctors: Doctor[] = [
    {
        id: 1,
        name: 'Dr. Sarah Johnson',
        specialty: 'Cardiologist',
        experience: '12 years',
        location: 'Main Hospital, Floor 3',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=60',
        available: 'Mon, Wed, Fri',
        time: '9:00 AM - 5:00 PM',
        bio: 'Specializing in interventional cardiology with over a decade of experience in treating complex heart conditions.',
        education: ['MD, Harvard Medical School', 'Fellowship in Interventional Cardiology'],
        services: ['Cardiology', 'Heart Health']
    },
    {
        id: 2,
        name: 'Dr. Michael Chen',
        specialty: 'Cardiologist',
        experience: '10 years',
        location: 'Main Hospital, Floor 3',
        image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&auto=format&fit=crop&q=60',
        available: 'Tue, Thu, Sat',
        time: '10:00 AM - 6:00 PM',
        bio: 'Specializing in cardiology with over a decade of experience in treating complex heart conditions.',
        education: ['MD, Johns Hopkins School of Medicine', 'Fellowship in Cardiology'],
        services: ['Cardiology', 'Heart Health']
    },
    {
        id: 3,
        name: 'Dr. Emily Rodriguez',
        specialty: 'Dentist',
        experience: '8 years',
        location: 'Dental Clinic, Floor 2',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&auto=format&fit=crop&q=60',
        available: 'Mon, Wed, Fri',
        time: '8:00 AM - 4:00 PM',
        bio: 'Specializing in general dentistry with expertise in cosmetic procedures and preventive care.',
        education: ['MD, University of California, San Francisco', 'Fellowship in Dentistry'],
        services: ['Dental Care', 'Oral Health']
    },
    {
        id: 4,
        name: 'Dr. David Kim',
        specialty: 'Dentist',
        experience: '9 years',
        location: 'Dental Clinic, Floor 2',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=60',
        available: 'Mon, Wed, Fri',
        time: '9:00 AM - 5:00 PM',
        bio: 'Specializing in pediatric dentistry with a focus on children\'s oral health and preventive care.',
        education: ['MD, University of California, San Francisco', 'Fellowship in Pediatric Dentistry'],
        services: ['Dental Care', 'Pediatrics']
    },
    {
        id: 5,
        name: 'Dr. Lisa Thompson',
        specialty: 'Neurologist',
        experience: '11 years',
        location: 'Main Hospital, Floor 4',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=60',
        available: 'Mon, Wed, Fri',
        time: '8:00 AM - 4:00 PM',
        bio: 'Specializing in neurology with expertise in treating complex neurological disorders and brain conditions.',
        education: ['MD, Harvard Medical School', 'Fellowship in Neurology'],
        services: ['Neurology', 'Brain Health']
    },
    {
        id: 6,
        name: 'Dr. James Wilson',
        specialty: 'Orthopedic Surgeon',
        experience: '15 years',
        location: 'Main Hospital, Floor 5',
        image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=60',
        available: 'Tue, Thu, Sat',
        time: '7:00 AM - 3:00 PM',
        bio: 'Specializing in orthopedic surgery with expertise in joint replacements and sports medicine.',
        education: ['MD, Stanford University School of Medicine', 'Fellowship in Orthopedic Surgery'],
        services: ['Orthopedics', 'Bone Health']
    }
];

export const services: Service[] = [
    {
        id: 1,
        title: 'Cardiology',
        description: 'Comprehensive heart care with advanced diagnostic tools and treatments for all cardiac conditions.',
        icon: 'heartbeat',
        detailedDescription: 'Our cardiology department provides comprehensive heart care services including diagnostic testing, preventive cardiology, interventional procedures, and cardiac rehabilitation. Our team of board-certified cardiologists use the latest technology to diagnose and treat all types of heart conditions.',
        doctors: [1, 2]
    },
    {
        id: 2,
        title: 'Dental Care',
        description: 'Complete dental care services including cleaning, whitening, and cosmetic dentistry.',
        icon: 'tooth',
        detailedDescription: 'Our dental department provides comprehensive dental care services including diagnostic testing, preventive dentistry, restorative procedures, and cosmetic dentistry. Our team of board-certified dentists use the latest technology to diagnose and treat all types of dental conditions.',
        doctors: [3, 4]
    },
    {
        id: 3,
        title: 'Neurology',
        description: 'Comprehensive neurological care with advanced diagnostic tools and treatments for all neurological conditions.',
        icon: 'brain',
        detailedDescription: 'Our neurology department provides comprehensive neurological care services including diagnostic testing, preventive neurology, interventional procedures, and neurological rehabilitation. Our team of board-certified neurologists use the latest technology to diagnose and treat all types of neurological conditions.',
        doctors: [2, 5]
    },
    {
        id: 4,
        title: 'Orthopedics',
        description: 'Comprehensive orthopedic care with advanced diagnostic tools and treatments for all orthopedic conditions.',
        icon: 'bone',
        detailedDescription: 'Our orthopedics department provides comprehensive orthopedic care services including diagnostic testing, preventive orthopedics, interventional procedures, and orthopedic rehabilitation. Our team of board-certified orthopedic surgeons use the latest technology to diagnose and treat all types of orthopedic conditions.',
        doctors: [3, 6]
    },
    {
        id: 5,
        title: 'Pediatrics',
        description: 'Compassionate healthcare for infants, children, and adolescents in a child-friendly environment.',
        icon: 'baby',
        detailedDescription: 'Our pediatrics department provides comprehensive healthcare for infants, children, and adolescents. Our team of pediatricians and specialists create a child-friendly environment where your little ones can feel comfortable and safe. We offer preventive care, vaccinations, and treatment for common childhood illnesses.',
        doctors: [4, 5]
    }
];
