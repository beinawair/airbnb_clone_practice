import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { format } from 'date-fns/esm';
import InfoCard from '../components/InfoCard';

function Search() {
  const router = useRouter();
  const { location, startDate, endDate, numberOfGuest } = router.query;

  const formatedStartDate = format(new Date(startDate), 'dd MMMM yy');
  const formatedEndDate = format(new Date(endDate), 'dd MMMM yy');
  const range = `${formatedStartDate} - ${formatedEndDate}`;

  return (
    <div className="h-screen">
      <Header
        placeholder={`${location} | ${range} | ${numberOfGuest} guests`}
      />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-xs">
            300+ Stays - {range} - {numberOfGuest} guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="buttonFilter">Cancellation Flexibility</p>
            <p className="buttonFilter">Type of Place</p>
            <p className="buttonFilter">Price</p>
            <p className="buttonFilter">Rooms and Beds</p>
            <p className="buttonFilter">More Filters</p>
          </div>

          <div className="flex flex-col"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default Search;
