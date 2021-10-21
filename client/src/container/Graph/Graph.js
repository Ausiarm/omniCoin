import React from 'react';
import './Graph.css';
import { Button } from 'react-bootstrap';
import { Doughnut,Line,Bar,Scatter,Bubble,Pie,PolarArea,Radar } from 'react-chartjs-2';

const Graph = ({data,coin, CoinPricing}) => {

	function formatChartData() {
		
    	return {
			labels: Object.keys(data),
			datasets: [
				{
				label: coin,
          fill: false,
				lineTension: 0.1,
				backgroundColor: '#fff',
				borderColor: 'rgba(75,192,192,1)',
				borderCapStyle: 'butt',
				borderDash: [],
				borderDashOffset: 0.0,
				borderJoinStyle: 'miter',
				pointBorderColor: 'rgba(75,192,192,1)',
				pointBackgroundColor: '#fff',
				pointBorderWidth: 1,
				pointHoverRadius: 5,
				pointHoverBackgroundColor: 'rgba(75,192,192,1)',
				pointHoverBorderColor: 'rgba(220,220,220,1)',
				pointHoverBorderWidth: 2,
				pointRadius: 1,
				pointHitRadius: 10,
				data: Object.values(data)
				}
			]
		}
	}
    
  return (
    <div  >
      <Button className="m-5" onClick={CoinPricing}>Go</Button>
      <Line  className="w-75 m-auto graph" data = {formatChartData()} height ={250} />
             
    </div>
  )
}

export default Graph