import { REACT_CARDS } from "@/src/react-cards";
import { Header } from "@/src/Header";
import { Menu } from "@/src/Menu";
import { Cards } from "@/src/Cards";

export default async function Home({ searchParams }) {
  const { filter } = await searchParams;
  const currentFilter = filter || null;

  const filters = [...new Set(REACT_CARDS.map((c) => c.category))];

  console.log({ filters });

  return (
    <main className="m-auto flex h-full max-w-4xl flex-col px-4">
      <Header />
      <div className="mb-4 mt-8 flex py-2 flex-1 gap-4 overflow-auto max-lg:flex-col">
        <Menu currentFilter={currentFilter} filters={filters} />
        <div className="size-full overflow-auto">
          <div className="grid h-fit grid-cols-1 w-full md:grid-cols-2 lg:grid-col-3 gap-4">
            {REACT_CARDS.filter((card) => {
              if (!currentFilter) return true;
              return card.category === currentFilter;
            }).map((card) => (
              <Cards hideCategory={currentFilter} card={card} key={card.name} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
