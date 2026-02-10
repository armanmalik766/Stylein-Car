import React, { useState, useEffect, useRef } from 'react';
import {
  Menu, X, Phone, Mail, MapPin, Instagram, Facebook, Twitter,
  MessageCircle, ChevronRight, ChevronLeft, Star, CheckCircle2,
  Clock, Map, Car, Plus, Play, Wrench, Shield, Sparkles, Settings,
  ArrowUpRight, Music, Disc, Wind, MoveLeft, Users, Layers, Paintbrush, ChevronDown,
  Send, Globe
} from 'lucide-react';
import { SERVICES, BRANDS_DETAILED, BrandInfo } from './constants';
import { Service } from './types';
import logo from './logo2.png';


// Refined Logo component
const Logo = ({ className = "h-20 md:h-28 w-auto object-contain" }: { className?: string }) => (
  <img src={logo} alt="Stylein Car" className={className} />
);

const Counter = ({ end, duration = 2000, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    if (countRef.current) observer.observe(countRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const easeOutQuad = (t: number) => t * (2 - t);
      const easedProgress = easeOutQuad(progress);
      setCount(Math.floor(easedProgress * end));
      if (progress < 1) window.requestAnimationFrame(step);
    };
    window.requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return <span ref={countRef}>{count.toLocaleString()}{suffix}</span>;
};

const SplashScreen = ({ isFinished }: { isFinished: boolean }) => (
  <div className={`fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center transition-all duration-1000 ease-in-out ${isFinished ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
    <div className="relative flex flex-col items-center px-6 text-center">
      <div className="absolute inset-0 bg-[#f48225]/10 blur-[120px] rounded-full scale-150 animate-pulse"></div>
      <Logo className="h-20 md:h-32 animate-logo-entry" />
      <div className="mt-12 md:mt-20 w-48 md:w-72 h-[1px] bg-white/5 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f48225] to-transparent animate-loading-bar"></div>
      </div>
      <div className="mt-6 text-[8px] md:text-[9px] text-gray-500 font-black uppercase tracking-[0.4em] md:tracking-[0.8em] animate-pulse">Excellence in every detail</div>
    </div>
  </div>
);

const TopHeader = () => (
  <div className="hidden lg:block bg-[#050505] border-b border-white/5 py-2 px-10">
    <div className="max-w-[1700px] mx-auto flex justify-between items-center text-[11px] font-bold text-gray-400 uppercase tracking-widest">
      <div className="flex items-center space-x-10">
        <div className="flex items-center space-x-2">
          <Mail size={14} className="text-[#f48225]" />
          <span>studio@styleincar.com</span>
        </div>
        <div className="flex items-center space-x-2">
          <Clock size={14} className="text-[#f48225]" />
          <span>10:00 A.M to 7:00 P.M</span>
        </div>
        <div className="flex items-center space-x-2">
          <MapPin size={14} className="text-[#f48225]" />
          <span>Al Jerf Industrial 1 - Ajman - UAE</span>
        </div>
      </div>
      <div className="flex items-center space-x-5">
        <Facebook size={14} className="hover:text-white cursor-pointer transition-colors" />
        <Instagram size={14} className="hover:text-white cursor-pointer transition-colors" />
        <Twitter size={14} className="hover:text-white cursor-pointer transition-colors" />
        <MessageCircle size={14} className="hover:text-white cursor-pointer transition-colors" />
      </div>
    </div>
  </div>
);



const Navbar = ({ onNavigate, currentPage, onSelectBrand }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showWorkDropdown, setShowWorkDropdown] = useState(false);
  const [activeBrandId, setActiveBrandId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileBrandsOpen, setMobileBrandsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'HOME', page: 'home' },
    { label: 'ABOUT US', page: 'about' },
    { label: 'OUR WORK', page: 'work', hasDropdown: true },
    { label: 'SERVICES', page: 'services' },
    { label: 'CONTACT', page: 'contact' }
  ];

  const handleMobileNav = (page: string) => {
    onNavigate(page);
    setMobileMenuOpen(false);
  };

  return (
    <nav className={`w-full z-50 transition-all duration-300 ${isScrolled ? 'fixed top-0 bg-black/95 shadow-2xl border-b border-white/5' : 'relative bg-black'}`}>
      <div className="max-w-[1700px] mx-auto flex items-center justify-between h-20 lg:h-28 px-4 lg:px-0">
        <div className="lg:px-10 h-full flex items-center lg:border-r border-white/5 group cursor-pointer shrink-0">
          <button onClick={() => onNavigate('home')} className="flex items-center">
            <Logo />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex flex-1 items-center justify-center space-x-12 px-10">
          {navItems.map(item => (
            <div
              key={item.label}
              className="relative py-8"
              onMouseEnter={() => item.hasDropdown && setShowWorkDropdown(true)}
              onMouseLeave={() => { if (item.hasDropdown) { setShowWorkDropdown(false); setActiveBrandId(null); } }}
            >
              <button
                onClick={() => onNavigate(item.page)}
                className={`text-[12px] font-black tracking-widest transition-colors flex items-center space-x-1 ${currentPage === item.page ? 'text-[#f48225]' : 'text-white hover:text-[#f48225]'}`}
              >
                <span>{item.label}</span>
                {item.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${showWorkDropdown ? 'rotate-180' : ''}`} />}
              </button>
              {item.hasDropdown && showWorkDropdown && (
                <div className="absolute top-full left-0 bg-[#0a0a0a] border border-white/5 flex shadow-2xl z-[70] animate-slide-up">
                  <div className="min-w-[240px] p-2 border-r border-white/5 max-h-[70vh] overflow-y-auto no-scrollbar">
                    {BRANDS_DETAILED.map((brand) => (
                      <button
                        key={brand.id}
                        onMouseEnter={() => setActiveBrandId(brand.id)}
                        onClick={() => { onSelectBrand(brand); setShowWorkDropdown(false); }}
                        className={`w-full text-left px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] flex justify-between items-center transition-all ${activeBrandId === brand.id ? 'text-[#f48225] bg-[#f48225]/5' : 'text-gray-400 hover:text-white'}`}
                      >
                        {brand.name}
                        <ChevronRight size={12} className={activeBrandId === brand.id ? 'opacity-100' : 'opacity-0'} />
                      </button>
                    ))}
                    <button
                      onClick={() => { onNavigate('work'); setShowWorkDropdown(false); }}
                      className="w-full text-left px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-[#f48225] border-t border-white/5 mt-2 hover:bg-[#f48225]/10"
                    >
                      VIEW ALL BRANDS
                    </button>
                  </div>
                  {activeBrandId && (
                    <div className="min-w-[220px] p-2 bg-[#111111] animate-slide-up">
                      {BRANDS_DETAILED.find(b => b.id === activeBrandId)?.models.map((model) => (
                        <button
                          key={model.name}
                          onClick={() => { onSelectBrand(BRANDS_DETAILED.find(b => b.id === activeBrandId)!); setShowWorkDropdown(false); }}
                          className="w-full text-left px-4 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 hover:text-white hover:bg-white/5 transition-all"
                        >
                          {model.name}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop Contact CTA */}
        <div className="hidden lg:flex items-center px-10 border-l border-white/5 h-full space-x-5">
          <div className="w-12 h-12 rounded-full bg-[#f48225]/10 border border-[#f48225]/20 flex items-center justify-center group cursor-pointer">
            <Phone size={20} className="text-[#f48225]" />
          </div>
          <div className="flex flex-col items-start">
            <span className="text-[9px] text-gray-500 font-black uppercase tracking-widest">Studio Line</span>
            <span className="text-lg font-black text-white">+971 504178786</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="p-2 text-white hover:text-[#f48225] transition-colors"
          >
            <Menu size={32} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`fixed inset-0 z-[100] bg-black transition-transform duration-500 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col h-full overflow-y-auto bg-black">
          <div className="flex items-center justify-between p-6 border-b border-white/5">
            <Logo className="h-10" />
            <button
              onClick={() => { setMobileMenuOpen(false); setMobileBrandsOpen(false); }}
              className="p-2 text-white hover:text-[#f48225]"
            >
              <X size={32} />
            </button>
          </div>
          <div className="flex flex-col p-6 space-y-8">
            {navItems.map(item => (
              <div key={item.label} className="flex flex-col">
                <div className="flex items-center justify-between">
                  <button
                    onClick={() => item.hasDropdown ? setMobileBrandsOpen(!mobileBrandsOpen) : handleMobileNav(item.page)}
                    className={`text-2xl font-black tracking-widest uppercase transition-colors ${currentPage === item.page ? 'text-[#f48225]' : 'text-white'}`}
                  >
                    {item.label}
                  </button>
                  {item.hasDropdown && (
                    <button
                      onClick={() => setMobileBrandsOpen(!mobileBrandsOpen)}
                      className="p-2 text-[#f48225]"
                    >
                      <ChevronDown size={24} className={`transition-transform duration-300 ${mobileBrandsOpen ? 'rotate-180' : ''}`} />
                    </button>
                  )}
                </div>

                {item.hasDropdown && mobileBrandsOpen && (
                  <div className="mt-6 flex flex-col space-y-4 pl-6 border-l-2 border-[#f48225]/30 animate-slide-up">
                    {BRANDS_DETAILED.map(brand => (
                      <button
                        key={brand.id}
                        onClick={() => { onSelectBrand(brand); setMobileMenuOpen(false); }}
                        className="text-left text-sm font-bold text-gray-400 uppercase tracking-widest hover:text-white"
                      >
                        {brand.name}
                      </button>
                    ))}
                    <button
                      onClick={() => handleMobileNav('work')}
                      className="text-left text-sm font-black text-[#f48225] uppercase tracking-widest"
                    >
                      VIEW ALL BRANDS
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-auto p-10 bg-[#0a0a0a] border-t border-white/5">
            <div className="flex flex-col space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-[#f48225] flex items-center justify-center text-black">
                  <Phone size={24} fill="currentColor" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Call Our Studio</span>
                  <span className="text-xl font-black text-white tracking-tight">+971 504178786</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#f48225]">
                  <Mail size={24} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] text-gray-500 font-black uppercase tracking-widest">Email Us</span>
                  <span className="text-sm font-black text-white">studio@styleincar.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const ServiceDetailsPage = ({ service, onSelectService, onNavigate }: { service: Service, onSelectService: (s: Service) => void, onNavigate: (p: string) => void }) => {
  useEffect(() => window.scrollTo(0, 0), [service]);
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <section className="py-8 md:py-12 text-center bg-[#0a0a0a] px-6">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tight mb-4 font-display">{service.title}</h1>
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 text-[9px] md:text-[11px] font-bold tracking-[0.2em] md:tracking-[0.3em] uppercase">
          <button onClick={() => onNavigate('home')} className="text-white opacity-50 font-black hover:text-[#f48225] transition-colors">HOME</button>

          <button onClick={() => onNavigate('services')} className="text-white opacity-50 font-black hover:text-[#f48225] transition-colors">SERVICES</button>

          <span className="text-[#f48225] font-black">{service.title}</span>
        </div>
      </section>

      <section className="max-w-[1700px] mx-auto px-6 md:px-10 pb-12 md:pb-24 pt-4 md:pt-8 flex flex-col lg:flex-row gap-12 md:gap-20">
        <div className="lg:w-3/4 order-2 lg:order-1">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 animate-slide-up">
            {service.gallery?.map((img, idx) => (
              <div key={idx} className="relative aspect-square overflow-hidden group border border-white/5 rounded-sm">
                <img src={img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={`${service.title} ${idx}`} />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
              </div>
            )) || (
                <div className="col-span-full py-20 text-center text-gray-500 font-black uppercase tracking-widest">More work coming soon...</div>
              )}
          </div>
        </div>

        <div className="lg:w-1/4 space-y-12 order-1 lg:order-2">
          <div className="bg-[#111111] border border-white/5 p-2 shadow-2xl rounded-sm">
            <h4 className="px-6 md:px-8 py-5 md:py-6 text-lg md:text-xl font-black uppercase tracking-widest text-white border-b border-white/5 font-display">Our Services</h4>
            <div className="flex flex-col">
              {SERVICES.map((s) => (
                <button
                  key={s.id}
                  onClick={() => onSelectService(s)}
                  className={`w-full text-left px-6 md:px-8 py-4 md:py-5 text-[10px] md:text-[11px] font-black uppercase tracking-widest flex justify-between items-center group transition-all ${s.id === service.id ? 'bg-[#f48225] text-black' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                >
                  <span>{s.title}</span>
                  <ChevronRight size={14} className={`${s.id === service.id ? 'text-black' : 'text-[#f48225] opacity-0 group-hover:opacity-100'} transition-all`} />
                </button>
              ))}
            </div>
          </div>

          <div className="relative group overflow-hidden rounded-sm shadow-2xl">
            <img src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=80&w=800" className="w-full h-[400px] md:h-[600px] object-cover brightness-[0.4]" alt="CTA Detail" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#f48225] via-transparent to-transparent opacity-80"></div>
            <div className="absolute bottom-8 left-8 right-8 md:bottom-10 md:left-10 md:right-10">
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase font-display leading-tight mb-6 md:mb-8">Get Best Car <span className="text-black">Detailing</span></h3>
              <div className="bg-white p-4 md:p-6 rounded-sm flex items-center space-x-3 md:space-x-4 shadow-2xl">
                {/* Fixed invalid md:size prop on Phone icon by using Tailwind responsive classes */}
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#f48225] rounded-full flex items-center justify-center text-white shrink-0"><Phone className="w-[18px] h-[18px] md:w-5 md:h-5" fill="white" /></div>
                <div className="flex flex-col">
                  <span className="text-[8px] md:text-[10px] text-gray-500 font-black uppercase tracking-widest">Need Help? Call Us</span>
                  <span className="text-lg md:text-xl font-black text-black tracking-tight">+971 504178786</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const ContactPage = () => {
  useEffect(() => window.scrollTo(0, 0), []);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;
    const mailtoLink = `mailto:studio@styleincar.com?subject=${encodeURIComponent(subject || 'Inquiry from Website')}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
    setFormStatus('submitted');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setFormStatus('idle'), 5000);
  };

  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <section className="py-8 md:py-12 text-center bg-[#0a0a0a] px-6">
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight mb-2 font-display">Contact Us</h1>
        <div className="flex items-center justify-center space-x-2 text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase">
          <span className="text-white opacity-50 font-black">HOME</span>

          <span className="text-[#f48225] font-black">GET IN TOUCH</span>
        </div>
      </section>
      <section className="max-w-[1700px] mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-4 md:pt-8 grid lg:grid-cols-2 gap-16 md:gap-20">
        <div>
          <h2 className="text-3xl md:text-5xl font-black uppercase mb-10 font-display leading-tight">Let's Discuss <br /><span className="text-[#f48225]">Your Project</span></h2>
          <div className="space-y-8 md:space-y-12">
            <div className="flex items-start space-x-6 md:space-x-8">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#151515] border border-white/10 flex items-center justify-center text-[#f48225] shrink-0"><MapPin size={24} /></div>
              <div><h4 className="text-lg font-black uppercase tracking-widest mb-1">Our Studio</h4><p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] md:text-[11px]">Al Jerf Industrial 1 - Ajman - UAE</p></div>
            </div>
            <div className="flex items-start space-x-6 md:space-x-8">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#151515] border border-white/10 flex items-center justify-center text-[#f48225] shrink-0"><Phone size={24} /></div>
              <div><h4 className="text-lg font-black uppercase tracking-widest mb-1">Call Us</h4><p className="text-[#f48225] text-xl md:text-2xl font-black tracking-tight">+971 504178786</p></div>
            </div>
            <div className="flex items-start space-x-6 md:space-x-8">
              <div className="w-14 h-14 md:w-16 md:h-16 bg-[#151515] border border-white/10 flex items-center justify-center text-[#f48225] shrink-0"><Mail size={24} /></div>
              <div><h4 className="text-lg font-black uppercase tracking-widest mb-1">Email</h4><p className="text-gray-500 font-bold uppercase tracking-widest text-[10px] md:text-[11px]">studio@styleincar.com</p></div>
            </div>
          </div>
        </div>
        <div className="bg-[#111111] border border-white/5 p-8 md:p-12 shadow-2xl rounded-sm relative">
          {formStatus === 'submitted' ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#111111] z-10 animate-fade-in p-6 text-center">
              <CheckCircle2 className="w-16 h-16 text-[#f48225] mb-4" />
              <h3 className="text-2xl font-black uppercase text-white mb-2">Message Drafted!</h3>
              <p className="text-gray-400 text-sm font-bold uppercase tracking-widest">Opening your email client to send the message...</p>
            </div>
          ) : (
            <form className="space-y-6 md:space-y-8" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="FULL NAME" className="bg-transparent border-b border-white/20 py-4 text-[10px] font-black uppercase tracking-widest focus:border-[#f48225] transition-colors outline-none w-full" required />
                <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="EMAIL ADDRESS" className="bg-transparent border-b border-white/20 py-4 text-[10px] font-black uppercase tracking-widest focus:border-[#f48225] transition-colors outline-none w-full" required />
              </div>
              <input name="subject" value={formData.subject} onChange={handleChange} type="text" placeholder="SUBJECT" className="bg-transparent border-b border-white/20 py-4 text-[10px] font-black uppercase tracking-widest focus:border-[#f48225] transition-colors outline-none w-full" required />
              <textarea name="message" value={formData.message} onChange={handleChange} placeholder="TELL US ABOUT YOUR CAR" rows={4} className="bg-transparent border-b border-white/20 py-4 text-[10px] font-black uppercase tracking-widest focus:border-[#f48225] transition-colors outline-none w-full resize-none" required></textarea>
              <button type="submit" className="btn-plus w-full justify-center group h-14 md:h-16">
                <span className="btn-plus-text">SEND MESSAGE</span>
                <div className="btn-plus-icon group-hover:bg-black/40 transition-colors"><Send size={18} /></div>
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
};

const AngledTickerSection = ({ onNavigate }: { onNavigate: (p: string) => void }) => (
  <section className="relative py-24 md:py-40 bg-black overflow-hidden flex flex-col items-center justify-center">
    <div className="absolute top-10 md:top-20 left-0 w-[200%] md:w-[150%] h-16 md:h-20 bg-[#f48225] rotate-[2deg] md:rotate-[2deg] -ml-[50%] md:-ml-[25%] flex items-center z-10 shadow-2xl border-y border-black/10">
      {/* Fixed invalid md:size prop on Sparkles icon by using Tailwind responsive classes */}
      <div className="ticker-wrap w-full"><div className="ticker-content flex space-x-12 md:space-x-20 items-center">{['INFOTAINMENT', 'PAINT PROTECTION', 'CAR INTERIOR', 'CUSTOMIZED SEAT', 'CUSTOMIZED STEERING', 'CERAMIC COATING', 'CAR EXTERIOR'].map(text => (<div key={text} className="flex items-center space-x-4 md:space-x-6 text-black font-black uppercase text-xs md:text-sm tracking-[0.2em]"><span>{text}</span><Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" /></div>))}</div></div>
    </div>
    <div className="absolute top-40 md:top-60 left-0 w-[200%] md:w-[150%] h-16 md:h-20 bg-white/5 rotate-[-2deg] md:rotate-[-1deg] -ml-[50%] md:-ml-[25%] flex items-center z-0 border-y border-white/5">
      {/* Fixed invalid md:size prop on Sparkles icon by using Tailwind responsive classes */}
      <div className="ticker-wrap w-full"><div className="ticker-content flex space-x-12 md:space-x-20 items-center" style={{ animationDirection: 'reverse' }}>{['CUSTOMIZED SEAT', 'CUSTOMIZED STEERING', 'CERAMIC COATING', 'CAR EXTERIOR', 'INFOTAINMENT', 'PAINT PROTECTION', 'CAR INTERIOR'].map(text => (<div key={text} className="flex items-center space-x-4 md:space-x-6 text-white/30 font-black uppercase text-xs md:text-sm tracking-[0.2em]"><span>{text}</span><Sparkles className="w-3.5 h-3.5 md:w-4 md:h-4" /></div>))}</div></div>
    </div>
    <div className="relative z-20 max-w-[1700px] mx-auto px-6 md:px-10 flex flex-col lg:flex-row items-center gap-12 md:gap-20 py-20">
      <div className="lg:w-1/2 flex justify-center order-2 lg:order-1">
        <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800" className="w-[90%] md:w-[80%] brightness-75 grayscale contrast-125 opacity-60 hover:opacity-100 transition-opacity duration-1000" alt="Wireframe" />
      </div>
      <div className="lg:w-1/2 text-left space-y-6 md:space-y-8 order-1 lg:order-2">
        {/* Fixed invalid md:size prop on Wrench icon by using Tailwind responsive classes */}
        <Wrench className="w-8 h-8 md:w-10 md:h-10 text-[#f48225]" />
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase leading-tight font-display tracking-tighter">
          We Care for Your <br /> Car <span className="text-[#f48225]">Just Like You Do</span>
        </h2>
        <p className="text-gray-500 text-xs md:text-sm leading-loose max-w-xl font-medium uppercase tracking-widest opacity-80">
          At Stylein Car services LLC, your car isn't just a vehicle, it's part of your lifestyle. We handle every detail with surgical precision and premium craftsmanship to reflect your personality and love for driving.
        </p>
        <button onClick={() => onNavigate('contact')} className="btn-plus h-14 md:h-16 group">
          <span className="btn-plus-text">CONTACT US</span>
          <div className="btn-plus-icon group-hover:bg-black/40 transition-colors"><Plus size={18} /></div>
        </button>
      </div>
    </div>
  </section>
);

const FeatureGridSection = () => (
  <section className="py-24 md:py-32 bg-[#0a0a0a] px-6 md:px-10">
    <div className="max-w-[1700px] mx-auto text-center">
      <div className="flex flex-col items-center mb-16 md:mb-24">
        <div className="flex items-center space-x-3 text-[#f48225] font-black uppercase text-[9px] md:text-[10px] tracking-[0.4em] md:tracking-[0.5em] mb-4">
          <div className="w-8 md:w-10 h-0.5 bg-[#f48225]"></div>
          <span>WHY CHOOSE US</span>
          <div className="w-8 md:w-10 h-0.5 bg-[#f48225]"></div>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white font-display tracking-tighter">
          Why Choose Stylein <span className="text-[#f48225]">Car</span>
        </h2>
        <div className="w-16 md:w-20 h-1 bg-[#f48225] mt-6"></div>
      </div>
      <div className="grid lg:grid-cols-2 gap-8 md:gap-10">
        <div className="relative group overflow-hidden shadow-2xl rounded-sm aspect-[4/3] lg:aspect-auto h-full min-h-[300px] md:min-h-[500px]">
          <img src="https://upload.wikimedia.org/wikipedia/commons/9/94/2020_Bentley_Bentayga_facelift.jpg" className="w-full h-full object-cover brightness-[0.6] group-hover:brightness-75 transition-all duration-700" alt="Luxury Car" />
          <div className="absolute top-6 left-6 md:top-10 md:left-10 text-left">
            <h3 className="text-3xl md:text-5xl font-black text-white font-display tracking-tighter opacity-90 drop-shadow-2xl">PREMIUM <span className="text-[#f48225] block">CUSTOMIZATION</span></h3>
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 md:w-24 md:h-24 bg-[#f48225] rounded-full flex flex-col items-center justify-center text-white cursor-pointer hover:scale-110 shadow-2xl transition-transform border-4 md:border-[6px] border-black/20">
              <span className="text-[8px] md:text-[10px] font-black uppercase mb-1">Play</span>
              {/* Fixed invalid md:size prop on Play icon by using Tailwind responsive classes */}
              <Play className="w-[18px] h-[18px] md:w-6 md:h-6 ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
          {[
            { Icon: Sparkles, title: "Expert Craftsmanship", desc: "Our experienced team delivers precision car modifications and detailing, ensuring every project exceeds expectations.", orange: true },
            { Icon: Shield, title: "Premium Materials", desc: "We work with pure leather, advanced ceramic coatings, and high-quality paint protection films for results that last.", orange: false },
            { Icon: Wrench, title: "Tailored Customization", desc: "From interiors to exteriors, every upgrade is custom-designed to match your style and vehicle specifications.", orange: false },
            { Icon: Car, title: "Attention to Detail", desc: "We treat every car like our own, focusing on flawless finishes and perfection in every single detail.", orange: true }
          ].map((item, i) => (
            <div key={i} className={`p-8 md:p-10 flex flex-col items-start text-left border border-white/5 transition-all duration-300 hover:scale-[1.02] shadow-xl rounded-sm ${item.orange ? 'bg-[#f48225] text-black' : 'bg-[#151515] text-white'}`}>
              {/* Fixed invalid md:size prop on dynamic Icon by using Tailwind responsive classes */}
              <item.Icon className={`mb-6 w-7 h-7 md:w-8 md:h-8 ${item.orange ? 'text-black' : 'text-[#f48225]'}`} />
              <h4 className="text-lg md:text-xl font-black uppercase mb-4 leading-tight font-display tracking-tighter">{item.title}</h4>
              <p className="text-[10px] md:text-[11px] font-bold leading-relaxed uppercase tracking-widest opacity-80">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const DetailedWireframeFeatures = () => (
  <section className="py-24 md:py-32 bg-black px-6 md:px-10 relative overflow-hidden">
    <div className="max-w-[1700px] mx-auto">
      <div className="text-center mb-16 md:mb-24">
        <span className="text-[#f48225] text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">OUR SERVICE LIST</span>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white font-display tracking-tighter">
          Why Choose Stylein <span className="text-[#f48225]">Car...</span>
        </h2>
        <div className="w-16 md:w-20 h-1 bg-[#f48225] mx-auto mt-6"></div>
      </div>
      <div className="relative flex flex-col lg:flex-row items-center justify-between gap-12 md:gap-10">
        <div className="lg:w-1/3 space-y-12 md:space-y-16 text-center lg:text-right">
          {[
            { title: "Experience & Expertise (Since 2016)", desc: "Nearly a decade in premium car customization. We have perfected the art of transforming vehicles inside and out.", id: "x66" },
            { title: "Complete Customization", desc: "From custom seat covers to leather-wrapped steering wheels, we deliver high-quality modifications tailored for you.", id: "x65" },
            { title: "Luxury Customization Experts", desc: "Experts in high-end vehicle modification, offering exclusive upgrades that combine durability with luxury looks.", id: "x66" }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="flex items-center justify-center lg:justify-end space-x-4 mb-4">
                <div className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-gray-500 font-black group-hover:bg-[#f48225] group-hover:text-black transition-colors">{item.id}</div>
                <div className="hidden lg:block w-10 h-0.5 bg-[#f48225]/30"></div>
              </div>
              <h4 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter mb-4">{item.title}</h4>
              <p className="text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-loose max-w-sm mx-auto lg:ml-auto lg:mr-0">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="lg:w-1/3 flex justify-center py-6 md:py-10">
          <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800" className="w-full max-w-[400px] md:max-w-[500px] brightness-50 opacity-60" alt="Top Wireframe" />
        </div>
        <div className="lg:w-1/3 space-y-12 md:space-y-16 text-center lg:text-left">
          {[
            { title: "50,000+ Satisfied Customers", desc: "With a strong reputation across the region, we have successfully served thousands of happy enthusiasts.", id: "x61" },
            { title: "Premium Materials", desc: "We use top-grade leather, premium fabrics, and advanced technology to create durable, luxurious upgrades.", id: "x65" },
            { title: "Trusted Brand Identity", desc: "With a massive portfolio and thousands of satisfied customers, our work speaks for our quality and expertise.", id: "x66" }
          ].map((item, i) => (
            <div key={i} className="group">
              <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                <div className="hidden lg:block w-10 h-0.5 bg-[#f48225]/30"></div>
                <div className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] text-gray-500 font-black group-hover:bg-[#f48225] group-hover:text-black transition-colors">{item.id}</div>
              </div>
              <h4 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter mb-4">{item.title}</h4>
              <p className="text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-loose max-w-sm mx-auto lg:mr-auto lg:ml-0">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const CallToActionBar = () => (
  <section className="bg-[#f48225] py-16 md:py-24 px-6 md:px-10 relative overflow-hidden flex items-center shadow-2xl">
    <div className="max-w-[1700px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
      <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
        <div className="flex items-center space-x-2 text-black font-black italic mb-2">
          <div className="flex space-x-1"><div className="w-4 h-1 bg-black"></div><div className="w-2 h-1 bg-black"></div><div className="w-1 h-1 bg-black"></div></div>
          <span className="text-[8px] md:text-[10px] uppercase tracking-widest">DO YOU WANT TO UPGRADE YOUR CAR</span>
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase font-display tracking-tighter leading-tight">
          GIVE A CALL TO <br className="md:hidden" /><span className="text-black"> STYLEIN CAR</span>
        </h2>
      </div>
      <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[220%] pointer-events-none hidden lg:block">
        <img src="https://images.unsplash.com/photo-1583267746897-2cf415888172?auto=format&fit=crop&q=80&w=400" className="h-full w-auto object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" alt="Car Seat" />
      </div>
      <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 z-10">
        {/* Fixed invalid md:size prop on Phone icon by using Tailwind responsive classes */}
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-white flex items-center justify-center text-[#f48225] shadow-2xl shrink-0">
          <Phone className="w-6 h-6 md:w-[30px] md:h-[30px]" fill="currentColor" />
        </div>
        <div className="flex flex-col items-center sm:items-start leading-none">
          <span className="text-black/60 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] mb-1">Need Help?</span>
          <span className="text-2xl md:text-4xl font-black text-white tracking-tighter whitespace-nowrap">+971 504178786</span>
        </div>
      </div>
    </div>
  </section>
);

const BrandModelsPage = ({ brand }: { brand: BrandInfo }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <section className="py-8 md:py-12 text-center bg-[#0a0a0a] px-6">
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight mb-2 font-display leading-tight">{brand.name}</h1>
        <div className="flex items-center justify-center space-x-2 text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase">
          <span className="text-white opacity-50 font-black">OUR WORK</span>

          <span className="text-[#f48225] font-black">{brand.name} PORTFOLIO</span>
        </div>
      </section>
      <section className="max-w-[1700px] mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-4 md:pt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {brand.models.map((model, idx) => (
            <div key={idx} className="bg-[#111111] border border-white/5 flex flex-col group transition-all duration-500 shadow-2xl overflow-hidden animate-slide-up rounded-sm" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="text-center py-8 md:py-12 px-6">
                <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-1 font-display group-hover:text-[#f48225] transition-colors">{model.name}</h3>
              </div>
              <div className="relative aspect-[4/5] md:aspect-auto md:h-[450px] overflow-hidden">
                <img src={model.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-90 group-hover:brightness-100" alt={model.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              </div>
              <div className="p-6 md:p-8 mt-auto border-t border-white/5">
                <button className="w-full bg-black border border-white/10 py-4 md:py-6 text-[10px] md:text-[11px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-white hover:bg-[#f48225] hover:text-black transition-all">CHECK GALLERY</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const AllBrandsPage = ({ onSelectBrand }: { onSelectBrand: (brand: BrandInfo) => void }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <section className="py-8 md:py-12 text-center bg-[#0a0a0a] px-6">
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight mb-2 font-display">All Brands</h1>
        <div className="flex items-center justify-center space-x-2 text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase">
          <span className="text-white opacity-50 font-black">HOME</span>

          <span className="text-[#f48225] font-black">BRAND COLLECTION</span>
        </div>
      </section>
      <section className="max-w-[1700px] mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-4 md:pt-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {BRANDS_DETAILED.map((brand, idx) => (
            <div key={idx} className="brand-card bg-[#111111] border border-white/5 flex flex-col group transition-all duration-500 hover:border-[#f48225]/30 shadow-2xl relative rounded-sm">
              <div className="text-center pt-8 pb-10 px-6">
                <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tighter mb-1 group-hover:text-[#f48225] transition-colors font-display">{brand.name}</h3>
                <p className="text-[8px] md:text-[9px] text-gray-500 font-bold uppercase tracking-[0.2em]">{brand.subtitle}</p>
              </div>
              <div className="relative mb-8 md:mb-12">
                <div className="aspect-[4/3] md:h-64 overflow-hidden rounded-sm">
                  <img src={brand.image} className="brand-image w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-75 group-hover:brightness-90" alt={brand.name} />
                </div>
                <div className="absolute top-4 right-4 w-16 h-16 md:w-32 md:h-24 bg-white/90 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:scale-110 p-3 md:p-5 z-10 shadow-xl overflow-visible">
                  <img src={brand.logo} alt={`${brand.name} logo`} className="w-full h-full object-contain filter transition-all drop-shadow-sm" />
                </div>
              </div>
              <div className="p-4 md:p-6 mt-auto">
                <button onClick={() => onSelectBrand(brand)} className="w-full bg-black border border-white/10 py-4 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.4em] text-white hover:bg-[#f48225] hover:text-black transition-all">CHECK MODELS</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

// Fixed ServiceCard props type to allow 'key' when used in a list to prevent TypeScript errors
const ServiceCard = ({ service, onClick }: { service: Service, onClick: () => void, key?: React.Key }) => (
  <div
    onClick={onClick}
    className="service-item-card cursor-pointer min-w-[300px] md:min-w-[400px] bg-[#111111] border border-white/5 group transition-all duration-500 hover:border-[#f48225]/30 snap-start flex flex-col h-[480px] md:h-[550px] relative rounded-sm"
  >
    <div className="relative h-2/3 overflow-hidden">
      <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75 group-hover:brightness-100" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>

      <div className="absolute top-6 left-6 md:top-10 md:left-10 text-white flex flex-col items-start z-10 pr-12">
        <div className="flex space-x-1 mb-2">
          <div className="w-2 md:w-3 h-0.5 bg-[#f48225] rotate-[45deg]"></div>
          <div className="w-2 md:w-3 h-0.5 bg-[#f48225] rotate-[45deg]"></div>
          <div className="w-2 md:w-3 h-0.5 bg-[#f48225] rotate-[45deg]"></div>
        </div>
        <h3 className="text-2xl md:text-3xl font-black uppercase font-display leading-tight">{service.title}</h3>
      </div>

      <div className="absolute top-6 right-6 md:top-8 md:right-8 w-12 h-12 md:w-16 md:h-16 bg-[#f48225] flex items-center justify-center text-black shadow-2xl shrink-0">{service.icon}</div>
    </div>
    <div className="p-8 md:p-10 flex flex-col justify-between flex-1 bg-[#111111] z-10 border-t border-white/5">
      <p className="text-gray-500 text-[10px] md:text-xs font-black uppercase tracking-[0.1em] md:tracking-[0.2em] leading-relaxed line-clamp-2 md:line-clamp-none">{service.description}</p>
      <div className="flex items-center justify-between mt-4 md:mt-6">
        <button className="flex items-center space-x-4 text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] md:tracking-[0.4em] text-white group/btn">
          <span>Explore Service</span>
        </button>
        {/* Fixed invalid md:size prop on ArrowUpRight icon by using Tailwind responsive classes */}
        <div className="w-8 h-8 md:w-10 md:h-10 border border-white/10 flex items-center justify-center group-hover:bg-[#f48225] group-hover:text-black transition-all rounded-sm shrink-0">
          <ArrowUpRight className="w-4 h-4 md:w-[18px] md:h-[18px]" />
        </div>
      </div>
    </div>
  </div>
);

const ServicesPage = ({ onSelectService }: { onSelectService: (s: Service) => void }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      <section className="py-8 md:py-12 text-center bg-[#0a0a0a] px-6">
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight mb-2 font-display">Our Services</h1>
        <div className="flex items-center justify-center space-x-2 text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase">
          <span className="text-white opacity-50 font-black">HOME</span>
          <span className="text-[#f48225] font-black">ELITE MODIFICATIONS</span>
        </div>
      </section>
      <section className="max-w-[1700px] mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-4 md:pt-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, idx) => (
            <div
              key={idx}
              onClick={() => onSelectService(service)}
              className="bg-[#111111] border border-white/5 flex flex-col group transition-all duration-500 hover:border-[#f48225]/30 shadow-2xl relative cursor-pointer rounded-sm"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={service.image} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-75 group-hover:brightness-90" alt={service.title} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-12 flex flex-col">
                  <div className="flex space-x-1 mb-2">
                    <div className="w-2 h-0.5 bg-[#f48225] rotate-[45deg]"></div>
                    <div className="w-2 h-0.5 bg-[#f48225] rotate-[45deg]"></div>
                    <div className="w-2 h-0.5 bg-[#f48225] rotate-[45deg]"></div>
                  </div>
                  <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tighter font-display leading-tight">{service.title}</h3>
                </div>
                <div className="absolute top-4 right-4 w-8 h-8 md:w-10 md:h-10 bg-[#f48225] flex items-center justify-center text-black shrink-0">{service.icon}</div>
              </div>
              <div className="p-6 md:p-8">
                <p className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase tracking-[0.2em] mb-6 line-clamp-2">{service.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[9px] md:text-[10px] font-black text-white uppercase tracking-[0.4em]">Details</span>
                  <div className="w-8 h-8 border border-white/10 flex items-center justify-center group-hover:bg-[#f48225] group-hover:text-black transition-all rounded-sm">
                    <ArrowUpRight size={14} />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const Home = ({ onNavigate, onSelectBrand, onSelectService }: { onNavigate: (p: string) => void, onSelectBrand: (b: BrandInfo) => void, onSelectService: (s: Service) => void }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  // Auto-scroll logic
  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (!isHovering) {
      interval = setInterval(() => {
        if (scrollRef.current) {
          const { current } = scrollRef;
          const card = current.querySelector('.service-item-card') as HTMLElement;
          const scrollAmount = card ? card.offsetWidth + 24 : 424;

          if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 10) {
            current.scrollTo({ left: 0, behavior: 'smooth' });
          } else {
            current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
          }
        }
      }, 4000);
    }
    return () => clearInterval(interval);
  }, [isHovering]);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const card = current.querySelector('.service-item-card') as HTMLElement;
      const scrollAmount = card ? card.offsetWidth + 24 : 424;
      current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <>
      <section id="home" className="relative h-[80vh] md:h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src="https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&q=90&w=2400" alt="Hero" className="w-full h-full object-cover brightness-[0.35] md:brightness-[0.4]" />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-[1700px] mx-auto px-6 md:px-10 w-full animate-slide-up">
          <h1 className="text-4xl sm:text-6xl md:text-9xl font-black text-white leading-[1.0] uppercase tracking-tighter mb-8 md:mb-10 font-display">The Art of <br /><span className="text-[#f48225]">Detailing</span></h1>
          <p className="text-lg md:text-2xl text-gray-300 mb-8 md:mb-12 font-medium leading-relaxed border-l-4 md:border-l-8 border-[#f48225] pl-6 md:pl-10 max-w-2xl uppercase tracking-widest text-xs md:text-base">Stylein Car services LLC: Transforming automotive visions into reality through elite UAE craftsmanship.</p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 md:gap-8">
            <button onClick={() => onNavigate('work')} className="btn-plus h-14 md:h-16 group"><span className="btn-plus-text whitespace-nowrap">View Masterpieces</span><div className="btn-plus-icon group-hover:bg-black/40 transition-colors"><Plus size={20} /></div></button>
            <button onClick={() => onNavigate('contact')} className="px-8 md:px-12 h-14 md:h-16 border-2 border-white text-white font-black uppercase tracking-[0.2em] md:tracking-[0.3em] text-xs md:text-sm hover:bg-white hover:text-black transition-all">Get in Touch</button>
          </div>
        </div>
      </section>

      <StatsBar />

      <section className="py-20 md:py-32 bg-[#0a0a0a] px-6 md:px-10 relative overflow-hidden">
        <div className="max-w-[1700px] mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-16 md:mb-24 gap-12">
            <div className="max-w-4xl">
              <span className="text-[#f48225] text-[10px] md:text-xs font-black tracking-[0.4em] md:tracking-[0.5em] uppercase mb-4 md:mb-6 block">Our Craftsmanship</span>
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase text-white font-display tracking-tighter leading-tight">Elite Automotive <br /><span className="text-[#f48225]">Modifications</span></h2>
            </div>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 md:gap-8 w-full lg:w-auto">
              <button onClick={() => onNavigate('services')} className="btn-plus h-14 md:h-16 group justify-center">
                <span className="btn-plus-text whitespace-nowrap">All Services</span>
                <div className="btn-plus-icon group-hover:bg-black/40 transition-colors"><ArrowUpRight size={20} /></div>
              </button>
              <div className="flex space-x-4 justify-center md:justify-start">
                <button onClick={() => scroll('left')} className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#f48225] hover:text-black transition-all"><ChevronLeft className="w-6 h-6 md:w-7 md:h-7" /></button>
                <button onClick={() => scroll('right')} className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#f48225] hover:text-black transition-all"><ChevronRight className="w-6 h-6 md:w-7 md:h-7" /></button>
              </div>
            </div>
          </div>
          <div
            ref={scrollRef}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            className="flex space-x-6 md:space-x-8 overflow-x-auto pb-8 md:pb-12 no-scrollbar snap-x snap-mandatory scroll-smooth"
            style={{ scrollbarWidth: 'none' }}
          >
            {SERVICES.map((s, idx) => (<ServiceCard key={idx} service={s} onClick={() => onSelectService(s)} />))}
          </div>
        </div>
      </section>

      <BrandSection onSelectBrand={onSelectBrand} onNavigate={onNavigate} />

      <AngledTickerSection onNavigate={onNavigate} />
      <FeatureGridSection />
      <DetailedWireframeFeatures />
      <CallToActionBar />
    </>
  );
};

const StatsBar = () => (
  <div className="bg-[#f48225] py-8 md:py-10 px-6 md:px-10 relative z-20 shadow-2xl">
    <div className="max-w-[1700px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6">
      <div className="flex items-center space-x-4 md:space-x-6">
        <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-white/20 flex items-center justify-center text-white shrink-0"><Car className="w-6 h-6 md:w-[30px] md:h-[30px]" /></div>
        <div><span className="text-[8px] md:text-[10px] text-black font-black uppercase tracking-widest block mb-1">Clients Served</span><span className="text-2xl md:text-4xl font-black text-white leading-none whitespace-nowrap"><Counter end={50000} suffix=" +" /></span></div>
      </div>
      <div className="flex items-center space-x-4 md:space-x-6 md:border-l border-white/20 md:pl-8 lg:pl-10">
        <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-white/20 flex items-center justify-center text-white shrink-0"><Settings className="w-6 h-6 md:w-[30px] md:h-[30px]" /></div>
        <div><span className="text-[8px] md:text-[10px] text-black font-black uppercase tracking-widest block mb-1">Interior Mods</span><span className="text-2xl md:text-4xl font-black text-white leading-none whitespace-nowrap"><Counter end={10785} suffix=" +" /></span></div>
      </div>
      <div className="flex items-center space-x-4 md:space-x-6 md:border-l border-white/20 md:pl-8 lg:pl-10">
        <div className="w-12 h-12 md:w-14 md:h-14 border-2 border-white/20 flex items-center justify-center text-white shrink-0"><Wrench className="w-6 h-6 md:w-[30px] md:h-[30px]" /></div>
        <div><span className="text-[8px] md:text-[10px] text-black font-black uppercase tracking-widest block mb-1">Exterior Mods</span><span className="text-2xl md:text-4xl font-black text-white leading-none whitespace-nowrap"><Counter end={12626} suffix=" +" /></span></div>
      </div>
    </div>
  </div>
);

const BrandSection = ({ onSelectBrand, onNavigate }) => (
  <section className="py-24 md:py-32 bg-black px-6 md:px-10 border-t border-white/5">
    <div className="max-w-[1700px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-24 gap-8">
        <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase text-white font-display tracking-tighter leading-tight">World Class <br /><span className="text-[#f48225]">Car Brands</span></h2>
        <button onClick={() => onNavigate('work')} className="btn-plus h-14 md:h-16 group">
          <span className="btn-plus-text">Full List</span>
          <div className="btn-plus-icon group-hover:bg-black/40 transition-colors"><Plus size={20} /></div>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-x-12 md:gap-y-20">
        {BRANDS_DETAILED.slice(0, 6).map((brand, idx) => (
          <div key={idx} className="brand-card bg-[#111111] border border-white/5 p-4 md:p-6 flex flex-col group transition-all duration-500 hover:border-[#f48225]/30 shadow-2xl animate-slide-up rounded-sm" style={{ animationDelay: `${idx * 0.1}s` }}>
            <div className="text-center pt-8 pb-10 px-4 md:pt-10 md:pb-12">
              <h3 className="text-2xl md:text-4xl font-black text-white uppercase tracking-tighter mb-2 group-hover:text-[#f48225] transition-colors font-display leading-tight">{brand.name}</h3>
              <p className="text-[9px] md:text-[11px] text-gray-500 font-bold uppercase tracking-[0.3em] md:tracking-[0.4em]">{brand.subtitle}</p>
            </div>
            <div className="relative mb-8 md:mb-12">
              <div className="w-full h-full aspect-[4/3] md:h-80 rounded-sm overflow-hidden shadow-inner">
                <img src={brand.image} className="brand-image w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 brightness-[0.7]" alt={brand.name} />
              </div>
              <div className="absolute top-4 right-4 w-16 h-16 md:w-24 md:h-24 bg-white/90 rounded-full border border-white/20 flex items-center justify-center brand-logo-circle group-hover:bg-white shadow-2xl p-3 md:p-5 z-10 transition-all duration-500 overflow-visible">
                <img src={brand.logo} alt="Logo" className="w-full h-full object-contain filter drop-shadow-sm" />
              </div>
            </div>
            <button onClick={() => onSelectBrand(brand)} className="w-full bg-black py-4 md:py-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] md:tracking-[0.5em] text-white hover:bg-[#f48225] hover:text-black transition-all border border-white/10 mt-auto">VIEW MODELS</button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = ({ onNavigate }) => (
  <footer className="bg-[#050505] pt-24 md:pt-32 pb-10 px-6 md:px-10 border-t border-white/5">
    <div className="max-w-[1700px] mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-20 mb-24 md:mb-32">
        <div className="flex flex-col items-start">
          <Logo className="h-22 mb-6 md:mb-10" />
          <p className="text-gray-500 text-xs md:text-sm leading-loose mb-10 max-w-xs uppercase tracking-widest font-bold">Stylein Car services LLC. Ajman's premier destination for high-end automotive styling since 2016.</p>
        </div>
        <div>
          <h4 className="text-white text-lg font-black uppercase tracking-widest mb-8 md:mb-10 font-display">Links</h4>
          <ul className="space-y-4 md:space-y-6">
            {['Home', 'About', 'Work', 'Services', 'Contact'].map(i => (
              <li key={i}>
                <button
                  onClick={() => onNavigate(i === 'Work' ? 'work' : i.toLowerCase())}
                  className="text-gray-500 hover:text-[#f48225] text-[10px] md:text-xs font-black uppercase tracking-widest transition-colors"
                >
                  {i}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="text-white text-lg font-black uppercase tracking-widest mb-8 md:mb-10 font-display">Ajman Studio</h4>
          <p className="text-gray-500 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-4">Al Jerf Industrial 1 - Ajman - UAE</p>
          <p className="text-[#f48225] text-xl md:text-2xl font-black tracking-tighter transition-all hover:scale-105 inline-block cursor-pointer">+971 504178786</p>
        </div>
        <div>
          <h4 className="text-white text-lg font-black uppercase tracking-widest mb-8 md:mb-10 font-display">Social Media</h4>
          <div className="flex space-x-6">
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#f48225] hover:border-[#f48225] transition-all cursor-pointer"><Instagram size={20} /></div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#f48225] hover:border-[#f48225] transition-all cursor-pointer"><Facebook size={20} /></div>
            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-[#f48225] hover:border-[#f48225] transition-all cursor-pointer"><Twitter size={20} /></div>
          </div>
        </div>
      </div>
      <div className="pt-10 border-t border-white/5 text-center text-gray-600 text-[8px] md:text-[10px] font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
        &copy; 2024 Stylein Car services LLC. Beyond the Luxury. All Rights Reserved.
      </div>
    </div>
  </footer>
);

const AboutPage = ({ onNavigate }: { onNavigate: (p: string) => void }) => {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <div className="bg-black text-white min-h-screen pt-20">
      {/* Header Section */}
      <section className="py-8 md:py-12 text-center bg-[#0a0a0a] px-6">
        <h1 className="text-5xl md:text-8xl font-black uppercase tracking-tight mb-4 font-display">About Us</h1>
        <div className="flex items-center justify-center space-x-2 text-[10px] md:text-[11px] font-bold tracking-[0.3em] uppercase">
          <button onClick={() => onNavigate('home')} className="text-white opacity-50 font-black hover:text-[#f48225]">HOME</button>

          <span className="text-[#f48225] font-black">ABOUT US</span>
        </div>
      </section>

      {/* Hero Content Section */}
      <section className="max-w-[1700px] mx-auto px-6 md:px-10 pb-16 md:pb-24 pt-4 md:pt-8 animate-slide-up">
        <div className="max-w-6xl mx-auto">
          {/* Premium Luxury Image */}
          <div className="relative mb-16 overflow-hidden rounded-sm group shadow-[0_0_50px_rgba(244,130,37,0.15)]">
            <img src="https://i.pinimg.com/1200x/87/db/c3/87dbc3d09d589130dd651f3d7fc07258.jpg" className="w-full h-auto brightness-90 group-hover:scale-105 transition-transform duration-1000" alt="Premium Luxury Car" />
            <div className="absolute bottom-6 left-6 md:bottom-12 md:left-12 flex flex-col items-start leading-none pointer-events-none">
              <h2 className="text-5xl md:text-[120px] font-black text-white italic tracking-tighter opacity-90 drop-shadow-2xl">PREMIUM</h2>
              <div className="flex items-baseline space-x-4 -mt-2 md:-mt-5">
                <span className="text-2xl md:text-5xl font-black text-[#f48225] uppercase tracking-widest italic">LUXURY</span>
                <span className="text-2xl md:text-5xl font-black text-white uppercase tracking-[0.5em] italic">STYLING</span>
              </div>
            </div>
          </div>

          {/* Story Text */}
          <div className="space-y-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-black uppercase mb-4 font-display tracking-tighter">About Stylein Car</h2>
              <p className="text-[#f48225] text-xs md:text-sm font-bold uppercase tracking-[0.3em]">Stylein Car: Elevating Automotive Aesthetics Since 2016</p>
            </div>

            <p className="text-xl md:text-2xl font-black text-[#f48225] uppercase tracking-widest leading-relaxed border-l-4 border-[#f48225] pl-8">
              Established In 2016, Stylein Car has been redefining automobile styling with top-notch customization services, giving cars a unique and high-end appeal.
            </p>

            <div className="space-y-8 text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest leading-loose">
              <p>With a strong presence in the automobile industry, we specialize in custom interior and exterior modifications, ensuring that every vehicle reflects its owner's personality and style.</p>
              <p>Our services include: Custom Seat Covers - Premium-quality materials tailored to perfection, Leather-Wrapped Steering Wheels - Elevate the driving experience with handcrafted luxury, Infotainment Upgrades - State-of-the-art audio and entertainment systems, Exterior Modifications - Sleek enhancements for a high-end look.</p>
              <p>As Luxury Customization Experts, we specialize in exclusive makeovers for premium vehicles. With a dedicated team of professionals and a passion for innovation, we have proudly served 40,000+ satisfied customers across the UAE and beyond, transforming their vehicles into stunning masterpieces. Our strong social media presence further showcases our expertise and customer satisfaction, making us a trusted name in the automotive styling industry. Stylein Car - Where Style Meets Innovation!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Specific About Stats Bar */}
      <section className="bg-[#f48225] py-12 md:py-16 px-6 md:px-10 shadow-2xl">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          <div className="flex items-center space-x-6">
            <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center text-white"><Car size={32} /></div>
            <div>
              <span className="text-[10px] text-black font-black uppercase tracking-widest block mb-1">CUSTOMER SATISFIED</span>
              <span className="text-3xl md:text-4xl font-black text-white leading-none whitespace-nowrap"><Counter end={15000} suffix=" +" /></span>
            </div>
          </div>
          <div className="flex items-center space-x-6 border-l-0 md:border-l border-white/20 md:pl-10">
            <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center text-white"><Wrench size={32} /></div>
            <div>
              <span className="text-[10px] text-black font-black uppercase tracking-widest block mb-1">INTERIOR MODIFICATION</span>
              <span className="text-3xl md:text-4xl font-black text-white leading-none whitespace-nowrap"><Counter end={10000} suffix=" +" /></span>
            </div>
          </div>
          <div className="flex items-center space-x-6 border-l-0 md:border-l border-white/20 md:pl-10">
            <div className="w-16 h-16 border-2 border-white/30 rounded-full flex items-center justify-center text-white"><Settings size={32} /></div>
            <div>
              <span className="text-[10px] text-black font-black uppercase tracking-widest block mb-1">EXTERIOR MODIFICATION</span>
              <span className="text-3xl md:text-4xl font-black text-white leading-none whitespace-nowrap"><Counter end={12000} suffix=" +" /></span>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section with Wireframe */}
      <section className="py-24 md:py-32 bg-[#050505] px-6 md:px-10 relative overflow-hidden">
        <div className="max-w-[1700px] mx-auto">
          <div className="text-center mb-16 md:mb-24">
            <span className="text-[#f48225] text-[9px] md:text-[10px] font-black tracking-[0.4em] uppercase mb-4 block">OUR SERVICE LIST</span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black uppercase text-white font-display tracking-tighter">
              Why Choose Car <span className="text-[#f48225]">Stylein...</span>
            </h2>
            <div className="w-20 h-1 bg-[#f48225] mx-auto mt-6"></div>
          </div>

          <div className="relative flex flex-col lg:flex-row items-center justify-between gap-16">
            <div className="lg:w-1/3 space-y-16 text-center lg:text-right">
              {[
                { title: "Experience & Expertise (Since 2016)", desc: "With nearly a decade in premium car customization, Stylein Car has perfected the art of transforming vehicles inside and out. Our deep industry knowledge and hands-on expertise ensure modifications that boost style, comfort, and performance.", id: "x66" },
                { title: "Complete Customization - Interior & Exterior", desc: "From custom seat covers and leather-wrapped steering wheels to infotainment upgrades and exterior makeovers, we deliver high-quality car modifications designed around your preferences.", id: "x65" },
                { title: "Luxury Customization Specialists", desc: "As premium vehicle experts, we offer exclusive upgrades that combine elegance with a personalized look, enhancing both style and luxury.", id: "x66" }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="flex items-center justify-center lg:justify-end space-x-4 mb-4">
                    <div className="w-8 h-8 bg-white/10 flex items-center justify-center text-[10px] text-gray-500 font-black group-hover:bg-[#f48225] group-hover:text-black transition-colors">{item.id}</div>
                    <div className="hidden lg:block w-10 h-0.5 bg-[#f48225]/30"></div>
                  </div>
                  <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-4">{item.title}</h4>
                  <p className="text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-loose max-w-sm mx-auto lg:ml-auto lg:mr-0">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="lg:w-1/3 flex justify-center py-6 md:py-10 relative">
              <div className="absolute inset-0 bg-[#f48225]/5 blur-[100px] rounded-full scale-110"></div>
              <img src="https://images.unsplash.com/photo-1544636331-e26879cd4d9b?auto=format&fit=crop&q=80&w=800" className="w-full max-w-[450px] brightness-[0.4] contrast-125 opacity-70 relative z-10" alt="Wireframe car" />
            </div>

            <div className="lg:w-1/3 space-y-16 text-center lg:text-left">
              {[
                { title: "50,000+ Satisfied Customers Across India", desc: "With a strong reputation and a growing client base, we have successfully served 50,000+ happy customers nationwide, each reflecting our commitment to quality, precision, and customer satisfaction.", id: "x61" },
                { title: "Premium Materials & Expert Craftsmanship", desc: "We use top-grade leather, premium fabrics, and advanced automotive technology to create durable, luxurious upgrades. Every detail is crafted with precision and style.", id: "x65" },
                { title: "Trusted Brand with Strong Social Media Presence", desc: "With a large online following and thousands of satisfied customers, our portfolio and testimonials speak for our quality, trust, and expertise. Explore our work across social media and see how Stylein Car transforms cars and lifestyles.", id: "x66" }
              ].map((item, i) => (
                <div key={i} className="group">
                  <div className="flex items-center justify-center lg:justify-start space-x-4 mb-4">
                    <div className="hidden lg:block w-10 h-0.5 bg-[#f48225]/30"></div>
                    <div className="w-8 h-8 bg-white/10 flex items-center justify-center text-[10px] text-gray-500 font-black group-hover:bg-[#f48225] group-hover:text-black transition-colors">{item.id}</div>
                  </div>
                  <h4 className="text-xl font-black text-white uppercase tracking-tighter mb-4">{item.title}</h4>
                  <p className="text-[10px] md:text-[11px] text-gray-500 font-bold uppercase tracking-widest leading-loose max-w-sm mx-auto lg:mr-auto lg:ml-0">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tailored Footer CTA */}
      <section className="bg-[#f48225] py-16 md:py-24 px-6 md:px-10 relative overflow-hidden flex items-center">
        <div className="max-w-[1700px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center space-x-2 text-black font-black italic mb-4">
              <div className="flex space-x-1"><div className="w-4 h-1 bg-black"></div><div className="w-2 h-1 bg-black"></div><div className="w-1 h-1 bg-black"></div></div>
              <span className="text-[9px] md:text-[11px] uppercase tracking-widest">DO YOU WANT TO UPGRADE YOUR CAR</span>
            </div>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-white uppercase font-display tracking-tighter leading-tight">
              GIVE A CALL TO <br className="md:hidden" /><span className="text-black">CAR STYLEIN</span>
            </h2>
          </div>

          <div className="absolute left-1/2 -translate-x-1/2 bottom-0 h-[250%] pointer-events-none hidden lg:block opacity-90">
            <img src="https://images.unsplash.com/photo-1583267746897-2cf415888172?auto=format&fit=crop&q=80&w=400" className="h-full w-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.6)]" alt="Luxury car seat" />
          </div>

          <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 z-10">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white flex items-center justify-center text-[#f48225] shadow-2xl shrink-0">
              <Phone className="w-8 h-8 md:w-10 md:h-10" fill="currentColor" />
            </div>
            <div className="flex flex-col items-center sm:items-start leading-none">
              <span className="text-black font-black text-[10px] md:text-[12px] uppercase tracking-[0.2em] mb-2 opacity-80">Need Help?</span>
              <span className="text-3xl md:text-5xl font-black text-white tracking-tighter whitespace-nowrap">+971 504178786</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [showSplash, setShowSplash] = useState(true);
  const [splashFinished, setSplashFinished] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState<BrandInfo | null>(null);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashFinished(true);
      setTimeout(() => setShowSplash(false), 1000);
    }, 3200);
    return () => clearTimeout(timer);
  }, []);

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedBrand(null);
    setSelectedService(null);
    window.scrollTo(0, 0);
  };

  const handleSelectBrand = (brand: BrandInfo) => {
    setSelectedBrand(brand);
    setCurrentPage('brand-models');
    window.scrollTo(0, 0);
  };

  const handleSelectService = (service: Service) => {
    setSelectedService(service);
    setCurrentPage('service-details');
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-black">
      {showSplash && <SplashScreen isFinished={splashFinished} />}
      <div className={`transition-opacity duration-1000 ${showSplash && !splashFinished ? 'opacity-0' : 'opacity-100'}`}>
        <TopHeader />

        <Navbar onNavigate={handleNavigate} onSelectBrand={handleSelectBrand} currentPage={currentPage} />
        {currentPage === 'home' ? <Home onNavigate={handleNavigate} onSelectBrand={handleSelectBrand} onSelectService={handleSelectService} /> :
          currentPage === 'services' ? <ServicesPage onSelectService={handleSelectService} /> :
            currentPage === 'about' ? <AboutPage onNavigate={handleNavigate} /> :
              currentPage === 'work' ? <AllBrandsPage onSelectBrand={handleSelectBrand} /> :
                currentPage === 'contact' ? <ContactPage /> :
                  currentPage === 'brand-models' && selectedBrand ? <BrandModelsPage brand={selectedBrand} /> :
                    currentPage === 'service-details' && selectedService ? <ServiceDetailsPage service={selectedService} onSelectService={handleSelectService} onNavigate={handleNavigate} /> : null
        }
        <Footer onNavigate={handleNavigate} />
      </div>
    </div>
  );
}
