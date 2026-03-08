import React from 'react'
import { motion } from "motion/react"
import { Mail, MapPin, Phone, Send, Github, Linkedin, Twitter } from 'lucide-react'
import Title from './Title'

const Contact = () => {
    const [result, setResult] = React.useState("");

const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", "fec4082c-bae3-48b0-b52a-6aefcd88ce8e");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      setResult("Error");
    }
  };
  return (
    <section className='relative flex flex-col items-center justify-center min-h-screen w-full p-6 md:p-20 bg-base-200 overflow-hidden' id='contact-us'>
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-purple-600/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full"></div>

      <Title 
        title="Get In Touch" 
        bgImage="https://images.unsplash.com/photo-1534536281715-e28d76689b4d?q=80&w=2070&auto=format&fit=crop" 
      />

      <div className='flex flex-col lg:flex-row gap-12 w-full max-w-6xl mt-12 z-10'>
        
        {/* Left Side: Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='lg:w-1/3 flex flex-col gap-8'
        >
          <h2 className='text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-orange-400'>
            Let's Talk
          </h2>
          <p className='text-gray-500 leading-relaxed'>
            Have a project in mind or just want to say hi? I'm always open to discussing new opportunities and creative ideas.
          </p>

          <div className='flex flex-col gap-6'>
            <div className='flex items-center gap-4 group'>
              <div className='p-4 bg-base-100 rounded-2xl shadow-sm group-hover:bg-orange-500 group-hover:text-white transition-all'>
                <Mail size={24} />
              </div>
              <div>
                <p className='text-xs font-bold uppercase text-gray-400'>Email Me</p>
                <p className='font-semibold'>dripcoder@example.com</p>
              </div>
            </div>

            <div className='flex items-center gap-4 group'>
              <div className='p-4 bg-base-100 rounded-2xl shadow-sm group-hover:bg-purple-600 group-hover:text-white transition-all'>
                <MapPin size={24} />
              </div>
              <div>
                <p className='text-xs font-bold uppercase text-gray-400'>Location</p>
                <p className='font-semibold'>Nairobi, Kenya</p>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className='flex gap-4 mt-4'>
            {[Github, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className='btn btn-circle btn-ghost bg-base-100 hover:bg-orange-500 hover:text-white shadow-sm'>
                <Icon size={20} />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side: Contact Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className='lg:w-2/3 bg-base-100/50 backdrop-blur-xl p-8 md:p-12 rounded-[2rem] shadow-2xl border border-white/10'
        >
          <form onSubmit={onSubmit} className='flex flex-col gap-6'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='flex flex-col gap-2'>
                <label className='text-sm font-bold ml-1'>Your Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe" 
                  required
                  className='input input-bordered bg-base-200/50 focus:border-orange-500 transition-all rounded-xl p-4' 
                />
              </div>
              <div className='flex flex-col gap-2'>
                <label className='text-sm font-bold ml-1'>Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="john@example.com" 
                  required
                  className='input input-bordered bg-base-200/50 focus:border-orange-500 transition-all rounded-xl p-4' 
                />
              </div>
            </div>

            <div className='flex flex-col gap-2'>
              <label className='text-sm font-bold ml-1'>Message</label>
              <textarea 
                name="message"
                placeholder="Tell me about your project..." 
                rows="5"
                required
                className='textarea textarea-bordered bg-base-200/50 focus:border-orange-500 transition-all rounded-xl p-4'
              ></textarea>
            </div>

            <button 
              type="submit" 
              className='btn btn-lg bg-gradient-to-r from-purple-600 to-orange-500 border-none text-white rounded-xl gap-3 hover:scale-[1.02] active:scale-95 transition-all mt-4'
            >
              Send Message <Send size={20} />
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact