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
    <nav className="flex items-center justify-center gap-2 sm:gap-4 py-4 sm:py-6 bg-neutral-900 overflow-x-auto px-2">
      {steps.map((step, idx) => {
        const Icon = step.icon;
        return (
          <div key={step.label} className="flex items-center flex-shrink-0">
            <span
              className={`flex items-center gap-1 sm:gap-2 ${
                step.active ? 'text-primary font-semibold' : 'text-neutral-400'
              } text-sm sm:text-base`}
            >
              <Icon size={18} strokeWidth={2.2} className="sm:w-6 sm:h-6" />
              <span className="whitespace-nowrap">{step.label}</span>
            </span>
            {idx < steps.length - 1 && (
              <span
                className={`mx-2 sm:mx-4 w-6 sm:w-12 h-px ${
                  step.active ? 'bg-primary' : 'bg-neutral-700'
                }`}
              ></span>
            )}
          </div>
        );
      })}
    </nav>
  );
}

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-900 text-white flex flex-col">
      <Stepper />
      <main className="flex-1 flex flex-col">{children}</main>
    </div>
  );
}
