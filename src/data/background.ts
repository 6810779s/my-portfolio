export interface Education {
  period: string;
  school: { ko: string; en: string };
  major?: { ko: string; en: string };
  type: 'university' | 'highschool';
}

export interface Training {
  period: string;
  institution: { ko: string; en: string };
  program: { ko: string; en: string };
}

export interface Certification {
  date: string;
  name: { ko: string; en: string };
  grade?: string;
  number?: string;
}

export const education: Education[] = [
  {
    period: '2016.09 - 2020.07',
    school: {
      ko: '중국 북경대학교',
      en: 'Peking University, China',
    },
    major: {
      ko: '사회학과',
      en: 'Sociology',
    },
    type: 'university',
  },
  {
    period: '2012.09 - 2015.07',
    school: {
      ko: '중국 Affiliated to BIT 고등학교',
      en: 'High School Affiliated to BIT, China',
    },
    type: 'highschool',
  },
];

export const training: Training[] = [
  {
    period: '2023.01 - 2023.05',
    institution: {
      ko: '삼성 청년 SW아카데미',
      en: 'Samsung SW Academy for Youth',
    },
    program: {
      ko: 'SSAFY 9기 1학기 수료',
      en: 'SSAFY 9th Cohort (1st Semester)',
    },
  },
  {
    period: '2020.12 - 2021.06',
    institution: {
      ko: '하이미디어IT융합인재개발원',
      en: 'Hi-Media IT Academy',
    },
    program: {
      ko: '사물인터넷(IoT) 기반 자동화 시스템 개발',
      en: 'IoT-based Automation System Development',
    },
  },
];

export const certifications: Certification[] = [
  {
    date: '2024.10',
    name: {
      ko: 'OPIC 영어',
      en: 'OPIC English',
    },
    grade: 'IH',
  },
  {
    date: '2025.04',
    name: {
      ko: 'OPIC 중국어',
      en: 'OPIC Chinese',
    },
    grade: 'AL',
  },
];
