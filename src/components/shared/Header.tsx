// Example partial layout header with avatar
import { UserDropdown } from "@/components/shared/user/UserDropdown";

export default function Header() {
  return (
    <header className="flex justify-between items-center px-4 py-2 border-b bg-background">
      <h1 className="text-lg font-bold tracking-tight">Sanctuary</h1>
      <UserDropdown />
    </header>
  );
}
