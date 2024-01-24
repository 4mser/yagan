import Banner from "@/components/banner";
import Cartas from "@/components/cartas";
import Topbar from "@/components/topbar";

export default function Home() {
  return (
    <main>
      <Topbar />
      <Banner />

      <Cartas />
    </main>
  );
}
