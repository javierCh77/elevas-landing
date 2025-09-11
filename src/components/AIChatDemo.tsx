"use client"

import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, Bot, User, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Message {
  id: string
  content: string
  isBot: boolean
  timestamp: Date
}

const predefinedResponses = [
  {
    trigger: ["hola", "hello", "buenos días", "buenas tardes"],
    response: "¡Hola! Soy el asistente de IA de Elevas. ¿En qué puedo ayudarte con tus necesidades de RRHH? 🤖"
  },
  {
    trigger: ["servicios", "qué hacen", "que ofrecen"],
    response: "Ofrecemos servicios inteligentes de RRHH: selección de talento con IA, gestión de desempeño, compensaciones, clima organizacional y más. ¿Te interesa algún servicio específico?"
  },
  {
    trigger: ["precios", "costo", "cotización"],
    response: "Nuestros servicios se adaptan a cada organización. Te invito a agendar una consulta gratuita donde analizaremos tus necesidades específicas y te daremos una propuesta personalizada."
  },
  {
    trigger: ["ia", "inteligencia artificial", "tecnología"],
    response: "Utilizamos IA avanzada para optimizar procesos de RRHH: análisis predictivo de rotación, matching inteligente de candidatos, y automatización de tareas repetitivas, siempre manteniendo el toque humano."
  },
  {
    trigger: ["contacto", "reunión", "hablar"],
    response: "¡Perfecto! Puedes contactarnos directamente o agendar una reunión. Nuestro equipo estará encantado de conocer tu empresa y diseñar soluciones a medida."
  }
]

interface AIChatDemoProps {
  embedded?: boolean
}

export default function AIChatDemo({ embedded = false }: AIChatDemoProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  useEffect(() => {
    if ((embedded || isOpen) && messages.length === 0) {
      // Mensaje de bienvenida automático
      setTimeout(() => {
        addBotMessage("¡Hola! 👋 Soy tu asistente de IA para consultas sobre RRHH. ¿En qué puedo ayudarte?")
      }, 1000)
    }
  }, [embedded, isOpen, messages.length])

  const addBotMessage = (content: string) => {
    const botMessage: Message = {
      id: Date.now().toString() + "-bot",
      content,
      isBot: true,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, botMessage])
    // Scroll adicional con delay para asegurar que se muestre
    setTimeout(() => scrollToBottom(), 100)
  }

  const addUserMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString() + "-user",
      content,
      isBot: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
    // Scroll inmediato para mostrar mensaje del usuario
    setTimeout(() => scrollToBottom(), 50)
  }

  const getBotResponse = (userInput: string): string => {
    const input = userInput.toLowerCase()
    
    for (const responseData of predefinedResponses) {
      if (responseData.trigger.some(trigger => input.includes(trigger))) {
        return responseData.response
      }
    }
    
    // Respuesta por defecto
    return "Esa es una excelente pregunta. Te recomiendo contactar directamente con nuestro equipo para una respuesta más detallada. ¿Te gustaría agendar una consulta?"
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userInput = inputValue.trim()
    setInputValue("")
    
    // Agregar mensaje del usuario
    addUserMessage(userInput)
    
    // Simular "typing"
    setIsTyping(true)
    
    setTimeout(() => {
      setIsTyping(false)
      const botResponse = getBotResponse(userInput)
      addBotMessage(botResponse)
    }, 1500)
  }

  if (embedded) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="w-full max-w-4xl mx-auto shadow-xl border-[#6d381a]/20 bg-white">
          <CardHeader className="border-b border-[#6d381a]/10 bg-gradient-to-r from-[#f1df96]/30 to-[#e4b53b]/10">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-[#e4b53b] rounded-full">
                <Bot className="h-5 w-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-lg font-medium text-[#6d381a]">
                  Asistente IA Elevas
                </CardTitle>
                <p className="text-sm text-[#6d381a]/70">
                  Especializado en RRHH • Disponible 24/7
                </p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col">
            <div className="overflow-y-auto p-6 space-y-4 h-80 max-h-80 scrollbar-thin scrollbar-thumb-[#e4b53b] scrollbar-track-[#f1df96]/30">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div className={`flex items-start gap-3 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                    <div className={`p-2 rounded-full ${message.isBot ? 'bg-[#f1df96]' : 'bg-[#e4b53b]/20'}`}>
                      {message.isBot ? (
                        <Bot className="h-4 w-4 text-[#e4b53b]" />
                      ) : (
                        <User className="h-4 w-4 text-[#6d381a]" />
                      )}
                    </div>
                    <div
                      className={`px-4 py-3 rounded-2xl text-sm ${
                        message.isBot
                          ? 'bg-[#f1df96]/50 text-[#6d381a] border border-[#e4b53b]/20'
                          : 'bg-[#e4b53b] text-white'
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                </motion.div>
              ))}
              
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="flex items-start gap-3">
                    <div className="p-2 rounded-full bg-[#f1df96]">
                      <Bot className="h-4 w-4 text-[#e4b53b]" />
                    </div>
                    <div className="px-4 py-3 rounded-2xl bg-[#f1df96]/50 border border-[#e4b53b]/20">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-[#e4b53b] rounded-full elevas-typing-indicator"></div>
                        <div className="w-2 h-2 bg-[#e4b53b] rounded-full elevas-typing-indicator" style={{animationDelay: "0.2s"}}></div>
                        <div className="w-2 h-2 bg-[#e4b53b] rounded-full elevas-typing-indicator" style={{animationDelay: "0.4s"}}></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>
            
            <div className="p-6 border-t border-[#6d381a]/10 bg-[#f1df96]/20">
              <form onSubmit={handleSubmit} className="flex gap-3">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Pregúntame sobre nuestros servicios de RRHH..."
                  className="flex-1 text-sm border-[#6d381a]/20 focus:border-[#e4b53b]"
                  disabled={isTyping}
                />
                <Button
                  type="submit"
                  disabled={isTyping || !inputValue.trim()}
                  className="bg-[#e4b53b] hover:bg-[#e4b53b]/90 px-6"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </form>
              <p className="text-xs text-[#6d381a]/60 mt-3 text-center">
                Asistente IA especializado en recursos humanos
              </p>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    )
  }

  return (
    <div className="w-full h-full">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="w-full h-full"
          >
            <Card className="w-full h-full shadow-2xl border-[#6d381a]/20 elevas-glass">
              <CardHeader className="border-b border-elevas-neutral-100 bg-gradient-to-r from-elevas-primary-50 to-elevas-accent-50">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-elevas-primary-500 rounded-full">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-sm font-medium text-elevas-neutral-800">
                        Asistente IA Elevas
                      </CardTitle>
                      <p className="text-xs text-elevas-neutral-600">
                        Siempre disponible
                      </p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setIsOpen(false)}
                    className="h-8 w-8 p-0"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent className="p-0 flex flex-col h-full">
                <div className="flex-1 overflow-y-auto p-4 space-y-4 max-h-64">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                    >
                      <div className={`flex items-start gap-2 max-w-[80%] ${message.isBot ? 'flex-row' : 'flex-row-reverse'}`}>
                        <div className={`p-1.5 rounded-full ${message.isBot ? 'bg-elevas-primary-100' : 'bg-elevas-accent-100'}`}>
                          {message.isBot ? (
                            <Bot className="h-3 w-3 text-elevas-primary-600" />
                          ) : (
                            <User className="h-3 w-3 text-elevas-accent-600" />
                          )}
                        </div>
                        <div
                          className={`px-3 py-2 rounded-2xl text-sm ${
                            message.isBot
                              ? 'bg-elevas-neutral-100 text-elevas-neutral-800'
                              : 'bg-elevas-primary-500 text-white'
                          }`}
                        >
                          {message.content}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {isTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex justify-start"
                    >
                      <div className="flex items-start gap-2">
                        <div className="p-1.5 rounded-full bg-elevas-primary-100">
                          <Bot className="h-3 w-3 text-elevas-primary-600" />
                        </div>
                        <div className="px-3 py-2 rounded-2xl bg-elevas-neutral-100">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-elevas-neutral-400 rounded-full elevas-typing-indicator"></div>
                            <div className="w-2 h-2 bg-elevas-neutral-400 rounded-full elevas-typing-indicator" style={{animationDelay: "0.2s"}}></div>
                            <div className="w-2 h-2 bg-elevas-neutral-400 rounded-full elevas-typing-indicator" style={{animationDelay: "0.4s"}}></div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                  
                  <div ref={messagesEndRef} />
                </div>
                
                <div className="p-4 border-t border-elevas-neutral-100">
                  <form onSubmit={handleSubmit} className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Escribe tu consulta..."
                      className="flex-1 text-sm"
                      disabled={isTyping}
                    />
                    <Button
                      type="submit"
                      size="sm"
                      disabled={isTyping || !inputValue.trim()}
                      className="bg-elevas-primary-500 hover:bg-elevas-primary-600"
                    >
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Chat Button - Fixed at bottom right */}
      <div className="fixed bottom-4 right-4">
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button
            onClick={() => setIsOpen(!isOpen)}
            className="h-14 w-14 rounded-full bg-elevas-primary-500 hover:bg-elevas-primary-600 shadow-lg elevas-ai-glow"
          >
            <MessageCircle className="h-6 w-6 text-white" />
          </Button>
        </motion.div>
        
        {/* Notification indicator */}
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="absolute -top-1 -right-1 h-4 w-4 bg-elevas-accent-400 rounded-full flex items-center justify-center"
          >
            <div className="h-2 w-2 bg-white rounded-full elevas-pulse-soft"></div>
          </motion.div>
        )}
      </div>
    </div>
  )
}