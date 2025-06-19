import { useState } from 'react';

export default function BookingPopup({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-md w-full p-6 relative animate-fadeIn">
                <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-[#7B5D4F] hover:text-[#A67C52] text-xl font-bold transition-colors"
                >
                    ×
                </button>

                <div className="text-center mb-4">
                    <div className="w-12 h-12 bg-[#F5E6DC] rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-2xl">📅</span>
                    </div>
                    <h2 className="text-xl font-serif italic font-semibold text-[#7B5D4F] mb-2">
                        Buat Janji Temu
                    </h2>
                    <p className="text-[#7B5D4F]/80 text-sm">
                        Hubungi kami melalui WhatsApp untuk membuat janji temu
                    </p>
                </div>

                <div className="bg-[#F5E6DC] p-4 rounded-xl mb-4">
                    <h3 className="font-semibold text-[#7B5D4F] mb-3 flex items-center gap-2 text-sm">
                        <span>🕐</span>
                        Jam Operasional:
                    </h3>
                    <div className="space-y-1 text-[#7B5D4F]/80 text-sm">
                        <div className="flex justify-between items-center">
                            <span>Senin - Sabtu</span>
                            <span className="font-medium">17:00 - 21:00</span>
                        </div>
                        <div className="flex justify-between items-center">
                            <span>Minggu</span>
                            <span className="font-medium text-red-500">Tutup</span>
                        </div>
                    </div>
                </div>

                <div className="bg-white border border-[#A67C52]/20 p-3 rounded-xl mb-4">
                    <h4 className="font-semibold text-[#7B5D4F] mb-2 flex items-center gap-2 text-sm">
                        <span>👨‍⚕️</span>
                        Dokter Tersedia:
                    </h4>
                    <div className="space-y-1 text-xs text-[#7B5D4F]/80">
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#A67C52] rounded-full"></div>
                            <span>drg. Fadlianur, S.Kg</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 bg-[#A67C52] rounded-full"></div>
                            <span>drg. Wiwik Widya Praja, S.Kg</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-3">
                    <a
                        href="https://wa.me/6285179966117?text=Halo%20Gigita%20Dental%20Care%2C%20saya%20ingin%20membuat%20janji%20temu%20untuk%20perawatan%20gigi.%20Mohon%20informasi%20ketersediaan%20jadwal%20dokter."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 bg-[#25D366] text-white px-4 py-3 rounded-xl font-semibold hover:bg-[#25D366]/90 transition-all transform hover:scale-105 shadow-md w-full text-sm"
                        onClick={onClose}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="white">
                            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                        </svg>
                        Chat WhatsApp Sekarang
                    </a>
                </div>

                <div className="mt-4 p-3 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="flex items-start gap-2">
                        <div className="text-blue-500 mt-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                            </svg>
                        </div>
                        <div>
                            <h5 className="font-medium text-blue-800 mb-1 text-sm">Tips Booking:</h5>
                            <p className="text-xs text-blue-700">
                                Untuk hasil terbaik, silakan sebutkan jenis perawatan yang diinginkan saat menghubungi kami.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
