import { useState } from 'react';
import { skip_data } from '../data/skip_data';

function SkipSizePage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
      <div className="min-h-screen bg-neutral-900 text-white flex flex-col">
        {/* Header */}
        <header className="py-8">
          <h1 className="text-4xl font-extrabold text-center mb-2 text-white">
            Choose Your Skip Size
          </h1>
          <p className="text-center text-neutral-400 text-lg">
            Select the skip size that best suits your needs
          </p>
        </header>

        {/* Card Grid */}
        <main className="flex-1 flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl px-4">
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
                      className="w-full h-56 object-cover"
                    />
                    <span className="absolute top-4 left-4 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full shadow">
                      {skip.size} Yards
                    </span>
                  </div>
                  {/* Card Content */}
                  <div className="flex-1 flex flex-col p-6">
                    <h2 className="text-2xl font-bold mb-2 text-white">
                      {skip.size} Yard Skip
                    </h2>
                    <p className="text-neutral-300 mb-1">
                      {skip.hire_period_days} day hire period
                    </p>
                    <p className="text-primary text-2xl font-bold mb-4">
                      £{skip.price_before_vat}
                    </p>
                    <button
                      className={`mt-auto w-full py-3 rounded-lg font-semibold transition
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
        <footer className="w-full max-w-6xl mx-auto px-4 py-6 flex justify-between items-center">
          <button className="bg-neutral-700 text-white px-6 py-2 rounded-lg hover:bg-neutral-600 font-semibold">
            Back
          </button>
          <button
            className="bg-primary text-white px-8 py-2 rounded-lg font-bold hover:bg-primary/90 disabled:opacity-50"
            disabled={selectedId === null}
          >
            Continue
          </button>
        </footer>
      </div>
  );
}

export default SkipSizePage;
