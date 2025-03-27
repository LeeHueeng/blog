import { ThemeProvider } from "@/@layout/them/ThemProvider";
import "./globals.css";
import Navbar from "@/@layout/navbar/Navbar";
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning className="overflow-x-hidden">
        <head />
        <body className="overflow-x-hidden">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
