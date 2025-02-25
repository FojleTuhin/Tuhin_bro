import { forwardRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const response = await emailjs.send(
        "service_nr6jcqk",
        "template_fqae6ch",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "9jQRGdgOWzPts55mK"
      );

      if (response.status === 200) {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      setStatus("Failed to send message. Try again.");
    }

    setLoading(false);
  };

  return (
    <div ref={ref}>
      <div className="max-w-[651px] mx-auto py-20 px-6" id="contact">
        <p className="text-center text-[48px] text-[#F1CCFF] font-medium mb-12">
          Contact
        </p>
        <form onSubmit={handleSubmit}>
          <div className="grid mob:grid-cols-2 gap-[18px] gap-y-8">
            <div className="space-y-3">
              <label htmlFor="name" className="text-[14px] ml-6">
                Name
              </label>
              <input
                id="name"
                required
                name="name"
                type="text"
                placeholder="Fojle Tuhin"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-6 py-[18px] rounded-full bg-[#F1CCFF1F] text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F1CCFF] outline-none"
              />
            </div>
            <div className="space-y-3">
              <label htmlFor="email" className="text-[14px] ml-6">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="bro@gmail.com"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-[18px] rounded-full bg-[#F1CCFF1F] text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F1CCFF] outline-none"
              />
            </div>
            <div className="space-y-3 mob:col-span-2">
              <label htmlFor="message" className="text-[14px] ml-6">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                placeholder="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-6 py-[18px] rounded-[24px] bg-[#F1CCFF1F] text-white placeholder-gray-500 focus:ring-2 focus:ring-[#F1CCFF] outline-none min-h-[125px] resize-none"
              />
            </div>
          </div>

          <div className="flex mt-12 justify-center">
            <button
              type="submit"
              disabled={loading}
              className="py-3 px-8 rounded-full bg-[#F1CCFF] text-[18px] font-medium text-[#000] flex items-center gap-[10px] hover:bg-[#fff] duration-200 transition-all ease-in-out"
            >
              {loading ? "Sending..." : "Say hello"}
            </button>
          </div>

          {status && <p className="text-center mt-4 text-white">{status}</p>}
        </form>
      </div>
    </div>
  );
});

export default Contact;
