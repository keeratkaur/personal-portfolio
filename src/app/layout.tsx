import '../styles/globals.css'

export const metadata = {
  title: 'Portfolio',
  description: 'Personal Portfolio built with Next.js and Sanity',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}
