import React from 'react';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdPhone } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-[#020B2D] text-blue-100 py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-blue-900">
                <div>
                    <h2 className="text-white text-xl font-bold mb-3">SkillSphere</h2>
                    <p className="text-sm text-blue-300 leading-relaxed">
                        Empowering lifelong learners with world-class courses taught by industry experts.
                    </p>
                <div className="flex gap-3 mt-5">
                <a href="#" className="w-8 h-8 rounded-full bg-blue-900 hover:bg-blue-700 flex items-center justify-center transition">
                    <FaFacebook />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-blue-900 hover:bg-blue-700 flex items-center justify-center transition">
                    <FaTwitter />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-blue-900 hover:bg-blue-700 flex items-center justify-center transition">
                    <FaLinkedin size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-blue-900 hover:bg-blue-700 flex items-center justify-center transition">
                    <FaYoutube size={14} />
                </a>
                <a href="#" className="w-8 h-8 rounded-full bg-blue-900 hover:bg-blue-700 flex items-center justify-center transition">
                    <FaInstagram size={14} />
                </a>
                </div>
            </div>

            <div>
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
                Quick Links
                </h3>
                <ul className="space-y-2 text-sm text-blue-300">
                    <li>Home</li>
                    <li>All Courses</li>
                    <li>My Profile</li>
                    <li>Login</li>
                    <li>Register</li>
                </ul>
            </div>

            <div>
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
                Legal
                </h3>
                <ul className="space-y-2 text-sm text-blue-300">
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                    <li>Refund Policy</li>
                </ul>
            </div>

            <div>
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
                Contact
                </h3>
                <ul className="space-y-3 text-sm text-blue-300">
                <li className="flex items-center gap-2">
                    <MdEmail size={16} className="text-blue-400 shrink-0" />
                    <span>support@skillsphere.com</span>
                </li>
                <li className="flex items-center gap-2">
                    <MdPhone size={16} className="text-blue-400 shrink-0" />
                    <span>+1 (800) 123-4567</span>
                </li>
                <li className="flex items-start gap-2">
                    <MdLocationOn size={16} className="text-blue-400 shrink-0 mt-0.5" />
                    <span>123 Learning Ave, San Francisco, CA 94103</span>
                </li>
                </ul>
            </div>

            </div>

            <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-blue-400">
            <p>© 2026 SkillSphere. Empowering lifelong learners.</p>
                <div className="flex gap-4">
                    <li className="hover:text-white transition">Terms & Conditions</li>
                    <li className="hover:text-white transition">Privacy Policy</li>
                    <li className="hover:text-white transition">Contact</li>
                </div>
            </div>

      </div>
    </footer>
    );
};

export default Footer;