import { RevenueEstimator } from "@/components/revenue-estimator";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Airbnb Revenue</span>
            <span className="block text-rose-600">Estimator</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Calculate your potential Airbnb earnings with our advanced revenue estimator. Make data-driven decisions for your property.
          </p>
        </div>
        <RevenueEstimator />
      </div>
    </main>
  );
}