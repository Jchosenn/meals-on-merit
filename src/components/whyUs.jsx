export default function WhyUs() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold text-center">
        Why Meals on Merit?
      </h2>

      <div className="grid md:grid-cols-3 gap-8 mt-12 text-center">
        <div>
          <h3 className="font-semibold text-brandYellow">
            Quality Ingredients
          </h3>
          <p className="text-gray-300 mt-2">
            Only the best ingredients go into every meal.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-brandYellow">
            Thoughtful Preparation
          </h3>
          <p className="text-gray-300 mt-2">
            Every order is prepared with care and intention.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-brandYellow">
            Reliable Delivery
          </h3>
          <p className="text-gray-300 mt-2">
            Fresh meals delivered right on time.
          </p>
        </div>
      </div>
    </section>
  );
}
