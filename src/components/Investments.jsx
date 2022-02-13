import React from 'react';
import { investments, reports } from '../data/investments-2-1-1';
import { calculateRelativeReturns, filterReportsByInvestment } from '../helpers/investmentHelpers';
import Investment from './Investment';

export default function Investments() {

  console.log(investments);
  console.log(reports);

  function prepareReports(investment) {
    let filteredReports = filterReportsByInvestment(investment, reports);
    return calculateRelativeReturns(investment, filteredReports);
  }

  return (
    <>
      <h2 className='font-bold text-lg'>Investments</h2>
      <ul>
        {investments.map(inv => 
          <Investment key={inv.id} investment={inv} reports={prepareReports(inv)}>{inv.description}</Investment>  
        )}
      </ul>
    </>
  )
}
