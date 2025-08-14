import '@/app/ui/global.css'
import {inter} from '@/app/ui/fonts'
import { ThemeProvider } from '@/app/ui/theme/ThemeProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
