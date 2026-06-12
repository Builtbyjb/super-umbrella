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
  income: 18970.63,
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
    name: "Credit Payment",
    category: "Incoming Transfer",
    date: "Jun 12, 2023, 10:15 AM",
    amount: 3500.0,
    type: "credit",
  },
  {
    id: "t2",
    name: "Credit Payment",
    category: "Incoming Transfer",
    date: "Aug 24, 2023, 2:40 PM",
    amount: 2750.0,
    type: "credit",
  },
  {
    id: "t3",
    name: "Credit Payment",
    category: "Incoming Transfer",
    date: "Nov 18, 2023, 9:05 AM",
    amount: 1800.0,
    type: "credit",
  },
  {
    id: "t4",
    name: "Credit Payment",
    category: "Incoming Transfer",
    date: "Feb 14, 2024, 1:30 PM",
    amount: 2200.0,
    type: "credit",
  },
  {
    id: "t5",
    name: "Credit Payment",
    category: "Incoming Transfer",
    date: "May 29, 2024, 4:20 PM",
    amount: 1500.0,
    type: "credit",
  },
  {
    id: "t6",
    name: "Credit Payment",
    category: "Incoming Transfer",
    date: "Sep 11, 2024, 11:45 AM",
    amount: 3100.0,
    type: "credit",
  },
  {
    id: "t7",
    name: "Credit Payment",
    category: "Incoming Transfer",
    date: "Jan 22, 2025, 8:10 AM",
    amount: 1750.0,
    type: "credit",
  },
  {
    id: "t8",
    name: "Credit Payment",
    category: "Incoming Transfer",
    date: "Jun 03, 2025, 3:55 PM",
    amount: 1200.0,
    type: "credit",
  },
  {
    id: "t9",
    name: "Credit Payment",
    category: "Incoming Transfer",
    date: "Oct 17, 2025, 12:25 PM",
    amount: 1170.0,
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
  return value.toLocaleString("en-GB", { style: "currency", currency: "GBP" });
}
