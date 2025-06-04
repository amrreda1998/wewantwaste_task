import { useState } from 'react';
import { skip_data } from '../data/skip_data';

function SkipSizePage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <div className="flex flex-col flex-1">
      {/* Header */}
      <header className="py-6 sm:py-8">
        <h1 className="text-2xl sm:text-4xl font-extrabold text-center mb-2 text-white">
          Choose Your Skip Size
        </h1>
        <p className="text-center text-neutral-400 text-base sm:text-lg">
          Select the skip size that best suits your needs
        </p>
      </header>

      {/* Card Grid */}
      <main className="flex-1 flex justify-center w-full">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 w-full max-w-6xl px-2 sm:px-4">
          {skip_data.map((skip) => {
            const isSelected = selectedId === skip.id;
            return (
              <div
                key={skip.id}
                className={`relative bg-neutral-800 rounded-2xl border-2 transition-all duration-200 shadow-lg overflow-hidden flex flex-col
                  ${
                    isSelected
                      ? 'border-primary ring-4 ring-primary/20'
                      : 'border-neutral-700 hover:border-primary/60'
                  }
                `}
              >
                {/* Image & Size Badge */}
                <div className="relative">
                  <img
                    src={skip.image}
                    alt={`${skip.size} Yard skip`}
                    className="w-full h-32 sm:h-56 object-cover"
                  />
                  <span className="absolute top-2 left-2 bg-primary text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow">
                    {skip.size} Yards
                  </span>
                </div>
                {/* Card Content */}
                <div className="flex-1 flex flex-col p-3 sm:p-6">
                  <h2 className="text-lg sm:text-2xl font-bold mb-2 text-white">
                    {skip.size} Yard Skip
                  </h2>
                  <p className="text-neutral-300 mb-1 text-xs sm:text-base">
                    {skip.hire_period_days} day hire period
                  </p>
                  <p className="text-primary text-lg sm:text-2xl font-bold mb-4">
                    £{skip.price_before_vat}
                  </p>
                  <button
                    className={`mt-auto w-full py-2 sm:py-3 rounded-lg font-semibold transition
                      ${
                        isSelected
                          ? 'bg-primary text-white cursor-default'
                          : 'bg-neutral-700 text-white hover:bg-primary hover:text-white'
                      }
                    `}
                    disabled={isSelected}
                    onClick={() => setSelectedId(skip.id)}
                  >
                    {isSelected ? 'Selected' : 'Select This Skip'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="w-full max-w-6xl mx-auto px-2 sm:px-4 py-4 flex flex-col sm:flex-row gap-2 sm:gap-4 justify-between items-stretch sm:items-center">
        <button className="bg-neutral-700 text-white px-4 py-2 rounded-lg hover:bg-neutral-600 font-semibold w-full sm:w-auto">
          Back
        </button>
        <button
          className="bg-primary text-white px-6 py-2 rounded-lg font-bold hover:bg-primary/90 disabled:opacity-50 w-full sm:w-auto"
          disabled={selectedId === null}
        >
          Continue
        </button>
      </footer>
    </div>
  );
}

export default SkipSizePage;
