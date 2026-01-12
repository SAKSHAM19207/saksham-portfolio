// LinkedIn Profile Data - Re-upload this file to refresh content
// Last updated from: 25_SAKSHAM_KHANDELWAL_LinkedIn.pdf

export const linkedinData = {
  personal: {
    name: 'SAKSHAM KHANDELWAL',
    initials: 'SK',
    headline: 'B.Tech CSE (Core) @ VIT-AP | Aspiring Software Developer',
    tagline: 'Java | Data Structures & Algorithms',
    location: 'Bengaluru, Karnataka, India',
    university: 'Vellore Institute of Technology, Amaravati (VIT-AP)',
    linkedinUrl: 'https://www.linkedin.com/in/saksham-khandelwal-80022b322/',
    githubUrl: 'https://github.com/SAKSHAM19207',
    openToWork: true,
    seeking: 'Software Engineer Intern and Associate Software Developer',
  },

  roles: [
    'Software Developer',
    'Problem Solver',
    'CSE Student',
    'Java Developer',
    'DSA Enthusiast',
  ],

  about: `I am a second-year B.Tech Computer Science and Engineering (Core) student at VIT-AP with a strong academic record (CGPA: 9.2). I am actively building a solid foundation in Data Structures and Algorithms using Java, with a passion for solving complex problems and building secure, scalable software solutions.`,

  education: [
    {
      institution: 'Vellore Institute of Technology, Amaravati (VIT-AP)',
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Computer Science and Engineering (Core)',
      grade: '9.2',
      duration: 'Oct 2024 - 2028',
      activities: 'Smart India Hackathon participant; Member, Microsoft Student Chapter (Hackathons & technical events)',
      skills: ['Object-Oriented Programming (OOP)', 'C', 'Java', 'Python', 'Data Structures', 'Algorithms'],
    },
    {
      institution: 'Delhi Public School - India',
      degree: '10th Grade',
      field: 'Secondary Education',
      grade: '88',
      duration: '',
      activities: '',
      skills: [],
    },
  ],

  experience: [
    {
      title: 'Student',
      company: 'Vellore Institute of Technology, Amaravati (VIT-AP)',
      type: 'Part-time',
      duration: 'Oct 2024 - Present · 1 yr 4 mos',
      location: 'Amaravati, Andhra Pradesh, India · On-site',
      description: 'Currently pursuing a Bachelor of Technology in Computer Science and Engineering (Core) at VIT-AP.',
      skills: ['Data Structures', 'Algorithms', 'Java', 'Python'],
    },
    {
      title: 'Software Project',
      company: 'Personal Project · Self-employed',
      type: 'Project',
      duration: 'Dec 2025 - Jan 2026 · 2 mos',
      location: '',
      description: 'Developed a secure file sharing system using Java as a personal project focused on encryption, authentication, and access control.',
      skills: ['Java', 'Object-Oriented Programming (OOP)', 'File Handling', 'Encryption'],
    },
    {
      title: 'Hackathon Participant',
      company: 'Smart India Hackathon · Internship',
      type: 'Internship',
      duration: 'Sep 2025 · 1 mo',
      location: 'India · On-site',
      description: 'Participated in Smart India Hackathon as part of a team, focusing on problem analysis and solution design.',
      skills: ['Data Structures', 'Algorithms', 'Problem Solving', 'Teamwork'],
    },
    {
      title: 'Microsoft Hackathon Participant',
      company: 'Microsoft Student Chapter VIT-AP · Internship',
      type: 'Internship',
      duration: 'Sep 2025 · 1 mo',
      location: 'Amaravati, Andhra Pradesh, India · On-site',
      description: 'Participated in a college-level hackathon organized by the Microsoft Student Chapter.',
      skills: ['Logical Approach', 'Teamwork', 'Problem Solving'],
    },
  ],

  projects: [
    {
      title: 'Secure File Sharing System',
      description: 'A Java-based secure file sharing system implementing authentication, AES encryption, and role-based access control. Focused on encryption, authentication, and secure access control mechanisms.',
      tech: ['Java', 'OOP', 'AES Encryption', 'File Handling'],
      github: 'https://github.com/SAKSHAM19207/secure-file-sharing-system',
      live: null,
      association: 'Vellore Institute of Technology, Amaravati (VIT-AP)',
    },
    {
      title: 'LeetCode Solutions',
      description: 'Java-based solutions to Data Structures and Algorithms problems solved on LeetCode, focusing on clean logic, optimized approaches, and problem-solving techniques.',
      tech: ['Java', 'DSA', 'Algorithms', 'Problem Solving'],
      github: 'https://github.com/SAKSHAM19207/LeetCode-Solutions',
      live: null,
      association: 'Personal',
    },
    {
      title: 'Fire Fighting Robot – Academic Project',
      description: 'Worked on logic flow design and decision-making for an autonomous fire-detection system. Focused on algorithm design and logical approach for robotic decision-making.',
      tech: ['Algorithm Design', 'Logic Design', 'Robotics', 'C++'],
      github: 'https://github.com/SAKSHAM19207/fire-fighting-robot-logic',
      live: null,
      association: 'Vellore Institute of Technology, Amaravati (VIT-AP)',
    },
  ],

  skills: {
    languages: ['Java', 'Python', 'C', 'C++', 'SQL'],
    frameworks: ['Object-Oriented Programming', 'Data Structures', 'Algorithms'],
    tools: ['Git', 'GitHub', 'File Handling', 'Database Management Systems'],
  },

  certifications: [
    {
      name: 'Java (Basic)',
      issuer: 'HackerRank',
      date: 'Issued Dec 2025',
      credentialId: 'BF9D596DC424',
    },
    {
      name: 'Python (Basic)',
      issuer: 'HackerRank',
      date: 'Issued Dec 2025',
      credentialId: '6A6804F40D9C',
    },
  ],

  courses: [
    'Data Structures and Algorithms',
    'Database Management Systems',
  ],

  achievements: [
    {
      title: 'Smart India Hackathon Participant',
      description: 'Participated in national-level hackathon focusing on problem analysis and solution design',
      year: '2025',
    },
    {
      title: 'Microsoft Student Chapter Hackathon',
      description: 'Participated in college-level hackathon organized by Microsoft Student Chapter VIT-AP',
      year: '2025',
    },
    {
      title: 'HackerRank Certified',
      description: 'Earned Java (Basic) and Python (Basic) certifications',
      year: '2025',
    },
    {
      title: 'Academic Excellence',
      description: 'Maintaining CGPA of 9.2 at VIT-AP',
      year: '2024-Present',
    },
  ],
};

export type LinkedInData = typeof linkedinData;
