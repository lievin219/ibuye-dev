import React from 'react';

const Contact = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left Side */}
        <div className="bg-gradient-to-br from-blue-900 to-blue-600 text-white p-8 md:p-10 rounded-2xl shadow-xl flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Let's Talk</h1>
          <p className="text-sm md:text-base text-blue-100 leading-relaxed">
            Got a question, feedback, or business inquiry? We’d love to hear from you.
            Fill in the form and we’ll get back to you as soon as possible.
          </p>

          <div className="mt-8 md:mt-10 space-y-2 text-sm md:text-base text-blue-100">
            <p><span className="font-medium">Phone:</span> +123 456 789</p>
            <p><span className="font-medium">Email:</span> support@ibuye.com</p>
            <p><span className="font-medium">Location:</span> Nairobi, Kenya</p>
          </div>
        </div>

        {/* Right Side Form */}
        <div className="bg-white p-6 md:p-8 rounded-2xl shadow-xl">
          <form className="space-y-6">
            {/* Name */}
            <div className="relative">
              <input
                type="text"
                id="name"
                placeholder="Your Name"
                className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-3 placeholder-transparent transition duration-300"
              />
              <label
                htmlFor="name"
                className="absolute left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-300"
              >
                Name
              </label>
            </div>

            {/* Phone */}
            <div className="relative">
              <input
                type="text"
                id="phone"
                placeholder="Phone Number"
                className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-3 placeholder-transparent transition duration-300"
              />
              <label
                htmlFor="phone"
                className="absolute left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-300"
              >
                Phone Number
              </label>
            </div>

            {/* Email */}
            <div className="relative">
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-3 placeholder-transparent transition duration-300"
              />
              <label
                htmlFor="email"
                className="absolute left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-300"
              >
                Email
              </label>
            </div>

            {/* Message */}
            <div className="relative">
              <textarea
                id="message"
                placeholder="Your Message"
                rows="4"
                className="peer w-full border-b-2 border-gray-300 focus:border-blue-500 outline-none py-3 resize-none placeholder-transparent transition duration-300"
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-0 -top-3.5 text-sm text-gray-600 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 transition-all duration-300"
              >
                Message
              </label>
            </div>

            {/* Submit */}
            <div className="text-right">
              <button
                type="submit"
                className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition duration-300 shadow-md"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
