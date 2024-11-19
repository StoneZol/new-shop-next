import localFont from "next/font/local";
import "./globals.css";
import StoreProvider from "@/store-redux/store-provider";
import { shop } from "@/shared/shopConfig";
import Header from "@/widgets/header/ui/header";

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
  title: shop.name,
  description: shop.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StoreProvider>
          <Header/>
            {children}
        </StoreProvider>
      </body>
    </html>
  );
}
