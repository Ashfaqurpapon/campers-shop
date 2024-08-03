import React from "react";
import logo from "../../assets/images/logo.jpg";

const Footer = () => {
  const year = new Date().getFullYear();
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on all items.",
    },
    {
      question: "How long does shipping take?",
      answer: "Shipping usually takes 5-7 business days.",
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to most countries worldwide.",
    },
  ];

  const socialMediaLinks = [
    {
      platform: "Facebook",
      url: "https://www.facebook.com",
    },
    {
      platform: "Twitter",
      url: "https://www.twitter.com",
    },
    {
      platform: "Instagram",
      url: "https://www.instagram.com",
    },
  ];

  const contactInfo = {
    email: "support@campaignshop.com",
    phone: "+11111111110",
    address: "1234 Dhaka",
  };

  return (
    <div className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <hr className="h-px w-4/5 bg-gray-400 opacity-50 outline-none border-none" />
        </div>

        <div className="pt-8">
          <h2 className="text-center text-2xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col items-center pt-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="w-4/5 p-4 bg-white shadow-md rounded-md my-2"
              >
                <h3 className="text-lg font-semibold">{faq.question}</h3>
                <p className="text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-around pt-8">
          <div className="text-center">
            <img src={logo} alt="Campaign Shop Logo" className="h-12 mx-auto" />
            <h1 className="text-xl font-bold">Campaign Shop</h1>
          </div>
          <div className="text-center">
            <p className="text-black text-sm font-inter no-underline normal-case">
              &copy; {year} Campaign Shop. All rights reserved.
            </p>
            <div className="flex justify-center mt-4">
              {socialMediaLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mx-2"
                >
                  <img
                    src={`../../assets/images/${link.platform.toLowerCase()}.png`} // add the respective images in assets/images folder
                    alt={`${link.platform} icon`}
                    className="h-6 w-6"
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold">Contact Us</h3>
            <p className="text-sm">Email: {contactInfo.email}</p>
            <p className="text-sm">Phone: {contactInfo.phone}</p>
            <p className="text-sm">Address: {contactInfo.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
