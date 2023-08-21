import s from "./login.module.scss";

export const metadata = {
  title: "Morooq login",
  description: "Morooq login page",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={s.body}>
        <main>{children}</main>
      </body>
    </html>
  );
}
