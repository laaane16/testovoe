import type { Metadata } from "next";
import "@/styles/_index.scss";
import { satoshi } from "@/components/UI/fonts/fonts";
import { Header, Footer } from "@/components";
import { Providers } from "@/redux/providers";


export const metadata: Metadata = {
  title: {
    template: "%s | Gushop",
    default: "Gushop",
  },
  description: "The best shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${satoshi.className}`}>
        <Providers>
          <div className="layout">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
