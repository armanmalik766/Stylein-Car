// Import React to resolve namespace issue for React.ReactNode
import React from 'react';

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
  icon: React.ReactNode;
  gallery?: string[];
}

export interface Brand {
  name: string;
  logo: string;
}

export interface Testimonial {
  id: string;
  name: string;
  car: string;
  content: string;
  rating: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  service: string;
  image: string;
}