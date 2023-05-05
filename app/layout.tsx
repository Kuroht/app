import './globals.css'
import Nav from './components/navmenu/navMenu'

export const metadata = {
  title: 'Lugano',
  description: 'Lugano WebSite',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-full h-full bg-slate-950">
        <Nav/>
        {children}
      </body>
    </html>
  )
}
