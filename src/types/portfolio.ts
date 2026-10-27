export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
}