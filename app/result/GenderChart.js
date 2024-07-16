'use client';
import { Bar, Radar } from 'react-chartjs-2';

const GenderChart = ({ chartData }) => {

    // const chartData = [
    //     {
    //         votes: 4,
    //         share: '44.4',
    //         candidate: 'BJP',
    //         male: { votes: 3, share: '75' },
    //         female: { votes: 1, share: '25' },
    //         code: 'BJP',
    //         symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Lotus_flower_symbol.svg/50px-Lotus_flower_symbol.svg.png',
    //         name: 'Bharatiya Janata Party',
    //         nameHindi: 'भारतीय जनता पार्टी',
    //     },
    //     {
    //         votes: 2,
    //         share: '22.2',
    //         candidate: 'INC',
    //         male: { votes: 2, share: '100' },
    //         female: { votes: 0, share: '0' },
    //         code: 'INC',
    //         symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Hand_INC.svg/50px-Hand_INC.svg.png',
    //         name: 'Indian National Congress',
    //         nameHindi: 'भारतीय राष्ट्रीय कांग्रेस',
    //     },
    //     {
    //         votes: 1,
    //         share: '11.1',
    //         candidate: 'AAP',
    //         male: { votes: 1, share: '100' },
    //         female: { votes: 0, share: '0' },
    //         code: 'AAP',
    //         symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/AAP_Symbol.png/50px-AAP_Symbol.png',
    //         name: 'Aam Aadmi Party',
    //         nameHindi: 'आम आदमी पार्टी',
    //     },
    //     {
    //         votes: 1,
    //         share: '11.1',
    //         candidate: 'SP',
    //         male: { votes: 0, share: '0' },
    //         female: { votes: 1, share: '100' },
    //         code: 'SP',
    //         symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Indian_Election_Symbol_Cycle.png/50px-Indian_Election_Symbol_Cycle.png',
    //         name: 'Samajwadi Party',
    //         nameHindi: 'समाजवादी पार्टी',
    //     },
    //     {
    //         votes: 1,
    //         share: '11.1',
    //         candidate: 'BSP',
    //         male: { votes: 1, share: '100' },
    //         female: { votes: 0, share: '0' },
    //         code: 'BSP',
    //         symbol: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Indian_Election_Symbol_Elephant.png/50px-Indian_Election_Symbol_Elephant.png',
    //         name: 'Bahujan Samaj Party',
    //         nameHindi: 'बहुजन समाज पार्टी',
    //     },
    // ];

    return (
        <div className="mx-auto mt-20 grid w-full gap-4 md:grid-cols-[28rem_1fr]">
            <div className="h-96 w-full">
                <Radar
                    data={{
                        labels: chartData.map(item => item.code),
                        datasets: [
                            {
                                label: 'Male Votes',
                                data: chartData.map(item => item.male.votes),
                            },
                            {
                                label: 'Female Votes',
                                data: chartData.map(item => item.female.votes),
                                backgroundColor: 'rgb(249 168 212)',
                            },
                        ],
                    }}
                    options={{
                        maintainAspectRatio: false,
                        // scales: { y: { ticks: { precision: 0 } } },
                    }}
                />
            </div>

            <div className="h-80 md:h-96 w-full">
                <Bar
                    data={{
                        labels: chartData.map(item => item.code),
                        datasets: [
                            {
                                label: 'Male Votes',
                                data: chartData.map(item => item.male.votes),
                            },
                            {
                                label: 'Female Votes',
                                data: chartData.map(item => item.female.votes),
                                backgroundColor: 'rgb(249 168 212)',
                            },
                        ],
                    }}
                    options={{
                        maintainAspectRatio: false,
                        scales: { y: { ticks: { precision: 0 } } },
                        plugins: {
                            title: {
                                text: 'Votes By Gender',
                                position: 'top',
                            },
                        },
                    }}
                />
            </div>
        </div>
    );
};

export default GenderChart;
