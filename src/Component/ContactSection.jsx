import {
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  Telescope,
  Twitter,
  WalletCards,
} from "lucide-react";

export const ContactSection = () => {


  return (
    <section id="contact" className="py-24 relative">
      <h2 className="text-3xl md:text-4xl font-bold mb-4  text-center">
        Get In <span className="text-purple-700"> Touch</span>
      </h2>
      <p className="text-center mb-12 max-w-2xl mx-auto">
        Have a project in mind or want to collaborate? Feel free to reach out.
        I'm always open to discussing new opportunities.
      </p>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
        <div className="space-y-8">
          <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
          <div className="space-y-6 justify-center">
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full ">
                <Mail className="h-6 w-6 text-purple-700" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="https://mail.google.com/mail"
                  target="_blank"
                  className="text-purple-700 transition-colors"
                >
                  amirhossein.442@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full ">
                <Phone className="h-6 w-6 text-purple-700" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  target="_blank"
                  className="text-purple-700 transition-colors"
                >
                  09162511361
                </a>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <div className="p-3 rounded-full ">
                <MapPin className="h-6 w-6 text-purple-700" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <a
                  target="_blank"
                  className="text-purple-700 transition-colors"
                >
                  Iran,yazd
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="">
          <h4 className="text-xl font-semibold mb-6">Connect With Me</h4>
          <div className="flex space-x-4 ">
            <a>
              <Linkedin />
            </a>
            <a>
              <Instagram />
            </a>
            <a>
              <Twitter />
            </a>
          </div>
        </div>
        <div className="">
          <h4 className="text-xl font-semibold mb-6">Send a Message</h4>
          <form className="space-y-6  bg-slate-950/30  py-5 px-5 rounded-md">
            <div>
              <label htmlFor="name" className="block font-medium mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-3 rounded-md bg-transparent border border-slate-500 focus:outline-purple-900"
                placeholder="Amirhossein..."
              />
            </div>
            <div>
              <label htmlFor="email" className="block font-medium mb-2">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-md bg-transparent border border-slate-500 focus:outline-purple-900"
                placeholder="amirhossein.442@gmail.com..."
              />
            </div>
            <div className="">
              <label htmlFor="message" className="block font-medium mb-2">
                Your Message
              </label>
              <textarea
                type="message"
                id="message"
                name="message"
                required
                className="w-full  px-4 py-3 rounded-md bg-transparent border border-slate-500 focus:outline-purple-900 resize-none"
                placeholder="Hello, I'd like to talk about..."
              />
            </div>
            <div className="flex justify-center items-center">
              <button
                type="submit"
                className="flex px-10 py-3 rounded-full bg-purple-700 hover:bg-purple-600"
              >
                Submit
                <Send className=" ml-2"/>
              </button>

              
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
