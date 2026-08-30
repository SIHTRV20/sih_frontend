import React, { useState } from "react";
import { Plus, Trash2, TrendingUp, Wallet } from "lucide-react";
import { SectionHeader, Card, StatCard } from "../../components/ui";
import { C } from "../../theme";

export default function BudgetPlan() {
  const [budget, setBudget] = useState(5000);
  const [expenses, setExpenses] = useState([
    { id: 1, category: "Accommodation", amount: 1200, date: "2026-08-20" },
    { id: 2, category: "Food & Dining", amount: 450, date: "2026-08-21" },
    { id: 3, category: "Activities", amount: 300, date: "2026-08-22" },
    { id: 4, category: "Transport", amount: 200, date: "2026-08-23" },
  ]);
  const [newExpense, setNewExpense] = useState({ category: "", amount: "" });

  const totalSpent = expenses.reduce((sum, exp) => sum + exp.amount, 0);
  const remaining = budget - totalSpent;

  const handleAddExpense = () => {
    if (newExpense.category && newExpense.amount) {
      setExpenses([
        ...expenses,
        {
          id: Date.now(),
          category: newExpense.category,
          amount: parseFloat(newExpense.amount),
          date: new Date().toISOString().split("T")[0],
        },
      ]);
      setNewExpense({ category: "", amount: "" });
    }
  };

  const handleDeleteExpense = (id) => {
    setExpenses(expenses.filter((exp) => exp.id !== id));
  };

  return (
    <div>
      <SectionHeader eyebrow="Planning" title="Budget Plan" />

      <div className="mb-5 grid grid-cols-3 gap-3">
        <StatCard label="Total Budget" value={`₹${budget.toLocaleString()}`} icon={Wallet} accent={C.blue} />
        <StatCard label="Spent" value={`₹${totalSpent.toLocaleString()}`} icon={TrendingUp} accent={C.red} />
        <StatCard label="Remaining" value={`₹${remaining.toLocaleString()}`} icon={Wallet} accent={remaining > 0 ? C.green : C.red} />
      </div>

      <Card className="mb-5">
        <div className="mb-4 text-[14px] font-medium" style={{ color: C.text }}>Budget Progress</div>
        <div className="h-3 w-full rounded-full" style={{ background: C.border }}>
          <div
            className="h-3 rounded-full transition-all"
            style={{ width: `${(totalSpent / budget) * 100}%`, background: totalSpent > budget * 0.8 ? C.red : C.blue }}
          />
        </div>
        <div className="mt-3 text-[12px]" style={{ color: C.muted }}>
          {Math.round((totalSpent / budget) * 100)}% of budget used
        </div>
        <div className="mt-4 grid grid-cols-4 gap-2">
          {expenses.map((exp, idx) => (
            <div key={idx} className="text-center">
              <div className="text-2xl mb-1">
                {exp.category === "Accommodation" && "🏨"}
                {exp.category === "Food & Dining" && "🍽️"}
                {exp.category === "Activities" && "🎭"}
                {exp.category === "Transport" && "🚖"}
              </div>
              <div className="text-[11px] font-medium" style={{ color: C.text }}>{exp.category}</div>
              <div className="text-[12px] font-medium" style={{ color: C.blue }}>₹{(exp.amount / 1000).toFixed(1)}k</div>
            </div>
          ))}
        </div>
      </Card>

      <Card className="mb-5">
        <div className="mb-4 text-[14px] font-medium" style={{ color: C.text }}>Add New Expense</div>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Category"
            value={newExpense.category}
            onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
            className="flex-1 rounded-lg border px-3 py-2 text-[13px]"
            style={{ borderColor: C.border, background: C.bg, color: C.text }}
          />
          <input
            type="number"
            placeholder="Amount"
            value={newExpense.amount}
            onChange={(e) => setNewExpense({ ...newExpense, amount: e.target.value })}
            className="w-24 rounded-lg border px-3 py-2 text-[13px]"
            style={{ borderColor: C.border, background: C.bg, color: C.text }}
          />
          <button
            onClick={handleAddExpense}
            className="flex items-center gap-1 rounded-lg px-3 py-2 text-[13px] font-medium text-white"
            style={{ background: C.blue }}
          >
            <Plus size={16} /> Add
          </button>
        </div>
      </Card>

      <Card className="divide-y" style={{ borderColor: C.border }}>
        <div className="py-3 text-[14px] font-medium" style={{ color: C.text }}>Expenses</div>
        {expenses.length === 0 ? (
          <div className="py-6 text-center text-[13px]" style={{ color: C.muted }}>No expenses recorded yet</div>
        ) : (
          expenses.map((exp) => (
            <div key={exp.id} className="flex items-center justify-between py-3 first:pt-0 last:pb-0">
              <div>
                <div className="text-[13px] font-medium" style={{ color: C.text }}>{exp.category}</div>
                <div className="text-[11px]" style={{ color: C.muted }}>{exp.date}</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-[13px] font-medium" style={{ color: C.text }}>₹{exp.amount.toLocaleString()}</div>
                <button onClick={() => handleDeleteExpense(exp.id)} className="text-red-500 hover:text-red-600">
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))
        )}
      </Card>
    </div>
  );
}
