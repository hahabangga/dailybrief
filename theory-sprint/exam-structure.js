(function () {
  const structure = [
    {
      order: 1,
      title: '국방사업 수행체계 및 착수관리',
      courses: [
        { id: 'ppbees', subject: '국방기획관리체계' },
        { id: 'requirements', subject: '소요기획체계' },
        { id: 'prestudy', subject: '선행연구' },
        { id: 'tlcsm', subject: '총수명주기관리' }
      ]
    },
    {
      order: 2,
      title: '국방사업특수관리 영역-Ⅰ',
      courses: [
        { id: 'interoperability', subject: '상호운용성 및 합동성' },
        { id: 'ips', subject: '전력화지원요소관리' },
        { id: 'localization', subject: '부품국산화관리' },
        { id: 'analysis', subject: '분석평가제도 및 규정' }
      ]
    },
    {
      order: 3,
      title: '국방사업특수관리 영역-Ⅱ',
      courses: [
        { id: 'defense-rnd', subject: '국방연구개발관리' },
        { id: 'test-evaluation', subject: '시험평가관리' },
        { id: 'purchase', subject: '구매사업관리' },
        { id: 'defense-cost', subject: '방산원가관리' },
        { id: 'defense-contract', subject: '방산계약관리' }
      ]
    },
    {
      order: 4,
      title: '프로젝트관리',
      courses: [
        { id: 'pm', subject: '프로젝트 관리체계' },
        { id: 'se', subject: '시스템엔지니어링' },
        { id: 'evms', subject: 'EVMS/CAIV' },
        { id: 'ms', subject: '국방 M&S(Modeling And Simulation)' }
      ]
    }
  ];

  const metadata = new Map();
  for (const major of structure) {
    major.courses.forEach((course, index) => metadata.set(course.id, {
      major: major.title,
      majorOrder: major.order,
      subjectOrder: index + 1,
      subject: course.subject
    }));
  }

  for (const course of window.THEORY_COURSES || []) {
    const official = metadata.get(course.id);
    if (official) Object.assign(course, official);
  }

  window.OFFICIAL_EXAM_STRUCTURE = structure;
})();
