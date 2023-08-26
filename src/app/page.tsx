import CarCard from '@/components/CarCard';
import CustomFilter from '@/components/CustomFilter';
import Hero from '@/components/Hero';
import Searchbar from '@/components/Searchbar';
import ShowMore from '@/components/ShowMore';
import { fuels, yearsOfProduction } from '@/constants';
import { fetchCars } from '@/utils';
import { Filter } from '../../types';

interface Props {
  searchParams: Filter;
}

export default async function HomePage({ searchParams }: Props) {
  const allCars = await fetchCars({
    manufacturer: searchParams.manufacturer || '',
    year: searchParams.year || 2022,
    fuel: searchParams.fuel || '',
    limit: searchParams.limit || 10,
    model: searchParams.model || ''
  });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

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
          <div className="home__filter-container">
            <CustomFilter title="fuel" options={fuels} />
            <CustomFilter title="year" options={yearsOfProduction} />
          </div>
        </div>

        {isDataEmpty ? (
          <div className="home__error-container">
            <h2 className="text-xl font-bold text-black">Oops, no results...</h2>
            <p>{allCars?.message}</p>
          </div>
        ) : (
          <section>
            <div className="home__cars-wrapper">{allCars?.map((car) => <CarCard car={car} />)}</div>
            <ShowMore
              pageNumber={(searchParams.limit || 10) / 10}
              isNext={(searchParams.limit || 10) > allCars.length}
            />
          </section>
        )}
      </section>
    </main>
  );
}
