import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
  title: "Zee Dev | Portfolio",
  description:
    "Showcasing the projects and skills of Zee Dev, a React and Next.js Developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-primary text-secondary font-poppins">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="container py-10">{children}</main>

        {/* Footer */}
        <footer className="mt-10 py-6 bg-background text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Zee Dev. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
