import { Inter, Varela_Round, Agbalumo } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";
import { Icon } from "@/assets";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GameOn",
  description: "",
};

// export const varela = Varela_Round({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-varela",
// });

// export const agbalumo = Agbalumo({
//   weight: "400",
//   subsets: ["latin"],
//   variable: "--font-agbalumo",
// });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="./icon.ico" type="image/icon type" />
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Varela+Round&display=swap"
          rel="stylesheet"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
