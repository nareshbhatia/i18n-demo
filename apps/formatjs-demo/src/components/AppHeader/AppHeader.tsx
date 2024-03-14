import { LanguageSelector } from './LanguageSelector';
import { ModeToggle } from './ModeToggle';

export interface AppHeaderProps {
  title: string;
}

export function AppHeader({ title }: AppHeaderProps) {
  return (
    <div className="flex h-16 items-center">
      <h1 className="flex-1 text-3xl font-semibold text-primary">{title}</h1>
      <div className="flex items-center gap-2">
        <LanguageSelector />
        <ModeToggle />
      </div>
    </div>
  );
}
