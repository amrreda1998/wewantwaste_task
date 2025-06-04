import { useState, useEffect } from 'react';
import { skip_data } from '../data/skip_data';
import { AlertTriangle, Info } from 'lucide-react';

function SkipSizePage() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [modalSkip, setModalSkip] = useState<(typeof skip_data)[0] | null>(
    null
  );
  const [sortBy, setSortBy] = useState<'size' | 'price'>('size');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [showAllowedOnRoadOnly, setShowAllowedOnRoadOnly] = useState(false);
  const [loading, setLoading] = useState(true);

  // Simulate loading (replace with real data fetching if needed)
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200); // 1.2s fake load
    return () => clearTimeout(timer);
  }, []);

  // Sort logic
  const sortedSkips = [...skip_data].sort((a, b) => {
    const aValue = sortBy === 'size' ? a.size : a.price_before_vat;
    const bValue = sortBy === 'size' ? b.size : b.price_before_vat;
    if (sortOrder === 'asc') {
      return aValue - bValue;
    } else {
      return bValue - aValue;
    }
  });

  const filteredSkips = showAllowedOnRoadOnly
    ? sortedSkips.filter((skip) => skip.allowed_on_road)
    : sortedSkips;

  return (
    <div className="flex flex-col flex-1 min-h-screen p-2 sm:p-6 bg-gradient-to-br from-gray-100 via-white to-gray-200">
      {/* Header */}
      <header className="py-6 sm:py-8">
        <h1 className="text-3xl sm:text-5xl font-extrabold text-center mb-2 text-black drop-shadow">
          Choose Your Skip Size
        </h1>
        <p className="text-center text-gray-800 text-base sm:text-lg">
          Select the skip size that best suits your needs
        </p>
      </header>

      {/* Sort Controls */}
      <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center justify-center mb-4 px-2 w-full max-w-2xl mx-auto">
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value as 'size' | 'price')}
          className="w-full sm:w-40 px-3 py-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
        >
          <option value="size">Sort by Size</option>
          <option value="price">Sort by Price</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
          className="w-full sm:w-32 px-3 py-2 rounded-lg bg-white text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black transition"
        >
          <option value="asc">Asc</option>
          <option value="desc">Desc</option>
        </select>
        <div className="flex items-center gap-2">
          <input
            id="allowedOnRoad"
            type="checkbox"
            checked={showAllowedOnRoadOnly}
            onChange={(e) => setShowAllowedOnRoadOnly(e.target.checked)}
            className="w-4 h-4 text-black border-gray-300 rounded focus:ring-2 focus:ring-black transition"
          />
          <label
            htmlFor="allowedOnRoad"
            className="text-gray-700 text-sm sm:text-base"
          >
            Show allowed on road only
          </label>
        </div>
      </div>

      {/* Card Grid */}
      <main className="flex-1 flex justify-center w-full">
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8 w-full max-w-6xl px-2 sm:px-4">
          {loading
            ? Array.from({ length: 6 }).map((_, i) => <SkipCardSkeleton key={i} />)
            : filteredSkips.map((skip) => {
                const isSelected = selectedId === skip.id;
                return (
                  <div
                    key={skip.id}
                    onClick={() => setSelectedId(skip.id)}
                    role="button"
                    aria-selected={isSelected}
                    tabIndex={0}
                    className={`relative bg-white rounded-3xl border-2 transition-all duration-200 shadow-xl hover:shadow-2xl overflow-hidden flex flex-col cursor-pointer
                  ${
                    isSelected
                      ? 'border-black ring-4 ring-black/30 scale-105'
                      : 'border-gray-300 hover:border-black hover:scale-102'
                  }
                `}
                    style={{ minHeight: 340 }}
                  >
                    {/* Image & Size Badge */}
                    <div className="relative">
                      <img
                        src={skip.image}
                        alt={`${skip.size} Yard skip`}
                        className="w-full h-32 sm:h-56 object-cover"
                      />
                      <span className="absolute top-2 left-2 bg-black text-white text-xs sm:text-sm font-bold px-3 py-1 rounded-full shadow">
                        {skip.size} Yards
                      </span>
                      {!skip.allowed_on_road && (
                        <span className="absolute bottom-2 left-2 flex items-center gap-1 bg-black/90 text-yellow-300 text-xs sm:text-sm font-semibold px-3 py-1 rounded-lg shadow">
                          <AlertTriangle
                            size={16}
                            className="inline-block"
                            aria-hidden
                          />
                          Not Allowed On The Road
                        </span>
                      )}
                      {isSelected && (
                        <span className="absolute top-2 right-2 bg-black text-white rounded-full px-2 py-1 text-xs font-bold shadow">
                          ✓
                        </span>
                      )}
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setModalSkip(skip);
                        }}
                        className="absolute bottom-2 right-2 flex items-center gap-1 bg-black/80 text-white rounded-full px-3 py-2 hover:bg-black transition text-xs sm:text-sm font-semibold shadow"
                        title="More Info"
                      >
                        <Info size={18} />
                        <span className="hidden sm:inline">More Info</span>
                      </button>
                    </div>
                    {/* Card Content */}
                    <div className="flex-1 flex flex-col p-4 sm:p-6">
                      <h2 className="text-lg sm:text-2xl font-bold mb-2 text-black">
                        {skip.size} Yard Skip
                      </h2>
                      <p className="text-gray-700 mb-1 text-xs sm:text-base">
                        {skip.hire_period_days} day hire period
                      </p>
                      <p className="text-black text-lg sm:text-2xl font-bold mb-4">
                        £{skip.price_before_vat}
                      </p>
                      <button
                        className={`mt-auto w-full py-2 sm:py-3 rounded-lg font-semibold transition pointer-events-none
                      ${
                        isSelected
                          ? 'bg-black text-white'
                          : 'bg-gray-200 text-black'
                      }
                    `}
                        tabIndex={-1}
                        aria-hidden
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
      <footer
        className="
          bg-white border-t border-gray-200
          fixed bottom-0 left-0 w-full z-40
          sm:static sm:bg-transparent sm:border-0
          px-2 sm:px-4 py-4 flex flex-col sm:flex-row gap-2 sm:gap-4
          justify-between items-stretch sm:items-center
          transition
        "
      >
        <button className="bg-gray-200 text-black px-4 py-2 rounded-lg hover:bg-gray-300 font-semibold w-full sm:w-auto border border-gray-300">
          Back
        </button>
        <button
          className="bg-black text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-900 disabled:opacity-50 w-full sm:w-auto"
          disabled={selectedId === null}
        >
          Continue
        </button>
      </footer>

      {/* Modal for Skip Details */}
      {modalSkip && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6 relative">
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-black text-2xl"
              onClick={() => setModalSkip(null)}
              aria-label="Close"
            >
              ×
            </button>
            <div className="flex flex-col items-center">
              <img
                src={modalSkip.image}
                alt={`${modalSkip.size} Yard skip`}
                className="w-40 h-28 object-cover rounded-xl mb-4"
              />
              <h2 className="text-2xl font-bold mb-2 text-black">
                {modalSkip.size} Yard Skip
              </h2>
              <p className="text-gray-700 mb-2">
                {modalSkip.hire_period_days} day hire period
              </p>
              <p className="text-black text-xl font-bold mb-2">
                £{modalSkip.price_before_vat}
              </p>
              <ul className="text-sm text-gray-700 mb-2">
                <li>
                  <span className="font-semibold">Allowed on road:</span>{' '}
                  {modalSkip.allowed_on_road ? 'Yes' : 'No'}
                </li>
                <li>
                  <span className="font-semibold">Allows heavy waste:</span>{' '}
                  {modalSkip.allows_heavy_waste ? 'Yes' : 'No'}
                </li>
                {/* Add more details as needed */}
              </ul>
              {!modalSkip.allowed_on_road && (
                <div className="flex items-center gap-2 bg-black/90 text-yellow-300 text-xs font-semibold px-3 py-1 rounded-lg shadow mt-2">
                  <AlertTriangle size={16} aria-hidden />
                  Not Allowed On The Road
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function SkipCardSkeleton() {
  return (
    <div className="relative bg-white rounded-3xl border-2 border-gray-200 shadow-xl overflow-hidden flex flex-col animate-pulse">
      <div className="w-full h-32 sm:h-56 bg-gray-200" />
      <div className="flex-1 flex flex-col p-4 sm:p-6">
        <div className="h-6 bg-gray-200 rounded w-2/3 mb-3" />
        <div className="h-4 bg-gray-200 rounded w-1/3 mb-2" />
        <div className="h-8 bg-gray-200 rounded w-1/2 mb-4" />
        <div className="h-10 bg-gray-200 rounded w-full mt-auto" />
      </div>
    </div>
  );
}

export default SkipSizePage;
