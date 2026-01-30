import { Project } from '@/types';

export const projects: Project[] = [
  // Company Projects
  {
    id: 'soulbridge',
    slug: 'soulbridge',
    title: {
      ko: '솔브릿지 - 시니어 기관 관리 시스템',
      en: 'SoulBridge - Senior Care Management System',
    },
    description: {
      ko: '요양·돌봄 조직을 위한 관리자 웹 플랫폼으로, 보호사·보호자·기관 관리와 업무 흐름을 한 곳에서 운영할 수 있도록 기획된 프로젝트입니다.',
      en: 'An admin web platform for care organizations, designed to manage caregivers, guardians, and institutional operations in one place.',
    },
    period: '2025.09 ~ 2025.12',
    role: {
      ko: '풀스택 개발 (프론트엔드 + 백엔드)',
      en: 'Full-Stack Development (Frontend + Backend)',
    },
    team: '5',
    category: 'company',
    company: 'DoublT',
    techStack: ['React 19', 'TypeScript', 'Tailwind CSS', 'Nest.js', 'Fastify', 'Prisma', 'PostgreSQL', 'BullMQ', 'FCM', 'React Query', 'MobX', 'Storybook'],
    features: {
      ko: [
        '관리자 전체 화면 Frontend 구현',
        '관리자 전역 레이아웃/권한 가드',
        '분석 통계 화면(일/주/월 지표) 설계·구현',
        'Nest.js 기반 BE CRUD api 구축',
        'BullMQ 기반 백그라운드 작업 처리',
        'FCM 푸시 알림 시스템 구현',
      ],
      en: [
        'Full admin screen Frontend implementation',
        'Admin global layout/permission guard',
        'Analytics dashboard (daily/weekly/monthly metrics) design and implementation',
        'Nest.js based BE CRUD API development',
        'BullMQ based background job processing',
        'FCM push notification system implementation',
      ],
    },
    responsibilities: [
      {
        category: { ko: '전체', en: 'Overall' },
        items: {
          ko: [
            '전체 프로젝트 풀스택 참여',
            'React 19 + TypeScript 기반 웹 프론트엔드 전체 구현',
            'NestJS + Fastify 백엔드 API 서버 구축',
            'Prisma 스키마 설계',
          ],
          en: [
            'Full-stack participation in entire project',
            'Full web frontend implementation with React 19 + TypeScript',
            'NestJS + Fastify backend API server development',
            'Prisma schema design',
          ],
        },
      },
      {
        category: { ko: '인증 시스템', en: 'Authentication System' },
        items: {
          ko: [
            'Better Auth 기반 OAuth 로그인 (Google, Kakao)',
            'JWT 토큰 인증 (모바일/API용) + 쿠키 세션 인증 (웹용)',
            '토큰 자동 갱신 (axios interceptor, _retry 플래그로 무한 루프 방지)',
            '역할 기반 접근 제어 (INSTITUTION_ADMIN, CAREGIVER, GUARDIAN, ADMIN)',
          ],
          en: [
            'Better Auth based OAuth login (Google, Kakao)',
            'JWT token authentication (mobile/API) + cookie session authentication (web)',
            'Automatic token refresh (axios interceptor, _retry flag to prevent infinite loop)',
            'Role-based access control (INSTITUTION_ADMIN, CAREGIVER, GUARDIAN, ADMIN)',
          ],
        },
      },
      {
        category: { ko: '시니어 케어로그 시스템', en: 'Senior Care Log System' },
        items: {
          ko: [
            '음성 녹음 → AI 분석 → 케어로그(돌봄 일지) 생성 파이프라인',
            'BullMQ 기반 비동기 오디오 분석 큐 처리',
            'OpenAI Whisper STT + GPT 요약 연동',
            '일지 CRUD + 필터링/검색 API',
          ],
          en: [
            'Voice recording → AI analysis → Care log creation pipeline',
            'BullMQ based async audio analysis queue processing',
            'OpenAI Whisper STT + GPT summary integration',
            'Care log CRUD + filtering/search API',
          ],
        },
      },
      {
        category: { ko: '보호사 출퇴근 관리 시스템', en: 'Caregiver Attendance Management' },
        items: {
          ko: [
            '출퇴근 체크인/체크아웃 UI 및 API',
            '근무 수정 요청/승인 워크플로우 전체 구현',
            '부서별 출퇴근 통계',
          ],
          en: [
            'Check-in/out UI and API',
            'Work modification request/approval workflow full implementation',
            'Department-wise attendance statistics',
          ],
        },
      },
      {
        category: { ko: '파일 업로드', en: 'File Upload' },
        items: {
          ko: [
            'AWS S3 Presigned URL 방식 구현 (서버 부담 최소화)',
            '오디오 파일/프로필 이미지 업로드 지원',
            'S3 URL 유효성 검증 (NestJS Pipe)',
          ],
          en: [
            'AWS S3 Presigned URL implementation (minimizing server load)',
            'Audio file/profile image upload support',
            'S3 URL validation (NestJS Pipe)',
          ],
        },
      },
      {
        category: { ko: '알림 시스템', en: 'Notification System' },
        items: {
          ko: [
            'FCM 푸시 알림 발송 (BullMQ 비동기 처리)',
            'data-only 메시지로 백그라운드 알림 처리',
            '알림 히스토리 관리 API',
          ],
          en: [
            'FCM push notification (BullMQ async processing)',
            'Background notification handling with data-only messages',
            'Notification history management API',
          ],
        },
      },
      {
        category: { ko: '초대 시스템', en: 'Invitation System' },
        items: {
          ko: [
            '자체 딥링크 구현 (Branch.io 대체)',
            '암호화된 초대 토큰 생성/검증',
            '보호자 초대 플로우 구현',
          ],
          en: [
            'Custom deep link implementation (Branch.io alternative)',
            'Encrypted invitation token generation/verification',
            'Guardian invitation flow implementation',
          ],
        },
      },
    ],
    detailedDescription: {
      ko: '솔브릿지는 요양·돌봄 조직을 위한 B2B SaaS 솔루션입니다. 보호사 배정, 보호자 관리, 기관별 대시보드, 업무 통계 등 다양한 기능을 제공합니다. React 19의 최신 기능과 Nest.js의 안정적인 백엔드 아키텍처를 결합하여 엔터프라이즈급 서비스를 구현했습니다.',
      en: 'SoulBridge is a B2B SaaS solution for care organizations. It provides various features including caregiver assignment, guardian management, institution dashboards, and work statistics. Combined React 19 latest features with Nest.js stable backend architecture for enterprise-level service.',
    },
    techImplementation: [
      {
        category: { ko: 'Core - Frontend', en: 'Core - Frontend' },
        details: {
          ko: [
            'React 19.1.1 - 최신 기능(Suspense, Concurrent) 활용, 빠른 렌더링',
            'TypeScript 5.8.3 - 타입 안정성으로 런타임 에러 방지',
            'Vite 7.1.2 - 빠른 HMR + 빌드, SWC 컴파일러',
          ],
          en: [
            'React 19.1.1 - Utilize latest features (Suspense, Concurrent), fast rendering',
            'TypeScript 5.8.3 - Type safety prevents runtime errors',
            'Vite 7.1.2 - Fast HMR + build, SWC compiler',
          ],
        },
      },
      {
        category: { ko: 'Core - Backend', en: 'Core - Backend' },
        details: {
          ko: [
            'NestJS 10.4.4 - DI 기반 모듈 구조, 강력한 미들웨어/가드',
            'Fastify 4.28 - Express 대비 2-3배 빠른 처리 속도',
            'Prisma 6.16.3 - 타입 안전 ORM, 스키마 기반 마이그레이션 (32개 모델 + 26개 Enum)',
          ],
          en: [
            'NestJS 10.4.4 - DI-based module structure, powerful middleware/guards',
            'Fastify 4.28 - 2-3x faster processing than Express',
            'Prisma 6.16.3 - Type-safe ORM, schema-based migration (32 models + 26 Enums)',
          ],
        },
      },
      {
        category: { ko: '상태 관리 & 데이터', en: 'State Management & Data' },
        details: {
          ko: [
            'React Query (TanStack) - 서버 상태 관리 (캐싱, 백그라운드 동기화)',
            'MobX - 클라이언트 상태 (모달, UI 상태)',
            'PostgreSQL (Supabase) - 클라우드 데이터베이스',
            'Redis - 캐싱, BullMQ 큐 저장소',
          ],
          en: [
            'React Query (TanStack) - Server state management (caching, background sync)',
            'MobX - Client state (modal, UI state)',
            'PostgreSQL (Supabase) - Cloud database',
            'Redis - Caching, BullMQ queue storage',
          ],
        },
      },
      {
        category: { ko: '실시간 & 백그라운드 처리', en: 'Real-time & Background Processing' },
        details: {
          ko: [
            'FCM - 푸시 알림 (케어로그 생성, 긴급 호출)',
            'BullMQ - 백그라운드 작업 (이메일, SMS, FCM, AI 리포트) 4개 큐 운영',
            'Dual-Mode Bootstrap - 동일 코드베이스로 API 서버/백그라운드 워커 모드 분리',
          ],
          en: [
            'FCM - Push notifications (carelog creation, emergency calls)',
            'BullMQ - Background jobs (email, SMS, FCM, AI report) 4 queues',
            'Dual-Mode Bootstrap - API server/background worker mode separation in same codebase',
          ],
        },
      },
      {
        category: { ko: '외부 서비스 연동', en: 'External Service Integration' },
        details: {
          ko: [
            'AWS S3 - 파일 저장 (Presigned URL 패턴)',
            'AWS Transcribe - 음성-텍스트 변환',
            'OpenAI API - AI 케어 리포트 생성',
            'Firebase FCM - 푸시 알림',
            'Aligo - SMS 인증',
          ],
          en: [
            'AWS S3 - File storage (Presigned URL pattern)',
            'AWS Transcribe - Speech-to-text conversion',
            'OpenAI API - AI care report generation',
            'Firebase FCM - Push notifications',
            'Aligo - SMS verification',
          ],
        },
      },
      {
        category: { ko: 'DevOps & 모니터링', en: 'DevOps & Monitoring' },
        details: {
          ko: [
            'Docker - 컨테이너화 (멀티스테이지 빌드)',
            'PM2 - 프로세스 관리 (클러스터 모드)',
            'Sentry - 에러 트래킹',
            'Prometheus + Grafana - 메트릭 모니터링',
          ],
          en: [
            'Docker - Containerization (multi-stage build)',
            'PM2 - Process management (cluster mode)',
            'Sentry - Error tracking',
            'Prometheus + Grafana - Metrics monitoring',
          ],
        },
      },
      {
        category: { ko: 'API 계층 설계 (Frontend)', en: 'API Layer Design (Frontend)' },
        details: {
          ko: [
            'Axios 인터셉터 - 응답 데이터 자동 언래핑, 토큰 자동 갱신',
            '쿼리 키 중앙 관리 - QueryKeys.ts(343줄)에서 14개 도메인 쿼리 키 관리',
            '타입 안전한 API 호출 - 모든 API 함수에 제네릭 타입 적용',
          ],
          en: [
            'Axios interceptor - Auto unwrap response data, auto token refresh',
            'Centralized query keys - 14 domain query keys managed in QueryKeys.ts (343 lines)',
            'Type-safe API calls - Generic types applied to all API functions',
          ],
        },
      },
      {
        category: { ko: 'Guard 패턴 (Backend)', en: 'Guard Pattern (Backend)' },
        details: {
          ko: [
            'AuthGuard + RolesGuard 조합으로 전역 인증 + 역할 기반 접근 제어',
            '커스텀 @Roles() 데코레이터로 컨트롤러별 권한 설정',
            '프론트엔드 RouteGuard와 이중 검증 체계 구축',
          ],
          en: [
            'Global auth + role-based access control with AuthGuard + RolesGuard combination',
            'Per-controller permission settings with custom @Roles() decorator',
            'Dual verification system with frontend RouteGuard',
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: { ko: '[FE] S3 CORS 에러 (Presigned URL 업로드 실패)', en: '[FE] S3 CORS Error (Presigned URL Upload Failure)' },
        problem: {
          ko: '프론트엔드에서 Presigned URL로 S3 직접 업로드 시 "net::ERR_FAILED", "TypeError: Failed to fetch" 에러 발생. 공지사항 첨부파일, 교육자료 썸네일, 케어로그 사진/오디오 등 모든 파일 업로드에 영향.',
          en: 'When uploading directly to S3 via Presigned URL from frontend, "net::ERR_FAILED", "TypeError: Failed to fetch" errors occurred. Affected all file uploads including notice attachments, education material thumbnails, carelog photos/audio.',
        },
        solution: {
          ko: 'S3 버킷 CORS 설정에 AllowedOrigins, AllowedMethods(GET, PUT, POST, DELETE, HEAD), ExposeHeaders(ETag, Content-Length, Content-Type) 추가. 프론트엔드에서 Content-Type 헤더를 정확한 MIME 타입으로 전달하도록 수정.',
          en: 'Added AllowedOrigins, AllowedMethods (GET, PUT, POST, DELETE, HEAD), ExposeHeaders (ETag, Content-Length, Content-Type) to S3 bucket CORS settings. Modified frontend to pass Content-Type header with accurate MIME type.',
        },
        result: {
          ko: 'Presigned URL의 핵심 가치(서버 부하 감소) 유지하며 파일 업로드 성공률 100% 달성. 대용량 파일도 서버 트래픽 없이 처리 가능.',
          en: 'Achieved 100% file upload success rate while maintaining Presigned URL core value (server load reduction). Large files can be processed without server traffic.',
        },
      },
      {
        title: { ko: '[FE] JWT 토큰 자동 갱신 (401 핸들링)', en: '[FE] JWT Token Auto Refresh (401 Handling)' },
        problem: {
          ko: 'Access Token 만료 후 API 호출 시 401 에러 발생, 사용자가 강제 로그아웃됨. 모든 인증 필요 API 호출에 영향.',
          en: 'When calling API after Access Token expiration, 401 error occurred and user was forced to logout. Affected all authenticated API calls.',
        },
        solution: {
          ko: 'Axios 인터셉터에서 401 에러 시 refreshToken으로 1회 재시도. _retry 플래그로 무한 루프 방지. OAuth 콜백/로그인 페이지에서는 자동 리다이렉트 방지 처리.',
          en: 'On 401 error in Axios interceptor, retry once with refreshToken. Prevent infinite loop with _retry flag. Prevent auto-redirect on OAuth callback/login pages.',
        },
        result: {
          ko: '토큰 만료 시에도 사용자 경험 끊김 없음. 필요할 때만 갱신하여 불필요한 API 호출 방지.',
          en: 'Seamless UX even on token expiration. Refresh only when needed to prevent unnecessary API calls.',
        },
      },
      {
        title: { ko: '[BE] 파일 업로드 아키텍처 마이그레이션', en: '[BE] File Upload Architecture Migration' },
        problem: {
          ko: '기존 서버 경유 방식(클라이언트 → 백엔드 → S3)에서 대용량 파일 업로드 시 서버 타임아웃, 메모리 부족 발생. 서버 메모리에 파일 전체 로드, 업로드 중 서버 리소스 점유.',
          en: 'Server timeout and memory shortage when uploading large files with existing server-relay method (Client → Backend → S3). Full file loaded in server memory, server resources occupied during upload.',
        },
        solution: {
          ko: 'Presigned URL 방식으로 전환. 클라이언트가 백엔드에서 Presigned URL 발급받아 S3에 직접 업로드. 다운로드도 동일 패턴 적용.',
          en: 'Migrated to Presigned URL method. Client gets Presigned URL from backend and uploads directly to S3. Same pattern applied for downloads.',
        },
        result: {
          ko: '파일이 서버를 거치지 않아 메모리/CPU 부담 제로. 클라이언트-S3 직접 통신으로 네트워크 홉 감소. 동시 업로드 증가해도 서버 영향 없음.',
          en: 'Zero memory/CPU burden as files don\'t pass through server. Reduced network hops with direct client-S3 communication. No server impact even with increased concurrent uploads.',
        },
      },
      {
        title: { ko: '[BE] 오디오 분석 범위 오류', en: '[BE] Audio Analysis Scope Error' },
        problem: {
          ko: '케어로그 수정 시 새로 추가된 오디오만 분석하고, 기존 오디오는 분석에서 제외됨. 전체 오디오를 종합 분석한 결과가 필요했으나 newAudios만 검사하여 기존 유지 오디오(audiosToKeep)가 제외됨.',
          en: 'When editing carelog, only newly added audio was analyzed, existing audio was excluded from analysis. Needed comprehensive analysis of all audio but only checked newAudios, excluding existing audio (audiosToKeep).',
        },
        solution: {
          ko: '조건을 newAudios.length > 0에서 finalAudioUrls.length > 0으로 변경. finalAudioUrls = 기존 유지 오디오 + 새로 추가된 오디오.',
          en: 'Changed condition from newAudios.length > 0 to finalAudioUrls.length > 0. finalAudioUrls = existing audio + newly added audio.',
        },
        result: {
          ko: '케어로그의 모든 오디오(기존+신규)를 종합 분석. 생성/수정 모두 동일한 분석 범위 적용으로 일관성 확보.',
          en: 'Comprehensive analysis of all carelog audio (existing + new). Consistency achieved with same analysis scope for both creation and editing.',
        },
      },
      {
        title: { ko: '[BE] S3 URL 검증 누락', en: '[BE] S3 URL Validation Missing' },
        problem: {
          ko: 'createCarelogWithUrls는 S3 URL 검증이 있으나 updateCarelogWithUrls는 검증이 없어 임의 URL 저장 가능한 보안 취약점 존재.',
          en: 'createCarelogWithUrls had S3 URL validation but updateCarelogWithUrls had no validation, creating security vulnerability allowing arbitrary URL storage.',
        },
        solution: {
          ko: 'updateCarelogWithUrls에 동일한 S3 URL 검증 로직 추가. 정규식 패턴으로 S3 URL 형식 검증 후 유효하지 않은 URL은 BadRequestException 발생.',
          en: 'Added same S3 URL validation logic to updateCarelogWithUrls. Validate S3 URL format with regex pattern and throw BadRequestException for invalid URLs.',
        },
        result: {
          ko: '유효하지 않은 S3 URL 저장 방지. create/update 동일한 검증 규칙 적용으로 보안 취약점 즉시 해결.',
          en: 'Prevented invalid S3 URL storage. Immediate security fix with same validation rules for create/update.',
        },
      },
      {
        title: { ko: '[BE] BullMQ 작업 실패 시 재시도 전략', en: '[BE] BullMQ Job Failure Retry Strategy' },
        problem: {
          ko: '이메일/SMS/FCM/AI 리포트 백그라운드 작업에서 외부 서비스 일시적 장애 시 작업 영구 실패. 4개 BullMQ 큐 전체에 영향.',
          en: 'Background jobs for email/SMS/FCM/AI report permanently failed on temporary external service failures. Affected all 4 BullMQ queues.',
        },
        solution: {
          ko: '지수 백오프(Exponential Backoff) + Dead Letter Queue 적용. 이메일 큐: 최대 5회, 초기 2초 간격. AI 리포트 큐: 최대 3회, 초기 10초 간격(OpenAI Rate Limit 고려). 최종 실패 시 Sentry 기록 및 관리자 알림.',
          en: 'Applied Exponential Backoff + Dead Letter Queue. Email queue: max 5 attempts, initial 2s interval. AI report queue: max 3 attempts, initial 10s interval (considering OpenAI Rate Limit). On final failure, log to Sentry and notify admin.',
        },
        result: {
          ko: '일시적 장애 시 자동 복구. 지수 백오프로 외부 서비스 Rate Limit 방지. 실패 작업 보관으로 디버깅 용이.',
          en: 'Auto-recovery on temporary failures. Exponential backoff prevents external service Rate Limit. Easy debugging with failed job retention.',
        },
      },
      {
        title: { ko: '[BE] Branch.io 유료화로 인한 딥링크 직접 구현', en: '[BE] Deep Link Self-Implementation Due to Branch.io Pricing' },
        problem: {
          ko: '초대 링크 생성 시 딥링크 필요했으나 Branch.io 무료 플랜 제한으로 서비스 사용 불가. 보호자/요양보호사 초대 시스템 전체에 영향.',
          en: 'Needed deep links for invitation link generation but Branch.io free plan limitations made service unusable. Affected entire guardian/caregiver invitation system.',
        },
        solution: {
          ko: '자체 딥링크 구현. crypto.randomBytes 기반 32자리 토큰 생성. InviteHistory 테이블에 저장 후 이메일/SMS로 발송. 앱 설치 여부에 따라 앱/웹 분기 처리.',
          en: 'Self-implemented deep links. Generate 32-character token with crypto.randomBytes. Save to InviteHistory table then send via email/SMS. Branch to app/web based on app installation status.',
        },
        result: {
          ko: '외부 서비스 비용 제로. 토큰 만료, 사용 횟수 등 완전한 제어 가능. 복잡한 SDK 연동 없이 URL 파라미터로 처리.',
          en: 'Zero external service costs. Full control over token expiration, usage count, etc. URL parameter processing without complex SDK integration.',
        },
      },
    ],
    folderStructure: [
      {
        name: 'Frontend/',
        children: [
          {
            name: 'src/',
            children: [
              {
                name: 'apis/',
                children: [
                  { name: 'auth/' },
                  { name: 'file/' },
                  { name: 'stats/' },
                  { name: 'caregiverManage/' },
                  { name: 'seniorManage/' },
                  { name: 'client.ts' },
                  { name: 'QueryKeys.ts' },
                ],
              },
              {
                name: 'components/',
                children: [
                  { name: 'Form/' },
                  { name: 'Table/' },
                  { name: 'Modal/' },
                  { name: 'layouts/' },
                ],
              },
              { name: 'hooks/' },
              { name: 'pages/' },
              { name: 'stores/' },
              { name: 'utils/' },
              { name: 'router/' },
            ],
          },
        ],
      },
      {
        name: 'Backend/',
        children: [
          {
            name: 'src/',
            children: [
              {
                name: 'api/',
                children: [
                  { name: 'carelog/' },
                  { name: 'attendance/' },
                  { name: 'emergency-call/' },
                  { name: 'notification/' },
                ],
              },
              {
                name: 'auth/',
                children: [
                  { name: 'guards/' },
                  { name: 'dto/' },
                  { name: 'better-auth.service' },
                ],
              },
              {
                name: 'worker/',
                children: [{ name: 'queues/' }],
              },
              { name: 'config/' },
              { name: 'decorators/' },
              { name: 'interceptors/' },
              { name: 'services/' },
            ],
          },
          {
            name: 'prisma/',
            children: [
              { name: 'schema.prisma' },
              { name: 'migrations/' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'doublt-homepage',
    slug: 'doublt-homepage',
    title: {
      ko: '더블티 홈페이지',
      en: 'DoublT Homepage',
    },
    description: {
      ko: '기업의 B2B 솔루션 및 브랜드 홍보를 위한 공식 홈페이지를 기획부터 개발, 배포까지 총괄하여 진행한 프로젝트입니다.',
      en: 'A corporate website project for B2B solution and brand promotion, managed from planning to development and deployment.',
    },
    period: '2025.07 ~ Present',
    role: {
      ko: '풀스택 개발 (프론트엔드 + 백엔드)',
      en: 'Full-Stack Development (Frontend + Backend)',
    },
    team: '4',
    category: 'company',
    company: 'DoublT',
    techStack: ['Next.js 14', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Supabase', 'AWS S3', 'NextAuth.js', 'React Query', 'React Hook Form', 'Storybook'],
    features: {
      ko: [
        'Next.js 기반 SSR 도입으로 SEO 최적화',
        'i18next 다국어 지원 (한국어/영어)',
        '관리자 CMS(권한/메뉴/번역키) 설계',
        'ERD 설계 및 백엔드 전체 구현',
        '반응형 적용',
        '채용 시스템 (지원서 관리)',
      ],
      en: [
        'SEO optimization through Next.js SSR implementation',
        'i18next multilingual support (Korean/English)',
        'Admin CMS (permission/menu/translation key) design',
        'ERD design and full backend implementation',
        'Responsive design',
        'Recruitment system (application management)',
      ],
    },
    responsibilities: [
      {
        category: { ko: '전체', en: 'Overall' },
        items: {
          ko: [
            '전체 더블티 홈페이지 구현',
            'Prisma 스키마 설계',
            '더블티 홈페이지 화면 커스텀 관리자 페이지 DB설계 및 로직 구현',
          ],
          en: [
            'Full DoublT homepage implementation',
            'Prisma schema design',
            'Custom admin page DB design and logic for DoublT homepage',
          ],
        },
      },
      {
        category: { ko: '채용 시스템', en: 'Recruitment System' },
        items: {
          ko: [
            'Prisma 기반 채용 DB 스키마 설계 (지원자, 지원서, 채용공고, 프로세스)',
            '지원서 제출 API (트랜잭션 처리, 90일 중복 방지, 이메일 발송)',
            'React Hook Form + Atomic Design 지원서 폼 UI 구현',
            '관리자 채용 공고/지원자 관리 기능 (CRUD + 필터링)',
          ],
          en: [
            'Prisma-based recruitment DB schema (applicants, applications, job postings, processes)',
            'Application submission API (transaction, 90-day duplicate prevention, email)',
            'Application form UI with React Hook Form + Atomic Design',
            'Admin job posting/applicant management (CRUD + filtering)',
          ],
        },
      },
      {
        category: { ko: '인증 시스템', en: 'Authentication System' },
        items: {
          ko: [
            'NextAuth.js 기반 JWT 세션 인증',
            '이메일 인증 (인증 코드 발송/검증/만료 처리)',
            '역할 기반 접근 제어 (ADMIN/USER)',
          ],
          en: [
            'NextAuth.js based JWT session authentication',
            'Email verification (code sending/validation/expiration)',
            'Role-based access control (ADMIN/USER)',
          ],
        },
      },
      {
        category: { ko: '파일 업로드', en: 'File Upload' },
        items: {
          ko: [
            'AWS S3 Presigned URL 방식 구현',
            '서버 부담 최소화 (클라이언트 직접 업로드)',
            '이력서/포트폴리오/증명사진 업로드 지원',
          ],
          en: [
            'AWS S3 Presigned URL implementation',
            'Minimized server load (direct client upload)',
            'Resume/portfolio/photo upload support',
          ],
        },
      },
      {
        category: { ko: '다국어 시스템', en: 'Multilingual System' },
        items: {
          ko: [
            'DB 기반 i18n 번역 관리 (런타임 로드)',
            '관리자 번역 수정 기능',
            'ko/en 다국어 라우팅',
          ],
          en: [
            'DB-based i18n translation management (runtime load)',
            'Admin translation editing functionality',
            'ko/en multilingual routing',
          ],
        },
      },
    ],
    link: 'https://www.doublt.com/ko/main',
    detailedDescription: {
      ko: '더블티 공식 홈페이지는 기업의 B2B 솔루션과 브랜드 아이덴티티를 효과적으로 전달하기 위해 기획된 프로젝트입니다. Next.js 14의 App Router를 활용한 SSR로 SEO를 최적화하고, 관리자가 콘텐츠와 번역을 직접 관리할 수 있는 CMS를 구축했습니다.',
      en: 'DoublT official homepage is a project designed to effectively communicate the company\'s B2B solutions and brand identity. Optimized SEO with SSR using Next.js 14 App Router and built a CMS for admins to directly manage content and translations.',
    },
    techImplementation: [
      {
        category: { ko: '인증 및 권한 시스템', en: 'Authentication & Permission System' },
        details: {
          ko: [
            'NextAuth.js 기반 인증 시스템 구현',
            'Prisma Adapter를 통한 세션 + 계정 연동',
            'Module Augmentation으로 NextAuth 타입 확장 (role, permissionLevel)',
            'Permission Level 기반 관리자 권한 분리',
          ],
          en: [
            'NextAuth.js based authentication system',
            'Session + account integration via Prisma Adapter',
            'NextAuth type extension via Module Augmentation (role, permissionLevel)',
            'Permission Level based admin authority separation',
          ],
        },
      },
      {
        category: { ko: 'API 에러 핸들링', en: 'API Error Handling' },
        details: {
          ko: [
            '표준화된 에러 응답 포맷 (code, message, details) 설계',
            'Discriminated Union 패턴으로 에러 타입별 안전한 처리',
            '클라이언트에서 에러 코드 기반 메시지 자동 매핑',
          ],
          en: [
            'Standardized error response format (code, message, details) design',
            'Safe handling by error type using Discriminated Union pattern',
            'Automatic client-side message mapping based on error codes',
          ],
        },
      },
      {
        category: { ko: '다국어 관리 시스템', en: 'Multilingual Management System' },
        details: {
          ko: [
            'DB 기반 번역 키 관리로 배포 없이 번역 수정 가능',
            '관리자 CMS에서 실시간 번역 편집 기능',
            '언어별 콘텐츠 분리 및 fallback 처리',
          ],
          en: [
            'DB-based translation key management for editing without deployment',
            'Real-time translation editing in admin CMS',
            'Language-specific content separation and fallback handling',
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: { ko: '[FE] NextAuth.js 세션 타입 확장', en: '[FE] NextAuth.js Session Type Extension' },
        problem: {
          ko: 'NextAuth.js 세션에 커스텀 필드(role, status 등) 추가 필요. session.user.role 접근 시 TypeScript 에러 발생.',
          en: 'Needed to add custom fields (role, status, etc.) to NextAuth.js session. TypeScript error when accessing session.user.role.',
        },
        solution: {
          ko: 'Module Augmentation으로 next-auth 타입 확장. next-auth.d.ts 파일에서 Session, User, JWT 인터페이스 확장. NextAuth 콜백에서 jwt와 session에 커스텀 필드 전달.',
          en: 'Extended next-auth types via Module Augmentation. Extended Session, User, JWT interfaces in next-auth.d.ts. Passed custom fields in NextAuth callbacks for jwt and session.',
        },
        result: {
          ko: '전역 타입 확장으로 어디서나 타입 추론 가능. 한 파일에서 타입 관리로 유지보수 용이. NextAuth.js 공식 권장 방식 적용.',
          en: 'Type inference everywhere via global type extension. Easy maintenance with single-file type management. Applied NextAuth.js official recommended approach.',
        },
      },
      {
        title: { ko: '[FE] API 에러 중앙 처리', en: '[FE] Centralized API Error Handling' },
        problem: {
          ko: '각 API마다 개별 에러 처리로 중복 코드 발생, 일관성 없는 에러 메시지.',
          en: 'Duplicate code from individual error handling per API, inconsistent error messages.',
        },
        solution: {
          ko: 'API 래퍼 함수 패턴 적용. 내부 API용 apiFetch와 외부 API용 apiFetchPublicDoublUworks 분리. 에러 객체 구조화하여 throw.',
          en: 'Applied API wrapper function pattern. Separated apiFetch for internal API and apiFetchPublicDoublUworks for external API. Structured error objects for throwing.',
        },
        result: {
          ko: '모든 API 호출에 동일한 에러 형식 적용. 내부/외부 API 별도 래퍼로 유연성 확보. 제네릭으로 응답 타입 추론.',
          en: 'Same error format applied to all API calls. Flexibility with separate wrappers for internal/external APIs. Response type inference via generics.',
        },
      },
      {
        title: { ko: '[FE] React Query 캐시 무효화', en: '[FE] React Query Cache Invalidation' },
        problem: {
          ko: '데이터 수정 후 목록에 반영 안 됨. 관리자 페이지 전체 CRUD에 영향.',
          en: 'Modified data not reflected in list. Affected entire admin page CRUD.',
        },
        solution: {
          ko: 'QUERY_KEY 네임스페이스 설계. 상위 키로 하위 쿼리 일괄 무효화. invalidateQueries({ queryKey: QUERY_KEY.RECRUIT.all() }) 패턴.',
          en: 'Designed QUERY_KEY namespace. Bulk invalidate child queries with parent key. invalidateQueries({ queryKey: QUERY_KEY.RECRUIT.all() }) pattern.',
        },
        result: {
          ko: '상위 키로 하위 쿼리 일괄 무효화. 중앙 관리되는 키로 오타 방지. 새 쿼리 추가 시 패턴 따라가면 됨.',
          en: 'Bulk invalidate child queries with parent key. Typo prevention with centrally managed keys. Follow pattern for new queries.',
        },
      },
      {
        title: { ko: '[FE] React Hook Form + 서버 데이터 동기화', en: '[FE] React Hook Form + Server Data Sync' },
        problem: {
          ko: '수정 폼에서 서버 데이터를 기본값으로 설정 시 데이터 로드 전 빈 폼 렌더링.',
          en: 'Empty form rendered before data load when setting server data as default values in edit form.',
        },
        solution: {
          ko: '컴포넌트 분리 패턴 적용. 부모 컴포넌트에서 데이터 fetch 후 자식 폼 컴포넌트에 initialData로 전달. 데이터가 확실히 있을 때만 폼 렌더링.',
          en: 'Applied component separation pattern. Parent component fetches data then passes to child form component as initialData. Render form only when data is confirmed.',
        },
        result: {
          ko: 'initialData가 optional이 아님, 타입 레벨 보장. useEffect 없이 첫 렌더링부터 올바른 값. 폼 컴포넌트 독립적 테스트 가능.',
          en: 'initialData is not optional, type-level guarantee. Correct values from first render without useEffect. Form component independently testable.',
        },
      },
      {
        title: { ko: '[FE] 다중 백엔드 API 호출 시 부분 실패 처리', en: '[FE] Partial Failure Handling in Multiple Backend API Calls' },
        problem: {
          ko: '하나의 기능에서 내부 API + 외부 API 두 곳에 동시 요청 시, 한쪽 API만 실패하면 데이터 불일치 또는 불명확한 에러 표시.',
          en: 'When requesting both internal API + external API for one feature, partial failure causes data inconsistency or unclear error display.',
        },
        solution: {
          ko: 'Promise.allSettled로 병렬 처리 + 부분 성공 처리. 각 API 결과를 개별 확인하고 실패한 외부 호출만 재시도 큐로 분리.',
          en: 'Parallel processing with Promise.allSettled + partial success handling. Check each API result individually and separate failed external calls to retry queue.',
        },
        result: {
          ko: '핵심 기능(내부 저장)은 성공 처리, 부가 기능 실패는 별도 안내. 실패한 외부 호출만 재시도 큐로 후처리.',
          en: 'Core function (internal save) succeeds, side function failure notified separately. Only failed external calls go to retry queue for post-processing.',
        },
      },
      {
        title: { ko: '[BE] AWS 배포 환경 메모리 초과로 서버 크래시', en: '[BE] Server Crash Due to Memory Overflow in AWS Deployment' },
        problem: {
          ko: 'AWS EC2 ts.medium에서 Next.js 빌드 시 메모리 부족으로 서버 크래시 반복.',
          en: 'Repeated server crashes due to memory shortage when building Next.js on AWS EC2 ts.medium.',
        },
        solution: {
          ko: 'GitHub Actions 빌드 + 로컬 배포 스크립트 방식. GitHub Actions에서 빌드 후 artifacts 저장, 로컬에서 deploy.sh로 서버에 rsync 전송 후 pm2 restart.',
          en: 'GitHub Actions build + local deploy script approach. Build on GitHub Actions, save artifacts, deploy.sh locally rsync to server then pm2 restart.',
        },
        result: {
          ko: '회사 인바운드 규칙 준수. EC2 업그레이드 불필요, GitHub Actions 무료 티어 활용. 서버 크래시 위험 제거.',
          en: 'Complied with company inbound rules. No EC2 upgrade needed, utilized GitHub Actions free tier. Eliminated server crash risk.',
        },
      },
      {
        title: { ko: '[BE] Prisma 트랜잭션 처리', en: '[BE] Prisma Transaction Handling' },
        problem: {
          ko: '지원서 생성 시 여러 테이블에 데이터 삽입 중 지원서는 생성되었으나 동의 정보가 누락되는 경우 발생.',
          en: 'When creating application with data insertion to multiple tables, application was created but consent info was sometimes missing.',
        },
        solution: {
          ko: 'Prisma Interactive Transaction 적용. $transaction(async (tx) => { ... })로 지원서 생성 후 동의 정보 생성을 하나의 트랜잭션으로 묶음.',
          en: 'Applied Prisma Interactive Transaction. Wrapped application creation and consent creation in single transaction with $transaction(async (tx) => { ... }).',
        },
        result: {
          ko: '하나라도 실패하면 전체 롤백. 연관 작업을 하나의 블록에서 처리. 첫 번째 쿼리 결과(ID)를 두 번째 쿼리에서 사용.',
          en: 'Full rollback if any fails. Handle related operations in one block. Use first query result (ID) in second query.',
        },
      },
      {
        title: { ko: '[BE] S3 Presigned URL 파일 업로드', en: '[BE] S3 Presigned URL File Upload' },
        problem: {
          ko: '서버를 경유한 업로드로 메모리/대역폭 부담. 대용량 파일 시 서버 부담 및 업로드 시간 2배.',
          en: 'Memory/bandwidth burden from server-relay upload. Server burden and double upload time for large files.',
        },
        solution: {
          ko: 'Presigned URL PUT 방식 적용. 서버에서 Presigned URL 발급 후 클라이언트가 S3에 직접 업로드.',
          en: 'Applied Presigned URL PUT method. Server issues Presigned URL, client uploads directly to S3.',
        },
        result: {
          ko: '파일이 서버 메모리를 거치지 않음. 클라이언트 → S3 직접 업로드로 속도 향상. 동시 업로드 시에도 서버 영향 최소화.',
          en: 'Files don\'t pass through server memory. Speed improvement with direct client → S3 upload. Minimal server impact even with concurrent uploads.',
        },
      },
      {
        title: { ko: '[BE] 다국어(i18n) DB 기반 관리', en: '[BE] DB-based Multilingual (i18n) Management' },
        problem: {
          ko: '관리자가 번역 수정 시 JSON 파일 수정 → 배포 필요 → 느린 반영.',
          en: 'When admin modifies translation, JSON file modification → deployment needed → slow reflection.',
        },
        solution: {
          ko: 'DB 기반 번역 관리. I18n 테이블에 languageId, namespace, key, value 저장. API Route에서 namespace와 lang으로 번역 조회.',
          en: 'DB-based translation management. Store languageId, namespace, key, value in I18n table. Query translations by namespace and lang in API Route.',
        },
        result: {
          ko: '관리자가 UI에서 직접 번역 수정. 재배포 없이 즉시 반영. DB 기록으로 변경 이력 추적.',
          en: 'Admin directly edits translations in UI. Instant reflection without redeployment. Change history tracking via DB records.',
        },
      },
    ],
    folderStructure: [
      {
        name: 'app/',
        children: [
          {
            name: '[locale]/',
            children: [
              {
                name: '(with-gnb)/',
                children: [
                  { name: 'main/' },
                  { name: 'company/' },
                  { name: 'solution/' },
                  { name: 'contact/' },
                  { name: 'recruit/' },
                ],
              },
              { name: 'admin/' },
            ],
          },
          {
            name: 'api/',
            children: [
              { name: 'auth/' },
              {
                name: 'admin/',
                children: [
                  { name: 'recruit/' },
                  { name: 'media/' },
                  { name: 'company/' },
                ],
              },
              { name: 'application/' },
              { name: 'file/' },
              { name: 'contact/' },
            ],
          },
        ],
      },
      {
        name: 'components/',
        children: [
          { name: 'gnb/' },
          { name: 'formComponents/' },
          {
            name: 'applicationForm/',
            children: [
              { name: 'atoms/' },
              { name: 'molecules/' },
              { name: 'organisms/' },
            ],
          },
          { name: 'auth/' },
          { name: 'buttonComponents/' },
        ],
      },
      {
        name: 'lib/',
        children: [
          {
            name: 'react-query/',
            children: [
              { name: 'QUERY_KEYS.ts' },
              { name: 'client.ts' },
              { name: 'providers.tsx' },
            ],
          },
          { name: 'api.ts' },
          { name: 'email.ts' },
          { name: 'uploadS3.ts' },
          { name: 'validates.ts' },
        ],
      },
      {
        name: 'stores/',
        children: [{ name: 'modalStore.ts' }],
      },
      {
        name: 'types/',
        children: [
          { name: 'applicationForm.ts' },
          { name: 'admin.ts' },
          { name: 'next-auth.d.ts' },
        ],
      },
      {
        name: 'server/',
        children: [{ name: 'db.ts' }],
      },
      {
        name: 'generated/',
        children: [{ name: 'prisma/' }],
      },
      {
        name: 'prisma/',
        children: [
          { name: 'schema.prisma' },
          { name: 'migrations/' },
          { name: 'seed.ts' },
        ],
      },
    ],
  },
  {
    id: 'double-u-works',
    slug: 'double-u-works',
    title: {
      ko: '더블유웍스 - 사내올인원 통합 시스템',
      en: 'Double U Works - Internal All-in-One System',
    },
    description: {
      ko: '사내 업무 효율화를 위해 근태 관리, 인사 관리, 전자 결재 등 핵심 기능을 하나의 플랫폼에서 통합 제공하는 올인원 업무 관리 시스템입니다.',
      en: 'An all-in-one work management system that integrates core features like attendance, HR, and electronic approval for internal efficiency.',
    },
    period: '2025.05 ~ 2025.10',
    role: {
      ko: 'FE 80%, BE 20% (단기간 서포트)',
      en: 'FE 80%, BE 20% (Short-term support)',
    },
    team: '8',
    category: 'company',
    company: 'DoublT',
    techStack: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS 4.0', 'React Query', 'Context API', 'React Hook Form', 'Zod', 'Socket.io', 'Recharts'],
    features: {
      ko: [
        '전자결재 시스템 (기안 작성/수정/삭제, 순차/병렬/이중병렬 결재선)',
        '근태관리 시스템 (출퇴근, 휴가, 유연근로)',
        '인사관리 시스템 (직원 정보 CRUD, 조직도)',
        'JWT 기반 인증 + 자동 토큰 갱신',
        '권한 기반 라우트 보호',
      ],
      en: [
        'Electronic approval system (draft creation/edit/delete, sequential/parallel approval lines)',
        'Attendance management (check-in/out, leave, flexible work)',
        'HR management (employee info CRUD, org chart)',
        'JWT authentication + automatic token refresh',
        'Permission-based route protection',
      ],
    },
    responsibilities: [
      {
        category: { ko: '전자결재 시스템', en: 'Electronic Approval System' },
        items: {
          ko: [
            '기안 작성/수정/삭제 및 결재선 관리 UI 구현',
            '순차/병렬/이중병렬 결재 타입별 분기 처리',
            'API 연동 및 복잡한 상태 관리',
          ],
          en: [
            'Draft creation/edit/delete and approval line management UI',
            'Sequential/parallel/dual-parallel approval type branching',
            'API integration and complex state management',
          ],
        },
      },
      {
        category: { ko: '근태관리 시스템', en: 'Attendance Management System' },
        items: {
          ko: [
            '출퇴근 체크인/아웃, 유연근로 등 실시간 상태 표시',
            '휴가/근무 요청 폼 및 승인 플로우 구현',
            'API 모듈 설계 및 유지보수',
          ],
          en: [
            'Check-in/out, flexible work real-time status display',
            'Leave/work request form and approval flow implementation',
            'API module design and maintenance',
          ],
        },
      },
      {
        category: { ko: '공통 아키텍처', en: 'Common Architecture' },
        items: {
          ko: [
            'Axios 인터셉터 기반 API 에러 중앙 처리 구현',
            'JWT 토큰 자동 갱신 로직 (동시 요청 큐 처리)',
            'React Query + Context 기반 상태 관리 아키텍처 설계',
          ],
          en: [
            'Axios interceptor based API error centralization',
            'JWT token auto-refresh logic (concurrent request queue handling)',
            'React Query + Context based state management architecture design',
          ],
        },
      },
    ],
    detailedDescription: {
      ko: 'DoubltWorks는 기업용 통합 업무 시스템으로, 전자결재, 근태관리, 인사관리, CRM, ERP 등의 기능을 하나의 플랫폼에서 제공합니다. React 19와 최신 상태 관리 패턴을 적용하여 대규모 엔터프라이즈 애플리케이션을 구현했습니다.',
      en: 'DoubltWorks is an enterprise integrated work system providing electronic approval, attendance, HR, CRM, and ERP features in one platform. Implemented large-scale enterprise application with React 19 and modern state management patterns.',
    },
    techImplementation: [
      {
        category: { ko: '타입 시스템 설계', en: 'Type System Design' },
        details: {
          ko: [
            '대규모 타입 정의 시스템 설계 및 유지보수',
            'API 응답 타입 ApiResponse<T> 추상화로 타입 재사용성 확보',
            '결재 상태 등 10개 이상의 상태값을 Union 타입으로 제한하여 런타임 에러 방지',
          ],
          en: [
            'Large-scale type definition system design and maintenance',
            'Type reusability through ApiResponse<T> abstraction',
            'Runtime error prevention by constraining 10+ states with Union types',
          ],
        },
      },
      {
        category: { ko: '상태 관리 전략', en: 'State Management Strategy' },
        details: {
          ko: [
            'React Query(서버) + Context(클라이언트) 역할 분리로 성능 최적화',
            'staleTime/gcTime 설정으로 불필요한 API 호출 50% 감소',
            'QUERY_KEYS 중앙화로 캐시 무효화 전략 체계화',
          ],
          en: [
            'Performance optimization through React Query (server) + Context (client) separation',
            '50% reduction in unnecessary API calls through staleTime/gcTime settings',
            'Systematic cache invalidation strategy via QUERY_KEYS centralization',
          ],
        },
      },
      {
        category: { ko: '컴포넌트 설계', en: 'Component Design' },
        details: {
          ko: [
            '공용 컴포넌트 설계 (모달, 폼 입력, 테이블 등)',
            '비즈니스 로직 훅 추출 (useDebounce, usePagination 등)',
            'Provider 패턴으로 전역 상태를 Context로 관리',
            'Atomic Design 패턴으로 복잡한 UI를 작은 단위로 분해',
          ],
          en: [
            'Common component design (modal, form inputs, tables, etc.)',
            'Business logic hook extraction (useDebounce, usePagination, etc.)',
            'Provider pattern for global state management via Context',
            'Atomic Design pattern for decomposing complex UI into small units',
          ],
        },
      },
      {
        category: { ko: 'API 계층 설계', en: 'API Layer Design' },
        details: {
          ko: [
            'Axios 인터셉터 기반 에러 코드별 메시지 자동 표시',
            '401 에러 시 Access Token 자동 갱신 + 실패한 요청 재시도',
            '토큰 갱신 중 추가 요청을 큐에 대기시켜 중복 갱신 방지',
            '도메인별 API 함수 분리로 유지보수성 향상',
          ],
          en: [
            'Axios interceptor based auto error message display by error code',
            'Auto Access Token refresh on 401 error + failed request retry',
            'Queue additional requests during token refresh to prevent duplicate refresh',
            'Domain-based API function separation for improved maintainability',
          ],
        },
      },
      {
        category: { ko: '성능 최적화', en: 'Performance Optimization' },
        details: {
          ko: [
            'Debounce로 검색 입력 최적화, 불필요한 API 호출 방지',
            'requestAnimationFrame으로 반응형 UI 스케일링에 부드러운 전환',
            'React Query 캐싱으로 동일 데이터 재요청 방지',
            '라우트 기반 동적 import로 초기 로딩 최적화',
          ],
          en: [
            'Debounce for search input optimization, preventing unnecessary API calls',
            'requestAnimationFrame for smooth responsive UI scaling transitions',
            'React Query caching to prevent duplicate data requests',
            'Route-based dynamic import for initial loading optimization',
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: { ko: 'Detail 페이지 초기값 세팅', en: 'Detail Page Initial Value Setting' },
        problem: {
          ko: 'Detail/Edit 페이지에서 서버 데이터로 폼 초기값 설정 시, 데이터 fetch 완료 전 폼이 빈 값으로 렌더링됨. 전자결재 수정, 인사정보 수정, 근태 요청 수정 등 모든 Edit 페이지에 영향.',
          en: 'When setting form initial values with server data on Detail/Edit pages, form rendered empty before data fetch. Affected all Edit pages including approval edit, HR info edit, attendance request edit.',
        },
        solution: {
          ko: 'useEffect + reset 패턴 적용. data가 로드되면 reset() 함수 호출하여 폼 값 업데이트.',
          en: 'Applied useEffect + reset pattern. Call reset() function when data loads to update form values.',
        },
        result: {
          ko: '기존 코드베이스 패턴과 일관성 유지. 상태 변화 흐름 명확하게 추적 가능. 기존 컴포넌트 구조 변경 없이 빠른 적용.',
          en: 'Maintained consistency with existing codebase pattern. Clear state change flow tracking. Quick application without changing existing component structure.',
        },
      },
      {
        title: { ko: 'API 에러 중앙 처리', en: 'Centralized API Error Handling' },
        problem: {
          ko: '각 API 호출마다 개별 에러 처리로 중복 코드, 일관성 없는 에러 메시지, 누락된 에러 처리.',
          en: 'Individual error handling per API call causing duplicate code, inconsistent error messages, missing error handling.',
        },
        solution: {
          ko: 'Axios 인터셉터로 중앙 집중식 처리. 에러 코드별 메시지 매핑(ERROR_MESSAGES). skipDefaultErrorHandling 옵션으로 특수 케이스 대응.',
          en: 'Centralized handling via Axios interceptor. Error code to message mapping (ERROR_MESSAGES). Handle special cases with skipDefaultErrorHandling option.',
        },
        result: {
          ko: '모든 API 호출에 자동 적용. 에러 처리 로직 한 곳에서 관리. 에러 코드 추가/수정 용이.',
          en: 'Auto-applied to all API calls. Error handling logic managed in one place. Easy to add/modify error codes.',
        },
      },
      {
        title: { ko: 'JWT 토큰 자동 갱신', en: 'JWT Token Auto-refresh' },
        problem: {
          ko: 'Access Token 만료 시 401 에러 발생, 사용자 강제 로그아웃.',
          en: 'When Access Token expires, 401 error occurred and user was forced to logout.',
        },
        solution: {
          ko: '401 에러 시 자동 갱신 + 중복 방지 로직. isRefreshing 플래그와 failedQueue로 큐 패턴 적용. 첫 번째 요청만 갱신 진행, 나머지는 대기열에서 완료 후 재시도.',
          en: 'Auto-refresh on 401 error + duplicate prevention. Applied queue pattern with isRefreshing flag and failedQueue. Only first request refreshes, rest wait in queue then retry.',
        },
        result: {
          ko: '토큰 만료 시에도 사용자 경험 끊김 없음. 필요할 때만 갱신하여 불필요한 API 호출 방지. 갱신 실패 시 명확한 로그아웃 처리.',
          en: 'Seamless UX even on token expiration. Refresh only when needed to prevent unnecessary API calls. Clear logout handling on refresh failure.',
        },
      },
      {
        title: { ko: '서버 상태 및 클라이언트 전역 상태 분리', en: 'Server State and Client Global State Separation' },
        problem: {
          ko: '모든 상태를 Context로 관리하니 불필요한 리렌더링 발생. 전체 앱 성능 저하.',
          en: 'Managing all state with Context caused unnecessary re-renders. Overall app performance degradation.',
        },
        solution: {
          ko: 'React Query + Context 분리. 서버 상태(사용자 정보, 기안 목록)는 React Query로, 클라이언트 상태(사이드바, UI 스케일)는 Context로 관리. QUERY_KEYS 중앙화.',
          en: 'Separated React Query + Context. Server state (user info, approval list) via React Query, client state (sidebar, UI scale) via Context. Centralized QUERY_KEYS.',
        },
        result: {
          ko: '서버 상태 변경 시 Context 구독자 리렌더링 안 됨. React Query 자동 캐싱 + 백그라운드 재검증. React Query DevTools로 디버깅 용이.',
          en: 'No Context subscriber re-render on server state change. Auto caching + background revalidation via React Query. Easy debugging with React Query DevTools.',
        },
      },
    ],
    folderStructure: [
      {
        name: 'apis/',
        children: [
          { name: 'Axios.ts' },
          { name: 'QUERY_KEYS.ts' },
          { name: '[module]/' },
        ],
      },
      {
        name: 'components/',
        children: [
          { name: 'Layout.tsx' },
          { name: 'Modal/' },
          { name: 'Form/' },
          { name: 'Table/' },
        ],
      },
      {
        name: 'context/',
        children: [
          { name: 'UserContext.tsx' },
          { name: 'UIContext.tsx' },
        ],
      },
      {
        name: 'hooks/',
        children: [
          { name: 'useUser.ts' },
          { name: 'useDebounce.ts' },
          { name: 'usePagination.ts' },
        ],
      },
      {
        name: 'pages/',
        children: [
          { name: 'approval/' },
          { name: 'timekeeping/' },
          { name: 'hr/' },
        ],
      },
      { name: 'types/' },
      { name: 'utils/' },
      { name: 'constants/' },
      { name: 'routes/' },
    ],
  },
  {
    id: 'krc',
    slug: 'krc',
    title: {
      ko: '한국농어촌공사 민원관리 시스템',
      en: 'KRC Complaint Management System',
    },
    description: {
      ko: '한국농어촌공사의 민원을 효율적으로 관리하고 시각적으로 파악할 수 있는 통합 플랫폼을 제공합니다.',
      en: 'Provides an integrated platform for efficiently managing and visualizing complaints for Korea Rural Community Corporation.',
    },
    period: '2023.10 ~ 2024.09',
    role: {
      ko: '프론트엔드 개발',
      en: 'Frontend Development',
    },
    team: '18',
    category: 'company',
    company: 'Tmax A&C',
    techStack: ['React', 'TypeScript', 'React Query', 'MobX', 'React Hook Form', 'React DnD', 'Storybook', 'Vite', 'Husky'],
    features: {
      ko: [
        'VOC 조회 칸반보드 및 테이블 형식 FE 구현',
        'VOC 설정 화면 FE 구현',
        '통계 화면 FE 구현',
        'Drag&Drop 보드 성능/접근성 고려',
        '무한 스크롤 구현',
      ],
      en: [
        'VOC inquiry Kanban board and table format FE implementation',
        'VOC settings screen FE implementation',
        'Statistics screen FE implementation',
        'Drag&Drop board with performance/accessibility considerations',
        'Infinite scroll implementation',
      ],
    },
    responsibilities: [
      {
        category: { ko: 'VOC 조회 시스템', en: 'VOC Inquiry System' },
        items: {
          ko: [
            '칸반보드 뷰 구현: VOC 상태코드별 그룹화 + Intersection Observer 기반 무한 스크롤',
            '테이블 뷰 구현: 다중 필드 정렬 로직 (접수일/마감일 독립 정렬, 3단계 상태 전환)',
            'React Query 무한 쿼리: useInfiniteQuery + getNextPageParam으로 페이지네이션 최적화',
            'MobX 연동: vocProcessingStore와 observer 패턴으로 필터 조건 실시간 동기화',
          ],
          en: [
            'Kanban board view: VOC status grouping + Intersection Observer infinite scroll',
            'Table view: Multi-field sorting logic (receipt/deadline independent sort, 3-state toggle)',
            'React Query infinite query: useInfiniteQuery + getNextPageParam pagination optimization',
            'MobX integration: vocProcessingStore + observer pattern for real-time filter sync',
          ],
        },
      },
      {
        category: { ko: 'VOC 설정 화면', en: 'VOC Settings Screen' },
        items: {
          ko: [
            'VOC 유형 관리: CRUD + 드래그 앤 드롭 순서 변경 (react-dnd)',
            'DnD 최적화: DOM Rect 기반 마우스 위치 판정, 1/4 임계값 이상 드래그 시에만 위치 변경',
            '부서별 배정자 관리: AutoComplete 검색 + 권한 기반 접근 제어',
            'MobX + Context 패턴: 편집 모드 상태 관리, 변경된 항목만 추출하여 API 요청 최적화',
          ],
          en: [
            'VOC type management: CRUD + drag-and-drop ordering (react-dnd)',
            'DnD optimization: DOM Rect mouse position detection, position change only beyond 1/4 threshold',
            'Department assignee management: AutoComplete search + permission-based access control',
            'MobX + Context pattern: Edit mode state management, extract only changed items for API optimization',
          ],
        },
      },
      {
        category: { ko: '통계 화면', en: 'Statistics Screen' },
        items: {
          ko: [
            'VOC 통계 대시보드: 처리 현황, 유형별/부서별/월별 분석 등 14개 통계 지표 UI 구현',
            'recharts 기반 데이터 시각화: 차트 컴포넌트 연동 및 반응형 처리',
            '엑셀 내보내기 기능: XLSX 라이브러리 + React 18 createRoot 동적 렌더링',
            '복합 필터 시스템: FilterDrawer + React Hook Form 연동 (기간/부서/유형/채널 등 다중 조건)',
          ],
          en: [
            'VOC statistics dashboard: 14 statistical indicators UI (processing status, type/dept/monthly analysis)',
            'recharts data visualization: Chart component integration and responsive handling',
            'Excel export: XLSX library + React 18 createRoot dynamic rendering',
            'Complex filter system: FilterDrawer + React Hook Form (period/dept/type/channel multi-conditions)',
          ],
        },
      },
      {
        category: { ko: '공통 컴포넌트', en: 'Common Components' },
        items: {
          ko: [
            'FilterDrawer 컴포넌트: useFilterDrawer 훅으로 필터 상태 추상화',
            'StatisticsTable: Compound Component 패턴, 복합 헤더 지원',
            'useIntersection 훅: Intersection Observer API 래핑, 무한 스크롤 재사용',
            'EditorViewer 공통화: react-quill 기반 에디터/뷰어 분리',
          ],
          en: [
            'FilterDrawer component: Filter state abstraction with useFilterDrawer hook',
            'StatisticsTable: Compound Component pattern, complex header support',
            'useIntersection hook: Intersection Observer API wrapper, reusable infinite scroll',
            'EditorViewer: react-quill based editor/viewer separation',
          ],
        },
      },
    ],
    detailedDescription: {
      ko: '한국농어촌공사의 민원(VOC)을 체계적으로 관리하기 위한 시스템입니다. 칸반보드 형태의 직관적인 UI와 다양한 필터링, 통계 기능을 제공하여 민원 처리 현황을 실시간으로 파악할 수 있습니다.',
      en: 'A system for systematically managing VOC (Voice of Customer) for Korea Rural Community Corporation. Provides intuitive Kanban board UI with various filtering and statistics features for real-time complaint status monitoring.',
    },
    techImplementation: [
      {
        category: { ko: '상태 관리 패턴', en: 'State Management Pattern' },
        details: {
          ko: [
            'React Query + MobX + React Hook Form 3중 패턴 활용',
            'React Query: 서버 데이터 캐싱 및 동기화',
            'MobX: 복잡한 UI 상태 (필터, 정렬, 뷰 모드)',
            'React Hook Form: 폼 상태 관리 및 유효성 검증',
          ],
          en: [
            'Triple pattern using React Query + MobX + React Hook Form',
            'React Query: Server data caching and sync',
            'MobX: Complex UI state (filter, sort, view mode)',
            'React Hook Form: Form state management and validation',
          ],
        },
      },
      {
        category: { ko: 'DnD 구현', en: 'DnD Implementation' },
        details: {
          ko: [
            'react-dnd 기반 칸반보드 드래그앤드롭',
            '드래그 중 성능 최적화 (throttle, requestAnimationFrame)',
            '터치 디바이스 지원을 위한 touch-backend 적용',
          ],
          en: [
            'react-dnd based Kanban board drag and drop',
            'Performance optimization during drag (throttle, requestAnimationFrame)',
            'touch-backend for touch device support',
          ],
        },
      },
      {
        category: { ko: '복잡한 UI 패턴 구현', en: 'Complex UI Pattern Implementation' },
        details: {
          ko: [
            'VOC 상태코드별 그룹화 + 카드 컴포넌트 + 무한 스크롤 통합 칸반보드 뷰',
            'DOM Rect 기반 1/4 임계값 판정으로 정밀한 DnD 위치 계산',
            '접수일/마감일 독립 정렬, 3단계 상태 전환(미정렬→ASC→DESC) 다중 정렬 테이블',
            'FilterDrawer + React Hook Form 연동 복합 필터 시스템',
            'MUI TreeView로 VOC 카테고리 계층 구조 표현',
          ],
          en: [
            'Kanban board view with VOC status grouping + card component + infinite scroll',
            'Precise DnD position calculation with DOM Rect based 1/4 threshold',
            'Multi-sort table with independent receive/deadline date sorting, 3-state toggle (unsorted→ASC→DESC)',
            'Compound filter system with FilterDrawer + React Hook Form integration',
            'VOC category hierarchy with MUI TreeView',
          ],
        },
      },
      {
        category: { ko: '데이터 시각화 & 내보내기', en: 'Data Visualization & Export' },
        details: {
          ko: [
            'Recharts 기반 14개 통계 지표 시각화 (처리 현황, 유형별, 부서별, 월별 분석)',
            'XLSX table_to_book으로 현재 테이블 HTML 직접 엑셀 변환',
            'React 18 createRoot로 JSX 동적 렌더링 후 전체 데이터 XLSX 변환',
            'StatisticsTable Compound Component로 2~3행 복합 헤더 + Tooltip 지원',
          ],
          en: [
            'Recharts based 14 statistics visualization (processing status, by type, by department, monthly analysis)',
            'Direct Excel conversion from table HTML using XLSX table_to_book',
            'Full data XLSX conversion with React 18 createRoot for dynamic JSX rendering',
            'StatisticsTable Compound Component with 2-3 row complex header + Tooltip support',
          ],
        },
      },
      {
        category: { ko: '컴포넌트 설계 & 재사용성', en: 'Component Design & Reusability' },
        details: {
          ko: [
            'StatisticsTable, RoundTable, Modal 등 Compound Component 패턴 설계',
            'useFilterDrawer, useIntersection, useModal 등 커스텀 훅 추상화',
            'react-quill 기반 EditorViewer 분리, 조건부 이미지 업로드 비활성화',
            'TypeScript 타입 정의, 도메인별 Request/Response 타입 체계화',
          ],
          en: [
            'Compound Component pattern design (StatisticsTable, RoundTable, Modal)',
            'Custom hook abstraction (useFilterDrawer, useIntersection, useModal)',
            'EditorViewer separation with react-quill, conditional image upload disable',
            'TypeScript type definition, domain-based Request/Response type systematization',
          ],
        },
      },
      {
        category: { ko: '성능 최적화', en: 'Performance Optimization' },
        details: {
          ko: [
            'Intersection Observer API로 대용량 VOC 리스트 점진적 로딩',
            'enabled 옵션으로 필터 준비 전 불필요한 API 호출 방지',
            'MobX @observable + @action으로 필요한 컴포넌트만 리렌더링',
            'React Query select에서 CustomError throw, Fallback UI 표시',
          ],
          en: [
            'Progressive loading of large VOC lists with Intersection Observer API',
            'Prevent unnecessary API calls before filter ready with enabled option',
            'Re-render only necessary components with MobX @observable + @action',
            'CustomError throw in React Query select, Fallback UI display',
          ],
        },
      },
      {
        category: { ko: '폼 & 유효성 검증', en: 'Form & Validation' },
        details: {
          ko: [
            'React Hook Form으로 통계 필터, VOC 등록/수정 폼 연동',
            'Date 객체 → YYYY-MM-DD HH:mm:ss 서버 형식 자동 변환',
            '부서/배정자별 다른 검색 로직의 AutoComplete, 디바운싱 처리',
            'hasAddManagerAuth 등 권한 플래그로 버튼/기능 조건부 렌더링',
          ],
          en: [
            'React Hook Form integration for statistics filter, VOC create/edit forms',
            'Auto conversion Date object → YYYY-MM-DD HH:mm:ss server format',
            'AutoComplete with different search logic by department/assignee, debouncing',
            'Conditional button/feature rendering with permission flags like hasAddManagerAuth',
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: { ko: '칸반보드 대용량 데이터 렌더링 성능 저하', en: 'Kanban Board Large Data Rendering Performance Degradation' },
        problem: {
          ko: 'VOC 조회 칸반보드에서 수백 건 이상 데이터 로드 시 페이지 멈춤, 스크롤 버벅임, 브라우저 메모리 급증.',
          en: 'Page freeze, scroll stuttering, browser memory spike when loading hundreds of records in VOC kanban board.',
        },
        solution: {
          ko: '무한 스크롤 + useInfiniteQuery 적용. Intersection Observer로 스크롤 감지, 첫 페이지(20건)만 로드 후 점진적 로딩.',
          en: 'Applied infinite scroll + useInfiniteQuery. Detect scroll with Intersection Observer, load first page (20 items) then progressive loading.',
        },
        result: {
          ko: '첫 페이지만 로드로 DOM 노드 수 최소화. 스크롤 시 자동 다음 데이터 로드. React Query 페이지별 캐시 관리.',
          en: 'Minimized DOM nodes by loading only first page. Auto load next data on scroll. Page-wise cache management via React Query.',
        },
      },
      {
        title: { ko: 'React Query 캐시 키 불일치로 데이터 동기화 문제', en: 'Data Sync Issue Due to React Query Cache Key Mismatch' },
        problem: {
          ko: 'VOC 등록/수정 후 목록으로 돌아왔을 때 수정한 내용이 반영되지 않음. 새로고침해야 반영.',
          en: 'After VOC creation/edit, modified content not reflected in list. Had to refresh.',
        },
        solution: {
          ko: 'QUERY_KEYS 팩토리 함수 패턴으로 중앙 관리. VOC_PROCESSING.all()로 하위 쿼리 일괄 무효화.',
          en: 'Centralized management with QUERY_KEYS factory function pattern. Bulk invalidate child queries with VOC_PROCESSING.all().',
        },
        result: {
          ko: '함수 호출로 타입 체크, 자동완성 지원. 상위 키로 하위 모든 쿼리 무효화. 모든 팀원이 동일 패턴 사용.',
          en: 'Type check and autocomplete via function calls. Invalidate all child queries with parent key. Same pattern for all team members.',
        },
      },
      {
        title: { ko: 'DnD 드래그 시 아이템 위치가 부자연스럽게 변경', en: 'DnD Item Position Changes Unnaturally' },
        problem: {
          ko: 'VOC 유형 관리에서 순서 변경 시 마우스가 아이템 위에 살짝만 올라가도 위치가 바뀜.',
          en: 'When changing order in VOC type management, position changed even when mouse slightly hovers over item.',
        },
        solution: {
          ko: '1/4 지점 기준 + 드롭 실패 시 롤백. DOM 영역 1/4 이상 들어와야 이동. didDrop() 실패 시 originalIndex로 복원.',
          en: '1/4 point threshold + rollback on drop failure. Must enter 1/4 of DOM area to move. Restore to originalIndex on didDrop() failure.',
        },
        result: {
          ko: '1/4 지점까지 들어와야 이동으로 의도치 않은 변경 방지. opacity: 0.4로 드래그 중인 아이템 표시. useCallback으로 moveItem 메모이제이션.',
          en: 'Prevented unintended changes by requiring 1/4 entry. Show dragging item with opacity: 0.4. Memoized moveItem with useCallback.',
        },
      },
      {
        title: { ko: '텍스트 에디터 글자수 계산 오류', en: 'Text Editor Character Count Error' },
        problem: {
          ko: 'VOC 답변, 공지사항 작성 시 정확히 2000자 입력 후 수정 시도 시 "글자수 초과" 에러.',
          en: 'When writing VOC answer or notice, "character limit exceeded" error when trying to edit after exactly 2000 characters.',
        },
        solution: {
          ko: '마지막 개행 문자만 체크. 마지막 문자가 개행(\\n)이면 길이에서 -1. Quill 에디터가 항상 마지막에 개행 추가하는 특성 반영.',
          en: 'Check only last newline character. If last char is newline (\\n), subtract 1 from length. Reflects Quill editor behavior of always adding newline at end.',
        },
        result: {
          ko: '중간 개행은 유지, 마지막 개행만 제외. 사용자가 입력한 실제 글자수와 일치.',
          en: 'Keep middle newlines, exclude only last. Matches actual character count entered by user.',
        },
      },
      {
        title: { ko: 'MobX + React Query 상태 동기화 문제', en: 'MobX + React Query State Sync Issue' },
        problem: {
          ko: '필터 변경 후 API 호출 시 필터 UI는 변경되었으나 API 파라미터는 이전 값으로 호출.',
          en: 'After filter change, filter UI changed but API called with previous parameter values.',
        },
        solution: {
          ko: '역할 분리 + observer + JSON 직렬화. MobX: UI 상태, React Query: 서버 데이터. JSON.stringify로 정확한 캐시 키 생성. 새 객체 생성으로 불변성 보장.',
          en: 'Role separation + observer + JSON serialization. MobX: UI state, React Query: server data. JSON.stringify for accurate cache key. Ensure immutability with new object creation.',
        },
        result: {
          ko: 'MobX: 에러 상태, UI 토글 / React Query: 서버 데이터로 역할 분리. observer가 MobX 변경 감지하여 자동 리렌더링. 객체 내용이 다르면 다른 캐시 키.',
          en: 'Role separation: MobX for error state, UI toggle / React Query for server data. observer detects MobX changes for auto re-render. Different cache key for different object content.',
        },
      },
    ],
    folderStructure: [
      {
        name: 'apis/',
        children: [
          { name: 'Auth/' },
          { name: 'VOCRegister/' },
          { name: 'VocProcessing/' },
          { name: 'Statistics/' },
          { name: 'Faq/' },
          { name: 'Workflow/' },
        ],
      },
      {
        name: 'components/',
        children: [
          { name: 'Modal/' },
          { name: 'Table/' },
          { name: 'Editor/' },
          { name: 'FilterDrawer/' },
          { name: 'DatePicker/' },
        ],
      },
      {
        name: 'stores/',
        children: [{ name: 'Statistics/' }],
      },
      {
        name: 'hooks/',
        children: [
          { name: 'useModal.ts' },
          { name: 'useFilterDrawer.ts' },
          { name: 'useIntersection.ts' },
        ],
      },
      {
        name: 'pages/',
        children: [
          { name: 'home/' },
          { name: 'vocRegistration/' },
          { name: 'vocProcessing/' },
          { name: 'statistics/' },
          { name: 'faq/' },
        ],
      },
      { name: 'typings/' },
      { name: 'utils/' },
      { name: 'routers/' },
      { name: 'themes/' },
    ],
  },
  {
    id: 'broadcasting-psychology',
    slug: 'broadcasting-psychology',
    title: {
      ko: '방송통신고등학교 심리검사 3종',
      en: 'Broadcasting High School Psychology Tests',
    },
    description: {
      ko: '학생들의 심리 상태를 진단하기 위한 심리 검사 시스템으로, 검사 완료 후 결과를 즉시 확인할 수 있습니다.',
      en: 'A psychological test system for diagnosing students\' mental states, with immediate results viewing.',
    },
    period: '2022.04 ~ 2022.05',
    role: {
      ko: '기획, 디자인, 프론트엔드 개발',
      en: 'Planning, Design, Frontend Development',
    },
    team: '2',
    category: 'company',
    company: 'DH Wide',
    techStack: ['React', 'Redux', 'Redux-Saga', 'Chart.js', 'Recharts', 'MUI', 'SCSS'],
    features: {
      ko: [
        '심리검사 문항 페이지네이션 (10문항씩)',
        '단일 선택 / 다중 선택 문항 지원',
        '검사 진행 상태 localStorage 저장 (이어하기)',
        'Holland 유형 레이더 차트, 바 차트 시각화',
        '검사 결과 PDF 다운로드',
      ],
      en: [
        'Test question pagination (10 questions per page)',
        'Single/multiple choice question support',
        'Test progress localStorage save (resume feature)',
        'Holland type radar chart, bar chart visualization',
        'Test result PDF download',
      ],
    },
    responsibilities: [
      {
        category: { ko: '전체', en: 'Overall' },
        items: {
          ko: [
            '전체 프론트엔드 설계 및 구현 (100%)',
            '서비스 기획 및 사용자 플로우 설계 (100%)',
            'UI/UX 디자인 (100%)',
            'Redux + Redux-Saga 상태 관리 아키텍처 설계',
          ],
          en: [
            'Full frontend design and implementation (100%)',
            'Service planning and user flow design (100%)',
            'UI/UX design (100%)',
            'Redux + Redux-Saga state management architecture design',
          ],
        },
      },
      {
        category: { ko: '심리검사 시스템', en: 'Psychological Test System' },
        items: {
          ko: [
            '검사 문항 페이지네이션 (10문항씩 / 파트별 진행)',
            '단일 선택 / 다중 선택 답변 유형 컴포넌트 구현',
            '자동 스크롤 UX (답변 선택 시 다음 문항으로 이동)',
            '검사 진행 상태 localStorage 저장 (이어하기 기능)',
            'Redux-Saga 기반 검사 시작/완료 API 비동기 처리',
          ],
          en: [
            'Test question pagination (10 questions per page / part-based progress)',
            'Single/multiple choice answer type component implementation',
            'Auto-scroll UX (move to next question on answer selection)',
            'Test progress localStorage save (resume feature)',
            'Redux-Saga based test start/complete API async processing',
          ],
        },
      },
      {
        category: { ko: '검사 결과 시각화', en: 'Result Visualization' },
        items: {
          ko: [
            'Chart.js + Recharts 이중 차트 라이브러리 활용',
            'Holland 유형(R/I/A/S/E/C) 레이더 차트 구현',
            '세부 유형별 바 차트 (흥미/역량/직업선호)',
            '진로발달 프로파일 수평 바 차트',
            'SVG 커스텀 헥사곤 아이콘 축 라벨 렌더링',
            'Intersection Observer 기반 스크롤 애니메이션',
          ],
          en: [
            'Chart.js + Recharts dual chart library utilization',
            'Holland type (R/I/A/S/E/C) radar chart implementation',
            'Detail type bar charts (interest/competency/job preference)',
            'Career development profile horizontal bar chart',
            'SVG custom hexagon icon axis label rendering',
            'Intersection Observer based scroll animation',
          ],
        },
      },
      {
        category: { ko: '개인정보 입력 시스템', en: 'Personal Info Input System' },
        items: {
          ko: [
            'MUI 기반 입력 폼 UI 구현 (이름, 생년월일, 학교, 학년/반/번호, 성별)',
            '학교명 Autocomplete 자동완성 기능',
            '개인정보 수집 동의 UI 및 Yup 기반 유효성 검사',
          ],
          en: [
            'MUI based input form UI (name, birthdate, school, grade/class/number, gender)',
            'School name Autocomplete auto-complete',
            'Privacy consent UI and Yup based validation',
          ],
        },
      },
      {
        category: { ko: '관리자 시스템', en: 'Admin System' },
        items: {
          ko: [
            '관리자 로그인 인증',
            '검사 발급 현황 조회 페이지',
            'PDF 결과지 조회 기능',
          ],
          en: [
            'Admin login authentication',
            'Test issuance status page',
            'PDF result viewing functionality',
          ],
        },
      },
      {
        category: { ko: '재사용 컴포넌트 설계', en: 'Reusable Component Design' },
        items: {
          ko: [
            '15개+ 공용 컴포넌트 개발 (CustomExamGroup, ModalAlert, Loading 등)',
            '컨테이너-프레젠테이션 패턴 적용',
            'React.lazy + Suspense 코드 스플리팅',
          ],
          en: [
            '15+ common components (CustomExamGroup, ModalAlert, Loading, etc.)',
            'Container-Presentation pattern applied',
            'React.lazy + Suspense code splitting',
          ],
        },
      },
    ],
    detailedDescription: {
      ko: '방송통신고등학교 학생들을 위한 인성·진로 온라인검사 시스템입니다. 학생들이 개인정보를 입력하고, 심리검사를 진행하며, 검사 결과(진로 유형, 진로발달 프로파일 등)를 시각화된 형태로 확인할 수 있습니다.',
      en: 'An online personality and career test system for broadcasting high school students. Students can enter personal info, take psychological tests, and view results (career type, career development profile) in visualized format.',
    },
    techImplementation: [
      {
        category: { ko: '비동기 상태 관리', en: 'Async State Management' },
        details: {
          ko: [
            'Redux-Saga로 검사 시작/완료, 결과 조회 등 비동기 흐름 관리',
            'Generator 활용으로 직관적인 비동기 코드 작성',
            'REQUEST/SUCCESS/FAILURE 패턴으로 상태 추적',
          ],
          en: [
            'Async flow management with Redux-Saga for test start/complete, result query',
            'Intuitive async code using Generators',
            'State tracking with REQUEST/SUCCESS/FAILURE pattern',
          ],
        },
      },
      {
        category: { ko: '데이터 시각화', en: 'Data Visualization' },
        details: {
          ko: [
            'Chart.js + Recharts 병행 사용으로 각 차트 유형에 최적화',
            'SVG 기반 헥사곤 아이콘을 레이더 차트 축 라벨로 커스텀 렌더링',
            'Intersection Observer 기반 스크롤 애니메이션',
          ],
          en: [
            'Optimized for each chart type using Chart.js + Recharts together',
            'Custom rendering of SVG hexagon icons as radar chart axis labels',
            'Scroll animation based on Intersection Observer',
          ],
        },
      },
      {
        category: { ko: '폼 관리 및 UX 설계', en: 'Form Management & UX Design' },
        details: {
          ko: [
            '이름, 생년월일, 학교(자동완성), 학년/반/번호, 성별 등 다양한 입력 타입 복합 폼 구현',
            '필수 입력, 숫자 검증, 개인정보 동의 체크 등 유효성 검사',
            'MUI Autocomplete로 학교 목록 검색',
            '답변 선택 시 다음 문항으로 smooth 스크롤',
          ],
          en: [
            'Complex form with various input types (name, birth date, school autocomplete, grade/class/number, gender)',
            'Validation (required fields, number check, privacy consent)',
            'School list search with MUI Autocomplete',
            'Smooth scroll to next question on answer selection',
          ],
        },
      },
      {
        category: { ko: '상태 영속화 전략', en: 'State Persistence Strategy' },
        details: {
          ko: [
            'localStorage 활용으로 검사 진행 상태 브라우저 저장 및 이어하기 지원',
            'Redux 상태 변경 시 localStorage 자동 업데이트',
            '페이지 로드 시 localStorage에서 상태 복원',
          ],
          en: [
            'Browser storage of test progress with localStorage for resume support',
            'Auto localStorage update on Redux state change',
            'State restoration from localStorage on page load',
          ],
        },
      },
      {
        category: { ko: '컴포넌트 설계', en: 'Component Design' },
        details: {
          ko: [
            'CustomExamGroup, ModalAlert, Loading 등 15개+ 공용 컴포넌트 설계',
            'ResultContainer(로직) - LotteResult(UI) 컨테이너-프레젠테이션 분리',
            '검사 유형, 답변 타입(단일/다중)별 조건부 렌더링',
            'React.lazy + Suspense로 페이지별 동적 로딩',
          ],
          en: [
            '15+ common components (CustomExamGroup, ModalAlert, Loading, etc.)',
            'Container-Presentation separation: ResultContainer (logic) - LotteResult (UI)',
            'Conditional rendering by test type and answer type (single/multiple)',
            'Page-wise dynamic loading with React.lazy + Suspense',
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: { ko: '검사 진행 상태 유지', en: 'Test Progress State Persistence' },
        problem: {
          ko: '학생이 검사 도중 브라우저를 닫거나 새로고침할 때 검사 진행 상태가 초기화되어 처음부터 다시 시작해야 함.',
          en: 'When student closes browser or refreshes during test, test progress resets requiring restart from beginning.',
        },
        solution: {
          ko: 'localStorage 활용. 초기 로드 시 localStorage에서 상태 복원. 상태 변경 시마다 localStorage에 저장.',
          en: 'Used localStorage. Restore state from localStorage on initial load. Save to localStorage on every state change.',
        },
        result: {
          ko: '가장 빠르게 구현 가능. 브라우저 종료 후 다시 접속해도 이어하기 가능. 네트워크 없이도 진행 상태 유지.',
          en: 'Fastest implementation. Resume possible even after browser close. Progress maintained without network.',
        },
      },
      {
        title: { ko: 'Redux-Saga 비동기 흐름 제어', en: 'Redux-Saga Async Flow Control' },
        problem: {
          ko: '검사 시작, 검사 완료, 결과 조회 등 API 호출 시 콜백 지옥, 에러 처리 누락, 상태 관리 복잡.',
          en: 'Callback hell, missing error handling, complex state management during API calls for test start, complete, result query.',
        },
        solution: {
          ko: 'Redux-Saga로 Generator 기반 비동기 흐름 관리. call, put 등 effect 활용. REQUEST/SUCCESS/FAILURE 상수 파일 분리.',
          en: 'Redux-Saga for Generator-based async flow management. Used call, put effects. Separated REQUEST/SUCCESS/FAILURE constants.',
        },
        result: {
          ko: 'Generator 문법으로 동기 코드처럼 작성 가능. try-catch로 명확한 에러 핸들링. takeLatest, takeEvery로 중복 요청 제어.',
          en: 'Write like sync code with Generator syntax. Clear error handling with try-catch. Control duplicate requests with takeLatest, takeEvery.',
        },
      },
      {
        title: { ko: '차트 라이브러리 선택 및 커스터마이징', en: 'Chart Library Selection and Customization' },
        problem: {
          ko: '검사 결과 시각화 시 다양한 차트 유형 필요(레이더, 바, 수평바), 커스터마이징 어려움.',
          en: 'Needed various chart types (radar, bar, horizontal bar) for test result visualization, customization difficult.',
        },
        solution: {
          ko: 'Chart.js + Recharts 병행 사용. Recharts로 레이더 차트(SVG 커스텀 틱), Chart.js로 바 차트(애니메이션, 데이터 라벨).',
          en: 'Used Chart.js + Recharts together. Recharts for radar chart (SVG custom tick), Chart.js for bar chart (animation, data labels).',
        },
        result: {
          ko: 'Recharts: 레이더 차트에서 SVG 기반 커스텀 틱 렌더링 지원. Chart.js: 바 차트 애니메이션, 데이터 라벨 플러그인 우수.',
          en: 'Recharts: SVG-based custom tick rendering for radar chart. Chart.js: Excellent bar chart animation and data label plugin.',
        },
      },
      {
        title: { ko: '검사 문항 자동 스크롤', en: 'Test Question Auto Scroll' },
        problem: {
          ko: '검사 문항에 답변 선택 시 사용자가 매번 수동으로 스크롤해야 함.',
          en: 'User had to manually scroll after selecting answer for each test question.',
        },
        solution: {
          ko: '답변 선택 시 다음 문항으로 자동 스크롤. 아직 선택 안 된 문항일 때만 스크롤. behavior: "smooth"로 부드러운 스크롤.',
          en: 'Auto scroll to next question on answer selection. Scroll only for unselected questions. Smooth scroll with behavior: "smooth".',
        },
        result: {
          ko: '검사 진행이 자연스럽고 빠름. 스크롤 위치를 사용자가 신경 쓰지 않아도 됨. 이미 선택된 문항 수정 시에는 스크롤하지 않음.',
          en: 'Natural and fast test progression. User doesn\'t need to worry about scroll position. No scroll when editing already selected questions.',
        },
      },
    ],
    folderStructure: [
      {
        name: 'src/',
        children: [
          {
            name: 'api/',
            children: [
              { name: 'baseURL.js' },
              { name: 'routes.js' },
            ],
          },
          {
            name: 'components/',
            children: [
              { name: 'CustomExamGroup.js' },
              { name: 'Loading.js' },
              { name: 'ValidationHelper.js' },
              { name: 'PrivateRoute.js' },
            ],
          },
          {
            name: 'exam/',
            children: [
              { name: 'cdi/' },
              { name: 'reuseComponent/' },
              { name: 'module/' },
              { name: 'redux/' },
            ],
          },
          {
            name: 'page/',
            children: [{ name: 'cyberhs/' }],
          },
          {
            name: 'redux/',
            children: [
              { name: 'constants/' },
              { name: 'reducers/' },
              { name: 'sagas/' },
            ],
          },
          { name: 'style/' },
          { name: 'assets/' },
          { name: 'error/' },
        ],
      },
    ],
  },
  {
    id: 'consultation-reservation',
    slug: 'consultation-reservation',
    title: {
      ko: '15분 전화상담 예약 프로그램',
      en: '15-Minute Phone Consultation Reservation',
    },
    description: {
      ko: '심리검사 일련번호를 기반으로 고객이 쉽게 전화 상담을 예약하고, 예약한 정보를 직접 웹을 통해 확인할 수 있도록 도와주는 웹 애플리케이션입니다.',
      en: 'A web application that helps customers easily book phone consultations based on psychological test serial numbers and check their reservations online.',
    },
    period: '2022.01 ~ 2023.03',
    role: {
      ko: '프론트엔드 개발',
      en: 'Frontend Development',
    },
    team: '3',
    category: 'company',
    company: 'DH Wide',
    techStack: ['Next.js', 'Redux', 'Redux-Saga', 'next-redux-wrapper', 'MUI', 'Immer'],
    features: {
      ko: [
        '반응형 FE 구현',
        '예약 로직 FE 구현',
        '예약 관리(예약 확인/삭제/수정) 로직 FE 구현',
        '관리자 대시보드 (다중 필터, 페이지네이션)',
        '반응형 DatePicker (데스크톱/모바일)',
      ],
      en: [
        'Responsive FE implementation',
        'Reservation logic FE implementation',
        'Reservation management (view/delete/edit) logic FE',
        'Admin dashboard (multiple filters, pagination)',
        'Responsive DatePicker (desktop/mobile)',
      ],
    },
    responsibilities: [
      {
        category: { ko: '전체', en: 'Overall' },
        items: {
          ko: [
            '전체 프론트엔드 설계 및 구현 (100%)',
            '서비스 기획 및 사용자 플로우 설계 (100%)',
            'UI/UX 디자인 (100%)',
            'Next.js + Redux-Saga 아키텍처 설계',
          ],
          en: [
            'Full frontend design and implementation (100%)',
            'Service planning and user flow design (100%)',
            'UI/UX design (100%)',
            'Next.js + Redux-Saga architecture design',
          ],
        },
      },
      {
        category: { ko: '예약 시스템', en: 'Reservation System' },
        items: {
          ko: [
            '접속번호 입력 및 검증 플로우 구현',
            '반응형 DatePicker (데스크톱: 달력 전체 / 모바일: 팝업)',
            '시간대 선택 UI (오전/오후 구분, 20분 단위)',
            '예약 불가 시간 실시간 비활성화 처리',
            '주말/공휴일/30일 이후 날짜 비활성화 로직',
            '검사명 선택 모달 컴포넌트',
            '예약 완료 확인 페이지',
          ],
          en: [
            'Access code input and verification flow',
            'Responsive DatePicker (desktop: full calendar / mobile: popup)',
            'Time slot selection UI (AM/PM, 20-minute intervals)',
            'Real-time unavailable time slot deactivation',
            'Weekend/holiday/30+ days date deactivation logic',
            'Test name selection modal component',
            'Reservation confirmation page',
          ],
        },
      },
      {
        category: { ko: '예약 조회/관리', en: 'Reservation Management' },
        items: {
          ko: [
            '휴대폰 번호 기반 내 예약 조회',
            '비밀번호 확인 후 예약 취소 기능',
            'Dialog 기반 삭제 확인 UI',
          ],
          en: [
            'Phone number based reservation lookup',
            'Password verified reservation cancellation',
            'Dialog based delete confirmation UI',
          ],
        },
      },
      {
        category: { ko: '관리자 대시보드', en: 'Admin Dashboard' },
        items: {
          ko: [
            'MUI Table 기반 전체 예약 목록 테이블',
            '컬럼별 정렬 기능 (stableSort, getComparator)',
            '다중 필터 조합 (상태 + 예약자명/피검자명/검사명/날짜)',
            '상담 완료/미완료 상태 토글 버튼',
            'Collapse 기반 상세 정보 펼치기',
            '상담 기록 작성/수정 TextField',
            '커스텀 페이지네이션 (pageSize 선택, 이전/다음)',
            'PDF 파일 체크박스 선택 및 다운로드',
            'localStorage 기반 관리자 세션 관리',
          ],
          en: [
            'MUI Table based full reservation list',
            'Column sorting (stableSort, getComparator)',
            'Multiple filter combination (status + reserver/testee/test name/date)',
            'Consultation complete/incomplete toggle',
            'Collapse based detail expansion',
            'Consultation record create/edit TextField',
            'Custom pagination (pageSize selection, prev/next)',
            'PDF file checkbox selection and download',
            'localStorage based admin session management',
          ],
        },
      },
      {
        category: { ko: '상태 관리 아키텍처', en: 'State Management Architecture' },
        items: {
          ko: [
            '7개 Redux-Saga 모듈 설계 (예약, 날짜, 조회, 삭제, 관리자 등)',
            'Immer 기반 불변성 관리',
            '환경별 빌드 설정 (env-cmd로 dev/prod 분리)',
            '커스텀 로거 미들웨어 (개발 환경 전용)',
          ],
          en: [
            '7 Redux-Saga modules design (reservation, date, lookup, delete, admin, etc.)',
            'Immer based immutability management',
            'Environment-based build config (env-cmd dev/prod split)',
            'Custom logger middleware (dev environment only)',
          ],
        },
      },
      {
        category: { ko: '재사용 컴포넌트 설계', en: 'Reusable Component Design' },
        items: {
          ko: [
            '12개 공용 컴포넌트 개발',
            'DatePickerCustom, TimePickerCustom',
            'PaginationCustom, EnhancedTableHead',
            'DialogAlert, ModalAlert, Loading 등',
            'classnames 라이브러리로 조건부 스타일링',
          ],
          en: [
            '12 common components development',
            'DatePickerCustom, TimePickerCustom',
            'PaginationCustom, EnhancedTableHead',
            'DialogAlert, ModalAlert, Loading, etc.',
            'Conditional styling with classnames library',
          ],
        },
      },
    ],
    link: 'http://counsel.guidance.co.kr:7100/',
    detailedDescription: {
      ko: '학교표준화검사를 실시한 자녀의 결과를 바탕으로 학부모님께 15분 심리검사 분석서비스(무료)를 제공하는 예약 관리 시스템입니다. Next.js + Redux-Saga 기반으로 구현되었습니다.',
      en: 'A reservation management system providing 15-minute psychological test analysis service (free) to parents based on their children\'s school standardization test results. Implemented with Next.js + Redux-Saga.',
    },
    techImplementation: [
      {
        category: { ko: 'Next.js SSR 환경 설계', en: 'Next.js SSR Environment Design' },
        details: {
          ko: [
            'next-redux-wrapper로 Next.js SSR 환경에서 Redux + Saga 통합',
            'env-cmd로 dev/prod 환경 분리',
            '커스텀 로거 미들웨어 구현 (개발 환경 전용)',
          ],
          en: [
            'Redux + Saga integration in Next.js SSR with next-redux-wrapper',
            'dev/prod environment separation with env-cmd',
            'Custom logger middleware (dev environment only)',
          ],
        },
      },
      {
        category: { ko: '관리자 대시보드', en: 'Admin Dashboard' },
        details: {
          ko: [
            'MUI Table + stableSort, getComparator 함수로 컬럼별 정렬',
            '다중 필터 조합 (상태 + 예약자명/피검자명/검사명/날짜)',
            'Collapse 기반 상세 정보 펼치기',
          ],
          en: [
            'MUI Table + stableSort, getComparator for column sorting',
            'Multiple filter combination (status + reserver/testee/test name/date)',
            'Collapse-based detail expansion',
          ],
        },
      },
      {
        category: { ko: '비동기 상태 관리', en: 'Async State Management' },
        details: {
          ko: [
            '7개 Saga 모듈로 예약/조회/관리자 비동기 처리',
            'Immer produce 함수로 중첩 객체 상태 안전하게 업데이트',
            'Loading/Done/Failure 패턴으로 UI 상태 세분화',
            'constants 디렉토리로 액션 타입 중앙 관리',
          ],
          en: [
            '7 Saga modules for reservation/query/admin async processing',
            'Safe nested object state update with Immer produce function',
            'UI state granularity with Loading/Done/Failure pattern',
            'Centralized action type management in constants directory',
          ],
        },
      },
      {
        category: { ko: '반응형 UI 구현', en: 'Responsive UI Implementation' },
        details: {
          ko: [
            'MUI sx prop 반응형으로 데스크톱/모바일 분기 렌더링',
            'classnames로 선택/비활성화 상태에 따른 동적 클래스 적용',
            'MUI Grid로 반응형 레이아웃 구성',
          ],
          en: [
            'Desktop/mobile branch rendering with MUI sx prop responsive',
            'Dynamic class application based on selection/disabled state with classnames',
            'Responsive layout with MUI Grid',
          ],
        },
      },
      {
        category: { ko: '예약 시스템 UX 설계', en: 'Reservation System UX Design' },
        details: {
          ko: [
            '주말/공휴일 비활성화, 30일 이내 예약만 허용하는 날짜 제한 로직',
            '이미 예약된 시간 비활성화 표시로 시간 실시간 필터링',
            '접속번호 → 날짜 → 시간 → 검사 선택 → 완료 단계별 예약 플로우',
          ],
          en: [
            'Date restriction logic: disable weekends/holidays, allow only within 30 days',
            'Real-time time filtering with disabled display for already reserved times',
            'Step-by-step reservation flow: access number → date → time → test selection → complete',
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: { ko: 'Next.js에서 Redux-Saga 설정', en: 'Redux-Saga Setup in Next.js' },
        problem: {
          ko: 'Next.js 프로젝트에서 Redux 스토어 설정, Saga 미들웨어 연결, 환경별 DevTools 분기 필요.',
          en: 'Need Redux store setup, Saga middleware connection, environment-specific DevTools branching in Next.js project.',
        },
        solution: {
          ko: 'next-redux-wrapper로 Next.js 앱에 Redux 간편 연결. 개발 환경에서만 DevTools, 로거 활성화. Saga + 커스텀 로거 순차 적용.',
          en: 'Simple Redux connection to Next.js app with next-redux-wrapper. DevTools and logger only in dev environment. Sequential Saga + custom logger application.',
        },
        result: {
          ko: 'Next.js SSR 환경에서 Redux + Saga 정상 동작. 개발 환경에서 모든 액션 콘솔 로깅으로 디버깅 용이.',
          en: 'Redux + Saga works properly in Next.js SSR environment. Easy debugging with all action console logging in dev.',
        },
      },
      {
        title: { ko: '반응형 DatePicker 구현', en: 'Responsive DatePicker Implementation' },
        problem: {
          ko: '데스크톱에서는 달력 전체 표시, 모바일에서는 팝업 형태가 적합했으나 단일 컴포넌트로는 불가능.',
          en: 'Desktop needed full calendar display, mobile needed popup format, but not possible with single component.',
        },
        solution: {
          ko: 'MUI Box sx prop으로 StaticDatePicker(데스크톱)과 DatePicker(모바일)를 조건부 렌더링.',
          en: 'Conditional rendering of StaticDatePicker (desktop) and DatePicker (mobile) using MUI Box sx prop.',
        },
        result: {
          ko: 'CSS 기반 분기로 깜빡임 없는 반응형 UI 구현. MUI의 반응형 시스템 그대로 활용.',
          en: 'CSS-based branching for flicker-free responsive UI. Leveraged MUI responsive system as is.',
        },
      },
      {
        title: { ko: '예약 가능 시간 실시간 필터링', en: 'Real-time Available Time Filtering' },
        problem: {
          ko: '날짜 변경 시 해당 날짜의 예약된 시간 목록 업데이트 필요.',
          en: 'Need to update reserved time list for selected date when date changes.',
        },
        solution: {
          ko: 'useEffect로 날짜 변경 감지. 이미 받아온 reservedList 데이터로 클라이언트 필터링. classnames로 예약된 시간 timeDisabled 스타일 표시.',
          en: 'Detect date change with useEffect. Client-side filtering with already fetched reservedList data. timeDisabled style for reserved times with classnames.',
        },
        result: {
          ko: '날짜 변경 즉시 UI 업데이트. 추가 API 호출 불필요. 예약된 시간 시각적 구분.',
          en: 'Immediate UI update on date change. No additional API call needed. Visual distinction for reserved times.',
        },
      },
      {
        title: { ko: '관리자 테이블 다중 필터 조합', en: 'Admin Table Multiple Filter Combination' },
        problem: {
          ko: '상태(완료/미완료) + 검색(예약자명/피검자명/검사명/날짜) 필터 조합 필요.',
          en: 'Need status (complete/incomplete) + search (reserver/testee/test name/date) filter combination.',
        },
        solution: {
          ko: '서버 필터링 방식 선택. filterRequest 액션으로 pageSize, curPage, type, filter, inputData 파라미터 전달. 현재 적용된 필터를 UI로 명확히 표시.',
          en: 'Chose server filtering. Pass pageSize, curPage, type, filter, inputData parameters via filterRequest action. Clearly display current applied filters in UI.',
        },
        result: {
          ko: '예약 데이터 증가 시에도 안정적. 서버에서 필터링 + 페이징 한 번에 처리.',
          en: 'Stable even with reservation data growth. Server handles filtering + paging at once.',
        },
      },
      {
        title: { ko: 'localStorage 기반 관리자 세션', en: 'localStorage-based Admin Session' },
        problem: {
          ko: '로그인하지 않은 사용자가 관리자 페이지 직접 접근 가능.',
          en: 'Unauthenticated users could directly access admin page.',
        },
        solution: {
          ko: 'localStorage 세션 방식. useEffect에서 localStorage에서 adminId 확인. 없으면 로그인 페이지로 리다이렉트.',
          en: 'localStorage session approach. Check adminId from localStorage in useEffect. Redirect to login page if not found.',
        },
        result: {
          ko: '내부 직원용 관리자 페이지에 적합. 새로고침해도 세션 유지. 별도 서버 세션 없이 빠른 구현.',
          en: 'Suitable for internal staff admin page. Session maintained on refresh. Quick implementation without server session.',
        },
      },
    ],
    folderStructure: [
      {
        name: 'fifteen-front/',
        children: [
          {
            name: 'pages/',
            children: [
              { name: 'index.js' },
              { name: 'reserve/' },
              { name: 'reserveInfo/' },
              { name: 'findCode/' },
              { name: 'admin/' },
            ],
          },
          {
            name: 'components/',
            children: [
              { name: 'AppLayout.js' },
              { name: 'DatePickerCustom.js' },
              { name: 'TimePickerCustom.js' },
              { name: 'PaginationCustom.js' },
            ],
          },
          {
            name: 'reducers/',
            children: [
              { name: 'reserve.js' },
              { name: 'dateTime.js' },
              { name: 'admin.js' },
            ],
          },
          {
            name: 'sagas/',
            children: [
              { name: 'reserve.js' },
              { name: 'admin.js' },
            ],
          },
          { name: 'constants/' },
          { name: 'store/' },
          { name: 'module/' },
          { name: 'style/' },
        ],
      },
    ],
  },
  // Freelance Projects
  {
    id: 'uz-exchange',
    slug: 'uz-exchange',
    title: {
      ko: '우즈베키스탄 가상화폐 거래소',
      en: 'Uzbekistan Cryptocurrency Exchange',
    },
    description: {
      ko: '웹소켓을 활용하여 실시간으로 코인 시세를 확인할 수 있으며, 사용자가 등록한 카드로 코인 거래가 가능한 암호화폐 거래 플랫폼입니다.',
      en: 'A cryptocurrency exchange platform with real-time coin prices via WebSocket and card-based trading.',
    },
    period: '2025.01 ~ 2025.04',
    role: {
      ko: '풀스택 개발 (프론트엔드 중심)',
      en: 'Full-Stack Development (Frontend-focused)',
    },
    team: '5',
    category: 'freelance',
    techStack: ['React', 'TypeScript', 'Vite', 'Zustand', 'React Query', 'i18next', 'styled-components', 'TradingView', 'Firebase Auth', 'WebSocket'],
    features: {
      ko: [
        '실시간 OrderBook, Ticker, Trade 데이터 (WebSocket)',
        'TradingView 전문 금융 차트 연동',
        '암호화폐/법정화폐 입출금',
        '소셜 로그인 (Google, Apple, OneID)',
        'OTP 2FA, KYC 인증',
        '3개 언어 지원 (영어, 우즈벡어, 러시아어)',
      ],
      en: [
        'Real-time OrderBook, Ticker, Trade data (WebSocket)',
        'TradingView professional financial chart integration',
        'Crypto/fiat deposit and withdrawal',
        'Social login (Google, Apple, OneID)',
        'OTP 2FA, KYC verification',
        '3 language support (English, Uzbek, Russian)',
      ],
    },
    responsibilities: [
      {
        category: { ko: '입출금 시스템', en: 'Deposit/Withdrawal System' },
        items: {
          ko: [
            'Sum(법정화폐) 입출금 전체 플로우 구현 (UI, API 연동, 유효성 검사)',
            '입출금 input 유효성 체크 및 min/max API 연동',
            'available balance 계산 로직 (balance - pending_withdrawal_amount)',
            '입금/출금 거절 페이지 및 펜딩 화면 구현',
            '모바일 메뉴창에 출금 관련 버튼 추가',
          ],
          en: [
            'Sum (fiat) deposit/withdrawal full flow (UI, API, validation)',
            'Deposit/withdrawal input validation and min/max API integration',
            'Available balance calculation (balance - pending_withdrawal_amount)',
            'Deposit/withdrawal rejection page and pending screen',
            'Added withdrawal buttons in mobile menu',
          ],
        },
      },
      {
        category: { ko: '다국어 시스템', en: 'Multilingual System' },
        items: {
          ko: [
            '러시아어(RU), 우즈베키스탄어(UZ) 언어팩 추가 및 형식 정리',
            'FAQ, 공지사항 등 콘텐츠 언어별 API 연동',
            '모바일에서 언어 선택 시 즉시 적용되도록 수정',
            '푸터 언어별 링크 분기 처리',
          ],
          en: [
            'Russian (RU), Uzbek (UZ) language pack addition and formatting',
            'FAQ, notice content language-specific API integration',
            'Mobile language selection instant apply',
            'Footer language-specific link branching',
          ],
        },
      },
      {
        category: { ko: '메인 페이지 & 공지 시스템', en: 'Main Page & Notice System' },
        items: {
          ko: [
            '메인 화면 공지사항(Notice) 배너 구현 및 애니메이션 처리',
            '팝업창 구현 (오늘 다시보지 않기 로직, 로컬스토리지 만료일 관리)',
            '메인 테이블 정렬 기능 구현 및 버그 수정 (정렬과 검색 동시 동작)',
            '메인 모바일 화면 코인 이미지 추가',
          ],
          en: [
            'Main notice banner implementation and animation',
            'Popup implementation (do not show today, localStorage expiration)',
            'Main table sorting feature and bug fix (sort + search)',
            'Main mobile screen coin image addition',
          ],
        },
      },
      {
        category: { ko: '마이페이지 (자산 관리)', en: 'My Page (Asset Management)' },
        items: {
          ko: [
            'Overview 정렬 기능 구현 (UZS 상단 고정, 검색/필터 동시 동작)',
            'Overview/Spot 테이블 PnL 컬럼 추가 및 필터 기능',
            '가격 표시 천단위 콤마 포맷팅 적용',
            'Spot 파일 분리 및 컴포넌트 리팩토링',
          ],
          en: [
            'Overview sorting (UZS top fixed, search/filter simultaneous)',
            'Overview/Spot table PnL column and filter',
            'Price thousand separator formatting',
            'Spot file separation and component refactoring',
          ],
        },
      },
      {
        category: { ko: 'GNB & 공통 UI', en: 'GNB & Common UI' },
        items: {
          ko: [
            'GNB 메뉴 구조 수정 및 불필요한 메뉴 삭제',
            '글로벌 푸터 모달창 추가 및 페이지 이동 링크 설정',
            '에러창 overlay 바탕 화면 클릭 시 자동 닫힘 방지',
            '버튼 중복 클릭 방지 로직 구현',
          ],
          en: [
            'GNB menu structure modification',
            'Global footer modal and page navigation links',
            'Error overlay click prevention',
            'Button duplicate click prevention',
          ],
        },
      },
      {
        category: { ko: '인증 & 보안 분기 처리', en: 'Auth & Security Branching' },
        items: {
          ko: [
            'KYC 인증 분기 처리 (미인증 시 Security 페이지로 이동)',
            'KYC/OneID 미인증 시 헤더 아이콘 Unverified 표시',
            'OneID 로그인 플로우 복구 및 연동',
            '보안 화면 Manage 버튼 상태별 스타일 처리',
          ],
          en: [
            'KYC verification branching (redirect to Security if unverified)',
            'KYC/OneID unverified header icon display',
            'OneID login flow recovery and integration',
            'Security screen Manage button state styling',
          ],
        },
      },
      {
        category: { ko: '에러 핸들링 & 캐싱', en: 'Error Handling & Caching' },
        items: {
          ko: [
            'React Query 캐싱 문제 해결 (로그아웃 시 모든 캐싱 내역 삭제)',
            'Card List 캐싱 문제 해결',
            'Decimal undefined 에러 해결',
            '컴포넌트별 로딩 상태 분리 처리',
          ],
          en: [
            'React Query caching fix (clear all cache on logout)',
            'Card List caching issue fix',
            'Decimal undefined error fix',
            'Component-wise loading state separation',
          ],
        },
      },
      {
        category: { ko: '반응형 & 모바일 UI', en: 'Responsive & Mobile UI' },
        items: {
          ko: [
            '거래(Trade) 화면 전체 반응형 작업',
            '보안 페이지 모바일 버튼 크기 조정',
            '모바일 모달창 애니메이션 버그 수정',
            'Deposit Crypto 모바일 버전 UX 개선 (코인/네트워크 선택 플로우)',
          ],
          en: [
            'Trade screen full responsive implementation',
            'Security page mobile button size adjustment',
            'Mobile modal animation bug fix',
            'Deposit Crypto mobile UX improvement (coin/network selection)',
          ],
        },
      },
    ],
    link: 'https://staging.uznex.com/',
    detailedDescription: {
      ko: 'UZ Exchange는 우즈베키스탄 시장을 타겟으로 한 암호화폐 거래 플랫폼입니다. 실시간 OrderBook, 차트, 거래 기능을 제공하며, 3개 언어(영어, 우즈벡어, 러시아어)를 지원합니다. KYC 인증, OTP 2FA, 소셜 로그인 등 금융 서비스 수준의 보안 기능을 구현했습니다.',
      en: 'UZ Exchange is a cryptocurrency trading platform targeting the Uzbekistan market. It provides real-time OrderBook, charts, trading features, and supports 3 languages (English, Uzbek, Russian). Implemented financial-grade security features including KYC, OTP 2FA, and social login.',
    },
    techImplementation: [
      {
        category: { ko: '실시간 데이터 관리', en: 'Real-time Data Management' },
        details: {
          ko: [
            'WebSocket 기반 실시간 데이터 스트리밍 (OKX, Bybit, UZNEX)',
            'Zustand로 대량 OrderBook 데이터 효율적 관리',
            '타입 가드 함수로 메시지 타입 안전성 확보',
            '지수 백오프 기반 자동 재연결 (최대 5회)',
          ],
          en: [
            'WebSocket based real-time data streaming (OKX, Bybit, UZNEX)',
            'Efficient OrderBook data management with Zustand',
            'Message type safety with type guard functions',
            'Exponential backoff based auto-reconnection (max 5 times)',
          ],
        },
      },
      {
        category: { ko: '입출금 시스템', en: 'Deposit/Withdrawal System' },
        details: {
          ko: [
            'Sum(법정화폐) 입출금 전체 플로우 구현 (UI, API 연동, 유효성 검사)',
            'Decimal.js로 정밀 숫자 처리 (부동소수점 오류 방지)',
            'available balance 계산 로직 (balance - pending_withdrawal_amount)',
            '입금/출금 거절 페이지, 펜딩 화면, Retry 플로우 구현',
          ],
          en: [
            'Full Sum (fiat) deposit/withdrawal flow (UI, API integration, validation)',
            'Precise number handling with Decimal.js (floating point error prevention)',
            'Available balance calculation (balance - pending_withdrawal_amount)',
            'Deposit/withdrawal rejection page, pending screen, retry flow implementation',
          ],
        },
      },
      {
        category: { ko: '다국어 시스템 (i18n)', en: 'Multilingual System (i18n)' },
        details: {
          ko: [
            '러시아어(RU), 우즈베키스탄어(UZ) 언어팩 추가 및 형식 정리',
            'FAQ, 공지사항 등 API 응답 언어별 분기 처리',
            '모바일에서 언어 선택 시 즉시 적용되도록 구현',
            '푸터 언어별 외부 링크 분기 처리',
          ],
          en: [
            'Russian (RU), Uzbek (UZ) language pack addition and formatting',
            'Language-based API response branching for FAQ, notices',
            'Immediate application on mobile language selection',
            'Footer external link branching by language',
          ],
        },
      },
      {
        category: { ko: '인증 & 보안 분기 처리', en: 'Authentication & Security Branching' },
        details: {
          ko: [
            'KYC 미인증 시 Security 페이지로 이동 분기 처리',
            'KYC/OneID 미인증 시 헤더 아이콘 Unverified 표시',
            'useVerifyKyc 훅으로 인증 체크 로직 중앙화',
            '보안 화면 Manage 버튼 상태별 스타일 처리',
          ],
          en: [
            'Redirect to Security page when KYC not verified',
            'Header icon shows Unverified when KYC/OneID not verified',
            'Centralized verification check logic via useVerifyKyc hook',
            'Security screen Manage button state-based styling',
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: { ko: 'React Query 캐싱으로 인한 민감 데이터 유지 문제', en: 'Sensitive Data Persistence Due to React Query Caching' },
        problem: {
          ko: '로그아웃 후 다른 계정으로 로그인해도 이전 사용자의 Card List, 자산 정보가 표시됨',
          en: 'Previous user\'s Card List and asset info displayed even after logging out and logging in with different account',
        },
        solution: {
          ko: 'queryClient.clear()로 로그아웃 시 React Query 캐시 전체 삭제. 금융 데이터의 보안을 위해 선택적 삭제 대신 전체 삭제 선택',
          en: 'Clear all React Query cache on logout using queryClient.clear(). Chose full clear over selective for financial data security',
        },
        result: {
          ko: '계정 간 데이터 격리 완료, 보안 이슈 해결',
          en: 'Complete data isolation between accounts, security issue resolved',
        },
      },
      {
        title: { ko: '다국어 전환 시 상수 데이터 갱신 안됨', en: 'Constant Data Not Updating on Language Switch' },
        problem: {
          ko: '언어 변경해도 GNB 메뉴, 푸터 링크 텍스트가 이전 언어로 유지됨 (앱 시작 시점에 번역이 고정)',
          en: 'GNB menu and footer link text remained in previous language after language change (translation fixed at app start)',
        },
        solution: {
          ko: 'getter 함수로 변환하여 호출 시점에 번역, useMemo + 언어 의존성으로 언어 변경 시에만 재계산',
          en: 'Convert to getter functions for translation at call time, useMemo + language dependency for recalculation only on language change',
        },
        result: {
          ko: '언어 변경 즉시 모든 텍스트 갱신, 불필요한 재계산 방지',
          en: 'Immediate text update on language change, prevented unnecessary recalculation',
        },
      },
      {
        title: { ko: '테이블 정렬과 검색 동시 동작 안됨', en: 'Table Sort and Search Not Working Simultaneously' },
        problem: {
          ko: '검색 후 정렬하면 검색 결과 초기화, 정렬 후 검색하면 정렬 초기화. 메인 테이블, Overview, Spot 테이블에 영향',
          en: 'Search results reset after sorting, sort reset after search. Affected main table, Overview, Spot tables',
        },
        solution: {
          ko: '파이프라인 방식 (필터 → 정렬) + useMemo로 파생 데이터 처리. 원본 데이터 변경 없이 searchTerm, sortConfig 의존성으로 재계산',
          en: 'Pipeline approach (filter → sort) + useMemo for derived data. Recalculate with searchTerm, sortConfig dependencies without changing original data',
        },
        result: {
          ko: '검색 상태와 정렬 상태가 항상 함께 적용, 추가 필터 조건도 파이프라인에 쉽게 추가 가능',
          en: 'Search and sort states always applied together, additional filter conditions easily added to pipeline',
        },
      },
      {
        title: { ko: '입출금 Available Balance 계산 오류', en: 'Deposit/Withdrawal Available Balance Calculation Error' },
        problem: {
          ko: '출금 가능 금액이 실제 잔액보다 높게 표시되어 출금 실패 (출금 대기 중인 금액 미반영)',
          en: 'Available balance displayed higher than actual, causing withdrawal failure (pending withdrawal not reflected)',
        },
        solution: {
          ko: 'balance - pending_withdrawal_amount 계산 로직 적용. Decimal.js로 정밀 계산, min/max 유효성 검사 실시간 적용',
          en: 'Applied balance - pending_withdrawal_amount calculation. Precise calculation with Decimal.js, real-time min/max validation',
        },
        result: {
          ko: '출금 대기 금액 별도 표시로 사용자 이해도 향상, 출금 전 오류 방지',
          en: 'Improved user understanding with separate pending amount display, prevented pre-withdrawal errors',
        },
      },
      {
        title: { ko: 'KYC 미인증 사용자 분기 처리 누락', en: 'KYC Unverified User Branching Missing' },
        problem: {
          ko: '미인증 사용자가 입출금 페이지 접근 가능, 실행 시 오류 발생. Deposit, Withdraw, 거래 관련 페이지에 영향',
          en: 'Unverified users could access deposit/withdrawal pages, errors on execution. Affected Deposit, Withdraw, trading pages',
        },
        solution: {
          ko: 'useVerifyKyc 훅으로 인증 체크 로직 중앙화. 모달로 Security 페이지 안내, 헤더 아이콘으로 인증 상태 항상 표시',
          en: 'Centralized verification via useVerifyKyc hook. Modal guidance to Security page, header icon always shows verification status',
        },
        result: {
          ko: '모달로 친절하게 안내하여 갑작스러운 리다이렉트 방지, KYC 또는 OneID 중 하나만 완료해도 인증 처리',
          en: 'Friendly modal guidance prevents sudden redirects, verification with either KYC or OneID completion',
        },
      },
    ],
    folderStructure: [
      {
        name: 'page/',
        children: [
          { name: 'auth/' },
          { name: 'trade/' },
          { name: 'markets/' },
          { name: 'mypage/' },
          { name: 'deposit/' },
          { name: 'withdraw/' },
        ],
      },
      {
        name: 'components/',
        children: [
          { name: 'trade/' },
          { name: 'gnb/' },
          { name: 'table/' },
          { name: 'layout/' },
        ],
      },
      {
        name: 'modal/',
        children: [
          { name: 'common/' },
          { name: 'auth/' },
          { name: 'withdraw/' },
          { name: 'index.tsx' },
        ],
      },
      {
        name: 'store/',
        children: [
          { name: 'authStore.ts' },
          { name: 'socketStore.ts' },
          { name: 'modalStore.ts' },
          { name: 'useDarkModeStore.ts' },
        ],
      },
      {
        name: 'service/',
        children: [
          { name: 'api/index.ts' },
          { name: 'react_query/' },
        ],
      },
      {
        name: 'lib/',
        children: [
          { name: 'firebase/' },
          { name: 'socket/' },
        ],
      },
      { name: 'hook/' },
      { name: 'utils/' },
      { name: 'style/' },
      { name: 'types/' },
      { name: 'charting_library/' },
    ],
  },
  {
    id: 'nft-marketplace',
    slug: 'nft-marketplace',
    title: {
      ko: 'NFT Voting & Marketplace',
      en: 'NFT Voting & Marketplace',
    },
    description: {
      ko: 'NFT를 기반 투표 시스템을 제공하고, 마켓플레이스를 활용하여 NFT를 거래할 수 있는 플랫폼입니다.',
      en: 'A project providing NFT-based voting system and a marketplace for trading NFTs.',
    },
    period: '2025.01 ~ 2025.02',
    role: {
      ko: '프론트엔드 개발',
      en: 'Frontend Development',
    },
    team: '5',
    category: 'freelance',
    techStack: ['React', 'TypeScript', 'Vite', 'React Query', 'Zustand', 'styled-components', 'Firebase Auth', 'Swiper'],
    features: {
      ko: [
        '반응형 FE 구현 (25개 페이지)',
        'NFT Voting System 화면 api 연동',
        '투표 목록 (진행중/예정/완료) 필터링',
        '캐러셀 기반 투표 카드 UI',
        '암호화폐 지갑 시스템',
      ],
      en: [
        'Responsive FE implementation (25 pages)',
        'NFT Voting System screen API integration',
        'Vote list filtering (ongoing/upcoming/closed)',
        'Carousel-based voting card UI',
        'Cryptocurrency wallet system',
      ],
    },
    responsibilities: [
      {
        category: { ko: '반응형 UI 시스템', en: 'Responsive UI System' },
        items: {
          ko: [
            '메인 홈 반응형 - Tablet/Mobile 대응 레이아웃 구현',
            'Voting 시스템 반응형 - 투표 목록, 상세, Upcoming 페이지 전체 반응형',
            'My Wallet 반응형 - 지갑, 입출금, 거래 이력 페이지 반응형',
            'My Profile / Security 반응형 - 프로필 수정, 보안 설정 모달 반응형',
            '인증 페이지 반응형 - 로그인, 회원가입, 가입완료 페이지 반응형',
            'Language 모달 반응형 - 다국어 선택 모달 반응형 대응',
          ],
          en: [
            'Main home responsive - Tablet/Mobile layout implementation',
            'Voting system responsive - Vote list, detail, Upcoming pages full responsive',
            'My Wallet responsive - Wallet, deposit/withdrawal, transaction history pages responsive',
            'My Profile / Security responsive - Profile edit, security settings modal responsive',
            'Auth pages responsive - Login, signup, signup complete pages responsive',
            'Language modal responsive - Multilingual selection modal responsive',
          ],
        },
      },
      {
        category: { ko: 'Header / Navigation 시스템', en: 'Header / Navigation System' },
        items: {
          ko: [
            'Header Drawer - 모바일용 햄버거 메뉴 Drawer 구현',
            'Footer Navigation - 푸터 네비게이션 링크 추가',
            'Drawer 내 로그인/회원가입 아이콘 수정',
          ],
          en: [
            'Header Drawer - Mobile hamburger menu Drawer implementation',
            'Footer Navigation - Footer navigation link addition',
            'Drawer login/signup icon modification',
          ],
        },
      },
      {
        category: { ko: '버그 수정', en: 'Bug Fixes' },
        items: {
          ko: [
            '로고 및 오타 수정',
            '메인 홈, FAQ, Coming Soon 모달 버그 수정',
            '로그인 시 권한 모달 창 이슈 해결',
            'Header 스타일 버그 수정',
          ],
          en: [
            'Logo and typo fixes',
            'Main home, FAQ, Coming Soon modal bug fixes',
            'Login permission modal issue resolution',
            'Header style bug fix',
          ],
        },
      },
      {
        category: { ko: '코드 품질 개선', en: 'Code Quality Improvement' },
        items: {
          ko: [
            'SVGR Plugin 설정 - SVG를 React 컴포넌트로 사용할 수 있도록 Vite 플러그인 추가',
            '이미지 중복 스타일 리팩토링 - 공통 스타일 컴포넌트로 추출',
            '불필요한 파일 삭제 및 코드 정리',
            '반복문 key prop 추가 (React 최적화)',
          ],
          en: [
            'SVGR Plugin setup - Vite plugin for using SVG as React components',
            'Image duplicate style refactoring - Extract to common style components',
            'Unnecessary file deletion and code cleanup',
            'Loop key prop addition (React optimization)',
          ],
        },
      },
    ],
    link: 'https://marketplaces.uznexdev.com/',
    detailedDescription: {
      ko: 'NFT 마켓플레이스와 암호화폐 거래 기능을 통합한 커뮤니티 플랫폼입니다. 사용자는 NFT 컬렉션을 관리하고, 암호화폐 입출금을 수행하며, 커뮤니티 투표에 참여할 수 있습니다.',
      en: 'A community platform integrating NFT marketplace and cryptocurrency trading features. Users can manage NFT collections, perform crypto deposits/withdrawals, and participate in community voting.',
    },
    techImplementation: [
      {
        category: { ko: '반응형 UI 설계', en: 'Responsive UI Design' },
        details: {
          ko: [
            '전체 25개 페이지 반응형 구현 (메인, Voting, My Wallet, Profile, Security)',
            '중앙 theme 파일에서 브레이크포인트 관리 (mobile/tablet/desktop)',
            'as const로 타입 안전한 미디어 쿼리',
          ],
          en: [
            'Responsive implementation for all 25 pages (Main, Voting, My Wallet, Profile, Security)',
            'Centralized breakpoint management in theme file (mobile/tablet/desktop)',
            'Type-safe media queries with as const',
          ],
        },
      },
      {
        category: { ko: '네비게이션 시스템', en: 'Navigation System' },
        details: {
          ko: [
            'Header Drawer - 모바일용 햄버거 메뉴 Drawer 컴포넌트 구현',
            'useBodyScrollLock 훅으로 Drawer 열림 시 배경 스크롤 잠금',
            'ProtectedRoute 패턴으로 미인증 사용자 접근 차단',
          ],
          en: [
            'Header Drawer - Mobile hamburger menu Drawer component implementation',
            'Background scroll lock when Drawer opens via useBodyScrollLock hook',
            'Unauthenticated user access blocking via ProtectedRoute pattern',
          ],
        },
      },
      {
        category: { ko: '빌드 환경 최적화', en: 'Build Environment Optimization' },
        details: {
          ko: [
            'vite-plugin-svgr로 SVG를 React 컴포넌트로 활용',
            '@/ 경로 alias 설정으로 import 경로 간소화',
            'Vite HMR 기반 빠른 개발 환경 구성',
          ],
          en: [
            'SVG as React components via vite-plugin-svgr',
            'Simplified import paths with @/ path alias',
            'Fast development environment with Vite HMR',
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: { ko: '반응형 브레이크포인트 일관성 관리', en: 'Responsive Breakpoint Consistency Management' },
        problem: {
          ko: '각 컴포넌트마다 다른 브레이크포인트 하드코딩으로 특정 화면 크기에서 레이아웃 깨짐',
          en: 'Different hardcoded breakpoints in each component causing layout breaks at certain screen sizes',
        },
        solution: {
          ko: 'utils/theme.ts에 breakpoints와 media 객체를 정의하고 모든 컴포넌트에서 import하여 사용',
          en: 'Define breakpoints and media objects in utils/theme.ts and import in all components',
        },
        result: {
          ko: '모든 컴포넌트가 동일한 브레이크포인트 사용, 브레이크포인트 변경 시 한 곳만 수정',
          en: 'All components use same breakpoints, single point of modification for breakpoint changes',
        },
      },
      {
        title: { ko: '모바일 Drawer 메뉴 스크롤 잠금', en: 'Mobile Drawer Menu Scroll Lock' },
        problem: {
          ko: 'Drawer 열린 상태에서 배경 스크롤 가능, 메뉴 뒤로 콘텐츠 이동',
          en: 'Background scrollable when Drawer is open, content moves behind menu',
        },
        solution: {
          ko: 'useBodyScrollLock 커스텀 훅 구현. position fixed + 스크롤 위치 저장/복원',
          en: 'Implemented useBodyScrollLock custom hook. position fixed + scroll position save/restore',
        },
        result: {
          ko: 'Drawer 닫을 때 스크롤 위치가 원래대로 복원, 모든 브라우저에서 동작',
          en: 'Scroll position restored when Drawer closes, works in all browsers',
        },
      },
      {
        title: { ko: '이미지 스타일 중복 코드 리팩토링', en: 'Image Style Duplicate Code Refactoring' },
        problem: {
          ko: '동일한 이미지 스타일(비율 유지, object-fit)이 여러 컴포넌트에 중복',
          en: 'Same image styles (aspect ratio, object-fit) duplicated across multiple components',
        },
        solution: {
          ko: 'ResponsiveImage 공통 컴포넌트 추출. aspectRatio, borderRadius, objectFit props로 유연한 스타일링',
          en: 'Extracted ResponsiveImage common component. Flexible styling with aspectRatio, borderRadius, objectFit props',
        },
        result: {
          ko: '프로젝트 전체 이미지 스타일 통일, loading="lazy" 자동 적용으로 성능 최적화',
          en: 'Unified image styles across project, performance optimization with auto loading="lazy"',
        },
      },
    ],
    folderStructure: [
      {
        name: 'src/',
        children: [
          {
            name: 'assets/',
            children: [
              { name: 'icon/' },
              { name: 'image/' },
              { name: 'logo/' },
            ],
          },
          {
            name: 'components/',
            children: [
              { name: 'layout/' },
              { name: 'voting/' },
              { name: 'myPage/' },
              { name: 'table/' },
            ],
          },
          {
            name: 'page/',
            children: [
              { name: 'auth/' },
              { name: 'voting/' },
              { name: 'myPage/' },
            ],
          },
          {
            name: 'modal/',
            children: [
              { name: 'alert/' },
              { name: 'auth/' },
              { name: 'otp/' },
              { name: 'index.tsx' },
            ],
          },
          { name: 'service/' },
          {
            name: 'store/',
            children: [
              { name: 'authStore.ts' },
              { name: 'modalStore.ts' },
            ],
          },
          {
            name: 'lib/',
            children: [
              { name: 'api.ts' },
              { name: 'firebase/' },
              { name: 'socket/' },
            ],
          },
          {
            name: 'utils/',
            children: [
              { name: 'routes/' },
              { name: 'theme.ts' },
            ],
          },
          { name: 'types/' },
          { name: 'hook/' },
        ],
      },
    ],
  },
  {
    id: 'defense-platform',
    slug: 'defense-platform',
    title: {
      ko: '방위산업 장비 부품 거래 플랫폼',
      en: 'Defense Equipment Parts Trading Platform',
    },
    description: {
      ko: '방위산업 부품 거래를 지원하는 웹 애플리케이션으로, RDF 기반 시맨틱 웹 기술로 구현되었습니다.',
      en: 'A web application supporting defense industry parts trading, implemented with RDF-based semantic web technology.',
    },
    period: '2024.12 ~ 2025.01',
    role: {
      ko: '프론트엔드 개발',
      en: 'Frontend Development',
    },
    team: '2',
    category: 'freelance',
    techStack: ['React', 'TypeScript', 'MUI', 'Vite', 'React Query', 'MobX', 'i18next', 'Apache2', 'Ubuntu'],
    features: {
      ko: [
        'RDF 기반 Linked Data 필터링 (Faceted Navigation)',
        '동적 필터 그룹 생성',
        '리스트/그리드 뷰 전환',
        '리소스 상세 페이지 (탭 기반)',
        '다국어 지원 (한국어/영어)',
      ],
      en: [
        'RDF-based Linked Data filtering (Faceted Navigation)',
        'Dynamic filter group generation',
        'List/grid view toggle',
        'Resource detail page (tab-based)',
        'Multilingual support (Korean/English)',
      ],
    },
    responsibilities: [
      {
        category: { ko: '전체', en: 'Overall' },
        items: {
          ko: [
            'KODEX2 국방 지식 플랫폼 프론트엔드 전체 구현',
            'RDF/Linked Data 기반 데이터 아키텍처 설계',
            '다국어(한국어/영어) 시스템 전체 구축',
          ],
          en: [
            'KODEX2 defense knowledge platform full frontend implementation',
            'RDF/Linked Data based data architecture design',
            'Full multilingual (Korean/English) system development',
          ],
        },
      },
      {
        category: { ko: 'Faceted Navigation', en: 'Faceted Navigation' },
        items: {
          ko: [
            'RDF 데이터 → UI 데이터 변환 로직 구현 (564줄)',
            '동적 필터 그룹 생성 (카테고리별 자동 분류)',
            'MobX 기반 필터 상태 관리 (선택/해제/초기화)',
            '리스트/그리드 뷰 전환 + 페이지네이션',
          ],
          en: [
            'RDF data → UI data transformation logic (564 lines)',
            'Dynamic filter group generation (auto-categorization)',
            'MobX based filter state management (select/deselect/reset)',
            'List/grid view toggle + pagination',
          ],
        },
      },
      {
        category: { ko: '상태 관리 아키텍처', en: 'State Management Architecture' },
        items: {
          ko: [
            'MobX + React Query 하이브리드 패턴 설계',
            '서버 상태(API 캐싱) / 클라이언트 상태(필터) 분리',
            'Query Keys Factory 패턴으로 캐시 관리 체계화',
            'staleTime 5분 설정으로 불필요한 API 호출 방지',
          ],
          en: [
            'MobX + React Query hybrid pattern design',
            'Server state (API caching) / Client state (filter) separation',
            'Query Keys Factory pattern for cache management',
            'staleTime 5min setting to prevent unnecessary API calls',
          ],
        },
      },
      {
        category: { ko: '다국어 시스템', en: 'Multilingual System' },
        items: {
          ko: [
            '이중 API 엔드포인트 구조 설계 (api_ko, api_en)',
            '언어별 커스텀 훅 8개 구현 (useSearchKo/En, useFacetKo/En 등)',
            'i18next 기반 파일 번역 시스템 구축',
            'localStorage 언어 설정 영속화',
          ],
          en: [
            'Dual API endpoint structure design (api_ko, api_en)',
            '8 language-specific custom hooks (useSearchKo/En, useFacetKo/En, etc.)',
            'i18next file translation system',
            'localStorage language persistence',
          ],
        },
      },
    ],
    link: 'http://kodex2.eventpool.kr/',
    detailedDescription: {
      ko: 'KODEX2는 국방 관련 장비, 시설, 군사 정보를 RDF 기반 시맨틱 웹 기술로 제공하는 다국어(한국어/영어) 지식 플랫폼입니다. Faceted Navigation, 실시간 검색, 동적 필터링 등 고급 데이터 브라우징 기능을 제공합니다.',
      en: 'KODEX2 is a multilingual (Korean/English) knowledge platform providing defense equipment, facilities, and military information using RDF-based semantic web technology. Provides advanced data browsing features including Faceted Navigation, real-time search, and dynamic filtering.',
    },
    techImplementation: [
      {
        category: { ko: 'RDF 데이터 타입 시스템', en: 'RDF Data Type System' },
        details: {
          ko: [
            'JSON-LD 형식 데이터를 위한 제네릭 인터페이스 설계 (RDFString, RDFReference, FlexibleEntity)',
            'Type Guards 구현 (isRDFString, isRDFReference 등) 런타임 타입 검증',
            '564줄 복잡한 RDF → UI 데이터 변환 파이프라인',
            'RDF URI prefix 정리 유틸리티 함수 구현',
          ],
          en: [
            'Generic interface design for JSON-LD format data (RDFString, RDFReference, FlexibleEntity)',
            'Type Guards implementation (isRDFString, isRDFReference, etc.) runtime type verification',
            '564-line complex RDF → UI data transformation pipeline',
            'RDF URI prefix cleanup utility function implementation',
          ],
        },
      },
      {
        category: { ko: '하이브리드 상태 관리', en: 'Hybrid State Management' },
        details: {
          ko: [
            'MobX(클라이언트) + React Query(서버) 역할 분리',
            'staleTime 5분 설정으로 불필요한 API 호출 방지',
            'MobX observer로 필요한 컴포넌트만 리렌더링',
            'QUERY_KEYS Factory 패턴으로 쿼리 키 네임스페이스 체계화',
          ],
          en: [
            'MobX (client) + React Query (server) role separation',
            'Prevented unnecessary API calls with 5-minute staleTime',
            'Only necessary component re-renders with MobX observer',
            'QUERY_KEYS Factory pattern for query key namespace organization',
          ],
        },
      },
      {
        category: { ko: '다국어(i18n) 아키텍처', en: 'Multilingual (i18n) Architecture' },
        details: {
          ko: [
            '이중 API 엔드포인트 - 언어별 Axios 인스턴스 분리 (api_ko, api_en)',
            '언어별 커스텀 훅 8개 설계 (useSearchKo/En, useFacetKo/En 등)',
            'enabled 옵션으로 현재 언어에 해당하는 훅만 실행',
            'localStorage 기반 언어 설정 저장/복원',
          ],
          en: [
            'Dual API endpoints - Language-specific Axios instances (api_ko, api_en)',
            '8 language-specific custom hooks (useSearchKo/En, useFacetKo/En, etc.)',
            'Only current language hook executes via enabled option',
            'localStorage-based language setting save/restore',
          ],
        },
      },
      {
        category: { ko: '컴포넌트 설계', en: 'Component Design' },
        details: {
          ko: [
            '동적 탭 렌더링 - Type Guard + filter로 데이터 존재 탭만 표시',
            '반응형 헤더 - useRef + scroll 이벤트로 수평 스크롤 버튼 상태 관리',
            '검색 컴포넌트 - 포커스 시 width 확장 애니메이션 구현',
          ],
          en: [
            'Dynamic tab rendering - Show only data-present tabs with Type Guard + filter',
            'Responsive header - Horizontal scroll button state management via useRef + scroll event',
            'Search component - Width expansion animation on focus',
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: { ko: '다국어 API 엔드포인트 분기 처리', en: 'Multilingual API Endpoint Branching' },
        problem: {
          ko: '한국어/영어 언어별로 다른 API 서버를 호출해야 하는 요구사항',
          en: 'Requirement to call different API servers for Korean/English languages',
        },
        solution: {
          ko: '이중 Axios 인스턴스(api_ko, api_en) + 언어별 훅 분리(useFacetKo/En). enabled 옵션으로 현재 언어에 해당하는 훅만 실행',
          en: 'Dual Axios instances (api_ko, api_en) + language-specific hooks (useFacetKo/En). Only current language hook executes via enabled option',
        },
        result: {
          ko: '언어별 쿼리 키로 캐시 충돌 방지, React Query DevTools에서 언어별 쿼리 명확히 구분',
          en: 'Prevented cache collision with language-specific query keys, clear language distinction in React Query DevTools',
        },
      },
      {
        title: { ko: 'RDF 데이터 타입 안전 처리', en: 'RDF Data Type Safe Handling' },
        problem: {
          ko: 'RDF/JSON-LD 형식 API 응답에서 동적 프로퍼티 접근 시 런타임 에러 발생 가능',
          en: 'Possible runtime errors when accessing dynamic properties in RDF/JSON-LD format API responses',
        },
        solution: {
          ko: 'Type Guards 구현 (isRDFString, isRDFReference). 타입 좁히기로 안전한 프로퍼티 접근',
          en: 'Implemented Type Guards (isRDFString, isRDFReference). Safe property access via type narrowing',
        },
        result: {
          ko: 'TypeScript가 타입 좁히기 인식, 프로젝트 전체에서 동일 가드 재사용',
          en: 'TypeScript recognizes type narrowing, same guards reused throughout project',
        },
      },
      {
        title: { ko: '동적 탭 렌더링 with 타입 안전성', en: 'Dynamic Tab Rendering with Type Safety' },
        problem: {
          ko: '데이터 없는 탭도 렌더링되어 빈 UI 표시. 리소스 상세 페이지 탭에 영향',
          en: 'Tabs without data rendered showing empty UI. Affected resource detail page tabs',
        },
        solution: {
          ko: '조건부 객체 + filter + Type Guard 조합. (tab): tab is { label: string; panel: JSX.Element } => Boolean(tab)',
          en: 'Conditional object + filter + Type Guard combination. (tab): tab is { label: string; panel: JSX.Element } => Boolean(tab)',
        },
        result: {
          ko: 'filter 후 타입 추론 정확, 빈 탭 표시 안 됨으로 UX 개선',
          en: 'Accurate type inference after filter, improved UX with no empty tabs displayed',
        },
      },
      {
        title: { ko: '반응형 헤더 스크롤 상태 관리', en: 'Responsive Header Scroll State Management' },
        problem: {
          ko: '모바일 헤더 수평 스크롤에서 스크롤 버튼 표시 타이밍 부정확, 메모리 누수',
          en: 'Inaccurate scroll button display timing in mobile header horizontal scroll, memory leak',
        },
        solution: {
          ko: 'useRef + scroll 이벤트 + cleanup. useCallback으로 함수 재생성 방지, 부동소수점 오차 허용',
          en: 'useRef + scroll event + cleanup. Prevent function recreation with useCallback, allow floating point tolerance',
        },
        result: {
          ko: 'cleanup 함수로 이벤트 리스너 제거, behavior: "smooth" 스크롤로 부드러운 UX',
          en: 'Event listener removal via cleanup function, smooth UX with behavior: "smooth" scroll',
        },
      },
    ],
    folderStructure: [
      {
        name: 'apis/',
        children: [
          { name: 'QueryKeys.ts' },
          { name: 'axios.ts' },
          {
            name: 'ko/',
            children: [
              { name: 'useSearch.ts' },
              { name: 'useFacet.ts' },
              { name: 'useResource.ts' },
              { name: 'useSiteMap.ts' },
            ],
          },
          {
            name: 'en/',
            children: [
              { name: 'useSearch.ts' },
              { name: 'useFacet.ts' },
              { name: 'useResource.ts' },
              { name: 'useSiteMap.ts' },
            ],
          },
        ],
      },
      {
        name: 'components/',
        children: [
          { name: 'gnb/' },
          { name: 'Search.tsx' },
          { name: 'PageLayout.tsx' },
          { name: 'Footer.tsx' },
          { name: 'Loading.tsx' },
        ],
      },
      {
        name: 'pages/',
        children: [
          { name: 'home/' },
          { name: 'menuContents/' },
          { name: 'detail/' },
          { name: 'sitemap/' },
        ],
      },
      {
        name: 'stores/',
        children: [{ name: 'partsPageWrapper/' }],
      },
      {
        name: 'themes/',
        children: [
          { name: 'themes.ts' },
          { name: 'palette.ts' },
        ],
      },
      { name: 'types/' },
      { name: 'utils/' },
      { name: 'assets/' },
      { name: 'i18n.ts' },
    ],
  },
  {
    id: 'bible-distribution',
    slug: 'bible-distribution',
    title: {
      ko: 'BFK (Bibles For Korea)',
      en: 'BFK (Bibles For Korea)',
    },
    description: {
      ko: '한국인을 위한 성경 보급 단체의 공식 웹사이트입니다. 성경/소책자 신청, 블로그 콘텐츠 관리, 후원 시스템 및 관리자용 CMS를 제공합니다.',
      en: 'Official website for a Bible distribution organization for Koreans. Provides Bible/booklet requests, blog content management, donation system, and admin CMS.',
    },
    period: '2023.04 ~ 2023.09',
    role: {
      ko: '프론트엔드 개발',
      en: 'Frontend Development',
    },
    team: '2',
    category: 'freelance',
    techStack: ['React', 'TypeScript', 'Redux Toolkit', 'SWR', 'SCSS Modules', 'react-hook-form', 'react-quill', 'react-helmet-async', 'react-share'],
    features: {
      ko: [
        '블로그 시스템 (카테고리별 필터링, 키워드 검색, SNS 공유)',
        '관리자 CMS (블로그 CRUD, WYSIWYG 에디터)',
        '반응형 네비게이션 (데스크톱/모바일)',
        'SEO 최적화 (동적 메타태그)',
        '성경/소책자 신청 시스템',
      ],
      en: [
        'Blog system (category filtering, keyword search, SNS sharing)',
        'Admin CMS (blog CRUD, WYSIWYG editor)',
        'Responsive navigation (desktop/mobile)',
        'SEO optimization (dynamic meta tags)',
        'Bible/booklet request system',
      ],
    },
    responsibilities: [
      {
        category: { ko: '전체', en: 'Overall' },
        items: {
          ko: [
            'React + TypeScript 기반 웹 프론트엔드 전체 구현',
            '반응형 웹 디자인 (Desktop, Tablet, Mobile)',
            'PHP 백엔드 API 연동',
          ],
          en: [
            'Full React + TypeScript web frontend implementation',
            'Responsive web design (Desktop, Tablet, Mobile)',
            'PHP backend API integration',
          ],
        },
      },
      {
        category: { ko: '블로그 시스템', en: 'Blog System' },
        items: {
          ko: [
            'SWR 기반 데이터 패칭 및 캐싱 전략 설계',
            '카테고리/키워드 검색 기능 구현',
            '게시글 상세 페이지 및 SNS 공유 기능',
            '무한 스크롤/페이지네이션 구현',
          ],
          en: [
            'SWR-based data fetching and caching strategy design',
            'Category/keyword search feature implementation',
            'Post detail page and SNS sharing feature',
            'Infinite scroll/pagination implementation',
          ],
        },
      },
      {
        category: { ko: '관리자 시스템', en: 'Admin System' },
        items: {
          ko: [
            '로그인 인증 및 보호된 라우트 구현',
            'react-hook-form 기반 폼 유효성 검사',
            'react-quill WYSIWYG 에디터 통합',
            '복합 조건 검색 (날짜, 카테고리, 키워드)',
          ],
          en: [
            'Login authentication and protected route implementation',
            'react-hook-form based form validation',
            'react-quill WYSIWYG editor integration',
            'Complex condition search (date, category, keyword)',
          ],
        },
      },
      {
        category: { ko: '공통 컴포넌트', en: 'Common Components' },
        items: {
          ko: [
            '반응형 네비게이션 (햄버거 메뉴)',
            '재사용 가능한 페이지네이션 컴포넌트',
            'SEO 메타태그 컴포넌트',
            '로딩/에러/404 페이지',
          ],
          en: [
            'Responsive navigation (hamburger menu)',
            'Reusable pagination component',
            'SEO meta tag component',
            'Loading/error/404 pages',
          ],
        },
      },
      {
        category: { ko: '상태 관리', en: 'State Management' },
        items: {
          ko: [
            'Redux Toolkit 스토어 설계',
            '로그인 상태, 게시글 목록, 검색 조건 슬라이스 구현',
            'SWR과 Redux 간 데이터 동기화',
          ],
          en: [
            'Redux Toolkit store design',
            'Login state, post list, search condition slices implementation',
            'SWR and Redux data synchronization',
          ],
        },
      },
    ],
    link: 'https://www.biblesforkorea.org/',
    detailedDescription: {
      ko: 'BFK(Bibles For Korea)는 한국인을 위한 성경 보급 단체의 공식 웹사이트입니다. 성경/소책자 신청, 블로그 콘텐츠 관리, 후원 시스템을 제공하며, 관리자용 CMS(블로그 관리, 리소스 관리, 사용자 관리)를 포함합니다. SWR로 서버 데이터 캐싱 및 자동 재검증을, Redux Toolkit으로 클라이언트 상태를 관리하는 하이브리드 상태 관리 전략을 적용했습니다.',
      en: 'BFK (Bibles For Korea) is the official website for a Bible distribution organization for Koreans. It provides Bible/booklet requests, blog content management, and donation system, including an admin CMS for blog, resource, and user management. Applied hybrid state management with SWR for server data caching/revalidation and Redux Toolkit for client state.',
    },
    techImplementation: [
      {
        category: { ko: '상태 관리 전략', en: 'State Management Strategy' },
        details: {
          ko: [
            'SWR(서버 데이터) + Redux Toolkit(클라이언트 상태)로 역할 분리',
            'SWR 캐싱 전략: 블로그 데이터 자동 재검증, mutate로 수동 갱신',
            'Redux 슬라이스 설계: 도메인별 분리 (login, posts, categorySearch)',
            'react-hook-form으로 폼 유효성 검사 및 에러 처리',
          ],
          en: [
            'Role separation with SWR (server data) + Redux Toolkit (client state)',
            'SWR caching strategy: auto-revalidation for blog data, manual refresh with mutate',
            'Redux slice design: domain-based separation (login, posts, categorySearch)',
            'Form validation and error handling with react-hook-form',
          ],
        },
      },
      {
        category: { ko: '컴포넌트 설계 패턴', en: 'Component Design Patterns' },
        details: {
          ko: [
            'React.lazy + Suspense로 코드 스플리팅',
            'Container/Presentational 패턴 적용',
            'Pagination, Loading, Error, NotFound 공통 컴포넌트화',
            'SCSS Modules로 클래스명 충돌 방지',
          ],
          en: [
            'Code splitting with React.lazy + Suspense',
            'Container/Presentational pattern applied',
            'Common components: Pagination, Loading, Error, NotFound',
            'Class name collision prevention with SCSS Modules',
          ],
        },
      },
      {
        category: { ko: 'SEO & 성능 최적화', en: 'SEO & Performance Optimization' },
        details: {
          ko: [
            'react-helmet-async로 페이지별 SEO 메타태그 설정',
            '페이지별 Lazy Loading으로 초기 번들 사이즈 감소',
            '페이지 이동 시 scrollTop 자동 실행',
          ],
          en: [
            'Page-specific SEO meta tags with react-helmet-async',
            'Initial bundle size reduction with page-level Lazy Loading',
            'Auto scrollTop on page navigation',
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: { ko: 'SWR과 Redux 간 데이터 동기화 문제', en: 'SWR and Redux Data Synchronization Issue' },
        problem: {
          ko: 'SWR로 패칭한 검색 결과 데이터가 다른 컴포넌트(상세 페이지)에서 접근 불가. SWR 캐시는 동일 키로 호출해야만 공유됨.',
          en: 'Search result data fetched with SWR inaccessible from other components (detail page). SWR cache only shared with identical keys.',
        },
        solution: {
          ko: 'SWR 데이터를 Redux로 동기화. useEffect에서 SWR 데이터 수신 후 dispatch(postsAction())으로 전역 상태 저장. 다른 컴포넌트에서 useSelector로 접근.',
          en: 'Synchronized SWR data to Redux. After receiving SWR data in useEffect, saved to global state with dispatch(postsAction()). Access from other components via useSelector.',
        },
        result: {
          ko: '검색 조건과 무관하게 전역 접근 가능. Redux DevTools로 상태 변화 추적 용이. 이미 Redux 사용 중이므로 상태 관리 일원화.',
          en: 'Global access regardless of search conditions. Easy state change tracking with Redux DevTools. Unified state management as Redux already in use.',
        },
      },
      {
        title: { ko: '게시글 상세 페이지 새로고침 시 데이터 손실', en: 'Data Loss on Post Detail Page Refresh' },
        problem: {
          ko: '게시글 상세 페이지에서 F5 새로고침 시 Redux 상태 초기화로 게시글 데이터 없음, 404 표시.',
          en: 'On F5 refresh of post detail page, Redux state reset causes missing post data, showing 404.',
        },
        solution: {
          ko: 'App.tsx에서 전역 데이터 로드. 앱 마운트 시 SWR로 전체 게시글 데이터 패칭 후 Redux에 저장. 어느 URL로 접근해도 데이터 보장.',
          en: 'Global data load in App.tsx. Fetch all posts with SWR on app mount and save to Redux. Data guaranteed regardless of access URL.',
        },
        result: {
          ko: '어느 URL로 접근해도 데이터 보장. 새로고침 후에도 정상 동작. 추가 라이브러리(redux-persist) 없이 해결.',
          en: 'Data guaranteed for any URL access. Normal operation after refresh. Solved without additional libraries (redux-persist).',
        },
      },
      {
        title: { ko: '반응형 네비게이션 메뉴 토글 상태 관리', en: 'Responsive Navigation Menu Toggle State Management' },
        problem: {
          ko: '모바일에서 메뉴 열고 페이지 이동 시 메뉴가 열린 상태로 유지되는 문제.',
          en: 'Menu stays open after page navigation on mobile.',
        },
        solution: {
          ko: 'useEffect로 URL 파라미터(categoryName) 변경 감지 후 메뉴 상태 초기화. setShowInput(false), setSubMenu(false) 실행.',
          en: 'Detect URL parameter (categoryName) change with useEffect and reset menu state. Execute setShowInput(false), setSubMenu(false).',
        },
        result: {
          ko: 'URL 파라미터 변경 시 자동으로 메뉴 닫힘. 새로운 Link 추가 시 별도 처리 불필요. 모든 페이지 이동에 동일하게 적용.',
          en: 'Menu closes automatically on URL parameter change. No separate handling needed for new Links. Applies uniformly to all page navigations.',
        },
      },
      {
        title: { ko: '인증되지 않은 사용자의 관리자 페이지 접근', en: 'Unauthenticated User Access to Admin Pages' },
        problem: {
          ko: 'URL 직접 입력으로 /admin/* 접근 시 로그인 없이 관리자 페이지 접근 가능.',
          en: 'Admin pages accessible without login when directly entering /admin/* URL.',
        },
        solution: {
          ko: '컴포넌트 내 조건부 리다이렉트. useSelector로 로그인 상태 확인 후 !(id && pw)면 navigate("/admin/login") 실행.',
          en: 'Conditional redirect within component. Check login state with useSelector, execute navigate("/admin/login") if !(id && pw).',
        },
        result: {
          ko: '관리자 페이지가 3개뿐이라 중복 최소화. 빠른 구현으로 MVP 개발 속도 확보.',
          en: 'Minimal duplication with only 3 admin pages. Fast implementation for MVP development speed.',
        },
      },
    ],
    folderStructure: [
      {
        name: 'components/',
        children: [
          { name: 'AppLayout.tsx' },
          { name: 'Navigation.tsx' },
          { name: 'Pagination.tsx' },
          { name: 'MetaTag.tsx' },
          { name: 'Loading.tsx' },
          { name: 'Error.tsx' },
          { name: 'NotFound.tsx' },
        ],
      },
      {
        name: 'pages/',
        children: [
          { name: 'Home/' },
          { name: 'Blog/' },
          { name: 'Admin/' },
          { name: 'Bible/' },
          { name: 'Books/' },
          { name: 'About/' },
        ],
      },
      {
        name: 'redux/',
        children: [
          { name: 'configureStore.ts' },
          {
            name: 'reducer/',
            children: [
              { name: 'admin/' },
              { name: 'pages/Blog/' },
            ],
          },
        ],
      },
      {
        name: 'modules/',
        children: [
          { name: 'components.ts' },
          { name: 'adminBlog.ts' },
        ],
      },
      {
        name: 'styles/',
        children: [
          { name: 'components/' },
          { name: 'pages/' },
        ],
      },
    ],
  },
  {
    id: 'coffee-admin',
    slug: 'coffee-admin',
    title: {
      ko: '농부 나무 관리 어드민 시스템',
      en: 'Coffee Admin Dashboard',
    },
    description: {
      ko: '미얀마/라오스 지역 커피 농장 공급망을 관리하는 어드민 대시보드입니다.',
      en: 'An admin dashboard for managing coffee farm supply chain in Myanmar/Laos region.',
    },
    period: '2024.08 ~ 2024.11',
    role: {
      ko: '풀스택 개발 (프론트엔드 중심)',
      en: 'Full-Stack Development (Frontend-focused)',
    },
    team: '3',
    category: 'freelance',
    techStack: ['React 19', 'TypeScript', 'Vite', 'MUI', 'React Query', 'React Hook Form', 'i18next', '@react-google-maps/api', 'Vercel'],
    features: {
      ko: [
        '승인 워크플로우 시스템 (면장/농부/구매/섹션 등록/수정/삭제)',
        '면장(Village Head) 관리',
        'Google Maps 연동 지역 관리',
        '다국어 지원 (한국어/라오어)',
        '역할 기반 라우팅',
      ],
      en: [
        'Approval workflow system (village head/farmer/purchase/section registration/edit/delete)',
        'Village Head management',
        'Google Maps integrated location management',
        'Multilingual support (Korean/Lao)',
        'Role-based routing',
      ],
    },
    responsibilities: [
      {
        category: { ko: '프로젝트 초기 세팅', en: 'Project Initial Setup' },
        items: {
          ko: [
            'React + TypeScript + Vite 기반 프로젝트 환경 구성',
            'Prettier, ESLint, Husky 설정 (commit 시 코드 품질 검사)',
            'React Router DOM 기반 라우팅 구조 설계',
            'MUI 기반 테마 및 팔레트 설정',
          ],
          en: [
            'React + TypeScript + Vite project environment setup',
            'Prettier, ESLint, Husky setup (code quality check on commit)',
            'React Router DOM based routing structure design',
            'MUI based theme and palette setup',
          ],
        },
      },
      {
        category: { ko: '공통 컴포넌트 시스템', en: 'Common Component System' },
        items: {
          ko: [
            'Input, Textarea, Select, Button 등 폼 관련 공통 컴포넌트 구현',
            'React Hook Form 적용 (모든 input 컴포넌트 통합)',
            'Table 공통 컴포넌트 구현 (loading, pagination 지원)',
            'Modal 공통 컴포넌트 및 Context 기반 상태 관리',
            'Title, Label 등 레이아웃 공통 컴포넌트 구현',
          ],
          en: [
            'Input, Textarea, Select, Button form common components',
            'React Hook Form integration (all input components)',
            'Table common component (loading, pagination support)',
            'Modal common component and Context based state management',
            'Title, Label layout common components',
          ],
        },
      },
      {
        category: { ko: '레이아웃 구조', en: 'Layout Structure' },
        items: {
          ko: [
            'GNB(Global Navigation Bar) 컴포넌트 구현',
            'LNB(Left Navigation Bar/Sidebar) 컴포넌트 구현',
            '권한별 LNB 메뉴 분기 처리 (ADMIN/부관리자)',
            '전체 레이아웃 Outlet 스크롤 및 스타일 적용',
          ],
          en: [
            'GNB (Global Navigation Bar) component',
            'LNB (Left Navigation Bar/Sidebar) component',
            'Permission-based LNB menu branching (ADMIN/vice-admin)',
            'Full layout Outlet scroll and style application',
          ],
        },
      },
      {
        category: { ko: '페이지 UI 구현', en: 'Page UI Implementation' },
        items: {
          ko: [
            '로그인/계정 생성/내 정보 수정 페이지 레이아웃',
            '면장 목록/상세/등록/수정 페이지 레이아웃',
            '농부 목록/상세/등록 페이지 레이아웃',
            '부관리자 목록/상세/수정 페이지 레이아웃',
            '요청 목록/상세 페이지 (승인/거절/삭제 기능 포함)',
            '지역/섹션 관리 페이지 레이아웃',
            '나무 수령/수매 내역 목록 페이지',
          ],
          en: [
            'Login/account create/profile edit page layouts',
            'Village head list/detail/register/edit page layouts',
            'Farmer list/detail/register page layouts',
            'Vice-admin list/detail/edit page layouts',
            'Request list/detail pages (approve/reject/delete features)',
            'Location/section management page layouts',
            'Tree receipt/purchase history list pages',
          ],
        },
      },
      {
        category: { ko: 'API 연동', en: 'API Integration' },
        items: {
          ko: [
            '로그인/로그아웃 API 연동',
            '계정 생성 API 연동 (지역 정보 Select 연동)',
            '면장 CRUD API 연동 (목록/상세/등록/수정)',
            '농부 CRUD API 연동 (목록/상세/등록)',
            '부관리자 API 연동 (목록/상세/수정)',
            '요청 관리 API 연동 (목록/상세/승인/거절/삭제, 필터링, Pagination)',
            '지역/섹션 API 연동 (목록/등록/삭제)',
            '나무 구매 내역/수매 내역 등록 API 연동',
          ],
          en: [
            'Login/logout API integration',
            'Account creation API (region info Select integration)',
            'Village head CRUD API (list/detail/register/edit)',
            'Farmer CRUD API (list/detail/register)',
            'Vice-admin API (list/detail/edit)',
            'Request management API (list/detail/approve/reject/delete, filtering, pagination)',
            'Location/section API (list/register/delete)',
            'Tree purchase/receipt history API',
          ],
        },
      },
      {
        category: { ko: '인증 시스템', en: 'Authentication System' },
        items: {
          ko: [
            'accessToken 기반 인증 처리',
            '토큰 만료 시 자동 로그아웃 처리',
            '미인증 사용자 로그인 페이지 리다이렉트',
            '권한별 UI 분기 처리 (ADMIN/부관리자-농림부)',
          ],
          en: [
            'accessToken based authentication',
            'Auto-logout on token expiration',
            'Unauthenticated user login page redirect',
            'Permission-based UI branching (ADMIN/vice-admin-forestry)',
          ],
        },
      },
      {
        category: { ko: '외부 서비스 연동', en: 'External Service Integration' },
        items: {
          ko: [
            'Google Maps API 연동 (미얀마 지역 선택 지원)',
            'Toast 알림 시스템 적용 (react-toastify)',
          ],
          en: [
            'Google Maps API integration (Myanmar region selection)',
            'Toast notification system (react-toastify)',
          ],
        },
      },
      {
        category: { ko: '다국어 지원', en: 'Multilingual Support' },
        items: {
          ko: [
            '다국어 지원 기능 구현 (라오스어 포함)',
          ],
          en: [
            'Multilingual support implementation (Lao language included)',
          ],
        },
      },
      {
        category: { ko: '배포/인프라', en: 'Deployment/Infrastructure' },
        items: {
          ko: [
            'Vercel 배포 설정 (vercel.json, rewrite 설정)',
            '백엔드 API Proxy 설정 (CORS 해결)',
            'GitHub Actions 워크플로우 작성 (fork된 레포로 자동 push)',
          ],
          en: [
            'Vercel deployment setup (vercel.json, rewrite config)',
            'Backend API Proxy setup (CORS resolution)',
            'GitHub Actions workflow (auto push to forked repo)',
          ],
        },
      },
    ],
    detailedDescription: {
      ko: '미얀마/라오스 지역 커피 농장 공급망을 관리하는 어드민 대시보드입니다. 면장(Village Head) 관리, 농부(Farmer) 관리, 커피 나무 거래, 구매 승인 워크플로우 등의 기능을 제공합니다.',
      en: 'An admin dashboard for managing coffee farm supply chain in Myanmar/Laos region. Provides features including Village Head management, Farmer management, coffee tree transactions, and purchase approval workflows.',
    },
    techImplementation: [
      {
        category: { ko: '상태 관리 전략', en: 'State Management Strategy' },
        details: {
          ko: [
            'React Hook Form으로 비제어 컴포넌트 기반 폼 성능 최적화',
            'Context API로 Dialog, Auth 상태 전역 관리',
            'React Query 캐시 무효화로 CRUD 후 목록 동기화',
            '요청 목록 필터링 상태 관리 및 Pagination 연동',
          ],
          en: [
            'Form performance optimization with uncontrolled component pattern via React Hook Form',
            'Global state management for Dialog, Auth via Context API',
            'List sync after CRUD via React Query cache invalidation',
            'Request list filtering state management and Pagination integration',
          ],
        },
      },
      {
        category: { ko: 'API 계층 설계', en: 'API Layer Design' },
        details: {
          ko: [
            '면장/농부/부관리자/요청/지역/섹션/나무 등 도메인별 API 분리',
            'Axios 인터셉터로 토큰 주입 및 401 에러 시 자동 로그아웃 처리',
            'Vercel rewrite 설정으로 CORS 문제 해결',
            'react-toastify로 API 실패 시 사용자 알림 통합',
          ],
          en: [
            'Domain-specific API separation for village head/farmer/admin/request/region/section/tree',
            'Token injection and auto-logout on 401 error via Axios interceptor',
            'CORS resolution via Vercel rewrite settings',
            'User notification integration on API failure via react-toastify',
          ],
        },
      },
      {
        category: { ko: '외부 서비스 연동', en: 'External Service Integration' },
        details: {
          ko: [
            'Google Maps API 연동 (미얀마 지역 지도 표시 및 좌표 선택)',
            '한국어/라오스어 다국어 지원 기능 구현',
            '이미지/PDF 파일 업로드 및 미리보기 컴포넌트 구현',
          ],
          en: [
            'Google Maps API integration (Myanmar map display and coordinate selection)',
            'Korean/Lao multilingual support implementation',
            'Image/PDF file upload and preview component implementation',
          ],
        },
      },
      {
        category: { ko: '인증/보안 구현', en: 'Authentication/Security Implementation' },
        details: {
          ko: [
            'accessToken 기반 JWT 인증 처리',
            '토큰 만료 시 자동 로그아웃 + 로그인 페이지 리다이렉트',
            'ADMIN/부관리자 권한에 따른 LNB 메뉴 및 버튼 분기 처리',
          ],
          en: [
            'JWT authentication via accessToken',
            'Auto-logout + login page redirect on token expiration',
            'LNB menu and button branching based on ADMIN/sub-admin permissions',
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: { ko: 'Google Maps 미얀마 지역 선택 제한', en: 'Google Maps Myanmar Region Selection Restriction' },
        problem: {
          ko: 'Google Maps Places Autocomplete에서 미얀마 지역 주소 검색 시 결과가 나타나지 않음',
          en: 'Myanmar region address search returns no results in Google Maps Places Autocomplete',
        },
        solution: {
          ko: '국가 선택 드롭다운 추가 + setComponentRestrictions로 동적으로 국가 제한 업데이트',
          en: 'Added country selection dropdown + dynamically update country restriction via setComponentRestrictions',
        },
        result: {
          ko: '사용자가 필요에 따라 국가 전환 가능, 향후 라오스 등 다른 국가 추가 용이',
          en: 'Users can switch countries as needed, easy to add other countries like Laos in future',
        },
      },
      {
        title: { ko: 'Vercel 배포 시 CORS 에러', en: 'CORS Error on Vercel Deployment' },
        problem: {
          ko: 'Vercel 배포 후 백엔드 API 호출 시 CORS policy 에러로 모든 API 요청 실패',
          en: 'All API requests fail due to CORS policy error when calling backend API after Vercel deployment',
        },
        solution: {
          ko: 'vercel.json에 rewrites 설정으로 /api 경로를 백엔드 서버로 프록시, baseURL을 상대 경로로 변경',
          en: 'Proxy /api path to backend server via rewrites in vercel.json, changed baseURL to relative path',
        },
        result: {
          ko: '백엔드 수정 없이 프론트엔드만으로 해결, 실제 백엔드 URL이 클라이언트에 노출되지 않음',
          en: 'Resolved with frontend only without backend modification, actual backend URL not exposed to client',
        },
      },
      {
        title: { ko: '토큰 만료 시 무한 API 재시도 문제', en: 'Infinite API Retry on Token Expiration' },
        problem: {
          ko: 'Access Token 만료 후 API 호출 시 401 에러 발생하나 사용자가 세션 만료를 인지하지 못함',
          en: '401 error on API call after Access Token expiration, but user unaware of session expiration',
        },
        solution: {
          ko: 'Axios 인터셉터에서 401 + 특정 에러 코드(A002) + 메시지로 토큰 만료만 정확히 캐치. 쿠키 제거 후 로그인 페이지로 강제 이동',
          en: 'Catch only token expiration in Axios interceptor via 401 + specific error code (A002) + message. Remove cookies and force redirect to login page',
        },
        result: {
          ko: '만료된 토큰으로 지속적인 요청 방지, code + message로 토큰 만료만 정확히 캐치',
          en: 'Prevented continuous requests with expired token, accurately catch only token expiration via code + message',
        },
      },
      {
        title: { ko: '권한별 LNB 메뉴 미분기 문제', en: 'LNB Menu Not Branching by Permission' },
        problem: {
          ko: '부관리자(농림부/한국지사) 로그인 시 모든 역할에 동일한 메뉴 노출, 권한 없는 페이지 접근 가능',
          en: 'All roles see same menu when sub-admin (Agriculture Ministry/Korea Branch) logs in, can access unauthorized pages',
        },
        solution: {
          ko: '역할별 LNB 데이터 분리 (Record<TRole, TLnbItem[]>). ADMIN, VICE_ADMIN_AGRICULTURE_MINISTRY_OFFICER 등 역할별 메뉴 구조 정의',
          en: 'Separate LNB data by role (Record<TRole, TLnbItem[]>). Define menu structure per role for ADMIN, VICE_ADMIN_AGRICULTURE_MINISTRY_OFFICER, etc.',
        },
        result: {
          ko: '역할별 메뉴 구조가 한눈에 파악 가능, TypeScript Record로 역할 누락 방지',
          en: 'Menu structure by role visible at a glance, prevent role omission via TypeScript Record',
        },
      },
      {
        title: { ko: 'React Query 캐시로 인한 데이터 불일치 문제', en: 'Data Inconsistency Due to React Query Cache' },
        problem: {
          ko: '면장/농부/섹션 등록/삭제 후 목록 페이지에서 변경 사항이 반영되지 않음 (새로고침 필요)',
          en: 'Changes not reflected in list page after village head/farmer/section create/delete (refresh required)',
        },
        solution: {
          ko: 'onSuccess에서 invalidateQueries로 관련 쿼리 캐시 무효화. QUERY_KEYS 상수로 일관된 키 관리',
          en: 'Invalidate related query cache via invalidateQueries in onSuccess. Consistent key management via QUERY_KEYS constants',
        },
        result: {
          ko: '데이터 변경 시점에만 캐시 무효화, 불필요한 API 호출 최소화',
          en: 'Cache invalidation only on data change, minimized unnecessary API calls',
        },
      },
    ],
    folderStructure: [
      {
        name: 'apis/',
        children: [
          { name: 'Axios.ts' },
          { name: 'QUERY_KEYS.ts' },
          { name: 'AppUser/' },
          { name: 'Approval/' },
          { name: 'Area/' },
          { name: 'Farmer/' },
          { name: 'TreeTransaction/' },
        ],
      },
      {
        name: 'components/',
        children: [
          { name: 'AddPhoto.tsx' },
          { name: 'Table.tsx' },
          { name: 'CustomDatePicker.tsx' },
          { name: 'LabelAndInput.tsx' },
          { name: 'DialogProvider.tsx' },
        ],
      },
      { name: 'hooks/' },
      {
        name: 'locales/',
        children: [
          { name: 'ko/translation.json' },
          { name: 'lo/translation.json' },
        ],
      },
      {
        name: 'pages/',
        children: [
          { name: 'accounts/' },
          { name: 'approval/' },
          { name: 'farmer/' },
          { name: 'locations/' },
          { name: 'villageHead/' },
        ],
      },
      {
        name: 'routers/',
        children: [
          { name: 'Router.tsx' },
          { name: 'Layout.tsx' },
        ],
      },
      { name: 'themes/' },
      { name: 'typings/' },
      { name: 'utils/' },
    ],
  },
];
