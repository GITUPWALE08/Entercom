import QuoteForm from '../components/quoteForm';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto mb-12 text-center">
          <h1 className="text-4xl font-bold text-ess-navy mb-4">Contact Us</h1>
          <p className="text-gray-600">
            Have questions about your security needs? Ready to start a project? 
            Reach out to our team for a free consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Side */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-ess-blue rounded-lg flex items-center justify-center mb-4">
                <Phone size={24} />
              </div>
              <h3 className="font-bold text-gray-900">Phone</h3>
              <p className="text-gray-500 text-sm mb-2">Mon-Fri from 8am to 5pm.</p>
              <a href="tel:+2348167392243" className="text-ess-purple font-semibold">+234 816 739 2243</a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-ess-blue rounded-lg flex items-center justify-center mb-4">
                <Mail size={24} />
              </div>
              <h3 className="font-bold text-gray-900">Email</h3>
              <p className="text-gray-500 text-sm mb-2">Our friendly team is here to help.</p>
              <a href="mailto:sales@entercomsecsys.com" className="text-ess-purple font-semibold">sales@entercomsecurity.com</a>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 text-ess-blue rounded-lg flex items-center justify-center mb-4">
                <MapPin size={24} />
              </div>
              <h3 className="font-bold text-gray-900">Office</h3>
              <p className="text-gray-500 text-sm mb-2">Come say hello at our office HQ.</p>
              <p className="text-ess-navy font-medium">Lagos, Nigeria</p>
            </div>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;