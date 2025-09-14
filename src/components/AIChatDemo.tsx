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
  showContactButton?: boolean
}


interface AIChatDemoProps {
  embedded?: boolean
}

export default function AIChatDemo({ embedded = false }: AIChatDemoProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleContactClick = () => {
    // Navigate to contact page
    window.location.href = '/contacto'
  }

  const handleWhatsAppClick = () => {
    // Open WhatsApp in new tab
    const whatsappNumber = '+5492901647084'
    const message = encodeURIComponent('Hola! Me interesa conocer más sobre los servicios de Elevas.')
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`
    window.open(whatsappUrl, '_blank')
  }

  const scrollToBottom = (force: boolean = false) => {
    if (messagesEndRef.current) {
      if (force) {
        messagesEndRef.current.scrollIntoView({ behavior: "instant", block: "end" })
      } else {
        messagesEndRef.current.scrollIntoView({ behavior: "smooth", block: "end" })
      }
    }
  }

  useEffect(() => {
    // Solo hacer scroll automático cuando se agregan mensajes o cambia isTyping
    const timeoutId = setTimeout(() => {
      scrollToBottom()
    }, 100)

    return () => clearTimeout(timeoutId)
  }, [messages.length, isTyping])

  useEffect(() => {
    if ((embedded || isOpen) && messages.length === 0) {
      // Mensaje de bienvenida automático
      setTimeout(() => {
        addBotMessage("¡Hola! 👋 Soy tu asistente de IA para consultas sobre RRHH. ¿En qué puedo ayudarte?")
      }, 1000)
    }
  }, [embedded, isOpen, messages.length])

  const addBotMessage = (content: string, showContactButton?: boolean) => {
    const botMessage: Message = {
      id: crypto.randomUUID() + "-bot",
      content,
      isBot: true,
      timestamp: new Date(),
      showContactButton
    }
    setMessages(prev => [...prev, botMessage])
  }

  const addUserMessage = (content: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID() + "-user",
      content,
      isBot: false,
      timestamp: new Date()
    }
    setMessages(prev => [...prev, userMessage])
  }

  const getBotResponse = async (userInput: string): Promise<{response: string, showContactButton?: boolean}> => {
    try {
      // Construir historial de conversación para el API
      const conversationHistory = messages.map(msg => ({
        role: msg.isBot ? 'assistant' : 'user',
        content: msg.content
      }))

      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: userInput,
          conversationHistory: conversationHistory
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        return {
          response: data.error || "Lo siento, hubo un error procesando tu consulta."
        }
      }

      return {
        response: data.response,
        showContactButton: data.showContactButton
      }
    } catch (error) {
      console.error('Error calling chat API:', error)
      return {
        response: "Lo siento, hubo un error de conexión. Por favor, intenta nuevamente."
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputValue.trim()) return

    const userInput = inputValue.trim()

    // Validar límite de 300 caracteres
    if (userInput.length > 300) {
      alert("El mensaje no puede exceder los 300 caracteres")
      inputRef.current?.focus()
      return
    }

    setInputValue("")

    // Mantener el foco en el input
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)

    // Agregar mensaje del usuario
    addUserMessage(userInput)

    // Simular "typing"
    setIsTyping(true)

    try {
      const botResponse = await getBotResponse(userInput)
      setIsTyping(false)
      addBotMessage(botResponse.response, botResponse.showContactButton)
    } catch (error) {
      setIsTyping(false)
      addBotMessage("Lo siento, hubo un error procesando tu consulta. Por favor, intenta nuevamente.")
    }
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
            <div className="overflow-y-auto p-6 space-y-4 h-64 sm:h-80 max-h-64 sm:max-h-80 scrollbar-thin scrollbar-thumb-[#e4b53b] scrollbar-track-[#f1df96]/30">
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
                      {message.isBot && message.showContactButton && (
                        <div className="mt-3 space-y-2">
                          <Button
                            onClick={handleContactClick}
                            className="bg-[#6d381a] hover:bg-[#6d381a]/90 text-white text-sm px-4 py-2 rounded-lg w-full"
                          >
                            📝 Completar formulario
                          </Button>
                          <Button
                            onClick={handleWhatsAppClick}
                            className="bg-[#25d366] hover:bg-[#25d366]/90 text-white text-sm px-4 py-2 rounded-lg w-full"
                          >
                            💬 WhatsApp directo
                          </Button>
                        </div>
                      )}
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
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Pregúntame sobre nuestros servicios de RRHH... (máx. 300 caracteres)"
                  className="flex-1 text-sm border-[#6d381a]/20 focus:border-[#e4b53b]"
                  disabled={isTyping}
                  maxLength={300}
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
                          {message.isBot && message.showContactButton && (
                            <div className="mt-2 space-y-1">
                              <Button
                                onClick={handleContactClick}
                                size="sm"
                                className="bg-elevas-accent-500 hover:bg-elevas-accent-600 text-white text-xs px-3 py-1 w-full"
                              >
                                📝 Completar formulario
                              </Button>
                              <Button
                                onClick={handleWhatsAppClick}
                                size="sm"
                                className="bg-[#25d366] hover:bg-[#25d366]/90 text-white text-xs px-3 py-1 w-full"
                              >
                                💬 WhatsApp directo
                              </Button>
                            </div>
                          )}
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
                      ref={inputRef}
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Escribe tu consulta... (máx. 300 caracteres)"
                      className="flex-1 text-sm"
                      disabled={isTyping}
                      maxLength={300}
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
      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6">
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