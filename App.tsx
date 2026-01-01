import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Settings,
  FileSearch,
  Layers,
  Table,
  PieChart as PieIcon,
  Link as LinkIcon,
  Hash,
  Database,
  ChevronRight,
  Zap,
  CheckCircle,
  FileSpreadsheet,
  ExternalLink,
  Linkedin,
  Mail,
  Code,
  FolderOpen,
  ArrowRight
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projectFeatures = [
    {
      title: "Automated Data Capture",
      desc: "Input deskripsi langsung men-trigger penomoran urut dan penanggalan otomatis menggunakan logic ArrayFormula.",
      icon: <Zap className="text-cyan-600" />
    },
    {
      title: "Dynamic Indexing Engine",
      desc: "Sistem cerdas yang menghasilkan kode arsip unik berdasarkan kategori, tahun-bulan, dan urutan transaksi otomatis.",
      icon: <Hash className="text-emerald-600" />
    },
    {
      title: "Multi-Path Digital Archiving",
      desc: "Integrasi cerdas yang memetakan transaksi ke 10+ folder Google Drive berbeda secara dinamis melalui formula IFS.",
      icon: <LinkIcon className="text-cyan-600" />
    }
  ];

  const techStack = [
    { name: "Google Sheets", color: "text-green-700", bg: "bg-green-100 border-green-200" },
    { name: "ArrayFormula", color: "text-blue-700", bg: "bg-blue-100 border-blue-200" },
    { name: "Regex Extract", color: "text-purple-700", bg: "bg-purple-100 border-purple-200" },
    { name: "Google Drive API", color: "text-yellow-700", bg: "bg-yellow-100 border-yellow-200" },
  ];

  const spreadsheetLink = "https://docs.google.com/spreadsheets/d/1i_t3G8EBR_vQpueLifXFqes_mih7KtZ1hgbaYCIRxGY/edit?gid=549792796#gid=549792796";
  const emailLink = "mailto:tanzilhuda1213@gmail.com";
  const portfolioLink = "https://myportofolioi.vercel.app/";
  const linkedinLink = "https://www.linkedin.com/in/mtanzilhuda/";

  return (
    <div className="min-h-screen bg-[#DCDCDC] text-slate-900 font-sans selection:bg-cyan-200 selection:text-cyan-900">
      
      {/* Background Gradients - Adjusted for Light Mode */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-cyan-400/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[600px] h-[600px] bg-emerald-400/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Fixed Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#DCDCDC]/90 backdrop-blur-lg border-b border-black/5 py-4 shadow-sm' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <a href={portfolioLink} className="flex items-center gap-2 text-sm font-medium hover:text-cyan-700 transition-all group text-slate-700">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1" />
            <span className="hidden sm:inline">kembali ke </span>dashboard
          </a>
          <div className="hidden md:block text-[10px] tracking-[0.3em] font-bold text-slate-400 uppercase">case study : Financial Automation</div>
        </div>
      </nav>

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-6xl mx-auto">
          
          {/* Project Header */}
          <header className="mb-24 relative">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <span className="h-px w-8 bg-cyan-600"></span>
              <span className="text-cyan-700 text-xs font-bold tracking-widest uppercase">Transaction & Financial Management</span>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight font-headline text-balance text-slate-900">
                Smart Ledger & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600">Automated Indexing.</span>
              </h1>
              
              <div className="flex flex-col gap-4">
                <a
                  href={spreadsheetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-white border border-black/10 hover:border-cyan-500 hover:bg-cyan-50 hover:text-cyan-700 transition-all text-sm font-semibold group shrink-0 text-slate-700 shadow-sm"
                >
                  View Live Spreadsheet <ExternalLink size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <div className="flex gap-2">
                   {techStack.map((tech) => (
                     <span key={tech.name} className={`px-3 py-1 text-[10px] font-medium rounded-full ${tech.bg} ${tech.color} border`}>
                       {tech.name}
                     </span>
                   ))}
                </div>
              </div>
            </div>

            <p className="max-w-2xl text-slate-600 text-lg md:text-xl leading-relaxed mt-8 border-l-2 border-slate-300 pl-6">
              Sebuah sistem manajemen transaksi mutakhir yang mengubah input manual yang berantakan menjadi database terstruktur dengan pengarsipan digital otomatis, mengurangi waktu administrasi hingga 60%.
            </p>
          </header>

          {/* Visual Mockup Section - Light Mode Spreadsheet */}
          <section className="mb-32">
             <div className="relative rounded-xl overflow-hidden border border-black/5 bg-white shadow-2xl shadow-slate-400/20 group">
                <div className="absolute top-0 left-0 w-full h-8 bg-gray-50 flex items-center px-4 gap-2 border-b border-gray-200">
                   <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                   </div>
                   <div className="ml-4 text-[10px] text-gray-400 font-mono">MyProject - Master Ledger.xlsx</div>
                </div>
                
                {/* Simulated Spreadsheet Grid */}
                <div className="pt-8 overflow-x-auto">
                   <div className="min-w-[800px] p-6">
                      <div className="grid grid-cols-[80px_1fr_120px_120px_1fr] gap-4 mb-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                         <div>No. ID</div>
                         <div>Date</div>
                         <div>Category</div>
                         <div>Amount</div>
                         <div>Auto-Generated Index</div>
                      </div>
                      
                      {/* Row 1 */}
                      <div className="grid grid-cols-[80px_1fr_120px_120px_1fr] gap-4 py-3 border-b border-gray-100 items-center hover:bg-gray-50 transition-colors group/row">
                         <div className="font-mono text-cyan-700 text-xs bg-cyan-50 px-2 py-1 rounded w-fit border border-cyan-100">#0042</div>
                         <div className="text-sm text-gray-700">2024-03-15</div>
                         <div><span className="bg-purple-100 text-purple-700 text-[10px] px-2 py-0.5 rounded border border-purple-200">Operational</span></div>
                         <div className="font-mono text-emerald-600">Rp 2.500.000</div>
                         <div className="font-mono text-xs text-gray-400 group-hover/row:text-slate-600 transition-colors">OPR-202403-0042-A</div>
                      </div>
                      
                       {/* Row 2 */}
                       <div className="grid grid-cols-[80px_1fr_120px_120px_1fr] gap-4 py-3 border-b border-gray-100 items-center hover:bg-gray-50 transition-colors group/row">
                         <div className="font-mono text-cyan-700 text-xs bg-cyan-50 px-2 py-1 rounded w-fit border border-cyan-100">#0043</div>
                         <div className="text-sm text-gray-700">2024-03-16</div>
                         <div><span className="bg-orange-100 text-orange-700 text-[10px] px-2 py-0.5 rounded border border-orange-200">Marketing</span></div>
                         <div className="font-mono text-emerald-600">Rp 750.000</div>
                         <div className="font-mono text-xs text-gray-400 group-hover/row:text-slate-600 transition-colors">MKT-202403-0043-B</div>
                      </div>

                       {/* Row 3 - Typing Effect */}
                       <div className="grid grid-cols-[80px_1fr_120px_120px_1fr] gap-4 py-3 border-b border-gray-100 items-center relative overflow-hidden bg-cyan-50/50">
                         <div className="font-mono text-cyan-700 text-xs bg-cyan-50 px-2 py-1 rounded w-fit border border-cyan-100">#0044</div>
                         <div className="text-sm text-gray-500">2024-03-18</div>
                         <div><span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded border border-blue-200">Software</span></div>
                         <div className="font-mono text-emerald-600">Rp 1.200.000</div>
                         <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-slate-700">SFT-202403-0044-A</span>
                            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                         </div>
                      </div>
                   </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute bottom-6 right-6 bg-white/80 backdrop-blur-md border border-emerald-200 shadow-lg px-4 py-2 rounded-lg flex items-center gap-3">
                   <div className="bg-emerald-500 rounded-full p-1">
                      <CheckCircle size={12} className="text-white" />
                   </div>
                   <div className="text-xs font-medium text-emerald-700">
                      Formula Active
                      <div className="text-[10px] text-emerald-600/60 font-mono">Processing...</div>
                   </div>
                </div>
             </div>
          </section>

          {/* Features Grid */}
          <section className="grid md:grid-cols-3 gap-6 mb-32">
            {projectFeatures.map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-black/5 hover:border-cyan-200 hover:shadow-lg hover:shadow-cyan-100 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center mb-6 group-hover:bg-cyan-50 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-slate-800">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </section>

          {/* Technical Deep Dive - The Logic */}
          <section className="mb-32">
            <div className="flex items-center gap-3 mb-10">
               <span className="h-px w-8 bg-emerald-500"></span>
               <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase">Under the Hood</span>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12">
               <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">Logic Formula yang <br/>Menjalankan Sistem.</h2>
                  <p className="text-slate-600 mb-8 leading-relaxed">
                     Kekuatan utama dari Smart Ledger ini terletak pada penggunaan <span className="text-slate-900 font-semibold">Nested Functions</span> dan <span className="text-slate-900 font-semibold">ArrayFormula</span>. Formula ini memastikan sistem tetap ringan (lightweight) meski menangani ribuan baris data, tanpa perlu script manual yang berat.
                  </p>

                  <div className="space-y-6">
                     <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 border border-blue-200">
                           <span className="font-mono text-sm font-bold text-blue-600">01</span>
                        </div>
                        <div>
                           <h4 className="font-bold mb-1 text-slate-800">Dynamic ID Generation</h4>
                           <p className="text-sm text-slate-500">Mendeteksi baris baru dan membuat ID unik otomatis tanpa drag-down manual.</p>
                        </div>
                     </div>
                     <div className="flex gap-4">
                        <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center shrink-0 border border-purple-200">
                           <span className="font-mono text-sm font-bold text-purple-600">02</span>
                        </div>
                        <div>
                           <h4 className="font-bold mb-1 text-slate-800">Folder Mapping Logic</h4>
                           <p className="text-sm text-slate-500">Mengubah kategori transaksi menjadi hyperlink dinamis yang mengarah ke folder spesifik.</p>
                        </div>
                     </div>
                  </div>
               </div>

               {/* Code Snippet Card - Keeping Dark for Contrast but fixing borders */}
               <div className="bg-[#1e1e1e] rounded-xl border border-black/10 shadow-xl p-6 font-mono text-xs overflow-hidden relative text-gray-300">
                  <div className="absolute top-4 right-4 text-gray-600 flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-white/10"></div>
                     <div className="w-3 h-3 rounded-full bg-white/10"></div>
                  </div>
                  <div className="text-emerald-400 mb-2">// Generate Unique Archive Code</div>
                  <div className="text-gray-400 mb-4 select-none">
                     =ARRAYFORMULA(IF(LEN(A2:A), <br/>
                     &nbsp;&nbsp;UPPER(LEFT(B2:B, 3)) & "-" & <br/>
                     &nbsp;&nbsp;TEXT(C2:C, "YYYYMM") & "-" & <br/>
                     &nbsp;&nbsp;TEXT(ROW(A2:A)-1, "0000"), <br/>
                     ""))
                  </div>
                  
                  <div className="h-px bg-white/10 my-4"></div>

                  <div className="text-cyan-400 mb-2">// Dynamic Folder Hyperlink</div>
                  <div className="text-gray-400 select-none">
                     =IFS(<br/>
                     &nbsp;&nbsp;E2="Marketing", HYPERLINK("drive.google.com/...", "📁 Open Folder"),<br/>
                     &nbsp;&nbsp;E2="Ops", HYPERLINK("drive.google.com/...", "📁 Open Folder"),<br/>
                     &nbsp;&nbsp;TRUE, "No Folder Assigned"<br/>
                     )
                  </div>
               </div>
            </div>
          </section>

          {/* Workflow Visualization */}
          <section className="bg-white rounded-3xl p-8 md:p-12 mb-24 relative overflow-hidden border border-black/5 shadow-sm">
             {/* Decorative Background */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-[80px]"></div>

             <h2 className="text-2xl font-bold mb-12 text-center text-slate-900">Process Workflow</h2>
             
             <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
                {/* Step 1 */}
                <div className="flex flex-col items-center text-center gap-4 group cursor-default">
                   <div className="w-16 h-16 rounded-2xl bg-gray-100 border border-gray-200 flex items-center justify-center group-hover:scale-110 group-hover:bg-white group-hover:shadow-md transition-all duration-300">
                      <Table className="text-slate-400 group-hover:text-slate-600" />
                   </div>
                   <div>
                      <h4 className="font-semibold text-sm text-slate-700">Raw Input</h4>
                      <p className="text-xs text-slate-500 mt-1">User inputs basic data</p>
                   </div>
                </div>

                <div className="hidden md:block h-px w-24 bg-gradient-to-r from-gray-200 via-cyan-400 to-gray-200"></div>
                <ArrowRight className="md:hidden text-gray-400 transform rotate-90 my-2" />

                {/* Step 2 */}
                 <div className="flex flex-col items-center text-center gap-4 group cursor-default">
                   <div className="w-16 h-16 rounded-2xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-300">
                      <Zap className="text-cyan-600" />
                   </div>
                   <div>
                      <h4 className="font-semibold text-sm text-cyan-700">Auto Processing</h4>
                      <p className="text-xs text-slate-500 mt-1">Formula generates ID & Links</p>
                   </div>
                </div>

                <div className="hidden md:block h-px w-24 bg-gradient-to-r from-gray-200 via-emerald-400 to-gray-200"></div>
                <ArrowRight className="md:hidden text-gray-400 transform rotate-90 my-2" />

                {/* Step 3 */}
                <div className="flex flex-col items-center text-center gap-4 group cursor-default">
                   <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center shadow-sm group-hover:scale-110 transition-all duration-300">
                      <FolderOpen className="text-emerald-600" />
                   </div>
                   <div>
                      <h4 className="font-semibold text-sm text-emerald-700">Smart Archive</h4>
                      <p className="text-xs text-slate-500 mt-1">Data mapped to Drive</p>
                   </div>
                </div>
             </div>
          </section>

          {/* Footer / Connect */}
          <footer className="border-t border-black/5 pt-16">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
               <div>
                  <h3 className="text-2xl font-bold mb-2 text-slate-900">Tertarik dengan sistem ini?</h3>
                  <p className="text-slate-600">Mari berdiskusi untuk implementasi di bisnis Anda.</p>
               </div>
               <div className="flex gap-4">
                  <a href={linkedinLink} className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-blue-600 hover:border-blue-600 transition-all text-slate-400 hover:text-white bg-white">
                     <Linkedin size={20} />
                  </a>
                  <a href={emailLink} className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-red-500 hover:border-red-500 transition-all text-slate-400 hover:text-white bg-white">
                     <Mail size={20} />
                  </a>
                  <a href={portfolioLink} className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all text-slate-400 bg-white">
                     <ExternalLink size={20} />
                  </a>
               </div>
            </div>
            <div className="text-center md:text-left text-xs text-slate-500 font-mono pb-8">
               © 2024 Tanzil Huda. Built with React & Tailwind.
            </div>
          </footer>

        </div>
      </main>
    </div>
  );
};

export default App;