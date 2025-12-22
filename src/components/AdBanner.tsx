interface AdBannerProps {
  size?: 'leaderboard' | 'rectangle' | 'banner';
}

export default function AdBanner({ size = 'leaderboard' }: AdBannerProps) {
  const sizes = {
    leaderboard: 'h-20 w-full max-w-3xl',
    rectangle: 'h-48 w-72',
    banner: 'h-14 w-full max-w-xl'
  };

  return (
    <div className={`${sizes[size]} mx-auto bg-gray-100 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center no-print`}>
      <p className="text-gray-400 text-sm">Bu alana reklam verebilirsiniz</p>
    </div>
  );
}
