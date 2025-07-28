export default function SidePanel({ children }: { children: React.ReactNode }) {
  return <aside className="bg-gray-50 p-4 shadow-inner w-80">{children}</aside>;
}
