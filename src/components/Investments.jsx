import React from 'react';
import { investments, reports } from '../data/investments-2-1-1';
import Investment from './Investment';

export default function Investments() {

  console.log(investments);
  console.log(reports);

  function filterReportsByInvestment(investment) {
    return reports.filter(report => report.investmentId === investment.id).sort((a, b) => a.month - b.month);
  }

  return (
    <>
      <h2 className='font-bold text-lg'>Investments</h2>
      <ul>
        {investments.map(inv => 
          <Investment key={inv.id} investment={inv} reports={filterReportsByInvestment(inv)}>{inv.description}</Investment>  
        )}
      </ul>
    </>
  )
}
