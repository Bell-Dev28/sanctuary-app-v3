export default function SidebarHistory({ history }: { history: string[] }) {
  return (
    <aside className="w-64 bg-gray-50 p-4">
      <h3 className="font-semibold mb-2">Chat History</h3>
      <ul className="space-y-1 text-sm">
        {history.map((item, index) => (
          <li key={index} className="text-blue-700 hover:underline cursor-pointer">
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
