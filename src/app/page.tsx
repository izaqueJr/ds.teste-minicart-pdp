import Shelf from "@/components/Shelf";

export default function Home() {
  return (
    <main className="container">
      <Shelf category="men's clothing" title="ROUPAS MASCULINAS" />
      <Shelf category="women's clothing" title="ROUPAS FEMININAS" />
      <Shelf category="jewelery" title="JÓIAS" />
    </main>
  );
}
