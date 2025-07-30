'use client';

interface HomeWelcomeBannerProps {
  username: string;
}

export default function HomeWelcomeBanner({ username }: HomeWelcomeBannerProps) {
  return (
    <div className="p-6 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded shadow-md">
      <h1 className="text-2xl font-bold">Welcome back, {username}!</h1>
      <p className="text-sm mt-1">Here’s what’s new in your sanctuary today.</p>
    </div>
  );
}
