"use client";
import Header from "../components/header/Header";
import Sidebar from "../components/sidebar/Sidebar";
import s from "./style.module.scss";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={s.body}>
        <Header />
        <div className={s.dFlex}>
          <Sidebar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
