export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="bg-white rounded-lg p-4 shadow-sm">{children}</div>;
}
