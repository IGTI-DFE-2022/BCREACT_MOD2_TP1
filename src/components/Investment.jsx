import React from "react";

export default function Investment({ investment, reports }) {
  return (
    <div className="border mb-2">
      <h1 className="font-bold">{investment.description}</h1>
      <ul>
        {reports.map((rep) => (
          <li key={rep.id} className="flex flex-row justify-between p-2 mx-5 border-b-2">
            <span>{rep.month.toString().padStart(2, "0")}/{rep.year}</span>
            <span>R$ {rep.value.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
