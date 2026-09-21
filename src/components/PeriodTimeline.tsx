import React, { useState } from 'react';
import type { PeriodInfo } from '../types/art';
import { locations } from '../data/locations';
import { periodColors } from '../utils/map';

interface PeriodTimelineProps {
  periods: PeriodInfo[];
  activePeriod: string | null;
  onPeriodSelect: (period: string | null) => void;
}

const PeriodTimeline: React.FC<PeriodTimelineProps> = ({ periods, activePeriod, onPeriodSelect }) => {
  return (
    <section id="timeline" className="py-20 bg-charcoal-900" aria-labelledby="timeline-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="section-label text-gold-300 mb-3">Chronological Journey</p>
          <h2 id="timeline-heading" className="section-heading text-parchment-100">
            Explore by Historical Period
          </h2>
          <p className="mt-4 text-charcoal-300 font-sans text-base max-w-2xl mx-auto">
            Click a period to filter the map and discover which art traditions flourished when.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px bg-charcoal-700 -translate-x-1/2 hidden md:block"
            aria-hidden="true"
          />

          <div className="space-y-6 md:space-y-0">
            {periods.map((period, index) => {
              const count = locations.filter((l) => l.periods.includes(period.id)).length;
              const isActive = activePeriod === period.id;
              const isLeft = index % 2 === 0;
              const color = periodColors[period.id] ?? '#525250';

              return (
                <div
                  key={period.id}
                  className={`relative flex md:items-center gap-4 md:gap-0 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Card */}
                  <button
                    onClick={() => onPeriodSelect(isActive ? null : period.id)}
                    className={`flex-1 md:max-w-[45%] text-left group p-5 rounded-sm border transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 ${
                      isActive
                        ? 'border-gold-400 bg-charcoal-800 shadow-lg'
                        : 'border-charcoal-700 bg-charcoal-800/50 hover:border-charcoal-500 hover:bg-charcoal-800'
                    }`}
                    aria-pressed={isActive}
                    aria-label={`Filter by ${period.name} period (${count} locations)`}
                  >
                    <div className="flex items-start justify-between gap-3 mb-2">
                      <div>
                        <p className="font-serif text-lg text-parchment-100 leading-tight">
                          {period.name}
                        </p>
                        <p className="text-xs font-sans text-charcoal-400 mt-0.5">
                          {period.timeRange}
                        </p>
                      </div>
                      <span
                        className="flex-shrink-0 px-2 py-0.5 text-xs font-sans font-semibold rounded text-white"
                        style={{ backgroundColor: color }}
                      >
                        {count}
                      </span>
                    </div>
                    <p className="text-xs font-sans text-charcoal-300 leading-relaxed line-clamp-2">
                      {period.description}
                    </p>
                    {isActive && (
                      <div className="mt-3 pt-3 border-t border-charcoal-700">
                        <p className="text-xs font-sans text-gold-300 font-semibold mb-1">
                          Major Developments
                        </p>
                        <ul className="space-y-0.5">
                          {period.majorDevelopments.slice(0, 3).map((dev, i) => (
                            <li key={i} className="text-xs text-charcoal-300 flex gap-1.5">
                              <span className="text-gold-400 flex-shrink-0">·</span>
                              {dev}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </button>

                  {/* Center dot */}
                  <div className="hidden md:flex flex-shrink-0 w-[10%] justify-center">
                    <div
                      className={`w-4 h-4 rounded-full border-2 border-charcoal-900 transition-all duration-200 ${isActive ? 'scale-125' : ''}`}
                      style={{ backgroundColor: color }}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Empty side */}
                  <div className="hidden md:block flex-1 md:max-w-[45%]" aria-hidden="true" />
                </div>
              );
            })}
          </div>
        </div>

        {/* Clear filter */}
        {activePeriod && (
          <div className="text-center mt-10">
            <button
              onClick={() => onPeriodSelect(null)}
              className="text-sm font-sans text-charcoal-400 hover:text-parchment-100 underline transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded"
            >
              Clear period filter
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PeriodTimeline;
