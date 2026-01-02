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
  ArrowRight,
  AlertCircle,
  TrendingUp,
  BarChart3
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

  const problems = [
    {
      title: "Penomoran Arsip Tidak Konsisten",
      desc: "Sering terjadi tumpang tindih nomor dokumen atau format yang berubah-ubah antar departemen.",
      icon: <Hash className="text-red-500" />
    },
    {
      title: "Proses Rekapitulasi Lama",
      desc: "Sulit untuk melihat total pengeluaran per kategori secara cepat tanpa harus memfilter data satu per satu.",
      icon: <TrendingUp className="text-red-500" />
    },
    {
      title: "Pencarian Dokumen Lambat",
      desc: "Admin sering kehilangan waktu berharga hanya untuk mencari file bukti transaksi di tumpukan folder tak terstruktur.",
      icon: <FileSearch className="text-red-500" />
    }
  ];

  const techStack = [
    { name: "Google Sheets", color: "text-green-700", bg: "bg-green-100 border-green-200" },
    { name: "Pivot Tables", color: "text-orange-700", bg: "bg-orange-100 border-orange-200" },
    { name: "XLOOKUP", color: "text-blue-700", bg: "bg-blue-100 border-blue-200" },
    { name: "ArrayFormula", color: "text-purple-700", bg: "bg-purple-100 border-purple-200" },
    { name: "Google Drive Ecosystem", color: "text-yellow-700", bg: "bg-yellow-100 border-yellow-200" },
  ];

  const spreadsheetLink = "https://docs.google.com/spreadsheets/d/1i_t3G8EBR_vQpueLifXFqes_mih7KtZ1hgbaYCIRxGY/edit?gid=549792796#gid=549792796";
  const emailLink = "mailto:tanzilhuda1213@gmail.com";
  const portfolioLink = "https://myportofolioi.vercel.app/";
  const linkedinLink = "https://www.linkedin.com/in/mtanzilhuda/";

  return (
    <div className="min-h-screen bg-[#DCDCDC] text-slate-900 font-sans selection:bg-cyan-200 selection:text-cyan-900">
      
      {/* Background Gradients */}
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
          <header className="mb-20 relative">
            <div className="flex items-center gap-3 mb-6 animate-fade-in">
              <span className="h-px w-8 bg-cyan-600"></span>
              <span className="text-cyan-700 text-xs font-bold tracking-widest uppercase">SISTEM PENGARSIPAN TERPADU</span>
            </div>
            
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
              <h1 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight font-headline text-balance text-slate-900">
                Sistem Manajemen Kas & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-emerald-600">Dokumentasi Digital Terpusat</span>
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
                <div className="flex gap-2 flex-wrap">
                   {techStack.map((tech) => (
                     <span key={tech.name} className={`px-3 py-1 text-[10px] font-medium rounded-full ${tech.bg} ${tech.color} border whitespace-nowrap`}>
                       {tech.name}
                     </span>
                   ))}
                </div>
              </div>
            </div>

            <p className="max-w-3xl text-slate-600 text-lg leading-relaxed mt-8 border-l-2 border-slate-300 pl-6">
              Proyek ini saya kembangkan untuk menciptakan satu sistem kerja yang mampu menangani dua hal sekaligus: <b>pencatatan arus kas</b> (masuk/keluar) dan <b>pengorganisasian arsip digital</b> secara sistematis. Dengan sistem ini, setiap transaksi tidak hanya tercatat angkanya, tetapi juga langsung memiliki "alamat" arsip yang unik.
            </p>
          </header>

          {/* Problem Section */}
          <section className="mb-24">
            <h2 className="text-2xl font-bold mb-8 text-slate-800">Masalah yang Saya Pecahkan</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {problems.map((prob, idx) => (
                <div key={idx} className="bg-red-50/50 p-6 rounded-2xl border border-red-100 hover:border-red-200 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-white border border-red-100 flex items-center justify-center mb-4 shadow-sm">
                    {prob.icon}
                  </div>
                  <h3 className="font-bold text-slate-800 mb-2">{prob.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{prob.desc}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Solution & Mockup Section */}
          <section className="mb-32">
            <div className="flex flex-col md:flex-row justify-between items-end mb-8">
               <h2 className="text-2xl font-bold text-slate-800">Solusi & Visualisasi Sistem</h2>
               <div className="text-sm text-slate-500 font-medium">Gambaran Database Utama</div>
            </div>

             <div className="relative rounded-xl overflow-hidden border border-black/5 bg-white shadow-2xl shadow-slate-400/20 group mb-12">
                <div className="absolute top-0 left-0 w-full h-8 bg-gray-50 flex items-center px-4 gap-2 border-b border-gray-200">
                   <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-red-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400/80"></div>
                   </div>
                   <div className="ml-4 text-[10px] text-gray-400 font-mono">Central Database - Kas & Arsip.xlsx</div>
                </div>
                
                {/* Simulated Spreadsheet Grid */}
                <div className="pt-8 overflow-x-auto">
                   <div className="min-w-[900px] p-6">
                      <div className="grid grid-cols-[100px_1fr_120px_120px_160px_120px] gap-4 mb-4 text-xs font-bold text-gray-400 uppercase tracking-wider">
                         <div>Tanggal</div>
                         <div>Deskripsi</div>
                         <div>Kategori</div>
                         <div>Jumlah (IDR)</div>
                         <div>Kode Arsip (Auto)</div>
                         <div>Link Dokumen</div>
                      </div>
                      
                      {/* Row 1 */}
                      <div className="grid grid-cols-[100px_1fr_120px_120px_160px_120px] gap-4 py-3 border-b border-gray-100 items-center hover:bg-gray-50 transition-colors">
                         <div className="text-sm text-gray-700">2023-08-10</div>
                         <div className="text-sm font-medium text-slate-800">Pembelian Kertas A4</div>
                         <div><span className="bg-purple-100 text-purple-700 text-[10px] px-2 py-0.5 rounded border border-purple-200">Administrasi</span></div>
                         <div className="font-mono text-red-600">- 150.000</div>
                         <div className="font-mono text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded w-fit border border-slate-200">ADM-2023-08-001</div>
                         <div className="text-[10px] text-blue-600 underline cursor-pointer flex items-center gap-1"><FolderOpen size={10}/> Folder ADM</div>
                      </div>
                      
                       {/* Row 2 */}
                       <div className="grid grid-cols-[100px_1fr_120px_120px_160px_120px] gap-4 py-3 border-b border-gray-100 items-center hover:bg-gray-50 transition-colors">
                         <div className="text-sm text-gray-700">2023-08-12</div>
                         <div className="text-sm font-medium text-slate-800">Biaya Iklan Facebook</div>
                         <div><span className="bg-orange-100 text-orange-700 text-[10px] px-2 py-0.5 rounded border border-orange-200">Marketing</span></div>
                         <div className="font-mono text-red-600">- 500.000</div>
                         <div className="font-mono text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded w-fit border border-slate-200">MKT-2023-08-001</div>
                         <div className="text-[10px] text-blue-600 underline cursor-pointer flex items-center gap-1"><FolderOpen size={10}/> Folder MKT</div>
                      </div>

                       {/* Row 3 - Active Input */}
                       <div className="grid grid-cols-[100px_1fr_120px_120px_160px_120px] gap-4 py-3 border-b border-gray-100 items-center bg-cyan-50/30">
                         <div className="text-sm text-gray-500">2023-08-15</div>
                         <div className="text-sm font-medium text-slate-800">Service Printer Kantor</div>
                         <div><span className="bg-blue-100 text-blue-700 text-[10px] px-2 py-0.5 rounded border border-blue-200">Operasional</span></div>
                         <div className="font-mono text-red-600">- 200.000</div>
                         <div className="flex items-center gap-2">
                            <span className="font-mono text-xs text-slate-800 font-bold">OPS-2023-08-001</span>
                            <span className="inline-flex h-1.5 w-1.5 rounded-full bg-cyan-500 animate-pulse"></span>
                         </div>
                         <div className="text-[10px] text-gray-400 italic">Generating Link...</div>
                      </div>
                   </div>
                </div>
             </div>

             {/* Mini Pivot Mockup */}
             <div className="flex justify-end">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-lg max-w-md w-full">
                  <div className="flex items-center gap-2 mb-4 border-b border-slate-100 pb-2">
                    <BarChart3 className="w-4 h-4 text-slate-500" />
                    <span className="text-xs font-bold uppercase text-slate-500">Pivot Summary (Real-time)</span>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-600">Total Administrasi</span>
                      <span className="font-mono font-medium">- 150.000</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-600">Total Marketing</span>
                      <span className="font-mono font-medium">- 500.000</span>
                    </div>
                    <div className="h-px bg-slate-100 my-2"></div>
                    <div className="flex justify-between items-center font-bold text-slate-800">
                      <span>Total Pengeluaran</span>
                      <span className="text-red-600">- 850.000</span>
                    </div>
                  </div>
                </div>
             </div>
          </section>

          {/* Workflow Section */}
          <section className="mb-32">
             <div className="flex items-center gap-3 mb-10">
               <span className="h-px w-8 bg-emerald-500"></span>
               <span className="text-emerald-600 text-xs font-bold tracking-widest uppercase">Sistem & Alur Kerja</span>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center mb-4">
                  <Database className="text-cyan-700 w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">1. Database & Otomasi</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Minimasi input manual. Deskripsi transaksi memicu penomoran dan tanggal otomatis. Data validation menjamin konsistensi kategori.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="absolute top-0 right-0 w-20 h-20 bg-emerald-50 rounded-bl-full -mr-4 -mt-4"></div>
                <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center mb-4 relative z-10">
                  <Code className="text-emerald-700 w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2 relative z-10">2. Digital Indexing ("DNA")</h3>
                <p className="text-sm text-slate-600 leading-relaxed relative z-10">
                  Logika mesin menggabungkan Kode Transaksi, Periode, dan Nomor Urut (contoh: ADM-2023-08-001) sebagai identitas tunggal.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                  <FolderOpen className="text-purple-700 w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-800 mb-2">3. Navigasi Cerdas</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Setiap baris transaksi menyediakan link aktif yang mengarah langsung ke folder penyimpanan kategori tersebut (One-Click Access).
                </p>
              </div>
            </div>
          </section>

          {/* Technical Deep Dive */}
          <section className="mb-32 bg-[#1e1e1e] text-gray-300 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[100px]"></div>
            
            <h2 className="text-2xl font-bold mb-8 text-white relative z-10">Bedah Teknikal (Logika & Rumus)</h2>
            <div className="grid lg:grid-cols-2 gap-12 relative z-10">
              
              <div className="space-y-8">
                <div>
                  <h4 className="text-cyan-400 font-mono text-sm mb-2 font-bold flex items-center gap-2">
                    <Hash size={14}/> Otomasi Kode Arsip Unik
                  </h4>
                  <p className="text-sm mb-4 leading-relaxed text-gray-400">
                    Rumus ini melakukan tiga tugas sekaligus: mencari kode kategori, mencatat periode, dan menghitung nomor urut dokumen secara dinamis.
                  </p>
                  <div className="bg-black/30 p-4 rounded-lg border border-white/10 font-mono text-xs leading-relaxed text-emerald-300 overflow-x-auto">
                    =ARRAYFORMULA(IF(D2:D="";"";<br/>
                    &nbsp;&nbsp;XLOOKUP(C2:C;Ref_Data!A2:A;Ref_Data!B2:B)&"-"&<br/>
                    &nbsp;&nbsp;TEXT(B2:B;"YYYY-MM")&"-"&<br/>
                    &nbsp;&nbsp;TEXT(COUNTIFS(C2:C;C2:C;ROW(C2:C);"&lt;="&ROW(C2:C));"000")))
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                <div>
                  <h4 className="text-purple-400 font-mono text-sm mb-2 font-bold flex items-center gap-2">
                    <LinkIcon size={14}/> Navigasi Link Arsip Dinamis
                  </h4>
                  <p className="text-sm mb-4 leading-relaxed text-gray-400">
                    Menghubungkan database dengan penyimpanan cloud secara instan, memangkas waktu pencarian folder dari hitungan menit menjadi sekali klik.
                  </p>
                  <div className="bg-black/30 p-4 rounded-lg border border-white/10 font-mono text-xs leading-relaxed text-blue-300 overflow-x-auto">
                    =IFS(<br/>
                    &nbsp;&nbsp;C2=Ref_Data!$A$4;HYPERLINK("LINK_FOLDER_A";"BUKA FOLDER");<br/>
                    &nbsp;&nbsp;C2=Ref_Data!$A$5;HYPERLINK("LINK_FOLDER_B";"BUKA FOLDER");<br/>
                    &nbsp;&nbsp;TRUE;"Wait..."<br/>
                    )
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Impact Section */}
          <section className="mb-24">
             <h2 className="text-2xl font-bold mb-8 text-slate-800 text-center">Dampak Positif bagi Administrasi</h2>
             <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-6 border-b-2 border-transparent hover:border-cyan-500 transition-colors">
                   <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-cyan-100 text-cyan-600 mb-4 font-bold">1</div>
                   <h3 className="font-bold text-lg mb-2 text-slate-800">Tertib Administrasi</h3>
                   <p className="text-slate-600 text-sm">Menciptakan standar penomoran arsip yang seragam dan profesional (Zero-Overlap).</p>
                </div>
                <div className="text-center p-6 border-b-2 border-transparent hover:border-emerald-500 transition-colors">
                   <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 mb-4 font-bold">2</div>
                   <h3 className="font-bold text-lg mb-2 text-slate-800">Aksesibilitas Tinggi</h3>
                   <p className="text-slate-600 text-sm">Dokumen pendukung dapat diakses dalam hitungan detik melalui sistem link terintegrasi.</p>
                </div>
                <div className="text-center p-6 border-b-2 border-transparent hover:border-purple-500 transition-colors">
                   <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 text-purple-600 mb-4 font-bold">3</div>
                   <h3 className="font-bold text-lg mb-2 text-slate-800">Data-Driven Admin</h3>
                   <p className="text-slate-600 text-sm">Mengubah peran dari "pencatat" menjadi penyedia data analisis bagi pimpinan melalui dashboard.</p>
                </div>
             </div>
          </section>

          {/* Footer */}
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