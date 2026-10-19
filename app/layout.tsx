import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Tomas Rivetta | Python Developer | Backend | FastAPI",
  description:
    "Portafolio web de Tomas Rivetta, Python Developer especializado en backend, automatización, extracción de datos y APIs REST con FastAPI, Django y PostgreSQL.",
  icons: {
    icon: "/assets/favicon.svg",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={mono.variable} suppressHydrationWarning>
      <body className="font-mono text-[15px] antialiased">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
