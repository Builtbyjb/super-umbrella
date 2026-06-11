import { useNavigate } from "@tanstack/react-router";
import { Logo } from "@/components/Logo";
import { account } from "@/lib/bank-data";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { LogOut } from "lucide-react";
import { Button } from "../ui/button";

export function DashboardHeader() {
  const navigate = useNavigate();

  const initials = account.holder
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <header className="sticky top-0 z-20 border-b border-border bg-background/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Logo />

        {/*<div className="hidden flex-1 items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm text-muted-foreground sm:flex sm:max-w-xs">
          <Search className="size-4" />
          <input
            placeholder="Search transactions"
            className="w-full bg-transparent outline-none placeholder:text-muted-foreground"
            aria-label="Search transactions"
          />
        </div>*/}

        <div className="flex items-center gap-2">
          {/*<button
            type="button"
            className="relative flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground"
            aria-label="Notifications"
          >
            <Bell className="size-4.5" />
            <span className="absolute right-2 top-2 size-1.5 rounded-full bg-primary" />
          </button>*/}
          <Button
            onClick={() => {
              localStorage.removeItem("authenticated");
              navigate({ to: "/" });
            }}
            className="flex size-9 items-center justify-center rounded-full border border-border bg-card text-muted-foreground hover:text-foreground"
            aria-label="Sign out"
          >
            <LogOut className="size-4.5" />
          </Button>
          <Avatar className="size-9">
            <AvatarFallback className="bg-primary text-primary-foreground text-xs font-semibold">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  );
}
