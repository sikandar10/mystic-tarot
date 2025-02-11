import { Home, History, Settings } from "lucide-react";
import { Link, useLocation } from "wouter";

export function BottomNav() {
  const [location] = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-background border-t">
      <div className="flex justify-around p-2">
        <Link href="/mystic-tarot/">
          <a className={`p-2 ${location === "/mystic-tarot/" ? "text-primary" : "text-muted-foreground"}`}>
            <Home className="w-6 h-6" />
          </a>
        </Link>
        <Link href="/mystic-tarot/history">
          <a className={`p-2 ${location === "/mystic-tarot/history" ? "text-primary" : "text-muted-foreground"}`}>
            <History className="w-6 h-6" />
          </a>
        </Link>
        <Link href="/mystic-tarot/settings">
          <a className={`p-2 ${location === "/mystic-tarot/settings" ? "text-primary" : "text-muted-foreground"}`}>
            <Settings className="w-6 h-6" />
          </a>
        </Link>
      </div>
    </nav>
  );
}