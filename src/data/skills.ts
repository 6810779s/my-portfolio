import { SkillCategory } from '@/types';

export const skills: SkillCategory[] = [
  {
    name: {
      ko: '프론트엔드',
      en: 'Frontend',
    },
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'Storybook', 'Vite'],
  },
  {
    name: {
      ko: '상태관리',
      en: 'State Management',
    },
    skills: ['React Query', 'MobX', 'Redux', 'Redux-Saga', 'Zustand', 'Context API'],
  },
  {
    name: {
      ko: '스타일링',
      en: 'Styling',
    },
    skills: ['Tailwind CSS', 'SCSS', 'Styled-Components', 'CSS Modules'],
  },
  {
    name: {
      ko: '백엔드',
      en: 'Backend',
    },
    skills: ['Node.js', 'Nest.js', 'Prisma', 'PostgreSQL', 'Supabase', 'Spring'],
  },
  {
    name: {
      ko: '도구',
      en: 'Tools',
    },
    skills: ['Git', 'Docker', 'AWS S3', 'Figma', 'Jira', 'Husky', 'ESLint', 'Prettier'],
  },
];
