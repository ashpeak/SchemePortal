"use client"

import type { ReactNode } from "react"

interface StatCardProps {
  value: string
  label: string
  icon: ReactNode
}

export function StatCard({ value, label, icon }: StatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-lg bg-white/10 p-6 text-center backdrop-blur-sm">
      <div className="mb-3 rounded-full bg-white/20 p-3">{icon}</div>
      <h3 className="text-3xl font-bold">{value}</h3>
      <p className="mt-1 text-white/80">{label}</p>
    </div>
  )
}
