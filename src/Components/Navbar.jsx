import { Link, usePage } from '@inertiajs/react';
import { useState, useEffect } from 'react';

const Navbar = () => {
    const { auth } = usePage().props;
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (sectionId) => {
        setMobileMenuOpen(false);
        const element = document.getElementById(sectionId);
        if (element) {
            // Add an offset to account for the fixed navbar
            const offset = 100; 
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-3' : 'bg-[#F5E6DC] py-5'}`}>
            <div className="container mx-auto px-6 flex items-center justify-between">
                <a href="#top" onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    setMobileMenuOpen(false);
                }} className="text-2xl font-serif italic font-bold text-[#7B5D4F]">
                    Gigita Dental Care
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8 text-[#7B5D4F] font-medium">
                    <a href="#top" onClick={(e) => {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }} className="hover:text-[#A67C52] transition">Beranda</a>
                    <a href="#about" onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('about');
                    }} className="hover:text-[#A67C52] transition">Tentang Kami</a>
                    <a href="#services" onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('services');
                    }} className="hover:text-[#A67C52] transition">Layanan</a>
                    <a href="#doctors" onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('doctors');
                    }} className="hover:text-[#A67C52] transition">Dokter</a>
                    <a href="#testimonials" onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('testimonials');
                    }} className="hover:text-[#A67C52] transition">Testimoni</a>
                    <a href="#location" onClick={(e) => {
                        e.preventDefault();
                        scrollToSection('location');
                    }} className="hover:text-[#A67C52] transition">Kontak</a>
                    {auth?.user ? (
                        <Link href="/dashboard" className="bg-[#A67C52] text-white px-6 py-2 rounded-lg hover:bg-[#7B5D4F] transition shadow-md">
                            Dashboard
                        </Link>
                    ) : (
                        <a href="#cta" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('cta');
                        }} className="bg-[#A67C52] text-white px-6 py-2 rounded-lg hover:bg-[#7B5D4F] transition shadow-md">
                            Buat Janji
                        </a>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <button className="md:hidden text-[#7B5D4F] focus:outline-none" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden bg-white shadow-lg absolute top-full left-0 w-full border-t border-[#A67C52]">
                    <div className="flex flex-col px-6 py-4 space-y-3 text-[#7B5D4F] font-medium">
                        <a href="#top" onClick={(e) => {
                            e.preventDefault();
                            window.scrollTo({ top: 0, behavior: 'smooth' });
                            setMobileMenuOpen(false);
                        }} className="hover:text-[#A67C52] py-2 transition">Beranda</a>
                        <a href="#about" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('about');
                        }} className="hover:text-[#A67C52] py-2 transition">Tentang Kami</a>
                        <a href="#services" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('services');
                        }} className="hover:text-[#A67C52] py-2 transition">Layanan</a>
                        <a href="#doctors" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('doctors');
                        }} className="hover:text-[#A67C52] py-2 transition">Dokter</a>
                        <a href="#testimonials" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('testimonials');
                        }} className="hover:text-[#A67C52] py-2 transition">Testimoni</a>
                        <a href="#location" onClick={(e) => {
                            e.preventDefault();
                            scrollToSection('location');
                        }} className="hover:text-[#A67C52] py-2 transition">Kontak</a>
                        {auth?.user ? (
                            <Link href="/dashboard" className="bg-[#A67C52] text-white px-6 py-2 rounded-lg text-center hover:bg-[#7B5D4F] transition shadow-md" onClick={() => setMobileMenuOpen(false)}>
                                Dashboard
                            </Link>
                        ) : (
                            <a href="#cta" onClick={(e) => {
                                e.preventDefault();
                                scrollToSection('cta');
                            }} className="bg-[#A67C52] text-white px-6 py-2 rounded-lg text-center hover:bg-[#7B5D4F] transition shadow-md">
                                Buat Janji
                            </a>
                        )}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;