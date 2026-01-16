'use client';

interface LogoProps {
  variant?: 'black' | 'white';
  className?: string;
}

const Logo = ({ variant = 'black', className = '' }: LogoProps) => {
  const color = variant === 'black' ? '#1a1a1a' : '#ffffff';

  return (
    <svg
      viewBox="0 0 120 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SLASHR"
    >
      <text
        x="0"
        y="22"
        fontFamily="var(--font-inter), Inter, sans-serif"
        fontSize="24"
        fontWeight="800"
        fill={color}
        letterSpacing="-0.02em"
      >
        SLASHR
      </text>
    </svg>
  );
};

export default Logo;
