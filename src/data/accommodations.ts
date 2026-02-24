
export type AccommodationType = 'cabin' | 'motorhome' | 'camping';

export interface Amenity {
  id: number;
  name: string;
  icon: string;
}

export interface Accommodation {
  id: string;
  type: AccommodationType;
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  currency: string;
  capacity: number;
  available: number;
  total: number;
  images: string[];
  amenities: Amenity[];
  featured?: boolean;
  promo?: boolean;
}

export interface Testimonial {
  id: string;
  author: string;
  avatar?: string;
  date: string;
  message: string;
  accommodation?: string;
}

export const testimonials: Testimonial[] = [];
export const heroImages = [
  'https://images.unsplash.com/photo-1571863533956-01c88e79957e?w=1920&q=80',
  'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&q=80',
  'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=80',
];