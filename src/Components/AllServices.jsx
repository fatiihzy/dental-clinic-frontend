import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function AllServices() {
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

    return (
        <div className="bg-gradient-to-b from-[#F8F0EA] to-white min-h-screen">
            {/* Header section */}
            <div className="pt-32 pb-12 px-6 md:px-20">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <span className="inline-block bg-white text-[#A67C52] px-4 py-1 rounded-full text-sm font-medium mb-2">Perawatan Berkualitas</span>
                        <h1 className="text-4xl font-semibold text-[#7B5D4F] mb-4">
                            Semua Layanan Kami
                        </h1>
                        <p className="text-[#7B5D4F]/80 max-w-2xl mx-auto">Berbagai layanan perawatan gigi untuk menjaga kesehatan dan keindahan senyuman Anda</p>
                    </div>
                </div>
            </div>

            {/* Services grid */}
            <div className="px-6 md:px-20 pb-24">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
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

                    <div className="mt-16 text-center">
                        <Link href="/" className="inline-block bg-[#A67C52] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#7B5D4F] transition shadow-md">
                            Kembali ke Beranda
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}