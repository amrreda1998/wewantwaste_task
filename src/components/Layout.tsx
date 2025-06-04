import { type ReactNode } from 'react';
import {
  MapPin,
  Trash2,
  Truck,
  Shield,
  Calendar,
  CreditCard,
} from 'lucide-react';

function Stepper() {
  const steps = [
    { label: 'Postcode', icon: MapPin, active: true },
    { label: 'Waste Type', icon: Trash2, active: true },
    { label: 'Select Skip', icon: Truck, active: true },
    { label: 'Permit Check', icon: Shield, active: false },
    { label: 'Choose Date', icon: Calendar, active: false },
    { label: 'Payment', icon: CreditCard, active: false },
  ];

  return (
    <nav className="flex items-center justify-center gap-0 sm:gap-2 py-4 sm:py-6 bg-white border-b border-gray-200 overflow-x-auto px-2">
      {steps.map((step, idx) => {
        const Icon = step.icon;
        const isActive = step.active;
        return (
          <div key={step.label} className="flex items-center flex-shrink-0">
            <div
              className={`flex items-center justify-center rounded-full border-2 transition-all duration-200
                ${
                  isActive
                    ? 'bg-black border-black text-white'
                    : 'bg-gray-200 border-gray-300 text-gray-400'
                }
                w-9 h-9 sm:w-11 sm:h-11 shadow
              `}
            >
              <Icon size={20} className="sm:w-6 sm:h-6" />
            </div>
            <span
              className={`ml-2 mr-4 text-xs sm:text-sm font-semibold ${
                isActive ? 'text-black' : 'text-gray-400'
              }`}
            >
              {step.label}
            </span>
            {idx < steps.length - 1 && (
              <span className="w-6 sm:w-10 h-1 bg-gray-200 rounded-full mx-1 sm:mx-2"></span>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 text-black flex flex-col">
      <Stepper />
      <div className="h-1 w-full bg-gray-200">
        <div className="h-1 bg-black transition-all" style={{ width: '50%' }} />
      </div>
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
