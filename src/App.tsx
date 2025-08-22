import Footer from "./components/Footer";
import Header from "./components/Header";
import Content from "./content";

export default function App() {
  return (
    <div className="font-roboto bg-neutral-950 text-white antialiased">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
