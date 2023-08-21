import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IELTS trial exams platform with real IELTS examiners",
  description:
    "We help you to improve your IELTS Speaking score and get higher results on a real test. With real man marking our IELTS tutors mark your recordings and give feedbacks. You can determine your mistakes and prepare your real IELTS exam easily",
  keywords:
    "english learning speaking, IELTS mentor, online speaking test, online writing test, online listening test, online reading test, IELTS Speaking, IELTS Writing, IELTS Listening, IELTS reading, online exam platform",
  icons: {
    icon: "./favicon.ico",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
