

export default function VideoBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
      <img
        src="/brand/prod_libre.jpg"
        alt="AURA Brand Background"
        className="w-full h-full object-cover object-center opacity-35 dark:opacity-40 scale-105"
      />
      {/* Premium subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/80 via-[#FDFBF7]/60 to-[#FDFBF7] dark:from-[#1A1918]/85 dark:via-[#1A1918]/65 dark:to-[#1A1918] pointer-events-none" />
    </div>
  );
}
