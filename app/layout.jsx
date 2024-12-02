import { Outfit } from 'next/font/google';
import './globals.css';

// components
import Header from '@/components/Header';
import Footer from '@/components/Footer';
// theme provider
import { ThemeProvider } from '@/components/ThemeProvider';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata = {
  title: 'Gio Corporation',
  description: 'Gio Corporation brings unforgettable moments to life through professional dance classes, spectacular shows, corporate events, wedding choreography, hen parties, and DJ services. Experience joy, passion, and creativity with tailored entertainment for every occasion.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={outfit.className}>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Header />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
