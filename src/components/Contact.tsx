export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <div className="max-w-lg mx-auto">
                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Your Name" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="Your Email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Your Message" rows={4}></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300" type="button">
                            Send Message
                        </button>
                    </div>
                </form>
                <div className="mt-8">
                    <h3 className="text-xl font-semibold mb-4">Connect with me</h3>
                    <div className="flex space-x-4">
                        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">LinkedIn</a>
                        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">GitHub</a>
                        {/* Add more social media links as needed */}
                    </div>
                </div>
            </div>
        </div>
    )
}