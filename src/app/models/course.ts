export interface Course {
  slug: string;
  name: string;
  description: string;
  image: string;
  grades: Grade[];
}

interface Grade {
  slug: string;
  name: string;
  decription: string;
  image: string;
  packages: Package[];
}

interface Package {
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

interface Subject {
  name: string;
  icon: string;
}
