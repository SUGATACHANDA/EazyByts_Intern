import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import Footer from '../components/Footer';

const ContactsPage = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen">
            <Header activeLink="contacts" />
            <Sidebar />

            <div className="ml-16 pt-20">
                <main className="px-8 py-12 max-w-7xl mx-auto relative">
                    {/* Decorative dots on left */}
                    <div className="absolute left-0 top-1/3 hidden lg:block">
                        <div className="grid grid-cols-3 grid-rows-3 gap-1">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Decorative dots on right */}
                    <div className="absolute right-0 bottom-1/4 hidden lg:block">
                        <div className="grid grid-cols-3 grid-rows-3 gap-1">
                            {[...Array(9)].map((_, i) => (
                                <div key={i} className="w-1 h-1 bg-gray-600 rounded-full"></div>
                            ))}
                        </div>
                    </div>

                    {/* Restructured layout with two columns from the top */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
                        {/* Left Column - Title and Paragraph */}
                        <div>
                            {/* Page title */}
                            <div className="mb-8">
                                <h1 className="text-4xl font-bold mb-2">
                                    <span className="text-purple-400">/</span>contacts
                                </h1>
                                <p className="text-gray-400">Who am i?</p>
                            </div>

                            {/* Paragraph */}
                            <div className="mt-8">
                                <p className="text-gray-300 leading-relaxed">
                                    I'm interested in freelance opportunities. However, if you have other request or question, don't hesitate to contact me
                                </p>
                            </div>
                        </div>

                        {/* Right Column - Contact Form */}
                        <div>
                            {/* Message Box with Contact Form */}
                            <div className="border border-gray-700 p-6">
                                <h3 className="font-semibold mb-4">Message me here</h3>

                                <form className="space-y-4">
                                    {/* Name and Email fields side by side */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="w-full bg-gray-800 border border-gray-700 px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-400"
                                        />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="w-full bg-gray-800 border border-gray-700 px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-400"
                                        />
                                    </div>

                                    {/* Title field */}
                                    <input
                                        type="text"
                                        placeholder="Title"
                                        className="w-full bg-gray-800 border border-gray-700 px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-400"
                                    />

                                    {/* Message textarea */}
                                    <textarea
                                        placeholder="Message"
                                        rows="6"
                                        className="w-full bg-gray-800 border border-gray-700 px-4 py-2 text-gray-300 focus:outline-none focus:border-purple-400 resize-none"
                                    ></textarea>

                                    {/* Send button */}
                                    <div>
                                        <button
                                            type="submit"
                                            className="border border-purple-400 text-purple-400 px-6 py-2 hover:bg-purple-400 hover:text-gray-900 transition-colors"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        </div>
    );
};

export default ContactsPage;