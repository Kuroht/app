import React from 'react'
import NavAdmin from "@/app/components/navmenu/navAdmin"

export default function DashboardLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
  return (
    <>
        <NavAdmin />
        <main>
        {children}
        </main>
    </>
  )
}
