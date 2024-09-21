import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

// Configure the Inter font
const inter = Inter({
  variable: "--inter-font", // Use 'variable' instead of 'weight'
  subsets: ["latin"], // Use an array for 'subsets'
});

export const metadata: Metadata = {
  title: "Teki Technologies",
  description: "Developing Modern Web solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
