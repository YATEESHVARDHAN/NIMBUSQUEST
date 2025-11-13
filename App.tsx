import React, { useState, useEffect, useRef } from 'react';
import { services, technologies, projects, team, testimonials, achievements } from './constants';
import { AnimatedCounter } from './components/AnimatedCounter';
import { LogoIcon, MenuIcon, XIcon, ChevronLeftIcon, ChevronRightIcon, MailIcon, PhoneIcon, LocationIcon, LinkedInIcon, TwitterIcon, FacebookIcon, ArrowUpIcon, VisionIcon, MissionIcon, StoryIcon } from './constants';

// Reusable Section Component
const Section: React.FC<{ id: string; children: React.ReactNode; className?: string }> = ({ id, children, className = '' }) => {
    return (
        <section id={id} className={`py-20 md:py-28 px-4 sm:px-6 lg:px-8 overflow-hidden ${className}`}>
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
};

// Reusable Section Title
const SectionTitle: React.FC<{ children: React.ReactNode; subtitle?: string }> = ({ children, subtitle }) => (
    <div className="text-center mb-16">
        {subtitle && <p className="text-lg text-teal-500 font-semibold mb-2 tracking-wider uppercase">{subtitle}</p>}
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 tracking-tight">{children}</h2>
        <div className="mt-4 w-24 h-1 bg-gradient-to-r from-teal-400 to-blue-500 mx-auto rounded-full"></div>
    </div>
);

const ScrollProgressBar: React.FC = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (scrollTop / docHeight) * 100;
        setScrollPercentage(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-slate-200/50">
            <div className="h-full bg-gradient-to-r from-teal-400 to-blue-600 transition-all duration-150 ease-out" style={{ width: `${scrollPercentage}%` }}></div>
        </div>
    );
};

const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navLinks = ["about", "services", "technologies", "projects", "team", "contact"];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMenuOpen(false);
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${isScrolled || isMenuOpen ? 'bg-white/80 backdrop-blur-lg shadow-md' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    <div className="flex-shrink-0">
                        <a href="#home" onClick={() => scrollToSection('home')} className="flex items-center text-slate-900">
                            <img src="/logo.png" alt="Nimbus Quest Logo" className="h-32 w-auto" />
                        </a>
                    </div>
                    <nav className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            {navLinks.map((link) => (
                                <a key={link} href={`#${link}`} onClick={() => scrollToSection(link)} className="capitalize text-slate-600 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">
                                    {link}
                                </a>
                            ))}
                        </div>
                    </nav>
                    <div className="hidden md:block">
                         <button onClick={() => scrollToSection('contact')} className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-lg">
                            Get in Touch
                        </button>
                    </div>
                    <div className="-mr-2 flex md:hidden">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 hover:text-blue-600 hover:bg-slate-100 focus:outline-none">
                            <span className="sr-only">Open main menu</span>
                            {isMenuOpen ? <XIcon /> : <MenuIcon />}
                        </button>
                    </div>
                </div>
            </div>
            {isMenuOpen && (
                <div className="md:hidden bg-white/95">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                           <a key={link} href={`#${link}`} onClick={() => scrollToSection(link)} className="capitalize text-slate-600 hover:bg-slate-100 hover:text-blue-600 block px-3 py-2 rounded-md text-base font-medium transition-colors">
                                {link}
                            </a>
                        ))}
                        <button onClick={() => scrollToSection('contact')} className="w-full text-left bg-blue-600 text-white px-3 py-2 mt-2 rounded-md text-base font-medium hover:bg-blue-700 transition-colors">
                            Get in Touch
                        </button>
                    </div>
                </div>
            )}
        </header>
    );
};

const FloatingShapes = () => (
    <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-teal-200/30 rounded-full animate-float opacity-50"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-blue-200/30 rounded-xl animate-float animation-delay-2000 opacity-50"></div>
        <div className="absolute bottom-1/4 left-1/3 w-24 h-24 bg-teal-200/20 rounded-full animate-float animation-delay-4000 opacity-50"></div>
    </div>
);

const Hero: React.FC = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };
    return (
        <section id="home" className="relative h-screen flex items-center justify-center text-center bg-ice-blue overflow-hidden">
            <FloatingShapes />
            {/* Hero background video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 z-0 w-full h-full object-cover opacity-60"
            >
                <source src="/nimbus-intro.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

{/* Subtle overlay above video but below content */}
<div className="absolute inset-0 z-10 bg-gradient-to-t from-white/40 via-ice-blue/20 to-transparent pointer-events-none"></div>

            <div className="relative z-20 px-4">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-tight mb-4 animate-fade-in-down">
                    Nimbus Quest
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl font-light text-slate-700 mb-8 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
                    Empowering Businesses to Evolve Digitally.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '1s' }}>
                    <button onClick={() => scrollToSection('services')} className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                        Explore Services
                    </button>
                    <button onClick={() => scrollToSection('contact')} className="bg-white border-2 border-slate-300 text-slate-700 px-8 py-3 rounded-full text-lg font-semibold hover:bg-slate-100 hover:border-slate-400 transition-all duration-300 transform hover:scale-105">
                        Contact Us
                    </button>
                </div>
            </div>
        </section>
    );
};


const About: React.FC = () => (
    <Section id="about" className="bg-white">
        <SectionTitle subtitle="ABOUT US">Pioneering Digital Evolution</SectionTitle>
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
            <div className="relative">
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Nimbus Quest Team" className="rounded-xl shadow-2xl w-full" />
                 <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-white p-4 rounded-lg shadow-xl hidden lg:block">
                    <img src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Collaboration" className="w-full h-full object-cover rounded-md"/>
                 </div>
            </div>
            <div className="space-y-8 text-slate-600">
                <div className="flex items-start gap-4">
                    <div className="bg-teal-100/50 p-3 rounded-full text-teal-600"><VisionIcon /></div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Vision</h3>
                        <p>To be a globally recognized leader in digital transformation, pioneering innovative solutions that drive sustainable growth for our clients.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                     <div className="bg-blue-100/50 p-3 rounded-full text-blue-600"><MissionIcon /></div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Mission</h3>
                        <p>To deliver cutting-edge technology services and enterprise solutions with excellence, integrity, and a client-centric approach, fostering digital evolution and success.</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                     <div className="bg-slate-100 p-3 rounded-full text-slate-600"><StoryIcon /></div>
                    <div>
                        <h3 className="text-2xl font-bold text-slate-900 mb-2">Our Story</h3>
                        <p>Founded by passionate technologists, Nimbus Quest was born to bridge business challenges and technological possibilities, growing into a trusted partner for enterprises worldwide.</p>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-20">
        </div>
    </Section>
);

const Services: React.FC = () => (
    <Section id="services" className="bg-ice-blue">
        <SectionTitle subtitle="OUR SERVICES">What We Offer</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
                <div key={index} className="group relative bg-white rounded-xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                    <div className="absolute top-0 left-0 w-full h-full rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-teal-50 to-blue-100 -z-10"></div>
                     <div className="mb-4 text-blue-600">{service.icon}</div>
                     <h3 className="text-xl font-bold text-slate-800 mb-2">{service.title}</h3>
                     <p className="text-slate-600">{service.description}</p>
                </div>
            ))}
        </div>
    </Section>
);

const Technologies: React.FC = () => (
    <Section id="technologies" className="bg-white relative">
         <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 -z-10"></div>
        <SectionTitle subtitle="OUR TECH STACK">Technologies We Master</SectionTitle>
        <div className="flex flex-wrap justify-center items-center gap-6">
            {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-100 text-slate-700 py-3 px-5 rounded-full font-medium transition-all duration-300 hover:bg-blue-600 hover:text-white hover:scale-110 shadow-sm hover:shadow-lg">
                    {tech}
                </div>
            ))}
        </div>
    </Section>
);

const Clients: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prevTestimonial = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <Section id="clients" className="bg-ice-blue relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-10" style={{backgroundImage: "url('https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}></div>
            <div className="relative z-10">
                <SectionTitle subtitle="OUR PARTNERS">Trusted By Industry Leaders</SectionTitle>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-20">
                    {[...Array(10)].map((_, i) => (
                        <div key={i} className="bg-white/60 backdrop-blur-sm h-24 rounded-lg flex items-center justify-center p-4 transition-all duration-300 hover:scale-105 hover:bg-white border border-slate-200 shadow-sm grayscale hover:grayscale-0">
                            <p className="text-slate-400 font-semibold">Client Logo</p>
                        </div>
                    ))}
                </div>
                <div className="relative bg-white p-10 rounded-xl shadow-lg max-w-4xl mx-auto">
                    <div className="text-center text-slate-800">
                        <p className="text-xl italic mb-4">"{testimonials[currentIndex].quote}"</p>
                        <p className="font-bold text-blue-600">{testimonials[currentIndex].author}</p>
                        <p className="text-slate-500">{testimonials[currentIndex].company}</p>
                    </div>
                    <button onClick={prevTestimonial} className="absolute left-4 top-1/2 -translate-y-1/2 bg-slate-100/50 p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-600">
                        <ChevronLeftIcon />
                    </button>
                     <button onClick={nextTestimonial} className="absolute right-4 top-1/2 -translate-y-1/2 bg-slate-100/50 p-2 rounded-full hover:bg-slate-200 transition-colors text-slate-600">
                        <ChevronRightIcon />
                    </button>
                </div>
            </div>
        </Section>
    );
};

const ProjectModal: React.FC<{ project: any; onClose: () => void }> = ({ project, onClose }) => (
    <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4" onClick={onClose}>
        <div className="bg-white rounded-lg max-w-3xl w-full mx-auto shadow-xl overflow-hidden animate-fade-in-up" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
                <img src={project.imageUrl} alt={project.title} className="w-full h-80 object-cover" />
                <button onClick={onClose} className="absolute top-4 right-4 bg-white/50 rounded-full p-2 text-slate-800 hover:bg-white">
                    <XIcon />
                </button>
            </div>
            <div className="p-8">
                <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full mb-2">{project.category}</span>
                <h3 className="text-3xl font-bold text-slate-900 mb-4">{project.title}</h3>
                <p className="text-slate-600">{project.description}</p>
                 <div className="mt-6 w-full h-64 bg-slate-200 rounded-lg flex items-center justify-center">
                    <p className="text-slate-400">Detailed Project Image/Video Placeholder</p>
                </div>
            </div>
        </div>
    </div>
);

const Projects: React.FC = () => {
    const [filter, setFilter] = useState('All');
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const filters = ['All', 'Transformation', 'Automation', 'CRM'];

    const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.category === filter);

    return (
        <Section id="projects" className="bg-white">
            <SectionTitle subtitle="OUR WORK">Case Studies & Projects</SectionTitle>
            <div className="flex justify-center mb-8 space-x-2 md:space-x-4">
                {filters.map(f => (
                    <button key={f} onClick={() => setFilter(f)}
                        className={`px-4 py-2 text-sm md:text-base rounded-full font-semibold transition-colors duration-300 ${filter === f ? 'bg-blue-600 text-white shadow-md' : 'bg-slate-100 text-slate-700 hover:bg-slate-200'}`}>
                        {f}
                    </button>
                ))}
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                    <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-md group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2" onClick={() => setSelectedProject(project)}>
                        <div className="relative h-56">
                            <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                             <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                                <div>
                                    <h3 className="text-lg font-bold text-white">{project.title}</h3>
                                    <span className="text-sm text-blue-300">{project.category}</span>
                                </div>
                             </div>
                             <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                 <p className="text-white font-bold text-lg">View Details</p>
                             </div>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
        </Section>
    );
};

const Achievements: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        }, { threshold: 0.1 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => { if (sectionRef.current) observer.unobserve(sectionRef.current); };
    }, []);
    
    return (
        <Section id="achievements" className="relative bg-ice-blue">
            <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", opacity: 0.1}}></div>
            <div className="absolute inset-0 bg-gradient-to-r from-teal-100/20 via-blue-100/20 to-transparent"></div>
            <div ref={sectionRef} className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {achievements.map((ach, index) => (
                    <div key={index} className="bg-white/50 backdrop-blur-md p-8 rounded-xl shadow-lg">
                        <p className="text-5xl md:text-6xl font-bold text-blue-600">
                             {isVisible ? <AnimatedCounter end={ach.value} duration={2000} /> : 0}{ach.suffix}
                        </p>
                        <p className="mt-2 text-lg text-slate-700">{ach.label}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

const Team: React.FC = () => (
    <Section id="team" className="bg-white">
        <SectionTitle subtitle="OUR EXPERTS">Meet the Leadership</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
                <div key={index} className="group text-center animate-team-card">
                    <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105 border-4 border-white group-hover:border-blue-300">
                         <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="mt-6">
                        <h3 className="text-xl font-bold text-slate-800">{member.name}</h3>
                        <p className="text-blue-600">{member.role}</p>
                    </div>
                </div>
            ))}
        </div>
    </Section>
);

const Contact: React.FC = () => (
    <Section id="contact" className="bg-ice-blue relative">
        <div className="absolute inset-0 opacity-20 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"}}></div>
        <div className="relative">
            <SectionTitle subtitle="GET IN TOUCH">Contact Us</SectionTitle>
            <div className="grid md:grid-cols-2 gap-12">
                <form className="space-y-6 bg-white/70 backdrop-blur-md p-8 rounded-xl shadow-lg">
                    <div className="relative">
                        <input type="text" id="name" placeholder=" " className="form-input" />
                        <label htmlFor="name" className="form-label">Your Name</label>
                    </div>
                     <div className="relative">
                        <input type="email" id="email" placeholder=" " className="form-input" />
                        <label htmlFor="email" className="form-label">Your Email</label>
                    </div>
                     <div className="relative">
                        <input type="text" id="subject" placeholder=" " className="form-input" />
                        <label htmlFor="subject" className="form-label">Subject</label>
                    </div>
                     <div className="relative">
                        <textarea id="message" placeholder=" " rows={5} className="form-input"></textarea>
                        <label htmlFor="message" className="form-label">Your Message</label>
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white p-3 rounded-md font-semibold hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">Send Message</button>
                </form>
                <div className="text-slate-700 space-y-8">
                    <div className="flex items-start space-x-4 bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg">
                        <LocationIcon />
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1">Office Address</h3>
                            <p>123 Digital Avenue, Tech Park, Metropolis, 54321</p>
                        </div>
                    </div>
                     <div className="flex items-start space-x-4 bg-white/70 backdrop-blur-md p-6 rounded-xl shadow-lg">
                        <MailIcon />
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-1">Email Us</h3>
                            <p>contact@nimbusquest.com</p>
                        </div>
                    </div>
                    <div className="w-full h-64 bg-slate-200 rounded-xl flex items-center justify-center border">
                        <p className="text-slate-500">Google Maps Placeholder (Light)</p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors"><LinkedInIcon /></a>
                        <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors"><TwitterIcon /></a>
                        <a href="#" className="text-slate-500 hover:text-blue-600 transition-colors"><FacebookIcon /></a>
                    </div>
                </div>
            </div>
        </div>
    </Section>
);

const Footer: React.FC = () => {
    const scrollToSection = (id: string) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="bg-slate-900 text-slate-400">
            <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: Branding */}
                    <div className="space-y-4 pr-8">
                        <a href="#home" onClick={() => scrollToSection('home')} className="inline-block">
                            <img src="/logo.png" alt="Nimbus Quest Logo" className="h-32 w-auto" textColor="white"/>
                        </a>
                        <p className="text-sm">
                            Empowering Businesses to Evolve Digitally.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#about" onClick={() => scrollToSection('about')} className="hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#services" onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Services</a></li>
                            <li><a href="#projects" onClick={() => scrollToSection('projects')} className="hover:text-white transition-colors">Projects</a></li>
                            <li><a href="#contact" onClick={() => scrollToSection('contact')} className="hover:text-white transition-colors">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <LocationIcon className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-blue-400" />
                                <span>123 Digital Avenue, Tech City</span>
                            </li>
                            <li className="flex items-start">
                                <MailIcon className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-blue-400" />
                                <a href="mailto:contact@nimbusquest.com" className="hover:text-white transition-colors">contact@nimbusquest.com</a>
                            </li>
                            <li className="flex items-start">
                                <PhoneIcon className="w-5 h-5 mt-1 mr-3 flex-shrink-0 text-blue-400" />
                                <a href="tel:+1234567890" className="hover:text-white transition-colors">(123) 456-7890</a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Follow Us */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
                        <div className="flex space-x-4">
                            <a href="#" aria-label="LinkedIn" className="text-slate-400 hover:text-white transition-colors"><LinkedInIcon /></a>
                            <a href="#" aria-label="Twitter" className="text-slate-400 hover:text-white transition-colors"><TwitterIcon /></a>
                            <a href="#" aria-label="Facebook" className="text-slate-400 hover:text-white transition-colors"><FacebookIcon /></a>
                        </div>
                    </div>
                </div>

                <div className="mt-16 border-t border-slate-800 pt-8 text-center">
                    <p className="text-sm">&copy; {new Date().getFullYear()} Nimbus Quest Pvt. Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

const BackToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-blue-600 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition-all duration-300 transform ${isVisible ? 'scale-100' : 'scale-0'}`}
            aria-label="Go to top"
        >
            <ArrowUpIcon />
        </button>
    );
};

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-section');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    document.querySelectorAll('section > div').forEach(section => {
      observer.observe(section);
    });
  }, []);

  return (
    <div className="bg-white text-slate-800 antialiased scroll-smooth">
      <style>{`
        :root {
          --color-ice-blue: #F0F8FF;
        }
        body {
          background-color: var(--color-ice-blue);
        }
        .bg-ice-blue { background-color: var(--color-ice-blue); }

        @keyframes fade-in-down { 0% { opacity: 0; transform: translateY(-20px); } 100% { opacity: 1; transform: translateY(0); } }
        @keyframes fade-in-up { 0% { opacity: 0; transform: translateY(20px); } 100% { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-down { animation: fade-in-down 1s ease-out forwards; }
        .animate-fade-in-up { animation: fade-in-up 1s ease-out forwards; }
        
        @keyframes section-fade-up {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        section > div { opacity: 0; }
        .animate-section { animation: section-fade-up 0.8s ease-out forwards; }
        
        .perspective-1000 { perspective: 1000px; }
        .transform-style-3d { transform-style: preserve-3d; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .backface-hidden { backface-visibility: hidden; }

        @keyframes float {
            0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            50% { transform: translateY(-20px) translateX(10px) rotate(10deg); }
            100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
        }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
        
        @keyframes team-card-float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
        .animate-team-card {
            animation: team-card-float 5s ease-in-out infinite;
        }
        .group:hover .animate-team-card {
            animation-play-state: paused;
        }

        .form-input {
          @apply w-full bg-white text-slate-800 p-3 rounded-md border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm transition-all;
        }
        .form-label {
          @apply absolute top-3 left-3 text-slate-500 pointer-events-none transition-all duration-300;
        }
        .form-input:focus ~ .form-label,
        .form-input:not(:placeholder-shown) ~ .form-label {
          @apply -top-2.5 left-2 text-xs bg-white px-1 text-blue-600;
        }
      `}</style>
      <ScrollProgressBar />
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Technologies />
        <Clients />
        <Projects />
        <Achievements />
        <Team />
        <Contact />
      </main>
      <Footer />
      <BackToTopButton />
    </div>
  )
}