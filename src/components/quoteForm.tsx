import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const QuoteForm = () => {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const data = new FormData(form);

    try {
      setStatus("sending");
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-green-50 p-8 rounded-2xl text-center border border-green-100">
        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle size={32} />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Quote Requested!</h3>
        <p className="text-green-700">Thank you. We have received your details and a copy has been sent to your email. Our team will contact you shortly.</p>
        <button onClick={() => setStatus("")} className="mt-6 text-green-700 font-bold underline">Send another</button>
      </div>
    );
  }

return (
  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 bg-white p-6 md:p-8 rounded-2xl shadow-xl border border-gray-100">
    <div>
      <h3 className="text-2xl font-bold text-ess-navy mb-2">Get a Free Quote</h3>
      <p className="text-gray-500 text-sm mb-4">Fill out the form below to get started.</p>
    </div>
    
    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Full Name</label>
        <input required type="text" name="name" className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-ess-purple focus:border-transparent outline-none transition text-base" placeholder="John Doe" />
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Email Address</label>
        <input required type="email" name="email" className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-ess-purple focus:border-transparent outline-none transition text-base" placeholder="john@company.com" />
      </div>
    </div>

    <div className="grid md:grid-cols-2 gap-4">
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Phone Number</label>
        <input required type="tel" name="phone" className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-ess-purple focus:border-transparent outline-none transition text-base" placeholder="+234..." />
      </div>
      <div>
        <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Service Type</label>
        <div className="relative">
          <select name="service" className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-ess-purple focus:border-transparent outline-none transition appearance-none text-base">
            <option>Video Surveillance</option>
            <option>Access Control</option>
            <option>Farm Security</option>
            <option>Smart Home Setup</option>
            <option>General Inquiry</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">▼</div>
        </div>
      </div>
    </div>

    <div>
      <label className="block text-xs font-bold text-gray-500 uppercase mb-1 ml-1">Project Details</label>
      <textarea required name="message" rows={4} className="w-full px-4 py-4 rounded-xl bg-gray-50 border border-gray-200 focus:bg-white focus:ring-2 focus:ring-ess-purple focus:border-transparent outline-none transition text-base" placeholder="Describe your project..."></textarea>
    </div>

    <button disabled={status === "sending"} type="submit" className="w-full bg-ess-purple hover:bg-ess-darkPurple text-white py-4 md:py-5 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-200 active:scale-[0.98]">
      {status === "sending" ? "Sending..." : "Submit Request"}
      {!status && <Send size={20} />}
    </button>
  </form>
);
};

export default QuoteForm;