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
        <Card className="h-full transition-all duration-300 hover:shadow-md hover:border-[#e4b53b] group">
          <CardHeader className="flex flex-row items-center gap-4">
            <div className="text-[#e4b53b] transition-transform duration-300 group-hover:scale-110">{icon}</div>
            <CardTitle className="text-xl text-[#6d381a] group-hover:text-[#e4b53b] transition-colors">
              {title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-[#6d381a]/70 text-base">{description}</CardDescription>
            <div className="mt-4 flex items-center text-[#e4b53b] text-sm font-medium">
              <span className="mr-2">Saber más</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  )
}

