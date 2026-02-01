import { Project } from "@/types";

export const projects: Project[] = [
  // Company Projects
  {
    id: "soulbridge",
    slug: "soulbridge",
    title: {
      ko: "솔브릿지 - 시니어 기관 관리 시스템",
      en: "SoulBridge - Senior Care Management System",
    },
    description: {
      ko: "요양·돌봄 조직을 위한 관리자 웹 플랫폼으로, 보호사·보호자·기관 관리와 업무 흐름을 한 곳에서 운영할 수 있도록 기획된 프로젝트입니다.",
      en: "An admin web platform for care organizations, designed to manage caregivers, guardians, and institutional operations in one place.",
    },
    period: "2025.09 ~ 2025.12",
    role: {
      ko: "풀스택 개발 (프론트엔드 + 백엔드)",
      en: "Full-Stack Development (Frontend + Backend)",
    },
    team: "5",
    category: "company",
    company: "DoublT",
    techStack: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Nest.js",
      "Fastify",
      "Prisma",
      "PostgreSQL",
      "BullMQ",
      "FCM",
      "React Query",
      "MobX",
      "Storybook",
    ],
    features: {
      ko: [
        "관리자 전체 화면 Frontend 구현",
        "관리자 전역 레이아웃/권한 가드",
        "분석 통계 화면(일/주/월 지표) 설계·구현",
        "Nest.js 기반 BE CRUD api 구축",
        "BullMQ 기반 백그라운드 작업 처리",
        "FCM 푸시 알림 시스템 구현",
      ],
      en: [
        "Full admin screen Frontend implementation",
        "Admin global layout/permission guard",
        "Analytics dashboard (daily/weekly/monthly metrics) design and implementation",
        "Nest.js based BE CRUD API development",
        "BullMQ based background job processing",
        "FCM push notification system implementation",
      ],
    },
    responsibilities: [
      {
        category: { ko: "전체", en: "Overall" },
        items: {
          ko: [
            "전체 프로젝트 풀스택 참여",
            "React 19 + TypeScript 기반 웹 프론트엔드 전체 구현",
            "NestJS + Fastify 백엔드 API 서버 구축",
            "Prisma 스키마 설계",
          ],
          en: [
            "Full-stack participation in entire project",
            "Full web frontend implementation with React 19 + TypeScript",
            "NestJS + Fastify backend API server development",
            "Prisma schema design",
          ],
        },
      },
      {
        category: { ko: "인증 시스템", en: "Authentication System" },
        items: {
          ko: [
            "Better Auth 기반 OAuth 로그인 (Google, Kakao)",
            "JWT 토큰 인증 (모바일/API용) + 쿠키 세션 인증 (웹용)",
            "토큰 자동 갱신 (axios interceptor, _retry 플래그로 무한 루프 방지)",
            "역할 기반 접근 제어 (INSTITUTION_ADMIN, CAREGIVER, GUARDIAN, ADMIN)",
          ],
          en: [
            "Better Auth based OAuth login (Google, Kakao)",
            "JWT token authentication (mobile/API) + cookie session authentication (web)",
            "Automatic token refresh (axios interceptor, _retry flag to prevent infinite loop)",
            "Role-based access control (INSTITUTION_ADMIN, CAREGIVER, GUARDIAN, ADMIN)",
          ],
        },
      },
      {
        category: {
          ko: "시니어 케어로그 시스템",
          en: "Senior Care Log System",
        },
        items: {
          ko: [
            "음성 녹음 → AI 분석 → 케어로그(돌봄 일지) 생성 파이프라인",
            "BullMQ 기반 비동기 오디오 분석 큐 처리",
            "OpenAI Whisper STT + GPT 요약 연동",
            "일지 CRUD + 필터링/검색 API",
          ],
          en: [
            "Voice recording → AI analysis → Care log creation pipeline",
            "BullMQ based async audio analysis queue processing",
            "OpenAI Whisper STT + GPT summary integration",
            "Care log CRUD + filtering/search API",
          ],
        },
      },
      {
        category: {
          ko: "보호사 출퇴근 관리 시스템",
          en: "Caregiver Attendance Management",
        },
        items: {
          ko: [
            "출퇴근 체크인/체크아웃 UI 및 API",
            "근무 수정 요청/승인 워크플로우 전체 구현",
            "부서별 출퇴근 통계",
          ],
          en: [
            "Check-in/out UI and API",
            "Work modification request/approval workflow full implementation",
            "Department-wise attendance statistics",
          ],
        },
      },
      {
        category: { ko: "파일 업로드", en: "File Upload" },
        items: {
          ko: [
            "AWS S3 Presigned URL 방식 구현 (서버 부담 최소화)",
            "오디오 파일/프로필 이미지 업로드 지원",
            "S3 URL 유효성 검증 (NestJS Pipe)",
          ],
          en: [
            "AWS S3 Presigned URL implementation (minimizing server load)",
            "Audio file/profile image upload support",
            "S3 URL validation (NestJS Pipe)",
          ],
        },
      },
      {
        category: { ko: "알림 시스템", en: "Notification System" },
        items: {
          ko: [
            "FCM 푸시 알림 발송 (BullMQ 비동기 처리)",
            "data-only 메시지로 백그라운드 알림 처리",
            "알림 히스토리 관리 API",
          ],
          en: [
            "FCM push notification (BullMQ async processing)",
            "Background notification handling with data-only messages",
            "Notification history management API",
          ],
        },
      },
      {
        category: { ko: "초대 시스템", en: "Invitation System" },
        items: {
          ko: [
            "자체 딥링크 구현 (Branch.io 대체)",
            "암호화된 초대 토큰 생성/검증",
            "보호자 초대 플로우 구현",
          ],
          en: [
            "Custom deep link implementation (Branch.io alternative)",
            "Encrypted invitation token generation/verification",
            "Guardian invitation flow implementation",
          ],
        },
      },
    ],
    detailedDescription: {
      ko: "솔브릿지는 요양·돌봄 조직을 위한 B2B SaaS 솔루션입니다. 보호사 배정, 보호자 관리, 기관별 대시보드, 업무 통계 등 다양한 기능을 제공합니다. React 19의 최신 기능과 Nest.js의 안정적인 백엔드 아키텍처를 결합하여 엔터프라이즈급 서비스를 구현했습니다.",
      en: "SoulBridge is a B2B SaaS solution for care organizations. It provides various features including caregiver assignment, guardian management, institution dashboards, and work statistics. Combined React 19 latest features with Nest.js stable backend architecture for enterprise-level service.",
    },
    techImplementation: [
      {
        category: { ko: "Core - Frontend", en: "Core - Frontend" },
        details: {
          ko: [
            "React 19.1.1 - 최신 기능(Suspense, Concurrent) 활용, 빠른 렌더링",
            "TypeScript 5.8.3 - 타입 안정성으로 런타임 에러 방지",
            "Vite 7.1.2 - 빠른 HMR + 빌드, SWC 컴파일러",
          ],
          en: [
            "React 19.1.1 - Utilize latest features (Suspense, Concurrent), fast rendering",
            "TypeScript 5.8.3 - Type safety prevents runtime errors",
            "Vite 7.1.2 - Fast HMR + build, SWC compiler",
          ],
        },
      },
      {
        category: { ko: "Core - Backend", en: "Core - Backend" },
        details: {
          ko: [
            "NestJS 10.4.4 - DI 기반 모듈 구조, 강력한 미들웨어/가드",
            "Fastify 4.28 - Express 대비 2-3배 빠른 처리 속도",
            "Prisma 6.16.3 - 타입 안전 ORM, 스키마 기반 마이그레이션 (32개 모델 + 26개 Enum)",
          ],
          en: [
            "NestJS 10.4.4 - DI-based module structure, powerful middleware/guards",
            "Fastify 4.28 - 2-3x faster processing than Express",
            "Prisma 6.16.3 - Type-safe ORM, schema-based migration (32 models + 26 Enums)",
          ],
        },
      },
      {
        category: { ko: "상태 관리 & 데이터", en: "State Management & Data" },
        details: {
          ko: [
            "React Query (TanStack) - 서버 상태 관리 (캐싱, 백그라운드 동기화)",
            "MobX - 클라이언트 상태 (모달, UI 상태)",
            "PostgreSQL (Supabase) - 클라우드 데이터베이스",
            "Redis - 캐싱, BullMQ 큐 저장소",
          ],
          en: [
            "React Query (TanStack) - Server state management (caching, background sync)",
            "MobX - Client state (modal, UI state)",
            "PostgreSQL (Supabase) - Cloud database",
            "Redis - Caching, BullMQ queue storage",
          ],
        },
      },
      {
        category: {
          ko: "실시간 & 백그라운드 처리",
          en: "Real-time & Background Processing",
        },
        details: {
          ko: [
            "FCM - 푸시 알림 (케어로그 생성, 긴급 호출)",
            "BullMQ - 백그라운드 작업 (이메일, SMS, FCM, AI 리포트) 4개 큐 운영",
            "Dual-Mode Bootstrap - 동일 코드베이스로 API 서버/백그라운드 워커 모드 분리",
          ],
          en: [
            "FCM - Push notifications (carelog creation, emergency calls)",
            "BullMQ - Background jobs (email, SMS, FCM, AI report) 4 queues",
            "Dual-Mode Bootstrap - API server/background worker mode separation in same codebase",
          ],
        },
      },
      {
        category: {
          ko: "외부 서비스 연동",
          en: "External Service Integration",
        },
        details: {
          ko: [
            "AWS S3 - 파일 저장 (Presigned URL 패턴)",
            "AWS Transcribe - 음성-텍스트 변환",
            "OpenAI API - AI 케어 리포트 생성",
            "Firebase FCM - 푸시 알림",
            "Aligo - SMS 인증",
          ],
          en: [
            "AWS S3 - File storage (Presigned URL pattern)",
            "AWS Transcribe - Speech-to-text conversion",
            "OpenAI API - AI care report generation",
            "Firebase FCM - Push notifications",
            "Aligo - SMS verification",
          ],
        },
      },
      {
        category: { ko: "DevOps & 모니터링", en: "DevOps & Monitoring" },
        details: {
          ko: [
            "Docker - 컨테이너화 (멀티스테이지 빌드)",
            "PM2 - 프로세스 관리 (클러스터 모드)",
            "Sentry - 에러 트래킹",
            "Prometheus + Grafana - 메트릭 모니터링",
          ],
          en: [
            "Docker - Containerization (multi-stage build)",
            "PM2 - Process management (cluster mode)",
            "Sentry - Error tracking",
            "Prometheus + Grafana - Metrics monitoring",
          ],
        },
      },
      {
        category: {
          ko: "API 계층 설계 (Frontend)",
          en: "API Layer Design (Frontend)",
        },
        details: {
          ko: [
            "Axios 인터셉터 - 응답 데이터 자동 언래핑, 토큰 자동 갱신",
            "쿼리 키 중앙 관리 - QueryKeys.ts(343줄)에서 14개 도메인 쿼리 키 관리",
            "타입 안전한 API 호출 - 모든 API 함수에 제네릭 타입 적용",
          ],
          en: [
            "Axios interceptor - Auto unwrap response data, auto token refresh",
            "Centralized query keys - 14 domain query keys managed in QueryKeys.ts (343 lines)",
            "Type-safe API calls - Generic types applied to all API functions",
          ],
        },
      },
      {
        category: { ko: "Guard 패턴 (Backend)", en: "Guard Pattern (Backend)" },
        details: {
          ko: [
            "AuthGuard + RolesGuard 조합으로 전역 인증 + 역할 기반 접근 제어",
            "커스텀 @Roles() 데코레이터로 컨트롤러별 권한 설정",
            "프론트엔드 RouteGuard와 이중 검증 체계 구축",
          ],
          en: [
            "Global auth + role-based access control with AuthGuard + RolesGuard combination",
            "Per-controller permission settings with custom @Roles() decorator",
            "Dual verification system with frontend RouteGuard",
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: {
          ko: "[FE] S3 CORS 에러 (Presigned URL 업로드 실패)",
          en: "[FE] S3 CORS Error (Presigned URL Upload Failure)",
        },
        situation: {
          environment: {
            ko: "프론트엔드에서 Presigned URL로 S3 직접 업로드 시",
            en: "When uploading directly to S3 via Presigned URL from frontend",
          },
          symptom: {
            ko: '"net::ERR_FAILED", "TypeError: Failed to fetch" 에러 발생',
            en: '"net::ERR_FAILED", "TypeError: Failed to fetch" errors occurred',
          },
          impact: {
            ko: "공지사항 첨부파일, 교육자료 썸네일, 케어로그 사진/오디오 등 모든 파일 업로드",
            en: "All file uploads including notice attachments, education material thumbnails, carelog photos/audio",
          },
        },
        candidates: [
          {
            name: { ko: "S3 버킷 CORS 설정", en: "S3 Bucket CORS Configuration" },
            pros: {
              ko: "근본적 해결, 직접 업로드 가능",
              en: "Fundamental solution, direct upload possible",
            },
            cons: { ko: "AWS 콘솔 접근 필요", en: "AWS console access required" },
          },
          {
            name: { ko: "서버 프록시", en: "Server Proxy" },
            pros: {
              ko: "버킷 설정 변경 없음",
              en: "No bucket configuration change needed",
            },
            cons: {
              ko: "서버 부하 증가, Presigned URL 장점 상실",
              en: "Increased server load, loses Presigned URL benefits",
            },
          },
          {
            name: { ko: "CloudFront 경유", en: "Via CloudFront" },
            pros: { ko: "CDN 캐싱 가능", en: "CDN caching possible" },
            cons: {
              ko: "추가 인프라 비용, 복잡성 증가",
              en: "Additional infrastructure cost, increased complexity",
            },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "S3 버킷 CORS 설정", en: "S3 Bucket CORS Configuration" },
          description: {
            ko: "S3 버킷 CORS 설정에 AllowedOrigins, AllowedMethods(GET, PUT, POST, DELETE, HEAD), ExposeHeaders(ETag, Content-Length, Content-Type) 추가. 프론트엔드에서 Content-Type 헤더 정확히 전달.",
            en: "Added AllowedOrigins, AllowedMethods (GET, PUT, POST, DELETE, HEAD), ExposeHeaders (ETag, Content-Length, Content-Type) to S3 bucket CORS settings. Frontend passes Content-Type header accurately.",
          },
        },
        reason: {
          ko: [
            "Presigned URL의 핵심 가치(서버 부하 감소) 유지",
            "클라이언트-S3 직접 통신으로 최적 업로드 속도",
            "와일드카드 대신 명시적 Origin 지정으로 보안 유지",
            "대용량 파일도 서버 트래픽 없이 처리 가능",
          ],
          en: [
            "Maintains Presigned URL core value (server load reduction)",
            "Optimal upload speed with direct client-S3 communication",
            "Security maintained with explicit Origin instead of wildcard",
            "Large files can be processed without server traffic",
          ],
        },
      },
      {
        title: {
          ko: "[FE] JWT 토큰 자동 갱신 (401 핸들링)",
          en: "[FE] JWT Token Auto Refresh (401 Handling)",
        },
        situation: {
          environment: {
            ko: "Access Token 만료 후 API 호출 시",
            en: "When calling API after Access Token expiration",
          },
          symptom: {
            ko: "401 에러 발생, 사용자가 강제 로그아웃됨",
            en: "401 error occurred, user was forced to logout",
          },
          impact: {
            ko: "모든 인증 필요 API 호출",
            en: "All authenticated API calls",
          },
        },
        candidates: [
          {
            name: {
              ko: "401 에러 시 자동 갱신",
              en: "Auto refresh on 401 error",
            },
            pros: {
              ko: "UX 끊김 없음, 구현 간단",
              en: "Seamless UX, simple implementation",
            },
            cons: {
              ko: "동시 요청 시 중복 갱신 가능",
              en: "Possible duplicate refresh on concurrent requests",
            },
          },
          {
            name: { ko: "만료 전 사전 갱신", en: "Pre-refresh before expiration" },
            pros: { ko: "401 에러 방지", en: "Prevents 401 errors" },
            cons: {
              ko: "토큰 만료 시간 계산 필요",
              en: "Token expiration time calculation required",
            },
          },
          {
            name: { ko: "매 요청마다 갱신", en: "Refresh on every request" },
            pros: { ko: "항상 최신 토큰", en: "Always fresh token" },
            cons: { ko: "불필요한 API 호출", en: "Unnecessary API calls" },
          },
        ],
        solution: {
          choice: "A",
          name: {
            ko: "401 에러 시 자동 갱신",
            en: "Auto refresh on 401 error",
          },
          description: {
            ko: "Axios 인터셉터에서 401 에러 시 refreshToken으로 1회 재시도. _retry 플래그로 무한 루프 방지. OAuth 콜백/로그인 페이지에서는 자동 리다이렉트 방지.",
            en: "On 401 error in Axios interceptor, retry once with refreshToken. Prevent infinite loop with _retry flag. Prevent auto-redirect on OAuth callback/login pages.",
          },
        },
        reason: {
          ko: [
            "토큰 만료 시에도 사용자 경험 끊김 없음",
            "필요할 때만 갱신하여 불필요한 API 호출 방지",
            "_retry 플래그로 무한 루프 방지",
            "OAuth 콜백/로그인 페이지 예외 처리",
          ],
          en: [
            "Seamless UX even on token expiration",
            "Refresh only when needed to prevent unnecessary API calls",
            "Prevent infinite loop with _retry flag",
            "Exception handling for OAuth callback/login pages",
          ],
        },
      },
      {
        title: {
          ko: "[BE] 파일 업로드 아키텍처 마이그레이션",
          en: "[BE] File Upload Architecture Migration",
        },
        situation: {
          environment: {
            ko: "기존 서버 경유 방식 파일 업로드",
            en: "Existing server-relay file upload method",
          },
          symptom: {
            ko: "대용량 파일 업로드 시 서버 타임아웃, 메모리 부족",
            en: "Server timeout and memory shortage on large file uploads",
          },
          impact: {
            ko: "모든 파일 업로드 기능",
            en: "All file upload functionality",
          },
        },
        candidates: [
          {
            name: { ko: "Presigned URL", en: "Presigned URL" },
            pros: {
              ko: "서버 부하 제로, 빠른 업로드",
              en: "Zero server load, fast uploads",
            },
            cons: { ko: "CORS 설정 필요", en: "CORS configuration required" },
          },
          {
            name: { ko: "Multipart Upload", en: "Multipart Upload" },
            pros: {
              ko: "대용량 파일 지원",
              en: "Large file support",
            },
            cons: {
              ko: "구현 복잡, 서버 부하 여전히 존재",
              en: "Complex implementation, server load still exists",
            },
          },
          {
            name: { ko: "스트리밍 업로드", en: "Streaming Upload" },
            pros: { ko: "메모리 효율적", en: "Memory efficient" },
            cons: {
              ko: "서버 리소스 여전히 필요",
              en: "Server resources still required",
            },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "Presigned URL 방식", en: "Presigned URL Method" },
          description: {
            ko: "클라이언트가 백엔드에서 Presigned URL 발급받아 S3에 직접 업로드. 다운로드도 동일 패턴 적용.",
            en: "Client gets Presigned URL from backend and uploads directly to S3. Same pattern applied for downloads.",
          },
        },
        reason: {
          ko: [
            "파일이 서버를 거치지 않아 메모리/CPU 부담 제로",
            "클라이언트-S3 직접 통신으로 네트워크 홉 감소",
            "동시 업로드 증가해도 서버 영향 없음",
            "Presigned URL 만료 시간 설정으로 보안 유지",
          ],
          en: [
            "Zero memory/CPU burden as files don't pass through server",
            "Reduced network hops with direct client-S3 communication",
            "No server impact even with increased concurrent uploads",
            "Security maintained with Presigned URL expiration time",
          ],
        },
      },
      {
        title: {
          ko: "[BE] 오디오 분석 범위 오류",
          en: "[BE] Audio Analysis Scope Error",
        },
        situation: {
          environment: {
            ko: "케어로그 수정 시 새로운 오디오 파일 추가할 때",
            en: "When adding new audio files during carelog edit",
          },
          symptom: {
            ko: "새로 추가된 오디오만 분석하고, 기존 오디오는 분석에서 제외됨",
            en: "Only newly added audio analyzed, existing audio excluded from analysis",
          },
          impact: {
            ko: "carelog.service.ts - updateCarelogWithUrls 메서드",
            en: "carelog.service.ts - updateCarelogWithUrls method",
          },
        },
        candidates: [
          {
            name: {
              ko: "조건을 finalAudioUrls로 변경",
              en: "Change condition to finalAudioUrls",
            },
            pros: {
              ko: "전체 오디오 분석 보장, 간단한 수정",
              en: "Guarantees full audio analysis, simple fix",
            },
            cons: {
              ko: "기존 오디오도 매번 재분석 (API 비용 증가)",
              en: "Existing audio re-analyzed every time (increased API cost)",
            },
          },
          {
            name: {
              ko: "별도 분석 로직 분리",
              en: "Separate analysis logic",
            },
            pros: {
              ko: "신규/기존 분리 분석 가능",
              en: "Can analyze new/existing separately",
            },
            cons: {
              ko: "복잡성 증가, 오버엔지니어링",
              en: "Increased complexity, over-engineering",
            },
          },
          {
            name: { ko: "항상 분석 실행", en: "Always run analysis" },
            pros: { ko: "로직 단순화", en: "Simplified logic" },
            cons: {
              ko: "오디오 없을 때도 불필요한 작업 발생",
              en: "Unnecessary work when no audio",
            },
          },
        ],
        solution: {
          choice: "A",
          name: {
            ko: "조건을 finalAudioUrls로 변경",
            en: "Change condition to finalAudioUrls",
          },
          description: {
            ko: "finalAudioUrls = 기존 유지 오디오 + 새로 추가된 오디오. 최종 오디오가 1개 이상이면 전체 분석 실행.",
            en: "finalAudioUrls = existing audio + newly added audio. Run full analysis if final audio count >= 1.",
          },
        },
        reason: {
          ko: [
            "케어로그의 모든 오디오(기존+신규)를 종합 분석 필요",
            "조건문 변수만 변경하여 즉시 해결",
            "생성/수정 모두 동일한 분석 범위 적용",
          ],
          en: [
            "Comprehensive analysis needed for all carelog audio (existing + new)",
            "Immediate fix by changing condition variable only",
            "Same analysis scope applied for both creation and editing",
          ],
        },
      },
      {
        title: {
          ko: "[BE] S3 URL 검증 누락",
          en: "[BE] S3 URL Validation Missing",
        },
        situation: {
          environment: {
            ko: "케어로그 수정 API",
            en: "Carelog update API",
          },
          symptom: {
            ko: '"createCarelogWithUrls"는 S3 URL 검증 있음, "updateCarelogWithUrls"는 검증 없음',
            en: '"createCarelogWithUrls" has S3 URL validation, "updateCarelogWithUrls" has none',
          },
          impact: {
            ko: "보안 취약점 - 임의 URL 저장 가능",
            en: "Security vulnerability - arbitrary URL storage possible",
          },
        },
        candidates: [
          {
            name: { ko: "인라인 검증 추가", en: "Add inline validation" },
            pros: { ko: "빠른 수정", en: "Quick fix" },
            cons: { ko: "코드 중복", en: "Code duplication" },
          },
          {
            name: {
              ko: "validateFileUrls 재사용",
              en: "Reuse validateFileUrls",
            },
            pros: { ko: "코드 재사용", en: "Code reuse" },
            cons: {
              ko: "메서드 시그니처 조정 필요",
              en: "Method signature adjustment needed",
            },
          },
          {
            name: { ko: "데코레이터/Pipe", en: "Decorator/Pipe" },
            pros: { ko: "전역 적용 가능", en: "Can apply globally" },
            cons: { ko: "과도한 엔지니어링", en: "Over-engineering" },
          },
        ],
        solution: {
          choice: "A",
          name: {
            ko: "인라인 검증 추가",
            en: "Add inline validation",
          },
          description: {
            ko: "updateCarelogWithUrls 메서드에 S3 URL 검증 추가. 정규식으로 S3 URL 형식 검증 후 유효하지 않은 URL은 BadRequestException 발생.",
            en: "Added S3 URL validation to updateCarelogWithUrls method. Validate S3 URL format with regex and throw BadRequestException for invalid URLs.",
          },
        },
        reason: {
          ko: [
            "유효하지 않은 S3 URL 저장 방지",
            "create/update 동일한 검증 규칙 적용",
            "즉시 보안 취약점 해결",
          ],
          en: [
            "Prevents invalid S3 URL storage",
            "Same validation rules for create/update",
            "Immediate security fix",
          ],
        },
      },
      {
        title: {
          ko: "[BE] BullMQ 작업 실패 시 재시도 전략",
          en: "[BE] BullMQ Job Failure Retry Strategy",
        },
        situation: {
          environment: {
            ko: "이메일/SMS/FCM/AI 리포트 백그라운드 작업",
            en: "Email/SMS/FCM/AI report background jobs",
          },
          symptom: {
            ko: "외부 서비스 일시적 장애 시 작업 영구 실패",
            en: "Permanent job failure on temporary external service failures",
          },
          impact: {
            ko: "4개 BullMQ 큐 (email, sms, fcm, ai-report)",
            en: "4 BullMQ queues (email, sms, fcm, ai-report)",
          },
        },
        candidates: [
          {
            name: { ko: "고정 재시도", en: "Fixed retry" },
            pros: { ko: "구현 간단", en: "Simple implementation" },
            cons: {
              ko: "외부 서비스 부하 증가 가능",
              en: "Possible external service overload",
            },
          },
          {
            name: { ko: "지수 백오프", en: "Exponential backoff" },
            pros: { ko: "서비스 부하 분산", en: "Distributed service load" },
            cons: { ko: "최종 처리 지연", en: "Final processing delay" },
          },
          {
            name: {
              ko: "재시도 + Dead Letter Queue",
              en: "Retry + Dead Letter Queue",
            },
            pros: { ko: "실패 작업 추적 가능", en: "Failed job tracking" },
            cons: { ko: "복잡성 증가", en: "Increased complexity" },
          },
        ],
        solution: {
          choice: "B+C",
          name: {
            ko: "지수 백오프 + Dead Letter Queue",
            en: "Exponential Backoff + Dead Letter Queue",
          },
          description: {
            ko: "이메일 큐: 최대 5회, 초기 2초 간격. AI 리포트 큐: 최대 3회, 초기 10초 간격(OpenAI Rate Limit 고려). 최종 실패 시 Sentry 기록 및 관리자 알림.",
            en: "Email queue: max 5 attempts, initial 2s interval. AI report queue: max 3 attempts, initial 10s interval (considering OpenAI Rate Limit). On final failure, log to Sentry and notify admin.",
          },
        },
        reason: {
          ko: [
            "일시적 장애 시 자동 복구",
            "지수 백오프로 Rate Limit 방지",
            "실패 작업 보관으로 디버깅 용이",
            "최종 실패 시 관리자 알림",
          ],
          en: [
            "Auto-recovery on temporary failures",
            "Exponential backoff prevents Rate Limit",
            "Easy debugging with failed job retention",
            "Admin notification on final failure",
          ],
        },
      },
      {
        title: {
          ko: "[BE] Branch.io 유료화로 인한 딥링크 직접 구현",
          en: "[BE] Deep Link Self-Implementation Due to Branch.io Pricing",
        },
        situation: {
          environment: {
            ko: "초대 링크 생성 시 딥링크 필요",
            en: "Deep link needed for invitation link generation",
          },
          symptom: {
            ko: "Branch.io 무료 플랜 제한으로 서비스 사용 불가",
            en: "Branch.io free plan limitations made service unusable",
          },
          impact: {
            ko: "보호자/요양보호사 초대 시스템",
            en: "Guardian/caregiver invitation system",
          },
        },
        candidates: [
          {
            name: { ko: "Branch.io 유료 플랜", en: "Branch.io paid plan" },
            pros: {
              ko: "기존 설계 유지, 강력한 기능",
              en: "Maintains existing design, powerful features",
            },
            cons: { ko: "월 비용 발생", en: "Monthly cost" },
          },
          {
            name: {
              ko: "Firebase Dynamic Links",
              en: "Firebase Dynamic Links",
            },
            pros: {
              ko: "무료, Google 생태계 통합",
              en: "Free, Google ecosystem integration",
            },
            cons: {
              ko: "2025년 서비스 종료 예정",
              en: "Service ending in 2025",
            },
          },
          {
            name: { ko: "자체 딥링크 구현", en: "Self-implement deep links" },
            pros: { ko: "무료, 완전한 제어", en: "Free, full control" },
            cons: { ko: "직접 구현 필요", en: "Direct implementation required" },
          },
        ],
        solution: {
          choice: "C",
          name: { ko: "자체 딥링크 구현", en: "Self-implement deep links" },
          description: {
            ko: "crypto.randomBytes 기반 32자리 토큰 생성. InviteHistory 테이블에 저장 후 이메일/SMS로 발송. 앱 설치 여부에 따라 앱/웹 분기 처리.",
            en: "Generate 32-character token with crypto.randomBytes. Save to InviteHistory table then send via email/SMS. Branch to app/web based on app installation status.",
          },
        },
        reason: {
          ko: [
            "외부 서비스 비용 없음",
            "토큰 만료, 사용 횟수 등 완전한 제어 가능",
            "복잡한 SDK 연동 없이 URL 파라미터로 처리",
            "외부 서비스 의존성 제거",
          ],
          en: [
            "No external service costs",
            "Full control over token expiration, usage count, etc.",
            "URL parameter processing without complex SDK integration",
            "Removed external service dependency",
          ],
        },
      },
    ],
    folderStructure: [
      {
        name: "Frontend/",
        children: [
          {
            name: "src/",
            children: [
              {
                name: "apis/",
                children: [
                  { name: "auth/" },
                  { name: "file/" },
                  { name: "stats/" },
                  { name: "caregiverManage/" },
                  { name: "seniorManage/" },
                  { name: "client.ts" },
                  { name: "QueryKeys.ts" },
                ],
              },
              {
                name: "components/",
                children: [
                  { name: "Form/" },
                  { name: "Table/" },
                  { name: "Modal/" },
                  { name: "layouts/" },
                ],
              },
              { name: "hooks/" },
              { name: "pages/" },
              { name: "stores/" },
              { name: "utils/" },
              { name: "router/" },
            ],
          },
        ],
      },
      {
        name: "Backend/",
        children: [
          {
            name: "src/",
            children: [
              {
                name: "api/",
                children: [
                  { name: "carelog/" },
                  { name: "attendance/" },
                  { name: "emergency-call/" },
                  { name: "notification/" },
                ],
              },
              {
                name: "auth/",
                children: [
                  { name: "guards/" },
                  { name: "dto/" },
                  { name: "better-auth.service" },
                ],
              },
              {
                name: "worker/",
                children: [{ name: "queues/" }],
              },
              { name: "config/" },
              { name: "decorators/" },
              { name: "interceptors/" },
              { name: "services/" },
            ],
          },
          {
            name: "prisma/",
            children: [{ name: "schema.prisma" }, { name: "migrations/" }],
          },
        ],
      },
    ],
  },
  {
    id: "doublt-homepage",
    slug: "doublt-homepage",
    title: {
      ko: "더블티 홈페이지",
      en: "DoublT Homepage",
    },
    description: {
      ko: "기업의 B2B 솔루션 및 브랜드 홍보를 위한 공식 홈페이지를 기획부터 개발, 배포까지 총괄하여 진행한 프로젝트입니다.",
      en: "A corporate website project for B2B solution and brand promotion, managed from planning to development and deployment.",
    },
    period: "2025.07 ~ Present",
    role: {
      ko: "풀스택 개발 (프론트엔드 + 백엔드)",
      en: "Full-Stack Development (Frontend + Backend)",
    },
    team: "4",
    category: "company",
    company: "DoublT",
    techStack: [
      "Next.js 14",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "AWS S3",
      "NextAuth.js",
      "React Query",
      "React Hook Form",
      "Storybook",
    ],
    features: {
      ko: [
        "Next.js 기반 SSR 도입으로 SEO 최적화",
        "i18next 다국어 지원 (한국어/영어)",
        "관리자 CMS(권한/메뉴/번역키) 설계",
        "ERD 설계 및 백엔드 전체 구현",
        "반응형 적용",
        "채용 시스템 (지원서 관리)",
      ],
      en: [
        "SEO optimization through Next.js SSR implementation",
        "i18next multilingual support (Korean/English)",
        "Admin CMS (permission/menu/translation key) design",
        "ERD design and full backend implementation",
        "Responsive design",
        "Recruitment system (application management)",
      ],
    },
    responsibilities: [
      {
        category: { ko: "전체", en: "Overall" },
        items: {
          ko: [
            "전체 더블티 홈페이지 구현",
            "Prisma 스키마 설계",
            "더블티 홈페이지 화면 커스텀 관리자 페이지 DB설계 및 로직 구현",
          ],
          en: [
            "Full DoublT homepage implementation",
            "Prisma schema design",
            "Custom admin page DB design and logic for DoublT homepage",
          ],
        },
      },
      {
        category: { ko: "채용 시스템", en: "Recruitment System" },
        items: {
          ko: [
            "Prisma 기반 채용 DB 스키마 설계 (지원자, 지원서, 채용공고, 프로세스)",
            "지원서 제출 API (트랜잭션 처리, 90일 중복 방지, 이메일 발송)",
            "React Hook Form + Atomic Design 지원서 폼 UI 구현",
            "관리자 채용 공고/지원자 관리 기능 (CRUD + 필터링)",
          ],
          en: [
            "Prisma-based recruitment DB schema (applicants, applications, job postings, processes)",
            "Application submission API (transaction, 90-day duplicate prevention, email)",
            "Application form UI with React Hook Form + Atomic Design",
            "Admin job posting/applicant management (CRUD + filtering)",
          ],
        },
      },
      {
        category: { ko: "인증 시스템", en: "Authentication System" },
        items: {
          ko: [
            "NextAuth.js 기반 JWT 세션 인증",
            "이메일 인증 (인증 코드 발송/검증/만료 처리)",
            "역할 기반 접근 제어 (ADMIN/USER)",
          ],
          en: [
            "NextAuth.js based JWT session authentication",
            "Email verification (code sending/validation/expiration)",
            "Role-based access control (ADMIN/USER)",
          ],
        },
      },
      {
        category: { ko: "파일 업로드", en: "File Upload" },
        items: {
          ko: [
            "AWS S3 Presigned URL 방식 구현",
            "서버 부담 최소화 (클라이언트 직접 업로드)",
            "이력서/포트폴리오/증명사진 업로드 지원",
          ],
          en: [
            "AWS S3 Presigned URL implementation",
            "Minimized server load (direct client upload)",
            "Resume/portfolio/photo upload support",
          ],
        },
      },
      {
        category: { ko: "다국어 시스템", en: "Multilingual System" },
        items: {
          ko: [
            "DB 기반 i18n 번역 관리 (런타임 로드)",
            "관리자 번역 수정 기능",
            "ko/en 다국어 라우팅",
          ],
          en: [
            "DB-based i18n translation management (runtime load)",
            "Admin translation editing functionality",
            "ko/en multilingual routing",
          ],
        },
      },
    ],
    link: "https://www.doublt.com/ko/main",
    detailedDescription: {
      ko: "더블티 공식 홈페이지는 기업의 B2B 솔루션과 브랜드 아이덴티티를 효과적으로 전달하기 위해 기획된 프로젝트입니다. Next.js 14의 App Router를 활용한 SSR로 SEO를 최적화하고, 관리자가 콘텐츠와 번역을 직접 관리할 수 있는 CMS를 구축했습니다.",
      en: "DoublT official homepage is a project designed to effectively communicate the company's B2B solutions and brand identity. Optimized SEO with SSR using Next.js 14 App Router and built a CMS for admins to directly manage content and translations.",
    },
    techImplementation: [
      {
        category: {
          ko: "인증 및 권한 시스템",
          en: "Authentication & Permission System",
        },
        details: {
          ko: [
            "NextAuth.js 기반 인증 시스템 구현",
            "Prisma Adapter를 통한 세션 + 계정 연동",
            "Module Augmentation으로 NextAuth 타입 확장 (role, permissionLevel)",
            "Permission Level 기반 관리자 권한 분리",
          ],
          en: [
            "NextAuth.js based authentication system",
            "Session + account integration via Prisma Adapter",
            "NextAuth type extension via Module Augmentation (role, permissionLevel)",
            "Permission Level based admin authority separation",
          ],
        },
      },
      {
        category: { ko: "API 에러 핸들링", en: "API Error Handling" },
        details: {
          ko: [
            "표준화된 에러 응답 포맷 (code, message, details) 설계",
            "Discriminated Union 패턴으로 에러 타입별 안전한 처리",
            "클라이언트에서 에러 코드 기반 메시지 자동 매핑",
          ],
          en: [
            "Standardized error response format (code, message, details) design",
            "Safe handling by error type using Discriminated Union pattern",
            "Automatic client-side message mapping based on error codes",
          ],
        },
      },
      {
        category: {
          ko: "다국어 관리 시스템",
          en: "Multilingual Management System",
        },
        details: {
          ko: [
            "DB 기반 번역 키 관리로 배포 없이 번역 수정 가능",
            "관리자 CMS에서 실시간 번역 편집 기능",
            "언어별 콘텐츠 분리 및 fallback 처리",
          ],
          en: [
            "DB-based translation key management for editing without deployment",
            "Real-time translation editing in admin CMS",
            "Language-specific content separation and fallback handling",
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: {
          ko: "[FE] NextAuth.js 세션 타입 확장",
          en: "[FE] NextAuth.js Session Type Extension",
        },
        situation: {
          environment: {
            ko: "NextAuth.js 세션에 커스텀 필드 추가 필요",
            en: "Needed to add custom fields to NextAuth.js session",
          },
          symptom: {
            ko: "session.user.role 등 접근 시 TypeScript 에러",
            en: "TypeScript error when accessing session.user.role, etc.",
          },
          impact: {
            ko: "인증된 사용자 정보 활용 전체",
            en: "All authenticated user information usage",
          },
        },
        candidates: [
          {
            name: { ko: "Type Assertion", en: "Type Assertion" },
            pros: { ko: "빠른 적용", en: "Quick application" },
            cons: {
              ko: "타입 안정성 낮음, 매번 캐스팅 필요",
              en: "Low type safety, casting needed every time",
            },
          },
          {
            name: { ko: "Module Augmentation", en: "Module Augmentation" },
            pros: {
              ko: "전역 타입 확장, 한 번 설정",
              en: "Global type extension, one-time setup",
            },
            cons: { ko: "설정 방법 학습 필요", en: "Learning required for setup" },
          },
          {
            name: { ko: "커스텀 타입 래퍼", en: "Custom Type Wrapper" },
            pros: { ko: "유연한 구조", en: "Flexible structure" },
            cons: { ko: "기존 훅 사용 불가", en: "Cannot use existing hooks" },
          },
        ],
        solution: {
          choice: "B",
          name: { ko: "Module Augmentation", en: "Module Augmentation" },
          description: {
            ko: "next-auth.d.ts 파일에서 Session, User, JWT 인터페이스 확장. NextAuth 콜백에서 jwt와 session에 커스텀 필드 전달.",
            en: "Extended Session, User, JWT interfaces in next-auth.d.ts. Passed custom fields in NextAuth callbacks for jwt and session.",
          },
        },
        reason: {
          ko: [
            "전역 타입 확장으로 어디서나 타입 추론 가능",
            "한 파일에서 타입 관리로 유지보수 용이",
            "NextAuth.js 공식 문서 권장 방식",
          ],
          en: [
            "Type inference everywhere via global type extension",
            "Easy maintenance with single-file type management",
            "NextAuth.js official documentation recommended approach",
          ],
        },
      },
      {
        title: {
          ko: "[FE] API 에러 중앙 처리",
          en: "[FE] Centralized API Error Handling",
        },
        situation: {
          environment: {
            ko: "다양한 API 호출 시 에러 처리",
            en: "Error handling across various API calls",
          },
          symptom: {
            ko: "각 API마다 개별 에러 처리, 일관성 없는 메시지",
            en: "Individual error handling per API, inconsistent messages",
          },
          impact: {
            ko: "프론트엔드 전체 API 호출",
            en: "All frontend API calls",
          },
        },
        candidates: [
          {
            name: { ko: "각 API마다 try-catch", en: "try-catch per API" },
            pros: { ko: "세밀한 제어", en: "Fine-grained control" },
            cons: {
              ko: "중복 코드, 일관성 없음",
              en: "Duplicate code, no consistency",
            },
          },
          {
            name: { ko: "API 래퍼 함수", en: "API Wrapper Function" },
            pros: { ko: "중앙 집중식 처리", en: "Centralized handling" },
            cons: {
              ko: "모든 API에 적용 필요",
              en: "Must apply to all APIs",
            },
          },
          {
            name: { ko: "React Query onError", en: "React Query onError" },
            pros: { ko: "Query와 통합", en: "Integrated with Query" },
            cons: {
              ko: "Mutation 별도 처리 필요",
              en: "Mutation needs separate handling",
            },
          },
        ],
        solution: {
          choice: "B",
          name: { ko: "API 래퍼 함수", en: "API Wrapper Function" },
          description: {
            ko: "내부 API용 apiFetch와 외부 API용 apiFetchPublicDoublUworks 분리. 에러 객체 구조화하여 throw.",
            en: "Separated apiFetch for internal API and apiFetchPublicDoublUworks for external API. Structured error objects for throwing.",
          },
        },
        reason: {
          ko: [
            "모든 API 호출에 동일한 에러 형식 적용",
            "내부/외부 API 별도 래퍼로 유연성 확보",
            "제네릭으로 응답 타입 추론",
            "인증 토큰 추가 등 공통 로직 쉽게 추가 가능",
          ],
          en: [
            "Same error format applied to all API calls",
            "Flexibility with separate wrappers for internal/external APIs",
            "Response type inference via generics",
            "Easy to add common logic like auth tokens",
          ],
        },
      },
      {
        title: {
          ko: "[FE] React Query 캐시 무효화",
          en: "[FE] React Query Cache Invalidation",
        },
        situation: {
          environment: {
            ko: "데이터 수정 후 목록 갱신",
            en: "List refresh after data modification",
          },
          symptom: {
            ko: "수정했는데 목록에 반영 안 됨",
            en: "Modifications not reflected in list",
          },
          impact: {
            ko: "관리자 페이지 전체 CRUD",
            en: "All admin page CRUD operations",
          },
        },
        candidates: [
          {
            name: { ko: "refetch 직접 호출", en: "Direct refetch call" },
            pros: { ko: "명확한 제어", en: "Clear control" },
            cons: {
              ko: "관련 쿼리 모두 수동 갱신 필요",
              en: "Manual refresh needed for all related queries",
            },
          },
          {
            name: { ko: "invalidateQueries", en: "invalidateQueries" },
            pros: { ko: "관련 쿼리 일괄 무효화", en: "Bulk invalidate related queries" },
            cons: { ko: "키 구조 설계 필요", en: "Key structure design needed" },
          },
          {
            name: {
              ko: "setQueryData (낙관적 업데이트)",
              en: "setQueryData (optimistic update)",
            },
            pros: { ko: "빠른 UI 반영", en: "Fast UI reflection" },
            cons: { ko: "에러 시 롤백 복잡", en: "Complex rollback on error" },
          },
        ],
        solution: {
          choice: "B",
          name: {
            ko: "invalidateQueries + 키 구조 설계",
            en: "invalidateQueries + Key Structure Design",
          },
          description: {
            ko: "QUERY_KEY 네임스페이스 설계. 상위 키로 하위 쿼리 일괄 무효화. invalidateQueries({ queryKey: QUERY_KEY.RECRUIT.all() }) 패턴.",
            en: "Designed QUERY_KEY namespace. Bulk invalidate child queries with parent key. invalidateQueries({ queryKey: QUERY_KEY.RECRUIT.all() }) pattern.",
          },
        },
        reason: {
          ko: [
            "상위 키로 하위 쿼리 일괄 무효화 가능",
            "중앙 관리되는 키로 오타 방지",
            "세밀한 무효화도 가능한 유연성",
            "새 쿼리 추가 시 패턴 따라가면 됨",
          ],
          en: [
            "Can bulk invalidate child queries with parent key",
            "Typo prevention with centrally managed keys",
            "Flexibility for fine-grained invalidation",
            "Follow pattern for new queries",
          ],
        },
      },
      {
        title: {
          ko: "[FE] React Hook Form + 서버 데이터 동기화",
          en: "[FE] React Hook Form + Server Data Sync",
        },
        situation: {
          environment: {
            ko: "수정 폼에서 서버 데이터를 기본값으로 설정",
            en: "Setting server data as default values in edit form",
          },
          symptom: {
            ko: "데이터 로드 전 빈 폼이 렌더링됨",
            en: "Empty form rendered before data load",
          },
          impact: {
            ko: "채용 공고 수정, 지원서 수정 등 모든 수정 페이지",
            en: "All edit pages including job posting edit, application edit",
          },
        },
        candidates: [
          {
            name: { ko: "useEffect + reset", en: "useEffect + reset" },
            pros: { ko: "간단하고 직관적", en: "Simple and intuitive" },
            cons: { ko: "추가 렌더링 발생", en: "Additional rendering" },
          },
          {
            name: {
              ko: "컴포넌트 분리 (부모-자식)",
              en: "Component separation (parent-child)",
            },
            pros: {
              ko: "useEffect 불필요, 타입 보장",
              en: "No useEffect needed, type guaranteed",
            },
            cons: { ko: "컴포넌트 구조 변경", en: "Component structure change" },
          },
          {
            name: {
              ko: "defaultValues + isLoading 처리",
              en: "defaultValues + isLoading handling",
            },
            pros: { ko: "기본 RHF 패턴", en: "Basic RHF pattern" },
            cons: {
              ko: "초기값 undefined 문제",
              en: "Initial value undefined issue",
            },
          },
        ],
        solution: {
          choice: "B",
          name: {
            ko: "컴포넌트 분리 패턴",
            en: "Component Separation Pattern",
          },
          description: {
            ko: "부모 컴포넌트에서 데이터 fetch 후 자식 폼 컴포넌트에 initialData로 전달. 데이터가 확실히 있을 때만 폼 렌더링.",
            en: "Parent component fetches data then passes to child form component as initialData. Render form only when data is confirmed.",
          },
        },
        reason: {
          ko: [
            "initialData가 optional이 아님, 타입 레벨 보장",
            "useEffect 없이 첫 렌더링부터 올바른 값",
            "데이터 fetch와 폼 로직 관심사 분리",
            "폼 컴포넌트 독립적 테스트 가능",
          ],
          en: [
            "initialData is not optional, type-level guarantee",
            "Correct values from first render without useEffect",
            "Separation of concerns between data fetch and form logic",
            "Form component independently testable",
          ],
        },
      },
      {
        title: {
          ko: "[FE] 다중 백엔드 API 호출 시 부분 실패 처리",
          en: "[FE] Partial Failure Handling in Multiple Backend API Calls",
        },
        situation: {
          environment: {
            ko: "하나의 기능에서 내부 API + 외부 API 두 곳에 동시 요청",
            en: "Simultaneous requests to internal API + external API for one feature",
          },
          symptom: {
            ko: "한쪽 API만 실패 시 데이터 불일치 또는 불명확한 에러 표시",
            en: "Data inconsistency or unclear error display when one API fails",
          },
          impact: {
            ko: "외부 연동 기능 전체 (결제, 알림, 외부 시스템 동기화 등)",
            en: "All external integration features (payment, notification, external system sync)",
          },
        },
        candidates: [
          {
            name: {
              ko: "순차 호출 + 수동 롤백",
              en: "Sequential call + manual rollback",
            },
            pros: { ko: "실패 지점 명확", en: "Clear failure point" },
            cons: {
              ko: "롤백 로직 복잡, 외부 API 롤백 불가능한 경우 많음",
              en: "Complex rollback logic, external API often can't be rolled back",
            },
          },
          {
            name: {
              ko: "Promise.allSettled + 부분 성공 처리",
              en: "Promise.allSettled + partial success handling",
            },
            pros: {
              ko: "병렬 처리, 개별 결과 확인",
              en: "Parallel processing, individual result check",
            },
            cons: {
              ko: "부분 성공 상태 관리 필요",
              en: "Partial success state management needed",
            },
          },
          {
            name: {
              ko: "Saga/보상 트랜잭션 패턴",
              en: "Saga/Compensating Transaction Pattern",
            },
            pros: { ko: "완전한 일관성 보장", en: "Complete consistency guarantee" },
            cons: {
              ko: "구현 복잡도 높음, 오버엔지니어링 가능성",
              en: "High implementation complexity, over-engineering risk",
            },
          },
        ],
        solution: {
          choice: "B",
          name: {
            ko: "Promise.allSettled + 부분 성공 처리",
            en: "Promise.allSettled + Partial Success Handling",
          },
          description: {
            ko: "각 API 결과를 개별 확인하고 실패한 외부 호출만 재시도 큐로 분리. 핵심 기능은 성공 처리, 부가 기능 실패는 별도 안내.",
            en: "Check each API result individually and separate failed external calls to retry queue. Core function succeeds, side function failure notified separately.",
          },
        },
        reason: {
          ko: [
            "핵심 기능(내부 저장)은 성공 처리, 부가 기능 실패는 별도 안내",
            "실패한 외부 호출만 재시도 큐로 분리하여 후처리 가능",
            "각 API 결과를 개별 확인 가능, 디버깅 용이",
            "2개 이상의 API로 확장 시에도 동일 패턴 적용 가능",
          ],
          en: [
            "Core function (internal save) succeeds, side function failure notified separately",
            "Only failed external calls go to retry queue for post-processing",
            "Individual API result check, easy debugging",
            "Same pattern applicable when scaling to 2+ APIs",
          ],
        },
      },
      {
        title: {
          ko: "[BE] AWS 배포 환경 메모리 초과로 서버 크래시",
          en: "[BE] Server Crash Due to Memory Overflow in AWS Deployment",
        },
        situation: {
          environment: {
            ko: "AWS EC2 ts.medium 인스턴스에서 Next.js 빌드 및 배포",
            en: "Next.js build and deployment on AWS EC2 ts.medium instance",
          },
          symptom: {
            ko: "빌드 프로세스 중 메모리 부족으로 서버 크래시 반복 발생",
            en: "Repeated server crashes due to memory shortage during build process",
          },
          impact: {
            ko: "배포 프로세스 중단, 서비스 업데이트 불가",
            en: "Deployment process stopped, service updates impossible",
          },
        },
        candidates: [
          {
            name: {
              ko: "EC2 인스턴스 사양 업그레이드",
              en: "EC2 Instance Upgrade",
            },
            pros: {
              ko: "즉시 해결, 추가 설정 불필요",
              en: "Immediate fix, no additional setup",
            },
            cons: {
              ko: "지속적인 비용 증가, 근본 원인 미해결",
              en: "Ongoing cost increase, root cause unresolved",
            },
          },
          {
            name: {
              ko: "빌드 파일 Git 커밋 후 Pull",
              en: "Git commit build files then Pull",
            },
            pros: { ko: "서버 빌드 불필요", en: "No server build needed" },
            cons: {
              ko: "Git 저장소 크기 증가, .gitignore 정책 위배",
              en: "Git repo size increase, violates .gitignore policy",
            },
          },
          {
            name: {
              ko: "GitHub Actions 빌드 + 로컬 배포 스크립트",
              en: "GitHub Actions Build + Local Deploy Script",
            },
            pros: {
              ko: "GitHub 리소스 활용, 보안 정책 준수",
              en: "Utilizes GitHub resources, complies with security policy",
            },
            cons: { ko: "배포 스크립트 작성 필요", en: "Deploy script needed" },
          },
          {
            name: {
              ko: "GitHub Actions 직접 배포 (SSH)",
              en: "GitHub Actions Direct Deploy (SSH)",
            },
            pros: {
              ko: "완전 자동화된 CI/CD",
              en: "Fully automated CI/CD",
            },
            cons: {
              ko: "GitHub Actions IP가 유동적, 회사 인바운드 규칙과 충돌",
              en: "GitHub Actions IP is dynamic, conflicts with company inbound rules",
            },
          },
        ],
        solution: {
          choice: "C",
          name: {
            ko: "GitHub Actions 빌드 + 로컬 배포 스크립트",
            en: "GitHub Actions Build + Local Deploy Script",
          },
          description: {
            ko: "GitHub Actions에서 빌드 후 artifacts 저장, 로컬에서 deploy.sh로 서버에 rsync 전송 후 pm2 restart.",
            en: "Build on GitHub Actions, save artifacts, deploy.sh locally rsync to server then pm2 restart.",
          },
        },
        reason: {
          ko: [
            "회사 인바운드 규칙 정책 준수, 승인된 로컬 IP에서만 배포",
            "EC2 업그레이드 불필요, GitHub Actions 무료 티어 활용",
            "GitHub 서버의 충분한 메모리로 빌드, 서버 크래시 위험 제거",
            "npm run deploy 명령어 하나로 배포 가능",
          ],
          en: [
            "Complies with company inbound rules, deploy only from approved local IP",
            "No EC2 upgrade needed, utilizes GitHub Actions free tier",
            "Build with sufficient GitHub server memory, eliminates crash risk",
            "Deploy with single npm run deploy command",
          ],
        },
      },
      {
        title: {
          ko: "[BE] Prisma 트랜잭션 처리",
          en: "[BE] Prisma Transaction Handling",
        },
        situation: {
          environment: {
            ko: "지원서 생성 시 여러 테이블에 데이터 삽입",
            en: "Data insertion to multiple tables when creating application",
          },
          symptom: {
            ko: "지원서는 생성되었으나 동의 정보가 누락되는 경우 발생",
            en: "Application created but consent info sometimes missing",
          },
          impact: {
            ko: "데이터 일관성 문제, 불완전한 지원서",
            en: "Data consistency issue, incomplete applications",
          },
        },
        candidates: [
          {
            name: {
              ko: "개별 쿼리 + try-catch 롤백",
              en: "Individual queries + try-catch rollback",
            },
            pros: { ko: "간단한 구현", en: "Simple implementation" },
            cons: {
              ko: "수동 롤백 복잡, 실수 가능성",
              en: "Complex manual rollback, error-prone",
            },
          },
          {
            name: {
              ko: "Prisma $transaction (순차)",
              en: "Prisma $transaction (sequential)",
            },
            pros: { ko: "자동 롤백, 간단", en: "Auto rollback, simple" },
            cons: { ko: "결과값 활용 불편", en: "Inconvenient result usage" },
          },
          {
            name: {
              ko: "Prisma $transaction (interactive)",
              en: "Prisma $transaction (interactive)",
            },
            pros: {
              ko: "자동 롤백 + 결과값 활용",
              en: "Auto rollback + result usage",
            },
            cons: { ko: "약간의 러닝커브 존재", en: "Slight learning curve" },
          },
        ],
        solution: {
          choice: "C",
          name: {
            ko: "Prisma Interactive Transaction",
            en: "Prisma Interactive Transaction",
          },
          description: {
            ko: "$transaction(async (tx) => { ... })로 지원서 생성 후 동의 정보 생성을 하나의 트랜잭션으로 묶음.",
            en: "Wrapped application creation and consent creation in single transaction with $transaction(async (tx) => { ... }).",
          },
        },
        reason: {
          ko: [
            "하나라도 실패하면 전체 롤백으로 데이터 일관성 보장",
            "연관 작업을 하나의 블록에서 처리하여 코드 가독성 향상",
            "첫 번째 쿼리 결과(ID)를 두 번째 쿼리에서 사용 가능",
            "트랜잭션 외부에서 에러 일괄 처리",
          ],
          en: [
            "Data consistency guaranteed with full rollback if any fails",
            "Improved code readability by handling related operations in one block",
            "Can use first query result (ID) in second query",
            "Batch error handling outside transaction",
          ],
        },
      },
      {
        title: {
          ko: "[BE] S3 Presigned URL 파일 업로드",
          en: "[BE] S3 Presigned URL File Upload",
        },
        situation: {
          environment: {
            ko: "이력서, 포트폴리오 파일 업로드",
            en: "Resume, portfolio file upload",
          },
          symptom: {
            ko: "서버를 경유한 업로드로 인한 메모리/대역폭 부담",
            en: "Memory/bandwidth burden from server-relay upload",
          },
          impact: { ko: "서버 성능, 업로드 속도", en: "Server performance, upload speed" },
        },
        candidates: [
          {
            name: { ko: "서버 경유 업로드", en: "Server-relay Upload" },
            pros: {
              ko: "간단한 구현, 파일 검증 용이",
              en: "Simple implementation, easy file validation",
            },
            cons: { ko: "서버 부담, 느린 속도", en: "Server burden, slow speed" },
          },
          {
            name: { ko: "Presigned URL", en: "Presigned URL" },
            pros: { ko: "클라이언트 직접 업로드", en: "Direct client upload" },
            cons: { ko: "파일 검증 별도 필요", en: "Separate file validation needed" },
          },
          {
            name: { ko: "Presigned POST", en: "Presigned POST" },
            pros: { ko: "정책 기반 제어 가능", en: "Policy-based control possible" },
            cons: { ko: "구현 복잡", en: "Complex implementation" },
          },
        ],
        solution: {
          choice: "B",
          name: { ko: "Presigned URL PUT 방식", en: "Presigned URL PUT Method" },
          description: {
            ko: "서버에서 Presigned URL 발급 후 클라이언트가 S3에 직접 업로드.",
            en: "Server issues Presigned URL, client uploads directly to S3.",
          },
        },
        reason: {
          ko: [
            "파일이 서버 메모리를 거치지 않아 서버 부담 감소",
            "클라이언트 → S3 직접 업로드로 속도 향상",
            "동시 업로드 시에도 서버 영향 최소화",
            "URL 만료 시간 설정, Key 경로 서버에서 제어하여 보안 유지",
          ],
          en: [
            "Reduced server burden as files don't pass through server memory",
            "Speed improvement with direct client → S3 upload",
            "Minimal server impact even with concurrent uploads",
            "Security maintained with URL expiration time, server-controlled key path",
          ],
        },
      },
      {
        title: {
          ko: "[BE] 다국어(i18n) DB 기반 관리",
          en: "[BE] DB-based Multilingual (i18n) Management",
        },
        situation: {
          environment: { ko: "관리자가 번역 수정 필요", en: "Admin needs to modify translations" },
          symptom: {
            ko: "JSON 파일 수정 → 배포 필요 → 느린 반영",
            en: "JSON file modification → deployment needed → slow reflection",
          },
          impact: { ko: "모든 다국어 텍스트", en: "All multilingual text" },
        },
        candidates: [
          {
            name: { ko: "JSON 파일 기반", en: "JSON File Based" },
            pros: {
              ko: "간단한 구현, 빌드 타임 최적화",
              en: "Simple implementation, build-time optimization",
            },
            cons: { ko: "수정 시 재배포 필요", en: "Redeployment needed for modifications" },
          },
          {
            name: { ko: "DB 기반", en: "DB Based" },
            pros: {
              ko: "실시간 수정, 관리자 UI 가능",
              en: "Real-time modification, admin UI possible",
            },
            cons: {
              ko: "런타임 로드 필요, 초기 로딩",
              en: "Runtime load needed, initial loading",
            },
          },
          {
            name: { ko: "외부 서비스 (Crowdin 등)", en: "External Service (Crowdin, etc.)" },
            pros: { ko: "협업 기능, 번역 관리", en: "Collaboration features, translation management" },
            cons: { ko: "비용, 외부 의존성", en: "Cost, external dependency" },
          },
        ],
        solution: {
          choice: "B",
          name: { ko: "DB 기반", en: "DB Based" },
          description: {
            ko: "I18n 테이블에 languageId, namespace, key, value 저장. API Route에서 namespace와 lang으로 번역 조회.",
            en: "Store languageId, namespace, key, value in I18n table. Query translations by namespace and lang in API Route.",
          },
        },
        reason: {
          ko: [
            "관리자가 UI에서 직접 번역 수정 가능",
            "재배포 없이 즉시 반영",
            "새 언어 추가 용이",
            "DB 기록으로 변경 이력 추적 가능",
          ],
          en: [
            "Admin can directly edit translations in UI",
            "Instant reflection without redeployment",
            "Easy to add new languages",
            "Change history tracking via DB records",
          ],
        },
      },
    ],
    folderStructure: [
      {
        name: "app/",
        children: [
          {
            name: "[locale]/",
            children: [
              {
                name: "(with-gnb)/",
                children: [
                  { name: "main/" },
                  { name: "company/" },
                  { name: "solution/" },
                  { name: "contact/" },
                  { name: "recruit/" },
                ],
              },
              { name: "admin/" },
            ],
          },
          {
            name: "api/",
            children: [
              { name: "auth/" },
              {
                name: "admin/",
                children: [
                  { name: "recruit/" },
                  { name: "media/" },
                  { name: "company/" },
                ],
              },
              { name: "application/" },
              { name: "file/" },
              { name: "contact/" },
            ],
          },
        ],
      },
      {
        name: "components/",
        children: [
          { name: "gnb/" },
          { name: "formComponents/" },
          {
            name: "applicationForm/",
            children: [
              { name: "atoms/" },
              { name: "molecules/" },
              { name: "organisms/" },
            ],
          },
          { name: "auth/" },
          { name: "buttonComponents/" },
        ],
      },
      {
        name: "lib/",
        children: [
          {
            name: "react-query/",
            children: [
              { name: "QUERY_KEYS.ts" },
              { name: "client.ts" },
              { name: "providers.tsx" },
            ],
          },
          { name: "api.ts" },
          { name: "email.ts" },
          { name: "uploadS3.ts" },
          { name: "validates.ts" },
        ],
      },
      {
        name: "stores/",
        children: [{ name: "modalStore.ts" }],
      },
      {
        name: "types/",
        children: [
          { name: "applicationForm.ts" },
          { name: "admin.ts" },
          { name: "next-auth.d.ts" },
        ],
      },
      {
        name: "server/",
        children: [{ name: "db.ts" }],
      },
      {
        name: "generated/",
        children: [{ name: "prisma/" }],
      },
      {
        name: "prisma/",
        children: [
          { name: "schema.prisma" },
          { name: "migrations/" },
          { name: "seed.ts" },
        ],
      },
    ],
  },
  {
    id: "double-u-works",
    slug: "double-u-works",
    title: {
      ko: "더블유웍스 - 사내올인원 통합 시스템",
      en: "Double U Works - Internal All-in-One System",
    },
    description: {
      ko: "사내 업무 효율화를 위해 근태 관리, 인사 관리, 전자 결재 등 핵심 기능을 하나의 플랫폼에서 통합 제공하는 올인원 업무 관리 시스템입니다.",
      en: "An all-in-one work management system that integrates core features like attendance, HR, and electronic approval for internal efficiency.",
    },
    period: "2025.05 ~ 2025.10",
    role: {
      ko: "FE 80%, BE 20% (단기간 서포트)",
      en: "FE 80%, BE 20% (Short-term support)",
    },
    team: "8",
    category: "company",
    company: "DoublT",
    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "Tailwind CSS 4.0",
      "React Query",
      "Context API",
      "React Hook Form",
      "Zod",
      "Socket.io",
      "Recharts",
    ],
    features: {
      ko: [
        "전자결재 시스템 (기안 작성/수정/삭제, 순차/병렬/이중병렬 결재선)",
        "근태관리 시스템 (출퇴근, 휴가, 유연근로)",
        "인사관리 시스템 (직원 정보 CRUD, 조직도)",
        "JWT 기반 인증 + 자동 토큰 갱신",
        "권한 기반 라우트 보호",
      ],
      en: [
        "Electronic approval system (draft creation/edit/delete, sequential/parallel approval lines)",
        "Attendance management (check-in/out, leave, flexible work)",
        "HR management (employee info CRUD, org chart)",
        "JWT authentication + automatic token refresh",
        "Permission-based route protection",
      ],
    },
    responsibilities: [
      {
        category: { ko: "전자결재 시스템", en: "Electronic Approval System" },
        items: {
          ko: [
            "기안 작성/수정/삭제 및 결재선 관리 UI 구현",
            "순차/병렬/이중병렬 결재 타입별 분기 처리",
            "API 연동 및 복잡한 상태 관리",
          ],
          en: [
            "Draft creation/edit/delete and approval line management UI",
            "Sequential/parallel/dual-parallel approval type branching",
            "API integration and complex state management",
          ],
        },
      },
      {
        category: { ko: "근태관리 시스템", en: "Attendance Management System" },
        items: {
          ko: [
            "출퇴근 체크인/아웃, 유연근로 등 실시간 상태 표시",
            "휴가/근무 요청 폼 및 승인 플로우 구현",
            "API 모듈 설계 및 유지보수",
          ],
          en: [
            "Check-in/out, flexible work real-time status display",
            "Leave/work request form and approval flow implementation",
            "API module design and maintenance",
          ],
        },
      },
      {
        category: { ko: "공통 아키텍처", en: "Common Architecture" },
        items: {
          ko: [
            "Axios 인터셉터 기반 API 에러 중앙 처리 구현",
            "JWT 토큰 자동 갱신 로직 (동시 요청 큐 처리)",
            "React Query + Context 기반 상태 관리 아키텍처 설계",
          ],
          en: [
            "Axios interceptor based API error centralization",
            "JWT token auto-refresh logic (concurrent request queue handling)",
            "React Query + Context based state management architecture design",
          ],
        },
      },
    ],
    detailedDescription: {
      ko: "DoubltWorks는 기업용 통합 업무 시스템으로, 전자결재, 근태관리, 인사관리, CRM, ERP 등의 기능을 하나의 플랫폼에서 제공합니다. React 19와 최신 상태 관리 패턴을 적용하여 대규모 엔터프라이즈 애플리케이션을 구현했습니다.",
      en: "DoubltWorks is an enterprise integrated work system providing electronic approval, attendance, HR, CRM, and ERP features in one platform. Implemented large-scale enterprise application with React 19 and modern state management patterns.",
    },
    techImplementation: [
      {
        category: { ko: "타입 시스템 설계", en: "Type System Design" },
        details: {
          ko: [
            "대규모 타입 정의 시스템 설계 및 유지보수",
            "API 응답 타입 ApiResponse<T> 추상화로 타입 재사용성 확보",
            "결재 상태 등 10개 이상의 상태값을 Union 타입으로 제한하여 런타임 에러 방지",
          ],
          en: [
            "Large-scale type definition system design and maintenance",
            "Type reusability through ApiResponse<T> abstraction",
            "Runtime error prevention by constraining 10+ states with Union types",
          ],
        },
      },
      {
        category: { ko: "상태 관리 전략", en: "State Management Strategy" },
        details: {
          ko: [
            "React Query(서버) + Context(클라이언트) 역할 분리로 성능 최적화",
            "staleTime/gcTime 설정으로 불필요한 API 호출 50% 감소",
            "QUERY_KEYS 중앙화로 캐시 무효화 전략 체계화",
          ],
          en: [
            "Performance optimization through React Query (server) + Context (client) separation",
            "50% reduction in unnecessary API calls through staleTime/gcTime settings",
            "Systematic cache invalidation strategy via QUERY_KEYS centralization",
          ],
        },
      },
      {
        category: { ko: "컴포넌트 설계", en: "Component Design" },
        details: {
          ko: [
            "공용 컴포넌트 설계 (모달, 폼 입력, 테이블 등)",
            "비즈니스 로직 훅 추출 (useDebounce, usePagination 등)",
            "Provider 패턴으로 전역 상태를 Context로 관리",
            "Atomic Design 패턴으로 복잡한 UI를 작은 단위로 분해",
          ],
          en: [
            "Common component design (modal, form inputs, tables, etc.)",
            "Business logic hook extraction (useDebounce, usePagination, etc.)",
            "Provider pattern for global state management via Context",
            "Atomic Design pattern for decomposing complex UI into small units",
          ],
        },
      },
      {
        category: { ko: "API 계층 설계", en: "API Layer Design" },
        details: {
          ko: [
            "Axios 인터셉터 기반 에러 코드별 메시지 자동 표시",
            "401 에러 시 Access Token 자동 갱신 + 실패한 요청 재시도",
            "토큰 갱신 중 추가 요청을 큐에 대기시켜 중복 갱신 방지",
            "도메인별 API 함수 분리로 유지보수성 향상",
          ],
          en: [
            "Axios interceptor based auto error message display by error code",
            "Auto Access Token refresh on 401 error + failed request retry",
            "Queue additional requests during token refresh to prevent duplicate refresh",
            "Domain-based API function separation for improved maintainability",
          ],
        },
      },
      {
        category: { ko: "성능 최적화", en: "Performance Optimization" },
        details: {
          ko: [
            "Debounce로 검색 입력 최적화, 불필요한 API 호출 방지",
            "requestAnimationFrame으로 반응형 UI 스케일링에 부드러운 전환",
            "React Query 캐싱으로 동일 데이터 재요청 방지",
            "라우트 기반 동적 import로 초기 로딩 최적화",
          ],
          en: [
            "Debounce for search input optimization, preventing unnecessary API calls",
            "requestAnimationFrame for smooth responsive UI scaling transitions",
            "React Query caching to prevent duplicate data requests",
            "Route-based dynamic import for initial loading optimization",
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: {
          ko: "Detail 페이지 초기값 세팅",
          en: "Detail Page Initial Value Setting",
        },
        situation: {
          environment: {
            ko: "Detail/Edit 페이지에서 서버 데이터로 폼 초기값 설정",
            en: "Setting form initial values with server data on Detail/Edit pages",
          },
          symptom: {
            ko: "데이터 fetch 완료 전 폼이 빈 값으로 렌더링됨",
            en: "Form rendered empty before data fetch complete",
          },
          impact: {
            ko: "전자결재 수정, 인사정보 수정, 근태 요청 수정 등 모든 Edit 페이지",
            en: "All Edit pages including approval edit, HR info edit, attendance request edit",
          },
        },
        candidates: [
          {
            name: { ko: "useEffect로 초기값 설정", en: "Set initial values with useEffect" },
            pros: { ko: "간단하고 직관적, React 표준 패턴", en: "Simple and intuitive, React standard pattern" },
            cons: { ko: "추가 렌더링 1회 발생", en: "One additional render occurs" },
          },
          {
            name: { ko: "부모-자식 컴포넌트 분리", en: "Parent-child component separation" },
            pros: { ko: "깔끔한 데이터 흐름, useEffect 불필요", en: "Clean data flow, no useEffect needed" },
            cons: { ko: "컴포넌트 구조 변경 필요", en: "Component structure change required" },
          },
          {
            name: { ko: "React Query initialData", en: "React Query initialData" },
            pros: { ko: "캐시된 데이터 즉시 사용 가능", en: "Cached data immediately available" },
            cons: { ko: "첫 로드 시 캐시 없으면 동일 문제", en: "Same issue if no cache on first load" },
          },
          {
            name: { ko: "Suspense + useSuspenseQuery", en: "Suspense + useSuspenseQuery" },
            pros: { ko: "로딩 상태 선언적 처리", en: "Declarative loading state handling" },
            cons: { ko: "에러 바운더리 필요, 복잡성 증가", en: "Error boundary needed, increased complexity" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "useEffect로 초기값 설정", en: "Set initial values with useEffect" },
          description: {
            ko: "useForm + useEffect + reset 패턴 적용. data가 로드되면 reset() 함수를 호출하여 폼 값을 서버 데이터로 업데이트.",
            en: "Applied useForm + useEffect + reset pattern. Call reset() function when data loads to update form values with server data.",
          },
        },
        reason: {
          ko: [
            "기존 코드베이스에서 동일 패턴 사용 중 (팀 일관성)",
            "상태 변화 흐름을 명확하게 추적 가능 (디버깅 용이성)",
            "기존 컴포넌트 구조 변경 없이 빠른 적용 (구현 속도)",
            "React 공식 문서에서 권장하는 패턴 (안정성)",
          ],
          en: [
            "Same pattern used in existing codebase (team consistency)",
            "Clear state change flow tracking (debugging ease)",
            "Quick application without changing existing component structure (implementation speed)",
            "Pattern recommended in React official documentation (stability)",
          ],
        },
      },
      {
        title: {
          ko: "API 에러 중앙 처리",
          en: "Centralized API Error Handling",
        },
        situation: {
          environment: {
            ko: "각 API 호출마다 개별적으로 에러 처리",
            en: "Individual error handling per API call",
          },
          symptom: {
            ko: "중복 코드, 일관성 없는 에러 메시지, 누락된 에러 처리",
            en: "Duplicate code, inconsistent error messages, missing error handling",
          },
          impact: {
            ko: "전체 API 호출",
            en: "All API calls",
          },
        },
        candidates: [
          {
            name: { ko: "Axios 인터셉터", en: "Axios Interceptor" },
            pros: { ko: "중앙 집중식 처리, 자동 적용", en: "Centralized handling, auto-applied" },
            cons: { ko: "세밀한 제어 어려움", en: "Fine-grained control difficult" },
          },
          {
            name: { ko: "래퍼 함수", en: "Wrapper Function" },
            pros: { ko: "유연한 커스터마이징", en: "Flexible customization" },
            cons: { ko: "모든 API에 적용 필요", en: "Must apply to all APIs" },
          },
          {
            name: { ko: "React Query onError", en: "React Query onError" },
            pros: { ko: "React Query와 통합", en: "Integrated with React Query" },
            cons: { ko: "Query 외 호출은 별도 처리", en: "Non-Query calls need separate handling" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "Axios 인터셉터", en: "Axios Interceptor" },
          description: {
            ko: "Axios 인터셉터로 중앙 집중식 처리. 에러 코드별 메시지 매핑(ERROR_MESSAGES)으로 일관된 에러 표시. skipDefaultErrorHandling 옵션으로 특수 케이스 대응 가능.",
            en: "Centralized handling via Axios interceptor. Consistent error display with error code to message mapping (ERROR_MESSAGES). Handle special cases with skipDefaultErrorHandling option.",
          },
        },
        reason: {
          ko: [
            "모든 API 호출에 자동 적용 (일관성)",
            "에러 처리 로직 한 곳에서 관리 (유지보수)",
            "에러 코드 추가/수정 용이 (확장성)",
            "skipDefaultErrorHandling 옵션으로 특수 케이스 대응 (선택적 처리)",
          ],
          en: [
            "Auto-applied to all API calls (consistency)",
            "Error handling logic managed in one place (maintainability)",
            "Easy to add/modify error codes (extensibility)",
            "Handle special cases with skipDefaultErrorHandling option (selective handling)",
          ],
        },
      },
      {
        title: { ko: "JWT 토큰 자동 갱신", en: "JWT Token Auto-refresh" },
        situation: {
          environment: {
            ko: "Access Token 만료 시",
            en: "When Access Token expires",
          },
          symptom: {
            ko: "401 에러 발생, 사용자가 강제 로그아웃됨",
            en: "401 error occurred, user forced to logout",
          },
          impact: {
            ko: "모든 인증 필요 API 호출",
            en: "All authenticated API calls",
          },
        },
        candidates: [
          {
            name: { ko: "401 에러 시 자동 갱신", en: "Auto-refresh on 401 error" },
            pros: { ko: "사용자 경험 끊김 없음", en: "Seamless user experience" },
            cons: { ko: "동시 요청 시 중복 갱신 가능", en: "Duplicate refresh possible on concurrent requests" },
          },
          {
            name: { ko: "만료 전 사전 갱신", en: "Pre-refresh before expiration" },
            pros: { ko: "401 에러 방지", en: "Prevents 401 error" },
            cons: { ko: "타이밍 계산 복잡", en: "Complex timing calculation" },
          },
          {
            name: { ko: "매 요청마다 갱신", en: "Refresh on every request" },
            pros: { ko: "항상 최신 토큰", en: "Always fresh token" },
            cons: { ko: "불필요한 API 호출", en: "Unnecessary API calls" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "401 에러 시 자동 갱신 + 중복 방지 로직", en: "Auto-refresh on 401 + duplicate prevention" },
          description: {
            ko: "isRefreshing 플래그와 failedQueue로 큐 패턴 적용. 첫 번째 401 요청만 토큰 갱신 진행, 동시 요청들은 대기열에 추가 후 갱신 완료 시 일괄 재시도.",
            en: "Applied queue pattern with isRefreshing flag and failedQueue. Only first 401 request refreshes token, concurrent requests wait in queue then retry after refresh.",
          },
        },
        reason: {
          ko: [
            "토큰 만료 시에도 사용자 경험 끊김 없음 (UX)",
            "필요할 때만 갱신하여 불필요한 API 호출 방지 (효율성)",
            "동시 요청 시 중복 갱신 방지 - 큐 패턴 (안정성)",
            "갱신 실패 시 명확한 로그아웃 처리 (실패 처리)",
          ],
          en: [
            "Seamless UX even on token expiration (UX)",
            "Refresh only when needed to prevent unnecessary API calls (efficiency)",
            "Prevent duplicate refresh on concurrent requests - queue pattern (stability)",
            "Clear logout handling on refresh failure (failure handling)",
          ],
        },
      },
      {
        title: {
          ko: "서버 상태 및 클라이언트 전역 상태 분리",
          en: "Server State and Client Global State Separation",
        },
        situation: {
          environment: {
            ko: "전역 상태 관리 설계 단계",
            en: "Global state management design phase",
          },
          symptom: {
            ko: "모든 상태를 Context로 관리하니 불필요한 리렌더링 발생",
            en: "Managing all state with Context caused unnecessary re-renders",
          },
          impact: {
            ko: "전체 앱 성능",
            en: "Overall app performance",
          },
        },
        candidates: [
          {
            name: { ko: "모두 Context", en: "All Context" },
            pros: { ko: "단순한 구조", en: "Simple structure" },
            cons: { ko: "불필요한 리렌더링, 캐싱 없음", en: "Unnecessary re-renders, no caching" },
          },
          {
            name: { ko: "다른 전역 상태관리 라이브러리 적용", en: "Apply other state management library" },
            pros: { ko: "강력한 디버깅, 미들웨어", en: "Powerful debugging, middleware" },
            cons: { ko: "프로젝트 진행 중 변경 시 side effect 가능성, 시간 소요", en: "Side effect risk when changing mid-project, time consuming" },
          },
          {
            name: { ko: "React Query + Context 분리", en: "React Query + Context separation" },
            pros: { ko: "각 상태에 최적화된 도구", en: "Optimized tools for each state type" },
            cons: { ko: "두 가지 학습 필요", en: "Learning two tools required" },
          },
        ],
        solution: {
          choice: "C",
          name: { ko: "React Query + Context 분리", en: "React Query + Context Separation" },
          description: {
            ko: "서버 상태(사용자 정보, 기안 목록, 직원 목록)는 React Query로, 클라이언트 상태(사이드바 열림/닫힘, UI 스케일, 모달 상태)는 Context로 관리. QUERY_KEYS 중앙화로 캐시 무효화 전략 체계화.",
            en: "Server state (user info, approval list, employee list) via React Query, client state (sidebar open/close, UI scale, modal state) via Context. Centralized QUERY_KEYS for systematic cache invalidation strategy.",
          },
        },
        reason: {
          ko: [
            "서버 상태 변경 시 Context 구독자가 리렌더링되지 않음 (성능)",
            "React Query가 자동으로 캐싱 + 백그라운드 재검증 (캐싱)",
            "React Query DevTools로 서버 상태 디버깅 용이 (개발 경험)",
            "각 상태의 특성에 맞는 도구 사용 (적합성)",
          ],
          en: [
            "No Context subscriber re-render on server state change (performance)",
            "Auto caching + background revalidation via React Query (caching)",
            "Easy server state debugging with React Query DevTools (dev experience)",
            "Using right tool for each state type (suitability)",
          ],
        },
      },
    ],
    folderStructure: [
      {
        name: "apis/",
        children: [
          { name: "Axios.ts" },
          { name: "QUERY_KEYS.ts" },
          { name: "[module]/" },
        ],
      },
      {
        name: "components/",
        children: [
          { name: "Layout.tsx" },
          { name: "Modal/" },
          { name: "Form/" },
          { name: "Table/" },
        ],
      },
      {
        name: "context/",
        children: [{ name: "UserContext.tsx" }, { name: "UIContext.tsx" }],
      },
      {
        name: "hooks/",
        children: [
          { name: "useUser.ts" },
          { name: "useDebounce.ts" },
          { name: "usePagination.ts" },
        ],
      },
      {
        name: "pages/",
        children: [
          { name: "approval/" },
          { name: "timekeeping/" },
          { name: "hr/" },
        ],
      },
      { name: "types/" },
      { name: "utils/" },
      { name: "constants/" },
      { name: "routes/" },
    ],
  },
  {
    id: "krc",
    slug: "krc",
    title: {
      ko: "한국농어촌공사 민원관리 시스템",
      en: "KRC Complaint Management System",
    },
    description: {
      ko: "한국농어촌공사의 민원을 효율적으로 관리하고 시각적으로 파악할 수 있는 통합 플랫폼을 제공합니다.",
      en: "Provides an integrated platform for efficiently managing and visualizing complaints for Korea Rural Community Corporation.",
    },
    period: "2023.10 ~ 2024.09",
    role: {
      ko: "프론트엔드 개발",
      en: "Frontend Development",
    },
    team: "18",
    category: "company",
    company: "Tmax A&C",
    techStack: [
      "React",
      "TypeScript",
      "React Query",
      "MobX",
      "React Hook Form",
      "React DnD",
      "Storybook",
      "Vite",
      "Husky",
    ],
    features: {
      ko: [
        "VOC 조회 칸반보드 및 테이블 형식 FE 구현",
        "VOC 설정 화면 FE 구현",
        "통계 화면 FE 구현",
        "Drag&Drop 보드 성능/접근성 고려",
        "무한 스크롤 구현",
      ],
      en: [
        "VOC inquiry Kanban board and table format FE implementation",
        "VOC settings screen FE implementation",
        "Statistics screen FE implementation",
        "Drag&Drop board with performance/accessibility considerations",
        "Infinite scroll implementation",
      ],
    },
    responsibilities: [
      {
        category: { ko: "VOC 조회 시스템", en: "VOC Inquiry System" },
        items: {
          ko: [
            "칸반보드 뷰 구현: VOC 상태코드별 그룹화 + Intersection Observer 기반 무한 스크롤",
            "테이블 뷰 구현: 다중 필드 정렬 로직 (접수일/마감일 독립 정렬, 3단계 상태 전환)",
            "React Query 무한 쿼리: useInfiniteQuery + getNextPageParam으로 페이지네이션 최적화",
            "MobX 연동: vocProcessingStore와 observer 패턴으로 필터 조건 실시간 동기화",
          ],
          en: [
            "Kanban board view: VOC status grouping + Intersection Observer infinite scroll",
            "Table view: Multi-field sorting logic (receipt/deadline independent sort, 3-state toggle)",
            "React Query infinite query: useInfiniteQuery + getNextPageParam pagination optimization",
            "MobX integration: vocProcessingStore + observer pattern for real-time filter sync",
          ],
        },
      },
      {
        category: { ko: "VOC 설정 화면", en: "VOC Settings Screen" },
        items: {
          ko: [
            "VOC 유형 관리: CRUD + 드래그 앤 드롭 순서 변경 (react-dnd)",
            "DnD 최적화: DOM Rect 기반 마우스 위치 판정, 1/4 임계값 이상 드래그 시에만 위치 변경",
            "부서별 배정자 관리: AutoComplete 검색 + 권한 기반 접근 제어",
            "MobX + Context 패턴: 편집 모드 상태 관리, 변경된 항목만 추출하여 API 요청 최적화",
          ],
          en: [
            "VOC type management: CRUD + drag-and-drop ordering (react-dnd)",
            "DnD optimization: DOM Rect mouse position detection, position change only beyond 1/4 threshold",
            "Department assignee management: AutoComplete search + permission-based access control",
            "MobX + Context pattern: Edit mode state management, extract only changed items for API optimization",
          ],
        },
      },
      {
        category: { ko: "통계 화면", en: "Statistics Screen" },
        items: {
          ko: [
            "VOC 통계 대시보드: 처리 현황, 유형별/부서별/월별 분석 등 14개 통계 지표 UI 구현",
            "recharts 기반 데이터 시각화: 차트 컴포넌트 연동 및 반응형 처리",
            "엑셀 내보내기 기능: XLSX 라이브러리 + React 18 createRoot 동적 렌더링",
            "복합 필터 시스템: FilterDrawer + React Hook Form 연동 (기간/부서/유형/채널 등 다중 조건)",
          ],
          en: [
            "VOC statistics dashboard: 14 statistical indicators UI (processing status, type/dept/monthly analysis)",
            "recharts data visualization: Chart component integration and responsive handling",
            "Excel export: XLSX library + React 18 createRoot dynamic rendering",
            "Complex filter system: FilterDrawer + React Hook Form (period/dept/type/channel multi-conditions)",
          ],
        },
      },
      {
        category: { ko: "공통 컴포넌트", en: "Common Components" },
        items: {
          ko: [
            "FilterDrawer 컴포넌트: useFilterDrawer 훅으로 필터 상태 추상화",
            "StatisticsTable: Compound Component 패턴, 복합 헤더 지원",
            "useIntersection 훅: Intersection Observer API 래핑, 무한 스크롤 재사용",
            "EditorViewer 공통화: react-quill 기반 에디터/뷰어 분리",
          ],
          en: [
            "FilterDrawer component: Filter state abstraction with useFilterDrawer hook",
            "StatisticsTable: Compound Component pattern, complex header support",
            "useIntersection hook: Intersection Observer API wrapper, reusable infinite scroll",
            "EditorViewer: react-quill based editor/viewer separation",
          ],
        },
      },
    ],
    detailedDescription: {
      ko: "한국농어촌공사의 민원(VOC)을 체계적으로 관리하기 위한 시스템입니다. 칸반보드 형태의 직관적인 UI와 다양한 필터링, 통계 기능을 제공하여 민원 처리 현황을 실시간으로 파악할 수 있습니다.",
      en: "A system for systematically managing VOC (Voice of Customer) for Korea Rural Community Corporation. Provides intuitive Kanban board UI with various filtering and statistics features for real-time complaint status monitoring.",
    },
    techImplementation: [
      {
        category: { ko: "상태 관리 패턴", en: "State Management Pattern" },
        details: {
          ko: [
            "React Query + MobX + React Hook Form 3중 패턴 활용",
            "React Query: 서버 데이터 캐싱 및 동기화",
            "MobX: 복잡한 UI 상태 (필터, 정렬, 뷰 모드)",
            "React Hook Form: 폼 상태 관리 및 유효성 검증",
          ],
          en: [
            "Triple pattern using React Query + MobX + React Hook Form",
            "React Query: Server data caching and sync",
            "MobX: Complex UI state (filter, sort, view mode)",
            "React Hook Form: Form state management and validation",
          ],
        },
      },
      {
        category: { ko: "DnD 구현", en: "DnD Implementation" },
        details: {
          ko: [
            "react-dnd 기반 칸반보드 드래그앤드롭",
            "드래그 중 성능 최적화 (throttle, requestAnimationFrame)",
            "터치 디바이스 지원을 위한 touch-backend 적용",
          ],
          en: [
            "react-dnd based Kanban board drag and drop",
            "Performance optimization during drag (throttle, requestAnimationFrame)",
            "touch-backend for touch device support",
          ],
        },
      },
      {
        category: {
          ko: "복잡한 UI 패턴 구현",
          en: "Complex UI Pattern Implementation",
        },
        details: {
          ko: [
            "VOC 상태코드별 그룹화 + 카드 컴포넌트 + 무한 스크롤 통합 칸반보드 뷰",
            "DOM Rect 기반 1/4 임계값 판정으로 정밀한 DnD 위치 계산",
            "접수일/마감일 독립 정렬, 3단계 상태 전환(미정렬→ASC→DESC) 다중 정렬 테이블",
            "FilterDrawer + React Hook Form 연동 복합 필터 시스템",
            "MUI TreeView로 VOC 카테고리 계층 구조 표현",
          ],
          en: [
            "Kanban board view with VOC status grouping + card component + infinite scroll",
            "Precise DnD position calculation with DOM Rect based 1/4 threshold",
            "Multi-sort table with independent receive/deadline date sorting, 3-state toggle (unsorted→ASC→DESC)",
            "Compound filter system with FilterDrawer + React Hook Form integration",
            "VOC category hierarchy with MUI TreeView",
          ],
        },
      },
      {
        category: {
          ko: "데이터 시각화 & 내보내기",
          en: "Data Visualization & Export",
        },
        details: {
          ko: [
            "Recharts 기반 14개 통계 지표 시각화 (처리 현황, 유형별, 부서별, 월별 분석)",
            "XLSX table_to_book으로 현재 테이블 HTML 직접 엑셀 변환",
            "React 18 createRoot로 JSX 동적 렌더링 후 전체 데이터 XLSX 변환",
            "StatisticsTable Compound Component로 2~3행 복합 헤더 + Tooltip 지원",
          ],
          en: [
            "Recharts based 14 statistics visualization (processing status, by type, by department, monthly analysis)",
            "Direct Excel conversion from table HTML using XLSX table_to_book",
            "Full data XLSX conversion with React 18 createRoot for dynamic JSX rendering",
            "StatisticsTable Compound Component with 2-3 row complex header + Tooltip support",
          ],
        },
      },
      {
        category: {
          ko: "컴포넌트 설계 & 재사용성",
          en: "Component Design & Reusability",
        },
        details: {
          ko: [
            "StatisticsTable, RoundTable, Modal 등 Compound Component 패턴 설계",
            "useFilterDrawer, useIntersection, useModal 등 커스텀 훅 추상화",
            "react-quill 기반 EditorViewer 분리, 조건부 이미지 업로드 비활성화",
            "TypeScript 타입 정의, 도메인별 Request/Response 타입 체계화",
          ],
          en: [
            "Compound Component pattern design (StatisticsTable, RoundTable, Modal)",
            "Custom hook abstraction (useFilterDrawer, useIntersection, useModal)",
            "EditorViewer separation with react-quill, conditional image upload disable",
            "TypeScript type definition, domain-based Request/Response type systematization",
          ],
        },
      },
      {
        category: { ko: "성능 최적화", en: "Performance Optimization" },
        details: {
          ko: [
            "Intersection Observer API로 대용량 VOC 리스트 점진적 로딩",
            "enabled 옵션으로 필터 준비 전 불필요한 API 호출 방지",
            "MobX @observable + @action으로 필요한 컴포넌트만 리렌더링",
            "React Query select에서 CustomError throw, Fallback UI 표시",
          ],
          en: [
            "Progressive loading of large VOC lists with Intersection Observer API",
            "Prevent unnecessary API calls before filter ready with enabled option",
            "Re-render only necessary components with MobX @observable + @action",
            "CustomError throw in React Query select, Fallback UI display",
          ],
        },
      },
      {
        category: { ko: "폼 & 유효성 검증", en: "Form & Validation" },
        details: {
          ko: [
            "React Hook Form으로 통계 필터, VOC 등록/수정 폼 연동",
            "Date 객체 → YYYY-MM-DD HH:mm:ss 서버 형식 자동 변환",
            "부서/배정자별 다른 검색 로직의 AutoComplete, 디바운싱 처리",
            "hasAddManagerAuth 등 권한 플래그로 버튼/기능 조건부 렌더링",
          ],
          en: [
            "React Hook Form integration for statistics filter, VOC create/edit forms",
            "Auto conversion Date object → YYYY-MM-DD HH:mm:ss server format",
            "AutoComplete with different search logic by department/assignee, debouncing",
            "Conditional button/feature rendering with permission flags like hasAddManagerAuth",
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: {
          ko: "칸반보드 대용량 데이터 렌더링 성능 저하",
          en: "Kanban Board Large Data Rendering Performance Degradation",
        },
        situation: {
          environment: {
            ko: "VOC 조회 칸반보드에서 수백 건 이상 데이터 로드 시",
            en: "When loading hundreds of records in VOC inquiry kanban board",
          },
          symptom: {
            ko: "페이지 멈춤, 스크롤 버벅임, 브라우저 메모리 급증",
            en: "Page freeze, scroll stuttering, browser memory spike",
          },
          impact: {
            ko: "VOC 처리 화면 전체 사용성 저하",
            en: "Overall usability degradation of VOC processing screen",
          },
        },
        candidates: [
          {
            name: { ko: "페이지네이션", en: "Pagination" },
            pros: { ko: "구현 간단, 데이터 분리 명확", en: "Simple implementation, clear data separation" },
            cons: { ko: "페이지 이동 UX, 전체 목록 파악 어려움", en: "Page navigation UX, hard to see full list" },
          },
          {
            name: { ko: "가상 스크롤 (react-window)", en: "Virtual Scroll (react-window)" },
            pros: { ko: "렌더링 최적화", en: "Rendering optimization" },
            cons: { ko: "칸반보드 레이아웃 적용 복잡, DnD 처리 어려움", en: "Complex for kanban layout, difficult DnD handling" },
          },
          {
            name: { ko: "무한 스크롤 (Intersection Observer)", en: "Infinite Scroll (Intersection Observer)" },
            pros: { ko: "자연스러운 UX, 점진적 로딩", en: "Natural UX, progressive loading" },
            cons: { ko: "스크롤 위치 관리 필요", en: "Scroll position management needed" },
          },
        ],
        solution: {
          choice: "C",
          name: { ko: "무한 스크롤 + useInfiniteQuery", en: "Infinite Scroll + useInfiniteQuery" },
          description: {
            ko: "useIntersection 훅으로 Intersection Observer API 래핑. useInfiniteQuery + getNextPageParam으로 페이지네이션 최적화. enabled 옵션으로 필터 준비 전 요청 방지.",
            en: "Wrapped Intersection Observer API with useIntersection hook. Pagination optimization with useInfiniteQuery + getNextPageParam. Prevent requests before filter ready with enabled option.",
          },
        },
        reason: {
          ko: [
            "첫 페이지(20건)만 로드, DOM 노드 수 최소화 (초기 렌더링 최적화)",
            "스크롤하면 자동으로 다음 데이터 로드 (자연스러운 UX)",
            "React Query가 페이지별 캐시 관리 (메모리 효율)",
            "enabled 옵션으로 필터 준비 전 요청 차단 (중복 요청 방지)",
          ],
          en: [
            "Load only first page (20 items), minimize DOM nodes (initial render optimization)",
            "Auto load next data on scroll (natural UX)",
            "React Query manages page-wise cache (memory efficiency)",
            "Block requests before filter ready with enabled option (prevent duplicate requests)",
          ],
        },
      },
      {
        title: {
          ko: "React Query 캐시 키 불일치로 데이터 동기화 문제",
          en: "Data Sync Issue Due to React Query Cache Key Mismatch",
        },
        situation: {
          environment: {
            ko: "VOC 등록/수정 후 목록으로 돌아왔을 때",
            en: "When returning to list after VOC creation/edit",
          },
          symptom: {
            ko: "수정한 내용이 목록에 반영되지 않음, 새로고침해야 반영",
            en: "Modified content not reflected in list, had to refresh",
          },
          impact: {
            ko: "VOC CRUD 전체, 사용자 혼란 유발",
            en: "All VOC CRUD, causes user confusion",
          },
        },
        candidates: [
          {
            name: { ko: "문자열 키 직접 사용", en: "Direct string key usage" },
            pros: { ko: "간단", en: "Simple" },
            cons: { ko: "오타 위험, 관리 어려움", en: "Typo risk, hard to manage" },
          },
          {
            name: { ko: "상수 파일 분리", en: "Separate constants file" },
            pros: { ko: "중앙 관리", en: "Centralized management" },
            cons: { ko: "계층 구조 표현 한계", en: "Limited hierarchy expression" },
          },
          {
            name: { ko: "팩토리 함수 패턴", en: "Factory function pattern" },
            pros: { ko: "계층적 구조, 타입 안정성", en: "Hierarchical structure, type safety" },
            cons: { ko: "초기 설정 필요", en: "Initial setup needed" },
          },
        ],
        solution: {
          choice: "C",
          name: { ko: "팩토리 함수 패턴으로 QUERY_KEYS 중앙 관리", en: "Centralized QUERY_KEYS with Factory Function Pattern" },
          description: {
            ko: "QUERY_KEYS 객체에 도메인별 팩토리 함수 정의. VOC_PROCESSING.all()로 하위 쿼리 일괄 무효화. 상위 키가 하위 키를 포함하는 계층 구조 설계.",
            en: "Defined domain-specific factory functions in QUERY_KEYS object. Bulk invalidate child queries with VOC_PROCESSING.all(). Designed hierarchy where parent key contains child keys.",
          },
        },
        reason: {
          ko: [
            "함수 호출로 타입 체크, 자동완성 지원 (오타 방지)",
            "QUERY_KEYS.VOC_PROCESSING.all()로 하위 모든 쿼리 무효화 (계층적 무효화)",
            "모든 팀원이 동일한 패턴 사용 (일관성)",
            "새 도메인 추가 시 패턴만 따라가면 됨 (확장성)",
          ],
          en: [
            "Type check and autocomplete via function calls (typo prevention)",
            "Invalidate all child queries with QUERY_KEYS.VOC_PROCESSING.all() (hierarchical invalidation)",
            "Same pattern for all team members (consistency)",
            "Just follow pattern for new domains (extensibility)",
          ],
        },
      },
      {
        title: {
          ko: "DnD 드래그 시 아이템 위치가 부자연스럽게 변경",
          en: "DnD Item Position Changes Unnaturally",
        },
        situation: {
          environment: {
            ko: "VOC 유형 관리에서 순서 변경 시",
            en: "When changing order in VOC type management",
          },
          symptom: {
            ko: "마우스가 아이템 위에 살짝만 올라가도 위치가 바뀜",
            en: "Position changed even when mouse slightly hovers over item",
          },
          impact: {
            ko: "VOC 유형 순서, FAQ 카테고리 순서 변경 기능",
            en: "VOC type order, FAQ category order change features",
          },
        },
        candidates: [
          {
            name: { ko: "단순 hover 감지", en: "Simple hover detection" },
            pros: { ko: "구현 간단", en: "Simple implementation" },
            cons: { ko: "너무 민감, 의도치 않은 이동", en: "Too sensitive, unintended moves" },
          },
          {
            name: { ko: "중점(50%) 기준", en: "Midpoint (50%) threshold" },
            pros: { ko: "자연스러운 UX", en: "Natural UX" },
            cons: { ko: "큰 아이템에서 반응 느림", en: "Slow response for large items" },
          },
          {
            name: { ko: "1/4 지점 기준", en: "1/4 point threshold" },
            pros: { ko: "정밀한 제어, 자연스러운 UX", en: "Precise control, natural UX" },
            cons: { ko: "구현 복잡도 증가", en: "Increased implementation complexity" },
          },
        ],
        solution: {
          choice: "C",
          name: { ko: "1/4 지점 기준 + 드롭 실패 시 롤백", en: "1/4 Point Threshold + Rollback on Drop Failure" },
          description: {
            ko: "DOM Rect 기반으로 영역의 1/4 지점 계산. 아래로 드래그 시 1/4 이상 들어와야 이동, 위로 드래그 시도 동일. didDrop() 실패 시 originalIndex로 복원.",
            en: "Calculate 1/4 point of area based on DOM Rect. Must enter 1/4 to move when dragging down, same for up. Restore to originalIndex on didDrop() failure.",
          },
        },
        reason: {
          ko: [
            "1/4 지점까지 들어와야 이동, 의도치 않은 변경 방지 (정밀한 UX)",
            "opacity: 0.4로 드래그 중인 아이템 표시 (시각적 피드백)",
            "didDrop() 실패 시 originalIndex로 복원 (안전한 롤백)",
            "useCallback으로 moveItem 메모이제이션 (성능 최적화)",
          ],
          en: [
            "Must enter 1/4 to move, prevent unintended changes (precise UX)",
            "Show dragging item with opacity: 0.4 (visual feedback)",
            "Restore to originalIndex on didDrop() failure (safe rollback)",
            "Memoize moveItem with useCallback (performance optimization)",
          ],
        },
      },
      {
        title: {
          ko: "텍스트 에디터 글자수 계산 오류",
          en: "Text Editor Character Count Error",
        },
        situation: {
          environment: {
            ko: "VOC 답변, 공지사항 작성 시",
            en: "When writing VOC answer or notice",
          },
          symptom: {
            ko: "정확히 2000자 입력 후 수정 시도 시 \"글자수 초과\" 에러",
            en: "\"Character limit exceeded\" error when trying to edit after exactly 2000 characters",
          },
          impact: {
            ko: "모든 텍스트 에디터 사용 화면",
            en: "All text editor screens",
          },
        },
        candidates: [
          {
            name: { ko: "trim() 처리", en: "trim() processing" },
            pros: { ko: "간단", en: "Simple" },
            cons: { ko: "의도적 공백도 제거됨", en: "Intentional spaces also removed" },
          },
          {
            name: { ko: "정규식으로 개행 제거", en: "Remove newlines with regex" },
            pros: { ko: "정확", en: "Accurate" },
            cons: { ko: "중간 개행도 제거될 위험", en: "Risk of removing middle newlines" },
          },
          {
            name: { ko: "마지막 문자만 체크", en: "Check only last character" },
            pros: { ko: "정확, 안전", en: "Accurate, safe" },
            cons: { ko: "조건문 추가 필요", en: "Additional condition needed" },
          },
        ],
        solution: {
          choice: "C",
          name: { ko: "마지막 개행 문자만 체크", en: "Check Only Last Newline Character" },
          description: {
            ko: "마지막 문자가 개행(\\n)이면 길이에서 -1. Quill 에디터가 항상 마지막에 개행 추가하는 특성을 반영하여 실제 사용자 입력 글자수 계산.",
            en: "Subtract 1 from length if last char is newline (\\n). Calculate actual user input count reflecting Quill editor behavior of always adding newline at end.",
          },
        },
        reason: {
          ko: [
            "Quill 에디터가 항상 마지막에 개행 추가하는 특성 반영 (정확성)",
            "중간 개행은 유지, 마지막 개행만 제외 (안전성)",
            "사용자가 입력한 실제 글자수와 일치 (일관성)",
          ],
          en: [
            "Reflects Quill editor behavior of always adding newline at end (accuracy)",
            "Keep middle newlines, exclude only last (safety)",
            "Matches actual character count entered by user (consistency)",
          ],
        },
      },
      {
        title: {
          ko: "MobX + React Query 상태 동기화 문제",
          en: "MobX + React Query State Sync Issue",
        },
        situation: {
          environment: {
            ko: "필터 변경 후 API 호출 시",
            en: "When calling API after filter change",
          },
          symptom: {
            ko: "필터 UI는 변경되었으나 API 파라미터는 이전 값으로 호출",
            en: "Filter UI changed but API called with previous parameter values",
          },
          impact: {
            ko: "VOC 조회, 통계 필터 전체",
            en: "All VOC inquiry and statistics filters",
          },
        },
        candidates: [
          {
            name: { ko: "MobX 제거, React Query만 사용", en: "Remove MobX, use only React Query" },
            pros: { ko: "단순화", en: "Simplification" },
            cons: { ko: "클라이언트 UI 상태 관리 어려움", en: "Hard to manage client UI state" },
          },
          {
            name: { ko: "역할 분리 (MobX: UI, Query: 서버)", en: "Role separation (MobX: UI, Query: server)" },
            pros: { ko: "명확한 책임", en: "Clear responsibilities" },
            cons: { ko: "동기화 로직 필요", en: "Sync logic needed" },
          },
          {
            name: { ko: "observer + JSON.stringify", en: "observer + JSON.stringify" },
            pros: { ko: "MobX 변경 감지 + 정확한 캐시 키", en: "MobX change detection + accurate cache key" },
            cons: { ko: "직렬화 비용", en: "Serialization cost" },
          },
        ],
        solution: {
          choice: "B+C",
          name: { ko: "역할 분리 + observer + JSON 직렬화", en: "Role Separation + observer + JSON Serialization" },
          description: {
            ko: "MobX: 에러 상태, UI 토글 담당. React Query: 서버 데이터 담당. observer HOC로 MobX 변경 감지. JSON.stringify로 정확한 캐시 키 생성. 새 객체 생성으로 불변성 보장.",
            en: "MobX handles error state, UI toggle. React Query handles server data. Detect MobX changes with observer HOC. Create accurate cache key with JSON.stringify. Ensure immutability with new object creation.",
          },
        },
        reason: {
          ko: [
            "MobX: 에러 상태, UI 토글 / React Query: 서버 데이터로 역할 분리 (역할 분리)",
            "observer HOC가 MobX 변경 감지하여 자동 리렌더링 (반응성)",
            "JSON.stringify로 객체 내용이 다르면 다른 캐시 키 (정확한 캐시)",
            "{ ...condition }으로 새 객체 생성, 변경 감지 보장 (불변성)",
          ],
          en: [
            "Role separation: MobX for error state, UI toggle / React Query for server data (role separation)",
            "observer HOC detects MobX changes for auto re-render (reactivity)",
            "Different cache key for different object content via JSON.stringify (accurate cache)",
            "Ensure change detection with new object creation { ...condition } (immutability)",
          ],
        },
      },
    ],
    folderStructure: [
      {
        name: "apis/",
        children: [
          { name: "Auth/" },
          { name: "VOCRegister/" },
          { name: "VocProcessing/" },
          { name: "Statistics/" },
          { name: "Faq/" },
          { name: "Workflow/" },
        ],
      },
      {
        name: "components/",
        children: [
          { name: "Modal/" },
          { name: "Table/" },
          { name: "Editor/" },
          { name: "FilterDrawer/" },
          { name: "DatePicker/" },
        ],
      },
      {
        name: "stores/",
        children: [{ name: "Statistics/" }],
      },
      {
        name: "hooks/",
        children: [
          { name: "useModal.ts" },
          { name: "useFilterDrawer.ts" },
          { name: "useIntersection.ts" },
        ],
      },
      {
        name: "pages/",
        children: [
          { name: "home/" },
          { name: "vocRegistration/" },
          { name: "vocProcessing/" },
          { name: "statistics/" },
          { name: "faq/" },
        ],
      },
      { name: "typings/" },
      { name: "utils/" },
      { name: "routers/" },
      { name: "themes/" },
    ],
  },
  {
    id: "broadcasting-psychology",
    slug: "broadcasting-psychology",
    title: {
      ko: "방송통신고등학교 심리검사 3종",
      en: "Broadcasting High School Psychology Tests",
    },
    description: {
      ko: "학생들의 심리 상태를 진단하기 위한 심리 검사 시스템으로, 검사 완료 후 결과를 즉시 확인할 수 있습니다.",
      en: "A psychological test system for diagnosing students' mental states, with immediate results viewing.",
    },
    period: "2022.04 ~ 2022.05",
    role: {
      ko: "기획, 디자인, 프론트엔드 개발",
      en: "Planning, Design, Frontend Development",
    },
    team: "2",
    category: "company",
    company: "DH Wide",
    techStack: [
      "React",
      "Redux",
      "Redux-Saga",
      "Chart.js",
      "Recharts",
      "MUI",
      "SCSS",
    ],
    features: {
      ko: [
        "심리검사 문항 페이지네이션 (10문항씩)",
        "단일 선택 / 다중 선택 문항 지원",
        "검사 진행 상태 localStorage 저장 (이어하기)",
        "Holland 유형 레이더 차트, 바 차트 시각화",
        "검사 결과 PDF 다운로드",
      ],
      en: [
        "Test question pagination (10 questions per page)",
        "Single/multiple choice question support",
        "Test progress localStorage save (resume feature)",
        "Holland type radar chart, bar chart visualization",
        "Test result PDF download",
      ],
    },
    responsibilities: [
      {
        category: { ko: "전체", en: "Overall" },
        items: {
          ko: [
            "전체 프론트엔드 설계 및 구현 (100%)",
            "서비스 기획 및 사용자 플로우 설계 (100%)",
            "UI/UX 디자인 (100%)",
            "Redux + Redux-Saga 상태 관리 아키텍처 설계",
          ],
          en: [
            "Full frontend design and implementation (100%)",
            "Service planning and user flow design (100%)",
            "UI/UX design (100%)",
            "Redux + Redux-Saga state management architecture design",
          ],
        },
      },
      {
        category: { ko: "심리검사 시스템", en: "Psychological Test System" },
        items: {
          ko: [
            "검사 문항 페이지네이션 (10문항씩 / 파트별 진행)",
            "단일 선택 / 다중 선택 답변 유형 컴포넌트 구현",
            "자동 스크롤 UX (답변 선택 시 다음 문항으로 이동)",
            "검사 진행 상태 localStorage 저장 (이어하기 기능)",
            "Redux-Saga 기반 검사 시작/완료 API 비동기 처리",
          ],
          en: [
            "Test question pagination (10 questions per page / part-based progress)",
            "Single/multiple choice answer type component implementation",
            "Auto-scroll UX (move to next question on answer selection)",
            "Test progress localStorage save (resume feature)",
            "Redux-Saga based test start/complete API async processing",
          ],
        },
      },
      {
        category: { ko: "검사 결과 시각화", en: "Result Visualization" },
        items: {
          ko: [
            "Chart.js + Recharts 이중 차트 라이브러리 활용",
            "Holland 유형(R/I/A/S/E/C) 레이더 차트 구현",
            "세부 유형별 바 차트 (흥미/역량/직업선호)",
            "진로발달 프로파일 수평 바 차트",
            "SVG 커스텀 헥사곤 아이콘 축 라벨 렌더링",
            "Intersection Observer 기반 스크롤 애니메이션",
          ],
          en: [
            "Chart.js + Recharts dual chart library utilization",
            "Holland type (R/I/A/S/E/C) radar chart implementation",
            "Detail type bar charts (interest/competency/job preference)",
            "Career development profile horizontal bar chart",
            "SVG custom hexagon icon axis label rendering",
            "Intersection Observer based scroll animation",
          ],
        },
      },
      {
        category: {
          ko: "개인정보 입력 시스템",
          en: "Personal Info Input System",
        },
        items: {
          ko: [
            "MUI 기반 입력 폼 UI 구현 (이름, 생년월일, 학교, 학년/반/번호, 성별)",
            "학교명 Autocomplete 자동완성 기능",
            "개인정보 수집 동의 UI 및 Yup 기반 유효성 검사",
          ],
          en: [
            "MUI based input form UI (name, birthdate, school, grade/class/number, gender)",
            "School name Autocomplete auto-complete",
            "Privacy consent UI and Yup based validation",
          ],
        },
      },
      {
        category: { ko: "관리자 시스템", en: "Admin System" },
        items: {
          ko: [
            "관리자 로그인 인증",
            "검사 발급 현황 조회 페이지",
            "PDF 결과지 조회 기능",
          ],
          en: [
            "Admin login authentication",
            "Test issuance status page",
            "PDF result viewing functionality",
          ],
        },
      },
      {
        category: {
          ko: "재사용 컴포넌트 설계",
          en: "Reusable Component Design",
        },
        items: {
          ko: [
            "15개+ 공용 컴포넌트 개발 (CustomExamGroup, ModalAlert, Loading 등)",
            "컨테이너-프레젠테이션 패턴 적용",
            "React.lazy + Suspense 코드 스플리팅",
          ],
          en: [
            "15+ common components (CustomExamGroup, ModalAlert, Loading, etc.)",
            "Container-Presentation pattern applied",
            "React.lazy + Suspense code splitting",
          ],
        },
      },
    ],
    detailedDescription: {
      ko: "방송통신고등학교 학생들을 위한 인성·진로 온라인검사 시스템입니다. 학생들이 개인정보를 입력하고, 심리검사를 진행하며, 검사 결과(진로 유형, 진로발달 프로파일 등)를 시각화된 형태로 확인할 수 있습니다.",
      en: "An online personality and career test system for broadcasting high school students. Students can enter personal info, take psychological tests, and view results (career type, career development profile) in visualized format.",
    },
    techImplementation: [
      {
        category: { ko: "비동기 상태 관리", en: "Async State Management" },
        details: {
          ko: [
            "Redux-Saga로 검사 시작/완료, 결과 조회 등 비동기 흐름 관리",
            "Generator 활용으로 직관적인 비동기 코드 작성",
            "REQUEST/SUCCESS/FAILURE 패턴으로 상태 추적",
          ],
          en: [
            "Async flow management with Redux-Saga for test start/complete, result query",
            "Intuitive async code using Generators",
            "State tracking with REQUEST/SUCCESS/FAILURE pattern",
          ],
        },
      },
      {
        category: { ko: "데이터 시각화", en: "Data Visualization" },
        details: {
          ko: [
            "Chart.js + Recharts 병행 사용으로 각 차트 유형에 최적화",
            "SVG 기반 헥사곤 아이콘을 레이더 차트 축 라벨로 커스텀 렌더링",
            "Intersection Observer 기반 스크롤 애니메이션",
          ],
          en: [
            "Optimized for each chart type using Chart.js + Recharts together",
            "Custom rendering of SVG hexagon icons as radar chart axis labels",
            "Scroll animation based on Intersection Observer",
          ],
        },
      },
      {
        category: {
          ko: "폼 관리 및 UX 설계",
          en: "Form Management & UX Design",
        },
        details: {
          ko: [
            "이름, 생년월일, 학교(자동완성), 학년/반/번호, 성별 등 다양한 입력 타입 복합 폼 구현",
            "필수 입력, 숫자 검증, 개인정보 동의 체크 등 유효성 검사",
            "MUI Autocomplete로 학교 목록 검색",
            "답변 선택 시 다음 문항으로 smooth 스크롤",
          ],
          en: [
            "Complex form with various input types (name, birth date, school autocomplete, grade/class/number, gender)",
            "Validation (required fields, number check, privacy consent)",
            "School list search with MUI Autocomplete",
            "Smooth scroll to next question on answer selection",
          ],
        },
      },
      {
        category: { ko: "상태 영속화 전략", en: "State Persistence Strategy" },
        details: {
          ko: [
            "localStorage 활용으로 검사 진행 상태 브라우저 저장 및 이어하기 지원",
            "Redux 상태 변경 시 localStorage 자동 업데이트",
            "페이지 로드 시 localStorage에서 상태 복원",
          ],
          en: [
            "Browser storage of test progress with localStorage for resume support",
            "Auto localStorage update on Redux state change",
            "State restoration from localStorage on page load",
          ],
        },
      },
      {
        category: { ko: "컴포넌트 설계", en: "Component Design" },
        details: {
          ko: [
            "CustomExamGroup, ModalAlert, Loading 등 15개+ 공용 컴포넌트 설계",
            "ResultContainer(로직) - LotteResult(UI) 컨테이너-프레젠테이션 분리",
            "검사 유형, 답변 타입(단일/다중)별 조건부 렌더링",
            "React.lazy + Suspense로 페이지별 동적 로딩",
          ],
          en: [
            "15+ common components (CustomExamGroup, ModalAlert, Loading, etc.)",
            "Container-Presentation separation: ResultContainer (logic) - LotteResult (UI)",
            "Conditional rendering by test type and answer type (single/multiple)",
            "Page-wise dynamic loading with React.lazy + Suspense",
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: {
          ko: "검사 진행 상태 유지",
          en: "Test Progress State Persistence",
        },
        situation: {
          environment: {
            ko: "학생이 검사 도중 브라우저를 닫거나 새로고침할 때",
            en: "When student closes browser or refreshes during test",
          },
          symptom: {
            ko: "검사 진행 상태가 초기화되어 처음부터 다시 시작해야 함",
            en: "Test progress resets requiring restart from beginning",
          },
          impact: {
            ko: "전체 검사 페이지, 사용자 경험",
            en: "All test pages, user experience",
          },
        },
        candidates: [
          {
            name: { ko: "localStorage 활용", en: "Use localStorage" },
            pros: { ko: "간단한 구현, 브라우저 종료 후에도 유지", en: "Simple implementation, persists after browser close" },
            cons: { ko: "용량 제한 (5MB), 보안 취약", en: "Size limit (5MB), security weak" },
          },
          {
            name: { ko: "sessionStorage 활용", en: "Use sessionStorage" },
            pros: { ko: "탭 단위 격리, 간단한 구현", en: "Tab-level isolation, simple implementation" },
            cons: { ko: "브라우저 종료 시 삭제", en: "Deleted on browser close" },
          },
          {
            name: { ko: "서버 저장", en: "Server storage" },
            pros: { ko: "디바이스 무관 복구 가능, 보안", en: "Device-independent recovery, secure" },
            cons: { ko: "API 호출 필요, 복잡성 증가", en: "API calls needed, increased complexity" },
          },
          {
            name: { ko: "Redux-Persist", en: "Redux-Persist" },
            pros: { ko: "Redux와 통합, 자동화", en: "Integrated with Redux, automated" },
            cons: { ko: "추가 라이브러리, 설정 복잡", en: "Additional library, complex setup" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "localStorage 활용", en: "Use localStorage" },
          description: {
            ko: "초기 로드 시 localStorage에서 상태 복원. useEffect로 상태 변경 시마다 localStorage에 저장. examInputData 배열에서 현재 검사 위치(currentPage, currentPart, totalPages) 추적.",
            en: "Restore state from localStorage on initial load. Save to localStorage on every state change using useEffect. Track current test position (currentPage, currentPart, totalPages) in examInputData array.",
          },
        },
        reason: {
          ko: [
            "가장 빠르게 구현 가능 (구현 복잡도)",
            "브라우저 종료 후 다시 접속해도 이어하기 가능 (사용자 경험)",
            "검사 답변은 민감 정보가 아니므로 localStorage로 충분 (보안)",
            "네트워크 없이도 진행 상태 유지 (오프라인 지원)",
          ],
          en: [
            "Fastest implementation (implementation complexity)",
            "Resume possible even after browser close (user experience)",
            "Test answers are not sensitive info, localStorage is sufficient (security)",
            "Progress maintained without network (offline support)",
          ],
        },
      },
      {
        title: {
          ko: "Redux-Saga 비동기 흐름 제어",
          en: "Redux-Saga Async Flow Control",
        },
        situation: {
          environment: {
            ko: "검사 시작, 검사 완료, 결과 조회 등 API 호출 시",
            en: "During API calls for test start, complete, result query",
          },
          symptom: {
            ko: "콜백 지옥, 에러 처리 누락, 상태 관리 복잡",
            en: "Callback hell, missing error handling, complex state management",
          },
          impact: {
            ko: "전체 API 호출 로직 (5개+ 사가)",
            en: "All API call logic (5+ sagas)",
          },
        },
        candidates: [
          {
            name: { ko: "Redux-Saga", en: "Redux-Saga" },
            pros: { ko: "Generator 기반 직관적 흐름, 테스트 용이", en: "Generator-based intuitive flow, easy testing" },
            cons: { ko: "러닝커브, 보일러플레이트", en: "Learning curve, boilerplate" },
          },
          {
            name: { ko: "Redux-Thunk", en: "Redux-Thunk" },
            pros: { ko: "간단한 구현, 낮은 러닝커브", en: "Simple implementation, low learning curve" },
            cons: { ko: "복잡한 비동기 흐름 처리 어려움", en: "Hard to handle complex async flows" },
          },
          {
            name: { ko: "React Query", en: "React Query" },
            pros: { ko: "캐싱, 자동 재요청", en: "Caching, auto retry" },
            cons: { ko: "Redux와 분리된 상태 관리", en: "Separate state management from Redux" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "Redux-Saga", en: "Redux-Saga" },
          description: {
            ko: "Generator 기반 비동기 흐름 관리. call로 API 호출, put으로 액션 디스패치. REQUEST/SUCCESS/FAILURE 상수 파일 분리. all + fork로 여러 사가 병합.",
            en: "Generator-based async flow management. API calls with call, action dispatch with put. Separated REQUEST/SUCCESS/FAILURE constants. Merge multiple sagas with all + fork.",
          },
        },
        reason: {
          ko: [
            "Generator 문법으로 동기 코드처럼 작성 가능 (가독성)",
            "try-catch로 명확한 에러 핸들링 (에러 처리)",
            "call, put 등 effect를 mock하여 쉽게 테스트 (테스트)",
            "takeLatest, takeEvery 등으로 중복 요청 제어 (복잡한 흐름)",
          ],
          en: [
            "Write like sync code with Generator syntax (readability)",
            "Clear error handling with try-catch (error handling)",
            "Easy testing by mocking call, put effects (testing)",
            "Control duplicate requests with takeLatest, takeEvery (complex flows)",
          ],
        },
      },
      {
        title: {
          ko: "차트 라이브러리 선택 및 커스터마이징",
          en: "Chart Library Selection and Customization",
        },
        situation: {
          environment: {
            ko: "검사 결과 시각화 구현 시",
            en: "When implementing test result visualization",
          },
          symptom: {
            ko: "다양한 차트 유형 필요 (레이더, 바, 수평바), 커스터마이징 어려움",
            en: "Various chart types needed (radar, bar, horizontal bar), customization difficult",
          },
          impact: {
            ko: "결과 페이지 전체",
            en: "All result pages",
          },
        },
        candidates: [
          {
            name: { ko: "Chart.js만 사용", en: "Only Chart.js" },
            pros: { ko: "통일된 API, 가벼움", en: "Unified API, lightweight" },
            cons: { ko: "레이더 차트 커스터마이징 제한", en: "Limited radar chart customization" },
          },
          {
            name: { ko: "Recharts만 사용", en: "Only Recharts" },
            pros: { ko: "React 친화적, 선언적", en: "React-friendly, declarative" },
            cons: { ko: "특정 차트 스타일링 어려움", en: "Difficult styling for certain charts" },
          },
          {
            name: { ko: "Chart.js + Recharts 병행", en: "Chart.js + Recharts together" },
            pros: { ko: "각 라이브러리의 장점 활용", en: "Leverage each library's strengths" },
            cons: { ko: "번들 크기 증가, 학습 비용", en: "Bundle size increase, learning cost" },
          },
          {
            name: { ko: "D3.js", en: "D3.js" },
            pros: { ko: "완전한 커스터마이징", en: "Complete customization" },
            cons: { ko: "러닝커브 높음, 코드량 많음", en: "High learning curve, lots of code" },
          },
        ],
        solution: {
          choice: "C",
          name: { ko: "Chart.js + Recharts 병행", en: "Chart.js + Recharts Together" },
          description: {
            ko: "Recharts로 레이더 차트 구현 (SVG 기반 커스텀 틱 렌더링, 헥사곤 아이콘 축 라벨). Chart.js로 바 차트 구현 (애니메이션, 데이터 라벨 플러그인).",
            en: "Recharts for radar chart (SVG-based custom tick rendering, hexagon icon axis labels). Chart.js for bar chart (animation, data label plugin).",
          },
        },
        reason: {
          ko: [
            "Recharts: 레이더 차트에서 SVG 기반 커스텀 틱 렌더링 지원",
            "Chart.js: 바 차트 애니메이션, 데이터 라벨 플러그인 우수",
            "각 차트 유형에 최적화된 라이브러리 사용 (유지보수)",
          ],
          en: [
            "Recharts: SVG-based custom tick rendering support for radar chart",
            "Chart.js: Excellent bar chart animation and data label plugin",
            "Use optimized library for each chart type (maintainability)",
          ],
        },
      },
      {
        title: { ko: "검사 문항 자동 스크롤", en: "Test Question Auto Scroll" },
        situation: {
          environment: {
            ko: "검사 문항에 답변 선택 시",
            en: "When selecting answer for test question",
          },
          symptom: {
            ko: "사용자가 매번 수동으로 스크롤해야 함, 불편한 UX",
            en: "User had to manually scroll every time, inconvenient UX",
          },
          impact: {
            ko: "전체 검사 문항 UI",
            en: "All test question UI",
          },
        },
        candidates: [
          {
            name: { ko: "답변 선택 시 다음 문항으로 스크롤", en: "Scroll to next question on answer selection" },
            pros: { ko: "자연스러운 흐름", en: "Natural flow" },
            cons: { ko: "수정 시 불편할 수 있음", en: "May be inconvenient when editing" },
          },
          {
            name: { ko: "버튼 클릭으로 수동 스크롤", en: "Manual scroll with button click" },
            pros: { ko: "사용자 제어권 높음", en: "High user control" },
            cons: { ko: "추가 클릭 필요", en: "Additional click needed" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "답변 선택 시 다음 문항으로 자동 스크롤", en: "Auto Scroll to Next Question on Answer Selection" },
          description: {
            ko: "아직 선택 안 된 문항일 때만 스크롤. window.scrollTo로 다음 문항 위치로 이동. behavior: \"smooth\"로 부드러운 스크롤 효과.",
            en: "Scroll only for unselected questions. Move to next question position with window.scrollTo. Smooth scroll effect with behavior: \"smooth\".",
          },
        },
        reason: {
          ko: [
            "검사 진행이 자연스럽고 빠름 (UX)",
            "스크롤 위치를 사용자가 신경 쓰지 않아도 됨 (접근성)",
            "이미 선택된 문항 수정 시에는 스크롤하지 않음 (조건부 동작)",
          ],
          en: [
            "Natural and fast test progression (UX)",
            "User doesn't need to worry about scroll position (accessibility)",
            "No scroll when editing already selected questions (conditional behavior)",
          ],
        },
      },
    ],
    folderStructure: [
      {
        name: "src/",
        children: [
          {
            name: "api/",
            children: [{ name: "baseURL.js" }, { name: "routes.js" }],
          },
          {
            name: "components/",
            children: [
              { name: "CustomExamGroup.js" },
              { name: "Loading.js" },
              { name: "ValidationHelper.js" },
              { name: "PrivateRoute.js" },
            ],
          },
          {
            name: "exam/",
            children: [
              { name: "cdi/" },
              { name: "reuseComponent/" },
              { name: "module/" },
              { name: "redux/" },
            ],
          },
          {
            name: "page/",
            children: [{ name: "cyberhs/" }],
          },
          {
            name: "redux/",
            children: [
              { name: "constants/" },
              { name: "reducers/" },
              { name: "sagas/" },
            ],
          },
          { name: "style/" },
          { name: "assets/" },
          { name: "error/" },
        ],
      },
    ],
  },
  {
    id: "consultation-reservation",
    slug: "consultation-reservation",
    title: {
      ko: "15분 전화상담 예약 프로그램",
      en: "15-Minute Phone Consultation Reservation",
    },
    description: {
      ko: "심리검사 일련번호를 기반으로 고객이 쉽게 전화 상담을 예약하고, 예약한 정보를 직접 웹을 통해 확인할 수 있도록 도와주는 웹 애플리케이션입니다.",
      en: "A web application that helps customers easily book phone consultations based on psychological test serial numbers and check their reservations online.",
    },
    period: "2022.01 ~ 2023.03",
    role: {
      ko: "프론트엔드 개발",
      en: "Frontend Development",
    },
    team: "3",
    category: "company",
    company: "DH Wide",
    techStack: [
      "Next.js",
      "Redux",
      "Redux-Saga",
      "next-redux-wrapper",
      "MUI",
      "Immer",
    ],
    features: {
      ko: [
        "반응형 FE 구현",
        "예약 로직 FE 구현",
        "예약 관리(예약 확인/삭제/수정) 로직 FE 구현",
        "관리자 대시보드 (다중 필터, 페이지네이션)",
        "반응형 DatePicker (데스크톱/모바일)",
      ],
      en: [
        "Responsive FE implementation",
        "Reservation logic FE implementation",
        "Reservation management (view/delete/edit) logic FE",
        "Admin dashboard (multiple filters, pagination)",
        "Responsive DatePicker (desktop/mobile)",
      ],
    },
    responsibilities: [
      {
        category: { ko: "전체", en: "Overall" },
        items: {
          ko: [
            "전체 프론트엔드 설계 및 구현 (100%)",
            "서비스 기획 및 사용자 플로우 설계 (100%)",
            "UI/UX 디자인 (100%)",
            "Next.js + Redux-Saga 아키텍처 설계",
          ],
          en: [
            "Full frontend design and implementation (100%)",
            "Service planning and user flow design (100%)",
            "UI/UX design (100%)",
            "Next.js + Redux-Saga architecture design",
          ],
        },
      },
      {
        category: { ko: "예약 시스템", en: "Reservation System" },
        items: {
          ko: [
            "접속번호 입력 및 검증 플로우 구현",
            "반응형 DatePicker (데스크톱: 달력 전체 / 모바일: 팝업)",
            "시간대 선택 UI (오전/오후 구분, 20분 단위)",
            "예약 불가 시간 실시간 비활성화 처리",
            "주말/공휴일/30일 이후 날짜 비활성화 로직",
            "검사명 선택 모달 컴포넌트",
            "예약 완료 확인 페이지",
          ],
          en: [
            "Access code input and verification flow",
            "Responsive DatePicker (desktop: full calendar / mobile: popup)",
            "Time slot selection UI (AM/PM, 20-minute intervals)",
            "Real-time unavailable time slot deactivation",
            "Weekend/holiday/30+ days date deactivation logic",
            "Test name selection modal component",
            "Reservation confirmation page",
          ],
        },
      },
      {
        category: { ko: "예약 조회/관리", en: "Reservation Management" },
        items: {
          ko: [
            "휴대폰 번호 기반 내 예약 조회",
            "비밀번호 확인 후 예약 취소 기능",
            "Dialog 기반 삭제 확인 UI",
          ],
          en: [
            "Phone number based reservation lookup",
            "Password verified reservation cancellation",
            "Dialog based delete confirmation UI",
          ],
        },
      },
      {
        category: { ko: "관리자 대시보드", en: "Admin Dashboard" },
        items: {
          ko: [
            "MUI Table 기반 전체 예약 목록 테이블",
            "컬럼별 정렬 기능 (stableSort, getComparator)",
            "다중 필터 조합 (상태 + 예약자명/피검자명/검사명/날짜)",
            "상담 완료/미완료 상태 토글 버튼",
            "Collapse 기반 상세 정보 펼치기",
            "상담 기록 작성/수정 TextField",
            "커스텀 페이지네이션 (pageSize 선택, 이전/다음)",
            "PDF 파일 체크박스 선택 및 다운로드",
            "localStorage 기반 관리자 세션 관리",
          ],
          en: [
            "MUI Table based full reservation list",
            "Column sorting (stableSort, getComparator)",
            "Multiple filter combination (status + reserver/testee/test name/date)",
            "Consultation complete/incomplete toggle",
            "Collapse based detail expansion",
            "Consultation record create/edit TextField",
            "Custom pagination (pageSize selection, prev/next)",
            "PDF file checkbox selection and download",
            "localStorage based admin session management",
          ],
        },
      },
      {
        category: {
          ko: "상태 관리 아키텍처",
          en: "State Management Architecture",
        },
        items: {
          ko: [
            "7개 Redux-Saga 모듈 설계 (예약, 날짜, 조회, 삭제, 관리자 등)",
            "Immer 기반 불변성 관리",
            "환경별 빌드 설정 (env-cmd로 dev/prod 분리)",
            "커스텀 로거 미들웨어 (개발 환경 전용)",
          ],
          en: [
            "7 Redux-Saga modules design (reservation, date, lookup, delete, admin, etc.)",
            "Immer based immutability management",
            "Environment-based build config (env-cmd dev/prod split)",
            "Custom logger middleware (dev environment only)",
          ],
        },
      },
      {
        category: {
          ko: "재사용 컴포넌트 설계",
          en: "Reusable Component Design",
        },
        items: {
          ko: [
            "12개 공용 컴포넌트 개발",
            "DatePickerCustom, TimePickerCustom",
            "PaginationCustom, EnhancedTableHead",
            "DialogAlert, ModalAlert, Loading 등",
            "classnames 라이브러리로 조건부 스타일링",
          ],
          en: [
            "12 common components development",
            "DatePickerCustom, TimePickerCustom",
            "PaginationCustom, EnhancedTableHead",
            "DialogAlert, ModalAlert, Loading, etc.",
            "Conditional styling with classnames library",
          ],
        },
      },
    ],
    link: "http://counsel.guidance.co.kr:7100/",
    detailedDescription: {
      ko: "학교표준화검사를 실시한 자녀의 결과를 바탕으로 학부모님께 15분 심리검사 분석서비스(무료)를 제공하는 예약 관리 시스템입니다. Next.js + Redux-Saga 기반으로 구현되었습니다.",
      en: "A reservation management system providing 15-minute psychological test analysis service (free) to parents based on their children's school standardization test results. Implemented with Next.js + Redux-Saga.",
    },
    techImplementation: [
      {
        category: {
          ko: "Next.js SSR 환경 설계",
          en: "Next.js SSR Environment Design",
        },
        details: {
          ko: [
            "next-redux-wrapper로 Next.js SSR 환경에서 Redux + Saga 통합",
            "env-cmd로 dev/prod 환경 분리",
            "커스텀 로거 미들웨어 구현 (개발 환경 전용)",
          ],
          en: [
            "Redux + Saga integration in Next.js SSR with next-redux-wrapper",
            "dev/prod environment separation with env-cmd",
            "Custom logger middleware (dev environment only)",
          ],
        },
      },
      {
        category: { ko: "관리자 대시보드", en: "Admin Dashboard" },
        details: {
          ko: [
            "MUI Table + stableSort, getComparator 함수로 컬럼별 정렬",
            "다중 필터 조합 (상태 + 예약자명/피검자명/검사명/날짜)",
            "Collapse 기반 상세 정보 펼치기",
          ],
          en: [
            "MUI Table + stableSort, getComparator for column sorting",
            "Multiple filter combination (status + reserver/testee/test name/date)",
            "Collapse-based detail expansion",
          ],
        },
      },
      {
        category: { ko: "비동기 상태 관리", en: "Async State Management" },
        details: {
          ko: [
            "7개 Saga 모듈로 예약/조회/관리자 비동기 처리",
            "Immer produce 함수로 중첩 객체 상태 안전하게 업데이트",
            "Loading/Done/Failure 패턴으로 UI 상태 세분화",
            "constants 디렉토리로 액션 타입 중앙 관리",
          ],
          en: [
            "7 Saga modules for reservation/query/admin async processing",
            "Safe nested object state update with Immer produce function",
            "UI state granularity with Loading/Done/Failure pattern",
            "Centralized action type management in constants directory",
          ],
        },
      },
      {
        category: { ko: "반응형 UI 구현", en: "Responsive UI Implementation" },
        details: {
          ko: [
            "MUI sx prop 반응형으로 데스크톱/모바일 분기 렌더링",
            "classnames로 선택/비활성화 상태에 따른 동적 클래스 적용",
            "MUI Grid로 반응형 레이아웃 구성",
          ],
          en: [
            "Desktop/mobile branch rendering with MUI sx prop responsive",
            "Dynamic class application based on selection/disabled state with classnames",
            "Responsive layout with MUI Grid",
          ],
        },
      },
      {
        category: {
          ko: "예약 시스템 UX 설계",
          en: "Reservation System UX Design",
        },
        details: {
          ko: [
            "주말/공휴일 비활성화, 30일 이내 예약만 허용하는 날짜 제한 로직",
            "이미 예약된 시간 비활성화 표시로 시간 실시간 필터링",
            "접속번호 → 날짜 → 시간 → 검사 선택 → 완료 단계별 예약 플로우",
          ],
          en: [
            "Date restriction logic: disable weekends/holidays, allow only within 30 days",
            "Real-time time filtering with disabled display for already reserved times",
            "Step-by-step reservation flow: access number → date → time → test selection → complete",
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: {
          ko: "Next.js에서 Redux-Saga 설정",
          en: "Redux-Saga Setup in Next.js",
        },
        situation: {
          environment: {
            ko: "Next.js 프로젝트에서 Redux-Saga 미들웨어 설정 시",
            en: "When setting up Redux-Saga middleware in Next.js project",
          },
          symptom: {
            ko: "Redux 스토어 설정, Saga 미들웨어 연결, 환경별 DevTools 분기 필요",
            en: "Need Redux store setup, Saga middleware connection, environment-specific DevTools branching",
          },
          impact: {
            ko: "전체 앱 상태 관리",
            en: "Entire app state management",
          },
        },
        candidates: [
          {
            name: { ko: "next-redux-wrapper 사용", en: "Use next-redux-wrapper" },
            pros: { ko: "Next.js 공식 권장 패턴, 설정 간편", en: "Next.js official recommended pattern, easy setup" },
            cons: { ko: "추가 라이브러리", en: "Additional library" },
          },
          {
            name: { ko: "직접 Provider 설정", en: "Direct Provider setup" },
            pros: { ko: "라이브러리 의존성 없음", en: "No library dependency" },
            cons: { ko: "보일러플레이트 증가", en: "Increased boilerplate" },
          },
          {
            name: { ko: "Redux Toolkit", en: "Redux Toolkit" },
            pros: { ko: "간결한 코드, 공식 권장", en: "Concise code, officially recommended" },
            cons: { ko: "기존 Saga 패턴 수정 필요", en: "Need to modify existing Saga pattern" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "next-redux-wrapper 사용", en: "Use next-redux-wrapper" },
          description: {
            ko: "next-redux-wrapper로 Next.js 앱에 Redux 간편 연결. 개발 환경에서만 DevTools, 커스텀 로거 활성화. Saga 미들웨어 순차 적용.",
            en: "Simple Redux connection to Next.js app with next-redux-wrapper. DevTools and custom logger only in dev. Sequential Saga middleware application.",
          },
        },
        reason: {
          ko: [
            "Next.js SSR 환경에서 Redux 간편 연결 가능",
            "환경별 분기로 개발 환경에서만 DevTools, 로거 활성화",
            "미들웨어 확장: Saga + 커스텀 로거 순차 적용",
            "디버깅 용이: 개발 환경에서 모든 액션 콘솔 로깅",
          ],
          en: [
            "Simple Redux connection in Next.js SSR environment",
            "Environment branching: DevTools and logger only in dev",
            "Middleware extension: Sequential Saga + custom logger",
            "Easy debugging: All action console logging in dev",
          ],
        },
      },
      {
        title: {
          ko: "반응형 DatePicker 구현",
          en: "Responsive DatePicker Implementation",
        },
        situation: {
          environment: {
            ko: "예약 날짜 선택 UI",
            en: "Reservation date selection UI",
          },
          symptom: {
            ko: "데스크톱에서는 달력 전체 표시, 모바일에서는 팝업 형태가 적합",
            en: "Full calendar for desktop, popup for mobile",
          },
          impact: {
            ko: "예약 날짜 선택 페이지",
            en: "Reservation date selection page",
          },
        },
        candidates: [
          {
            name: { ko: "MUI Box sx prop으로 조건부 렌더링", en: "Conditional rendering with MUI Box sx prop" },
            pros: { ko: "CSS 미디어쿼리 활용, 깔끔한 코드", en: "Uses CSS media queries, clean code" },
            cons: { ko: "두 컴포넌트 모두 마운트됨", en: "Both components mounted" },
          },
          {
            name: { ko: "useMediaQuery 훅 사용", en: "Use useMediaQuery hook" },
            pros: { ko: "런타임에 단일 컴포넌트만 렌더링", en: "Only single component renders at runtime" },
            cons: { ko: "초기 렌더링 시 깜빡임 가능", en: "Possible flicker on initial render" },
          },
          {
            name: { ko: "CSS만으로 display 제어", en: "Control display with CSS only" },
            pros: { ko: "간단", en: "Simple" },
            cons: { ko: "컴포넌트 로직 분리 어려움", en: "Hard to separate component logic" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "MUI Box sx prop 사용", en: "Use MUI Box sx prop" },
          description: {
            ko: "MUI Box sx prop으로 StaticDatePicker(데스크톱)과 DatePicker(모바일)를 display 속성으로 조건부 렌더링. 주말 및 특정 날짜 비활성화 로직 적용.",
            en: "Conditional rendering of StaticDatePicker (desktop) and DatePicker (mobile) with display property via MUI Box sx prop. Applied weekend and specific date disable logic.",
          },
        },
        reason: {
          ko: [
            "MUI의 반응형 시스템(sx prop) 그대로 활용",
            "CSS 기반이라 초기 렌더링 시 깜빡임 없음",
            "데스크톱/모바일 UI가 명확히 분리됨",
          ],
          en: [
            "Leveraged MUI responsive system (sx prop) as is",
            "CSS-based so no flicker on initial render",
            "Clear separation of desktop/mobile UI",
          ],
        },
      },
      {
        title: {
          ko: "예약 가능 시간 실시간 필터링",
          en: "Real-time Available Time Filtering",
        },
        situation: {
          environment: {
            ko: "시간 선택 UI에서 이미 예약된 시간 표시",
            en: "Displaying already reserved times in time selection UI",
          },
          symptom: {
            ko: "날짜 변경 시 해당 날짜의 예약된 시간 목록 업데이트 필요",
            en: "Need to update reserved time list for selected date when date changes",
          },
          impact: {
            ko: "시간 선택 컴포넌트",
            en: "Time selection component",
          },
        },
        candidates: [
          {
            name: { ko: "useEffect로 날짜 변경 감지", en: "Detect date change with useEffect" },
            pros: { ko: "선언적, 자동 업데이트", en: "Declarative, automatic update" },
            cons: { ko: "의존성 배열 관리 필요", en: "Need dependency array management" },
          },
          {
            name: { ko: "날짜 선택 시 직접 필터링 호출", en: "Call filtering directly on date selection" },
            pros: { ko: "명시적 흐름", en: "Explicit flow" },
            cons: { ko: "코드 분산, 누락 가능성", en: "Scattered code, possible omission" },
          },
          {
            name: { ko: "서버에서 가능한 시간만 반환", en: "Return only available times from server" },
            pros: { ko: "클라이언트 로직 간소화", en: "Simplified client logic" },
            cons: { ko: "API 호출 증가", en: "Increased API calls" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "useEffect로 날짜 변경 감지", en: "Detect date change with useEffect" },
          description: {
            ko: "useEffect로 날짜 변경 감지. 이미 받아온 reservedList 데이터로 클라이언트 필터링. classnames로 예약된 시간은 timeDisabled 스타일 적용.",
            en: "Detect date change with useEffect. Client-side filtering with already fetched reservedList. timeDisabled style for reserved times with classnames.",
          },
        },
        reason: {
          ko: [
            "날짜 변경 즉시 UI 업데이트 반응성",
            "이미 받아온 데이터로 필터링하여 추가 API 호출 불필요",
            "classnames 활용으로 예약된 시간 시각적 구분",
          ],
          en: [
            "Immediate UI update reactivity on date change",
            "No additional API calls by filtering with already fetched data",
            "Visual distinction for reserved times with classnames",
          ],
        },
      },
      {
        title: {
          ko: "관리자 테이블 다중 필터 조합",
          en: "Admin Table Multiple Filter Combination",
        },
        situation: {
          environment: {
            ko: "관리자 예약 목록 테이블",
            en: "Admin reservation list table",
          },
          symptom: {
            ko: "상태(완료/미완료) + 검색(예약자명/피검자명/검사명/날짜) 필터 조합 필요",
            en: "Need status (complete/incomplete) + search (reserver/testee/test name/date) filter combination",
          },
          impact: {
            ko: "관리자 대시보드 전체",
            en: "Entire admin dashboard",
          },
        },
        candidates: [
          {
            name: { ko: "클라이언트 필터링", en: "Client-side filtering" },
            pros: { ko: "빠른 응답, 서버 부하 감소", en: "Fast response, reduced server load" },
            cons: { ko: "대량 데이터 시 성능 저하", en: "Performance degradation with large data" },
          },
          {
            name: { ko: "서버 필터링 (API 파라미터)", en: "Server filtering (API parameters)" },
            pros: { ko: "대량 데이터 처리 가능", en: "Can handle large data" },
            cons: { ko: "API 호출 증가", en: "Increased API calls" },
          },
          {
            name: { ko: "하이브리드", en: "Hybrid" },
            pros: { ko: "각 장점 활용", en: "Leverage benefits of both" },
            cons: { ko: "로직 복잡", en: "Complex logic" },
          },
        ],
        solution: {
          choice: "B",
          name: { ko: "서버 필터링", en: "Server filtering" },
          description: {
            ko: "filterRequest 액션으로 pageSize, curPage, type, filter, inputData 파라미터 전달. 현재 적용된 필터를 UI로 명확히 표시.",
            en: "Pass pageSize, curPage, type, filter, inputData parameters via filterRequest action. Clearly display current applied filters in UI.",
          },
        },
        reason: {
          ko: [
            "예약 데이터 증가 시에도 안정적 확장성",
            "서버에서 필터링 + 페이징 한 번에 처리",
            "현재 적용된 필터를 UI로 명확히 표시하여 UX 향상",
          ],
          en: [
            "Stable scalability even with reservation data growth",
            "Server handles filtering + paging at once",
            "Improved UX by clearly displaying current applied filters in UI",
          ],
        },
      },
      {
        title: {
          ko: "localStorage 기반 관리자 세션",
          en: "localStorage-based Admin Session",
        },
        situation: {
          environment: {
            ko: "관리자 페이지 접근 제어",
            en: "Admin page access control",
          },
          symptom: {
            ko: "로그인하지 않은 사용자가 관리자 페이지 직접 접근 가능",
            en: "Unauthenticated users could directly access admin page",
          },
          impact: {
            ko: "관리자 페이지 보안",
            en: "Admin page security",
          },
        },
        candidates: [
          {
            name: { ko: "localStorage 세션", en: "localStorage session" },
            pros: { ko: "간단한 구현, 새로고침 유지", en: "Simple implementation, persists on refresh" },
            cons: { ko: "보안 취약 (클라이언트 저장)", en: "Security vulnerability (client storage)" },
          },
          {
            name: { ko: "HTTP Only 쿠키", en: "HTTP Only cookie" },
            pros: { ko: "XSS 방지", en: "XSS prevention" },
            cons: { ko: "서버 설정 필요", en: "Requires server setup" },
          },
          {
            name: { ko: "서버 세션 + API 검증", en: "Server session + API validation" },
            pros: { ko: "가장 안전", en: "Most secure" },
            cons: { ko: "매 요청마다 검증 필요", en: "Validation required on every request" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "localStorage 세션 (내부용)", en: "localStorage session (internal use)" },
          description: {
            ko: "useEffect에서 localStorage의 adminId 확인. 없으면 로그인 페이지로 리다이렉트. 내부 직원용 관리자 페이지에 적합한 간단한 구현.",
            en: "Check adminId from localStorage in useEffect. Redirect to login page if not found. Simple implementation suitable for internal staff admin page.",
          },
        },
        reason: {
          ko: [
            "내부 직원용 관리자 페이지에 적합한 사용 환경",
            "새로고침해도 localStorage로 세션 유지",
            "별도 서버 세션 없이 빠른 구현 가능",
          ],
          en: [
            "Suitable environment for internal staff admin page",
            "Session maintained on refresh via localStorage",
            "Quick implementation without separate server session",
          ],
        },
      },
    ],
    folderStructure: [
      {
        name: "fifteen-front/",
        children: [
          {
            name: "pages/",
            children: [
              { name: "index.js" },
              { name: "reserve/" },
              { name: "reserveInfo/" },
              { name: "findCode/" },
              { name: "admin/" },
            ],
          },
          {
            name: "components/",
            children: [
              { name: "AppLayout.js" },
              { name: "DatePickerCustom.js" },
              { name: "TimePickerCustom.js" },
              { name: "PaginationCustom.js" },
            ],
          },
          {
            name: "reducers/",
            children: [
              { name: "reserve.js" },
              { name: "dateTime.js" },
              { name: "admin.js" },
            ],
          },
          {
            name: "sagas/",
            children: [{ name: "reserve.js" }, { name: "admin.js" }],
          },
          { name: "constants/" },
          { name: "store/" },
          { name: "module/" },
          { name: "style/" },
        ],
      },
    ],
  },
  // Freelance Projects
  {
    id: "uz-exchange",
    slug: "uz-exchange",
    title: {
      ko: "우즈베키스탄 가상화폐 거래소",
      en: "Uzbekistan Cryptocurrency Exchange",
    },
    description: {
      ko: "웹소켓을 활용하여 실시간으로 코인 시세를 확인할 수 있으며, 사용자가 등록한 카드로 코인 거래가 가능한 암호화폐 거래 플랫폼입니다.",
      en: "A cryptocurrency exchange platform with real-time coin prices via WebSocket and card-based trading.",
    },
    period: "2025.01 ~ 2025.04",
    role: {
      ko: "풀스택 개발 (프론트엔드 중심)",
      en: "Full-Stack Development (Frontend-focused)",
    },
    team: "5",
    category: "freelance",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Zustand",
      "React Query",
      "i18next",
      "styled-components",
      "TradingView",
      "Firebase Auth",
      "WebSocket",
    ],
    features: {
      ko: [
        "실시간 OrderBook, Ticker, Trade 데이터 (WebSocket)",
        "TradingView 전문 금융 차트 연동",
        "암호화폐/법정화폐 입출금",
        "소셜 로그인 (Google, Apple, OneID)",
        "OTP 2FA, KYC 인증",
        "3개 언어 지원 (영어, 우즈벡어, 러시아어)",
      ],
      en: [
        "Real-time OrderBook, Ticker, Trade data (WebSocket)",
        "TradingView professional financial chart integration",
        "Crypto/fiat deposit and withdrawal",
        "Social login (Google, Apple, OneID)",
        "OTP 2FA, KYC verification",
        "3 language support (English, Uzbek, Russian)",
      ],
    },
    responsibilities: [
      {
        category: { ko: "입출금 시스템", en: "Deposit/Withdrawal System" },
        items: {
          ko: [
            "Sum(법정화폐) 입출금 전체 플로우 구현 (UI, API 연동, 유효성 검사)",
            "입출금 input 유효성 체크 및 min/max API 연동",
            "available balance 계산 로직 (balance - pending_withdrawal_amount)",
            "입금/출금 거절 페이지 및 펜딩 화면 구현",
            "모바일 메뉴창에 출금 관련 버튼 추가",
          ],
          en: [
            "Sum (fiat) deposit/withdrawal full flow (UI, API, validation)",
            "Deposit/withdrawal input validation and min/max API integration",
            "Available balance calculation (balance - pending_withdrawal_amount)",
            "Deposit/withdrawal rejection page and pending screen",
            "Added withdrawal buttons in mobile menu",
          ],
        },
      },
      {
        category: { ko: "다국어 시스템", en: "Multilingual System" },
        items: {
          ko: [
            "러시아어(RU), 우즈베키스탄어(UZ) 언어팩 추가 및 형식 정리",
            "FAQ, 공지사항 등 콘텐츠 언어별 API 연동",
            "모바일에서 언어 선택 시 즉시 적용되도록 수정",
            "푸터 언어별 링크 분기 처리",
          ],
          en: [
            "Russian (RU), Uzbek (UZ) language pack addition and formatting",
            "FAQ, notice content language-specific API integration",
            "Mobile language selection instant apply",
            "Footer language-specific link branching",
          ],
        },
      },
      {
        category: {
          ko: "메인 페이지 & 공지 시스템",
          en: "Main Page & Notice System",
        },
        items: {
          ko: [
            "메인 화면 공지사항(Notice) 배너 구현 및 애니메이션 처리",
            "팝업창 구현 (오늘 다시보지 않기 로직, 로컬스토리지 만료일 관리)",
            "메인 테이블 정렬 기능 구현 및 버그 수정 (정렬과 검색 동시 동작)",
            "메인 모바일 화면 코인 이미지 추가",
          ],
          en: [
            "Main notice banner implementation and animation",
            "Popup implementation (do not show today, localStorage expiration)",
            "Main table sorting feature and bug fix (sort + search)",
            "Main mobile screen coin image addition",
          ],
        },
      },
      {
        category: {
          ko: "마이페이지 (자산 관리)",
          en: "My Page (Asset Management)",
        },
        items: {
          ko: [
            "Overview 정렬 기능 구현 (UZS 상단 고정, 검색/필터 동시 동작)",
            "Overview/Spot 테이블 PnL 컬럼 추가 및 필터 기능",
            "가격 표시 천단위 콤마 포맷팅 적용",
            "Spot 파일 분리 및 컴포넌트 리팩토링",
          ],
          en: [
            "Overview sorting (UZS top fixed, search/filter simultaneous)",
            "Overview/Spot table PnL column and filter",
            "Price thousand separator formatting",
            "Spot file separation and component refactoring",
          ],
        },
      },
      {
        category: { ko: "GNB & 공통 UI", en: "GNB & Common UI" },
        items: {
          ko: [
            "GNB 메뉴 구조 수정 및 불필요한 메뉴 삭제",
            "글로벌 푸터 모달창 추가 및 페이지 이동 링크 설정",
            "에러창 overlay 바탕 화면 클릭 시 자동 닫힘 방지",
            "버튼 중복 클릭 방지 로직 구현",
          ],
          en: [
            "GNB menu structure modification",
            "Global footer modal and page navigation links",
            "Error overlay click prevention",
            "Button duplicate click prevention",
          ],
        },
      },
      {
        category: {
          ko: "인증 & 보안 분기 처리",
          en: "Auth & Security Branching",
        },
        items: {
          ko: [
            "KYC 인증 분기 처리 (미인증 시 Security 페이지로 이동)",
            "KYC/OneID 미인증 시 헤더 아이콘 Unverified 표시",
            "OneID 로그인 플로우 복구 및 연동",
            "보안 화면 Manage 버튼 상태별 스타일 처리",
          ],
          en: [
            "KYC verification branching (redirect to Security if unverified)",
            "KYC/OneID unverified header icon display",
            "OneID login flow recovery and integration",
            "Security screen Manage button state styling",
          ],
        },
      },
      {
        category: { ko: "에러 핸들링 & 캐싱", en: "Error Handling & Caching" },
        items: {
          ko: [
            "React Query 캐싱 문제 해결 (로그아웃 시 모든 캐싱 내역 삭제)",
            "Card List 캐싱 문제 해결",
            "Decimal undefined 에러 해결",
            "컴포넌트별 로딩 상태 분리 처리",
          ],
          en: [
            "React Query caching fix (clear all cache on logout)",
            "Card List caching issue fix",
            "Decimal undefined error fix",
            "Component-wise loading state separation",
          ],
        },
      },
      {
        category: { ko: "반응형 & 모바일 UI", en: "Responsive & Mobile UI" },
        items: {
          ko: [
            "거래(Trade) 화면 전체 반응형 작업",
            "보안 페이지 모바일 버튼 크기 조정",
            "모바일 모달창 애니메이션 버그 수정",
            "Deposit Crypto 모바일 버전 UX 개선 (코인/네트워크 선택 플로우)",
          ],
          en: [
            "Trade screen full responsive implementation",
            "Security page mobile button size adjustment",
            "Mobile modal animation bug fix",
            "Deposit Crypto mobile UX improvement (coin/network selection)",
          ],
        },
      },
    ],
    link: "https://uznex.com/",
    detailedDescription: {
      ko: "UZ Exchange는 우즈베키스탄 시장을 타겟으로 한 암호화폐 거래 플랫폼입니다. 실시간 OrderBook, 차트, 거래 기능을 제공하며, 3개 언어(영어, 우즈벡어, 러시아어)를 지원합니다. KYC 인증, OTP 2FA, 소셜 로그인 등 금융 서비스 수준의 보안 기능을 구현했습니다.",
      en: "UZ Exchange is a cryptocurrency trading platform targeting the Uzbekistan market. It provides real-time OrderBook, charts, trading features, and supports 3 languages (English, Uzbek, Russian). Implemented financial-grade security features including KYC, OTP 2FA, and social login.",
    },
    techImplementation: [
      {
        category: { ko: "실시간 데이터 관리", en: "Real-time Data Management" },
        details: {
          ko: [
            "WebSocket 기반 실시간 데이터 스트리밍 (OKX, Bybit, UZNEX)",
            "Zustand로 대량 OrderBook 데이터 효율적 관리",
            "타입 가드 함수로 메시지 타입 안전성 확보",
            "지수 백오프 기반 자동 재연결 (최대 5회)",
          ],
          en: [
            "WebSocket based real-time data streaming (OKX, Bybit, UZNEX)",
            "Efficient OrderBook data management with Zustand",
            "Message type safety with type guard functions",
            "Exponential backoff based auto-reconnection (max 5 times)",
          ],
        },
      },
      {
        category: { ko: "입출금 시스템", en: "Deposit/Withdrawal System" },
        details: {
          ko: [
            "Sum(법정화폐) 입출금 전체 플로우 구현 (UI, API 연동, 유효성 검사)",
            "Decimal.js로 정밀 숫자 처리 (부동소수점 오류 방지)",
            "available balance 계산 로직 (balance - pending_withdrawal_amount)",
            "입금/출금 거절 페이지, 펜딩 화면, Retry 플로우 구현",
          ],
          en: [
            "Full Sum (fiat) deposit/withdrawal flow (UI, API integration, validation)",
            "Precise number handling with Decimal.js (floating point error prevention)",
            "Available balance calculation (balance - pending_withdrawal_amount)",
            "Deposit/withdrawal rejection page, pending screen, retry flow implementation",
          ],
        },
      },
      {
        category: {
          ko: "다국어 시스템 (i18n)",
          en: "Multilingual System (i18n)",
        },
        details: {
          ko: [
            "러시아어(RU), 우즈베키스탄어(UZ) 언어팩 추가 및 형식 정리",
            "FAQ, 공지사항 등 API 응답 언어별 분기 처리",
            "모바일에서 언어 선택 시 즉시 적용되도록 구현",
            "푸터 언어별 외부 링크 분기 처리",
          ],
          en: [
            "Russian (RU), Uzbek (UZ) language pack addition and formatting",
            "Language-based API response branching for FAQ, notices",
            "Immediate application on mobile language selection",
            "Footer external link branching by language",
          ],
        },
      },
      {
        category: {
          ko: "인증 & 보안 분기 처리",
          en: "Authentication & Security Branching",
        },
        details: {
          ko: [
            "KYC 미인증 시 Security 페이지로 이동 분기 처리",
            "KYC/OneID 미인증 시 헤더 아이콘 Unverified 표시",
            "useVerifyKyc 훅으로 인증 체크 로직 중앙화",
            "보안 화면 Manage 버튼 상태별 스타일 처리",
          ],
          en: [
            "Redirect to Security page when KYC not verified",
            "Header icon shows Unverified when KYC/OneID not verified",
            "Centralized verification check logic via useVerifyKyc hook",
            "Security screen Manage button state-based styling",
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: {
          ko: "React Query 캐싱으로 인한 민감 데이터 유지 문제",
          en: "Sensitive Data Persistence Due to React Query Caching",
        },
        situation: {
          environment: {
            ko: "사용자 A 로그아웃 → 사용자 B 로그인",
            en: "User A logout → User B login",
          },
          symptom: {
            ko: "로그아웃 후 다른 계정으로 로그인해도 이전 사용자의 Card List, 자산 정보가 표시됨",
            en: "Previous user's Card List and asset info displayed after logging in with different account",
          },
          impact: {
            ko: "Card List, Overview 자산, Spot 잔액 등 사용자별 데이터",
            en: "User-specific data like Card List, Overview assets, Spot balance",
          },
        },
        candidates: [
          {
            name: { ko: "queryClient.clear() 전체 삭제", en: "queryClient.clear() full clear" },
            pros: { ko: "확실한 초기화, 간단한 구현", en: "Certain reset, simple implementation" },
            cons: { ko: "모든 캐시 삭제로 재로그인 시 로딩 발생", en: "Loading on re-login due to full cache clear" },
          },
          {
            name: { ko: "쿼리 키별 선택적 삭제", en: "Selective deletion by query key" },
            pros: { ko: "필요한 것만 삭제", en: "Delete only what's needed" },
            cons: { ko: "누락 가능성, 유지보수 어려움", en: "Risk of omission, maintenance difficult" },
          },
          {
            name: { ko: "사용자 ID를 쿼리 키에 포함", en: "Include user ID in query key" },
            pros: { ko: "자동 분리", en: "Automatic separation" },
            cons: { ko: "모든 쿼리 수정 필요, 대규모 리팩토링", en: "All queries need modification, major refactoring" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "queryClient.clear() 전체 삭제", en: "queryClient.clear() Full Clear" },
          description: {
            ko: "로그아웃 시 Zustand 상태 초기화와 함께 queryClient.clear()로 React Query 캐시 전체 삭제. 401 에러 인터셉터에서도 동일하게 처리.",
            en: "Clear all React Query cache with queryClient.clear() along with Zustand state reset on logout. Same handling in 401 error interceptor.",
          },
        },
        reason: {
          ko: [
            "민감한 금융 데이터(잔액, 카드 정보)가 다른 사용자에게 노출되면 안 됨 (보안)",
            "선택적 삭제는 새로운 쿼리 추가 시 누락 가능성 있음 (확실성)",
            "한 줄로 모든 캐시 문제 해결 (단순성)",
            "재로그인 시 로딩이 있지만 보안이 더 중요 (UX 트레이드오프)",
          ],
          en: [
            "Sensitive financial data (balance, card info) must not be exposed to other users (security)",
            "Selective deletion risks omission when adding new queries (certainty)",
            "Solve all cache issues with one line (simplicity)",
            "Loading on re-login but security is more important (UX tradeoff)",
          ],
        },
      },
      {
        title: {
          ko: "다국어 전환 시 상수 데이터 갱신 안됨",
          en: "Constant Data Not Updating on Language Switch",
        },
        situation: {
          environment: {
            ko: "모바일에서 언어 선택 후 앱 사용",
            en: "Using app after language selection on mobile",
          },
          symptom: {
            ko: "언어 변경해도 GNB 메뉴, 푸터 링크 텍스트가 이전 언어로 유지됨",
            en: "GNB menu and footer link text remained in previous language after language change",
          },
          impact: {
            ko: "GNB 메뉴, 드롭다운, 푸터, FAQ 링크",
            en: "GNB menu, dropdown, footer, FAQ links",
          },
        },
        candidates: [
          {
            name: { ko: "getter 함수로 변환", en: "Convert to getter functions" },
            pros: { ko: "호출 시점에 번역", en: "Translation at call time" },
            cons: { ko: "매번 함수 호출 필요", en: "Function call needed every time" },
          },
          {
            name: { ko: "useMemo + 언어 의존성", en: "useMemo + language dependency" },
            pros: { ko: "React 최적화", en: "React optimization" },
            cons: { ko: "컴포넌트 내에서만 사용 가능", en: "Only usable within components" },
          },
          {
            name: { ko: "상수에 키만 저장", en: "Store only keys in constants" },
            pros: { ko: "명확한 분리", en: "Clear separation" },
            cons: { ko: "사용처마다 t() 호출 필요", en: "t() call needed at every usage" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "getter 함수 + useMemo 조합", en: "Getter Function + useMemo Combination" },
          description: {
            ko: "상수 파일에서 getter 함수(getDepositMenu, getFooterLinks)로 변환. 컴포넌트에서 useMemo + i18n.language 의존성으로 언어 변경 시에만 재계산.",
            en: "Convert to getter functions (getDepositMenu, getFooterLinks) in constants file. Recalculate only on language change with useMemo + i18n.language dependency in component.",
          },
        },
        reason: {
          ko: [
            "언어 변경 즉시 모든 텍스트 갱신 (정확성)",
            "useMemo로 불필요한 재계산 방지 (성능)",
            "상수 파일에서 번역 키 관리 용이 (유지보수)",
            "i18next 공식 권장 패턴 (일관성)",
          ],
          en: [
            "Immediate text update on language change (accuracy)",
            "Prevent unnecessary recalculation with useMemo (performance)",
            "Easy translation key management in constants file (maintainability)",
            "i18next official recommended pattern (consistency)",
          ],
        },
      },
      {
        title: {
          ko: "테이블 정렬과 검색 동시 동작 안됨",
          en: "Table Sort and Search Not Working Simultaneously",
        },
        situation: {
          environment: {
            ko: "메인 화면 Popular/Market 테이블, 마이페이지 Overview",
            en: "Main screen Popular/Market table, My Page Overview",
          },
          symptom: {
            ko: "검색 후 정렬하면 검색 결과 초기화, 정렬 후 검색하면 정렬 초기화",
            en: "Search results reset after sorting, sort reset after search",
          },
          impact: {
            ko: "메인 테이블, Overview, Spot 테이블",
            en: "Main table, Overview, Spot tables",
          },
        },
        candidates: [
          {
            name: { ko: "파이프라인 방식 (필터 → 정렬)", en: "Pipeline approach (filter → sort)" },
            pros: { ko: "명확한 데이터 흐름", en: "Clear data flow" },
            cons: { ko: "매번 전체 연산", en: "Full calculation each time" },
          },
          {
            name: { ko: "상태 병합 후 한 번에 처리", en: "Merge state then process once" },
            pros: { ko: "일관성 보장", en: "Consistency guaranteed" },
            cons: { ko: "로직 복잡", en: "Complex logic" },
          },
          {
            name: { ko: "useMemo로 파생 데이터", en: "Derived data with useMemo" },
            pros: { ko: "React 최적화 활용", en: "Leverage React optimization" },
            cons: { ko: "의존성 관리 필요", en: "Dependency management needed" },
          },
        ],
        solution: {
          choice: "A+C",
          name: { ko: "파이프라인 + useMemo 조합", en: "Pipeline + useMemo Combination" },
          description: {
            ko: "useMemo 내에서 파이프라인 처리: 1단계 검색 필터 적용 → 2단계 정렬 적용. originalData, searchTerm, sortConfig를 의존성으로 설정. Overview는 UZS 분리 후 상단 고정 추가.",
            en: "Pipeline processing in useMemo: Step 1 apply search filter → Step 2 apply sort. Set originalData, searchTerm, sortConfig as dependencies. Overview adds UZS separation and top-fixed.",
          },
        },
        reason: {
          ko: [
            "원본 데이터 변경 없이 파생 데이터로 처리 (데이터 무결성)",
            "검색 상태와 정렬 상태가 항상 함께 적용됨 (일관성)",
            "useMemo로 불필요한 재계산 방지 (성능)",
            "추가 필터 조건도 파이프라인에 쉽게 추가 가능 (확장성)",
          ],
          en: [
            "Process as derived data without changing original (data integrity)",
            "Search and sort states always applied together (consistency)",
            "Prevent unnecessary recalculation with useMemo (performance)",
            "Additional filter conditions easily added to pipeline (extensibility)",
          ],
        },
      },
      {
        title: {
          ko: "팝업창 오늘 다시보지 않기 로직 구현",
          en: "Popup 'Don't Show Today' Logic Implementation",
        },
        situation: {
          environment: {
            ko: "메인 페이지 진입 시 공지/이벤트 팝업 표시",
            en: "Notice/event popup displayed on main page entry",
          },
          symptom: {
            ko: "\"오늘 다시보지 않기\" 체크해도 새로고침하면 다시 표시됨",
            en: "Popup reappears on refresh even after checking 'Don't show today'",
          },
          impact: {
            ko: "메인 페이지 팝업",
            en: "Main page popup",
          },
        },
        candidates: [
          {
            name: { ko: "localStorage + 날짜 비교", en: "localStorage + date comparison" },
            pros: { ko: "간단, 새로고침 유지", en: "Simple, persists after refresh" },
            cons: { ko: "수동 만료 관리 필요", en: "Manual expiry management needed" },
          },
          {
            name: { ko: "Cookie + expires", en: "Cookie + expires" },
            pros: { ko: "자동 만료", en: "Automatic expiry" },
            cons: { ko: "용량 제한, 서버 전송됨", en: "Size limit, sent to server" },
          },
          {
            name: { ko: "IndexedDB", en: "IndexedDB" },
            pros: { ko: "대용량 저장", en: "Large storage capacity" },
            cons: { ko: "과도한 복잡도", en: "Excessive complexity" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "localStorage + 날짜 비교 + 자동 정리", en: "localStorage + Date Comparison + Auto Cleanup" },
          description: {
            ko: "팝업 ID별 만료일(오늘 날짜) 저장. shouldShowPopup()으로 오늘 날짜와 비교하여 표시 여부 결정. cleanupExpiredPopups()로 앱 시작 시 만료된 항목 자동 삭제. 언어별 팝업 ID 분리.",
            en: "Store expiry date (today's date) per popup ID. Determine display with shouldShowPopup() comparing to today. Auto delete expired items on app start with cleanupExpiredPopups(). Separate popup ID by language.",
          },
        },
        reason: {
          ko: [
            "localStorage로 새로고침해도 상태 유지 (지속성)",
            "오래된 데이터 자동 삭제로 용량 관리 (자동 정리)",
            "언어별 팝업 ID로 분리 관리 (다국어 대응)",
            "Cookie나 IndexedDB보다 구현 간단 (단순성)",
          ],
          en: [
            "State persists after refresh with localStorage (persistence)",
            "Automatic cleanup for storage management (auto cleanup)",
            "Separate management with language-specific popup ID (multilingual)",
            "Simpler than Cookie or IndexedDB (simplicity)",
          ],
        },
      },
      {
        title: {
          ko: "공지사항 배너 애니메이션 끊김 현상",
          en: "Notice Banner Animation Stuttering",
        },
        situation: {
          environment: {
            ko: "메인 페이지 상단 공지사항 슬라이드 배너",
            en: "Main page top notice slide banner",
          },
          symptom: {
            ko: "슬라이드 애니메이션이 끊기거나, 배너가 잘려서 표시됨",
            en: "Slide animation stuttering or banner clipping",
          },
          impact: {
            ko: "메인 페이지 Notice 배너",
            en: "Main page Notice banner",
          },
        },
        candidates: [
          {
            name: { ko: "CSS 애니메이션 + overflow 조정", en: "CSS animation + overflow adjustment" },
            pros: { ko: "순수 CSS, 성능 좋음", en: "Pure CSS, good performance" },
            cons: { ko: "복잡한 레이아웃에서 조정 어려움", en: "Difficult adjustment in complex layouts" },
          },
          {
            name: { ko: "Swiper/Embla 라이브러리", en: "Swiper/Embla library" },
            pros: { ko: "완성도 높음, 터치 지원", en: "High quality, touch support" },
            cons: { ko: "추가 번들 크기", en: "Additional bundle size" },
          },
          {
            name: { ko: "requestAnimationFrame 수동 제어", en: "Manual control with requestAnimationFrame" },
            pros: { ko: "완전한 제어", en: "Complete control" },
            cons: { ko: "구현 복잡", en: "Complex implementation" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "CSS 애니메이션 최적화", en: "CSS Animation Optimization" },
          description: {
            ko: "콘텐츠 2번 반복으로 무한 루프 구현. BannerTrack에 translateX(-50%) 애니메이션으로 첫 번째 콘텐츠만큼 이동. hover 시 animation-play-state: paused로 일시정지.",
            en: "Implement infinite loop via content duplication. Animate BannerTrack with translateX(-50%) to move by first content width. Pause on hover with animation-play-state: paused.",
          },
        },
        reason: {
          ko: [
            "CSS 애니메이션은 GPU 가속 사용 (성능)",
            "콘텐츠 복제로 자연스러운 무한 스크롤 (무한 루프)",
            "추가 라이브러리 없음 (번들 크기)",
            "호버 시 일시정지로 읽기 편의성 제공 (접근성)",
          ],
          en: [
            "CSS animation uses GPU acceleration (performance)",
            "Natural infinite scroll with content duplication (infinite loop)",
            "No additional library (bundle size)",
            "Pause on hover for reading convenience (accessibility)",
          ],
        },
      },
      {
        title: {
          ko: "입출금 Available Balance 계산 오류",
          en: "Deposit/Withdrawal Available Balance Calculation Error",
        },
        situation: {
          environment: {
            ko: "Sum(법정화폐) 출금 화면",
            en: "Sum (fiat) withdrawal screen",
          },
          symptom: {
            ko: "출금 가능 금액이 실제 잔액보다 높게 표시되어 출금 실패",
            en: "Available balance displayed higher than actual, causing withdrawal failure",
          },
          impact: {
            ko: "Sum 출금 화면",
            en: "Sum withdrawal screen",
          },
        },
        candidates: [
          {
            name: { ko: "클라이언트에서 계산", en: "Calculate on client" },
            pros: { ko: "즉시 반영, API 호출 감소", en: "Immediate reflection, reduced API calls" },
            cons: { ko: "서버와 불일치 가능성", en: "Possible server mismatch" },
          },
          {
            name: { ko: "서버에서 available 필드 제공", en: "Server provides available field" },
            pros: { ko: "정확한 값", en: "Accurate value" },
            cons: { ko: "API 수정 필요, 지연", en: "API modification needed, delay" },
          },
          {
            name: { ko: "출금 시 서버 검증만 의존", en: "Rely only on server validation at withdrawal" },
            pros: { ko: "구현 간단", en: "Simple implementation" },
            cons: { ko: "UX 나쁨 (실패 후 알림)", en: "Bad UX (notification after failure)" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "클라이언트 계산 + 유효성 검사 강화", en: "Client Calculation + Enhanced Validation" },
          description: {
            ko: "balance - pending_withdrawal_amount로 available 계산. Decimal.js로 정밀 계산. 최소/최대/일일 한도 실시간 유효성 검사. 출금 대기 금액 별도 표시.",
            en: "Calculate available as balance - pending_withdrawal_amount. Precise calculation with Decimal.js. Real-time validation for min/max/daily limits. Separate display for pending withdrawal amount.",
          },
        },
        reason: {
          ko: [
            "pending_withdrawal_amount 반영으로 실제 출금 가능 금액 표시 (정확성)",
            "실시간 유효성 검사로 출금 전 오류 방지 (UX)",
            "출금 대기 금액 별도 표시로 사용자 이해도 향상 (투명성)",
            "Decimal.js로 금액 계산 오류 방지 (정밀도)",
          ],
          en: [
            "Display actual available balance reflecting pending_withdrawal_amount (accuracy)",
            "Prevent pre-withdrawal errors with real-time validation (UX)",
            "Improved user understanding with separate pending amount display (transparency)",
            "Prevent calculation errors with Decimal.js (precision)",
          ],
        },
      },
      {
        title: {
          ko: "모바일 모달 슬라이드 애니메이션 버그",
          en: "Mobile Modal Slide Animation Bug",
        },
        situation: {
          environment: {
            ko: "모바일에서 GNB 메뉴 열기/닫기",
            en: "Opening/closing GNB menu on mobile",
          },
          symptom: {
            ko: "메뉴 클릭 시 슬라이드 애니메이션이 끊기거나, 열린 상태에서 깜빡임",
            en: "Slide animation stuttering or flickering in open state when clicking menu",
          },
          impact: {
            ko: "모바일 GNB 메뉴, 바텀 시트 모달",
            en: "Mobile GNB menu, bottom sheet modal",
          },
        },
        candidates: [
          {
            name: { ko: "CSS transform + visibility", en: "CSS transform + visibility" },
            pros: { ko: "성능 좋음, 간단", en: "Good performance, simple" },
            cons: { ko: "상태 관리 필요", en: "State management needed" },
          },
          {
            name: { ko: "Framer Motion 라이브러리", en: "Framer Motion library" },
            pros: { ko: "완성도 높은 애니메이션", en: "High quality animations" },
            cons: { ko: "추가 번들 크기", en: "Additional bundle size" },
          },
          {
            name: { ko: "CSS animation + animationend 이벤트", en: "CSS animation + animationend event" },
            pros: { ko: "순수 CSS", en: "Pure CSS" },
            cons: { ko: "이벤트 처리 복잡", en: "Complex event handling" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "CSS transform + visibility", en: "CSS Transform + Visibility" },
          description: {
            ko: "조건부 렌더링 대신 항상 DOM에 유지. transform: translateX로 슬라이드, visibility로 접근성 제어. 메뉴 클릭 시 모달 먼저 닫고 애니메이션 완료 후 네비게이션.",
            en: "Keep in DOM always instead of conditional rendering. Slide with transform: translateX, control accessibility with visibility. Close modal first on menu click, navigate after animation completes.",
          },
        },
        reason: {
          ko: [
            "transform은 GPU 가속, 리페인트 최소화 (성능)",
            "visibility로 애니메이션 완료까지 DOM 유지 (부드러움)",
            "닫힌 상태에서 visibility: hidden으로 포커스 트랩 방지 (접근성)",
            "추가 라이브러리 없이 CSS만으로 구현 (번들 크기)",
          ],
          en: [
            "GPU acceleration with transform, minimized repaint (performance)",
            "Keep DOM until animation complete with visibility (smoothness)",
            "Prevent focus trap with visibility: hidden when closed (accessibility)",
            "CSS-only implementation without additional library (bundle size)",
          ],
        },
      },
      {
        title: {
          ko: "KYC 미인증 사용자 분기 처리 누락",
          en: "KYC Unverified User Branching Missing",
        },
        situation: {
          environment: {
            ko: "KYC/OneID 미인증 사용자의 입출금 시도",
            en: "Deposit/withdrawal attempt by KYC/OneID unverified users",
          },
          symptom: {
            ko: "미인증 사용자가 입출금 페이지 접근 가능, 실행 시 오류 발생",
            en: "Unverified users can access deposit/withdrawal pages, errors on execution",
          },
          impact: {
            ko: "Deposit, Withdraw, 거래 관련 페이지",
            en: "Deposit, Withdraw, trading-related pages",
          },
        },
        candidates: [
          {
            name: { ko: "페이지 진입 시 모달로 안내", en: "Modal guidance on page entry" },
            pros: { ko: "UX 좋음, 맥락 유지", en: "Good UX, context preserved" },
            cons: { ko: "각 페이지마다 구현 필요", en: "Implementation needed per page" },
          },
          {
            name: { ko: "라우트 가드에서 리다이렉트", en: "Redirect from route guard" },
            pros: { ko: "중앙 집중 관리", en: "Centralized management" },
            cons: { ko: "갑작스러운 페이지 이동", en: "Sudden page navigation" },
          },
          {
            name: { ko: "헤더 아이콘으로 상태 표시", en: "Show status with header icon" },
            pros: { ko: "항상 노출", en: "Always visible" },
            cons: { ko: "사용자가 무시 가능", en: "User can ignore" },
          },
        ],
        solution: {
          choice: "A+C",
          name: { ko: "모달 안내 + 헤더 아이콘 조합", en: "Modal Guidance + Header Icon Combination" },
          description: {
            ko: "useVerifyKyc 훅으로 인증 체크 로직 중앙화. checkAndProceed()로 KYC 필요한 액션 전 체크, 미인증 시 모달로 Security 페이지 안내. 헤더 아이콘으로 항상 인증 상태 표시. KYC 또는 OneID 중 하나만 완료해도 인증 처리.",
            en: "Centralize verification check with useVerifyKyc hook. Check before KYC-required actions with checkAndProceed(), show modal guiding to Security page if unverified. Always show verification status in header icon. Verified if either KYC or OneID completed.",
          },
        },
        reason: {
          ko: [
            "모달로 친절하게 안내, 갑작스러운 리다이렉트 방지 (UX)",
            "useVerifyKyc 훅으로 인증 체크 로직 중앙화 (일관성)",
            "헤더 아이콘으로 항상 인증 상태 표시 (가시성)",
            "KYC 또는 OneID 중 하나만 완료해도 인증 처리 (유연성)",
          ],
          en: [
            "Friendly modal guidance, prevent sudden redirects (UX)",
            "Centralized verification check via useVerifyKyc hook (consistency)",
            "Always show verification status in header icon (visibility)",
            "Verified with either KYC or OneID completion (flexibility)",
          ],
        },
      },
    ],
    folderStructure: [
      {
        name: "page/",
        children: [
          { name: "auth/" },
          { name: "trade/" },
          { name: "markets/" },
          { name: "mypage/" },
          { name: "deposit/" },
          { name: "withdraw/" },
        ],
      },
      {
        name: "components/",
        children: [
          { name: "trade/" },
          { name: "gnb/" },
          { name: "table/" },
          { name: "layout/" },
        ],
      },
      {
        name: "modal/",
        children: [
          { name: "common/" },
          { name: "auth/" },
          { name: "withdraw/" },
          { name: "index.tsx" },
        ],
      },
      {
        name: "store/",
        children: [
          { name: "authStore.ts" },
          { name: "socketStore.ts" },
          { name: "modalStore.ts" },
          { name: "useDarkModeStore.ts" },
        ],
      },
      {
        name: "service/",
        children: [{ name: "api/index.ts" }, { name: "react_query/" }],
      },
      {
        name: "lib/",
        children: [{ name: "firebase/" }, { name: "socket/" }],
      },
      { name: "hook/" },
      { name: "utils/" },
      { name: "style/" },
      { name: "types/" },
      { name: "charting_library/" },
    ],
  },
  {
    id: "nft-marketplace",
    slug: "nft-marketplace",
    title: {
      ko: "NFT Voting & Marketplace",
      en: "NFT Voting & Marketplace",
    },
    description: {
      ko: "NFT를 기반 투표 시스템을 제공하고, 마켓플레이스를 활용하여 NFT를 거래할 수 있는 플랫폼입니다.",
      en: "A project providing NFT-based voting system and a marketplace for trading NFTs.",
    },
    period: "2025.01 ~ 2025.02",
    role: {
      ko: "프론트엔드 개발",
      en: "Frontend Development",
    },
    team: "5",
    category: "freelance",
    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "React Query",
      "Zustand",
      "styled-components",
      "Firebase Auth",
      "Swiper",
    ],
    features: {
      ko: [
        "반응형 FE 구현 (25개 페이지)",
        "NFT Voting System 화면 api 연동",
        "투표 목록 (진행중/예정/완료) 필터링",
        "캐러셀 기반 투표 카드 UI",
        "암호화폐 지갑 시스템",
      ],
      en: [
        "Responsive FE implementation (25 pages)",
        "NFT Voting System screen API integration",
        "Vote list filtering (ongoing/upcoming/closed)",
        "Carousel-based voting card UI",
        "Cryptocurrency wallet system",
      ],
    },
    responsibilities: [
      {
        category: { ko: "반응형 UI 시스템", en: "Responsive UI System" },
        items: {
          ko: [
            "메인 홈 반응형 - Tablet/Mobile 대응 레이아웃 구현",
            "Voting 시스템 반응형 - 투표 목록, 상세, Upcoming 페이지 전체 반응형",
            "My Wallet 반응형 - 지갑, 입출금, 거래 이력 페이지 반응형",
            "My Profile / Security 반응형 - 프로필 수정, 보안 설정 모달 반응형",
            "인증 페이지 반응형 - 로그인, 회원가입, 가입완료 페이지 반응형",
            "Language 모달 반응형 - 다국어 선택 모달 반응형 대응",
          ],
          en: [
            "Main home responsive - Tablet/Mobile layout implementation",
            "Voting system responsive - Vote list, detail, Upcoming pages full responsive",
            "My Wallet responsive - Wallet, deposit/withdrawal, transaction history pages responsive",
            "My Profile / Security responsive - Profile edit, security settings modal responsive",
            "Auth pages responsive - Login, signup, signup complete pages responsive",
            "Language modal responsive - Multilingual selection modal responsive",
          ],
        },
      },
      {
        category: {
          ko: "Header / Navigation 시스템",
          en: "Header / Navigation System",
        },
        items: {
          ko: [
            "Header Drawer - 모바일용 햄버거 메뉴 Drawer 구현",
            "Footer Navigation - 푸터 네비게이션 링크 추가",
            "Drawer 내 로그인/회원가입 아이콘 수정",
          ],
          en: [
            "Header Drawer - Mobile hamburger menu Drawer implementation",
            "Footer Navigation - Footer navigation link addition",
            "Drawer login/signup icon modification",
          ],
        },
      },
      {
        category: { ko: "버그 수정", en: "Bug Fixes" },
        items: {
          ko: [
            "로고 및 오타 수정",
            "메인 홈, FAQ, Coming Soon 모달 버그 수정",
            "로그인 시 권한 모달 창 이슈 해결",
            "Header 스타일 버그 수정",
          ],
          en: [
            "Logo and typo fixes",
            "Main home, FAQ, Coming Soon modal bug fixes",
            "Login permission modal issue resolution",
            "Header style bug fix",
          ],
        },
      },
      {
        category: { ko: "코드 품질 개선", en: "Code Quality Improvement" },
        items: {
          ko: [
            "SVGR Plugin 설정 - SVG를 React 컴포넌트로 사용할 수 있도록 Vite 플러그인 추가",
            "이미지 중복 스타일 리팩토링 - 공통 스타일 컴포넌트로 추출",
            "불필요한 파일 삭제 및 코드 정리",
            "반복문 key prop 추가 (React 최적화)",
          ],
          en: [
            "SVGR Plugin setup - Vite plugin for using SVG as React components",
            "Image duplicate style refactoring - Extract to common style components",
            "Unnecessary file deletion and code cleanup",
            "Loop key prop addition (React optimization)",
          ],
        },
      },
    ],
    detailedDescription: {
      ko: "NFT 마켓플레이스와 암호화폐 거래 기능을 통합한 커뮤니티 플랫폼입니다. 사용자는 NFT 컬렉션을 관리하고, 암호화폐 입출금을 수행하며, 커뮤니티 투표에 참여할 수 있습니다.",
      en: "A community platform integrating NFT marketplace and cryptocurrency trading features. Users can manage NFT collections, perform crypto deposits/withdrawals, and participate in community voting.",
    },
    techImplementation: [
      {
        category: { ko: "반응형 UI 설계", en: "Responsive UI Design" },
        details: {
          ko: [
            "전체 25개 페이지 반응형 구현 (메인, Voting, My Wallet, Profile, Security)",
            "중앙 theme 파일에서 브레이크포인트 관리 (mobile/tablet/desktop)",
            "as const로 타입 안전한 미디어 쿼리",
          ],
          en: [
            "Responsive implementation for all 25 pages (Main, Voting, My Wallet, Profile, Security)",
            "Centralized breakpoint management in theme file (mobile/tablet/desktop)",
            "Type-safe media queries with as const",
          ],
        },
      },
      {
        category: { ko: "네비게이션 시스템", en: "Navigation System" },
        details: {
          ko: [
            "Header Drawer - 모바일용 햄버거 메뉴 Drawer 컴포넌트 구현",
            "useBodyScrollLock 훅으로 Drawer 열림 시 배경 스크롤 잠금",
            "ProtectedRoute 패턴으로 미인증 사용자 접근 차단",
          ],
          en: [
            "Header Drawer - Mobile hamburger menu Drawer component implementation",
            "Background scroll lock when Drawer opens via useBodyScrollLock hook",
            "Unauthenticated user access blocking via ProtectedRoute pattern",
          ],
        },
      },
      {
        category: {
          ko: "빌드 환경 최적화",
          en: "Build Environment Optimization",
        },
        details: {
          ko: [
            "vite-plugin-svgr로 SVG를 React 컴포넌트로 활용",
            "@/ 경로 alias 설정으로 import 경로 간소화",
            "Vite HMR 기반 빠른 개발 환경 구성",
          ],
          en: [
            "SVG as React components via vite-plugin-svgr",
            "Simplified import paths with @/ path alias",
            "Fast development environment with Vite HMR",
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: {
          ko: "반응형 브레이크포인트 일관성 관리",
          en: "Responsive Breakpoint Consistency Management",
        },
        situation: {
          environment: {
            ko: "페이지 전체 반응형 작업 중",
            en: "During full page responsive implementation",
          },
          symptom: {
            ko: "각 컴포넌트마다 다른 브레이크포인트 사용, 특정 화면 크기에서 레이아웃 깨짐",
            en: "Different breakpoints in each component, layout breaks at certain screen sizes",
          },
          impact: {
            ko: "메인, Voting, My Wallet, Profile 등 전체 페이지",
            en: "All pages including Main, Voting, My Wallet, Profile",
          },
        },
        candidates: [
          {
            name: { ko: "중앙 theme 파일에서 관리", en: "Centralized theme file management" },
            pros: { ko: "일관된 브레이크포인트, 한 곳에서 수정", en: "Consistent breakpoints, single point of modification" },
            cons: { ko: "초기 설정 필요", en: "Initial setup required" },
          },
          {
            name: { ko: "CSS 변수 사용", en: "Use CSS variables" },
            pros: { ko: "네이티브 CSS 활용", en: "Native CSS utilization" },
            cons: { ko: "styled-components와 혼용 어려움", en: "Difficult to mix with styled-components" },
          },
          {
            name: { ko: "각 컴포넌트에서 상수화", en: "Constants in each component" },
            pros: { ko: "구현 간단", en: "Simple implementation" },
            cons: { ko: "여전히 분산 관리", en: "Still distributed management" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "중앙 theme 파일에서 관리", en: "Centralized Theme File Management" },
          description: {
            ko: "utils/theme.ts에 breakpoints(mobile/tablet/desktop/wide)와 media 객체 정의. as const로 타입 안전성 확보. 모든 컴포넌트에서 import하여 media.tablet 같은 시맨틱한 네이밍으로 사용.",
            en: "Define breakpoints (mobile/tablet/desktop/wide) and media objects in utils/theme.ts. Ensure type safety with as const. Import in all components and use semantic naming like media.tablet.",
          },
        },
        reason: {
          ko: [
            "모든 컴포넌트가 동일한 브레이크포인트 사용 (일관성)",
            "브레이크포인트 변경 시 한 곳만 수정 (유지보수)",
            "media.tablet 같은 시맨틱한 네이밍으로 의도 명확 (가독성)",
            "as const로 자동완성 및 오타 방지 (타입 안전성)",
          ],
          en: [
            "All components use same breakpoints (consistency)",
            "Single point of modification for breakpoint changes (maintainability)",
            "Clear intent with semantic naming like media.tablet (readability)",
            "Autocomplete and typo prevention with as const (type safety)",
          ],
        },
      },
      {
        title: {
          ko: "모바일 Drawer 메뉴 스크롤 잠금",
          en: "Mobile Drawer Menu Scroll Lock",
        },
        situation: {
          environment: {
            ko: "Header Drawer 모바일 메뉴 열린 상태",
            en: "Header Drawer mobile menu open state",
          },
          symptom: {
            ko: "Drawer 열린 상태에서 배경 스크롤 가능, 메뉴 뒤로 콘텐츠 이동",
            en: "Background scrollable when Drawer is open, content moves behind menu",
          },
          impact: {
            ko: "모바일 전체 네비게이션 UX",
            en: "Overall mobile navigation UX",
          },
        },
        candidates: [
          {
            name: { ko: "body overflow hidden", en: "body overflow hidden" },
            pros: { ko: "간단하고 확실한 스크롤 방지", en: "Simple and certain scroll prevention" },
            cons: { ko: "스크롤 위치 점프 이슈", en: "Scroll position jump issue" },
          },
          {
            name: { ko: "position fixed + 스크롤 위치 저장", en: "position fixed + scroll position save" },
            pros: { ko: "스크롤 위치 유지", en: "Maintains scroll position" },
            cons: { ko: "구현 복잡", en: "Complex implementation" },
          },
          {
            name: { ko: "overscroll-behavior CSS", en: "overscroll-behavior CSS" },
            pros: { ko: "CSS만으로 해결", en: "CSS-only solution" },
            cons: { ko: "일부 브라우저 미지원", en: "Not supported in some browsers" },
          },
        ],
        solution: {
          choice: "B",
          name: { ko: "position fixed + 스크롤 위치 저장", en: "position fixed + Scroll Position Save" },
          description: {
            ko: "useBodyScrollLock 커스텀 훅 구현. 열릴 때 현재 scrollY 저장 후 body를 position fixed로 고정. 닫힐 때 저장된 위치로 스크롤 복원. 다른 모달에서도 재사용 가능.",
            en: "Implement useBodyScrollLock custom hook. Save current scrollY then fix body with position fixed on open. Restore scroll to saved position on close. Reusable for other modals.",
          },
        },
        reason: {
          ko: [
            "Drawer 닫을 때 스크롤 위치가 원래대로 복원 (UX)",
            "모든 브라우저에서 동작 (안정성)",
            "커스텀 훅으로 다른 모달에서도 활용 가능 (재사용)",
            "배경 콘텐츠 인터랙션 완전 차단 (접근성)",
          ],
          en: [
            "Scroll position restored when Drawer closes (UX)",
            "Works in all browsers (stability)",
            "Reusable for other modals via custom hook (reusability)",
            "Complete blocking of background content interaction (accessibility)",
          ],
        },
      },
      {
        title: {
          ko: "Vite SVGR 플러그인 설정",
          en: "Vite SVGR Plugin Setup",
        },
        situation: {
          environment: {
            ko: "SVG 아이콘을 React 컴포넌트로 사용하려 할 때",
            en: "When trying to use SVG icons as React components",
          },
          symptom: {
            ko: "import { ReactComponent as Icon } from './icon.svg' 방식 작동 안함",
            en: "import { ReactComponent as Icon } method not working",
          },
          impact: {
            ko: "모든 SVG 아이콘 사용 컴포넌트",
            en: "All components using SVG icons",
          },
        },
        candidates: [
          {
            name: { ko: "vite-plugin-svgr", en: "vite-plugin-svgr" },
            pros: { ko: "React 컴포넌트로 변환, CRA 문법 유사", en: "Converts to React component, similar to CRA syntax" },
            cons: { ko: "플러그인 추가 필요", en: "Plugin addition required" },
          },
          {
            name: { ko: "수동 컴포넌트 변환", en: "Manual component conversion" },
            pros: { ko: "의존성 없음", en: "No dependencies" },
            cons: { ko: "모든 SVG 수동 변환 필요", en: "Manual conversion for all SVGs" },
          },
          {
            name: { ko: "inline SVG 직접 작성", en: "Direct inline SVG" },
            pros: { ko: "설정 불필요", en: "No setup needed" },
            cons: { ko: "가독성 저하, 유지보수 어려움", en: "Poor readability, difficult maintenance" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "vite-plugin-svgr", en: "vite-plugin-svgr" },
          description: {
            ko: "vite-plugin-svgr 플러그인 추가. svgrOptions에서 icon: true로 viewBox 자동 추가, removeViewBox: false로 viewBox 유지. ?react suffix 또는 ReactComponent로 import. vite-env.d.ts에 타입 선언 추가.",
            en: "Add vite-plugin-svgr plugin. Auto-add viewBox with icon: true in svgrOptions, keep viewBox with removeViewBox: false. Import with ?react suffix or ReactComponent. Add type declaration in vite-env.d.ts.",
          },
        },
        reason: {
          ko: [
            "SVG를 React 컴포넌트처럼 props로 제어 가능 (유연성)",
            "fill, stroke 등 CSS로 색상 변경 가능 (스타일링)",
            "사용하는 SVG만 번들에 포함 (번들 최적화)",
            "CRA와 유사한 import 문법으로 마이그레이션 용이 (DX)",
          ],
          en: [
            "SVG controllable via props like React components (flexibility)",
            "Color change via CSS with fill, stroke (styling)",
            "Only used SVGs included in bundle (bundle optimization)",
            "Easy migration with CRA-like import syntax (DX)",
          ],
        },
      },
      {
        title: {
          ko: "이미지 스타일 중복 코드 리팩토링",
          en: "Image Style Duplicate Code Refactoring",
        },
        situation: {
          environment: {
            ko: "메인 페이지, 투표 카드 등 이미지 사용 컴포넌트",
            en: "Image-using components like main page, voting cards",
          },
          symptom: {
            ko: "동일한 이미지 스타일(비율 유지, object-fit 등)이 여러 곳에 중복",
            en: "Same image styles (aspect ratio, object-fit) duplicated in multiple places",
          },
          impact: {
            ko: "이미지 사용하는 모든 컴포넌트",
            en: "All components using images",
          },
        },
        candidates: [
          {
            name: { ko: "공통 이미지 컴포넌트", en: "Common image component" },
            pros: { ko: "재사용성 높음, 일관된 스타일", en: "High reusability, consistent style" },
            cons: { ko: "Props 설계 필요", en: "Props design required" },
          },
          {
            name: { ko: "CSS 공통 클래스", en: "CSS common class" },
            pros: { ko: "간단한 적용", en: "Simple application" },
            cons: { ko: "styled-components 패턴과 불일치", en: "Inconsistent with styled-components pattern" },
          },
          {
            name: { ko: "Mixin 함수", en: "Mixin function" },
            pros: { ko: "스타일 조합 유연", en: "Flexible style composition" },
            cons: { ko: "완전한 컴포넌트 아님", en: "Not a complete component" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "공통 이미지 컴포넌트", en: "Common Image Component" },
          description: {
            ko: "ResponsiveImage 컴포넌트 추출. aspectRatio(1/1, 16/9, 4/3), borderRadius(none/sm/md/lg), objectFit(cover/contain/fill) props로 유연한 스타일링. loading=\"lazy\" 자동 적용으로 성능 최적화.",
            en: "Extract ResponsiveImage component. Flexible styling with aspectRatio (1/1, 16/9, 4/3), borderRadius (none/sm/md/lg), objectFit (cover/contain/fill) props. Performance optimization with auto loading=\"lazy\".",
          },
        },
        reason: {
          ko: [
            "Props로 다양한 이미지 스타일 대응 (재사용성)",
            "프로젝트 전체 이미지 스타일 통일 (일관성)",
            "스타일 변경 시 한 곳만 수정 (유지보수)",
            "loading=\"lazy\" 자동 적용으로 성능 최적화 (성능)",
          ],
          en: [
            "Handle various image styles with props (reusability)",
            "Unified image styles across project (consistency)",
            "Single point of modification for style changes (maintainability)",
            "Performance optimization with auto loading=\"lazy\" (performance)",
          ],
        },
      },
      {
        title: {
          ko: "반응형 모달 뷰포트 대응",
          en: "Responsive Modal Viewport Handling",
        },
        situation: {
          environment: {
            ko: "Language, Security, Coming Soon 모달 모바일 접근 시",
            en: "When accessing Language, Security, Coming Soon modals on mobile",
          },
          symptom: {
            ko: "모달이 화면보다 커서 일부 내용 잘림, 닫기 버튼 접근 불가",
            en: "Modal larger than screen, content clipped, close button inaccessible",
          },
          impact: {
            ko: "모든 모달 컴포넌트",
            en: "All modal components",
          },
        },
        candidates: [
          {
            name: { ko: "max-width/height + vh/vw 조합", en: "max-width/height + vh/vw combination" },
            pros: { ko: "유연한 크기 조절", en: "Flexible size adjustment" },
            cons: { ko: "계산 복잡", en: "Complex calculation" },
          },
          {
            name: { ko: "모바일은 전체 화면", en: "Full screen for mobile" },
            pros: { ko: "확실한 해결", en: "Certain solution" },
            cons: { ko: "데스크탑과 다른 UX", en: "Different UX from desktop" },
          },
          {
            name: { ko: "transform scale 조절", en: "transform scale adjustment" },
            pros: { ko: "기존 레이아웃 유지", en: "Maintains existing layout" },
            cons: { ko: "콘텐츠 가독성 저하", en: "Content readability degradation" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "반응형 모달 크기 조합", en: "Responsive Modal Size Combination" },
          description: {
            ko: "max-width/max-height + vh/vw 조합. 모바일은 바텀 시트 스타일(align-items: flex-end)로 분기, slideUp 애니메이션 적용. sticky header로 닫기 버튼 항상 접근 가능. overflow-y: auto로 긴 콘텐츠 스크롤.",
            en: "max-width/max-height + vh/vw combination. Mobile uses bottom sheet style (align-items: flex-end) with slideUp animation. Close button always accessible with sticky header. Scroll long content with overflow-y: auto.",
          },
        },
        reason: {
          ko: [
            "모바일은 바텀 시트 패턴으로 익숙한 인터랙션 (UX)",
            "닫기 버튼 항상 접근 가능 - sticky header (접근성)",
            "데스크탑은 센터 모달, 모바일은 바텀 시트로 명확한 분기 (일관성)",
            "max-height + overflow로 긴 콘텐츠도 스크롤 가능 (콘텐츠)",
          ],
          en: [
            "Mobile uses familiar bottom sheet pattern interaction (UX)",
            "Close button always accessible - sticky header (accessibility)",
            "Clear distinction: center modal for desktop, bottom sheet for mobile (consistency)",
            "Long content scrollable with max-height + overflow (content)",
          ],
        },
      },
      {
        title: {
          ko: "React 리스트 렌더링 key 경고",
          en: "React List Rendering Key Warning",
        },
        situation: {
          environment: {
            ko: "투표 목록, 지갑 이력 등 리스트 렌더링",
            en: "List rendering for vote list, wallet history",
          },
          symptom: {
            ko: "콘솔에 \"Each child in a list should have a unique key prop\" 경고, index를 key로 사용하여 잘못된 리렌더링",
            en: "Console warning 'Each child in a list should have a unique key prop', wrong re-rendering due to using index as key",
          },
          impact: {
            ko: "map으로 렌더링하는 모든 리스트 컴포넌트",
            en: "All list components rendered with map",
          },
        },
        candidates: [
          {
            name: { ko: "고유 ID를 key로 사용", en: "Use unique ID as key" },
            pros: { ko: "정확한 DOM 추적, 성능 최적화", en: "Accurate DOM tracking, performance optimization" },
            cons: { ko: "데이터에 ID 필요", en: "ID required in data" },
          },
          {
            name: { ko: "index 사용", en: "Use index" },
            pros: { ko: "간단", en: "Simple" },
            cons: { ko: "순서 변경 시 버그 발생", en: "Bug on order change" },
          },
          {
            name: { ko: "uuid 생성", en: "Generate uuid" },
            pros: { ko: "항상 고유값 보장", en: "Always guarantees unique value" },
            cons: { ko: "매 렌더링마다 새 key 생성되어 성능 저하", en: "New key every render causes performance degradation" },
          },
        ],
        solution: {
          choice: "A",
          name: { ko: "고유 ID를 key로 사용", en: "Use Unique ID as Key" },
          description: {
            ko: "서버에서 받은 고유 ID(item.id)를 key로 사용. 고유 ID 없는 경우 복합 키 생성(type-timestamp-amount). Fragment에서도 key 사용 가능.",
            en: "Use unique ID (item.id) from server as key. Create composite key (type-timestamp-amount) for items without unique ID. Key also usable in Fragment.",
          },
        },
        reason: {
          ko: [
            "React가 변경된 요소만 정확히 리렌더링 (성능)",
            "아이템 추가/삭제/순서변경 시 올바른 DOM 업데이트 (정확성)",
            "각 아이템의 내부 상태(입력값 등)가 유지됨 (상태 유지)",
            "key로 특정 요소 추적 용이 (디버깅)",
          ],
          en: [
            "React correctly re-renders only changed elements (performance)",
            "Correct DOM update on item add/delete/reorder (accuracy)",
            "Each item's internal state (input values, etc.) maintained (state preservation)",
            "Easy tracking of specific elements with key (debugging)",
          ],
        },
      },
    ],
    folderStructure: [
      {
        name: "src/",
        children: [
          {
            name: "assets/",
            children: [
              { name: "icon/" },
              { name: "image/" },
              { name: "logo/" },
            ],
          },
          {
            name: "components/",
            children: [
              { name: "layout/" },
              { name: "voting/" },
              { name: "myPage/" },
              { name: "table/" },
            ],
          },
          {
            name: "page/",
            children: [
              { name: "auth/" },
              { name: "voting/" },
              { name: "myPage/" },
            ],
          },
          {
            name: "modal/",
            children: [
              { name: "alert/" },
              { name: "auth/" },
              { name: "otp/" },
              { name: "index.tsx" },
            ],
          },
          { name: "service/" },
          {
            name: "store/",
            children: [{ name: "authStore.ts" }, { name: "modalStore.ts" }],
          },
          {
            name: "lib/",
            children: [
              { name: "api.ts" },
              { name: "firebase/" },
              { name: "socket/" },
            ],
          },
          {
            name: "utils/",
            children: [{ name: "routes/" }, { name: "theme.ts" }],
          },
          { name: "types/" },
          { name: "hook/" },
        ],
      },
    ],
  },
  {
    id: "defense-platform",
    slug: "defense-platform",
    title: {
      ko: "방위산업 장비 부품 거래 플랫폼",
      en: "Defense Equipment Parts Trading Platform",
    },
    description: {
      ko: "방위산업 부품 거래를 지원하는 웹 애플리케이션으로, RDF 기반 시맨틱 웹 기술로 구현되었습니다.",
      en: "A web application supporting defense industry parts trading, implemented with RDF-based semantic web technology.",
    },
    period: "2024.12 ~ 2025.01",
    role: {
      ko: "프론트엔드 개발",
      en: "Frontend Development",
    },
    team: "2",
    category: "freelance",
    techStack: [
      "React",
      "TypeScript",
      "MUI",
      "Vite",
      "React Query",
      "MobX",
      "i18next",
      "Apache2",
      "Ubuntu",
    ],
    features: {
      ko: [
        "RDF 기반 Linked Data 필터링 (Faceted Navigation)",
        "동적 필터 그룹 생성",
        "리스트/그리드 뷰 전환",
        "리소스 상세 페이지 (탭 기반)",
        "다국어 지원 (한국어/영어)",
      ],
      en: [
        "RDF-based Linked Data filtering (Faceted Navigation)",
        "Dynamic filter group generation",
        "List/grid view toggle",
        "Resource detail page (tab-based)",
        "Multilingual support (Korean/English)",
      ],
    },
    responsibilities: [
      {
        category: { ko: "전체", en: "Overall" },
        items: {
          ko: [
            "KODEX2 국방 지식 플랫폼 프론트엔드 전체 구현",
            "RDF/Linked Data 기반 데이터 아키텍처 설계",
            "다국어(한국어/영어) 시스템 전체 구축",
          ],
          en: [
            "KODEX2 defense knowledge platform full frontend implementation",
            "RDF/Linked Data based data architecture design",
            "Full multilingual (Korean/English) system development",
          ],
        },
      },
      {
        category: { ko: "Faceted Navigation", en: "Faceted Navigation" },
        items: {
          ko: [
            "RDF 데이터 → UI 데이터 변환 로직 구현 (564줄)",
            "동적 필터 그룹 생성 (카테고리별 자동 분류)",
            "MobX 기반 필터 상태 관리 (선택/해제/초기화)",
            "리스트/그리드 뷰 전환 + 페이지네이션",
          ],
          en: [
            "RDF data → UI data transformation logic (564 lines)",
            "Dynamic filter group generation (auto-categorization)",
            "MobX based filter state management (select/deselect/reset)",
            "List/grid view toggle + pagination",
          ],
        },
      },
      {
        category: {
          ko: "상태 관리 아키텍처",
          en: "State Management Architecture",
        },
        items: {
          ko: [
            "MobX + React Query 하이브리드 패턴 설계",
            "서버 상태(API 캐싱) / 클라이언트 상태(필터) 분리",
            "Query Keys Factory 패턴으로 캐시 관리 체계화",
            "staleTime 5분 설정으로 불필요한 API 호출 방지",
          ],
          en: [
            "MobX + React Query hybrid pattern design",
            "Server state (API caching) / Client state (filter) separation",
            "Query Keys Factory pattern for cache management",
            "staleTime 5min setting to prevent unnecessary API calls",
          ],
        },
      },
      {
        category: { ko: "다국어 시스템", en: "Multilingual System" },
        items: {
          ko: [
            "이중 API 엔드포인트 구조 설계 (api_ko, api_en)",
            "언어별 커스텀 훅 8개 구현 (useSearchKo/En, useFacetKo/En 등)",
            "i18next 기반 파일 번역 시스템 구축",
            "localStorage 언어 설정 영속화",
          ],
          en: [
            "Dual API endpoint structure design (api_ko, api_en)",
            "8 language-specific custom hooks (useSearchKo/En, useFacetKo/En, etc.)",
            "i18next file translation system",
            "localStorage language persistence",
          ],
        },
      },
    ],
    link: "http://kodex2.eventpool.kr/",
    detailedDescription: {
      ko: "KODEX2는 국방 관련 장비, 시설, 군사 정보를 RDF 기반 시맨틱 웹 기술로 제공하는 다국어(한국어/영어) 지식 플랫폼입니다. Faceted Navigation, 실시간 검색, 동적 필터링 등 고급 데이터 브라우징 기능을 제공합니다.",
      en: "KODEX2 is a multilingual (Korean/English) knowledge platform providing defense equipment, facilities, and military information using RDF-based semantic web technology. Provides advanced data browsing features including Faceted Navigation, real-time search, and dynamic filtering.",
    },
    techImplementation: [
      {
        category: { ko: "RDF 데이터 타입 시스템", en: "RDF Data Type System" },
        details: {
          ko: [
            "JSON-LD 형식 데이터를 위한 제네릭 인터페이스 설계 (RDFString, RDFReference, FlexibleEntity)",
            "Type Guards 구현 (isRDFString, isRDFReference 등) 런타임 타입 검증",
            "564줄 복잡한 RDF → UI 데이터 변환 파이프라인",
            "RDF URI prefix 정리 유틸리티 함수 구현",
          ],
          en: [
            "Generic interface design for JSON-LD format data (RDFString, RDFReference, FlexibleEntity)",
            "Type Guards implementation (isRDFString, isRDFReference, etc.) runtime type verification",
            "564-line complex RDF → UI data transformation pipeline",
            "RDF URI prefix cleanup utility function implementation",
          ],
        },
      },
      {
        category: { ko: "하이브리드 상태 관리", en: "Hybrid State Management" },
        details: {
          ko: [
            "MobX(클라이언트) + React Query(서버) 역할 분리",
            "staleTime 5분 설정으로 불필요한 API 호출 방지",
            "MobX observer로 필요한 컴포넌트만 리렌더링",
            "QUERY_KEYS Factory 패턴으로 쿼리 키 네임스페이스 체계화",
          ],
          en: [
            "MobX (client) + React Query (server) role separation",
            "Prevented unnecessary API calls with 5-minute staleTime",
            "Only necessary component re-renders with MobX observer",
            "QUERY_KEYS Factory pattern for query key namespace organization",
          ],
        },
      },
      {
        category: {
          ko: "다국어(i18n) 아키텍처",
          en: "Multilingual (i18n) Architecture",
        },
        details: {
          ko: [
            "이중 API 엔드포인트 - 언어별 Axios 인스턴스 분리 (api_ko, api_en)",
            "언어별 커스텀 훅 8개 설계 (useSearchKo/En, useFacetKo/En 등)",
            "enabled 옵션으로 현재 언어에 해당하는 훅만 실행",
            "localStorage 기반 언어 설정 저장/복원",
          ],
          en: [
            "Dual API endpoints - Language-specific Axios instances (api_ko, api_en)",
            "8 language-specific custom hooks (useSearchKo/En, useFacetKo/En, etc.)",
            "Only current language hook executes via enabled option",
            "localStorage-based language setting save/restore",
          ],
        },
      },
      {
        category: { ko: "컴포넌트 설계", en: "Component Design" },
        details: {
          ko: [
            "동적 탭 렌더링 - Type Guard + filter로 데이터 존재 탭만 표시",
            "반응형 헤더 - useRef + scroll 이벤트로 수평 스크롤 버튼 상태 관리",
            "검색 컴포넌트 - 포커스 시 width 확장 애니메이션 구현",
          ],
          en: [
            "Dynamic tab rendering - Show only data-present tabs with Type Guard + filter",
            "Responsive header - Horizontal scroll button state management via useRef + scroll event",
            "Search component - Width expansion animation on focus",
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: {
          ko: "다국어 API 엔드포인트 분기 처리",
          en: "Multilingual API Endpoint Branching",
        },
        situation: {
          environment: {
            ko: "한국어/영어 언어 전환 시 API 호출",
            en: "API calls during Korean/English language switching",
          },
          symptom: {
            ko: "언어별로 다른 API 서버를 호출해야 하는 요구사항",
            en: "Requirement to call different API servers for each language",
          },
          impact: {
            ko: "모든 API 호출 (검색, 패싯, 리소스, 사이트맵)",
            en: "All API calls (search, facet, resource, sitemap)",
          },
        },
        candidates: [
          {
            name: { ko: "단일 훅 + 언어 파라미터", en: "Single hook + language parameter" },
            pros: { ko: "코드 중복 없음", en: "No code duplication" },
            cons: { ko: "훅 내부 조건문 복잡", en: "Complex conditionals inside hook" },
          },
          {
            name: { ko: "언어별 훅 분리 (ko/en)", en: "Language-specific hooks (ko/en)" },
            pros: { ko: "명확한 책임 분리, 타입 안전성", en: "Clear responsibility separation, type safety" },
            cons: { ko: "훅 코드 중복", en: "Hook code duplication" },
          },
          {
            name: { ko: "Axios 인터셉터 동적 변경", en: "Dynamic Axios interceptor change" },
            pros: { ko: "중앙 관리", en: "Central management" },
            cons: { ko: "요청 시점 예측 어려움", en: "Request timing unpredictable" },
          },
          {
            name: { ko: "이중 Axios 인스턴스 + 언어별 훅", en: "Dual Axios instances + language-specific hooks" },
            pros: { ko: "깔끔한 구조, 타입 안전성", en: "Clean structure, type safety" },
            cons: { ko: "초기 설정 복잡", en: "Complex initial setup" },
          },
        ],
        solution: {
          choice: "D",
          name: {
            ko: "이중 Axios 인스턴스 + 언어별 훅",
            en: "Dual Axios instances + language-specific hooks",
          },
          description: {
            ko: "api_ko, api_en 분리 생성 후 useFacetKo/En 등 언어별 훅 구현. enabled 옵션으로 현재 언어 훅만 실행",
            en: "Create separate api_ko, api_en instances then implement language-specific hooks like useFacetKo/En. Only current language hook executes via enabled option",
          },
        },
        reason: {
          ko: [
            "각 훅이 해당 언어의 응답 타입만 처리하여 타입 안전성 확보",
            "언어별 쿼리 키로 캐시 충돌 방지",
            "enabled 옵션으로 불필요한 API 호출 방지",
            "React Query DevTools에서 언어별 쿼리 명확히 구분되어 디버깅 용이",
          ],
          en: [
            "Each hook handles only its language's response type for type safety",
            "Language-specific query keys prevent cache collision",
            "enabled option prevents unnecessary API calls",
            "Clear language distinction in React Query DevTools for easy debugging",
          ],
        },
      },
      {
        title: {
          ko: "RDF 데이터 타입 안전 처리",
          en: "RDF Data Type Safe Handling",
        },
        situation: {
          environment: {
            ko: "RDF/JSON-LD 형식 API 응답 처리",
            en: "Processing RDF/JSON-LD format API responses",
          },
          symptom: {
            ko: "동적 프로퍼티 접근 시 런타임 에러 발생 가능",
            en: "Possible runtime errors when accessing dynamic properties",
          },
          impact: {
            ko: "모든 RDF 데이터 처리 컴포넌트",
            en: "All RDF data processing components",
          },
        },
        candidates: [
          {
            name: { ko: "any 타입 사용", en: "Use any type" },
            pros: { ko: "빠른 구현", en: "Quick implementation" },
            cons: { ko: "타입 안전성 상실", en: "Loss of type safety" },
          },
          {
            name: { ko: "Optional Chaining만 사용", en: "Use Optional Chaining only" },
            pros: { ko: "간단함", en: "Simple" },
            cons: { ko: "타입 정보 없음", en: "No type information" },
          },
          {
            name: { ko: "Type Guards 구현", en: "Implement Type Guards" },
            pros: { ko: "완전한 타입 안전성", en: "Complete type safety" },
            cons: { ko: "초기 구현 비용", en: "Initial implementation cost" },
          },
          {
            name: { ko: "Zod 스키마 검증", en: "Zod schema validation" },
            pros: { ko: "런타임 검증", en: "Runtime validation" },
            cons: { ko: "추가 라이브러리, 성능 오버헤드", en: "Additional library, performance overhead" },
          },
        ],
        solution: {
          choice: "C",
          name: {
            ko: "Type Guards 구현",
            en: "Implement Type Guards",
          },
          description: {
            ko: "isRDFString, isRDFReference 등 Type Guards 구현하여 타입 좁히기로 안전한 프로퍼티 접근",
            en: "Implement Type Guards like isRDFString, isRDFReference for safe property access via type narrowing",
          },
        },
        reason: {
          ko: [
            "TypeScript가 타입 좁히기를 인식하여 컴파일 타임 안전성 확보",
            "실제 데이터 구조를 검증하여 런타임 안전성 확보",
            "프로젝트 전체에서 동일 가드를 재사용하여 일관성 유지",
            "Zod 대비 경량, 필요한 검증만 수행하여 성능 최적화",
          ],
          en: [
            "TypeScript recognizes type narrowing for compile-time safety",
            "Verifies actual data structure for runtime safety",
            "Consistent reuse of same guards throughout project",
            "Lightweight compared to Zod, performs only necessary validations for performance",
          ],
        },
      },
      {
        title: {
          ko: "MobX + React Query 하이브리드 상태 관리",
          en: "MobX + React Query Hybrid State Management",
        },
        situation: {
          environment: {
            ko: "필터 상태 + 서버 데이터 동기화",
            en: "Filter state + server data synchronization",
          },
          symptom: {
            ko: "필터 변경 시 불필요한 리렌더링, 캐싱 없는 API 재호출 발생",
            en: "Unnecessary re-rendering on filter change, API re-calls without caching",
          },
          impact: {
            ko: "Facet 페이지 전체",
            en: "Entire Facet page",
          },
        },
        candidates: [
          {
            name: { ko: "React Query만 사용", en: "Use React Query only" },
            pros: { ko: "단일 도구", en: "Single tool" },
            cons: { ko: "클라이언트 상태에 부적합", en: "Unsuitable for client state" },
          },
          {
            name: { ko: "MobX만 사용", en: "Use MobX only" },
            pros: { ko: "반응형 상태 관리", en: "Reactive state management" },
            cons: { ko: "서버 상태 캐싱 직접 구현 필요", en: "Need to implement server state caching manually" },
          },
          {
            name: { ko: "Redux + RTK Query", en: "Redux + RTK Query" },
            pros: { ko: "강력한 에코시스템", en: "Strong ecosystem" },
            cons: { ko: "보일러플레이트 많음", en: "Lots of boilerplate" },
          },
          {
            name: { ko: "MobX + React Query 분리", en: "MobX + React Query separation" },
            pros: { ko: "각 역할에 최적화된 도구", en: "Tools optimized for each role" },
            cons: { ko: "두 가지 학습 필요", en: "Need to learn two tools" },
          },
        ],
        solution: {
          choice: "D",
          name: {
            ko: "MobX + React Query 역할 분리",
            en: "MobX + React Query Role Separation",
          },
          description: {
            ko: "MobX는 클라이언트 상태(선택된 필터, 패싯 이름), React Query는 서버 상태(패싯 목록, 검색 결과) 관리. observer HOC로 MobX 변경 감지",
            en: "MobX manages client state (selected filters, facet name), React Query manages server state (facet list, search results). MobX change detection via observer HOC",
          },
        },
        reason: {
          ko: [
            "필터 변경 시 API 재호출 없이 캐시 데이터를 필터링하여 성능 향상",
            "MobX observer가 필터 변경 시에만 리렌더링하여 반응성 최적화",
            "React Query가 5분 staleTime으로 중복 호출 방지",
            "서버 상태와 UI 상태를 명확히 분리하여 관심사 분리",
          ],
          en: [
            "Performance improvement by filtering cached data without API re-calls on filter change",
            "Optimized reactivity with MobX observer re-rendering only on filter change",
            "React Query prevents duplicate calls with 5-minute staleTime",
            "Clear separation of concerns between server and UI state",
          ],
        },
      },
      {
        title: {
          ko: "동적 탭 렌더링 with 타입 안전성",
          en: "Dynamic Tab Rendering with Type Safety",
        },
        situation: {
          environment: {
            ko: "리소스 상세 페이지 탭 렌더링",
            en: "Resource detail page tab rendering",
          },
          symptom: {
            ko: "데이터 없는 탭도 렌더링되어 빈 UI 표시",
            en: "Tabs without data are rendered showing empty UI",
          },
          impact: {
            ko: "DetailPageWrapper, TabsWrapper 컴포넌트",
            en: "DetailPageWrapper, TabsWrapper components",
          },
        },
        candidates: [
          {
            name: { ko: "조건부 렌더링", en: "Conditional rendering" },
            pros: { ko: "간단함", en: "Simple" },
            cons: { ko: "코드 가독성 저하", en: "Reduced code readability" },
          },
          {
            name: { ko: "filter로 null 제거", en: "Remove null with filter" },
            pros: { ko: "깔끔함", en: "Clean" },
            cons: { ko: "타입 추론 안됨 (null 포함)", en: "No type inference (includes null)" },
          },
          {
            name: { ko: "Type Guard + filter", en: "Type Guard + filter" },
            pros: { ko: "타입 안전성", en: "Type safety" },
            cons: { ko: "문법 복잡", en: "Complex syntax" },
          },
        ],
        solution: {
          choice: "C",
          name: {
            ko: "Type Guard + filter 조합",
            en: "Type Guard + filter combination",
          },
          description: {
            ko: "조건부 객체 + filter + Type Guard 조합. (tab): tab is { label: string; panel: JSX.Element } => Boolean(tab)",
            en: "Conditional object + filter + Type Guard combination. (tab): tab is { label: string; panel: JSX.Element } => Boolean(tab)",
          },
        },
        reason: {
          ko: [
            "filter 후 (false | { label, panel })[] → { label, panel }[]로 타입 추론 정확",
            "각 탭의 표시 조건이 명확히 보여 조건 명시적",
            "새 탭 추가 시 동일 패턴 적용으로 확장성 확보",
            "빈 탭이 표시되지 않아 사용자 혼란 방지로 UX 개선",
          ],
          en: [
            "Accurate type inference from (false | { label, panel })[] → { label, panel }[] after filter",
            "Clear visibility of each tab's display conditions",
            "Extensibility by applying same pattern when adding new tabs",
            "UX improvement by not displaying empty tabs, preventing user confusion",
          ],
        },
      },
      {
        title: {
          ko: "반응형 헤더 스크롤 상태 관리",
          en: "Responsive Header Scroll State Management",
        },
        situation: {
          environment: {
            ko: "모바일 헤더 수평 스크롤",
            en: "Mobile header horizontal scroll",
          },
          symptom: {
            ko: "스크롤 버튼 표시 타이밍 부정확, 메모리 누수",
            en: "Inaccurate scroll button display timing, memory leak",
          },
          impact: {
            ko: "ResponsiveHeader 컴포넌트",
            en: "ResponsiveHeader component",
          },
        },
        candidates: [
          {
            name: { ko: "CSS overflow-x만 사용", en: "Use CSS overflow-x only" },
            pros: { ko: "간단", en: "Simple" },
            cons: { ko: "스크롤 버튼 없음", en: "No scroll buttons" },
          },
          {
            name: { ko: "useState + onScroll", en: "useState + onScroll" },
            pros: { ko: "기본적", en: "Basic" },
            cons: { ko: "잦은 상태 업데이트", en: "Frequent state updates" },
          },
          {
            name: { ko: "useRef + scroll 이벤트 + cleanup", en: "useRef + scroll event + cleanup" },
            pros: { ko: "최적화됨", en: "Optimized" },
            cons: { ko: "구현 복잡", en: "Complex implementation" },
          },
        ],
        solution: {
          choice: "C",
          name: {
            ko: "useRef + scroll 이벤트 + cleanup",
            en: "useRef + scroll event + cleanup",
          },
          description: {
            ko: "useCallback으로 함수 재생성 방지, 부동소수점 오차 허용, cleanup 함수로 이벤트 리스너 제거",
            en: "Prevent function recreation with useCallback, allow floating point tolerance, remove event listeners with cleanup function",
          },
        },
        reason: {
          ko: [
            "cleanup 함수로 이벤트 리스너를 제거하여 메모리 안전성 확보",
            "behavior: 'smooth' 스크롤로 부드러운 UX 제공",
            "부동소수점 오차를 고려한 경계 검사로 정확한 상태 관리",
            "useCallback으로 함수 재생성 방지하여 성능 최적화",
          ],
          en: [
            "Memory safety by removing event listeners via cleanup function",
            "Smooth UX with behavior: 'smooth' scroll",
            "Accurate state management with boundary checking considering floating point tolerance",
            "Performance optimization by preventing function recreation with useCallback",
          ],
        },
      },
      {
        title: {
          ko: "RDF 문자열 Prefix 처리",
          en: "RDF String Prefix Handling",
        },
        situation: {
          environment: {
            ko: "RDF 데이터 표시",
            en: "RDF data display",
          },
          symptom: {
            ko: "kodex:Tank 같은 prefix가 UI에 그대로 노출, [dot] 문자열도 그대로 표시",
            en: "Prefixes like kodex:Tank displayed as-is in UI, [dot] strings also displayed literally",
          },
          impact: {
            ko: "모든 RDF 기반 데이터 표시",
            en: "All RDF-based data display",
          },
        },
        candidates: [
          {
            name: { ko: "백엔드에서 처리", en: "Handle in backend" },
            pros: { ko: "프론트 부담 없음", en: "No frontend burden" },
            cons: { ko: "백엔드 수정 필요", en: "Backend modification required" },
          },
          {
            name: { ko: "정규식 전역 치환", en: "Global regex replacement" },
            pros: { ko: "모든 케이스 처리", en: "Handles all cases" },
            cons: { ko: "복잡한 정규식", en: "Complex regex" },
          },
          {
            name: { ko: "유틸리티 함수", en: "Utility function" },
            pros: { ko: "재사용 가능, 명시적", en: "Reusable, explicit" },
            cons: { ko: "호출 필요", en: "Requires calling" },
          },
        ],
        solution: {
          choice: "C",
          name: {
            ko: "cleanString 유틸리티 함수",
            en: "cleanString utility function",
          },
          description: {
            ko: "cleanString 유틸리티 함수로 prefix 제거, [dot] → . 치환, 언더스코어 → 공백 변환",
            en: "cleanString utility function to remove prefix, replace [dot] → ., convert underscore → space",
          },
        },
        reason: {
          ko: [
            "프로젝트 전체에서 동일 함수를 사용하여 재사용성 확보",
            "순수 함수로 단위 테스트가 용이",
            "어떤 변환이 일어나는지 명확하여 명시적",
            "새로운 prefix 패턴을 쉽게 추가할 수 있어 유연성 확보",
            "백엔드 개발자 부재 및 백엔드 코드 수정 권한이 없는 상황에 적합",
          ],
          en: [
            "Reusability by using the same function throughout the project",
            "Pure function makes unit testing easy",
            "Explicit about what transformations occur",
            "Flexibility to easily add new prefix patterns",
            "Suitable for situations without backend developer or backend code modification rights",
          ],
        },
      },
    ],
    folderStructure: [
      {
        name: "apis/",
        children: [
          { name: "QueryKeys.ts" },
          { name: "axios.ts" },
          {
            name: "ko/",
            children: [
              { name: "useSearch.ts" },
              { name: "useFacet.ts" },
              { name: "useResource.ts" },
              { name: "useSiteMap.ts" },
            ],
          },
          {
            name: "en/",
            children: [
              { name: "useSearch.ts" },
              { name: "useFacet.ts" },
              { name: "useResource.ts" },
              { name: "useSiteMap.ts" },
            ],
          },
        ],
      },
      {
        name: "components/",
        children: [
          { name: "gnb/" },
          { name: "Search.tsx" },
          { name: "PageLayout.tsx" },
          { name: "Footer.tsx" },
          { name: "Loading.tsx" },
        ],
      },
      {
        name: "pages/",
        children: [
          { name: "home/" },
          { name: "menuContents/" },
          { name: "detail/" },
          { name: "sitemap/" },
        ],
      },
      {
        name: "stores/",
        children: [{ name: "partsPageWrapper/" }],
      },
      {
        name: "themes/",
        children: [{ name: "themes.ts" }, { name: "palette.ts" }],
      },
      { name: "types/" },
      { name: "utils/" },
      { name: "assets/" },
      { name: "i18n.ts" },
    ],
  },
  {
    id: "bible-distribution",
    slug: "bible-distribution",
    title: {
      ko: "BFK (Bibles For Korea)",
      en: "BFK (Bibles For Korea)",
    },
    description: {
      ko: "한국인을 위한 성경 보급 단체의 공식 웹사이트입니다. 성경/소책자 신청, 블로그 콘텐츠 관리, 후원 시스템 및 관리자용 CMS를 제공합니다.",
      en: "Official website for a Bible distribution organization for Koreans. Provides Bible/booklet requests, blog content management, donation system, and admin CMS.",
    },
    period: "2023.04 ~ 2023.09",
    role: {
      ko: "프론트엔드 개발",
      en: "Frontend Development",
    },
    team: "2",
    category: "freelance",
    techStack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "SWR",
      "SCSS Modules",
      "react-hook-form",
      "react-quill",
      "react-helmet-async",
      "react-share",
    ],
    features: {
      ko: [
        "블로그 시스템 (카테고리별 필터링, 키워드 검색, SNS 공유)",
        "관리자 CMS (블로그 CRUD, WYSIWYG 에디터)",
        "반응형 네비게이션 (데스크톱/모바일)",
        "SEO 최적화 (동적 메타태그)",
        "성경/소책자 신청 시스템",
      ],
      en: [
        "Blog system (category filtering, keyword search, SNS sharing)",
        "Admin CMS (blog CRUD, WYSIWYG editor)",
        "Responsive navigation (desktop/mobile)",
        "SEO optimization (dynamic meta tags)",
        "Bible/booklet request system",
      ],
    },
    responsibilities: [
      {
        category: { ko: "전체", en: "Overall" },
        items: {
          ko: [
            "React + TypeScript 기반 웹 프론트엔드 전체 구현",
            "반응형 웹 디자인 (Desktop, Tablet, Mobile)",
            "PHP 백엔드 API 연동",
          ],
          en: [
            "Full React + TypeScript web frontend implementation",
            "Responsive web design (Desktop, Tablet, Mobile)",
            "PHP backend API integration",
          ],
        },
      },
      {
        category: { ko: "블로그 시스템", en: "Blog System" },
        items: {
          ko: [
            "SWR 기반 데이터 패칭 및 캐싱 전략 설계",
            "카테고리/키워드 검색 기능 구현",
            "게시글 상세 페이지 및 SNS 공유 기능",
            "무한 스크롤/페이지네이션 구현",
          ],
          en: [
            "SWR-based data fetching and caching strategy design",
            "Category/keyword search feature implementation",
            "Post detail page and SNS sharing feature",
            "Infinite scroll/pagination implementation",
          ],
        },
      },
      {
        category: { ko: "관리자 시스템", en: "Admin System" },
        items: {
          ko: [
            "로그인 인증 및 보호된 라우트 구현",
            "react-hook-form 기반 폼 유효성 검사",
            "react-quill WYSIWYG 에디터 통합",
            "복합 조건 검색 (날짜, 카테고리, 키워드)",
          ],
          en: [
            "Login authentication and protected route implementation",
            "react-hook-form based form validation",
            "react-quill WYSIWYG editor integration",
            "Complex condition search (date, category, keyword)",
          ],
        },
      },
      {
        category: { ko: "공통 컴포넌트", en: "Common Components" },
        items: {
          ko: [
            "반응형 네비게이션 (햄버거 메뉴)",
            "재사용 가능한 페이지네이션 컴포넌트",
            "SEO 메타태그 컴포넌트",
            "로딩/에러/404 페이지",
          ],
          en: [
            "Responsive navigation (hamburger menu)",
            "Reusable pagination component",
            "SEO meta tag component",
            "Loading/error/404 pages",
          ],
        },
      },
      {
        category: { ko: "상태 관리", en: "State Management" },
        items: {
          ko: [
            "Redux Toolkit 스토어 설계",
            "로그인 상태, 게시글 목록, 검색 조건 슬라이스 구현",
            "SWR과 Redux 간 데이터 동기화",
          ],
          en: [
            "Redux Toolkit store design",
            "Login state, post list, search condition slices implementation",
            "SWR and Redux data synchronization",
          ],
        },
      },
    ],
    link: "https://www.biblesforkorea.org/",
    detailedDescription: {
      ko: "BFK(Bibles For Korea)는 한국인을 위한 성경 보급 단체의 공식 웹사이트입니다. 성경/소책자 신청, 블로그 콘텐츠 관리, 후원 시스템을 제공하며, 관리자용 CMS(블로그 관리, 리소스 관리, 사용자 관리)를 포함합니다. SWR로 서버 데이터 캐싱 및 자동 재검증을, Redux Toolkit으로 클라이언트 상태를 관리하는 하이브리드 상태 관리 전략을 적용했습니다.",
      en: "BFK (Bibles For Korea) is the official website for a Bible distribution organization for Koreans. It provides Bible/booklet requests, blog content management, and donation system, including an admin CMS for blog, resource, and user management. Applied hybrid state management with SWR for server data caching/revalidation and Redux Toolkit for client state.",
    },
    techImplementation: [
      {
        category: { ko: "상태 관리 전략", en: "State Management Strategy" },
        details: {
          ko: [
            "SWR(서버 데이터) + Redux Toolkit(클라이언트 상태)로 역할 분리",
            "SWR 캐싱 전략: 블로그 데이터 자동 재검증, mutate로 수동 갱신",
            "Redux 슬라이스 설계: 도메인별 분리 (login, posts, categorySearch)",
            "react-hook-form으로 폼 유효성 검사 및 에러 처리",
          ],
          en: [
            "Role separation with SWR (server data) + Redux Toolkit (client state)",
            "SWR caching strategy: auto-revalidation for blog data, manual refresh with mutate",
            "Redux slice design: domain-based separation (login, posts, categorySearch)",
            "Form validation and error handling with react-hook-form",
          ],
        },
      },
      {
        category: { ko: "컴포넌트 설계 패턴", en: "Component Design Patterns" },
        details: {
          ko: [
            "React.lazy + Suspense로 코드 스플리팅",
            "Container/Presentational 패턴 적용",
            "Pagination, Loading, Error, NotFound 공통 컴포넌트화",
            "SCSS Modules로 클래스명 충돌 방지",
          ],
          en: [
            "Code splitting with React.lazy + Suspense",
            "Container/Presentational pattern applied",
            "Common components: Pagination, Loading, Error, NotFound",
            "Class name collision prevention with SCSS Modules",
          ],
        },
      },
      {
        category: {
          ko: "SEO & 성능 최적화",
          en: "SEO & Performance Optimization",
        },
        details: {
          ko: [
            "react-helmet-async로 페이지별 SEO 메타태그 설정",
            "페이지별 Lazy Loading으로 초기 번들 사이즈 감소",
            "페이지 이동 시 scrollTop 자동 실행",
          ],
          en: [
            "Page-specific SEO meta tags with react-helmet-async",
            "Initial bundle size reduction with page-level Lazy Loading",
            "Auto scrollTop on page navigation",
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: {
          ko: "SWR과 Redux 간 데이터 동기화 문제",
          en: "SWR and Redux Data Synchronization Issue",
        },
        situation: {
          environment: {
            ko: "블로그 검색 결과를 다른 페이지에서 사용할 때",
            en: "When using blog search results on other pages",
          },
          symptom: {
            ko: "SWR로 패칭한 데이터가 다른 컴포넌트에서 접근 불가",
            en: "Data fetched with SWR inaccessible from other components",
          },
          impact: {
            ko: "검색 결과 페이지, 블로그 상세 페이지",
            en: "Search results page, blog detail page",
          },
        },
        candidates: [
          {
            name: { ko: "SWR 키 통일", en: "Unify SWR keys" },
            pros: { ko: "SWR 캐시 자동 공유", en: "Automatic SWR cache sharing" },
            cons: { ko: "검색 조건이 다르면 캐시 미스", en: "Cache miss when search conditions differ" },
          },
          {
            name: { ko: "Redux로 동기화", en: "Sync to Redux" },
            pros: { ko: "전역에서 접근 가능, 검색 조건 무관", en: "Global access, regardless of search conditions" },
            cons: { ko: "추가 dispatch 필요", en: "Additional dispatch required" },
          },
          {
            name: { ko: "Context API", en: "Context API" },
            pros: { ko: "Redux 없이 전역 상태", en: "Global state without Redux" },
            cons: { ko: "이미 Redux 사용 중, 혼용 복잡", en: "Already using Redux, mixing is complex" },
          },
        ],
        solution: {
          choice: "B",
          name: {
            ko: "Redux로 동기화",
            en: "Sync to Redux",
          },
          description: {
            ko: "useEffect에서 SWR 데이터 수신 후 dispatch(postsAction())으로 전역 상태 저장. 다른 컴포넌트에서 useSelector로 접근",
            en: "After receiving SWR data in useEffect, save to global state with dispatch(postsAction()). Access from other components via useSelector",
          },
        },
        reason: {
          ko: [
            "이미 Redux를 사용 중이므로 상태 관리 일원화",
            "검색 조건과 무관하게 전역 접근 가능하여 유연성 확보",
            "Redux DevTools로 상태 변화 추적 용이하여 디버깅 편리",
          ],
          en: [
            "Unified state management as Redux already in use",
            "Flexibility with global access regardless of search conditions",
            "Easy debugging with state change tracking via Redux DevTools",
          ],
        },
      },
      {
        title: {
          ko: "반응형 네비게이션 메뉴 토글 상태 관리",
          en: "Responsive Navigation Menu Toggle State Management",
        },
        situation: {
          environment: {
            ko: "모바일에서 메뉴 열고 페이지 이동 시",
            en: "When opening menu and navigating pages on mobile",
          },
          symptom: {
            ko: "페이지 이동 후에도 메뉴가 열린 상태로 유지",
            en: "Menu stays open after page navigation",
          },
          impact: {
            ko: "모바일 사용자 경험",
            en: "Mobile user experience",
          },
        },
        candidates: [
          {
            name: { ko: "useEffect로 라우트 변경 감지", en: "Detect route change with useEffect" },
            pros: { ko: "자동 닫힘", en: "Auto close" },
            cons: { ko: "추가 의존성 필요", en: "Additional dependency required" },
          },
          {
            name: { ko: "Link 클릭 시 수동 닫기", en: "Manual close on Link click" },
            pros: { ko: "명시적 제어", en: "Explicit control" },
            cons: { ko: "모든 Link에 핸들러 추가 필요", en: "Handler needed for all Links" },
          },
          {
            name: { ko: "Navigation 외부 클릭 감지", en: "Detect click outside Navigation" },
            pros: { ko: "직관적 UX", en: "Intuitive UX" },
            cons: { ko: "복잡한 이벤트 처리", en: "Complex event handling" },
          },
        ],
        solution: {
          choice: "A",
          name: {
            ko: "useEffect로 라우트 변경 감지",
            en: "Detect route change with useEffect",
          },
          description: {
            ko: "URL 파라미터(categoryName) 변경 감지 후 메뉴 상태 초기화. setShowInput(false), setSubMenu(false) 실행",
            en: "Detect URL parameter (categoryName) change and reset menu state. Execute setShowInput(false), setSubMenu(false)",
          },
        },
        reason: {
          ko: [
            "URL 파라미터 변경 시 자동으로 메뉴가 닫혀 자동화",
            "새로운 Link 추가 시 별도 처리 불필요하여 유지보수 용이",
            "모든 페이지 이동에 동일하게 적용되어 일관성 확보",
          ],
          en: [
            "Automation with menu auto-closing on URL parameter change",
            "Easy maintenance without separate handling for new Links",
            "Consistency with uniform application to all page navigations",
          ],
        },
      },
      {
        title: {
          ko: "검색 폼 Enter 키 처리",
          en: "Search Form Enter Key Handling",
        },
        situation: {
          environment: {
            ko: "검색창에서 Enter 키 입력 시",
            en: "When pressing Enter key in search input",
          },
          symptom: {
            ko: "페이지 새로고침 발생, 검색 실행 안됨",
            en: "Page refresh occurs, search not executed",
          },
          impact: {
            ko: "블로그 검색 기능",
            en: "Blog search functionality",
          },
        },
        candidates: [
          {
            name: { ko: "onKeyDown + preventDefault", en: "onKeyDown + preventDefault" },
            pros: { ko: "정확한 키 감지", en: "Accurate key detection" },
            cons: { ko: "추가 핸들러 필요", en: "Additional handler required" },
          },
          {
            name: { ko: "form onSubmit", en: "form onSubmit" },
            pros: { ko: "HTML 표준 방식", en: "HTML standard approach" },
            cons: { ko: "버튼 없이 input만 있을 때 불편", en: "Inconvenient with only input and no button" },
          },
          {
            name: { ko: "button type=\"submit\"", en: "button type=\"submit\"" },
            pros: { ko: "간단한 구조", en: "Simple structure" },
            cons: { ko: "버튼 스타일 필요", en: "Button styling required" },
          },
        ],
        solution: {
          choice: "A",
          name: {
            ko: "onKeyDown + preventDefault",
            en: "onKeyDown + preventDefault",
          },
          description: {
            ko: "handleKeyDown에서 e.key === 'Enter' 감지 후 e.preventDefault()와 searchAction() 실행",
            en: "Detect e.key === 'Enter' in handleKeyDown, execute e.preventDefault() and searchAction()",
          },
        },
        reason: {
          ko: [
            "Enter 키로 즉시 검색 실행하여 UX 향상",
            "preventDefault로 페이지 새로고침 방지하여 안정성 확보",
            "버튼 클릭, Enter 키 모두 동일한 searchAction 호출로 유연성 확보",
          ],
          en: [
            "UX improvement with immediate search on Enter key",
            "Stability with preventDefault blocking page refresh",
            "Flexibility with same searchAction for both button click and Enter key",
          ],
        },
      },
      {
        title: {
          ko: "인증되지 않은 사용자의 관리자 페이지 접근",
          en: "Unauthenticated User Access to Admin Pages",
        },
        situation: {
          environment: {
            ko: "URL 직접 입력으로 /admin/* 접근 시",
            en: "When directly entering /admin/* URL",
          },
          symptom: {
            ko: "로그인 없이 관리자 페이지 접근 가능",
            en: "Admin pages accessible without login",
          },
          impact: {
            ko: "관리자 CMS 보안",
            en: "Admin CMS security",
          },
        },
        candidates: [
          {
            name: { ko: "컴포넌트 내 조건부 리다이렉트", en: "Conditional redirect in component" },
            pros: { ko: "빠른 구현", en: "Quick implementation" },
            cons: { ko: "각 컴포넌트마다 중복 코드", en: "Duplicate code in each component" },
          },
          {
            name: { ko: "PrivateRoute 컴포넌트", en: "PrivateRoute component" },
            pros: { ko: "재사용 가능, 중앙 집중", en: "Reusable, centralized" },
            cons: { ko: "추가 컴포넌트 필요", en: "Additional component required" },
          },
          {
            name: { ko: "라우터 loader 활용", en: "Use router loader" },
            pros: { ko: "React Router 6 표준 방식", en: "React Router 6 standard approach" },
            cons: { ko: "학습 곡선", en: "Learning curve" },
          },
        ],
        solution: {
          choice: "A",
          name: {
            ko: "컴포넌트 내 조건부 리다이렉트",
            en: "Conditional redirect in component",
          },
          description: {
            ko: "useSelector로 로그인 상태 확인 후 !(id && pw)면 navigate('/admin/login') 실행",
            en: "Check login state with useSelector, execute navigate('/admin/login') if !(id && pw)",
          },
        },
        reason: {
          ko: [
            "빠른 구현으로 MVP 개발 속도 확보",
            "관리자 페이지가 3개뿐이라 중복 최소화",
            "추후 PrivateRoute 패턴으로 리팩토링 계획 있음",
          ],
          en: [
            "Fast implementation for MVP development speed",
            "Minimal duplication with only 3 admin pages",
            "Plan to refactor to PrivateRoute pattern later",
          ],
        },
      },
      {
        title: {
          ko: "게시글 상세 페이지 새로고침 시 데이터 손실",
          en: "Data Loss on Post Detail Page Refresh",
        },
        situation: {
          environment: {
            ko: "게시글 상세 페이지에서 F5 새로고침",
            en: "F5 refresh on post detail page",
          },
          symptom: {
            ko: "Redux 상태 초기화로 게시글 데이터 없음, 404 표시",
            en: "Redux state reset causes missing post data, showing 404",
          },
          impact: {
            ko: "게시글 상세 페이지",
            en: "Post detail page",
          },
        },
        candidates: [
          {
            name: { ko: "App.tsx에서 전역 데이터 로드", en: "Global data load in App.tsx" },
            pros: { ko: "어느 페이지든 데이터 보장", en: "Data guaranteed for any page" },
            cons: { ko: "초기 로딩 시간 증가", en: "Initial loading time increase" },
          },
          {
            name: { ko: "상세 페이지에서 개별 API 호출", en: "Individual API call on detail page" },
            pros: { ko: "필요한 데이터만 로드", en: "Load only required data" },
            cons: { ko: "API 중복 호출 가능", en: "Possible duplicate API calls" },
          },
          {
            name: { ko: "Redux-Persist", en: "Redux-Persist" },
            pros: { ko: "새로고침 후에도 상태 유지", en: "State maintained after refresh" },
            cons: { ko: "추가 라이브러리, 동기화 이슈", en: "Additional library, sync issues" },
          },
        ],
        solution: {
          choice: "A",
          name: {
            ko: "App.tsx에서 전역 데이터 로드",
            en: "Global data load in App.tsx",
          },
          description: {
            ko: "앱 마운트 시 SWR로 전체 게시글 데이터 패칭 후 Redux에 저장. isLoading 중에는 Loading 컴포넌트 표시",
            en: "Fetch all posts with SWR on app mount and save to Redux. Show Loading component during isLoading",
          },
        },
        reason: {
          ko: [
            "어느 URL로 접근해도 데이터가 보장되어 안정성 확보",
            "새로고침 후에도 정상 동작하여 사용자 경험 향상",
            "추가 라이브러리(redux-persist) 없이 해결하여 단순성 유지",
          ],
          en: [
            "Stability with data guaranteed for any URL access",
            "User experience improvement with normal operation after refresh",
            "Simplicity maintained by solving without additional libraries (redux-persist)",
          ],
        },
      },
    ],
    folderStructure: [
      {
        name: "components/",
        children: [
          { name: "AppLayout.tsx" },
          { name: "Navigation.tsx" },
          { name: "Pagination.tsx" },
          { name: "MetaTag.tsx" },
          { name: "Loading.tsx" },
          { name: "Error.tsx" },
          { name: "NotFound.tsx" },
        ],
      },
      {
        name: "pages/",
        children: [
          { name: "Home/" },
          { name: "Blog/" },
          { name: "Admin/" },
          { name: "Bible/" },
          { name: "Books/" },
          { name: "About/" },
        ],
      },
      {
        name: "redux/",
        children: [
          { name: "configureStore.ts" },
          {
            name: "reducer/",
            children: [{ name: "admin/" }, { name: "pages/Blog/" }],
          },
        ],
      },
      {
        name: "modules/",
        children: [{ name: "components.ts" }, { name: "adminBlog.ts" }],
      },
      {
        name: "styles/",
        children: [{ name: "components/" }, { name: "pages/" }],
      },
    ],
  },
  {
    id: "coffee-admin",
    slug: "coffee-admin",
    title: {
      ko: "농부 나무 관리 어드민 시스템",
      en: "Coffee Admin Dashboard",
    },
    description: {
      ko: "미얀마/라오스 지역 커피 농장 공급망을 관리하는 어드민 대시보드입니다.",
      en: "An admin dashboard for managing coffee farm supply chain in Myanmar/Laos region.",
    },
    period: "2024.08 ~ 2024.11",
    role: {
      ko: "풀스택 개발 (프론트엔드 중심)",
      en: "Full-Stack Development (Frontend-focused)",
    },
    team: "3",
    category: "freelance",
    techStack: [
      "React 19",
      "TypeScript",
      "Vite",
      "MUI",
      "React Query",
      "React Hook Form",
      "i18next",
      "@react-google-maps/api",
      "Vercel",
    ],
    features: {
      ko: [
        "승인 워크플로우 시스템 (면장/농부/구매/섹션 등록/수정/삭제)",
        "면장(Village Head) 관리",
        "Google Maps 연동 지역 관리",
        "다국어 지원 (한국어/라오어)",
        "역할 기반 라우팅",
      ],
      en: [
        "Approval workflow system (village head/farmer/purchase/section registration/edit/delete)",
        "Village Head management",
        "Google Maps integrated location management",
        "Multilingual support (Korean/Lao)",
        "Role-based routing",
      ],
    },
    responsibilities: [
      {
        category: { ko: "프로젝트 초기 세팅", en: "Project Initial Setup" },
        items: {
          ko: [
            "React + TypeScript + Vite 기반 프로젝트 환경 구성",
            "Prettier, ESLint, Husky 설정 (commit 시 코드 품질 검사)",
            "React Router DOM 기반 라우팅 구조 설계",
            "MUI 기반 테마 및 팔레트 설정",
          ],
          en: [
            "React + TypeScript + Vite project environment setup",
            "Prettier, ESLint, Husky setup (code quality check on commit)",
            "React Router DOM based routing structure design",
            "MUI based theme and palette setup",
          ],
        },
      },
      {
        category: { ko: "공통 컴포넌트 시스템", en: "Common Component System" },
        items: {
          ko: [
            "Input, Textarea, Select, Button 등 폼 관련 공통 컴포넌트 구현",
            "React Hook Form 적용 (모든 input 컴포넌트 통합)",
            "Table 공통 컴포넌트 구현 (loading, pagination 지원)",
            "Modal 공통 컴포넌트 및 Context 기반 상태 관리",
            "Title, Label 등 레이아웃 공통 컴포넌트 구현",
          ],
          en: [
            "Input, Textarea, Select, Button form common components",
            "React Hook Form integration (all input components)",
            "Table common component (loading, pagination support)",
            "Modal common component and Context based state management",
            "Title, Label layout common components",
          ],
        },
      },
      {
        category: { ko: "레이아웃 구조", en: "Layout Structure" },
        items: {
          ko: [
            "GNB(Global Navigation Bar) 컴포넌트 구현",
            "LNB(Left Navigation Bar/Sidebar) 컴포넌트 구현",
            "권한별 LNB 메뉴 분기 처리 (ADMIN/부관리자)",
            "전체 레이아웃 Outlet 스크롤 및 스타일 적용",
          ],
          en: [
            "GNB (Global Navigation Bar) component",
            "LNB (Left Navigation Bar/Sidebar) component",
            "Permission-based LNB menu branching (ADMIN/vice-admin)",
            "Full layout Outlet scroll and style application",
          ],
        },
      },
      {
        category: { ko: "페이지 UI 구현", en: "Page UI Implementation" },
        items: {
          ko: [
            "로그인/계정 생성/내 정보 수정 페이지 레이아웃",
            "면장 목록/상세/등록/수정 페이지 레이아웃",
            "농부 목록/상세/등록 페이지 레이아웃",
            "부관리자 목록/상세/수정 페이지 레이아웃",
            "요청 목록/상세 페이지 (승인/거절/삭제 기능 포함)",
            "지역/섹션 관리 페이지 레이아웃",
            "나무 수령/수매 내역 목록 페이지",
          ],
          en: [
            "Login/account create/profile edit page layouts",
            "Village head list/detail/register/edit page layouts",
            "Farmer list/detail/register page layouts",
            "Vice-admin list/detail/edit page layouts",
            "Request list/detail pages (approve/reject/delete features)",
            "Location/section management page layouts",
            "Tree receipt/purchase history list pages",
          ],
        },
      },
      {
        category: { ko: "API 연동", en: "API Integration" },
        items: {
          ko: [
            "로그인/로그아웃 API 연동",
            "계정 생성 API 연동 (지역 정보 Select 연동)",
            "면장 CRUD API 연동 (목록/상세/등록/수정)",
            "농부 CRUD API 연동 (목록/상세/등록)",
            "부관리자 API 연동 (목록/상세/수정)",
            "요청 관리 API 연동 (목록/상세/승인/거절/삭제, 필터링, Pagination)",
            "지역/섹션 API 연동 (목록/등록/삭제)",
            "나무 구매 내역/수매 내역 등록 API 연동",
          ],
          en: [
            "Login/logout API integration",
            "Account creation API (region info Select integration)",
            "Village head CRUD API (list/detail/register/edit)",
            "Farmer CRUD API (list/detail/register)",
            "Vice-admin API (list/detail/edit)",
            "Request management API (list/detail/approve/reject/delete, filtering, pagination)",
            "Location/section API (list/register/delete)",
            "Tree purchase/receipt history API",
          ],
        },
      },
      {
        category: { ko: "인증 시스템", en: "Authentication System" },
        items: {
          ko: [
            "accessToken 기반 인증 처리",
            "토큰 만료 시 자동 로그아웃 처리",
            "미인증 사용자 로그인 페이지 리다이렉트",
            "권한별 UI 분기 처리 (ADMIN/부관리자-농림부)",
          ],
          en: [
            "accessToken based authentication",
            "Auto-logout on token expiration",
            "Unauthenticated user login page redirect",
            "Permission-based UI branching (ADMIN/vice-admin-forestry)",
          ],
        },
      },
      {
        category: {
          ko: "외부 서비스 연동",
          en: "External Service Integration",
        },
        items: {
          ko: [
            "Google Maps API 연동 (미얀마 지역 선택 지원)",
            "Toast 알림 시스템 적용 (react-toastify)",
          ],
          en: [
            "Google Maps API integration (Myanmar region selection)",
            "Toast notification system (react-toastify)",
          ],
        },
      },
      {
        category: { ko: "다국어 지원", en: "Multilingual Support" },
        items: {
          ko: ["다국어 지원 기능 구현 (라오스어 포함)"],
          en: ["Multilingual support implementation (Lao language included)"],
        },
      },
      {
        category: { ko: "배포/인프라", en: "Deployment/Infrastructure" },
        items: {
          ko: [
            "Vercel 배포 설정 (vercel.json, rewrite 설정)",
            "백엔드 API Proxy 설정 (CORS 해결)",
            "GitHub Actions 워크플로우 작성 (fork된 레포로 자동 push)",
          ],
          en: [
            "Vercel deployment setup (vercel.json, rewrite config)",
            "Backend API Proxy setup (CORS resolution)",
            "GitHub Actions workflow (auto push to forked repo)",
          ],
        },
      },
    ],
    detailedDescription: {
      ko: "미얀마/라오스 지역 커피 농장 공급망을 관리하는 어드민 대시보드입니다. 면장(Village Head) 관리, 농부(Farmer) 관리, 커피 나무 거래, 구매 승인 워크플로우 등의 기능을 제공합니다.",
      en: "An admin dashboard for managing coffee farm supply chain in Myanmar/Laos region. Provides features including Village Head management, Farmer management, coffee tree transactions, and purchase approval workflows.",
    },
    techImplementation: [
      {
        category: { ko: "상태 관리 전략", en: "State Management Strategy" },
        details: {
          ko: [
            "React Hook Form으로 비제어 컴포넌트 기반 폼 성능 최적화",
            "Context API로 Dialog, Auth 상태 전역 관리",
            "React Query 캐시 무효화로 CRUD 후 목록 동기화",
            "요청 목록 필터링 상태 관리 및 Pagination 연동",
          ],
          en: [
            "Form performance optimization with uncontrolled component pattern via React Hook Form",
            "Global state management for Dialog, Auth via Context API",
            "List sync after CRUD via React Query cache invalidation",
            "Request list filtering state management and Pagination integration",
          ],
        },
      },
      {
        category: { ko: "API 계층 설계", en: "API Layer Design" },
        details: {
          ko: [
            "면장/농부/부관리자/요청/지역/섹션/나무 등 도메인별 API 분리",
            "Axios 인터셉터로 토큰 주입 및 401 에러 시 자동 로그아웃 처리",
            "Vercel rewrite 설정으로 CORS 문제 해결",
            "react-toastify로 API 실패 시 사용자 알림 통합",
          ],
          en: [
            "Domain-specific API separation for village head/farmer/admin/request/region/section/tree",
            "Token injection and auto-logout on 401 error via Axios interceptor",
            "CORS resolution via Vercel rewrite settings",
            "User notification integration on API failure via react-toastify",
          ],
        },
      },
      {
        category: {
          ko: "외부 서비스 연동",
          en: "External Service Integration",
        },
        details: {
          ko: [
            "Google Maps API 연동 (미얀마 지역 지도 표시 및 좌표 선택)",
            "한국어/라오스어 다국어 지원 기능 구현",
            "이미지/PDF 파일 업로드 및 미리보기 컴포넌트 구현",
          ],
          en: [
            "Google Maps API integration (Myanmar map display and coordinate selection)",
            "Korean/Lao multilingual support implementation",
            "Image/PDF file upload and preview component implementation",
          ],
        },
      },
      {
        category: {
          ko: "인증/보안 구현",
          en: "Authentication/Security Implementation",
        },
        details: {
          ko: [
            "accessToken 기반 JWT 인증 처리",
            "토큰 만료 시 자동 로그아웃 + 로그인 페이지 리다이렉트",
            "ADMIN/부관리자 권한에 따른 LNB 메뉴 및 버튼 분기 처리",
          ],
          en: [
            "JWT authentication via accessToken",
            "Auto-logout + login page redirect on token expiration",
            "LNB menu and button branching based on ADMIN/sub-admin permissions",
          ],
        },
      },
    ],
    troubleshooting: [
      {
        title: {
          ko: "Google Maps 미얀마 지역 선택 제한 문제",
          en: "Google Maps Myanmar Region Selection Restriction",
        },
        situation: {
          environment: {
            ko: "섹션 등록 페이지에서 Google Maps Places Autocomplete 사용 시",
            en: "When using Google Maps Places Autocomplete on section registration page",
          },
          symptom: {
            ko: "미얀마(Myanmar) 지역 주소 검색 시 결과가 나타나지 않음",
            en: "No results when searching Myanmar region addresses",
          },
          impact: {
            ko: "지역 등록, 섹션 등록 기능 전체",
            en: "All location registration, section registration features",
          },
        },
        candidates: [
          {
            name: { ko: "국가 선택 드롭다운 추가", en: "Add country selection dropdown" },
            pros: { ko: "사용자가 국가 선택 가능, 명확한 UX", en: "User can select country, clear UX" },
            cons: { ko: "추가 UI 구현 필요", en: "Additional UI implementation needed" },
          },
          {
            name: { ko: "componentRestrictions 복수 국가 설정", en: "Set multiple countries in componentRestrictions" },
            pros: { ko: "간단한 설정 변경", en: "Simple setting change" },
            cons: { ko: "사용자가 국가 전환 불가", en: "User cannot switch countries" },
          },
          {
            name: { ko: "제한 없이 전체 허용", en: "Allow all without restrictions" },
            pros: { ko: "구현 간단", en: "Simple implementation" },
            cons: { ko: "불필요한 검색 결과 노출", en: "Unnecessary search results exposed" },
          },
        ],
        solution: {
          choice: "A",
          name: {
            ko: "국가 선택 드롭다운 + 동적 componentRestrictions 업데이트",
            en: "Country selection dropdown + dynamic componentRestrictions update",
          },
          description: {
            ko: "국가 선택 UI 추가 후 setComponentRestrictions로 실시간 국가 제한 업데이트. 기본값은 미얀마('mm') 설정",
            en: "Add country selection UI then update country restriction in real-time via setComponentRestrictions. Default set to Myanmar ('mm')",
          },
        },
        reason: {
          ko: [
            "사용자가 필요에 따라 국가 전환 가능하여 유연성 확보",
            "기본값을 미얀마('mm')로 설정하여 주 사용 케이스 대응",
            "향후 라오스 등 다른 국가 추가가 용이하여 확장성 확보",
            "setComponentRestrictions로 페이지 새로고침 없이 국가 변경 가능",
          ],
          en: [
            "Flexibility with user able to switch countries as needed",
            "Handles main use case by setting Myanmar ('mm') as default",
            "Extensibility with easy addition of other countries like Laos in future",
            "Country change without page refresh via setComponentRestrictions",
          ],
        },
      },
      {
        title: {
          ko: "면장 파일 업로드 시 PDF 미지원 문제",
          en: "PDF Not Supported in Village Head File Upload",
        },
        situation: {
          environment: {
            ko: "면장 등록/수정 페이지의 계약서, 통장 사본 업로드 필드",
            en: "Contract, bankbook copy upload fields on village head register/edit page",
          },
          symptom: {
            ko: "PDF 파일 선택 불가, 이미지만 업로드 가능",
            en: "Cannot select PDF files, only images can be uploaded",
          },
          impact: {
            ko: "면장 등록, 수정 기능의 파일 첨부",
            en: "File attachment in village head register, edit features",
          },
        },
        candidates: [
          {
            name: { ko: "accept 속성에 PDF 추가", en: "Add PDF to accept attribute" },
            pros: { ko: "간단한 수정", en: "Simple fix" },
            cons: { ko: "컴포넌트별 개별 설정 필요", en: "Need individual setting per component" },
          },
          {
            name: { ko: "inputAccept props로 외부 주입", en: "Inject via inputAccept props" },
            pros: { ko: "재사용성, 유연성", en: "Reusability, flexibility" },
            cons: { ko: "호출부마다 설정 필요", en: "Need setting at each call site" },
          },
          {
            name: { ko: "모든 파일 허용", en: "Allow all files" },
            pros: { ko: "구현 간단", en: "Simple implementation" },
            cons: { ko: "보안 위험, 불필요한 파일 업로드 가능", en: "Security risk, unnecessary file upload possible" },
          },
        ],
        solution: {
          choice: "B",
          name: {
            ko: "inputAccept props로 외부 주입",
            en: "Inject via inputAccept props",
          },
          description: {
            ko: "LabelAndSelectFile 컴포넌트에 inputAccept props 추가. 기본값은 'image/*', 필요 시 'image/*,application/pdf' 전달",
            en: "Add inputAccept props to LabelAndSelectFile component. Default 'image/*', pass 'image/*,application/pdf' when needed",
          },
        },
        reason: {
          ko: [
            "공통 컴포넌트의 유연성을 유지하여 재사용성 확보",
            "기본값 'image/*'로 기존 사용처에 영향 없는 하위 호환성",
            "호출부에서 허용 파일 타입이 명확히 확인 가능하여 명시적",
            "계약서, 통장 사본은 스캔 PDF가 일반적이라는 실무 요구 반영",
          ],
          en: [
            "Reusability by maintaining flexibility of common component",
            "Backwards compatibility with no impact on existing usage via default 'image/*'",
            "Explicit with allowed file types clearly visible at call site",
            "Reflects practical requirement that contracts, bankbook copies are typically scanned PDFs",
          ],
        },
      },
      {
        title: {
          ko: "Vercel 배포 시 CORS 에러 발생",
          en: "CORS Error on Vercel Deployment",
        },
        situation: {
          environment: {
            ko: "Vercel 배포 후 백엔드 API 호출 시",
            en: "When calling backend API after Vercel deployment",
          },
          symptom: {
            ko: "CORS policy 에러로 모든 API 요청 실패",
            en: "All API requests fail due to CORS policy error",
          },
          impact: {
            ko: "전체 애플리케이션 기능",
            en: "All application functionality",
          },
        },
        candidates: [
          {
            name: { ko: "백엔드 CORS 설정 요청", en: "Request backend CORS settings" },
            pros: { ko: "근본적 해결", en: "Fundamental solution" },
            cons: { ko: "백엔드 수정 필요, 시간 소요", en: "Backend modification needed, time consuming" },
          },
          {
            name: { ko: "Vercel Rewrite로 프록시", en: "Proxy via Vercel Rewrite" },
            pros: { ko: "프론트만으로 해결", en: "Solved with frontend only" },
            cons: { ko: "Vercel 설정 학습 필요", en: "Need to learn Vercel settings" },
          },
          {
            name: { ko: "별도 프록시 서버 구축", en: "Build separate proxy server" },
            pros: { ko: "완전한 제어 가능", en: "Full control possible" },
            cons: { ko: "추가 인프라 비용, 복잡도 증가", en: "Additional infrastructure cost, increased complexity" },
          },
        ],
        solution: {
          choice: "B",
          name: {
            ko: "Vercel Rewrite 설정으로 프록시 처리",
            en: "Proxy via Vercel Rewrite settings",
          },
          description: {
            ko: "vercel.json에 rewrites 설정으로 /api 경로를 백엔드 서버로 프록시. baseURL을 상대 경로('/api')로 변경",
            en: "Proxy /api path to backend server via rewrites in vercel.json. Change baseURL to relative path ('/api')",
          },
        },
        reason: {
          ko: [
            "백엔드 수정 없이 프론트엔드만으로 해결하여 독립성 확보",
            "실제 백엔드 URL이 클라이언트에 노출되지 않아 보안 강화",
            "Vercel 네이티브 기능을 활용하여 배포 용이",
            "개발/프로덕션 환경 모두 동일한 방식 적용으로 환경 일관성 확보",
          ],
          en: [
            "Independence by solving with frontend only without backend modification",
            "Enhanced security with actual backend URL not exposed to client",
            "Easy deployment utilizing Vercel native features",
            "Environment consistency with same approach for both dev/production",
          ],
        },
      },
      {
        title: {
          ko: "토큰 만료 시 무한 API 재시도 문제",
          en: "Infinite API Retry on Token Expiration",
        },
        situation: {
          environment: {
            ko: "Access Token 만료 후 API 호출 시",
            en: "When calling API after Access Token expiration",
          },
          symptom: {
            ko: "401 에러 발생 후에도 사용자가 인지하지 못하고 계속 작업 시도",
            en: "User continues working without recognizing after 401 error occurs",
          },
          impact: {
            ko: "모든 인증 필요 API 호출",
            en: "All API calls requiring authentication",
          },
        },
        candidates: [
          {
            name: { ko: "401 시 즉시 로그아웃 + 리다이렉트", en: "Immediate logout + redirect on 401" },
            pros: { ko: "명확한 처리, 보안 강화", en: "Clear handling, enhanced security" },
            cons: { ko: "작업 중 데이터 손실", en: "Data loss during work" },
          },
          {
            name: { ko: "Refresh Token 자동 갱신", en: "Auto refresh token renewal" },
            pros: { ko: "끊김 없는 UX", en: "Seamless UX" },
            cons: { ko: "백엔드 Refresh API 필요", en: "Backend Refresh API needed" },
          },
          {
            name: { ko: "만료 전 경고 알림", en: "Warning notification before expiration" },
            pros: { ko: "사용자에게 사전 안내", en: "Advance notice to user" },
            cons: { ko: "토큰 만료 시점 예측 필요", en: "Need to predict token expiration time" },
          },
        ],
        solution: {
          choice: "A",
          name: {
            ko: "401 시 즉시 로그아웃 + 토스트 알림",
            en: "Immediate logout + toast notification on 401",
          },
          description: {
            ko: "Axios 인터셉터에서 401 + 에러 코드(A002) + 메시지로 토큰 만료만 캐치. 모든 인증 쿠키 제거 후 로그인 페이지로 강제 이동",
            en: "Catch only token expiration via 401 + error code (A002) + message in Axios interceptor. Remove all auth cookies and force redirect to login page",
          },
        },
        reason: {
          ko: [
            "백엔드에 Refresh Token API가 없는 상황에서 현실적 해결책",
            "만료된 토큰으로 지속적인 요청을 방지하여 보안 강화",
            "토스트 알림으로 사용자에게 상황 전달하여 명확성 확보",
            "code + message로 토큰 만료만 정확히 캐치하여 정확성 확보",
          ],
          en: [
            "Realistic solution when backend has no Refresh Token API",
            "Enhanced security by preventing continuous requests with expired token",
            "Clarity with toast notification informing user of the situation",
            "Accuracy by catching only token expiration via code + message",
          ],
        },
      },
      {
        title: {
          ko: "권한별 LNB 메뉴 미분기 문제",
          en: "LNB Menu Not Branching by Permission",
        },
        situation: {
          environment: {
            ko: "부관리자(농림부/한국지사) 로그인 시",
            en: "When sub-admin (Agriculture Ministry/Korea Branch) logs in",
          },
          symptom: {
            ko: "모든 역할에 동일한 메뉴 노출, 권한 없는 페이지 접근 가능",
            en: "Same menu shown for all roles, can access unauthorized pages",
          },
          impact: {
            ko: "전체 네비게이션 시스템",
            en: "Entire navigation system",
          },
        },
        candidates: [
          {
            name: { ko: "역할별 LNB 데이터 분리", en: "Separate LNB data by role" },
            pros: { ko: "명확한 분기, 유지보수 용이", en: "Clear branching, easy maintenance" },
            cons: { ko: "데이터 중복 발생", en: "Data duplication occurs" },
          },
          {
            name: { ko: "메뉴마다 권한 체크 필터링", en: "Permission check filtering per menu" },
            pros: { ko: "중복 최소화", en: "Minimal duplication" },
            cons: { ko: "복잡한 필터링 로직", en: "Complex filtering logic" },
          },
          {
            name: { ko: "역할별 라우터 분리", en: "Separate router by role" },
            pros: { ko: "완벽한 접근 제어", en: "Perfect access control" },
            cons: { ko: "과도한 구조 변경", en: "Excessive structural change" },
          },
        ],
        solution: {
          choice: "A",
          name: {
            ko: "역할별 LNB 데이터 분리",
            en: "Separate LNB data by role",
          },
          description: {
            ko: "Record<TRole, TLnbItem[]>로 ADMIN, VICE_ADMIN_AGRICULTURE_MINISTRY_OFFICER, VICE_ADMIN_HEAD_OFFICER, VILLAGE_HEAD 역할별 메뉴 구조 정의",
            en: "Define menu structure per role for ADMIN, VICE_ADMIN_AGRICULTURE_MINISTRY_OFFICER, VICE_ADMIN_HEAD_OFFICER, VILLAGE_HEAD via Record<TRole, TLnbItem[]>",
          },
        },
        reason: {
          ko: [
            "역할별 메뉴 구조가 한눈에 파악 가능하여 명확성 확보",
            "잘못된 필터링으로 인한 메뉴 노출 위험이 없어 안전성 확보",
            "특정 역할 메뉴 수정 시 다른 역할에 영향 없어 유지보수 용이",
            "TypeScript Record로 역할 누락을 방지하여 타입 안전성 확보",
          ],
          en: [
            "Clarity with menu structure by role visible at a glance",
            "Safety with no risk of menu exposure from incorrect filtering",
            "Easy maintenance with no impact on other roles when modifying specific role's menu",
            "Type safety preventing role omission via TypeScript Record",
          ],
        },
      },
      {
        title: {
          ko: "삭제 버튼 클릭 시 이벤트 버블링 문제",
          en: "Event Bubbling Issue on Delete Button Click",
        },
        situation: {
          environment: {
            ko: "테이블 행 내 삭제 버튼 클릭 시",
            en: "When clicking delete button in table row",
          },
          symptom: {
            ko: "삭제 버튼 클릭 시 행 클릭 이벤트도 함께 발생",
            en: "Row click event also triggers when clicking delete button",
          },
          impact: {
            ko: "지역/섹션 목록, 면장/농부 목록의 삭제 기능",
            en: "Delete feature in location/section list, village head/farmer list",
          },
        },
        candidates: [
          {
            name: { ko: "stopPropagation으로 이벤트 전파 차단", en: "Block event propagation with stopPropagation" },
            pros: { ko: "간단한 해결", en: "Simple solution" },
            cons: { ko: "컴포넌트마다 적용 필요", en: "Need to apply per component" },
          },
          {
            name: { ko: "행 클릭 핸들러에서 타겟 체크", en: "Check target in row click handler" },
            pros: { ko: "중앙화된 처리", en: "Centralized handling" },
            cons: { ko: "조건문 복잡도 증가", en: "Increased conditional complexity" },
          },
          {
            name: { ko: "삭제 버튼을 행 외부로 이동", en: "Move delete button outside row" },
            pros: { ko: "근본적 해결", en: "Fundamental solution" },
            cons: { ko: "UI 변경 필요", en: "UI change required" },
          },
        ],
        solution: {
          choice: "A",
          name: {
            ko: "stopPropagation 적용",
            en: "Apply stopPropagation",
          },
          description: {
            ko: "DeleteButton 컴포넌트의 onClick에서 e.stopPropagation() 호출하여 이벤트 버블링 차단",
            en: "Call e.stopPropagation() in DeleteButton component's onClick to block event bubbling",
          },
        },
        reason: {
          ko: [
            "한 줄 추가로 문제를 해결하여 단순성 확보",
            "공통 컴포넌트에 적용하여 모든 사용처에 자동 적용되어 재사용성 확보",
            "기존 테이블 구조 변경 없이 UI 유지",
            "React에서 권장하는 이벤트 처리 방식으로 표준 패턴 준수",
          ],
          en: [
            "Simplicity by solving problem with one line addition",
            "Reusability with auto-application to all usage by applying to common component",
            "UI maintained without changing existing table structure",
            "Follows standard pattern as React recommended event handling approach",
          ],
        },
      },
      {
        title: {
          ko: "React Query 캐시로 인한 데이터 불일치 문제",
          en: "Data Inconsistency Due to React Query Cache",
        },
        situation: {
          environment: {
            ko: "면장/농부/섹션 등록/삭제 후 목록 페이지 이동 시",
            en: "When navigating to list page after village head/farmer/section create/delete",
          },
          symptom: {
            ko: "변경 사항이 목록에 반영되지 않음 (새로고침 필요)",
            en: "Changes not reflected in list (refresh required)",
          },
          impact: {
            ko: "모든 CRUD 작업 후 목록 조회",
            en: "List view after all CRUD operations",
          },
        },
        candidates: [
          {
            name: { ko: "onSuccess에서 invalidateQueries", en: "invalidateQueries in onSuccess" },
            pros: { ko: "React Query 권장 패턴", en: "React Query recommended pattern" },
            cons: { ko: "모든 mutation에 적용 필요", en: "Need to apply to all mutations" },
          },
          {
            name: { ko: "staleTime: 0 설정", en: "Set staleTime: 0" },
            pros: { ko: "항상 최신 데이터", en: "Always fresh data" },
            cons: { ko: "불필요한 API 호출 증가", en: "Increased unnecessary API calls" },
          },
          {
            name: { ko: "수동 refetch 호출", en: "Manual refetch call" },
            pros: { ko: "필요한 시점에만 호출", en: "Call only when needed" },
            cons: { ko: "호출 시점 관리 복잡", en: "Complex call timing management" },
          },
        ],
        solution: {
          choice: "A",
          name: {
            ko: "onSuccess에서 관련 쿼리 캐시 무효화",
            en: "Invalidate related query cache in onSuccess",
          },
          description: {
            ko: "mutation의 onSuccess에서 invalidateQueries 호출. QUERY_KEYS 상수로 일관된 키 관리",
            en: "Call invalidateQueries in mutation's onSuccess. Consistent key management via QUERY_KEYS constants",
          },
        },
        reason: {
          ko: [
            "데이터 변경 시점에만 캐시를 무효화하여 정확성 확보",
            "불필요한 API 호출을 최소화하여 성능 최적화",
            "React Query 공식 권장 패턴을 준수",
            "QUERY_KEYS 상수로 일관된 키 관리 체계화",
          ],
          en: [
            "Accuracy by invalidating cache only on data change",
            "Performance optimization by minimizing unnecessary API calls",
            "Follows React Query official recommended pattern",
            "Systematic key management via QUERY_KEYS constants",
          ],
        },
      },
      {
        title: {
          ko: "다국어 번역 누락 문제",
          en: "Missing Multilingual Translation Issue",
        },
        situation: {
          environment: {
            ko: "라오스어 전환 시",
            en: "When switching to Lao language",
          },
          symptom: {
            ko: "일부 텍스트가 번역되지 않고 key 그대로 노출",
            en: "Some text not translated, key displayed as-is",
          },
          impact: {
            ko: "다국어 지원이 필요한 모든 UI 텍스트",
            en: "All UI text requiring multilingual support",
          },
        },
        candidates: [
          {
            name: { ko: "번역 파일 수동 동기화", en: "Manual translation file sync" },
            pros: { ko: "즉시 해결", en: "Immediate solution" },
            cons: { ko: "휴먼 에러 발생 가능", en: "Human error possible" },
          },
          {
            name: { ko: "i18n missing key 경고 설정", en: "Set i18n missing key warning" },
            pros: { ko: "개발 중 누락 감지", en: "Detect missing during development" },
            cons: { ko: "프로덕션에서는 확인 어려움", en: "Difficult to check in production" },
          },
          {
            name: { ko: "번역 관리 도구 도입", en: "Introduce translation management tool" },
            pros: { ko: "체계적 관리", en: "Systematic management" },
            cons: { ko: "추가 비용, 학습 필요", en: "Additional cost, learning needed" },
          },
        ],
        solution: {
          choice: "A",
          name: {
            ko: "번역 파일 동기화 + t() 함수 일관 적용",
            en: "Translation file sync + consistent t() function application",
          },
          description: {
            ko: "LNB 등 모든 UI 텍스트에 t() 함수로 감싸기. locales/lo/translation.json에 라오스어 번역 추가",
            en: "Wrap all UI text like LNB with t() function. Add Lao translation to locales/lo/translation.json",
          },
        },
        reason: {
          ko: [
            "발견 즉시 해결 가능하여 즉시성 확보",
            "모든 UI 텍스트에 t() 함수 적용을 표준화하여 일관성 확보",
            "번역 키가 명확하여 누락 파악이 용이한 추적성 확보",
          ],
          en: [
            "Immediacy with solution possible upon discovery",
            "Consistency by standardizing t() function application to all UI text",
            "Traceability with clear translation keys making it easy to identify missing items",
          ],
        },
      },
    ],
    folderStructure: [
      {
        name: "apis/",
        children: [
          { name: "Axios.ts" },
          { name: "QUERY_KEYS.ts" },
          { name: "AppUser/" },
          { name: "Approval/" },
          { name: "Area/" },
          { name: "Farmer/" },
          { name: "TreeTransaction/" },
        ],
      },
      {
        name: "components/",
        children: [
          { name: "AddPhoto.tsx" },
          { name: "Table.tsx" },
          { name: "CustomDatePicker.tsx" },
          { name: "LabelAndInput.tsx" },
          { name: "DialogProvider.tsx" },
        ],
      },
      { name: "hooks/" },
      {
        name: "locales/",
        children: [
          { name: "ko/translation.json" },
          { name: "lo/translation.json" },
        ],
      },
      {
        name: "pages/",
        children: [
          { name: "accounts/" },
          { name: "approval/" },
          { name: "farmer/" },
          { name: "locations/" },
          { name: "villageHead/" },
        ],
      },
      {
        name: "routers/",
        children: [{ name: "Router.tsx" }, { name: "Layout.tsx" }],
      },
      { name: "themes/" },
      { name: "typings/" },
      { name: "utils/" },
    ],
  },
];
