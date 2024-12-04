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
  description:
    'Gio Corporation brings unforgettable moments to life through professional dance classes, spectacular shows, corporate events, wedding choreography, hen parties, and DJ services. Experience joy, passion, and creativity with tailored entertainment for every occasion.',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en' suppressHydrationWarning>
      <head>
        {/* Meta Tags para SEO */}
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <meta name='description' content={metadata.description} />
        <meta name='keywords' content='Dance, Entertainment, Corporate Events, DJ, Wedding Dance, Hen Parties, Dance Classes' />
        <meta name='author' content='Gio Corporation' />
        <meta name='robots' content='index, follow' />

        {/* Open Graph (Facebook e outros) */}
        <meta property='og:title' content={metadata.title} />
        <meta property='og:description' content={metadata.description} />
        <meta property='og:type' content='website' />
        {/* <meta property='og:url' content='https://giocorporation.com/' /> */}
        <meta property='og:image' content='/path-to-image.jpg' />
        <meta property='og:site_name' content='Gio Corporation' />

        {/* Twitter Cards */}
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content={metadata.title} />
        <meta name='twitter:description' content={metadata.description} />
        <meta name='twitter:image' content='/path-to-image.jpg' />

        {/* Favicon */}
        <link rel='icon' href='/favicon.ico' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        <link rel='manifest' href='/site.webmanifest' />

        {/* Canonical Link */}
        {/* <link rel='canonical' href='https://giocorporation.com/' /> */}

        {/* Google Fonts */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
      </head>
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
