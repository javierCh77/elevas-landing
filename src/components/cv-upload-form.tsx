"use client"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { motion, AnimatePresence } from "framer-motion"
import {
  Upload,
  FileText,
  X,
  Check,
  AlertCircle,
  User,
  Mail,
  Phone,
  MapPin,
  Briefcase
} from "lucide-react"

interface FormData {
  nombre: string
  email: string
  telefono: string
  ubicacion: string
  posicion: string
  mensaje: string
  cv: File | null
}

export default function CVUploadForm() {
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    email: "",
    telefono: "",
    ubicacion: "",
    posicion: "",
    mensaje: "",
    cv: null
  })

  const [isDragging, setIsDragging] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState("")

  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleFileSelect = (file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      setError("El archivo no puede exceder 5MB")
      return
    }

    if (!file.type.includes("pdf") && !file.type.includes("word") && !file.type.includes("msword")) {
      setError("Solo se aceptan archivos PDF, DOC y DOCX")
      return
    }

    setFormData(prev => ({ ...prev, cv: file }))
    setError("")
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files)
    if (files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      handleFileSelect(files[0])
    }
  }

  const removeFile = () => {
    setFormData(prev => ({ ...prev, cv: null }))
    if (fileInputRef.current) {
      fileInputRef.current.value = ""
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError("")

    try {
      // Simular envío del formulario
      await new Promise(resolve => setTimeout(resolve, 2000))

      setIsSubmitted(true)
      // Reset form after successful submission
      setFormData({
        nombre: "",
        email: "",
        telefono: "",
        ubicacion: "",
        posicion: "",
        mensaje: "",
        cv: null
      })
      if (fileInputRef.current) {
        fileInputRef.current.value = ""
      }
    } catch {
      setError("Hubo un error al enviar tu postulación. Por favor, inténtalo nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12"
      >
        <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-semibold text-[#6d381a] mb-3 elevas-heading">
          ¡Postulación enviada!
        </h3>
        <p className="text-[#6d381a]/70 mb-6 elevas-body">
          Hemos recibido tu CV y datos. Nos pondremos en contacto contigo si tu perfil coincide con nuestras búsquedas.
        </p>
        <Button
          onClick={() => setIsSubmitted(false)}
          variant="outline"
          className="border-[#6d381a]/30 text-[#6d381a] hover:bg-[#6d381a]/10"
        >
          Enviar otra postulación
        </Button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Card className="bg-white border border-[#6d381a]/10 rounded-2xl overflow-hidden elevas-shadow-md">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Información Personal */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="nombre" className="text-[#6d381a] font-medium flex items-center gap-2">
                  <User className="h-4 w-4 text-[#e4b53b]" />
                  Nombre completo *
                </Label>
                <Input
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  className="border-[#6d381a]/20 focus:border-[#e4b53b] focus:ring-[#e4b53b]/20"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-[#6d381a] font-medium flex items-center gap-2">
                  <Mail className="h-4 w-4 text-[#e4b53b]" />
                  Email *
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="border-[#6d381a]/20 focus:border-[#e4b53b] focus:ring-[#e4b53b]/20"
                  placeholder="tu@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="telefono" className="text-[#6d381a] font-medium flex items-center gap-2">
                  <Phone className="h-4 w-4 text-[#e4b53b]" />
                  Teléfono
                </Label>
                <Input
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  className="border-[#6d381a]/20 focus:border-[#e4b53b] focus:ring-[#e4b53b]/20"
                  placeholder="+54 9 ..."
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="ubicacion" className="text-[#6d381a] font-medium flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-[#e4b53b]" />
                  Ubicación
                </Label>
                <Input
                  id="ubicacion"
                  name="ubicacion"
                  value={formData.ubicacion}
                  onChange={handleInputChange}
                  className="border-[#6d381a]/20 focus:border-[#e4b53b] focus:ring-[#e4b53b]/20"
                  placeholder="Ciudad, País"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="posicion" className="text-[#6d381a] font-medium flex items-center gap-2">
                <Briefcase className="h-4 w-4 text-[#e4b53b]" />
                Posición de interés
              </Label>
              <Input
                id="posicion"
                name="posicion"
                value={formData.posicion}
                onChange={handleInputChange}
                className="border-[#6d381a]/20 focus:border-[#e4b53b] focus:ring-[#e4b53b]/20"
                placeholder="¿Para qué posición te gustaría postularte?"
              />
            </div>

            {/* CV Upload */}
            <div className="space-y-2">
              <Label className="text-[#6d381a] font-medium flex items-center gap-2">
                <Upload className="h-4 w-4 text-[#e4b53b]" />
                Curriculum Vitae *
              </Label>

              <div
                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 ${
                  isDragging
                    ? "border-[#e4b53b] bg-[#f1df96]/20"
                    : "border-[#6d381a]/20 hover:border-[#e4b53b]/50"
                }`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
              >
                <input
                  ref={fileInputRef}
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileInputChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />

                <AnimatePresence mode="wait">
                  {formData.cv ? (
                    <motion.div
                      key="file-selected"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      className="flex items-center justify-center gap-3"
                    >
                      <FileText className="h-8 w-8 text-[#e4b53b]" />
                      <div className="flex-1 text-left">
                        <p className="text-[#6d381a] font-medium">{formData.cv.name}</p>
                        <p className="text-sm text-[#6d381a]/60">
                          {(formData.cv.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={removeFile}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="upload-prompt"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <Upload className="h-12 w-12 text-[#e4b53b] mx-auto mb-4" />
                      <p className="text-[#6d381a] font-medium mb-2">
                        Arrastrá tu CV aquí o hacé clic para seleccionar
                      </p>
                      <p className="text-sm text-[#6d381a]/60">
                        PDF, DOC o DOCX - Máximo 5MB
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            {/* Mensaje */}
            <div className="space-y-2">
              <Label htmlFor="mensaje" className="text-[#6d381a] font-medium">
                Mensaje adicional
              </Label>
              <Textarea
                id="mensaje"
                name="mensaje"
                value={formData.mensaje}
                onChange={handleInputChange}
                rows={4}
                className="border-[#6d381a]/20 focus:border-[#e4b53b] focus:ring-[#e4b53b]/20"
                placeholder="Contanos sobre tu experiencia, motivaciones o cualquier información adicional que consideres relevante..."
              />
            </div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg"
                >
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm">{error}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting || !formData.nombre || !formData.email || !formData.cv}
              className="w-full bg-[#e4b53b] hover:bg-[#d4a332] text-white font-semibold py-3 rounded-xl elevas-lift elevas-press elevas-shadow-colored disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full"></div>
                  <span>Enviando postulación...</span>
                </div>
              ) : (
                "Enviar postulación"
              )}
            </Button>

            <p className="text-xs text-[#6d381a]/60 text-center">
              Al enviar tu postulación, aceptás que procesemos tus datos personales para evaluar tu candidatura.
            </p>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}