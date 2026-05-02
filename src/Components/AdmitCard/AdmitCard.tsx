"use client";

import { useState } from "react";
import { CheckCircle2, Settings, Download, CreditCard } from "lucide-react";

type ExamStatus = "paid" | "partial" | "unpaid";

interface Examination {
  id: number;
  name: string;
  requiredPayment: number; // percentage
  completedPayment: ExamStatus | string; // percentage string or status
  payableAmount: number | null;
}

const exams: Examination[] = [
  {
    id: 1,
    name: "Mid Term Examination",
    requiredPayment: 70,
    completedPayment: "paid",
    payableAmount: null,
  },
  {
    id: 2,
    name: "Final Examination",
    requiredPayment: 100,
    completedPayment: "70.03%",
    payableAmount: 22969,
  },
];

function StatusBadge({ status }: { status: string }) {
  if (status === "paid") {
    return (
      <div className="flex items-center justify-center">
        <CheckCircle2 className="w-6 h-6 text-emerald-500 stroke-[1.8]" />
      </div>
    );
  }

  return <span className="text-sm font-semibold text-rose-500">{status}</span>;
}

function PayableCell({ amount }: { amount: number | null }) {
  if (amount === null) {
    return (
      <div className="flex items-center justify-center">
        <CheckCircle2 className="w-6 h-6 text-emerald-500 stroke-[1.8]" />
      </div>
    );
  }

  return (
    <span className="text-sm font-semibold text-slate-700">
      ৳ {amount.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
    </span>
  );
}

export default function AdmitCard() {
  const [loadingId, setLoadingId] = useState<number | null>(null);

  const handleAction = (id: number) => {
    setLoadingId(id);
    setTimeout(() => setLoadingId(null), 1500);
  };

  return (
    <div className=" ">
      <div className="w-full md:max-w-5xl ">
        {/* Card */}
        <div className="relative bg-white rounded-2xl   border border-slate-100 overflow-visible">
          {/* Header */}
          <div className="px-8 pt-6 pb-4 bg-ec-secondary/5">
            <h2 className="text-center text-base font-semibold tracking-wide text-ec-secondary">
              Download Admit Card
            </h2>
          </div>

          {/* Table */}
          <div className="px-8 py-2">
            {/* Column Headers */}
            <div
              className="grid grid-cols-[2fr_1fr_1.4fr_1.2fr_auto] gap-4 text-sm 
            py-3 border-b border-slate-100 text-slate-500 "
            >
              <span className=" font-semibold   tracking-wider">
                Examination
              </span>
              <span className="font-semibold   tracking-wider text-center">
                Required Payment
              </span>
              <span className=" font-semibold   tracking-wider text-center">
                Completed Payment
              </span>
              <span className="font-semibold   tracking-wider text-center">
                Payable Amount
              </span>
              <span className="w-24" />
            </div>

            {/* Rows */}
            {exams.map((exam, idx) => (
              <div
                key={exam.id}
                className={`grid grid-cols-[2fr_1fr_1.4fr_1.2fr_auto] gap-4 items-center py-5 ${
                  idx < exams.length - 1 ? "border-b border-slate-50" : ""
                } group transition-colors duration-200 hover:bg-sky-50/40 rounded-xl -mx-2 px-2`}
              >
                {/* Name */}
                <span className="text-sm font-medium text-slate-700">
                  {exam.name}
                </span>

                {/* Required % */}
                <span className="text-sm text-slate-500 text-center font-medium">
                  {exam.requiredPayment}%
                </span>

                {/* Completed payment */}
                <div className="flex justify-center">
                  <StatusBadge status={exam.completedPayment} />
                </div>

                {/* Payable amount */}
                <div className="flex justify-center">
                  <PayableCell amount={exam.payableAmount} />
                </div>

                {/* Action Button */}
                <div className="w-24">
                  {exam.payableAmount === null ? (
                    <button
                      onClick={() => handleAction(exam.id)}
                      disabled={loadingId === exam.id}
                      className="w-full flex items-center justify-center gap-1.5 bg-sky-500 hover:bg-sky-600 active:scale-95 disabled:opacity-70 text-white text-xs font-semibold py-2.5 px-3 rounded-lg shadow-sm shadow-sky-200 transition-all duration-150"
                    >
                      {loadingId === exam.id ? (
                        <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-3.5 h-3.5" />
                      ) : (
                        <>
                          <Download className="w-3.5 h-3.5" />
                          Download
                        </>
                      )}
                    </button>
                  ) : (
                    <button
                      onClick={() => handleAction(exam.id)}
                      disabled={loadingId === exam.id}
                      className="w-full flex items-center justify-center gap-1.5 bg-sky-500 hover:bg-sky-600 active:scale-95 disabled:opacity-70 text-white text-xs font-semibold py-2.5 px-3 rounded-lg shadow-sm shadow-sky-200 transition-all duration-150"
                    >
                      {loadingId === exam.id ? (
                        <span className="animate-spin border-2 border-white border-t-transparent rounded-full w-3.5 h-3.5" />
                      ) : (
                        <>
                          <CreditCard className="w-3.5 h-3.5" />
                          Pay
                        </>
                      )}
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Footer padding */}
          <div className="pb-4" />
        </div>
      </div>
    </div>
  );
}
