import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/contexts/theme-context";
import { ProfileCard } from "@/components/profile-card/profile-card";
import Header from "@/components/header/header";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });

export const metadata: Metadata = {
  title: {
    template: "%s | Victor Garcia",
    default: "Victor Garcia"
  },
  description: "Victor Garcia's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // IDIOMA - CRIAR SUBPASTAS - LOCALHOST/US/RESTO - ["SLUG"]
  return (
    <html lang="en">
      <body className={inter.variable}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          <ProfileCard />
          <main className="bg-neutral-800 h-[80vh] w-[60vw] rounded-2xl overflow-hidden">
            <div className="h-full flex flex-col pb-4 px-8">
              <Header />
              <div className="container grow py-5 bg-neutral-950/40 rounded-b-xl overflow-y-auto">
                {children}
              </div>
            </div>
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
