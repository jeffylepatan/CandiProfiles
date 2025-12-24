
import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Check, 
  ArrowRight, 
  FileText, 
  Clock, 
  Layout, 
  Zap, 
  Globe, 
  ShieldCheck, 
  Send, 
  Rocket, 
  Palette,
  Linkedin,
  Facebook,
  Award
} from 'lucide-react';

// --- Sub-components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'How it Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-2xl font-extrabold text-blue-600 tracking-tight">Candi<span className="text-slate-900">Profiles</span></span>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a key={link.name} href={link.href} className="text-slate-600 hover:text-blue-600 font-medium transition-colors">
                {link.name}
              </a>
            ))}
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-sm">
              Get Started
            </button>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="block text-slate-600 hover:text-blue-600 font-medium py-2"
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-semibold mb-6 animate-fade-in border border-blue-100">
          <Award size={16} />
          <span>Helping 100+ Pinoy grads get hired</span>
        </div>
        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8">
          Turn your internship into a <span className="text-blue-600">career</span> with a professional portfolio.
        </h1>
        <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
          Stop sending boring PDFs. Stand out to top recruiters with a high-speed, custom-coded React website built specifically for your field.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-blue-200 transition-all transform hover:-translate-y-1">
            Build My Portfolio <ArrowRight size={20} />
          </button>
          <a href="#how-it-works" className="bg-white border border-slate-200 hover:border-blue-200 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all">
            See How it Works
          </a>
        </div>
        
        {/* Visual proof/mockup */}
        <div className="mt-16 relative">
          <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/10 to-emerald-500/10 blur-3xl rounded-full"></div>
          <img 
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
            alt="Portfolio Preview" 
            className="relative rounded-3xl shadow-2xl border-4 border-white object-cover aspect-video bg-slate-100"
          />
        </div>
      </div>
    </div>
  </section>
);

const Problem = () => (
  <section className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3">The Challenges</h2>
        <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900">Why a resume isn't enough anymore</h3>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <FileText className="text-blue-600" size={32} />,
            title: "PDFs are static",
            description: "Traditional resumes can't show interactivity, your personality, or the full depth of your projects."
          },
          {
            icon: <Clock className="text-blue-600" size={32} />,
            title: "Recruiters spend 6 seconds",
            description: "That's how long you have to make an impression. A fast-loading web app grabs attention instantly."
          },
          {
            icon: <Layout className="text-blue-600" size={32} />,
            title: "Generic templates look cheap",
            description: "Canva and Wix templates look the same to recruiters. Stand out with custom React code."
          }
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all group">
            <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              {item.icon}
            </div>
            <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
            <p className="text-slate-600 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2">
          <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3">Step-by-Step</h2>
          <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-8 leading-tight">From Student to Professional in 48 Hours</h3>
          
          <div className="space-y-12">
            {[
              {
                step: "01",
                icon: <Palette size={24} />,
                title: "Choose your template",
                description: "Pick from our curated library of premium React-based designs tailored for creatives, developers, or business majors."
              },
              {
                step: "02",
                icon: <Send size={24} />,
                title: "Send your details",
                description: "Upload your resume, photos, and project links via a simple form. No technical skills required."
              },
              {
                step: "03",
                icon: <Rocket size={24} />,
                title: "Go live in 48 hours",
                description: "Our engineers build, optimize, and deploy your site. You'll be ready to share your link with the world."
              }
            ].map((item, idx) => (
              <div key={idx} className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-blue-600 text-white rounded-2xl flex items-center justify-center shadow-lg shadow-blue-200">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h4>
                  <p className="text-slate-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:w-1/2 relative">
           <div className="bg-emerald-500/10 absolute -inset-10 rounded-full blur-3xl"></div>
           <div className="relative border border-slate-100 rounded-3xl p-4 bg-white shadow-2xl">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=800" alt="Process Illustration" className="rounded-2xl w-full" />
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Pricing = () => (
  <section id="pricing" className="py-24 bg-slate-50">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3">Pricing</h2>
        <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Invest in your career</h3>
        <p className="text-slate-600 max-w-xl mx-auto">One-time payment. No hidden fees. Lifetime pride.</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {/* Basic Tier */}
        <div className="bg-white p-10 rounded-3xl border border-slate-200 flex flex-col hover:border-blue-200 transition-all">
          <div className="mb-8">
            <h4 className="text-lg font-bold text-slate-900 mb-2">Basic</h4>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-slate-900">₱1,499</span>
              <span className="text-slate-500">/one-time</span>
            </div>
            <p className="text-slate-500 text-sm mt-4 italic text-balance">Perfect for showing off projects on a budget.</p>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            {[
              { icon: <Check size={18} />, text: "Professional subdomain (yourname.candiprofiles.com)" },
              { icon: <Zap size={18} />, text: "React performance (Sub-1s loading)" },
              { icon: <Check size={18} />, text: "1-year high-speed hosting" },
              { icon: <Check size={18} />, text: "Mobile responsive design" },
              { icon: <Check size={18} />, text: "Secure SSL Certificate" }
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-700">
                <span className="text-emerald-500">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 px-6 border border-blue-600 text-blue-600 font-bold rounded-2xl hover:bg-blue-50 transition-colors">
            Get Basic
          </button>
        </div>

        {/* Professional Tier */}
        <div className="bg-white p-10 rounded-3xl border-4 border-blue-600 flex flex-col relative shadow-2xl shadow-blue-100 transform md:-translate-y-4">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider shadow-md">
            Most Popular
          </div>
          <div className="mb-8">
            <h4 className="text-lg font-bold text-slate-900 mb-2">Professional</h4>
            <div className="flex items-baseline gap-1">
              <span className="text-4xl font-extrabold text-slate-900">₱3,499</span>
              <span className="text-slate-500">/one-time</span>
            </div>
            <p className="text-slate-500 text-sm mt-4 italic text-balance">Everything you need to be seen by top MNCs.</p>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            {[
              { icon: <Globe size={18} />, text: "Custom .com domain (1st year free)" },
              { icon: <ShieldCheck size={18} />, text: "SEO Setup (Get found on Google)" },
              { icon: <Check size={18} />, text: "Priority Support & Edits" },
              { icon: <Check size={18} />, text: "Google Analytics Integration" },
              { icon: <Check size={18} />, text: "Custom Email (hi@yourname.com)" },
              { icon: <Check size={18} />, text: "Everything in Basic" }
            ].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-slate-700">
                <span className="text-blue-600">{item.icon}</span>
                {item.text}
              </li>
            ))}
          </ul>
          <button className="w-full py-4 px-6 bg-blue-600 text-white font-bold rounded-2xl hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
            Get Professional
          </button>
        </div>
      </div>
    </div>
  </section>
);

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-blue-600 font-bold uppercase tracking-wider text-sm mb-3">Get in Touch</h2>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Start your journey today</h3>
            <p className="text-slate-600">Have questions? Fill out the form and we'll reply within 4 hours.</p>
          </div>
          
          <form 
            action="https://api.web3forms.com/submit" 
            method="POST" 
            className="bg-slate-50 p-8 sm:p-12 rounded-[2rem] border border-slate-100 shadow-sm space-y-6"
          >
            <input type="hidden" name="access_key" value="f52f384d-5875-425f-979a-97ead0d84fca" />
            
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="Juan Dela Cruz" 
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="juan@email.com" 
                  className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Major / Course</label>
              <input 
                type="text" 
                name="course"
                placeholder="B.S. Computer Science / Marketing" 
                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
              <textarea 
                name="message"
                rows={4} 
                placeholder="Tell us a bit about yourself and what you're looking for..." 
                className="w-full px-5 py-4 rounded-xl border border-slate-200 focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all resize-none"
                required
              ></textarea>
            </div>
            <button 
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl transition-all flex items-center justify-center gap-2 shadow-xl shadow-blue-100"
            >
              Send Message <Send size={20} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="bg-slate-900 text-slate-400 py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 border-b border-slate-800 pb-12">
        <div className="text-center md:text-left">
          <span className="text-2xl font-extrabold text-white tracking-tight">Candi<span className="text-blue-500">Profiles</span></span>
          <p className="mt-4 max-w-xs">Building premium portfolios for the next generation of Filipino talent.</p>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors"><Linkedin size={24} /></a>
            <a href="#" className="hover:text-white transition-colors"><Facebook size={24} /></a>
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-slate-700 text-sm font-bold text-slate-300">
             🇵🇭 Built for Filipinos
          </div>
        </div>
      </div>
      
      <div className="mt-12 flex flex-col md:flex-row justify-between items-center text-sm gap-6">
        <p>&copy; {new Date().getFullYear()} CandiProfiles. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Problem />
      <HowItWorks />
      <Pricing />
      <Contact />
      <Footer />
    </div>
  );
}
