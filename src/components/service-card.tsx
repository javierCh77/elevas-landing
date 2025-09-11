"use client"

import type React from "react"

import { motion } from "framer-motion"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

interface ServiceCardProps {
  id: string
  title: string
  description: string
  icon: React.ReactNode
}

export default function ServiceCard({ id, title, description, icon }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <Link href={`/servicios/${id}`} className="block h-full">
        <Card className="h-full transition-all duration-200 hover:shadow-lg group bg-white border border-[#6d381a]/20 hover:border-[#e4b53b] elevas-minimal-lift">
          <CardHeader className="pb-6">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-[#f1df96]/50 rounded-2xl text-[#e4b53b] group-hover:bg-[#e4b53b] group-hover:text-white transition-all duration-200 elevas-ai-glow">
                {icon}
              </div>
              <div className="flex-1">
                <CardTitle className="text-lg font-medium text-[#6d381a] group-hover:text-[#e4b53b] transition-colors duration-200 leading-snug">
                  {title}
                </CardTitle>
                <div className="w-6 h-px bg-[#e4b53b]/60 group-hover:w-12 transition-all duration-300 mt-2"></div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <CardDescription className="text-[#6d381a]/70 text-sm leading-relaxed mb-6 font-light">
              {description}
            </CardDescription>
            <div className="flex items-center text-[#e4b53b] text-sm font-light group-hover:text-[#6d381a] transition-colors">
              <span className="mr-2">Explorar</span>
              <ArrowRight className="h-3 w-3 transition-transform duration-200 group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

