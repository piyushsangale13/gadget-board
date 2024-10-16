import React from 'react';

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">What Our Users Are Saying</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <Testimonial
            text="Gadget Board has made it so much easier to see what gadgets my friends have and borrow them for a test run before purchasing!"
            name="Alex J."
          />
          <Testimonial
            text="I love how I can keep track of my tech collection and see what devices my family members own, making it easy to share gadgets."
            name="Sarah M."
          />
          <Testimonial
            text="The group feature is fantastic for work! My office colleagues and I share gadgets and tech with ease."
            name="John D."
          />
        </div>
      </div>
    </section>
  );
};

// A simple reusable component for each testimonial
const Testimonial = ({ text, name }) => {
  return (
    <div className="p-6 bg-blue-100 rounded-lg shadow-lg">
      <p className="text-gray-700">{text}</p>
      <p className="mt-4 font-semibold text-blue-600">— {name}</p>
    </div>
  );
};

export default TestimonialsSection;
