export function filterReportsByInvestment(investment, reports) {
  return reports.filter(report => report.investmentId === investment.id).sort((a, b) => a.month - b.month);
}

export function calculateRelativeReturns(investment, reports) {
  let newReports = [...reports];
  for (let i = 0; i < newReports.length; i++) {
    if (i == 0) {
      newReports[i].variation = 0;
      continue;
    }
    newReports[i].variation = (newReports[i].value / newReports[i - 1].value) - 1;
  }
  return newReports;
}