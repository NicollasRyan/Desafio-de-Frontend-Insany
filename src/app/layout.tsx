import GlobalStyles from "./components/GlobalStyles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "InsanyShop",
  description: "Desafio de Frontend - Insany",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalStyles />
      <body>
        {children}
      </body>
    </html>
  );
}
