
import { Users, Award, ThumbsUp } from "lucide-react";


const WhyChooseUsSection = () => {
  return (
    <section className="px-6 md:px-12 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Key Reasons To<br />Choose Us
        </h2>
        <p className="text-gray-600 max-w-md mx-auto text-base">
          Whatever your experience, payment preferences, and it help you find the right
          option for your business.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-10">
        <div className="text-center group">
          <div className="w-14 h-14 bg-pink-100 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-pink-200 transition-colors shadow-sm">
            <Users className="w-7 h-7 text-pink-500" />
          </div>
          <div className="mb-3">
            <span className="text-pink-500 text-sm font-medium">● Customer</span>
          </div>
          <h3 className="text-6xl font-bold mb-6">20K+</h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            In 20+ Cities. Plus, We Made Up Other<br />
            Groups Reach To Think On Us
          </p>
        </div>

        <div className="text-center group">
          <div className="w-14 h-14 bg-pink-100 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-pink-200 transition-colors shadow-sm">
            <Award className="w-7 h-7 text-pink-500" />
          </div>
          <div className="mb-3">
            <span className="text-pink-500 text-sm font-medium">● Award</span>
          </div>
          <h3 className="text-6xl font-bold mb-6">98<sup className="text-3xl">%</sup></h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            We Reach Winner In API, Or 3 In a<br />
            Group RR Companies.
          </p>
        </div>

        <div className="text-center group">
          <div className="w-14 h-14 bg-pink-100 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:bg-pink-200 transition-colors shadow-sm">
            <ThumbsUp className="w-7 h-7 text-pink-500" />
          </div>
          <div className="mb-3">
            <span className="text-pink-500 text-sm font-medium">● Experience</span>
          </div>
          <h3 className="text-6xl font-bold mb-6">89<sup className="text-3xl">%</sup></h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            We Startup With A Medium In Informed<br />
            And Still On Service Trip One error
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;