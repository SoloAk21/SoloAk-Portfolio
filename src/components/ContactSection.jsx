import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Clear messages after 5 seconds
  useEffect(() => {
    if (successMessage || errorMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        setErrorMessage("");
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, errorMessage]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error on input
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      try {
        await emailjs.send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          formData,
          import.meta.env.VITE_EMAILJS_USER_ID
        );
        setSuccessMessage("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } catch (error) {
        console.error("FAILED...", error);
        setErrorMessage("Failed to send message. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div id="contact" className="pb-10 text-sm">
      {/* Section Title */}
      <div className="w-fit rounded-full px-4 py-2 text-xl font-semibold">
        Get in touch
      </div>
      <div className="pl-10">
        <div className="h-7 border-l border-dashed border-zinc-900"></div>
      </div>

      {/* Contact Form */}
      <div className="rounded border p-5 hover:rounded-xl hover:border-black transition-all">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name and Email Inputs (Side by Side on Medium and Larger Screens) */}
          <div className="flex flex-col gap-4 md:flex-row md:gap-6">
            <div className="w-full md:w-1/2">
              <label htmlFor="name" className="block mb-2 text-sm font-medium">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full bg-transparent text-black border rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-black hover:border-black placeholder:font-light placeholder:text-zinc-400"
                placeholder="Type your full name..."
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">{errors.name}</p>
              )}
            </div>
            <div className="w-full md:w-1/2">
              <label htmlFor="email" className="block mb-2 text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full bg-transparent text-black border rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-black hover:border-black placeholder:font-light placeholder:text-zinc-400"
                placeholder="Type your email..."
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Message Input (Full Width on All Screens) */}
          <div className="w-full">
            <label htmlFor="message" className="block mb-2 text-sm font-medium">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleInputChange}
              className="w-full bg-transparent text-black border rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-black hover:border-black placeholder:font-light placeholder:text-zinc-400"
              placeholder="Type your message..."
              rows="5"
            />
            {errors.message && (
              <p className="text-red-500 text-xs mt-1">{errors.message}</p>
            )}
          </div>

          {/* Submit Button (Full Width on All Screens) */}
          <div className="flex ">
            <button
              type="submit"
              disabled={loading}
              className="bg-black text-white px-8 py-2 rounded-full hover:bg-zinc-900 hover:text-zinc-200 transition-all hover:shadow-lg flex items-center justify-center"
            >
              {loading ? (
                <>
                  <AiOutlineLoading3Quarters className="animate-spin mr-2" />
                  Sending...
                </>
              ) : (
                "Send"
              )}
            </button>
          </div>
        </form>
        {/* Success/Error Messages */}
        {successMessage && (
          <p className="mt-4 text-green-500 text-center fade-in">
            {successMessage}
          </p>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-500 text-center fade-in">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactSection;
