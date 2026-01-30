import { Experience } from '@/types';

// 경력 기간 계산 함수
export function calculateDuration(startDate: string, endDate?: string, locale: 'ko' | 'en' = 'ko'): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();

  let years = end.getFullYear() - start.getFullYear();
  let months = end.getMonth() - start.getMonth();

  if (months < 0) {
    years--;
    months += 12;
  }

  // 일 단위 보정 (시작일이 종료일보다 크면 1개월 빼기)
  if (end.getDate() < start.getDate()) {
    months--;
    if (months < 0) {
      years--;
      months += 12;
    }
  }

  if (locale === 'ko') {
    if (years > 0 && months > 0) return `${years}년 ${months}개월`;
    if (years > 0) return `${years}년`;
    if (months > 0) return `${months}개월`;
    return '1개월 미만';
  } else {
    if (years > 0 && months > 0) return `${years}y ${months}m`;
    if (years > 0) return `${years}y`;
    if (months > 0) return `${months}m`;
    return 'Less than 1m';
  }
}

// 기간 포맷 함수 (YYYY.MM.DD ~ YYYY.MM.DD 또는 Present)
export function formatPeriod(startDate: string, endDate?: string, locale: 'ko' | 'en' = 'ko'): string {
  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}.${month}.${day}`;
  };

  const startFormatted = formatDate(startDate);
  const endFormatted = endDate ? formatDate(endDate) : (locale === 'ko' ? '현재' : 'Present');

  return `${startFormatted} ~ ${endFormatted}`;
}

// 총 경력 계산 함수
export function calculateTotalExperience(experiences: Experience[], locale: 'ko' | 'en' = 'ko'): string {
  let totalMonths = 0;

  experiences.forEach((exp) => {
    const start = new Date(exp.startDate);
    const end = exp.endDate ? new Date(exp.endDate) : new Date();

    let months = (end.getFullYear() - start.getFullYear()) * 12;
    months += end.getMonth() - start.getMonth();

    if (end.getDate() < start.getDate()) {
      months--;
    }

    totalMonths += Math.max(0, months);
  });

  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  if (locale === 'ko') {
    if (years > 0 && months > 0) return `${years}년 ${months}개월`;
    if (years > 0) return `${years}년`;
    if (months > 0) return `${months}개월`;
    return '1개월 미만';
  } else {
    if (years > 0 && months > 0) return `${years}y ${months}m`;
    if (years > 0) return `${years}y`;
    if (months > 0) return `${months}m`;
    return 'Less than 1m';
  }
}

export const experiences: Experience[] = [
  {
    id: 'doublt',
    company: {
      ko: '(주) 더블티',
      en: 'DoublT Inc.',
    },
    position: {
      ko: '풀스택 개발자',
      en: 'Full-Stack Developer',
    },
    startDate: '2025-05-27',
    isCurrent: true,
    description: {
      ko: [
        '사내 통합 업무시스템 FE&BE 버그픽스 및 근태·인사 화면 구현',
        '더블티 홈페이지 SSR 도입, i18n 다국어 적용, 관리자 CMS 설계',
        '솔브릿지 요양원 시니어 관리 시스템 관리자 전체 화면 및 분석 통계 화면 구현',
      ],
      en: [
        'FE&BE bugfix and attendance/HR screen implementation for internal work system',
        'DoublT homepage SSR implementation, i18n multilingual support, admin CMS design',
        'SoulBridge senior care management system admin screens and analytics dashboard',
      ],
    },
  },
  {
    id: 'tmax',
    company: {
      ko: 'Tmax A&C',
      en: 'Tmax A&C',
    },
    position: {
      ko: '프론트엔드 개발자',
      en: 'Frontend Developer',
    },
    startDate: '2023-07-17',
    endDate: '2024-10-04',
    isCurrent: false,
    description: {
      ko: [
        '한국농어촌공사 민원관리 시스템 칸반/통계 대시보드 FE 개발',
        'Drag&Drop 보드 성능/접근성 고려한 구현',
        '담당자 설정·엑셀 다운로드 기능 구현',
      ],
      en: [
        'Korea Rural Community Corporation complaint management system Kanban/statistics dashboard FE',
        'Drag&Drop board implementation with performance/accessibility considerations',
        'Manager assignment and Excel download feature implementation',
      ],
    },
  },
  {
    id: 'dhwide',
    company: {
      ko: '(주) 디에이치와이드',
      en: 'DH Wide Inc.',
    },
    position: {
      ko: '프론트엔드 개발자',
      en: 'Frontend Developer',
    },
    startDate: '2021-10-05',
    endDate: '2022-07-19',
    isCurrent: false,
    description: {
      ko: [
        '방송통신고등학교 심리검사 3종 전체 FE 구현 및 Chart.js 시각화',
        '15분 전화상담 예약 프로그램 프로젝트 기획 및 리딩, FE 개발',
        '반응형 UI 구현으로 사용자 만족도 98% 이상 달성',
      ],
      en: [
        'Broadcasting High School 3 psychological tests full FE implementation with Chart.js visualization',
        '15-minute phone consultation reservation program project planning, leading, and FE development',
        'Achieved 98%+ user satisfaction through responsive UI implementation',
      ],
    },
  },
];
