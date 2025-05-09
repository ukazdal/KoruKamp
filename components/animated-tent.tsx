"use client"

import { useState } from "react"
import { motion } from "framer-motion"

interface AnimatedTentProps {
  imageUrl: string
  altText: string
  className?: string
}

export default function AnimatedTent({ imageUrl, altText, className = "" }: AnimatedTentProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`relative overflow-hidden rounded-lg ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Image */}
      <img
        src={imageUrl || "/placeholder.svg"}
        alt={altText}
        className="w-full h-full object-cover transition-transform duration-700 ease-out hover:scale-110"
      />

      {/* Tent Animation Overlay */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <motion.div className="w-24 h-24 md:w-32 md:h-32" initial="closed" animate={isHovered ? "open" : "closed"}>
          {/* Tent Top */}
          <motion.div
            className="absolute top-0 left-1/2 w-0 h-0 border-l-[40px] border-r-[40px] md:border-l-[60px] md:border-r-[60px] border-b-[50px] md:border-b-[70px] border-l-transparent border-r-transparent border-b-emerald-600"
            style={{ translateX: "-50%" }}
            variants={{
              closed: { scaleY: 0.2, opacity: 0 },
              open: { scaleY: 1, opacity: 0.9 },
            }}
            transition={{ duration: 0.5 }}
          />

          {/* Tent Base */}
          <motion.div
            className="absolute bottom-0 left-0 right-0 h-[10px] md:h-[15px] bg-emerald-800 rounded-b-lg"
            variants={{
              closed: { scaleX: 0.2, opacity: 0 },
              open: { scaleX: 1, opacity: 0.9 },
            }}
            transition={{ duration: 0.5, delay: 0.2 }}
          />

          {/* Tent Door */}
          <motion.div
            className="absolute bottom-[10px] md:bottom-[15px] left-1/2 w-[15px] md:w-[20px] h-[25px] md:h-[35px] bg-emerald-900 rounded-t-lg"
            style={{ translateX: "-50%" }}
            variants={{
              closed: { scaleY: 0, opacity: 0 },
              open: { scaleY: 1, opacity: 0.9 },
            }}
            transition={{ duration: 0.3, delay: 0.4 }}
          />
        </motion.div>
      </div>

      {/* Hover Overlay */}
      <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
    </div>
  )
}
