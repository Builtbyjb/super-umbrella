export type Transaction = {
  id: string;
  name: string;
  category: string;
  date: string;
  amount: number;
  type: "credit" | "debit";
};

export type AccountCard = {
  id: string;
  label: string;
  last4: string;
  network: "Visa" | "Mastercard";
  balance: number;
  gradientFrom: string;
  gradientTo: string;
};

export const account = {
  holder: "Valerie Simms",
  number: "•••• 8842",
  balance: 18970.63,
  available: 18970.63,
  income: 8240.0,
  spending: 0,
  changePercent: 4.2,
};

export const cards: AccountCard[] = [
  {
    id: "1",
    label: "Everyday Checking",
    last4: "8842",
    network: "Visa",
    balance: 24863.55,
    gradientFrom: "oklch(0.42 0.1 155)",
    gradientTo: "oklch(0.3 0.06 160)",
  },
  {
    id: "2",
    label: "Savings Vault",
    last4: "2210",
    network: "Mastercard",
    balance: 58120.9,
    gradientFrom: "oklch(0.32 0.04 230)",
    gradientTo: "oklch(0.24 0.03 240)",
  },
];

export const transactions: Transaction[] = [
  {
    id: "t1",
    name: "Whole Foods Market",
    category: "Groceries",
    date: "Today, 2:14 PM",
    amount: 84.23,
    type: "credit",
  },
  {
    id: "t2",
    name: "Salary — Northwind Inc.",
    category: "Income",
    date: "Today, 9:00 AM",
    amount: 4120.0,
    type: "credit",
  },
  {
    id: "t3",
    name: "Spotify Premium",
    category: "Subscription",
    date: "Yesterday",
    amount: 11.99,
    type: "credit",
  },
  {
    id: "t4",
    name: "Shell Gas Station",
    category: "Transport",
    date: "Yesterday",
    amount: 52.4,
    type: "credit",
  },
  {
    id: "t5",
    name: "Transfer from Jordan",
    category: "Transfer",
    date: "Mar 12",
    amount: 230.0,
    type: "credit",
  },
  {
    id: "t6",
    name: "Apple Store",
    category: "Shopping",
    date: "Mar 11",
    amount: 1299.0,
    type: "credit",
  },
  {
    id: "t7",
    name: "Blue Bottle Coffee",
    category: "Dining",
    date: "Mar 11",
    amount: 6.75,
    type: "credit",
  },
];

export const spendingByMonth = [
  { month: "Oct", amount: 2840 },
  { month: "Nov", amount: 3210 },
  { month: "Dec", amount: 4120 },
  { month: "Jan", amount: 2960 },
  { month: "Feb", amount: 3540 },
  { month: "Mar", amount: 3127 },
];

export function formatCurrency(value: number) {
  return value.toLocaleString("en-IE", { style: "currency", currency: "EUR" });
}
