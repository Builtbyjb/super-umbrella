import { account, formatCurrency } from "@/lib/bank-data";
import { ArrowUpRight, ArrowDownLeft, Eye } from "lucide-react";

export function BalanceCard() {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-primary p-6 text-primary-foreground sm:p-8">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 85% 20%, currentColor 0, transparent 45%), radial-gradient(circle at 10% 90%, currentColor 0, transparent 40%)",
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-primary-foreground/70">
            Total balance
            <Eye className="size-3.5" />
          </div>
          {/*<span className="inline-flex items-center gap-1 rounded-full bg-primary-foreground/15 px-2.5 py-1 text-xs font-medium">
            <TrendingUp className="size-3" />
            {account.changePercent}%
          </span>*/}
        </div>

        <p className="mt-3 text-4xl font-semibold tracking-tight tabular-nums sm:text-5xl">
          {formatCurrency(account.balance)}
        </p>
        <p className="mt-1 text-sm text-primary-foreground/70">
          {account.holder} · {account.number}
        </p>

        <div className="mt-6 grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-primary-foreground/10 p-3">
            <div className="flex items-center gap-2 text-xs text-primary-foreground/70">
              <span className="flex size-6 items-center justify-center rounded-full bg-primary-foreground/15">
                <ArrowDownLeft className="size-3.5" />
              </span>
              Income
            </div>
            <p className="mt-1.5 text-lg font-semibold tabular-nums">
              {formatCurrency(account.income)}
            </p>
          </div>
          <div className="rounded-xl bg-primary-foreground/10 p-3">
            <div className="flex items-center gap-2 text-xs text-primary-foreground/70">
              <span className="flex size-6 items-center justify-center rounded-full bg-primary-foreground/15">
                <ArrowUpRight className="size-3.5" />
              </span>
              Spending
            </div>
            <p className="mt-1.5 text-lg font-semibold tabular-nums">
              {formatCurrency(account.spending)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
