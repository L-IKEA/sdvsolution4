import React, { useState, useEffect, useMemo, createContext, useContext } from 'react';
import {
  LayoutDashboard,
  UserCheck,
  BookOpen,
  Layers,
  Settings,
  Search,
  Maximize,
  Bell,
  ChevronRight,
  CheckCircle2,
  Play,
  Mic,
  MessageSquare,
  ShieldCheck,
  Activity,
  Zap,
  Cpu,
  Trophy,
  Utensils,
  MapPin,
  FileText,
  Vote,
  X,
  Send,
  MoreVertical,
  LogOut,
  ChevronDown,
  User,
  Globe,
  TrendingUp,
  GraduationCap,
  Users,
  Trash2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/** UTILS */
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/** TRANSLATIONS */
const TRANSLATIONS = {
  ko: {
    // Auth
    auth_title: "AI 비서",
    auth_subtitle: "보안 액세스 프로토콜",
    input_id: "ID 입력",
    id_placeholder: "ADMIN 또는 MANAGER 입력",
    authenticate: "인증하기",
    invalid_id: '유효하지 않은 ID: "admin" 또는 "manager"를 사용하세요',

    // Sidebar/Nav
    dashboard: "대시보드",
    onboarding: "온보딩",
    vault: "데이터 저장소",
    apps: "애플리케이션",
    system: "시스템 설정",
    logout: "로그아웃",

    // Dashboard
    cmd_control: "대시보드",
    telemetry_avg: "시스템 텔레메트리 개요",
    proj_integrity: "프로젝트 무결성",
    test_coverage: "유닛 테스트 커버리지",
    sys_latency: "시스템 지연시간",
    core_util: "코어 사용률",
    sprint_status: "활성 스프린트 상태",
    integ_logs: "통합 로그",

    // Onboarding
    onboarding_title: "온보딩",
    onboarding_sub: "성장 및 통합 포털",
    tab_guide: "가이드",
    tab_growth: "성장",
    tab_education: "교육",
    tab_conference: "컨퍼런스",
    tab_dept: "부서 현황",
    tab_my: "나의 현황",
    dept_personnel: "부서 인원 상태",
    personal_task: "개인 과업 노드",
    perf_telemetry: "퍼포먼스 텔레메트리",
    compliance_rate: "컴플라이언스 비율",
    growth_node: "성장 노드",
    team_rank: "팀 랭킹",
    pathway_status: "성장 경로 상태",
    visualizing_nodes: "개발 노드 시각화 중...",

    // Knowledge Base
    vault_title: "지식 데이터 저장소",
    vault_sub: "엔지니어링 인텔리전스 시스템",
    gen_exam: "시험 문제 생성",
    doc_index: "문서 리스트",
    doc_type: "문서",
    sys_analysis: "[추가 데이터 추출을 위해 시스템 분석이 필요함]",
    exam_node_title: "시험",
    score: "점수",
    intel_complete: "분석 완료",
    ret_vault: "돌아가기",
    fin_analysis: "분석 완료",
    select_doc: "적어도 하나의 문서를 선택하세요",

    // Apps
    team_apps: "애플리케이션",
    apps_sub: "편의성 도구 모음",
    tab_welfare: "편의",
    tab_voting: "투표",
    gourmet_portal: "식당 추천",
    load_more: "더 많은 식당",
    wayfinding: "최적 경로 찾기",
    calc_path: "최적 경로 계산",
    curr_node: "출발지",
    target: "목적지",
    corp_codex: "기업 규정 정보",
    dining_vote: "회식 메뉴 투표",
    vote_q: "회식 메뉴를 골라주세요.",
    vote_active: "",
    vote_reg: "✓ 블록체인 모듈에 투표 등록됨",

    // Settings
    sys_config: "설정",
    config_sub: "터미널 및 프로토콜 설정",
    prof_synth: "프로필 합성",
    edit_sig: "프로필 편집",
    dark_mode: "다크 모드",
    realtime_tele: "실시간 텔레메트리",
    hw_interface: "하드웨어 인터페이스",
    gpu_acc: "GPU 가속 활성",
    neural_core: "뉴럴 코어 v4.1 동기화됨",
    access_rest: "시스템 설계자에게만 접근이 제한됨. 코어 파라미터 수정 시 동기화 오류 또는 프로젝트 무결성 저하가 발생할 수 있음.",

    // Co-Pilot
    copilot_title: "질문하기",
    copilot_sub: "AI 어시스턴트",
    init_cmd: "명령어 개시...",
    ai_greet: "안녕하십니까. 어떤 도움을 드릴까요?",
    ai_proc: "요청 처리 중... 데이터베이스에서 데이터 추출 중. 솔루션 최적화 완료.",

    // Common
    status_online: "상태: 온라인",
    probe_data: "검색...",
    terminal_id: "터미널.A-102"
  },
  en: {
    // Auth
    auth_title: "NEURAL AUTH",
    auth_subtitle: "Secure Access Protocol",
    input_id: "Input Terminal ID",
    id_placeholder: "ENTER ADMIN OR MANAGER",
    authenticate: "Authenticate",
    invalid_id: 'INVALID ID: USE "admin" OR "manager"',

    // Sidebar/Nav
    dashboard: "Dashboard",
    onboarding: "Onboarding",
    vault: "Vault",
    apps: "Apps",
    system: "System",
    logout: "Logout",

    // Dashboard
    cmd_control: "Command Control",
    telemetry_avg: "System Telemetry Overview",
    proj_integrity: "PROJECT INTEGRITY",
    test_coverage: "UNIT TEST COVERAGE",
    sys_latency: "SYSTEM LATENCY",
    core_util: "CORE UTILIZATION",
    sprint_status: "ACTIVE SPRINT STATUS",
    integ_logs: "INTEGRATION LOGS",

    // Onboarding
    onboarding_title: "Onboarding",
    onboarding_sub: "Growth & Integration Portal",
    tab_guide: "Guide",
    tab_growth: "Growth",
    tab_education: "Education",
    tab_conference: "Conference",
    tab_dept: "Dept Status",
    tab_my: "My Status",
    dept_personnel: "Dept Personnel Status",
    personal_task: "Personal Task Node",
    perf_telemetry: "Performance Telemetry",
    compliance_rate: "Compliance Rate",
    growth_node: "Growth Node",
    team_rank: "Team Rank",
    pathway_status: "Growth Pathway Status",
    visualizing_nodes: "Visualizing Development Nodes...",

    // Knowledge Base
    vault_title: "Knowledge Vault",
    vault_sub: "Engineering Intelligence System",
    gen_exam: "Generate Exam Node",
    doc_index: "Document Index",
    doc_type: "DOCUMENT",
    sys_analysis: "[SYSTEM ANALYSIS REQUIRED FOR FURTHER DATA EXTRACTION]",
    exam_node_title: "NEURAL EXAM NODE",
    score: "SCORE",
    intel_complete: "Intelligence Analysis Complete",
    ret_vault: "Return to Vault",
    fin_analysis: "Finish Analysis",
    select_doc: "SELECT AT LEAST ONE DOCUMENT",

    // Apps
    team_apps: "Team Applications",
    apps_sub: "Utilities & Interaction Hub",
    tab_welfare: "Welfare",
    tab_voting: "Voting",
    gourmet_portal: "Restaurant Recommendation",
    load_more: "Load More nodes",
    wayfinding: "Optimal Path Search",
    calc_path: "Calculate Optimal Path",
    curr_node: "Current Node",
    target: "Target",
    corp_codex: "Corporate Codex",
    dining_vote: "TEAM COLLABORATION: DINING PROTOCOL VOTE",
    vote_q: "WHICH REFUELING MODULE FOR THE TEAM LUNCHEON?",
    vote_active: "Protocol Active // Expires in 14h 22m",
    vote_reg: "✓ VOTE REGISTERED IN BLOCKCHAIN MODULE",

    // Settings
    sys_config: "System Configuration",
    config_sub: "Terminal & Protocol Settings",
    prof_synth: "Profile Synthesis",
    edit_sig: "Edit Neural Signature",
    dark_mode: "Dark Mode Protocol",
    realtime_tele: "Real-time Telemetry",
    hw_interface: "Hardware Interface",
    gpu_acc: "GPU Acceleration Active",
    neural_core: "Neural Core v4.1 Synced",
    access_rest: "Access restricted to system architects. modifying core parameters may result in synchronization desync or project integrity degradation.",

    // Co-Pilot
    copilot_title: "Neural Co-Pilot",
    copilot_sub: "Autonomous Unit v2.1",
    init_cmd: "INITIATE COMMAND...",
    ai_greet: "HELLO OPERATOR. HOW CAN I ASSIST IN YOUR DEVELOPMENT FLOW TODAY?",
    ai_proc: "PROCESSING REQUEST... DATA RETRIEVED FROM CORE DATABASE. SOLUTION OPTIMIZED.",

    // Common
    status_online: "Status: Online",
    probe_data: "PROBE SYSTEM DATA...",
    terminal_id: "Terminal.A-102"
  }
};

/** CONTEXT */
const LanguageContext = createContext();
const useTranslation = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useTranslation must be used within LanguageProvider');
  return context;
};

/** MOCK DATA */
const USER_ROLES = {
  ADMIN: 'admin',
  MANAGER: 'manager'
};

const INITIAL_MEMBERS = [
  { id: 1, name: 'KIM MIN-JUN', dept: 'Engine SW', role: 'Developer', progress: { install: true, security: true, education: false }, total: 65, type: 'MY' },
  { id: 2, name: 'LEE SEO-YUN', dept: 'ADAS System', role: 'Senior Developer', progress: { install: true, security: true, education: true }, total: 100, type: 'DEPT' },
  { id: 3, name: 'PARK JI-WOO', dept: 'Infotainment', role: 'Junior Developer', progress: { install: true, security: false, education: false }, total: 30, type: 'DEPT' },
  { id: 4, name: 'CHOI SUNG-HO', dept: 'Connectivity', role: 'Developer', progress: { install: true, security: true, education: false }, total: 72, type: 'DEPT' },
];

const STANDARD_DOCS = [
  { id: 'D1', category: 'Quality', title: 'ASPICE Level 3 Guidelines', content: 'Automotive Software Process Improvement and Capability dEtermination...' },
  { id: 'D2', category: 'Security', title: 'ISO/SAE 21434 Cybersecurity', content: 'Road vehicles — Cybersecurity engineering is a standard for automotive cybersecurity...' },
  { id: 'D3', category: 'Platform', title: 'AUTOSAR Adaptive Architecture', content: 'AUTOSAR Adaptive Platform implements the AUTOSAR Runtime for Adaptive Applications...' },
];

const GET_PREMIUM_STATS = (t) => [
  { label: t('proj_integrity'), value: '98.2%', icon: ShieldCheck, color: 'text-emerald-500' },
  { label: t('test_coverage'), value: '94.5%', icon: Activity, color: 'text-blue-500' },
  { label: t('sys_latency'), value: '12MS', icon: Zap, color: 'text-amber-500' },
  { label: t('core_util'), value: '42%', icon: Cpu, color: 'text-purple-500' },
];

/** COMPONENTS */

// Global Premium Layout Wrapper
const PremiumPage = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    className="space-y-8 pb-12"
  >
    {children}
  </motion.div>
);

// Section Header
const SectionHeader = ({ title, subtitle }) => (
  <div className="mb-8">
    <h1 className="text-5xl font-black uppercase tracking-tighter text-white neon-text mb-2">
      {title}
    </h1>
    <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">
      {subtitle}
    </p>
  </div>
);

// Premium Card
const Card = ({ children, className, title }) => (
  <div className={cn("premium-card p-8", className)}>
    {title && (
      <div className="flex items-center gap-2 mb-6 border-l-4 border-electric-blue pl-4">
        <h3 className="text-lg font-black uppercase text-white tracking-tight">{title}</h3>
      </div>
    )}
    {children}
  </div>
);

// LOGIN VIEW
const LoginView = ({ onLogin }) => {
  const { t } = useTranslation();
  const [userId, setUserId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userId === 'admin' || userId === 'manager') {
      onLogin(userId);
    } else {
      alert(t('invalid_id'));
    }
  };

  return (
    <div className="fixed inset-0 bg-neural-bg flex items-center justify-center p-4 z-50">
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="w-full max-w-md premium-card p-12 space-y-8"
      >
        <div className="text-center space-y-4">
          <div className="w-20 h-20 bg-electric-blue rounded-premium-lg mx-auto flex items-center justify-center shadow-neon">
            <ShieldCheck className="w-10 h-10 text-white" />
          </div>
          <SectionHeader title={t('auth_title')} subtitle={t('auth_subtitle')} />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-black text-slate-500 uppercase">{t('input_id')}</label>
            <input
              type="text"
              value={userId}
              onChange={(e) => setUserId(e.target.value.toLowerCase())}
              placeholder={t('id_placeholder')}
              className="w-full bg-slate-900/50 border border-slate-700 rounded-2xl p-4 text-white focus:outline-none focus:border-electric-blue transition-colors font-black uppercase tracking-wider"
            />
          </div>
          <button
            type="submit"
            className="w-full py-4 bg-electric-blue text-white rounded-2xl font-black uppercase tracking-widest hover:bg-blue-500 shadow-neon transition-all"
          >
            {t('authenticate')}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

// DASHBOARD
const Dashboard = () => {
  const { t } = useTranslation();
  const premiumStats = GET_PREMIUM_STATS(t);

  return (
    <PremiumPage>
      <SectionHeader title={t('cmd_control')} subtitle={t('telemetry_avg')} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {premiumStats.map((stat, i) => (
          <Card key={i} className="group overflow-hidden relative">
            <div className="absolute top-0 right-0 p-4 opacity-10 scale-150 rotate-12 group-hover:scale-110 transition-transform">
              <stat.icon size={80} className={stat.color} />
            </div>
            <stat.icon className={cn("w-8 h-8 mb-4", stat.color)} />
            <p className="text-[10px] font-black text-slate-500 uppercase mb-1">{stat.label}</p>
            <h2 className="text-3xl font-black text-white uppercase">{stat.value}</h2>
            <div className="mt-4 w-full h-1 bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: stat.value }}
                transition={{ delay: 0.5, duration: 1 }}
                className={cn("h-full", stat.color.replace('text-', 'bg-'))}
              />
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <Card title={t('sprint_status')} className="lg:col-span-2 h-96">
          <div className="flex items-end justify-between h-56 gap-4">
            {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
              <div key={i} className="flex-1 space-y-2">
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  className="bg-electric-blue/20 hover:bg-electric-blue/40 rounded-t-xl transition-all border-t-2 border-electric-blue"
                />
                <p className="text-[8px] text-center font-bold text-slate-600">D-{i + 1}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card title={t('integ_logs')} className="h-96 overflow-y-auto">
          <div className="space-y-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="flex gap-4 border-b border-slate-800 pb-4 last:border-0">
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1 animate-pulse" />
                <div>
                  <p className="text-xs font-black uppercase text-white">CI/CD PASS: CORE_ENGINE</p>
                  <p className="text-[8px] font-bold text-slate-500">2026-03-12 14:45:0{i}</p>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </PremiumPage>
  );
};

// ONBOARDING
const Onboarding = ({ role }) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState('guide');
  const [viewType, setViewType] = useState('my'); // 'my' or 'dept'
  const [selectedMember, setSelectedMember] = useState(null);
  const [members, setMembers] = useState(INITIAL_MEMBERS);

  // Chat Guide States
  const [chatMessages, setChatMessages] = useState([
     { role: 'ai', text: '안녕하세요! 노트북LM 기반 온보딩 가이드 챗봇입니다. 질문을 입력해주세요.' }
  ]);
  const [chatInput, setChatInput] = useState('');
  const [isChatLoading, setIsChatLoading] = useState(false);

  const toggleCheck = (memberId, key) => {
    setMembers(prev => prev.map(m =>
      m.id === memberId ? { ...m, progress: { ...m.progress, [key]: !m.progress[key] } } : m
    ));
  };

  const filteredMembers = useMemo(() => {
    if (viewType === 'my') return members.filter(m => m.id === 1); // Mock: ID 1 is the logged-in user
    return members.filter(m => m.type === 'DEPT');
  }, [members, viewType]);

  useEffect(() => {
    if (viewType === 'my') setSelectedMember(members.find(m => m.id === 1));
    else setSelectedMember(null);
  }, [viewType, members]);

  const handleSendChat = async () => {
    if(!chatInput.trim() || isChatLoading) return;
    const userMsg = chatInput.trim();
    setChatInput('');
    setChatMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsChatLoading(true);

    try {
      const res = await fetch('/api/chat-guide', {
         method: 'POST',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
            message: userMsg,
            notebookUrl: "https://notebooklm.google.com/notebook/2d4b0ec8-fdc4-4655-af25-b33a94d92d2b?authuser=1"
         })
      });
      const data = await res.json();
      if(data.success) {
         let answerText = data.answer || '';
         // Cleanup notebookLM extra reminders & footnotes
         const reminderIndex = answerText.indexOf("EXTREMELY IMPORTANT: Is that ALL you need to know?");
         if (reminderIndex !== -1) answerText = answerText.substring(0, reminderIndex);
         answerText = answerText.replace(/\n\s*\d+\s*\n/g, '\n'); 
         answerText = answerText.replace(/\n\s*([.,])\s*/g, '$1\n'); 
         answerText = answerText.replace(/^\s*\d+\s*$/gm, ''); 
         answerText = answerText.replace(/^\s*([.,])\s*$/gm, '');

         setChatMessages(prev => [...prev, { role: 'ai', text: answerText.trim() }]);
      } else {
         setChatMessages(prev => [...prev, { role: 'error', text: '오류가 발생했습니다: ' + (data.error || '알 수 없는 오류') }]);
      }
    } catch(err) {
      setChatMessages(prev => [...prev, { role: 'error', text: '네트워크 연결 오류: ' + err.message }]);
    } finally {
      setIsChatLoading(false);
    }
  };

  return (
    <PremiumPage>
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <SectionHeader title={t('onboarding_title')} subtitle={t('onboarding_sub')} />

        <div className="flex flex-wrap gap-4">
          {/* Main Tabs */}
          <div className="flex bg-slate-900 rounded-2xl p-1 gap-2 border border-slate-800">
            {['guide', 'growth', 'education', 'conference'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={cn(
                  "px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all",
                  activeTab === tab ? "bg-electric-blue text-white" : "text-slate-500 hover:text-slate-300"
                )}
              >
                {t(`tab_${tab}`)}
              </button>
            ))}
          </div>

          {/* Manager Toggle */}
          {role === USER_ROLES.MANAGER && (
            <div className="flex bg-slate-900 rounded-2xl p-1 gap-2 border border-slate-700 shadow-neon/10">
              <button
                onClick={() => setViewType('my')}
                className={cn(
                  "px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all flex items-center gap-2",
                  viewType === 'my' ? "bg-emerald-500 text-white" : "text-slate-500 hover:text-slate-300"
                )}
              >
                <User size={14} /> {t('tab_my')}
              </button>
              <button
                onClick={() => setViewType('dept')}
                className={cn(
                  "px-4 py-2 rounded-xl text-[10px] font-black uppercase transition-all flex items-center gap-2",
                  viewType === 'dept' ? "bg-purple-500 text-white" : "text-slate-500 hover:text-slate-300"
                )}
              >
                <Users size={14} /> {t('tab_dept')}
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        
        {/* GROWTH TAB (Previously under Guide Checklist) */}
        {activeTab === 'growth' && (
          <>
            {/* Personnel List (Visible in Dept mode) */}
            {viewType === 'dept' && (
              <div className="lg:col-span-1 space-y-4">
                <h4 className="text-[10px] font-black text-slate-500 tracking-widest pl-2 mb-4 uppercase">{t('dept_personnel')}</h4>
                {filteredMembers.map(m => (
                  <button
                    key={m.id}
                    onClick={() => setSelectedMember(m)}
                    className={cn(
                      "w-full text-left p-4 rounded-3xl border transition-all flex items-center gap-4",
                      selectedMember?.id === m.id ? "bg-electric-blue/10 border-electric-blue shadow-neon" : "bg-neutral-surface border-slate-800/50 hover:border-slate-700"
                    )}
                  >
                    <div className="w-10 h-10 rounded-2xl bg-slate-800 flex items-center justify-center overflow-hidden">
                      <User size={20} className="text-slate-400" />
                    </div>
                    <div>
                      <p className="text-xs font-black uppercase text-white leading-tight">{m.name}</p>
                      <p className="text-[8px] font-black uppercase text-slate-500 leading-tight">{m.dept}</p>
                    </div>
                  </button>
                ))}
              </div>
            )}

            {/* Content Area */}
            <div className={cn("space-y-6", viewType === 'dept' ? "lg:col-span-3" : "lg:col-span-4")}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card title={selectedMember ? `${selectedMember.name}'s Checklist` : t('personal_task')}>
                  <div className="space-y-4">
                    {Object.entries(selectedMember?.progress || members[0].progress).map(([key, done]) => (
                      <button
                        key={key}
                        onClick={() => (viewType === 'my' || (role === USER_ROLES.MANAGER && selectedMember)) && toggleCheck(selectedMember?.id || 1, key)}
                        className={cn(
                          "w-full flex items-center justify-between p-6 rounded-[2rem] border-2 transition-all",
                          done ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-500" : "bg-slate-900 border-slate-800 text-slate-500"
                        )}
                      >
                        <div className="flex items-center gap-4">
                          {done ? <CheckCircle2 size={24} /> : <div className="w-6 h-6 rounded-full border-2 border-current" />}
                          <span className="font-black uppercase tracking-widest text-sm">{key.replace('_', ' ')}</span>
                        </div>
                        <ChevronRight size={20} className="opacity-30" />
                      </button>
                    ))}
                  </div>
                </Card>

                <div className="space-y-6">
                  <Card title={t('perf_telemetry')}>
                    <div className="flex flex-col items-center justify-center h-full space-y-8">
                      <div className="relative w-48 h-48">
                        <svg className="w-full h-full -rotate-90">
                          <circle cx="96" cy="96" r="80" className="stroke-slate-800 fill-none" strokeWidth="12" />
                          <motion.circle
                            cx="96" cy="96" r="80"
                            stroke="currentColor" strokeWidth="12" strokeDasharray="502"
                            initial={{ strokeDashoffset: 502 }}
                            animate={{ strokeDashoffset: 502 - (502 * (selectedMember?.total || 75) / 100) }}
                            className="text-electric-blue fill-none"
                          />
                        </svg>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                          <span className="text-4xl font-black text-white uppercase">{selectedMember?.total || 75}%</span>
                          <span className="text-[8px] font-black text-slate-500 uppercase">{t('compliance_rate')}</span>
                        </div>
                      </div>
                      <div className="w-full grid grid-cols-2 gap-4">
                        <div className="bg-slate-900 p-4 rounded-3xl text-center">
                          <p className="text-[8px] font-black text-slate-500 uppercase">{t('growth_node')}</p>
                          <p className="text-sm font-black text-white">+2.5%</p>
                        </div>
                        <div className="bg-slate-900 p-4 rounded-3xl text-center">
                          <p className="text-[8px] font-black text-slate-500 uppercase">{t('team_rank')}</p>
                          <p className="text-sm font-black text-white">#04</p>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Card title={t('pathway_status')} className="h-64">
                    <div className="flex items-center justify-center h-full gap-4 text-slate-800 font-black uppercase text-xl text-center">
                      <TrendingUp className="text-electric-blue w-12 h-12" />
                      <span>{t('visualizing_nodes')}</span>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </>
        )}

        {/* GUIDE TAB (NotebookLM Chat) */}
        {activeTab === 'guide' && (
          <div className="lg:col-span-4 h-[550px] flex flex-col bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl relative">
             <div className="px-6 py-4 bg-slate-950/50 border-b border-slate-800 flex justify-between items-center z-10">
               <div>
                  <h3 className="text-lg font-black text-white flex items-center gap-2"><MessageSquare size={18} className="text-electric-blue"/> NOTEBOOK LM GUIDE</h3>
                  <p className="text-[10px] font-black uppercase text-slate-500">대용량 파이썬 스크립트 실행으로 답변에 10초 가량 소요될 수 있습니다.</p>
               </div>
             </div>
             
             <div className="flex-1 overflow-y-auto p-6 space-y-6 flex flex-col">
                {chatMessages.map((msg, i) => (
                   <div key={i} className={cn("max-w-[70%] rounded-2xl p-4 text-sm font-bold",
                      msg.role === 'user' ? "bg-electric-blue text-white self-end rounded-tr-sm" : 
                      msg.role === 'error' ? "bg-rose-500/20 text-rose-500 border border-rose-500/50 self-start" : 
                      "bg-slate-800 text-slate-200 self-start rounded-tl-sm shadow-md whitespace-pre-wrap"
                   )}>
                      {msg.text}
                   </div>
                ))}
                {isChatLoading && (
                   <div className="bg-slate-800 w-24 rounded-2xl p-4 self-start rounded-tl-sm flex items-center justify-center items-center gap-1.5 shadow-md">
                      <div className="w-2 h-2 rounded-full bg-electric-blue animate-bounce" />
                      <div className="w-2 h-2 rounded-full bg-electric-blue animate-bounce [animation-delay:-0.15s]" />
                      <div className="w-2 h-2 rounded-full bg-electric-blue animate-bounce [animation-delay:-0.3s]" />
                   </div>
                )}
             </div>

             <div className="p-4 bg-slate-950/50 border-t border-slate-800">
                <div className="flex gap-2">
                   <input
                     value={chatInput}
                     onChange={e => setChatInput(e.target.value)}
                     onKeyDown={e => e.key === 'Enter' && handleSendChat()}
                     placeholder="질문을 입력하세요..."
                     disabled={isChatLoading}
                     className="flex-1 p-4 bg-slate-900 border border-slate-700/50 rounded-2xl text-sm font-bold text-white outline-none focus:border-electric-blue transition-colors disabled:opacity-50"
                   />
                   <button 
                     onClick={handleSendChat}
                     disabled={isChatLoading || !chatInput.trim()}
                     className="px-6 bg-electric-blue text-white rounded-2xl font-black uppercase flex items-center justify-center hover:bg-blue-500 transition-colors shadow-neon disabled:opacity-50"
                   >
                     SEND
                   </button>
                </div>
             </div>
          </div>
        )}

      </div>
    </PremiumPage>
  );
};

// KNOWLEDGE BASE & EXAM
const KnowledgeBase = () => {
  const { t } = useTranslation();
  const [kbTab, setKbTab] = useState('vault');
  const [selectedDoc, setSelectedDoc] = useState(STANDARD_DOCS[0]);
  
  const [isGenerating, setIsGenerating] = useState(false);
  const [quizError, setQuizError] = useState(null);
  const [quiz, setQuiz] = useState(null);
  const [userAnswers, setUserAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);

  const generateQuiz = async () => {
    setIsGenerating(true);
    setQuizError(null);
    setQuiz(null);
    setQuizResult(null);
    setUserAnswers({});

    try {
      const res = await fetch('/api/generate-exam', {
         method: 'POST',
          headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({ notebookUrl: "https://notebooklm.google.com/notebook/d158823e-e7d7-4b96-97ef-173794f82ea5?authuser=1" })
      });
      const data = await res.json();
      if(data.success) {
         setQuiz(data.data);
      } else {
         setQuizError(data.error);
      }
    } catch(err) {
      setQuizError(err.message);
    } finally {
      setIsGenerating(false);
    }
  };

  const submitQuiz = () => {
    let score = 0;
    quiz.forEach((q, i) => {
      if (userAnswers[i] === q.answer) score++;
    });
    setQuizResult({ score, total: quiz.length });
  };

  return (
    <PremiumPage>
      <div className="flex items-center justify-between mb-8">
        <SectionHeader title={t('vault_title')} subtitle={t('vault_sub')} />
        <div className="flex bg-slate-900 rounded-2xl p-1 gap-2 border border-slate-800">
           {['vault', 'exam'].map(tab => (
             <button
                key={tab}
                onClick={() => setKbTab(tab)}
                className={cn(
                  "px-6 py-2 rounded-xl text-[10px] font-black uppercase transition-all",
                  kbTab === tab ? "bg-electric-blue text-white" : "text-slate-500 hover:text-slate-300"
                )}
             >
                {t(`tab_${tab}`)}
             </button>
           ))}
        </div>
      </div>

      {kbTab === 'vault' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-1 h-[600px] overflow-y-auto">
            <h4 className="text-[10px] font-black text-slate-500 tracking-widest pl-2 mb-4 uppercase">{t('doc_index')}</h4>
            <div className="space-y-4">
              {STANDARD_DOCS.map(doc => (
                <div key={doc.id} className="relative group">
                  <button
                    onClick={() => setSelectedDoc(doc)}
                    className={cn(
                      "w-full text-left p-6 rounded-3xl border transition-all flex items-start gap-4",
                      selectedDoc.id === doc.id ? "bg-electric-blue/10 border-electric-blue shadow-neon" : "bg-neutral-surface border-slate-800/50 hover:border-slate-700"
                    )}
                  >
                    <BookOpen size={20} className={selectedDoc.id === doc.id ? "text-electric-blue" : "text-slate-600"} />
                    <div className="flex-1">
                      <p className="text-[10px] font-black uppercase text-slate-500 mb-1">{doc.category}</p>
                      <p className="text-sm font-black uppercase text-white leading-tight">{doc.title}</p>
                    </div>
                  </button>
                </div>
              ))}
            </div>
          </Card>

          <Card className="lg:col-span-2 h-[600px] flex flex-col">
            <div className="flex items-center justify-between border-b border-slate-800 pb-6 mb-8">
              <div>
                <span className="bg-electric-blue/20 text-electric-blue px-3 py-1 rounded-lg text-[8px] font-black uppercase tracking-widest mb-2 inline-block">
                  {selectedDoc.category} {t('doc_type')}
                </span>
                <h2 className="text-3xl font-black uppercase text-white neon-text">{selectedDoc.title}</h2>
              </div>
              <Activity className="text-electric-blue animate-pulse-blue" size={32} />
            </div>
            <div className="flex-1 overflow-y-auto pr-4 font-bold text-slate-300 leading-relaxed uppercase whitespace-pre-line text-sm">
              {selectedDoc.content}
              {"\n\n"}{t('sys_analysis')}
            </div>
          </Card>
        </div>
      )}

      {kbTab === 'exam' && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
          <Card title={t('exam_node_title')} className="min-h-[600px]">
            {!quiz && !isGenerating && !quizError && (
               <div className="flex flex-col items-center justify-center h-full space-y-6 min-h-[400px]">
                  <Trophy size={64} className="text-slate-600 mb-4" />
                  <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">준비된 노트북 문서들을 바탕으로 시험 문제를 생성합니다.</p>
                  <button
                    onClick={generateQuiz}
                    className="bg-electric-blue text-white px-10 py-4 rounded-[2rem] font-black uppercase tracking-wider flex items-center gap-3 hover:bg-blue-500 shadow-neon transition-all"
                  >
                    <Zap size={24} /> 문제 생성하기
                  </button>
               </div>
            )}

            {isGenerating && (
               <div className="flex flex-col items-center justify-center h-full space-y-6 min-h-[400px]">
                 <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-electric-blue animate-bounce" />
                    <div className="w-3 h-3 rounded-full bg-electric-blue animate-bounce [animation-delay:-0.15s]" />
                    <div className="w-3 h-3 rounded-full bg-electric-blue animate-bounce [animation-delay:-0.3s]" />
                 </div>
                 <p className="text-electric-blue font-black uppercase tracking-[0.3em] animate-pulse">NOTEBOOK LM 인지 모델가동 중...</p>
                 <p className="text-slate-500 text-[10px] uppercase font-bold tracking-widest mt-4">데이터 추출 및 시험 문제 변환에 최대 15초가 소요됩니다.</p>
               </div>
            )}

            {quizError && (
               <div className="flex flex-col items-center justify-center h-full space-y-6 min-h-[400px]">
                  <p className="text-rose-500 font-bold uppercase tracking-widest text-sm">에러 발생: {quizError}</p>
                  <button onClick={generateQuiz} className="bg-slate-800 text-white px-8 py-3 rounded-2xl font-black uppercase hover:bg-slate-700">다시 시도</button>
               </div>
            )}

            {quizResult && quiz && (
              <div className="flex flex-col items-center justify-center h-full space-y-12">
                <div className="text-center">
                  <Trophy size={80} className="text-amber-500 mx-auto mb-6" />
                  <h3 className="text-6xl font-black uppercase text-white neon-text">
                    {t('score')}: {Math.round((quizResult.score / quizResult.total) * 100)}%
                  </h3>
                  <p className="text-slate-500 font-extrabold uppercase tracking-[0.5em] mt-4">
                    {t('intel_complete')} ({quizResult.score} / {quizResult.total})
                  </p>
                </div>
                
                <div className="w-full max-w-4xl space-y-6 text-left mt-8">
                   <h4 className="text-sm font-black text-emerald-500 uppercase tracking-widest border-b border-emerald-500/20 pb-4">상세 결과 분석</h4>
                   {quiz.map((q, idx) => {
                      const isCorrect = userAnswers[idx] === q.answer;
                      return (
                         <div key={idx} className={cn("p-6 rounded-3xl border-2 transition-all", isCorrect ? "bg-emerald-500/10 border-emerald-500/30" : "bg-rose-500/10 border-rose-500/30")}>
                            <p className="font-bold text-white mb-2">Q{idx+1}. {q.question}</p>
                            <p className="text-xs text-slate-400 mb-1">내 선택: {q.options[userAnswers[idx]]}</p>
                            {!isCorrect && <p className="text-xs text-emerald-500 font-bold">정답: {q.options[q.answer]}</p>}
                         </div>
                      );
                   })}
                </div>

                <button
                  onClick={() => setQuiz(null)}
                  className="px-12 py-4 bg-slate-900 border border-slate-700 text-white rounded-3xl font-black uppercase tracking-widest hover:bg-slate-800"
                >
                  {t('ret_vault')}
                </button>
              </div>
            )}
            
            {!quizResult && quiz && !isGenerating && (
              <div className="space-y-12">
                {quiz.map((q, i) => (
                  <div key={i} className="space-y-6">
                    <p className="text-lg font-black uppercase text-white leading-relaxed">Q{i + 1}: {q.question}</p>
                    <div className="grid grid-cols-1 gap-4">
                      {q.options.map((opt, optIdx) => (
                        <button
                          key={optIdx}
                          onClick={() => setUserAnswers(prev => ({ ...prev, [i]: optIdx }))}
                          className={cn(
                            "text-left p-6 rounded-[2.5rem] border-2 transition-all font-black tracking-widest text-sm",
                            userAnswers[i] === optIdx ? "bg-electric-blue text-white border-electric-blue shadow-neon" : "bg-slate-900 border-slate-800 text-slate-400 hover:border-slate-600 hover:text-slate-300"
                          )}
                        >
                          {String.fromCharCode(65 + optIdx)}. {opt}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="pt-8 flex justify-end">
                  <button
                    onClick={submitQuiz}
                    disabled={Object.keys(userAnswers).length < quiz.length}
                    className="bg-electric-blue disabled:bg-slate-800 disabled:shadow-none text-white px-16 py-4 rounded-[2.5rem] font-black uppercase tracking-widest hover:bg-blue-500 shadow-neon transition-all"
                  >
                    제출 및 자동 채점
                  </button>
                </div>
              </div>
            )}
          </Card>
        </motion.div>
      )}
    </PremiumPage>
  );
};

// APPS (Welfare, Voting)
const Apps = ({ user }) => {
  const { t } = useTranslation();
  const [appTab, setAppTab] = useState('welfare');
  const [voteCount, setVoteCount] = useState({ hotpot: 12, bbq: 28, pasta: 8 });
  const [hasVoted, setHasVoted] = useState(false);
  const [departure, setDeparture] = useState('');
  const [destination, setDestination] = useState('');
  const [path, setPath] = useState(null);

  const [restaurants, setRestaurants] = useState([]);
  const [newShopName, setNewShopName] = useState('');
  const [newShopDesc, setNewShopDesc] = useState('');
  const [newShopRating, setNewShopRating] = useState('5.0');
  const [selectedShop, setSelectedShop] = useState(null);

  useEffect(() => {
    fetch('/api/restaurants').then(res => res.json()).then(data => {
      if (data.success) setRestaurants(data.data);
    });
  }, []);

  const handleAddRestaurant = async () => {
    if (!newShopName) return;
    const ratingNum = parseFloat(newShopRating);
    const body = {
      name: newShopName,
      cat: 'NEW',
      rating: isNaN(ratingNum) ? 0.0 : ratingNum,
      desc: newShopDesc || '신규 등록된 식당입니다.',
      addedBy: user.id
    };
    const res = await fetch('/api/restaurants', { method: 'POST', body: JSON.stringify(body) });
    const data = await res.json();
    if (data.success) {
      setRestaurants(prev => [...prev, data.data]);
      setNewShopName('');
      setNewShopDesc('');
      setNewShopRating('5.0');
    }
  };

  const handleDeleteRestaurant = async (id) => {
    await fetch(`/api/restaurants/${id}`, { method: 'DELETE' });
    setRestaurants(prev => prev.filter(r => r.id !== id));
    setSelectedShop(null);
  };

  const handleCalculatePath = async () => {
    if (!departure || !destination) return;

    setPath(['경로 분석 중...', '노트북LM 데이터 추출 중...']);

    try {
      const res = await fetch('/api/path-finding', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ departure, destination })
      });
      const data = await res.json();
      if (data.success) {
        let answerText = data.answer || '';

        // Remove python script's appended follow-up reminder
        const reminderIndex = answerText.indexOf("EXTREMELY IMPORTANT: Is that ALL you need to know?");
        if (reminderIndex !== -1) {
          answerText = answerText.substring(0, reminderIndex);
        }

        // Clean up NotebookLM footnotes and orphaned punctuation
        answerText = answerText.replace(/\n\s*\d+\s*\n/g, '\n'); // remove lines that are just numbers between newlines
        answerText = answerText.replace(/\n\s*([.,])\s*/g, '$1\n'); // pull isolated periods and commas to the end of the previous line
        answerText = answerText.replace(/^\s*\d+\s*$/gm, ''); // removing any stray number-only lines
        answerText = answerText.replace(/^\s*([.,])\s*$/gm, ''); // removing any stray punctuation lines

        const lines = answerText.split('\n')
          .map(l => l.trim().replace(/\*\*/g, ''))
          .filter(Boolean);

        if (lines.length > 0) {
          setPath(lines);
        } else {
          setPath(['결과를 가져올 수 없습니다.']);
        }
      } else {
        setPath(['시스템 에러 발생: ' + data.error]);
      }
    } catch (err) {
      setPath(['네트워크 통신 에러: ' + err.message]);
    }
  };

  const handleVote = (key) => {
    if (hasVoted) return;
    setVoteCount(prev => ({ ...prev, [key]: prev[key] + 1 }));
    setHasVoted(true);
  };

  const totalVotes = Object.values(voteCount).reduce((a, b) => a + b, 0);

  return (
    <PremiumPage>
      <div className="flex items-center justify-between mb-8">
        <SectionHeader title={t('team_apps')} subtitle={t('apps_sub')} />
        <div className="flex bg-slate-900 rounded-2xl p-1 gap-2 border border-slate-800">
          {['welfare', 'voting'].map(tab => (
            <button
              key={tab}
              onClick={() => setAppTab(tab)}
              className={cn(
                "px-6 py-2 rounded-xl text-[10px] font-black uppercase transition-all",
                appTab === tab ? "bg-electric-blue text-white" : "text-slate-500 hover:text-slate-300"
              )}
            >
              {t(`tab_${tab}`)}
            </button>
          ))}
        </div>
      </div>

      {appTab === 'welfare' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start">
          <Card title={t('gourmet_portal')} className="space-y-6">
            <div className="space-y-4 max-h-[300px] overflow-y-auto pr-2">
              {restaurants.map((shop) => (
                <div key={shop.id} onClick={() => setSelectedShop(shop)} className="cursor-pointer bg-slate-900/50 p-4 rounded-3xl flex items-center gap-4 hover:scale-105 transition-transform">
                  <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500">
                    <Utensils size={24} />
                  </div>
                  <div className="flex-1">
                    <p className="text-[8px] font-black text-slate-500 uppercase">{shop.cat}</p>
                    <p className="text-xs font-black text-white uppercase">{shop.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-black text-amber-500 uppercase">★{shop.rating}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="pt-4 border-t border-slate-800 space-y-2">
              <input value={newShopName} onChange={e => setNewShopName(e.target.value)} placeholder="새 식당 이름..." className="w-full bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs font-black uppercase text-white outline-none focus:border-electric-blue transition-colors" />
              <div className="flex gap-2">
                <select value={newShopRating} onChange={e => setNewShopRating(e.target.value)} className="w-24 bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs font-black uppercase text-white outline-none focus:border-electric-blue transition-colors appearance-none text-center">
                  <option value="5.0">5.0</option>
                  <option value="4.5">4.5</option>
                  <option value="4.0">4.0</option>
                  <option value="3.5">3.5</option>
                  <option value="3.0">3.0</option>
                  <option value="2.5">2.5</option>
                  <option value="2.0">2.0</option>
                  <option value="1.5">1.5</option>
                  <option value="1.0">1.0</option>
                </select>
                <input value={newShopDesc} onChange={e => setNewShopDesc(e.target.value)} placeholder="간단한 설명..." className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-3 text-xs font-black uppercase text-white outline-none focus:border-electric-blue transition-colors" />
              </div>
              <button onClick={handleAddRestaurant} disabled={!newShopName} className="w-full py-3 bg-electric-blue disabled:bg-slate-800 hover:bg-blue-500 rounded-2xl font-black uppercase text-[10px] tracking-widest text-white transition-colors shadow-neon">+ 추가하기</button>
            </div>
          </Card>

          <Card title={t('wayfinding')} className="relative group lg:col-span-1">
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-1">
                  <p className="text-xs font-black text-slate-400 uppercase">{t('curr_node')}</p>
                  <input
                    type="text"
                    value={departure}
                    onChange={(e) => setDeparture(e.target.value)}
                    placeholder="출발지를 입력하세요."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-sm font-black uppercase text-white outline-none focus:border-electric-blue transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-black text-slate-400 uppercase">{t('target')}</p>
                  <input
                    type="text"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                    placeholder="목적지를 입력하세요."
                    className="w-full bg-slate-900 border border-slate-800 rounded-xl p-4 text-sm font-black uppercase text-white outline-none focus:border-electric-blue transition-colors"
                  />
                </div>
              </div>

              <button
                onClick={handleCalculatePath}
                disabled={!departure || !destination}
                className="w-full py-3 bg-electric-blue disabled:bg-slate-800 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-blue-500 transition-all shadow-neon"
              >
                {t('calc_path')}
              </button>

              {path && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-slate-950 rounded-2xl p-4 border border-slate-800 space-y-3"
                >
                  <div className="flex items-center gap-2 text-emerald-500 mb-2">
                    <MapPin size={14} />
                    <span className="text-[8px] font-black uppercase">PATH OPTIMIZED</span>
                  </div>
                  <div className="space-y-2">
                    {path.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex flex-col items-center pt-1">
                          <div className="w-1.5 h-1.5 rounded-full bg-electric-blue" />
                          {i < path.length - 1 && <div className="w-0.5 h-4 bg-slate-800 my-0.5" />}
                        </div>
                        <p className="text-xs font-black uppercase text-slate-300">{step}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </Card>


          <Card title={t('corp_codex')} className="space-y-4">
            {['Welfare Policy v2.4', 'Security Protocol 2026', 'Code of Conduct'].map((item, i) => (
              <button key={i} className="w-full flex items-center justify-between p-4 bg-slate-900/50 rounded-2xl hover:bg-slate-800 transition-colors">
                <div className="flex items-center gap-3">
                  <FileText className="text-slate-500" size={18} />
                  <span className="text-[10px] font-black uppercase text-white tracking-widest">{item}</span>
                </div>
                <ChevronRight size={16} className="text-slate-700" />
              </button>
            ))}
          </Card>
        </div>
      )}

      {appTab === 'voting' && (
        <Card title={t('dining_vote')}>
          <div className="space-y-12">
            <div className="text-center">
              <h3 className="text-2xl font-black uppercase text-white mb-2">{t('vote_q')}</h3>
              <p className="text-[10px] font-black uppercase text-slate-500 tracking-[0.3em]">{t('vote_active')}</p>
            </div>

            <div className="space-y-8">
              {Object.entries(voteCount).map(([key, count]) => {
                const percentage = Math.round((count / totalVotes) * 100);
                return (
                  <div key={key} className="space-y-3">
                    <div className="flex justify-between items-end">
                      <span className="text-lg font-black uppercase text-white">{key}</span>
                      <span className="text-sm font-black text-slate-400">{percentage}% ({count})</span>
                    </div>
                    <div className="relative h-4 bg-slate-900 rounded-full overflow-hidden border border-slate-800 cursor-pointer group" onClick={() => handleVote(key)}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${percentage}%` }}
                        className={cn(
                          "h-full rounded-full transition-all",
                          key === 'bbq' ? "bg-electric-blue" : "bg-slate-700 group-hover:bg-slate-600"
                        )}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            {hasVoted && (
              <p className="text-center text-[8px] font-black text-emerald-500 uppercase">{t('vote_reg')}</p>
            )}
          </div>
        </Card>
      )}

      <AnimatePresence>
        {selectedShop && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex items-center justify-center bg-neural-bg/80 backdrop-blur-sm p-4">
            <motion.div initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.9, y: 20 }} className="premium-card max-w-sm w-full p-8 space-y-6 relative border-y border-electric-blue">
              <button onClick={() => setSelectedShop(null)} className="absolute top-4 right-4 text-slate-500 hover:text-white"><X size={20} /></button>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-3xl bg-orange-500/10 flex items-center justify-center text-orange-500"><Utensils size={32} /></div>
                <div>
                  <h3 className="text-xl font-black text-white uppercase">{selectedShop.name}</h3>
                  <p className="text-[10px] font-black tracking-widest text-electric-blue uppercase">{selectedShop.cat} // ★{selectedShop.rating} // {selectedShop.addedBy ? `By ${selectedShop.addedBy}` : ''}</p>
                </div>
              </div>

              <p className="text-sm font-bold text-slate-400 leading-relaxed">{selectedShop.desc || '상세 정보가 없습니다.'}</p>

              <div className="space-y-4 pt-4 border-t border-slate-800">
                <h4 className="text-xs font-black text-white uppercase">Reviews</h4>
                <div className="max-h-32 overflow-y-auto space-y-2 pr-2">
                  {selectedShop.reviews?.map((rv, i) => (
                    <div key={i} className="bg-slate-900 p-3 rounded-xl border border-slate-800">
                      <p className="text-[10px] font-black text-slate-500 mb-1">{rv.user} - ★{rv.rating}</p>
                      <p className="text-xs text-slate-300 font-bold">{rv.comment}</p>
                    </div>
                  ))}
                  {(!selectedShop.reviews || selectedShop.reviews.length === 0) && <p className="text-xs text-slate-500">리뷰가 없습니다.</p>}
                </div>
                <div className="flex gap-2">
                  <select id="revRating" defaultValue="5.0" className="w-20 bg-slate-900 border border-slate-800 rounded-xl p-2 text-xs font-black text-white outline-none focus:border-electric-blue transition-colors appearance-none text-center">
                    <option value="5.0">5.0</option>
                    <option value="4.5">4.5</option>
                    <option value="4.0">4.0</option>
                    <option value="3.5">3.5</option>
                    <option value="3.0">3.0</option>
                    <option value="2.5">2.5</option>
                    <option value="2.0">2.0</option>
                    <option value="1.5">1.5</option>
                    <option value="1.0">1.0</option>
                  </select>
                  <input type="text" id="revComment" placeholder="리뷰 작성..." className="flex-1 bg-slate-900 border border-slate-800 rounded-xl p-2 text-xs font-black text-white outline-none focus:border-electric-blue transition-colors" />
                  <button onClick={async () => {
                    const rating = parseFloat(document.getElementById('revRating').value);
                    const comment = document.getElementById('revComment').value;
                    if (!comment) return;
                    const res = await fetch(`/api/restaurants/${selectedShop.id}/reviews`, { method: 'POST', body: JSON.stringify({ user: user.id, rating: isNaN(rating) ? 0 : rating, comment }) });
                    const data = await res.json();
                    if (data.success) {
                      setSelectedShop(data.data);
                      setRestaurants(prev => prev.map(r => r.id === data.data.id ? data.data : r));
                      document.getElementById('revComment').value = '';
                    }
                  }} className="bg-electric-blue px-4 rounded-xl text-xs font-black text-white hover:bg-blue-500 shadow-neon">등록</button>
                </div>
              </div>

              {selectedShop.addedBy === user.id && (
                <button onClick={() => handleDeleteRestaurant(selectedShop.id)} className="w-full mt-4 py-3 bg-slate-900 border border-rose-500/50 border-dashed text-rose-500 hover:bg-rose-500/10 rounded-2xl font-black uppercase tracking-widest transition-colors flex items-center justify-center gap-2"><Trash2 size={16} /> 이 식당 목록에서 삭제</button>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PremiumPage>
  );
};

// SETTINGS
const SettingsPage = () => {
  const { t } = useTranslation();
  return (
    <PremiumPage>
      <SectionHeader title={t('sys_config')} subtitle={t('config_sub')} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card title={t('prof_synth')}>
          <div className="flex items-center gap-8 mb-8">
            <div className="w-24 h-24 rounded-premium-lg bg-electric-blue/10 border-2 border-electric-blue flex items-center justify-center p-1">
              <div className="w-full h-full rounded-premium bg-slate-800 flex items-center justify-center text-slate-400">
                <User size={40} />
              </div>
            </div>
            <div>
              <h4 className="text-2xl font-black uppercase text-white">Kim Min-Jun</h4>
              <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Core Infrastructure Developer</p>
              <button className="mt-4 text-[8px] font-black text-electric-blue underline border-none outline-none">{t('edit_sig')}</button>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-slate-900 rounded-2xl border border-slate-800">
              <span className="text-xs font-black uppercase text-slate-300">{t('dark_mode')}</span>
              <div className="w-12 h-6 bg-electric-blue rounded-full relative flex items-center px-1">
                <div className="w-4 h-4 bg-white rounded-full ml-auto" />
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-slate-900 rounded-2xl border border-slate-800 opacity-50">
              <span className="text-xs font-black uppercase text-slate-300">{t('realtime_tele')}</span>
              <div className="w-12 h-6 bg-slate-800 rounded-full relative flex items-center px-1">
                <div className="w-4 h-4 bg-slate-600 rounded-full" />
              </div>
            </div>
          </div>
        </Card>
        <Card title={t('hw_interface')}>
          <div className="space-y-6">
            <div className="flex items-center gap-4 text-emerald-500">
              <CheckCircle2 size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">{t('gpu_acc')}</span>
            </div>
            <div className="flex items-center gap-4 text-emerald-500">
              <CheckCircle2 size={16} />
              <span className="text-[10px] font-black uppercase tracking-widest leading-none">{t('neural_core')}</span>
            </div>
            <p className="text-[10px] font-bold text-slate-600 leading-relaxed uppercase mt-8">
              {t('access_rest')}
            </p>
          </div>
        </Card>
      </div>
    </PremiumPage>
  );
};

// Language Toggle Component
const LanguageToggle = () => {
  const { lang, setLang } = useTranslation();
  return (
    <button
      onClick={() => setLang(lang === 'en' ? 'ko' : 'en')}
      className="flex items-center gap-2 p-3 bg-slate-900 rounded-2xl border border-slate-800 hover:border-electric-blue transition-colors group"
    >
      <Globe size={18} className="text-slate-500 group-hover:text-electric-blue" />
      <span className="text-[10px] font-black uppercase text-white tracking-widest w-6">
        {lang}
      </span>
    </button>
  );
};

// MAIN APP
const App = () => {
  const [lang, setLang] = useState('ko'); // Default to Korean
  const [user, setUser] = useState(null);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [isCoPilotOpen, setIsCoPilotOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const t = (key) => TRANSLATIONS[lang][key] || key;

  const [chatMessages, setChatMessages] = useState([
    { role: 'ai', text: t('ai_greet') }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  // Update AI greeting when language changes
  useEffect(() => {
    setChatMessages(prev => [
      { role: 'ai', text: t('ai_greet') },
      ...prev.slice(1)
    ]);
  }, [lang]);

  const handleLogin = (id) => {
    setUser({ id, role: id === 'admin' ? USER_ROLES.ADMIN : USER_ROLES.MANAGER });
  };

  const sendMessage = () => {
    if (!inputMessage.trim()) return;
    setChatMessages(prev => [...prev, { role: 'user', text: inputMessage.toUpperCase() }]);
    setInputMessage('');
    setTimeout(() => {
      setChatMessages(prev => [...prev, { role: 'ai', text: t('ai_proc') }]);
    }, 1000);
  };

  const NAV_ITEMS = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'dashboard' },
    { id: 'onboarding', icon: UserCheck, label: 'onboarding' },
    { id: 'knowledge', icon: BookOpen, label: 'vault' },
    { id: 'apps', icon: Layers, label: 'apps' },
    { id: 'settings', icon: Settings, label: 'system' },
  ];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      <div className="min-h-screen bg-neural-bg text-slate-200 flex">
        {!user ? (
          <LoginView onLogin={handleLogin} />
        ) : (
          <>
            {/* SIDEBAR */}
            <nav className="w-20 bg-slate-950 border-r border-slate-900 flex flex-col items-center py-8 z-40 fixed h-full shadow-2xl">
              <div className="w-12 h-12 bg-white rounded-premium-lg flex items-center justify-center mb-12 shadow-neon transition-transform hover:scale-110 cursor-pointer">
                <Zap className="text-neural-bg fill-current" size={24} />
              </div>

              <div className="flex-1 flex flex-col gap-6">
                {NAV_ITEMS.map(item => (
                  <button
                    key={item.id}
                    title={t(item.label)}
                    onClick={() => setActiveTab(item.id)}
                    className={cn("nav-item text-slate-600", activeTab === item.id && "nav-item-active")}
                  >
                    <item.icon size={24} />
                  </button>
                ))}
              </div>

              <div className="mt-auto space-y-6">
                <LanguageToggle />
                <div className="w-10 h-10 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center overflow-hidden hover:border-electric-blue transition-colors cursor-pointer">
                  <User size={20} className="text-slate-500" />
                </div>
                <button
                  onClick={() => setUser(null)}
                  title={t('logout')}
                  className="nav-item text-rose-500 hover:bg-rose-500/10 h-10 w-10"
                >
                  <LogOut size={20} />
                </button>
              </div>
            </nav>

            {/* MAIN LAYOUT */}
            <div className="flex-1 ml-20 flex flex-col h-screen overflow-hidden">
              {/* HEADER */}
              <header className="h-24 bg-neural-bg/50 backdrop-blur-xl border-b border-slate-900/50 flex items-center justify-between px-12 z-30">
                <div className="flex items-center gap-6 flex-1 max-w-xl">
                  <div className="relative flex-1">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" size={18} />
                    <input
                      type="text"
                      placeholder={t('probe_data')}
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full bg-slate-900/40 border border-slate-800/80 rounded-2xl py-3 pl-12 pr-4 text-xs font-black uppercase text-white focus:outline-none focus:border-electric-blue transition-all"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-6 pl-12">
                  <div className="flex flex-col items-end mr-4">
                    <p className="text-[10px] font-black uppercase text-white leading-none">{t('terminal_id')}</p>
                    <p className="text-[8px] font-black uppercase text-emerald-500 tracking-[0.2em] leading-none mt-1">{t('status_online')}</p>
                  </div>
                  <button className="p-3 bg-slate-900 rounded-2xl border border-slate-800 text-slate-500 hover:text-white transition-colors relative">
                    <Bell size={20} />
                    <div className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full border-2 border-neural-bg" />
                  </button>
                  <button className="p-3 bg-slate-900 rounded-2xl border border-slate-800 text-slate-500 hover:text-white transition-colors">
                    <Maximize size={20} />
                  </button>
                </div>
              </header>

              {/* PAGE CONTENT */}
              <main className="flex-1 overflow-y-auto p-12 scroll-smooth">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                  >
                    {activeTab === 'dashboard' && <Dashboard />}
                    {activeTab === 'onboarding' && <Onboarding role={user.role} />}
                    {activeTab === 'knowledge' && <KnowledgeBase />}
                    {activeTab === 'apps' && <Apps user={user} />}
                    {activeTab === 'settings' && <SettingsPage />}
                  </motion.div>
                </AnimatePresence>
              </main>
            </div>

            {/* NEURAL CO-PILOT */}
            <button
              onClick={() => setIsCoPilotOpen(!isCoPilotOpen)}
              className="fixed bottom-12 right-12 w-16 h-16 bg-gradient-to-tr from-electric-blue to-blue-400 rounded-premium-lg shadow-neon-strong flex items-center justify-center text-white z-50 hover:scale-110 active:scale-90 transition-all border-4 border-neural-bg"
            >
              <MessageSquare size={28} />
            </button>

            <AnimatePresence>
              {isCoPilotOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 50 }}
                  className="fixed bottom-32 right-12 w-96 h-[600px] premium-card p-0 flex flex-col z-50 overflow-hidden shadow-[0_0_50px_rgba(37,99,235,0.3)]"
                >
                  <div className="p-6 bg-slate-950 border-b border-slate-900 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-electric-blue rounded-xl flex items-center justify-center animate-pulse">
                        <Cpu size={18} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xs font-black uppercase text-white">{t('copilot_title')}</h3>
                        <p className="text-[8px] font-black uppercase text-slate-500">{t('copilot_sub')}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setIsCoPilotOpen(false)}
                      className="text-slate-600 hover:text-slate-400 p-1"
                    >
                      <X size={20} />
                    </button>
                  </div>

                  <div className="flex-1 overflow-y-auto p-6 space-y-6 bg-slate-950/50">
                    {chatMessages.map((msg, i) => (
                      <div key={i} className={cn("flex flex-col", msg.role === 'user' ? "items-end" : "items-start")}>
                        <div className={cn(
                          "max-w-[85%] p-4 text-[10px] font-black uppercase leading-relaxed",
                          msg.role === 'user' ? "bg-electric-blue text-white rounded-t-3xl rounded-bl-3xl" : "bg-slate-900 text-slate-300 rounded-t-3xl rounded-br-3xl border border-slate-800"
                        )}>
                          {msg.text}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-slate-950 border-t border-slate-900">
                    <div className="relative">
                      <input
                        autoFocus
                        type="text"
                        value={inputMessage}
                        onChange={(e) => setInputMessage(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
                        placeholder={t('init_cmd')}
                        className="w-full bg-slate-900 border border-slate-800 rounded-2xl py-4 pl-4 pr-12 text-[10px] font-black uppercase text-white focus:outline-none focus:border-electric-blue"
                      />
                      <button
                        onClick={sendMessage}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-electric-blue p-2 hover:bg-slate-800 rounded-xl transition-colors"
                      >
                        <Send size={18} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </>
        )}
      </div>
    </LanguageContext.Provider>
  );
};

export default App;
