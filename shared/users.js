const USER_DB = [
    // 관리자 계정
    { team: 'SDV솔루션1팀', name: '정고성', id: 'ksjung', rank: '수석', role: 'Admin' },
    { team: 'SDV솔루션2팀', name: '홍수범', id: 'sbhong', rank: '수석', role: 'Admin' },
    { team: 'SDV솔루션3팀', name: '김양수', id: 'yskim', rank: '책임', role: 'Admin' },
    { team: 'SDV솔루션4팀', name: '송현지', id: 'hjsong', rank: '선임', role: 'Admin' },

    // SDV솔루션1팀 팀원
    { team: 'SDV솔루션1팀', name: '권영동', id: 'ydkwon', rank: '책임', role: 'User' },
    { team: 'SDV솔루션1팀', name: '김재강', id: 'jkkim', rank: '선임', role: 'User' },
    { team: 'SDV솔루션1팀', name: '이혜윤', id: 'hylee1', rank: '전임', role: 'User' },

    // SDV솔루션2팀 팀원
    { team: 'SDV솔루션2팀', name: '시종진', id: 'jjsi', rank: '수석', role: 'User' },
    { team: 'SDV솔루션2팀', name: '김서진', id: 'sjkim', rank: '책임', role: 'User' },
    { team: 'SDV솔루션2팀', name: '박민하', id: 'mhpark', rank: '전임', role: 'User' },

    // SDV솔루션3팀 팀원
    { team: 'SDV솔루션3팀', name: '권용균', id: 'ygkwon', rank: '선임', role: 'User' },
    { team: 'SDV솔루션3팀', name: '유효정', id: 'hjyoo1', rank: '전임', role: 'User' },
    { team: 'SDV솔루션3팀', name: '임병은', id: 'belim', rank: '전임', role: 'User' },

    // SDV솔루션4팀 팀원
    { team: 'SDV솔루션4팀', name: '최서희', id: 'shchoi', rank: '선임', role: 'User' },
    { team: 'SDV솔루션4팀', name: '김연희', id: 'yhkim2', rank: '전임', role: 'User' },
    { team: 'SDV솔루션4팀', name: '김지환', id: 'jhkim7', rank: '전임', role: 'User' },
    { team: 'SDV솔루션4팀', name: '김지송', id: 'jskim2', rank: '인턴', role: 'User' }
];

// Mock Progress Generator (for demonstration)
function getMockProgress(id) {
    const hash = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    return hash % 100;
}

function getMockStatus(progress) {
    if (progress === 100) return 'Completed';
    if (progress < 30) return 'Stuck';
    return 'On Track';
}
