import { createFileRoute, redirect } from "@tanstack/react-router";
import { DashboardHeader } from "@/components/dashboard/dashboard-header";
import { BalanceCard } from "@/components/dashboard/balance-card";
import { QuickActions } from "@/components/dashboard/quick-actions";
// import { CardsList } from "@/components/dashboard/cards-list";
import { TransactionsList } from "@/components/dashboard/transactions-list";
import { account } from "@/lib/bank-data";

function RouteComponent() {
  const firstName = account.holder.split(" ")[0];

  const getGreeting = (hour: number) => {
    if (hour >= 5 && hour < 12) return "Good Morning";
    if (hour >= 12 && hour < 17) return "Good Afternoon";
    if (hour >= 17 && hour < 21) return "Good Evening";
    return "Good night";
  };

  const greeting = getGreeting(new Date().getHours());

  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />

      <main className="mx-auto max-w-5xl px-4 py-6 sm:px-6 sm:py-8">
        <div className="mb-6">
          <h1 className="text-balance text-2xl font-semibold tracking-tight">
            {greeting}, {firstName}
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Here&apos;s what&apos;s happening with your money today.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Left / main column */}
          <div className="space-y-6 lg:col-span-2">
            <BalanceCard />
            <QuickActions />
            <TransactionsList />
          </div>
        </div>
      </main>
    </div>
  );
}

export const Route = createFileRoute("/")({
  beforeLoad: async () => {
    const isAuthenticated = Boolean(localStorage.getItem("authenticated"));
    if (!isAuthenticated) {
      throw redirect({
        to: "/login",
        search: {
          // Save current location for redirect after login
          redirect: location.href,
        },
      });
    }
  },
  component: RouteComponent,
});
