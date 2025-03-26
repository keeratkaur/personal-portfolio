'use client'

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ margin: 0, height: '100dvh' }} suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
} 