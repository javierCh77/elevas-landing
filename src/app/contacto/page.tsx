"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MapPin, Phone, Mail, Loader2, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const initialForm = {
  nombre: "",
  email: "",
  telefono: "",
  empresa: "",
  servicio: "",
  mensaje: "",
};

export default function ContactoPage() {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, servicio: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validaciones simples
    if (!formData.nombre || !formData.email || !formData.servicio) {
      toast({
        title: "Campos incompletos",
        description: "Por favor completá los campos obligatorios.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_p9arc0r",
        "template_7a0dx9t",
        formRef.current!,
        "UMjzBJv6hC0I6oZZQ"
      );

      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Te responderemos pronto.",
      });

      setFormData(initialForm);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Error",
        description: "Hubo un problema al enviar el mensaje.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="px-4 py-12 md:px-20 md:py-20">
      <div className="mx-auto max-w-[800px] text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-[#6d381a]">
          Contáctanos
        </h1>
        <p className="mt-4 text-lg text-[#6d381a]/70">
          Estamos aquí para ayudarte a transformar tu departamento de RRHH
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        {/* Contact Info */}
        <motion.div variants={fadeIn} initial="hidden" animate="visible">
          <div className="space-y-6">
            {[
              {
                icon: <MapPin className="h-6 w-6 text-[#e4b53b] mt-1" />,
                title: "Dirección",
                text: (
                  <>
                    Las margaritas 289 <br /> Ushuaia, Tierra del Fuego
                  </>
                ),
              },
              {
                icon: <Phone className="h-6 w-6 text-[#e4b53b] mt-1" />,
                title: "Teléfono",
                text: (
                  <>
                    +54 9 (2901) 647084 <br /> Lunes a Viernes, 9:00 - 18:00
                  </>
                ),
              },
              {
                icon: <Mail className="h-6 w-6 text-[#e4b53b] mt-1" />,
                title: "Email",
                text: (
                  <>
                    info@elevasconsulting.com <br />
                    talento@elevasconsulting.com
                  </>
                ),
              },
            ].map(({ icon, title, text }, idx) => (
              <div key={idx} className="flex items-start space-x-4">
                {icon}
                <div>
                  <h3 className="text-lg font-semibold text-[#6d381a]">
                    {title}
                  </h3>
                  <p className="text-[#6d381a]/70">{text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-[#f1df96] rounded-lg">
            <h3 className="text-xl font-semibold mb-4 text-[#6d381a]">
              ¿Prefieres una llamada?
            </h3>
            <p className="text-[#6d381a]/80 mb-4">
              Agenda una consulta gratuita de 30 minutos con uno de nuestros
              especialistas.
            </p>
            <Button className="w-full bg-[#6d381a] hover:bg-[#6d381a]/90 text-white">
              Agendar llamada
            </Button>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
        >
          <h2 className="text-2xl font-bold mb-6 text-[#6d381a]">
            Envíanos un mensaje
          </h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 text-[#6d381a]">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-[#6d381a]">
                  Nombre completo *
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#6d381a]">
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="telefono" className="text-[#6d381a]">
                  Teléfono
                </Label>
                <Input
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="empresa" className="text-[#6d381a]">
                  Empresa
                </Label>
                <Input
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="space-y-2 ">
              <Label htmlFor="servicio" className="text-[#6d381a]">
                Servicio de interés *
              </Label>
              <Select
              
                onValueChange={handleSelectChange}
                value={formData.servicio}
                required
              >
              <SelectTrigger className="text-[#6d381a]">
                  <SelectValue placeholder="Selecciona un servicio"  />
                </SelectTrigger>
                <SelectContent>
                  {[
                    "Reclutamiento y Selección",
                    "Gestión del Talento",
                    "Administración de Nómina",
                    "Gestión del Clima Laboral",
                    "Asesoría Legal",
                    "Evaluación del Desempeño",
                    "Outsourcing",
                    "Otro",
                  ].map((s) => (
                    <SelectItem key={s} value={s} className="text-[#6d381a] bg-white cursor-pointer hover:bg-[#f1df96]">
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="mensaje" className="text-[#6d381a]">
                Mensaje
              </Label>
              <Textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                placeholder="¿Cómo podemos ayudarte?"
                rows={4}
              />
            </div>
            

            {/* Hidden inputs for EmailJS */}
            <input type="hidden" name="fechaHora" value={new Date().toLocaleString()} />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#e4b53b] hover:bg-[#e4b53b]/90 text-white flex justify-center items-center gap-2 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin h-5 w-5" />
                  Enviando...
                </>
              ) : isSubmitted ? (
                <>
                  <CheckCircle className="h-5 w-5 text-white" />
                  ¡Enviado!
                </>
              ) : (
                "Enviar mensaje"
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
