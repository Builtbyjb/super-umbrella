import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { BadgeAlert, BadgeCheck, BadgeInfo } from "lucide-react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <>
      <Outlet />
      <Toaster
        position="top-center"
        icons={{
          error: <BadgeAlert className="h-5 w-5" />,
          success: <BadgeCheck className="h-5 w-5" />,
          info: <BadgeInfo className="h-5 w-5" />,
        }}
        toastOptions={{
          classNames: {
            content: "flex flex-col gap-2",
            toast: "bg-background text-foreground border-border shadow-lg",
            description: "text-muted-foreground",
            actionButton: "bg-primary text-primary-foreground",
            cancelButton: "bg-muted text-muted-foreground",
            success: "text-green-500",
            closeButton: "!bg-muted !hover:bg-accent !border-gray-900",
          },
          style: {
            borderRadius: "calc(var(--radius)  + 4px)",
            backgroundColor: "hsl(from var(--background) h s l / 1)",
          },
        }}
        closeButton={true}
      />
    </>
  );
}
