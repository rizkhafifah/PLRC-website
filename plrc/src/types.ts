export type PageRoute = 'landing' | 'home' | 'divisions' | 'research' | 'contact';

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  category: 'executive' | 'hod';
  department?: string;
  major: string;
  batch: string;
  image: string;
  bio: string;
  favoriteBook: string;
  researchFocus: string;
  email: string;
  linkedin?: string;
}

export interface Division {
  id: string;
  name: string;
  shortCode: string;
  description: string;
  headName: string;
  focusAreas: string[];
  keyProjects: {
    title: string;
    desc: string;
    status: 'Ongoing' | 'Published' | 'Upcoming';
  }[];
  meetingSchedule: string;
  memberCount: number;
  iconName: string;
}

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string[];
  department: string;
  category: string;
  publishedDate: string;
  doi?: string;
  abstract: string;
  keywords: string[];
  readTime: string;
  citations: number;
  pdfUrl?: string;
  pdfFileName?: string;
  featured?: boolean;
  publicationStatus?: string;
}

export interface ContactPerson {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone?: string;
  image: string;
  scope: string;
}

export interface OpportunityItem {
  id: string;
  title: string;
  category: string;
  description: string;
  requirements: string[];
  contactEmail: string;
  status: 'Open' | 'Ongoing' | 'Rolling';
}

export interface Quote {
  quote: string;
  author: string;
  work: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: 'Call for Papers' | 'Recruitment' | 'Event' | 'Publication';
  summary: string;
  location?: string;
  deadline?: string;
  urgent?: boolean;
}

