import React from 'react';
const TestimonialCard = ({
  name,
  handle,
  quote,
  image
}) => {
  return <div className="bg-gray-100 p-6 rounded-lg">
      <div className="flex items-center mb-4">
        <img src={image || "/1000037109.jpg"} alt={name} className="w-12 h-12 rounded-full mr-4" />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <div className="flex items-center">
            <span className="text-gray-500 text-sm">{handle}</span>
            <svg className="h-4 w-4 ml-1 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z"></path>
            </svg>
          </div>
        </div>
      </div>
      <p className="text-gray-700">{quote}</p>
    </div>;
};
const Testimonials = () => {
  return <section className="w-full py-16 px-4 md:px-6 lg:px-8 bg-black text-white">
      <div className="container mx-auto">
        <div className="mb-12">
          <div className="inline-block bg-purple-600 text-white px-4 py-1 rounded-full mb-4">
            37K+ Satisfied Customers
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Hear From <br />
            Those We've <br />
            Helped Grow
          </h2>
          <p className="text-gray-400 max-w-md">
            Discover how our solutions have helped businesses
            like yours achieve real results. Our clients share their
            experience
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <TestimonialCard name="Luke Mccormick" handle="@andysm" quote="Since I started using this platform, our result has skyrocketed! The user interface is so intuitive and easy to navigate, and the features are exactly what I need." image="/1000037109.jpg" />
          <TestimonialCard name="Luke Mccormick" handle="@andysm" quote="Since I started it, our result has skyrocketed! The user interface is so intuitive and easy to navigate, and the features are exactly what I need." image="/1000037110.jpg" />
          <TestimonialCard name="Luke Mccormick" handle="@andysm" quote="Since I started using this platform, our result has skyrocketed! The user interface is so intuitive and easy to navigate, and the features are exactly what I need." image="/1000037108.jpg" />
        </div>
      </div>
    </section>;
};
export default Testimonials;