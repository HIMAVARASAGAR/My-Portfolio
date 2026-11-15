export default function LineArt({
  kind = 0,
  className = "",
}: {
  kind?: number;
  className?: string;
}) {
  const drawings = [
    ["M75 50 25 100 75 150", "M125 50 175 100 125 150", "M115 30 85 170"],
    [
      "M30 35H170V165H30Z",
      "M30 65H170",
      "M65 65V165",
      "M85 90H145M85 110H130M85 130H145",
    ],
    [
      "M60 60H140V140H60Z",
      "M80 80H120V120H80Z",
      "M80 30V60M100 30V60M120 30V60M80 140V170M100 140V170M120 140V170M30 80H60M30 100H60M30 120H60M140 80H170M140 100H170M140 120H170",
    ],
    [
      "M100 30 160 65V135L100 170 40 135V65Z",
      "M100 30V100L160 135M40 135 100 100 160 65M40 65 100 100V170",
    ],
  ];
  return (
    <svg
      className={`line-art ${className}`}
      viewBox="0 0 200 200"
      fill="none"
      aria-hidden="true"
    >
      <g>
        {drawings[kind % drawings.length].map((d, i) => (
          <path
            key={d}
            d={d}
            pathLength="1"
            style={{ transitionDelay: `${i * 45}ms` }}
          />
        ))}
      </g>
    </svg>
  );
}
