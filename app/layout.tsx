
import type { Metadata } from "next";
import Navbar from "./component/navbar"; // ປັບ path ໃຫ້ກົງກັບບ່ອນເກັບໄຟລ໌ Navbar.tsx
import "./globals.css";

export const metadata: Metadata = {
  title: "MyBlog.",
  description: "MyBlog application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="m-0 bg-background text-foreground antialiased">
        <Navbar>{children}</Navbar>
      </body>
    </html>
  );
}
  