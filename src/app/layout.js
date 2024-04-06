export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}
// layout component will auto generate as soon as app render completes
export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}