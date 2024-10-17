import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaHandshake, FaQuestionCircle, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="bg-gray-50 px-12 py-16">
      {/* Contact Us Header */}
      <div className="text-center mb-10">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg ">
          Have a question? Feel free to get in touch with us, we'll get back to you shortly.
        </p>
      </div>

      <div className="container mx-auto px-4 md:px-0 flex flex-col md:flex-row justify-between items-start">
        {/* Contact Details Section */}
        <div className="flex-1 mb-8 md:mb-0 md:mr-10 ">
          <h2 className="text-2xl font-bold mb-4">Contact Details</h2>
          <p className="mb-2">P: +1 234 567 890</p>
          <p className="mb-2">E: contact@info.com</p>
          <p className="mb-4">A: 123 Fifth Avenue, New York, NY 10160</p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <FaFacebookF className="text-2xl cursor-pointer hover:text-gray-600" />
            <FaInstagram className="text-2xl cursor-pointer hover:text-gray-600" />
            <FaTwitter className="text-2xl cursor-pointer hover:text-gray-600" />
            <FaYoutube className="text-2xl cursor-pointer hover:text-gray-600" />
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="flex-1 bg-white p-8 shadow-md rounded-md">
          <form>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="first-name">Name *</label>
                <input
                  type="text"
                  id="first-name"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  placeholder="First"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor="last-name">Last *</label>
                <input
                  type="text"
                  id="last-name"
                  className="border border-gray-300 rounded-md p-2 w-full"
                  placeholder="Last"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="email">Email *</label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="Your Email"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium mb-1" htmlFor="message">Message *</label>
              <textarea
                id="message"
                rows="4"
                className="border border-gray-300 rounded-md p-2 w-full"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-black text-white py-2 px-6 rounded-md hover:bg-gray-800 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>

      {/* Useful Links Section */}
      <div className="container mx-auto  mt-16 px-4">
        <h2 className="text-center text-4xl font-bold mb-8">Useful Links</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Partnerships Card */}
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <div className="text-4xl mb-4">
              <FaHandshake className="mx-auto text-4xl text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Partnerships</h3>
            <p className="mb-4">Interested in a partnership with us?</p>
            <button className="border border-black py-2 px-4 rounded-md hover:bg-gray-100 transition">
              APPLY HERE
            </button>
          </div>

          {/* FAQ Card */}
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <div className="text-4xl mb-4">
              <FaQuestionCircle className="mx-auto text-4xl text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">FAQ</h3>
            <p className="mb-4">Most questions can be answered here.</p>
            <button className="border border-black py-2 px-4 rounded-md hover:bg-gray-100 transition">
              GO TO FAQ
            </button>
          </div>

          {/* Store Locations Card */}
          <div className="bg-white p-6 shadow-md rounded-md text-center">
            <div className="text-4xl mb-4">
              <FaMapMarkerAlt className="mx-auto text-4xl text-gray-700" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Store Locations</h3>
            <p className="mb-4">Find your nearest Jewelry store.</p>
            <button className="border border-black py-2 px-4 rounded-md hover:bg-gray-100 transition">
              FIND STORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
