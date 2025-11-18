


const TestimonialsSection = () => {
  const testimonials = [
    { name: "Megan", role: "Project at New Tech Ltd Media", text: "They are a blessing! I am awful at taxes! I would be so overly stressed trying to figure it out for the..." },
    { name: "Jerry Ting", role: "Founder, Givebutter", text: "Using Alfred.ai before this, but I am now a freelancer, a small size firm. I find Bench is absolutely great while maintaining inexpensive." },
    { name: "Jerry Ting", role: "Founder, Givebutter", text: "I have been in business for several years now and am very happy with my experience! Awesome with their communication." },
    { name: "David K", role: "Engineer, Superlist", text: "I literally can't do this task. I'm always busy! That's okay! And EVEN AS an ex-employee of mine that makes up less set. By making a simple way" },
    { name: "Megan", role: "Project at New Tech Ltd Media", text: "I would also love this task. This is all other claims of startups. It sounds like we go, who when I am wondering about them. We can answer a..." },
    { name: "David K", role: "Engineer, Superlist", text: "I would also love this task. I'm always a different try places just been first, always where everywhere." }
  ];

  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-6">
          <span className="text-3xl">🔥</span>
          <div className="flex gap-3">
            <button className="px-5 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">Our Testimonial</button>
            <button className="px-5 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">Why We Grateful</button>
            <button className="px-5 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors">More Than Us</button>
          </div>
          <span className="text-3xl">💚</span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Hear What Customer<br />Have To Say
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-sm leading-relaxed">
          See How Alfred.ai Changed To Listen To Us • User Test. As a great
          & Beautiful approach for invoicing and team more.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {testimonials.map((testimonial, i) => (
          <div key={i} className="bg-white rounded-2xl p-7 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-14 h-14 bg-linear-to-br from-gray-200 to-gray-300 rounded-full shrink-0"></div>
              <div>
                <h4 className="font-bold text-base">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;