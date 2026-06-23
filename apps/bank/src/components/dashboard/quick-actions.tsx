import { Send, Plus, ArrowLeftRight } from "lucide-react";
import { toast } from "sonner";
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
  { label: "Send", icon: Send },
  { label: "Top up", icon: Plus },
  { label: "Transfer", icon: ArrowLeftRight },
  // { label: "Pay bills", icon: Receipt },
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-4 gap-3">
      {actions.map(({ label, icon: Icon }) =>
        label === "Send" ? (
          <Dialog key={label}>
            <DialogTrigger className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-3 text-card-foreground transition-colors hover:border-primary/40 hover:bg-accent">
              <span className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                <Icon className="size-4.5" />
              </span>
              <span className="text-xs font-medium">{label}</span>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Transaction in progress</DialogTitle>
                <DialogDescription>
                  Upgrade required to proceed
                </DialogDescription>
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
        ) : (
          <button
            onClick={() =>
              toast.info(`To ${label}, please contact the management.`)
            }
            key={label}
            type="button"
            className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-3 text-card-foreground transition-colors hover:border-primary/40 hover:bg-accent"
          >
            <span className="flex size-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
              <Icon className="size-4.5" />
            </span>
            <span className="text-xs font-medium">{label}</span>
          </button>
        ),
      )}
    </div>
  );
}
