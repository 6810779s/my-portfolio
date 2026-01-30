export interface TroubleshootingItem {
  title: {
    ko: string;
    en: string;
  };
  problem: {
    ko: string;
    en: string;
  };
  solution: {
    ko: string;
    en: string;
  };
  result: {
    ko: string;
    en: string;
  };
}

export interface TechImplementationItem {
  category: {
    ko: string;
    en: string;
  };
  details: {
    ko: string[];
    en: string[];
  };
}

export interface ResponsibilityCategory {
  category: {
    ko: string;
    en: string;
  };
  items: {
    ko: string[];
    en: string[];
  };
}

export interface FolderItem {
  name: string;
  description?: {
    ko: string;
    en: string;
  };
  children?: FolderItem[];
}

export interface Project {
  id: string;
  slug: string;
  title: {
    ko: string;
    en: string;
  };
  description: {
    ko: string;
    en: string;
  };
  period: string;
  role: {
    ko: string;
    en: string;
  };
  team: string;
  category: 'company' | 'freelance' | 'side';
  company?: string;
  techStack: string[];
  features: {
    ko: string[];
    en: string[];
  };
  responsibilities: ResponsibilityCategory[];
  link?: string;
  // 상세 정보 (프로젝트 소개 페이지용)
  detailedDescription?: {
    ko: string;
    en: string;
  };
  techImplementation?: TechImplementationItem[];
  troubleshooting?: TroubleshootingItem[];
  folderStructure?: FolderItem[];
}

export interface Experience {
  id: string;
  company: {
    ko: string;
    en: string;
  };
  position: {
    ko: string;
    en: string;
  };
  startDate: string; // YYYY-MM-DD
  endDate?: string; // YYYY-MM-DD (optional for current job)
  isCurrent: boolean;
  description: {
    ko: string[];
    en: string[];
  };
}

export interface SkillCategory {
  name: {
    ko: string;
    en: string;
  };
  skills: string[];
}
