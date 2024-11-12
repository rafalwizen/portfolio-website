export default function Testimonials() {
    const testimonials = [
        {
            name: "John Doe",
            company: "Tech Co.",
            testimonial: "Rafał is an exceptional developer. His attention to detail and problem-solving skills are outstanding."
        },
        {
            name: "Jane Smith",
            company: "Design Studio",
            testimonial: "Working with Rafał was a pleasure. He consistently delivered high-quality work and met all deadlines."
        },
        // Add more testimonials as needed
    ]

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-6">Testimonials</h2>
            <div className="grid md:grid-cols-2 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md p-6">
                        <p className="text-gray-600 mb-4">"{testimonial.testimonial}"</p>
                        <p className="font-semibold">{testimonial.name}</p>
                        <p className="text-sm text-gray-500">{testimonial.company}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}