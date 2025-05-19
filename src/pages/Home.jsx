import { useState } from 'react';
import { Link } from 'react-router-dom';

const articles = [
  {
    title: "5 Tips Sukses Mencari Kerja di Era Digital",
    excerpt:
      "Optimalkan CV digital, bangun personal branding di LinkedIn, aktif di komunitas online, dan jangan ragu eksplorasi peluang kerja remote. Temukan tips selengkapnya untuk memperbesar peluangmu!",
    content: `
1. Perbarui CV Secara Digital  
Gunakan template modern dan selalu update dengan pengalaman terbaru.  
2. Bangun Personal Branding di LinkedIn  
Tampilkan pencapaian dan aktivitas profesional secara konsisten di LinkedIn.  
3. Bergabung dengan Komunitas Online  
Networking di grup Facebook, Telegram, atau Slack bisa membuka banyak peluang.  
4. Cari Info Lowongan Kerja Remote  
Jangan batasi diri pada lowongan lokal. Pekerjaan remote kini semakin banyak.  
5. Latihan Interview Online  
Persiapkan diri untuk interview via video call agar makin percaya diri.  
    `,
    image:
      "https://images.unsplash.com/photo-1515168833906-d2a3b82b9bc2?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Cara Membuat CV yang Menarik di Mata Rekruter",
    excerpt:
      "CV adalah langkah pertamamu menuju pekerjaan impian. Ketahui struktur CV modern, kata kunci penting, dan kesalahan umum yang wajib dihindari.",
    content: `
Pastikan CV maksimal 2 halaman, gunakan format PDF, dan masukkan kata kunci sesuai posisi yang dilamar.  
Hindari typo, gunakan email profesional, dan sertakan portofolio jika ada.  
Tambahkan ringkasan singkat tentang diri di bagian atas CV.  
    `,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Rahasia Lolos Interview Online",
    excerpt:
      "Latihan menjawab pertanyaan umum, perhatikan gesture di depan kamera, dan pastikan koneksi internet stabil. Persiapan matang adalah kunci sukses interview online.",
    content: `
- Pilih tempat yang tenang, pencahayaan cukup, dan background rapi.  
- Gunakan headset jika perlu, cek koneksi internet sebelum interview.  
- Siapkan jawaban pertanyaan klasik seperti “Ceritakan tentang diri Anda” atau “Kenapa kami harus memilih Anda?”.  
- Tersenyum dan tetap percaya diri selama interview berlangsung.  
    `,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Kenali Skill yang Paling Dicari Perusahaan 2025",
    excerpt:
      "Data terbaru menunjukkan skill digital, komunikasi, dan problem solving adalah yang paling dibutuhkan tahun ini. Cek daftarnya di sini!",
    content: `
- Kemampuan analisa data dengan tools (Excel, Tableau, Google Data Studio)  
- Digital marketing & social media analytics  
- Bahasa pemrograman (JavaScript, Python, Go)  
- Problem solving & critical thinking  
- Soft skill: komunikasi, teamwork, leadership  
    `,
    image:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Fresh Graduate? Ini Strategi Jitu Masuk Dunia Kerja",
    excerpt:
      "Mulai dari internship, freelance, hingga networking aktif. Simak langkah-langkah efektif agar cepat diterima kerja setelah lulus.",
    content: `
- Manfaatkan program magang dan volunteer untuk pengalaman  
- Perbanyak relasi lewat event kampus atau webinar  
- Perbaiki profil LinkedIn dan upload portofolio  
- Belajar interview & CV review lewat komunitas  
- Jangan ragu apply meski pengalaman minim  
    `,
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Kesalahan Fatal Saat Melamar Kerja, Jangan Diulangi!",
    excerpt:
      "Dari email tidak profesional, isi CV tidak relevan, hingga etika interview yang buruk. Hindari agar peluangmu semakin besar.",
    content: `
- Mengirim CV tanpa subjek email yang jelas  
- Tidak mencantumkan kontak yang aktif  
- Tidak riset perusahaan sebelum interview  
- Datang terlambat atau kurang persiapan saat interview  
- Tidak follow up setelah interview selesai  
    `,
    image:
      "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  }
];

const partnerLogos = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg", alt: "Microsoft" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Logo_Telkom_Indonesia.svg", alt: "Telkom Indonesia" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_Bank_BRI.png", alt: "Bank BRI" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/5/5e/Logo_BNI.png", alt: "Bank BNI" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/9/95/Logo_Google_2013_Official.svg", alt: "Google" },
];

const testimonials = [
  {
    quote: "Lewat JobSeeker saya mendapat kerja impian hanya dalam 2 minggu!",
    name: "Rina, Bandung",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    quote: "Kami menemukan banyak kandidat berkualitas dengan cepat.",
    name: "HRD PT Maju Jaya",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/45.jpg"
  },
  {
    quote: "Fitur notifikasi sangat membantu, info lowongan selalu update.",
    name: "Bagus, Surabaya",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
];

const stats = [
  { value: "20.000+", label: "Lowongan Aktif" },
  { value: "8.200+", label: "Perusahaan" },
  { value: "120.000+", label: "Member Bergabung" },
];

const faqs = [
  {
    question: "Apakah JobSeeker gratis?",
    answer: "Ya, JobSeeker 100% gratis untuk para pencari kerja. Perusahaan dapat memposting lowongan secara gratis maupun berbayar untuk fitur premium."
  },
  {
    question: "Bagaimana cara melamar pekerjaan?",
    answer: "Cukup daftar akun, lengkapi profil, lalu klik tombol 'Lamar' pada lowongan yang kamu minati."
  },
  {
    question: "Apakah ada fitur konsultasi karier?",
    answer: "Ya! Kamu bisa konsultasi karier gratis dengan mentor melalui fitur chat di dashboard."
  }
];

// Data visualisasi lokasi pekerjaan populer di Indonesia
const jobDemandMap = [
  {
    city: "Jakarta",
    jobs: "IT, Digital Marketing, Finance, Sales",
    icon: "🗼",
    color: "bg-indigo-100"
  },
  {
    city: "Bandung",
    jobs: "Creative Industry, Software Development, DKV",
    icon: "🌄",
    color: "bg-green-100"
  },
  {
    city: "Surabaya",
    jobs: "Engineer, Logistics, Customer Service",
    icon: "🌉",
    color: "bg-yellow-100"
  },
  {
    city: "Yogyakarta",
    jobs: "Education, Startup, Content Writer",
    icon: "🎓",
    color: "bg-pink-100"
  },
  {
    city: "Semarang",
    jobs: "Manufacturing, Admin, HR",
    icon: "🏭",
    color: "bg-purple-100"
  },
  {
    city: "Denpasar",
    jobs: "Hospitality, Tourism, IT Support",
    icon: "🏝️",
    color: "bg-blue-100"
  },
];

function Rating({ value = 5 }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`Rating: ${value} of 5`}>
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} className={`w-5 h-5 ${i <= value ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z" />
        </svg>
      ))}
    </div>
  );
}

const Home = () => {
  const [openArticle, setOpenArticle] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <main className="min-h-screen flex flex-col items-center bg-gradient-to-br from-indigo-100 via-white to-indigo-200 px-2 py-10">
      {/* HERO */}
      <section className="max-w-2xl w-full bg-white/90 rounded-3xl shadow-2xl p-10 flex flex-col items-center text-center mb-10">
        <div className="mb-8">
          {/* Hero illustration */}
          <svg
            className="mx-auto w-32 h-32 text-indigo-200"
            fill="none"
            viewBox="0 0 96 96"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="15" y="30" width="66" height="36" rx="4" className="stroke-indigo-400" />
            <path d="M25 44h46M25 52h46" className="stroke-indigo-300" strokeWidth="2" />
            <circle cx="32" cy="38" r="2" className="fill-indigo-300" />
            <circle cx="64" cy="58" r="2" className="fill-indigo-300" />
          </svg>
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-700 mb-5 tracking-tight">
          Welcome to JobSeeker
        </h1>
        <p className="text-xl text-gray-700 mb-8">
          Find your dream job or the perfect candidate for your company.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
          <Link
            to="/jobs"
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-indigo-600 text-white font-semibold text-lg shadow hover:bg-indigo-700 transition"
          >
            Browse Jobs
          </Link>
          <Link
            to="/register"
            className="w-full sm:w-auto px-8 py-3 rounded-lg bg-indigo-100 text-indigo-700 font-semibold text-lg shadow hover:bg-indigo-200 transition"
          >
            Register
          </Link>
        </div>
      </section>

      {/* Artikel / Tips Section */}
      <section className="max-w-5xl w-full mt-4">
        <h2 className="text-3xl font-bold text-indigo-800 text-center mb-6">Tips & Artikel Seputar Karier</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {articles.map((art, idx) => (
            <div
              key={idx}
              className="bg-white/90 rounded-2xl shadow-lg p-5 flex flex-col items-start hover:shadow-2xl transition relative"
            >
              <img src={art.image} alt={art.title} className="w-full h-40 object-cover rounded-xl mb-4 bg-gray-100" />
              <h3 className="text-xl font-semibold text-indigo-700 mb-2">{art.title}</h3>
              <p className="text-gray-600 mb-4">{art.excerpt}</p>
              <button
                onClick={() => setOpenArticle(idx)}
                className="mt-auto text-indigo-600 font-medium hover:underline transition"
              >
                Baca Selengkapnya
              </button>
              {/* Modal/Overlay for Full Article */}
              {openArticle === idx && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
                  <div className="bg-white w-full max-w-lg rounded-xl shadow-2xl p-8 relative overflow-y-auto max-h-[90vh]">
                    <button
                      onClick={() => setOpenArticle(null)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-indigo-600 text-2xl font-bold"
                      aria-label="Tutup"
                    >
                      &times;
                    </button>
                    <img src={art.image} alt={art.title} className="w-full h-48 object-cover rounded-xl mb-4 bg-gray-100" />
                    <h3 className="text-2xl font-bold text-indigo-700 mb-3">{art.title}</h3>
                    <div className="text-gray-700 whitespace-pre-line text-base mb-3">
                      {art.content}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16" />

      {/* Visualisasi Lokasi Pekerjaan Populer */}
      <section className="max-w-5xl w-full mb-16">
        <h3 className="text-2xl font-bold text-indigo-800 mb-6 text-center">
          Lokasi & Profesi Paling Dibutuhkan di Indonesia
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {jobDemandMap.map((loc, i) => (
            <div
              key={i}
              className={`rounded-2xl shadow-lg p-5 flex flex-col items-center ${loc.color} border border-indigo-100`}
            >
              <div className="text-4xl mb-2">{loc.icon}</div>
              <div className="font-bold text-indigo-700 text-lg mb-1">{loc.city}</div>
              <div className="text-gray-600 text-center text-sm mb-1">{loc.jobs}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16" />

      {/* Testimoni & Rating */}
      <section className="max-w-5xl w-full">
        <h3 className="text-2xl font-bold text-indigo-800 mb-4 text-center">Cerita Sukses Pengguna</h3>
        <div className="flex flex-col md:flex-row gap-8 mb-10">
          {testimonials.map((item, i) => (
            <div className="bg-white rounded-xl shadow p-6 flex-1 flex flex-col items-center" key={i}>
              <img src={item.avatar} alt={item.name} className="w-16 h-16 rounded-full mb-3 object-cover border-2 border-indigo-200" />
              <Rating value={item.rating} />
              <p className="italic mb-2 mt-2 text-center">"{item.quote}"</p>
              <span className="block text-sm font-semibold text-indigo-700">{item.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16" />

      {/* Statistik */}
      <section className="max-w-5xl w-full">
        <div className="flex flex-col sm:flex-row justify-center gap-16 mb-10">
          {stats.map((stat, idx) => (
            <div className="text-center" key={idx}>
              <div className="text-3xl font-bold text-indigo-700">{stat.value}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16" />

      {/* Newsletter */}
      <section className="max-w-xl w-full mb-10">
        <div className="bg-indigo-50 rounded-2xl p-6 flex flex-col items-center">
          <h4 className="font-semibold text-lg mb-2 text-indigo-800">Dapatkan info lowongan terbaru!</h4>
          <form className="flex flex-col sm:flex-row gap-2 w-full justify-center">
            <input type="email" placeholder="Alamat Email Anda" className="input input-bordered w-full" />
            <button type="submit" className="btn btn-primary">Langganan</button>
          </form>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16" />

      {/* Partner/Logo */}
      <section className="max-w-5xl w-full mb-10">
        <h4 className="text-xl font-semibold text-indigo-800 mb-2 text-center">Dipercaya oleh perusahaan ternama</h4>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {partnerLogos.map((p, i) => (
            <img src={p.src} alt={p.alt} className="h-10 max-w-xs object-contain bg-white p-1 rounded" key={i} />
          ))}
          <span className="text-gray-500">dan lainnya...</span>
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16" />

      {/* FAQ */}
      <section className="max-w-3xl w-full mb-10">
        <h4 className="text-xl font-semibold text-indigo-800 mb-4 text-center">FAQ</h4>
        <div className="space-y-3">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow p-4">
              <button
                className="font-medium text-indigo-700 flex justify-between items-center w-full"
                onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
              >
                {faq.question}
                <span>{openFaq === idx ? '-' : '+'}</span>
              </button>
              {openFaq === idx && (
                <div className="mt-2 text-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Spacer */}
      <div className="h-16" />

      {/* Social Media */}
      <section className="max-w-5xl w-full mb-4">
        <div className="flex justify-center gap-6">
          <a href="#" className="text-indigo-600 hover:text-indigo-800 text-2xl" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-indigo-600 hover:text-indigo-800 text-2xl" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-indigo-600 hover:text-indigo-800 text-2xl" aria-label="Facebook">
            <i className="fab fa-facebook"></i>
          </a>
        </div>
      </section>
    </main>
  );
};

export default Home;