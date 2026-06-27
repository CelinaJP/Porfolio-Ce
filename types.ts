
export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
  link?: string;
}

export interface Skill {
  name: string;
  category: 'technical' | 'language' | 'soft';
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  imageUrl?: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}
