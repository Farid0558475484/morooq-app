import Top from "./components/Home/Top";
import Main from "./components/Home/Main";
import Bottom from "./components/Home/Bottom";

export default async function Home() {
  return (
    <main>
      <Top />
      <Main />
      <Bottom />
    </main>
  );
}
