import React from "react";

export default function Investment({ investment, reports }) {

  function getPercentualVariation(report) {
    return `${report.variation > 0 ? '+' : ''}${(report.variation * 100).toFixed(2)} %`;
  }

  function getTotalAbsoluteVariation() {
    return (reports[reports.length - 1].value - reports[0].value).toFixed(2);
  }

  function getTotalRelativeVariation() {
    return (((reports[reports.length - 1].value / reports[0].value) - 1) * 100).toFixed(2);
  }

  function getClassName(value) {
    if (value > 0) {
      return 'text-green-500';
    }

    if (value < 0) {
      return 'text-red-500';
    }
  }

  return (
    <div className="border mb-2 p-3">
      <h1 className="font-bold">{investment.description}</h1>
      <h2 className={`text-center font-semibold ${getClassName(getTotalAbsoluteVariation())}`}>Rendimento Total: R$ {getTotalAbsoluteVariation()} ({getTotalRelativeVariation()}%)</h2>
      <ul>
        {reports.map((rep) => (
          <li key={rep.id} className={`flex flex-row justify-between p-2 mx-5 border-b-2 ${getClassName(rep.variation)}`}>
            <span>{rep.month.toString().padStart(2, "0")}/{rep.year}</span>
            <span>R$ {rep.value.toFixed(2)} ({getPercentualVariation(rep)})</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
