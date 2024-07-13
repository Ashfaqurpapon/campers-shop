import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

const teamMembers = [
  {
    name: "John Doe",
    role: "CEO",
    photo: "path_to_photo_of_john",
    bio: "John has over 20 years of experience in the industry...",
  },
  {
    name: "Jane Smith",
    role: "CTO",
    photo: "path_to_photo_of_jane",
    bio: "Jane is a tech enthusiast with a passion for innovation...",
  },
  // Add more team members as needed
];

const About = () => {
  return (
    <div className="max-w-7xl mx-auto p-8">
      <h1 className="text-5xl font-bold text-center text-gray-900 mb-12">
        About Us
      </h1>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Contact Information
        </h2>
        <div className="flex flex-col space-y-4">
          <p className="flex items-center text-lg text-gray-700">
            <FaPhone className="mr-3 text-xl text-gray-800" /> Phone: +1 234 567
            890
          </p>
          <p className="flex items-center text-lg text-gray-700">
            <FaEnvelope className="mr-3 text-xl text-gray-800" /> Email:
            info@company.com
          </p>
          <p className="flex items-center text-lg text-gray-700">
            <FaMapMarkerAlt className="mr-3 text-xl text-gray-800" /> Address:
            1234 Street Name, City, State, ZIP
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Location
        </h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.234567890123!2d-122.123456789!3d37.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x123456789abcdef0%3A0x123456789abcdef0!2sYour%20Business%20Name!5e0!3m2!1sen!2sus!4v1234567890123"
          width="100%"
          height="450"
          className="rounded-md border-2 border-gray-300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Connect With Us
        </h2>
        <div className="flex space-x-6 justify-center">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-600 transition-colors duration-300"
          >
            <FaFacebook size="2em" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-blue-400 transition-colors duration-300"
          >
            <FaTwitter size="2em" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-pink-500 transition-colors duration-300"
          >
            <FaInstagram size="2em" />
          </a>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Mission
        </h2>
        <p className="text-lg text-gray-700">
          Our mission is to provide the best products and services to our
          customers. We believe in quality, innovation, and customer
          satisfaction. Our values are rooted in integrity, excellence, and
          teamwork.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="text-center p-4 border rounded-lg shadow-lg bg-white"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-gray-500">{member.role}</p>
              <p className="text-gray-700 mt-2">{member.bio}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
