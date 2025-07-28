export default function ChatMessage({ role, content }: { role: string; content: string }) {
  const style = role === 'user' ? 'bg-blue-100' : 'bg-gray-100';
  return (
    <div className={`p-3 rounded ${style}`}>
      <p className="text-sm"><strong>{role}</strong>: {content}</p>
    </div>
  );
}
