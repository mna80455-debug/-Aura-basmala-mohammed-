

export default function VideoBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden w-full h-full">
      <img
        src="/brand/logo_brand.jpg"
        alt="AURA Brand Background"
        className="w-full h-full object-cover opacity-15 dark:opacity-20 scale-105"
      />
      {/* Smooth gradient overlay for contrast and luxury look */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FDFBF7]/90 via-[#FDFBF7]/70 to-[#FDFBF7] dark:from-[#1A1918]/90 dark:via-[#1A1918]/70 dark:to-[#1A1918] pointer-events-none" />
    </div>
  );
}
