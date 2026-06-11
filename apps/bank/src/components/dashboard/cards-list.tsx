import { cards, formatCurrency } from "@/lib/bank-data";
import { Wifi } from "lucide-react";
import { toast } from "sonner";

export function CardsList() {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold">My cards</h2>
        <button
          type="button"
          className="text-xs font-medium text-primary hover:underline"
        >
          View all
        </button>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {cards.map((card) => (
          <div
            onClick={() => toast.info(`Contact support to ${card.label}`)}
            key={card.id}
            className="relative flex aspect-[1.6/1] w-64 shrink-0 flex-col justify-between overflow-hidden rounded-2xl p-5 text-white"
            style={{
              backgroundImage: `linear-gradient(135deg, ${card.gradientFrom}, ${card.gradientTo})`,
            }}
          >
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-white/70">{card.label}</p>
                <p className="mt-1 text-lg font-semibold tabular-nums">
                  {formatCurrency(card.balance)}
                </p>
              </div>
              <Wifi className="size-5 rotate-90 text-white/70" />
            </div>
            <div className="flex items-end justify-between">
              <span className="font-mono text-sm tracking-widest text-white/90">
                {"•••• "}
                {card.last4}
              </span>
              <span className="text-sm font-semibold italic">
                {card.network}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
