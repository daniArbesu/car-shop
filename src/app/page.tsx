import CustomFilter from '@/components/CustomFilter';
import Hero from '@/components/Hero';
import Searchbar from '@/components/Searchbar';

export default function HomePage() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <section className="padding-x padding-y max-width mt-12" id="discover">
        <div className="home__text-container">
          <h2 className="text-4xl font-extrabold">Car Catalogue</h2>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <Searchbar />
        </div>
        <div className="home__filter-container">
          <CustomFilter title="fuel" />
          <CustomFilter title="year" />
        </div>
      </section>
    </main>
  );
}
