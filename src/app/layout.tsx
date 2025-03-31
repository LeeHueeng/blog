import { ThemeProvider } from "@/@layout/them/ThemProvider";
import "./globals.css";
import Navbar from "@/@layout/navbar/Navbar";
import Footer from "@/@layout/footer/footer";
interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <>
      <html lang="ko" suppressHydrationWarning>
        <head />
        <body className="overflow-x-hidden">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            <div className="flex justify-center items-center min-h-[calc(100vh-8rem)]">
              {children}
            </div>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
