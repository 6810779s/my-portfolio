export interface SolutionCandidate {
  name: {
    ko: string;
    en: string;
  };
  pros: {
    ko: string;
    en: string;
  };
  cons: {
    ko: string;
    en: string;
  };
}

// 새로운 상세 형식 (situation, candidates, reason 포함)
export interface TroubleshootingItemDetailed {
  title: {
    ko: string;
    en: string;
  };
  situation: {
    environment: {
      ko: string;
      en: string;
    };
    symptom: {
      ko: string;
      en: string;
    };
    impact: {
      ko: string;
      en: string;
    };
  };
  candidates: SolutionCandidate[];
  solution: {
    choice: string; // "A", "B", "C", "D" 또는 "A+B" 형식
    name: {
      ko: string;
      en: string;
    };
    description: {
      ko: string;
      en: string;
    };
  };
  reason: {
    ko: string[];
    en: string[];
  };
}

// 기존 간단 형식 (하위 호환성)
export interface TroubleshootingItemSimple {
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

// 둘 다 지원하는 유니온 타입
export type TroubleshootingItem = TroubleshootingItemDetailed | TroubleshootingItemSimple;

// 타입 가드 함수
export function isDetailedTroubleshooting(item: TroubleshootingItem): item is TroubleshootingItemDetailed {
  return 'situation' in item && 'candidates' in item;
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
