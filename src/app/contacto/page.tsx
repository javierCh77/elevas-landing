"use client";

import type React from "react";
import { useState } from "react";
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
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

export default function ContactoPage() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    telefono: "",
    empresa: "",
    servicio: "",
    mensaje: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Formulario enviado",
      description: "Nos pondremos en contacto contigo pronto.",
    });

    setFormData({
      nombre: "",
      email: "",
      telefono: "",
      empresa: "",
      servicio: "",
      mensaje: "",
    });

    setIsSubmitting(false);
  };

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="px-4 py-12 md:px-20 md:py-20">
      <div className="mx-auto max-w-[800px] text-center mb-12">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-[#6d381a]">
          Contáctanos
        </h1>
        <p className="mt-4 text-lg text-[#6d381a]/70">
          Estamos aquí para ayudarte a transformar tu departamento de RRHH
        </p>
      </div>

      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <motion.div variants={fadeIn} initial="hidden" animate="visible">
          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-[#e4b53b] mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#6d381a]">
                  Dirección
                </h3>
                <p className="text-[#6d381a]/70">
                  Las margaritas 289 <br />
                  Ushuaia, Tierra del fuego
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-[#e4b53b] mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#6d381a]">
                  Teléfono
                </h3>
                <p className="text-[#6d381a]/70">
                  +54 (2901) 15-647084
                  <br />
                  Lunes a Viernes, 9:00 - 18:00
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-[#e4b53b] mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-[#6d381a]">Email</h3>
                <p className="text-[#6d381a]/70">
                  info@elevasconsulting.com
                  <br />
                  talento@elevasconsulting.com
                </p>
              </div>
            </div>
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

        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
        >
          <h2 className="text-2xl font-bold mb-6 text-[#6d381a]">
            Envíanos un mensaje
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-[#6d381a]">
                  Nombre completo
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="border-[#e4b53b]/30 focus:border-[#e4b53b] focus:ring-[#e4b53b]  text-gray-500"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#6d381a]">
                  Email
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="tu@email.com"
                  required
                  className="border-[#e4b53b]/30 focus:border-[#e4b53b] focus:ring-[#e4b53b] text-gray-500"
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
                  placeholder="Tu teléfono"
                  className="border-[#e4b53b]/30 focus:border-[#e4b53b] focus:ring-[#e4b53b] text-gray-500"
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
                  placeholder="Nombre de tu empresa"
                  className="border-[#e4b53b]/30 focus:border-[#e4b53b] focus:ring-[#e4b53b] text-gray-500"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="servicio" className="text-[#6d381a]">
                Servicio de interés
              </Label>
              <Select
                onValueChange={handleSelectChange}
                value={formData.servicio}
              >
                <SelectTrigger className="border-[#e4b53b]/30 focus:border-[#e4b53b] focus:ring-[#e4b53b] text-gray-500">
                  <SelectValue placeholder="Selecciona un servicio" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="reclutamiento">
                    Reclutamiento y Selección
                  </SelectItem>
                  <SelectItem value="talento">Gestión del Talento</SelectItem>
                  <SelectItem value="nomina">
                    Administración de Nómina
                  </SelectItem>
                  <SelectItem value="clima-laboral">
                    Gestión del Clima Laboral
                  </SelectItem>
                  <SelectItem value="legal">Asesoría Legal</SelectItem>
                  <SelectItem value="desempeno">
                    Evaluación del Desempeño
                  </SelectItem>
                  <SelectItem value="outsourcing">Outsourcing</SelectItem>
                  <SelectItem value="otro">Otro</SelectItem>
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
                className="border-[#e4b53b]/30 focus:border-[#e4b53b] focus:ring-[#e4b53b] text-gray-500"
              />
            </div>
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-[#e4b53b] hover:bg-[#e4b53b]/90 text-white"
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Enviando...
                </span>
              ) : (
                <span className="flex items-center">
                  Enviar mensaje <Send className="ml-2 h-4 w-4" />
                </span>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}
