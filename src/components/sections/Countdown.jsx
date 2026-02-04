import { useState, useEffect } from 'react';

export default function Countdown({ targetDate, labels }) {
  const calculateTimeLeft = () => {
    // We parse the date. If targetDate is "2026-12-12", it calculates from then.
    const difference = +new Date(targetDate) - +new Date();
    
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60), // Added seconds to see it "moving"
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    // setInterval makes the code run every 1000ms (1 second)
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // This cleans up the timer if the user leaves the page
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="py-12 bg-stone-900 text-white">
      <div className="flex justify-center gap-6 md:gap-12">
        {Object.entries(timeLeft).map(([unit, value]) => (
          <div key={unit} className="text-center min-w-[60px]">
            <div className="text-3xl md:text-5xl font-serif text-amber-400">
              {String(value).padStart(2, '0')}
            </div>
            <div className="text-[10px] uppercase tracking-[0.2em] mt-2 opacity-50">
              {labels[unit] || unit}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}