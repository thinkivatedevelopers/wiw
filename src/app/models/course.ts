export interface Course {
  slug: string;
  name: string;
  description: string;
  image: string;
  grades: Grade[];
  isLive: boolean;
}

export interface Grade {
  slug: string;
  name: string;
  description: string;
  image: string;
  isLive: boolean;
  packages: Package[];
}

export interface Package {
  slug: string;
  name: string;
  image: string;
  description: string;
  price: number;
  isOnlinePack: boolean;
  isComboPack: boolean;
  validityDays: number;
  subjects: Subject[];
}

export interface Subject {
  name: string;
  icon: string;
}
