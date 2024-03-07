import { ModeToggle } from './ModeToggle';

export function AppHeader() {
  return (
    <div className="flex h-16 items-center">
      <h1 className="flex-1 text-3xl font-semibold">driverless</h1>
      <ModeToggle />
    </div>
  );
}
