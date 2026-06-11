import { transactions, formatCurrency } from "@/lib/bank-data";
import { Banknote } from "lucide-react";

export function TransactionsList() {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 text-card-foreground sm:p-6">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">Transactions</h2>
      </div>

      <ul className="mt-4 divide-y divide-border">
        {transactions.map((tx) => {
          const isCredit = tx.type === "credit";
          return (
            <li key={tx.id} className="flex items-center gap-3 py-3">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <Banknote />
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium">{tx.name}</p>
                <p className="text-xs text-muted-foreground">
                  {tx.category} · {tx.date}
                </p>
              </div>
              <span
                className={`text-sm font-semibold tabular-nums ${
                  isCredit ? "text-primary" : "text-foreground"
                }`}
              >
                {isCredit ? "+" : "−"}
                {formatCurrency(tx.amount)}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
