"use client";
import "./globals.css";
import { Inter } from "next/font/google";
import { store } from "./store/store";
import { Provider } from "react-redux";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>{children}</Provider>,
      </body>
    </html>
  );
}
