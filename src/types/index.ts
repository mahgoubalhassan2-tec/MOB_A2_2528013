export interface Project {
  id: string;
  title: string;
  category: string;
  summary: string;
  problem: string;
  studentContribution: string;
  technologyUsed: string[];
  keyFeatures: string[];
  metricsOrOutcome: string;
  githubUrl: string;
  isOfflineCapable: boolean;
}

export type AvailabilityStatus =
  | 'Available for Internship'
  | 'Open to Project Opportunities'
  | 'Available Part-Time'
  | 'Focused on Academic Studies';

export interface UserProfile {
  fullName: string;
  headline: string;
  biography: string;
  primarySkill: string;
  availabilityStatus: AvailabilityStatus;
  avatarUri: string | null;
  registrationNumber: string;
  verificationCode: string;
  contactEmail: string;
  githubUrl: string;
  lastUpdated: string;
}

export interface SkillItem {
  id: string;
  name: string;
  category: 'Mobile' | 'Language' | 'Architecture' | 'Tools & DevOps';
  level: 'Intermediate' | 'Advanced' | 'Proficient';
  experienceYears: string;
}

export interface EducationItem {
  id: string;
  institution: string;
  degree: string;
  faculty: string;
  period: string;
  currentStatus: string;
  keyCoursework: string[];
}

export type RootTabParamList = {
  HomeTab: undefined;
  ProjectsTab: undefined;
  SkillsTab: undefined;
  ProfileTab: undefined;
  AboutTab: undefined;
};

export type ProjectsStackParamList = {
  ProjectsList: undefined;
  ProjectDetail: { projectId: string };
};
