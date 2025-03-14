import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
    return (
        <section className="bg-green-100 py-12 px-6 rounded-2xl shadow-[0_0_20px_rgba(34,197,94,0.8)] drop-shadow-3xl max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-green-800 text-center mb-6">Contact Us</h2>
            <p className="text-green-700 text-center mb-8">
                Have questions? We’d love to hear from you!
            </p>
            <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 bg-green-200 rounded-xl shadow-lg">
                    <FaPhone className="text-green-700 text-2xl" />
                    <span className="text-green-900 font-medium">+123 456 7890</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-green-200 rounded-xl shadow-lg">
                    <FaEnvelope className="text-green-700 text-2xl" />
                    <span className="text-green-900 font-medium">contact@elitemart.com</span>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-green-200 rounded-xl shadow-lg">
                    <FaMapMarkerAlt className="text-green-700 text-2xl" />
                    <span className="text-green-900 font-medium">123 EliteMart Street, City</span>
                </div>
            </div>
            <form className="mt-8 space-y-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
                <input type="email" placeholder="Your Email" className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none" />
                <textarea placeholder="Your Message" className="w-full p-3 border border-green-300 rounded-lg focus:ring-2 focus:ring-green-500 outline-none h-32"></textarea>
                <button className="w-full bg-green-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition duration-300">Send Message</button>
            </form>
        </section>
    );
};

