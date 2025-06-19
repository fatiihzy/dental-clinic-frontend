import { Head, Link } from '@inertiajs/react';
import { useState, useEffect, useRef } from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import BookingPopup from '../Components/BookingPopup';
import ChatbotPopup from '../Components/ChatbotPopup';

export default function Welcome({ auth }) {
    const [activeTestimonial, setActiveTestimonial] = useState(0);
    const [currentEdu, setCurrentEdu] = useState(0);
    const [showAllServices, setShowAllServices] = useState(false);
    const [showBookingPopup, setShowBookingPopup] = useState(false);
    const [showChatbotPopup, setShowChatbotPopup] = useState(false);

    // Auto rotate testimonials
    useEffect(() => {
        const interval = setInterval(() => {
            setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Auto rotate educational content
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentEdu((prev) => (prev + 1) % eduContent.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    const [doctors] = useState([
        {
            name: "drg. Fadlianur, S.Kg",
            specialty: "Dokter Gigi Umum",
            image: "https://via.placeholder.com/150",
            description: "Spesialis dalam perawatan gigi umum dengan pendekatan yang teliti dan ramah."
        },
        {
            name: "drg. Wiwik Widya Praja, S.Kg",
            specialty: "Dokter Gigi Umum",
            image: "https://via.placeholder.com/150",
            description: "Ahli dalam berbagai perawatan gigi dengan pengalaman yang komprehensif."
        }
    ]);

    const [services] = useState([
        {
            name: "Kontrol Rutin",
            description: "Pemeriksaan berkala untuk menjaga kesehatan gigi dan mulut Anda.",
            icon: "🔍"
        },
        {
            name: "Pencabutan Gigi",
            description: "Pencabutan gigi yang bermasalah dengan teknik yang minim rasa sakit.",
            icon: "🦷"
        },
        {
            name: "Scalling / Pembersihan Karang Gigi",
            description: "Membersihkan plak dan karang gigi untuk kesehatan mulut yang optimal.",
            icon: "✨"
        },
        {
            name: "Penambalan Gigi",
            description: "Restorasi gigi yang rusak dengan bahan tambalan berkualitas tinggi.",
            icon: "🔧"
        },
        {
            name: "Pemasangan Behel",
            description: "Pasang behel dan perawatan ortodontik untuk susunan gigi yang lebih rapi.",
            icon: "🦷"
        },
        {
            name: "Pembuatan Mahkota/Crown",
            description: "Restorasi mahkota gigi yang rusak dengan crown yang alami dan kuat.",
            icon: "👑"
        },
        {
            name: "Veneer Gigi",
            description: "Tambalan gigi depan yang estetik untuk senyum lebih percaya diri.",
            icon: "✨"
        },
        {
            name: "Bleaching Gigi",
            description: "Pemutihan gigi profesional untuk senyum yang lebih cerah dan bersinar.",
            icon: "💎"
        },
        {
            name: "Perawatan Syaraf Gigi",
            description: "Penanganan masalah saraf gigi dengan teknologi modern dan nyaman.",
            icon: "🔬"
        },
        {
            name: "Pemasangan Gigi Palsu",
            description: "Solusi pengganti gigi yang hilang dengan gigi palsu yang nyaman dan alami.",
            icon: "🦷"
        }
    ]);

    const [testimonials] = useState([
        {
            text: "suka bgt sama semua pelayanannya, apalagi dokternya ramah,baik dan kompeten bgt, puas bgt sama hasilnyaa🫶🏻, ayoo guys yang area perintis dan sekitarnya percayakan perawatan gigi anda di Gigita Dental Care😍",
            name: "Runi Indriani",
            title: "Pasien",
            rating: 5
        },
        {
            text: "Suka sekali dengan pelayanannya..dokter dan perawatnya juga ramah sekali, tempat nya juga bersih, masyaAllah🥰🥰 saya rekomendasikan kepada saudaraku yang ada keluhan masalah gigi.",
            name: "Kismawati",
            title: "Pasien",
            rating: 5
        },
        {
            text: "pelayanannya cepat dan sangat baikk, dokternya sangat ramah menjelaskan setiap stepnya padahal saya cuma ganti karet behel😍 sering ngadain promo juga🤩 sangat recommended✨✨",
            name: "Dhea Faraditha Anggriani",
            title: "Pasien",
            rating: 5
        }
    ]);

    const [eduContent] = useState([
        {
            title: "KARANG GIGI",
            content: "KARANG GIGI adalah plak di gigi yang mengeras dan tidak bisa dihilangkan hanya dengan menyikat gigi. Karang gigi yang menumpuk akan menyebabkan bau mulut dan peradangan pada gusi.",
            image: "/images/karang-gigi.png"
        },
        {
            title: "KESEHATAN GIGI",
            content: "Jangan lupa periksakan gigi kalian ke dokter gigi minimal 6 bulan sekali untuk menjaga kesehatan gigi dan mencegah masalah gigi yang lebih serius.",
            image: "/images/kesehatan-gigi.png"
        },
        {
            title: "PERAWATAN RUTIN",
            content: "Pembersihan gigi rutin membantu mencegah masalah gigi dan gusi. Rutinitas sikat gigi 2x sehari dan flossing membantu mencegah plak dan karang gigi.",
            image: "/images/perawatan-rutin.png"
        },
        {
            title: "DIET SEHAT",
            content: "Batasi makanan manis dan minuman bersoda. Konsumsi makanan kaya kalsium dan vitamin D untuk menjaga kesehatan gigi dan gusi Anda.",
            image: "/images/diet-sehat.png"
        }
    ]);

    return (
        <div className="bg-gradient-to-b from-[#F8F0EA] to-white min-h-screen overflow-hidden">
            <Head title="Gigita Dental Care - Klinik Gigi Makassar" />
            {/* Add a fixed navbar with proper z-index */}
            <div className="sticky top-0 z-50 w-full">
                <Navbar />
            </div>

            {/* Add a spacer div to prevent content from being hidden under navbar */}
            <div className="h-32"></div> {/* Increased spacer height */}

            {/* Hero Section - Angled design with overlapping elements */}
            <section id="top" className="relative pt-16 pb-16 px-6 md:px-20 overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full bg-[#F5E6DC] transform -skew-y-6 origin-top-right -z-10"></div>
                <div className="absolute top-20 right-10 w-32 h-32 bg-[#A67C52] rounded-full opacity-10"></div>
                <div className="absolute bottom-10 left-10 w-24 h-24 bg-[#A67C52] rounded-full opacity-10"></div>

                <div className="flex flex-col md:flex-row items-center justify-between relative z-10 max-w-7xl mx-auto">
                    <div className="text-left md:w-1/2 mb-10 md:mb-0">
                        <h1 className="text-5xl font-serif italic font-bold text-[#7B5D4F]">Kesehatan gigi,<br />kesehatan anda</h1>
                        <p className="mt-6 text-lg text-[#7B5D4F]/80 max-w-md">Perawatan gigi terbaik dengan teknologi modern dan dokter berpengalaman di Makassar.</p>
                        <div className="mt-8 flex flex-wrap gap-4">
                            <button
                                onClick={() => setShowBookingPopup(true)}
                                className="inline-block bg-[#A67C52] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#7B5D4F] transition shadow-lg transform hover:-translate-y-1 hover:shadow-xl"
                            >
                                Buat Janji Temu
                            </button>
                            <button
                                onClick={() => setShowAllServices(true)}
                                className="inline-block bg-white text-[#A67C52] border-2 border-[#A67C52] px-8 py-3 rounded-full font-semibold hover:bg-[#F5E6DC] transition"
                            >
                                Layanan Kami
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 relative">
                        <div className="absolute -top-6 -left-6 w-full h-full bg-[#A67C52]/20 rounded-3xl transform -rotate-6"></div>
                        <div className="rounded-3xl shadow-xl overflow-hidden bg-white h-80 relative">
                            <ImageWithFallback
                                src="/fotoklinik.jpg"
                                fallbackSrc="https://via.placeholder.com/800x500?text=Gigita+Dental+Care"
                                alt="Gigita Dental Care Makassar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#A67C52]/30 rounded-full"></div>
                    </div>
                </div>
            </section>


            {/* Educational Content Section - Interactive carousel */}
            <section id="education" className="py-20 px-6 md:px-20 bg-white relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#F8F0EA] to-white"></div>
                <div className="absolute -top-16 -right-16 w-64 h-64 bg-[#A67C52]/10 rounded-full"></div>
                <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-[#A67C52]/5 rounded-full"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <span className="inline-block bg-[#F5E6DC] text-[#A67C52] px-4 py-1 rounded-full text-sm font-medium mb-2">Edukasi Kesehatan Gigi</span>
                        <h2 className="text-4xl font-serif italic font-semibold text-[#7B5D4F] mb-4">
                            EDUKASI GIGITA'
                        </h2>
                        <p className="text-[#7B5D4F]/80 max-w-2xl mx-auto">Informasi penting untuk menjaga kesehatan gigi dan mulut Anda</p>
                    </div>

                    <div className="relative">
                        <div className="overflow-hidden">
                            <div className="relative h-96 transition-all duration-700" style={{ transform: `translateX(-${currentEdu * 100}%)` }}>
                                <div className="absolute inset-0 flex">
                                    {eduContent.map((item, index) => (
                                        <div key={index} className="w-full flex-shrink-0 flex flex-col md:flex-row items-center gap-8 px-4">
                                            <div className="md:w-1/2">
                                                <div className="bg-[#F5E6DC] p-8 rounded-3xl shadow-lg transform -rotate-2 hover:rotate-0 transition duration-300">
                                                    <div className="w-32 h-32 bg-white rounded-full flex items-center justify-center mx-auto mb-6">
                                                        <span className="text-5xl">🦷</span>
                                                    </div>
                                                    <h3 className="text-2xl font-bold text-[#7B5D4F] mb-4">{item.title}</h3>
                                                    <p className="text-[#7B5D4F]">{item.content}</p>
                                                </div>
                                            </div>
                                            <div className="md:w-1/2 flex justify-center">
                                                <div className="bg-white p-6 rounded-3xl shadow-lg transform rotate-2 hover:rotate-0 transition duration-300 border-2 border-[#A67C52]/20">
                                                    <div className="w-full h-48 bg-[#F5E6DC] rounded-2xl flex items-center justify-center">
                                                        <span className="text-6xl">🦷</span>
                                                    </div>
                                                    <div className="mt-4 text-center">
                                                        <h4 className="font-medium text-[#A67C52]">Tahukah Anda?</h4>
                                                        <p className="text-[#7B5D4F] text-sm mt-2">Perawatan gigi rutin dapat mencegah masalah serius di kemudian hari.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Navigation dots */}
                        <div className="flex justify-center gap-2 mt-6">
                            {eduContent.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentEdu(index)}
                                    className={`w-3 h-3 rounded-full transition-all ${currentEdu === index ? 'bg-[#A67C52] w-6' : 'bg-[#A67C52]/30'}`}
                                    aria-label={`View slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section - Asymmetric design */}
            <section id="about" className="py-20 px-6 md:px-20 bg-gradient-to-br from-[#F5E6DC] via-white to-[#F5E6DC]/30 relative">
                <div className="absolute top-0 right-0 w-64 h-64 bg-[#A67C52]/10 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#A67C52]/10 rounded-full transform -translate-x-1/4 translate-y-1/4"></div>

                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2 relative order-2 md:order-1">
                            <div className="absolute -top-6 -right-6 w-full h-full bg-[#A67C52]/20 rounded-3xl transform rotate-3"></div>
                        <div className="rounded-3xl shadow-xl overflow-hidden bg-white h-80 relative">
                            <ImageWithFallback
                                src="/fotoklinik2.jpg"
                                fallbackSrc="https://via.placeholder.com/800x500?text=Gigita+Dental+Care"
                                alt="Gigita Dental Care Makassar"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 w-28 h-28 bg-[#A67C52] rounded-full opacity-20"></div>
                        </div>

                        <div className="md:w-1/2 order-1 md:order-2">
                            <span className="inline-block bg-white text-[#A67C52] px-4 py-1 rounded-full text-sm font-medium mb-4">Tentang Kami</span>
                            <h2 className="text-4xl font-serif italic font-semibold text-[#7B5D4F] mb-6">
                                Klinik Gigi Modern di Makassar
                            </h2>
                            <div className="space-y-4 text-[#7B5D4F]/80">
                                <p>
                                    Selamat datang di Gigita Dental Care, tempat anda dapat menemukan solusi untuk kesehatan gigi yang optimal. Kami hadir untuk memberikan layanan kedokteran gigi yang berkualitas, modern, dan terjangkau.
                                </p>
                                <p>
                                    Kami memiliki tim dokter gigi yang berpengalaman dan fasiliitas modern untuk memastikan setiap pasien mendapatkan perawatan terbaik dalam lingkungan yang nyaman.
                                </p>
                                <p>
                                    Keramahan dan kenyamanan pasien adalah prioritas utama kami, karena kami percaya bahwa perawatan gigi tidak harus menjadi pengalaman yang menakutkan.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

           {/* Our Doctors/Team Section - Level display without backgrounds */}
<section id="doctors" className="py-20 px-6 md:px-20 bg-white">
    <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
            <h2 className="text-4xl font-serif italic font-semibold text-[#7B5D4F] mb-4">
                Tim Dokter Kami
            </h2>
            <p className="text-[#7B5D4F]/80 max-w-2xl mx-auto">Dokter-dokter berkualitas dan berpengalaman siap melayani kesehatan gigi Anda</p>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            {doctors.map((doctor, index) => (
                <div
                    key={index}
                    className="md:w-1/2"
                >
                    <div className="bg-white p-8 rounded-xl shadow-sm border border-[#A67C52]/10">
                        <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6">
                            <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
                        </div>
                        <div className="text-center">
                            <h3 className="text-2xl font-bold text-[#7B5D4F] mb-2">{doctor.name}</h3>
                            <div className="inline-block bg-[#F5E6DC] text-[#A67C52] px-3 py-1 rounded-full text-sm font-medium mb-4">
                                {doctor.specialty}
                            </div>
                            <p className="text-[#7B5D4F]/80">{doctor.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
</section>

            {/* Services Section - Interactive and visual */}
            <section id="services" className="py-20 px-6 md:px-20 bg-gradient-to-tl from-[#F5E6DC] via-white to-[#F5E6DC] relative">
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#A67C52]/10 rounded-full transform translate-x-1/3 translate-y-1/3"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-white text-[#A67C52] px-4 py-1 rounded-full text-sm font-medium mb-2">Perawatan Berkualitas</span>
                        <h2 className="text-4xl font-serif italic font-semibold text-[#7B5D4F] mb-4">
                            Layanan Kami
                        </h2>
                        <p className="text-[#7B5D4F]/80 max-w-2xl mx-auto">Berbagai layanan perawatan gigi untuk menjaga kesehatan dan keindahan senyuman Anda</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {services.slice(0, 4).map((service, index) => (
                            <div
                                key={index}
                                className="group bg-white p-8 rounded-3xl shadow-md hover:shadow-xl transition border border-[#A67C52]/10 text-center transform hover:-translate-y-2 duration-300 hover:bg-gradient-to-b hover:from-white hover:to-[#F5E6DC]"
                            >
                                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-[#F5E6DC] flex items-center justify-center group-hover:bg-white transition">
                                    <div className="text-4xl text-[#A67C52]">{service.icon}</div>
                                </div>
                                <h3 className="text-xl font-bold text-[#7B5D4F] mb-3 group-hover:text-[#A67C52] transition">{service.name}</h3>
                                <p className="text-[#7B5D4F]/80 mb-6">{service.description}</p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <button
                            onClick={() => setShowAllServices(true)}
                            className="inline-block bg-[#A67C52] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#7B5D4F] transition shadow-md"
                        >
                            Lihat Semua Layanan
                        </button>
                    </div>
                </div>
            </section>

            {/* Location Section - Integrated design */}
            <section id="location" className="py-20 px-6 md:px-20 bg-white relative">
                <div className="absolute top-0 left-0 w-full h-24 bg-white"></div>

                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="flex flex-col md:flex-row items-stretch gap-8">
                        <div className="md:w-2/3 bg-[#F5E6DC] p-8 rounded-3xl shadow-lg">
                            <div className="mb-6">
                                <span className="inline-block bg-white text-[#A67C52] px-4 py-1 rounded-full text-sm font-medium mb-2">Lokasi Kami</span>
                                <h2 className="text-3xl font-serif italic font-semibold text-[#7B5D4F]">
                                    Kunjungi Kami di Makassar
                                </h2>
                            </div>

                            <div className="bg-white rounded-2xl shadow-md h-80 w-full overflow-hidden">
                                {/* Google Maps Embed */}
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3973.719701518321!2d119.48988047476598!3d-5.14893535311536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dbee33a0c83c97b%3A0xad67d5c1cb0e2c03!2sJl.%20Perintis%20Kemerdekaan%20III%20No.4%2C%20Tamalanrea%20Indah%2C%20Kec.%20Tamalanrea%2C%20Kota%20Makassar%2C%20Sulawesi%20Selatan%2090245!5e0!3m2!1sid!2sid!4v1715990287835!5m2!1sid!2sid"
                                    width="100%"
                                    height="100%"
                                    style={{border: 0}}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        <div className="md:w-1/3 bg-[#7B5D4F] p-8 rounded-3xl shadow-lg flex flex-col">
                            <h3 className="text-2xl font-serif italic font-semibold text-white mb-6">Hubungi Kami</h3>

                            <div className="flex-grow space-y-6">
                                <div className="bg-white/10 p-4 rounded-xl text-white">
                                    <h4 className="font-medium mb-2">Alamat</h4>
                                    <p>Jl. Perintis Kemerdekaan III No.4, Makassar</p>
                                </div>

                                <div className="bg-white/10 p-4 rounded-xl text-white">
                                    <h4 className="font-medium mb-2">Jam Operasional</h4>
                                    <p>Senin - Sabtu: 17:00 - 21:00</p>
                                </div>

                                <div className="bg-white/10 p-4 rounded-xl text-white">
                                    <h4 className="font-medium mb-2">Jadwal Dokter</h4>
                                    <p>Senin - Sabtu</p>
                                </div>
                            </div>

                            <div className="mt-6 space-y-4">
                                <a href="https://wa.me/6285179966117" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-white text-[#7B5D4F] px-4 py-3 rounded-xl font-medium hover:bg-[#F5E6DC] transition shadow-md">
                                    <span className="w-8 h-8 bg-[#25D366]/20 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                        </svg>
                                    </span>
                                    +62 8517 9966117
                                </a>
                                <a href="https://instagram.com/gigitadentalcare" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-[#A67C52] text-white px-4 py-3 rounded-xl font-medium hover:bg-[#A67C52]/80 transition shadow-md">
                                    <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </span>
                                    @gigitadentalcare
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-16 px-6 md:px-20 bg-[#F5E6DC]">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-serif italic font-semibold text-[#7B5D4F] mb-4 relative inline-block">
                            Apa Kata Pasien Kami?
                            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-[#A67C52] rounded-full"></span>
                        </h2>
                        <p className="text-[#7B5D4F] max-w-2xl mx-auto">Pengalaman nyata dari pasien-pasien kami</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="bg-white p-8 rounded-xl shadow-md transform hover:-translate-y-1 hover:shadow-lg transition duration-300">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="text-[#A67C52] text-4xl">"</div>
                                    <div className="flex">
                                        {[...Array(5)].map((_, i) => (
                                            <svg key={i} className={`w-5 h-5 ${i < testimonial.rating ? 'text-[#DCB239]' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.799-2.034c-.784-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                                            </svg>
                                        ))}
                                    </div>
                                </div>
                                <blockquote className="text-lg text-[#7B5D4F] mb-6">{testimonial.text}</blockquote>
                                <div className="mt-4 pt-4 border-t border-[#A67C52]/20">
                                    <p className="font-semibold text-[#7B5D4F]">{testimonial.name}</p>
                                    <p className="text-[#A67C52] text-sm">{testimonial.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section id="cta" className="py-16 px-6 md:px-20 bg-gradient-to-r from-[#F5E6DC] to-white text-center">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-serif italic font-semibold text-[#7B5D4F] mb-4">Jadwalkan Kunjungan Anda</h2>
                    <p className="text-[#7B5D4F] mb-8 text-lg">Tim kami siap memberikan konsultasi dan perawatan terbaik untuk menjaga kesehatan gigi Anda</p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                        {/* Chatbot Option */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-[#A67C52]/20">
                            <div className="w-16 h-16 bg-[#F5E6DC] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#A67C52">
                                    <path d="M20 2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h4l4 4 4-4h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#7B5D4F] mb-3">Tanya Chatbot</h3>
                            <p className="text-[#7B5D4F]/80 text-sm mb-4">
                                Punya pertanyaan seputar klinik, perawatan, atau harga? Chat dengan asisten virtual kami untuk mendapatkan jawaban cepat!
                            </p>
                            <button
                                onClick={() => setShowChatbotPopup(true)}
                                className="w-full bg-[#A67C52] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#7B5D4F] transition shadow-md"
                            >
                                Chat Sekarang
                            </button>
                        </div>

                        {/* Booking Option */}
                        <div className="bg-white p-6 rounded-xl shadow-md border border-[#A67C52]/20">
                            <div className="w-16 h-16 bg-[#F5E6DC] rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="#A67C52">
                                    <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#7B5D4F] mb-3">Buat Janji Temu</h3>
                            <p className="text-[#7B5D4F]/80 text-sm mb-4">
                                Sudah yakin untuk berkunjung? Langsung buat janji temu dengan dokter gigi kami melalui WhatsApp untuk jadwal yang sesuai.
                            </p>
                            <button
                                onClick={() => setShowBookingPopup(true)}
                                className="w-full bg-white text-[#A67C52] border-2 border-[#A67C52] px-6 py-3 rounded-md font-semibold hover:bg-[#F5E6DC] transition shadow-md"
                            >
                                Jadwalkan Sekarang
                            </button>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-xl border border-blue-200 inline-block">
                        <div className="flex items-center gap-3 justify-center">
                            <div className="text-blue-500">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                                </svg>
                            </div>
                            <p className="text-blue-800 text-sm font-medium">
                                <span className="font-semibold">Tips:</span> Gunakan chatbot untuk pertanyaan umum, lalu buat janji temu untuk kunjungan langsung
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <Footer services={services} />

            {/* Services Modal */}
            {showAllServices && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <div className="bg-white rounded-xl max-w-6xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
                            <div className="w-full text-center">
                                <h2 className="text-2xl font-semibold text-[#7B5D4F]">Semua Layanan Kami</h2>
                            </div>
                            <button
                                onClick={() => setShowAllServices(false)}
                                className="text-[#7B5D4F] hover:text-[#A67C52] text-2xl font-bold absolute right-4"
                            >
                                ×
                            </button>
                        </div>
                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {services.map((service, index) => (
                                    <div
                                        key={index}
                                        className="group bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition border border-[#A67C52]/10 text-center"
                                    >
                                        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-[#F5E6DC] flex items-center justify-center">
                                            <div className="text-3xl text-[#A67C52]">{service.icon}</div>
                                        </div>
                                        <h3 className="text-lg font-bold text-[#7B5D4F] mb-2">{service.name}</h3>
                                        <p className="text-[#7B5D4F]/80 text-sm">{service.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Booking Popup Component */}
            <BookingPopup
                isOpen={showBookingPopup}
                onClose={() => setShowBookingPopup(false)}
            />

            {/* Chatbot Popup Component */}
            <ChatbotPopup
                isOpen={showChatbotPopup}
                onClose={() => setShowChatbotPopup(false)}
            />
        </div>
    );
}

// Image component with fallback
function ImageWithFallback({ src, fallbackSrc, alt, className, ...rest }) {
    const imgRef = useRef(null);
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        setImgSrc(src);
    }, [src]);

    const onError = () => {
        if (imgSrc !== fallbackSrc) {
            setImgSrc(fallbackSrc);
        }
    };

    return (
        <img
            {...rest}
            ref={imgRef}
            src={imgSrc}
            alt={alt}
            className={className}
            onError={onError}
        />
    );
}
