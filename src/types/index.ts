export interface Project {
  id?: number;
  name: string;
  image: string;
  description: string;
  features: string[];
  live: string;
  github: string;
  tech: string[]; 
}


export interface blog {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  content: string;
}