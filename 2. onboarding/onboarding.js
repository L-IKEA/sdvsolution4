// Onboarding Portal Data & Logic
const ONBOARDING_TABS = [
    { id: 'guide', label: '가이드', icon: 'fas fa-book-reader' },
    { id: 'edu', label: '교육(성장)', icon: 'fas fa-graduation-cap' },
    { id: 'conf', label: '컨퍼런스(성장)', icon: 'fas fa-microphone' }
];

const onboardingTasks = [
    { id: 1, title: '사내 보안 서약서 제출', desc: '인트라넷을 통한 전자 서명 완료', category: 'General' },
    { id: 2, title: '개발 환경 셋업', desc: 'Git, VS Code, Node.js v14+ 설치 및 설정', category: 'Tech' },
    { id: 3, title: 'SDV 기초 지식 교육 이수', desc: '지식베이스 내 "SDV 개념 정리" 문서 읽기', category: 'Domain' },
    { id: 4, title: '사내 메신저 & 슬랙 연동', desc: '팀 채널 참여 및 프로필 설정', category: 'General' },
    { id: 5, title: '첫 번째 코드 리뷰 참여', desc: '동료의 Pull Request에 의견 달기', category: 'Tech' }
];

let currentOnboardingTab = 'guide';

document.addEventListener('DOMContentLoaded', () => {
    // Note: Initial triggering is handled by layout.js navigation
    // We listen for view changes to re-render if needed
});

// Main Portal Entry (Called when navigating to view-onboarding)
function initOnboardingPortal() {
    renderPortalLayout();
    renderActivePortalTab();
}

function renderPortalLayout() {
    const container = document.getElementById('onboardingPortalContent');
    if (!container) return;

    const session = JSON.parse(localStorage.getItem('sdv_user_session'));

    container.innerHTML = `
        <div class="portal-header">
            <div class="portal-title">
                <h2>온보딩</h2>
                <p>성장 및 통합 포털</p>
            </div>
            
            <div class="sub-nav-tabs">
                <!-- Status Group (Now on the Left) -->
                <div class="tab-group" style="display: flex; gap: 4px;">
                    <button class="tab-btn tab-btn-status ${currentOnboardingTab === 'my-status' ? 'active' : ''}" 
                            onclick="switchPortalTab('my-status')">
                        <i class="fas fa-user-circle"></i> 나의 온보딩 현황
                    </button>
                    ${session.role === 'Admin' ? `
                        <button class="tab-btn tab-btn-status ${currentOnboardingTab === 'team-status' ? 'active' : ''}" 
                                onclick="switchPortalTab('team-status')">
                            <i class="fas fa-users"></i> 부서 현황
                        </button>
                    ` : ''}
                </div>
                
                <div class="tab-divider"></div>
                
                <!-- Category Group -->
                <div class="tab-group" style="display: flex; gap: 4px; align-items: center;">
                    <button class="tab-btn ${currentOnboardingTab === 'guide' ? 'active' : ''}" 
                            onclick="switchPortalTab('guide')">
                        <i class="fas fa-book-reader"></i> 가이드
                    </button>
                    
                    <div style="width: 1px; height: 16px; background: #dee2e6; margin: 0 4px;"></div>
                    
                    <div class="growth-category-block" style="display: flex; align-items: center; gap: 4px; background: rgba(0,0,0,0.03); padding: 2px 6px; border-radius: 10px;">
                        <span style="font-size: 0.7rem; font-weight: 800; color: #64748b; margin-right: 4px; text-transform: uppercase; letter-spacing: 0.5px;">성장</span>
                        <button class="tab-btn ${currentOnboardingTab === 'edu' ? 'active' : ''}" 
                                onclick="switchPortalTab('edu')">
                            <i class="fas fa-graduation-cap"></i> 교육
                        </button>
                        <button class="tab-btn ${currentOnboardingTab === 'conf' ? 'active' : ''}" 
                                onclick="switchPortalTab('conf')">
                            <i class="fas fa-microphone"></i> 컨퍼런스
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div id="portalActiveContent" class="onboarding-content-container">
            <!-- Dynamic Content -->
        </div>
    `;
}

function switchPortalTab(tabId) {
    currentOnboardingTab = tabId;
    renderPortalLayout(); // Re-render header to update active state
    renderActivePortalTab();
}

function renderActivePortalTab() {
    const content = document.getElementById('portalActiveContent');
    if (!content) return;

    switch (currentOnboardingTab) {
        case 'guide':
            renderGuide(content);
            break;
        case 'growth':
            content.innerHTML = '<div style="padding: 50px; text-align: center; color: var(--text-muted);"><h3>성장 로드맵 서비스 준비 중입니다.</h3></div>';
            break;
        case 'edu':
            content.innerHTML = '<div style="padding: 50px; text-align: center; color: var(--text-muted);"><h3>성장 - 교육 커리큘럼 서비스 준비 중입니다.</h3></div>';
            break;
        case 'conf':
            content.innerHTML = '<div style="padding: 50px; text-align: center; color: var(--text-muted);"><h3>성장 - 기술 컨퍼런스 자료 준비 중입니다.</h3></div>';
            break;
        case 'my-status':
            renderMyStatus(content);
            break;
        case 'team-status':
            renderTeamStatus(content);
            break;
    }
}

function renderGuide(content) {
    content.innerHTML = `
        <div class="guide-container">
            <div class="guide-header">
                <i class="fas fa-comments"></i>
                <div style="flex: 1;">
                    <h4 style="font-weight: 800; letter-spacing: 0.5px;">NOTEBOOK LM GUIDE</h4>
                    <p style="font-size: 0.75rem; opacity: 0.6; margin-top: 2px;">온보딩 가이드 챗봇입니다. 무엇이든 물어보세요.</p>
                </div>
                <div style="display: flex; gap: 8px;">
                    <a href="https://notebooklm.google.com/notebook/d158823e-e7d7-4b96-97ef-173794f82ea5" 
                       target="_blank" 
                       class="btn-detail" 
                       style="background: var(--primary-color); color: white; border: none; padding: 6px 14px; font-size: 0.75rem; text-decoration: none; border-radius: 4px; display: flex; align-items: center; gap: 6px;">
                        <i class="fas fa-external-link-alt"></i> NotebookLM 열기
                    </a>
                    <button class="btn-detail" onclick="clearChat()" style="background: rgba(255,255,255,0.1); color: white; border: none; padding: 6px 12px; font-size: 0.75rem;">대화 초기화</button>
                </div>
            </div>
            
            <div class="chat-messages" id="chatMessages">
                <div class="message bot">
                    안녕하세요! SDV 시스템 부문 온보딩 가이드 챗봇입니다. 
                    시스템 설정, 교육 과정, 사내 문화 등 궁금한 점을 입력해 주세요.
                </div>
            </div>

            <div class="typing-indicator" id="typingIndicator">
                <div class="typing-dots">
                    <span></span><span></span><span></span>
                </div>
                &nbsp;NotebookLM이 생각 중입니다...
            </div>

            <div class="chat-input-area">
                <textarea class="chat-input" id="chatInput" placeholder="질문을 입력하세요..." onkeydown="if(event.key === 'Enter' && !event.shiftKey) { event.preventDefault(); sendMessage(); }"></textarea>
                <button class="btn-send" onclick="sendMessage()">
                    <i class="fas fa-paper-plane"></i>
                </button>
            </div>
        </div>
    `;
    
    // Auto-scroll to bottom
    const chatContainer = document.getElementById('chatMessages');
    chatContainer.scrollTop = chatContainer.scrollHeight;
}

async function sendMessage() {
    const input = document.getElementById('chatInput');
    const container = document.getElementById('chatMessages');
    const indicator = document.getElementById('typingIndicator');
    const text = input.value.trim();

    if (!text) return;

    // Add User Message
    const userMsg = document.createElement('div');
    userMsg.className = 'message user';
    userMsg.textContent = text;
    container.appendChild(userMsg);
    
    input.value = '';
    container.scrollTop = container.scrollHeight;

    // Show Typing Indicator
    indicator.style.display = 'flex';
    container.scrollTop = container.scrollHeight;

    // Simulate Bot Response (In a real app, this would call an API that uses the NotebookLM MCP)
    setTimeout(() => {
        indicator.style.display = 'none';
        
        const botMsg = document.createElement('div');
        botMsg.className = 'message bot';
        
        // Custom Mock Responses based on keywords
        let response = "죄송합니다. 현재 데모 모드에서는 실시간 NotebookLM 연결이 제한되어 있습니다. [새 창에서 열기] 버튼을 통해 원본 가이드를 이용하시거나, 에이전트에게 직접 문의해 주세요.";
        
        if (text.includes('보안')) {
            response = "사내 보안 서약서는 인트라넷 '나의 업무 -> 인사관리 -> 보안' 메뉴에서 전자 서명이 가능합니다. 입사 후 3일 이내에 완료해 주시기 바랍니다.";
        } else if (text.includes('환경') || text.includes('설정')) {
            response = "개발 환경 설정은 가이드 문서의 'Tech Stack' 섹션을 참고하세요. 주요 도구로는 Git, VS Code, Node.js(v18 LTS)가 필요합니다.";
        } else if (text.includes('교육')) {
            response = "교육 과정은 상단의 '교육(성장)' 탭에서 상세 커리큘럼을 확인하실 수 있습니다. 기초 공통 교육은 매주 월요일에 개설됩니다.";
        }

        botMsg.textContent = response;
        container.appendChild(botMsg);
        container.scrollTop = container.scrollHeight;
    }, 1500);
}

function clearChat() {
    const container = document.getElementById('chatMessages');
    container.innerHTML = `
        <div class="message bot">
            안녕하세요! SDV 시스템 부문 온보딩 가이드 챗봇입니다. 
            시스템 설정, 교육 과정, 사내 문화 등 궁금한 점을 입력해 주세요.
        </div>
    `;
}

function renderMyStatus(content) {
    const session = JSON.parse(localStorage.getItem('sdv_user_session'));
    const completedTasks = JSON.parse(localStorage.getItem('sdv_completed_tasks_' + session.id) || '[]');
    const progress = Math.round((completedTasks.length / onboardingTasks.length) * 100);

    content.innerHTML = `
        <div class="progress-card">
            <div class="progress-header">
                <h4>나의 진행률 (${session.name} ${session.rank})</h4>
                <span class="progress-percent">${progress}%</span>
            </div>
            <div class="progress-bar-container">
                <div class="progress-bar-fill" style="width: ${progress}%"></div>
            </div>
        </div>

        <div class="task-list-card">
            <div style="padding: 16px 24px; background: #fbfbfc; border-bottom: 1px solid var(--border-color); font-weight: 700;">
                체크리스트 (${completedTasks.length}/${onboardingTasks.length})
            </div>
            <div id="taskList">
                ${onboardingTasks.map(task => {
                    const isDone = completedTasks.includes(task.id);
                    return `
                        <div class="task-item">
                            <input type="checkbox" class="task-checkbox" data-id="${task.id}" ${isDone ? 'checked' : ''} onchange="handleTaskToggle(${task.id}, this.checked)">
                            <div class="task-info">
                                <div class="task-title" style="${isDone ? 'text-decoration: line-through; color: var(--text-muted);' : ''}">${task.title}</div>
                                <div class="task-desc">${task.desc}</div>
                            </div>
                            <span class="task-badge ${isDone ? 'badge-done' : 'badge-pending'}">${isDone ? 'Done' : 'Pending'}</span>
                        </div>
                    `;
                }).join('')}
            </div>
        </div>
    `;
}

function handleTaskToggle(taskId, isChecked) {
    const session = JSON.parse(localStorage.getItem('sdv_user_session'));
    let completed = JSON.parse(localStorage.getItem('sdv_completed_tasks_' + session.id) || '[]');
    
    if (isChecked) {
        if (!completed.includes(taskId)) completed.push(taskId);
    } else {
        completed = completed.filter(id => id !== taskId);
    }
    
    localStorage.setItem('sdv_completed_tasks_' + session.id, JSON.stringify(completed));
    renderActivePortalTab();
}

function renderTeamStatus(content) {
    const session = JSON.parse(localStorage.getItem('sdv_user_session'));
    const myTeamMembers = USER_DB.filter(u => u.team === session.team && u.id !== session.id);

    content.innerHTML = `
        <div class="team-table-card">
            <table class="team-table">
                <thead>
                    <tr>
                        <th>팀원명 / 직급</th>
                        <th>진행률</th>
                        <th>상태</th>
                        <th>액션</th>
                    </tr>
                </thead>
                <tbody>
                    ${myTeamMembers.length > 0 ? myTeamMembers.map(member => {
                        const completedTasks = JSON.parse(localStorage.getItem('sdv_completed_tasks_' + member.id) || '[]');
                        const progress = Math.round((completedTasks.length / onboardingTasks.length) * 100);
                        let statusText = progress === 100 ? 'Completed' : (progress > 0 ? 'On Track' : 'Pending');
                        let badgeClass = progress === 100 ? 'badge-user' : (progress > 0 ? 'badge-pending' : 'badge-admin');

                        return `
                        <tr>
                            <td>
                                <div class="member-name">
                                    <div class="user-avatar" style="width: 28px; height: 28px; font-size: 0.7rem;">${member.name[0]}</div>
                                    <div>
                                        <div>${member.name}</div>
                                        <div style="font-size: 0.75rem; color: var(--text-muted);">${member.rank}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div class="mini-progress"><div class="mini-fill" style="width: ${progress}%"></div></div>
                                <span style="font-size: 0.85rem; font-weight: 600;">${progress}%</span>
                            </td>
                            <td><span class="badge ${badgeClass}" style="padding: 4px 8px; font-size: 0.7rem;">${statusText}</span></td>
                            <td><button class="btn-detail">리포트 보기</button></td>
                        </tr>
                    `;}).join('') : '<tr><td colspan="4" style="text-align: center; padding: 40px;">관리할 팀원이 없습니다.</td></tr>'}
                </tbody>
            </table>
        </div>
    `;
}
