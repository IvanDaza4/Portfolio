import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MessageSquare, Send, User, Linkedin } from "lucide-react";

const Footer = () => {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);

  const handleChange = (e) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);

    try {
      await emailjs.send(
        "service_cowep68",
        "template_699i2ko",
        {
          from_name: formState.name,
          from_email: formState.email,
          message: formState.message,
        },
        "I5iV_RwH3i1z692Zo"
      );
      alert("Mensaje enviado con éxito");
      setFormState({ name: "", email: "", message: "" });
    } catch (error) {
      alert("Hubo un error al enviar el mensaje");
      console.error(error);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="w-full py-20 text-white">
      <div className=" mx-auto flex flex-col  lg:flex-row lg:items-start justify-between gap-12 lg:gap-24  ">

        {/* IZQUIERDA */}
        <div className="w-full lg:w-1/2">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
            Trabajemos <br /> Juntos
          </h1>
          <div className="h-1 w-20 bg-purple-500 mt-4 mb-10 rounded-full" />

          <div className="space-y-6 text-white/80 text-base">
            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-500 bg-purple-700/20">
                <Mail className="text-purple-500 w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-lg text-purple-200">Email</p>
                <p className="text-lg">ivandaza2004@gmail.com</p>
              </div>
            </div>

            {/* LinkedIn */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-purple-500 bg-purple-700/20">
                <Linkedin className="text-purple-500 w-6 h-6" />
              </div>
              <div>
                <p className="font-semibold text-lg text-purple-200">LinkedIn</p>
                <p className="text-lg" href='https://www.linkedin.com/in/dazaivan/'>https://www.linkedin.com/in/dazaivan/</p>
              </div>
            </div>
          </div>
        </div>

        {/* DERECHA */}
        <div>
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full lg:w-1/2 bg-gradient-to-br from-black/60 to-purple-900/10 backdrop-blur-md border border-purple-600/20 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex flex-col gap-6">
              {/* Nombre */}
              <div>
                <label htmlFor="name" className="text-sm font-semibold mb-1 block text-white/80">
                  <User className="inline w-4 h-4 mr-2 text-purple-400" /> Nombre
                </label>
                <input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  placeholder="Tu nombre"
                  className="w-full h-12 px-4 text-white placeholder-white/30 bg-black/40 border border-purple-500/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="text-sm font-semibold mb-1 block text-white/80">
                  <Mail className="inline w-4 h-4 mr-2 text-purple-400" /> Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  placeholder="tu@email.com"
                  className="w-full h-12 px-4 text-white placeholder-white/30 bg-black/40 border border-purple-500/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Mensaje */}
              <div>
                <label htmlFor="message" className="text-sm font-semibold mb-1 block text-white/80">
                  <MessageSquare className="inline w-4 h-4 mr-2 text-purple-400" /> Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  placeholder="¿En qué podemos colaborar?"
                  className="w-full px-4 py-3 text-white placeholder-white/30 bg-black/40 border border-purple-500/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              {/* Botón */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                disabled={sending}
                className="w-full py-3 flex justify-center items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl transition-all"
              >
                Enviar
                <Send className="w-4 h-4 ml-1" />
              </motion.button>
            </div>
          </motion.form>
        </div>
        
      </div>
    </section>
  );
  
};

export default Footer;
