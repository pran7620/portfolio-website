import { useState } from 'react';
import { Mail, Send, CheckCircle } from 'lucide-react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    help: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const subject = encodeURIComponent(`Session Booking Request from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nCompany: ${formData.company}\nEmail: ${formData.email}\n\nHow I can help:\n${formData.help}`
    );

    window.location.href = `mailto:pranavaher77@gmail.com?subject=${subject}&body=${body}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', company: '', email: '', help: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4">Contact Me</h2>
          <div className="w-20 h-1 bg-yellow-400 mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Let's discuss how I can help optimize your business operations through data analytics and AI solutions.
            Reach out to schedule a consultation or discuss your specific needs.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 border-t-4 border-yellow-400">
          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="mx-auto text-green-500 mb-4" size={64} />
              <h3 className="text-2xl font-bold text-black mb-2">Thank You!</h3>
              <p className="text-gray-600">
                Your email client should open shortly. I'll get back to you soon!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                    Company *
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="help" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="help"
                  name="help"
                  required
                  value={formData.help}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about your project, challenges, or how I can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-4 rounded-lg font-semibold hover:bg-gray-900 transition-all hover:scale-105 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>Processing...</>
                ) : (
                  <>
                    <Send size={20} />
                    Send Inquiry
                  </>
                )}
              </button>
            </form>
          )}

          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <div className="flex items-center justify-center gap-2 text-gray-600">
              <Mail size={20} className="text-yellow-400" />
              <a
                href="mailto:pranavaher77@gmail.com"
                className="text-black font-semibold hover:text-yellow-600 transition-colors"
              >
                pranavaher77@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
