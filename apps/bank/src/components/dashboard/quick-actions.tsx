import { Send, Plus, ArrowLeftRight } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const actions = [
  {
    label: "Send",
    icon: Send,
    title: "Transaction in progress",
    description: "Upgrade required to proceed",
  },
  {
    label: "Top up",
    icon: Plus,
    title: "Top up",
    description: "Contact management to top up your account",
  },
  {
    label: "Transfer",
    icon: ArrowLeftRight,
    title: "Transfer",
    description: "Contact management to transfer your funds",
  },
  // { label: "Pay bills", icon: Receipt },
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-4 gap-3">
      {actions.map(({ label, icon: Icon, title, description }) => (
        <Dialog key={label}>
          <DialogTrigger className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-3 text-card-foreground transition-colors hover:border-primary/40 hover:bg-accent">
            <span className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Icon className="size-4.5" />
            </span>
            <span className="text-xs font-medium">{label}</span>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>{title}</DialogTitle>
              <DialogDescription>{description}</DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <DialogClose
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "w-full sm:w-auto",
                )}
              >
                OK
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      ))}
    </div>
  );
}
