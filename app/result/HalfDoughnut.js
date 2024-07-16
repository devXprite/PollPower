'use client';

import { Doughnut } from 'react-chartjs-2';

const HalfDoughnut = ({ data }) => {
    const total = data.reduce((p, c) => p + c.votes, 0);

    return (
        <div className="mx-auto h-[17rem] w-full max-w-md  md:h-[22rem]">
            <Doughnut
                data={{
                    labels: data.map(item => item.code),
                    datasets: [
                        {
                            label: 'Votes',
                            data: data.map(item => item.votes),
                        },
                    ],
                }}
                options={{
                    circumference: 180,
                    rotation: -90,
                    maintainAspectRatio: false,

                    plugins: {
                        legend: {
                            position: 'bottom',
                        },

                        title: {
                            text: `Total Votes: ${total}`,
                            align: 'center',
                            position: 'bottom',
                            font: {
                                size: 20,
                                weight: 'bold',
                            },
                        },
                        subtitle: {
                            text: ''
                        }
                    },
                }}
            />
        </div>
    );
};

export default HalfDoughnut;
