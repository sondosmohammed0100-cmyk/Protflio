import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const SkillRadar = ({ data }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  if (!data || data.length === 0) return null;

  const size = 400;
  const padding = 60;
  const center = size / 2;
  const radius = center - padding;
  const levels = 5;

  const points = useMemo(() => {
    const angleStep = (Math.PI * 2) / data.length;
    return data.map((d, i) => {
      const angle = angleStep * i - Math.PI / 2;
      const x = center + radius * (d.value / 100) * Math.cos(angle);
      const y = center + radius * (d.value / 100) * Math.sin(angle);
      const labelX = center + (radius + 30) * Math.cos(angle);
      const labelY = center + (radius + 30) * Math.sin(angle);
      return { x, y, labelX, labelY, label: d.subject, angle, value: d.value };
    });
  }, [data, radius, center]);

  return (
    <div className="relative flex items-center justify-center w-full max-w-lg mx-auto aspect-square overflow-visible">
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="overflow-visible">
        {/* Background Grids */}
        {[...Array(levels)].map((_, i) => {
          const r = (radius / levels) * (i + 1);
          const gridPoints = points.map((p, idx) => {
            const angleStep = (Math.PI * 2) / data.length;
            const angle = angleStep * idx - Math.PI / 2;
            return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
          }).join(' ');
          
          return (
            <polygon
              key={i}
              points={gridPoints}
              fill="none"
              stroke="currentColor"
              className="text-primary/10"
              strokeWidth="1"
            />
          );
        })}

        {/* Axis Lines */}
        {points.map((p, i) => (
          <line
            key={i}
            x1={center}
            y1={center}
            x2={center + radius * Math.cos(p.angle)}
            y2={center + radius * Math.sin(p.angle)}
            stroke="currentColor"
            className="text-primary/10"
            strokeWidth="1"
          />
        ))}

        {/* Data Area */}
        <motion.polygon
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          points={points.map(p => `${p.x},${p.y}`).join(' ')}
          fill="url(#radarGradient)"
          stroke="currentColor"
          className="text-primary"
          strokeWidth="3"
          strokeLinejoin="round"
        />

        {/* Data Points and Tooltips */}
        {points.map((p, i) => (
          <g
            key={i}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            className="cursor-pointer"
          >
            <motion.circle
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + i * 0.1 }}
              cx={p.x}
              cy={p.y}
              r={hoveredIndex === i ? 8 : 4}
              className="fill-primary shadow-glow transition-all duration-300"
            />
            
            <AnimatePresence>
              {hoveredIndex === i && (
                <motion.g
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  <rect
                    x={p.x - 25}
                    y={p.y - 35}
                    width="50"
                    height="22"
                    rx="11"
                    className="fill-background stroke-primary stroke-1"
                  />
                  <text
                    x={p.x}
                    y={p.y - 20}
                    textAnchor="middle"
                    className="text-[10px] font-black fill-primary"
                  >
                    {p.value}%
                  </text>
                </motion.g>
              )}
            </AnimatePresence>
          </g>
        ))}

        {/* Labels */}
        {points.map((p, i) => (
          <text
            key={`label-${i}`}
            x={p.labelX}
            y={p.labelY}
            textAnchor="middle"
            dominantBaseline="middle"
            className={`text-[10px] md:text-[12px] font-black uppercase tracking-tighter transition-all duration-300 ${
              hoveredIndex === i ? 'fill-primary scale-110' : 'fill-foreground/60'
            }`}
            style={{
              transformOrigin: `${p.labelX}px ${p.labelY}px`
            }}
          >
            {p.label}
          </text>
        ))}

        {/* Definitions */}
        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="rgb(var(--primary-rgb))" stopOpacity="0.4" />
            <stop offset="100%" stopColor="rgb(var(--highlight-rgb))" stopOpacity="0.2" />
          </linearGradient>
        </defs>
      </svg>

      {/* Center Glow */}
      <div className="absolute inset-0 m-auto w-32 h-32 bg-primary/20 blur-[60px] rounded-full -z-10 pointer-events-none" />
    </div>
  );
};

export default SkillRadar;
