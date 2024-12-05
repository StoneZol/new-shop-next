import localFont from "next/font/local";
// import './favicon.ico'
import "./globals.css";
import StoreProvider from "@/store-redux/store-provider";
import { shop } from "@/shared/shop.сonfig";
import Header from "@/widgets/header/ui/header";
import Footer from "@/widgets/footer/ui/footer";
import MobileNavigator from "@/widgets/mobile-navigator/ui/mobile-navigator";
import ButtonScrollTop from "@/shared/mini-components/button-scroll-to-top/ui/button-scroll-to-top";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: {
    default:shop.name,
    template:`${shop.shortName}- %s`
  },
  description: shop.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <head>
        <link rel="icon" type="image/x-icon" href="./icon.ico" key='icon'/>
      </head>
        <StoreProvider>
          <body className={`${geistSans.variable} ${geistMono.variable}`}>
           <Header/>
            <main>{children}</main>
            <Footer/>
            <MobileNavigator/>
            <ButtonScrollTop/>
          </body>
        </StoreProvider>
    </html>
  );
}
