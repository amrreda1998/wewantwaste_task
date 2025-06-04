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
    <nav className="flex items-center justify-center gap-4 py-6 bg-neutral-900">
      {steps.map((step, idx) => {
        const Icon = step.icon;
        return (
          <div key={step.label} className="flex items-center">
            <span
              className={`flex items-center gap-2 ${
                step.active ? 'text-primary font-semibold' : 'text-neutral-400'
              }`}
            >
              <Icon size={22} strokeWidth={2.2} />
              <span>{step.label}</span>
            </span>
            {idx < steps.length - 1 && (
              <span
                className={`mx-4 w-12 h-px ${
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
