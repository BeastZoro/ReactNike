import {
  Hero,
  PopularProducts,
  Footer,
  CustomerReviews,
  SpecialOffer,
  Subscribe,
  SuperQuality,
  Services,
} from "./sections";

import Navbar from "./Components/Navbar";

const App = () => {
  return (
    <main className="relative">
      <Navbar />
      <section className="xl:padding-1 wide:padding-right padding-bottom">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-inline py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-inline sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-inline padding-top pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
