import Header from "./components/Header/Header";
// import Footer from "./components/Footer/Footer";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Header />
      {children}
      {/* <Footer
        data={data}
        currentIndex={currentIndex}
        handlePrevQuestion={handlePrevQuestion}
        handleNextQuestion={handleNextQuestion}
         handleFinishExam={handleFinishExam}
        setCurrentIndex={setCurrentIndex}
      /> */}
    </main>
  );
}
