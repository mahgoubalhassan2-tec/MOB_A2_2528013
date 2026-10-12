import { UserProfile, SkillItem, EducationItem, Project } from '../types';

export const INITIAL_PROFILE: UserProfile = {
  fullName: 'Mahgoub Adil Ahmed Alhassan',
  headline: 'Software Engineering Student & Mobile Developer',
  biography:
    'Passionate Software Engineering undergraduate at INES-Ruhengeri specializing in building responsive, offline-first mobile applications using React Native, Expo, and TypeScript. Committed to clean code architecture and practical software solutions for community challenges.',
  primarySkill: 'React Native & Expo',
  availabilityStatus: 'Available for Internship',
  avatarUri: null,
  registrationNumber: '25/28013',
  verificationCode: 'MOB-A2-8013',
  contactEmail: 'mahgoubalhassan2@gmail.com',
  githubUrl: 'https://github.com/mahgoubalhassan2-tec',
  lastUpdated: '2026-10-12',
};

export const SKILLS_DATA: SkillItem[] = [
  {
    id: 's1',
    name: 'React Native & Expo',
    category: 'Mobile',
    level: 'Advanced',
    experienceYears: '2 years',
  },
  {
    id: 's2',
    name: 'TypeScript & Modern JavaScript',
    category: 'Language',
    level: 'Advanced',
    experienceYears: '2 years',
  },
  {
    id: 's3',
    name: 'Responsive Flexbox & Accessible UI',
    category: 'Mobile',
    level: 'Advanced',
    experienceYears: '2 years',
  },
  {
    id: 's4',
    name: 'AsyncStorage & Offline Persistence',
    category: 'Architecture',
    level: 'Proficient',
    experienceYears: '1.5 years',
  },
  {
    id: 's5',
    name: 'React Navigation (Tabs & Stacks)',
    category: 'Mobile',
    level: 'Advanced',
    experienceYears: '2 years',
  },
  {
    id: 's6',
    name: 'Git, GitHub & Version Control',
    category: 'Tools & DevOps',
    level: 'Proficient',
    experienceYears: '2 years',
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    id: 'e1',
    institution: "Institut d'Enseignement Supérieur de Ruhengeri (INES-Ruhengeri)",
    degree: 'Bachelor of Science in Software Engineering',
    faculty: 'Faculty of Applied Fundamental Sciences / Computer Science',
    period: '2024 - Present',
    currentStatus: 'Active Student (SWE 3409: Mobile Application Development)',
    keyCoursework: [
      'SWE 3409: Mobile Application Development (React Native & Expo)',
      'Data Structures & Algorithms',
      'Database Design & Management Systems',
      'Object-Oriented Analysis and Design',
      'Software Testing and Quality Assurance',
    ],
  },
  {
    id: 'e2',
    institution: 'Secondary Education Diploma',
    degree: 'Advanced Certificate of Secondary Education',
    faculty: 'Mathematics, Physics & Computer Studies',
    period: '2021 - 2023',
    currentStatus: 'Graduated with Honors',
    keyCoursework: [
      'Advanced Mathematics & Logic',
      'Introduction to Computer Programming',
      'Physics and Information Systems',
    ],
  },
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'ines-attendance-tracker',
    title: 'INES Attendance & Campus Event Tracker',
    category: 'Campus Automation',
    summary:
      'A cross-platform mobile application designed to streamline student lecture attendance verification and campus event check-in at INES-Ruhengeri.',
    problem:
      'Manual paper attendance sheets during high-enrollment lectures at INES-Ruhengeri led to line congestion, class start delays of up to 15 minutes, and frequent transcription errors when administrative staff logged records.',
    studentContribution:
      'Independently architected the React Native mobile front-end using TypeScript; implemented offline-capable local storage using AsyncStorage for lecture sessions; engineered strict validation rules for student registration numbers; structured modular Bottom Tab and Stack navigation; and designed responsive Flexbox card interfaces tested on multiple Android screen resolutions.',
    technologyUsed: [
      'React Native',
      'Expo',
      'TypeScript',
      'AsyncStorage',
      'React Navigation',
      'Flexbox',
    ],
    keyFeatures: [
      'Offline session recording when campus Wi-Fi or cellular networks are unavailable',
      'Strict input validation for INES registration numbers (e.g., 25/28013 format)',
      'Interactive session summary dashboard with attendee count and timestamps',
      'Exportable local attendance records stored securely on the device',
    ],
    metricsOrOutcome:
      'Eliminated paper slip usage in simulated classroom testing and prevented any data loss during simulated network disconnects.',
    githubUrl: 'https://github.com/mahgoubalhassan2-tec/ines-attendance-tracker',
    isOfflineCapable: true,
  },
  {
    id: 'musanze-agriprice',
    title: 'Musanze AgriPrice & Farmers Market Hub',
    category: 'Community & Commerce',
    summary:
      'A community-oriented mobile platform enabling smallholder potato and vegetable farmers across Musanze district to access verified daily wholesale market rates.',
    problem:
      'Smallholder farmers in the Northern Province frequently sold produce to intermediaries below fair market value because official market price bulletins were inaccessible without internet connectivity in rural farmland.',
    studentContribution:
      'Engineered an offline-first caching mechanism using AsyncStorage that retains the latest synchronized market commodity prices; designed high-contrast, accessible UI cards readable in direct outdoor sunlight; built controlled search filters for local agricultural produce (Irish potatoes, maize, beans); and structured responsive layouts adaptable to varied Android system font sizes.',
    technologyUsed: [
      'React Native',
      'Expo',
      'TypeScript',
      'AsyncStorage',
      'Flexbox UI',
      'Accessible Components',
    ],
    keyFeatures: [
      '100% offline access to cached Musanze wholesale and retail commodity price tables',
      'Color-coded market price trend indicators (increasing, stable, decreasing)',
      'Instant search and produce categorization for quick lookup',
      'Direct dial button for verified local farmer cooperative coordinators',
    ],
    metricsOrOutcome:
      'Successfully sustained full browsing capability under Airplane Mode with instant sub-50ms search response times.',
    githubUrl: 'https://github.com/mahgoubalhassan2-tec/musanze-agriprice',
    isOfflineCapable: true,
  },
];
