import { Montserrat } from "next/font/google";
import "./globals.css";
import React from "react";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300", "400", "500", "600", "700"],
});



import NotificationBar from "./ui/header/notification-bar";
import Header from "./ui/header/header";
import Footer from "./ui/footer/footer"; 
import Newsletter from "./ui/footer/newsletter"



export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${montserrat.variable}`}>
        <NotificationBar text="Get 25% OFF on your first order."/>
        <Header/>
        {children}
        <Newsletter/>
        <Footer/>
      </body>
    </html>
  );
}
