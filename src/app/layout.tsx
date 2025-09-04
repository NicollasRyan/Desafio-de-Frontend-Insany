import GlobalStyles from "../components/GlobalStyle";
import { Metadata } from "next";
import { Header } from "../components/Header";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
