import React from 'react';

export const services = [
  { 
    title: "Digital Transformation", 
    description: "Modernize your operations and unlock new value with our comprehensive digital transformation strategies.",
    icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
  },
  { 
    title: "Intelligent Automation", 
    description: "Boost efficiency and reduce costs by automating complex business processes with AI and RPA.",
    icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6a2 2 0 100-4 2 2 0 000 4zm0 14a2 2 0 100-4 2 2 0 000 4zm6-8a2 2 0 100-4 2 2 0 000 4zm-12 0a2 2 0 100-4 2 2 0 000 4z" /></svg>
  },
  { 
    title: "CRM Solutions", 
    description: "Enhance customer relationships and drive sales growth with tailored CRM implementations.",
    icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  },
  { 
    title: "Managed Services", 
    description: "Reliable, 24/7 management of your IT infrastructure, so you can focus on your core business.",
    icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 5l7 7-7 7" /></svg>
  },
  { 
    title: "Quality Engineering & Assurance", 
    description: "Ensure flawless performance and user experience with our rigorous testing and QA services.",
    icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  },
  { 
    title: "IT Staffing", 
    description: "Access top-tier IT talent and build a flexible, high-performing team to meet your project demands.",
    icon: <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-1.78-4.125a6 6 0 00-6.44-1.268" /></svg>
  },
];

export const technologies = [
  "Pega", "Java Full Stack", "Prompt Engineering", "Tosca", "SAP", "Workday", 
  "Selenium (Java)", "DevOps", "Big Data", "Camunda", "Azure Cloud Services", "Mulesoft"
];

export const projects = [
  { id: 1, title: "Enterprise CRM Overhaul", description: "A complete CRM transformation for a leading retail giant.", category: "CRM", imageUrl: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 2, title: "RPA for Financial Services", description: "Automated back-office operations, increasing efficiency by 40%.", category: "Automation", imageUrl: "https://images.unsplash.com/photo-1614028674026-a0a273c032c0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 3, title: "Cloud Migration Strategy", description: "Seamlessly migrated legacy systems to a modern cloud infrastructure.", category: "Transformation", imageUrl: "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 4, title: "AI-Powered Logistics Platform", description: "Developed a predictive analytics platform for a global logistics company.", category: "Automation", imageUrl: "https://images.unsplash.com/photo-1678453147539-74b679194a73?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 5, title: "Salesforce Implementation", description: "Custom Salesforce solution to streamline sales and service cycles.", category: "CRM", imageUrl: "https://images.unsplash.com/photo-1600880292210-85938a039796?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: 6, title: "Digital Banking App", description: "A modern, secure mobile banking application from scratch.", category: "Transformation", imageUrl: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

export const team = [
  { name: "Eleanor Vance", role: "CEO & Founder", imageUrl: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Marcus Thorne", role: "Chief Technology Officer", imageUrl: "https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Isabella Chen", role: "Head of Digital Transformation", imageUrl: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { name: "Javier Rodriguez", role: "VP of Client Solutions", imageUrl: "https://images.unsplash.com/photo-1590086782957-93c06ef21604?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" }
];

export const testimonials = [
    { quote: "Nimbus Quest transformed our operations. Their expertise in automation is unparalleled.", author: "Michael Brown", company: "CEO, Innovate Corp" },
    { quote: "The best IT consulting firm we've ever worked with. Truly a partner in our success.", author: "Sarah Davis", company: "COO, Global Logistics" },
    { quote: "Their team delivered our project on time and exceeded all our expectations.", author: "David Wilson", company: "Director of IT, Future Enterprises" }
];

export const achievements = [
    { label: "Successful Projects", value: 50, suffix: "+" },
    { label: "Client Satisfaction", value: 98, suffix: "%" },
    { label: "Global Partners", value: 10, suffix: "+" }
];

// SVG Icons
export const LogoIcon = ({ textColor = "#1e293b" }: { textColor?: string }) => (
    <svg width="175" height="58" viewBox="0 0 175 58" xmlns="http://www.w3.org/2000/svg" className="h-10 w-auto">
        <defs>
            <linearGradient id="logoGradient" x1="0%" y1="50%" x2="100%" y2="50%">
                <stop offset="0%" stopColor="#2dd4bf" />
                <stop offset="100%" stopColor="#004AAD" />
            </linearGradient>
        </defs>
        <path fill="url(#logoGradient)" d="M57.97,36.26c-1.89-1.8-3.21-4.04-3.9-6.52l-0.12-0.42c-0.18-0.62-0.34-1.25-0.48-1.89l-0.08-0.33 c-0.14-0.56-0.26-1.12-0.36-1.69c-0.03-0.17-0.06-0.34-0.08-0.51c-0.09-0.52-0.15-1.04-0.19-1.57 c-0.01-0.16-0.02-0.32-0.03-0.48c-0.04-0.5-0.06-1-0.06-1.51c0-0.15,0-0.3,0.01-0.45c0-0.48,0.02-0.95,0.05-1.42 c0.01-0.16,0.02-0.32,0.03-0.48c0.09-0.53,0.2-1.05,0.34-1.57c0.04-0.17,0.09-0.33,0.14-0.5 c0.16-0.54,0.35-1.08,0.56-1.61c0.07-0.18,0.14-0.35,0.22-0.53c0.23-0.54,0.48-1.07,0.76-1.58c0.09-0.17,0.19-0.33,0.28-0.5 c0.3-0.53,0.62-1.04,0.96-1.54c1.11-1.6,2.44-2.98,3.95-4.1c2.14-1.58,4.61-2.58,7.21-2.92c1.77-0.23,3.57-0.12,5.32,0.33 c2.11,0.55,4.09,1.5,5.85,2.78c2.17,1.57,3.98,3.61,5.33,5.98c0.43,0.76,0.82,1.55,1.15,2.37c0.11,0.27,0.22,0.54,0.32,0.82 c0.3,0.8,0.56,1.62,0.77,2.46c0.07,0.27,0.14,0.55,0.2,0.83c0.19,0.83,0.33,1.68,0.42,2.54c0.03,0.28,0.06,0.56,0.08,0.84 c0.06,0.86,0.09,1.73,0.09,2.6c0,0.28-0.01,0.56-0.02,0.84c-0.02,0.89-0.08,1.77-0.18,2.65c-0.03,0.28-0.07,0.55-0.11,0.83 c-0.13,0.89-0.3,1.78-0.52,2.65c-0.07,0.28-0.15,0.55-0.23,0.82c-0.24,0.87-0.53,1.72-0.87,2.56c-0.11,0.27-0.23,0.53-0.35,0.8 c-0.36,0.85-0.78,1.68-1.25,2.48l10.36,9.67c1.32,1.23,1.38,3.28,0.15,4.6c-1.23,1.32-3.28,1.38-4.6,0.15L74.8,47.03 c-2.92,1.96-6.24,3.1-9.7,3.1c-3.79,0-7.42-1.37-10.4-3.88c-0.11-0.09-0.21-0.19-0.32-0.28L57.97,36.26z M76.24,25.13 c-0.26-1.57-0.74-3.08-1.42-4.48c-1.2-2.48-3.02-4.49-5.28-5.87c-1.63-1.01-3.46-1.57-5.32-1.6c-2.31-0.04-4.59,0.7-6.52,2.1 c-2.07,1.48-3.66,3.55-4.59,5.97c-0.51,1.31-0.83,2.7-0.94,4.12c-0.12,1.46-0.03,2.94,0.26,4.37c0.2,0.98,0.52,1.93,0.94,2.83 c0.79,1.68,1.9,3.19,3.26,4.44c1.11,1.02,2.41,1.83,3.85,2.39c1.65,0.64,3.4,0.94,5.16,0.86c2.2-0.1,4.32-0.82,6.11-2.06 c2.04-1.42,3.67-3.4,4.72-5.74c0.59-1.32,0.92-2.75,0.97-4.22C76.32,27.05,76.31,26.09,76.24,25.13z"/>
        <path fill="url(#logoGradient)" d="M41.76,36.43c-1.03-0.02-2.05-0.1-3.06-0.23c-1.89-0.24-3.76-0.62-5.59-1.12c-2.28-0.63-4.47-1.55-6.52-2.73 c-2.1-1.2-3.98-2.72-5.61-4.48c-1.8-1.94-3.2-4.2-4.1-6.66c-0.45-1.23-0.78-2.5-0.97-3.79c-0.19-1.25-0.24-2.52-0.15-3.78 c0.09-1.26,0.32-2.5,0.69-3.71c0.18-0.6,0.4-1.18,0.65-1.76C14.7,6.23,15.93,4.4,17.51,2.92c1.03-0.97,2.16-1.79,3.37-2.45 C22.6-0.12,24.47-0.48,26.31-0.49c1.4,0,2.79,0.2,4.15,0.59c2.19,0.63,4.24,1.63,6.08,2.94c0.15,0.11,0.3,0.22,0.44,0.33 c1.58,1.2,2.96,2.65,4.09,4.29c0.55,0.8,1.03,1.63,1.44,2.5c0.13,0.28,0.26,0.56,0.39,0.84c0.39,0.84,0.72,1.7,0.99,2.58 c0.09,0.28,0.17,0.56,0.25,0.85c0.25,0.85,0.44,1.72,0.57,2.6c0.04,0.29,0.08,0.57,0.11,0.86c0.09,0.87,0.14,1.75,0.14,2.64 c0,1.21-0.09,2.42-0.26,3.61c-0.06,0.39-0.12,0.77-0.2,1.15c-0.22,1.18-0.54,2.33-0.94,3.44c-0.13,0.36-0.27,0.72-0.42,1.07 c-0.46,1.08-1,2.13-1.61,3.13c-0.2,0.33-0.41,0.65-0.62,0.97c-0.65,0.98-1.37,1.91-2.16,2.78h-0.02c-0.02,0-0.03,0-0.05,0 c-0.1,0-0.2,0-0.3,0c-0.56,0-1.12-0.01-1.68-0.04c-0.87-0.04-1.73-0.12-2.59-0.24c-0.3-0.04-0.6-0.09-0.9-0.14 c-1.2-0.21-2.39-0.5-3.56-0.86c-0.39-0.12-0.78-0.25-1.17-0.39c-1.17-0.41-2.32-0.89-3.44-1.43l-0.02,0.02 c-0.01,0.01-0.02,0.01-0.03,0.02C41.77,36.43,41.77,36.43,41.76,36.43z M38.31,2.83c-1.35,0.5-2.61,1.2-3.75,2.06 c-2.3,1.75-4.05,4.08-5.06,6.72c-0.5,1.3-0.8,2.66-0.89,4.04c-0.08,1.3,0,2.6,0.27,3.87c0.26,1.25,0.72,2.46,1.34,3.59 c1.26,2.28,3.06,4.2,5.21,5.59c1.65,1.06,3.52,1.75,5.43,1.98c1.33,0.16,2.66,0.15,3.97-0.03c1.94-0.26,3.81-0.9,5.5-1.83 c2.04-1.13,3.8-2.73,5.1-4.66c0.64-0.95,1.15-1.97,1.52-3.03c0.35-1.01,0.55-2.06,0.59-3.13c0.04-1.2-0.08-2.39-0.36-3.53 c-0.26-1.07-0.68-2.11-1.24-3.06c-1.11-1.89-2.63-3.5-4.42-4.69c-1.52-1.01-3.23-1.68-5-1.94c-1.3-0.2-2.6-0.18-3.87,0.03 C40.42,2.5,39.37,2.63,38.31,2.83z"/>
        <text x="3" y="55" fontFamily="Poppins, sans-serif" fontSize="16" fontWeight="600" fill={textColor}>Nimbus Quest</text>
    </svg>
);
export const MenuIcon = () => (
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
  </svg>
);
export const XIcon = () => (
  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const ChevronLeftIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
);

export const ChevronRightIcon = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
);

export const MailIcon = ({ className = "w-8 h-8 text-blue-600 flex-shrink-0" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);

export const PhoneIcon = ({ className = "w-8 h-8 text-blue-600 flex-shrink-0" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);

export const LocationIcon = ({ className = "w-8 h-8 text-blue-600 flex-shrink-0" }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
);

export const LinkedInIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
);

export const TwitterIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616v.064c0 2.296 1.634 4.208 3.803 4.649-.623.169-1.282.23-1.966.23-.298 0-.586-.028-.875-.083.598 1.879 2.333 3.248 4.395 3.284-1.723 1.34-3.887 2.135-6.23 2.135-.404 0-.802-.023-1.195-.069 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.504 13.999-13.986 0-.213-.005-.425-.014-.637.962-.695 1.797-1.562 2.457-2.549z"/></svg>
);

export const FacebookIcon = () => (
    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v2.385z"/></svg>
);

export const ArrowUpIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
    </svg>
);

export const VisionIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

export const MissionIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2h10a2 2 0 002-2v-1a2 2 0 012-2h1.945M7.721 15.555a13.022 13.022 0 001.37 2.146m9.818-2.146a13.021 13.021 0 01-1.37 2.146M12 21l-1.17-2.341" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 21l-1.17-2.341" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 14v1m-6.364-8.636l-.707-.707M19.071 6.929l-.707-.707M6.929 19.071l-.707-.707m12.849-1.131l-.707.707M4 12H3m18 0h-1" />
    </svg>
);

export const StoryIcon = () => (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
    </svg>
);