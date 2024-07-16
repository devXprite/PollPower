'use client';
import { Bar } from 'react-chartjs-2';

const StateChart = ({ chartData }) => {
    return (
        <div className="mx-auto mt-20 h-80 w-full md:h-96">
            <Bar
                data={{
                    labels: chartData.map(item => item.state),
                    datasets: [
                        // {
                        //     label: 'Winner Votes',
                        //     data: chartData.map(item => item.winner.votes),
                        // },
                        {
                            label: 'Total Votes',
                            data: chartData.map(item => item.votes),
                        },
                    ],
                }}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        x: {
                            stacked: true,
                        },
                    },
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                        title: {
                            text: 'Statewise Votes',
                            position: 'top',
                        },
                    },
                }}
            />
        </div>
    );
};

export default StateChart;
