'use client';

import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    Title,
    RadialLinearScale,
    Filler,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Colors,
    CategoryScale,
} from 'chart.js';

ChartJS.register(
    ArcElement,
    LineElement,
    CategoryScale,
    PointElement,
    BarElement,
    LinearScale,
    RadialLinearScale,
    Filler,
    Tooltip,
    Legend,
    Title,
    Colors,
);

ChartJS.defaults.plugins.colors.enabled = true;

ChartJS.defaults.plugins.title.display = true;
ChartJS.defaults.plugins.legend.position = "bottom";

// ChartJS.defaults.scales.linear.



// ChartJS.defaults.plugins.title.color = '#ccc';

// ChartJS.defaults.scale.grid.color = 'rgba(256, 256, 256, 0.07)';

// ChartJS.defaults.backgroundColor = [
//     'rgba(255, 99, 132, 0.5)',
//     'rgba(255, 159, 64, 0.5)',
//     'rgba(255, 205, 86, 0.5)',
//     'rgba(75, 192, 192, 0.5)',
//     'rgba(54, 162, 235, 0.5)',
//     'rgba(153, 102, 255, 0.5)',
//     'rgba(201, 203, 207, 0.5)',
// ];

const ChartInit = () => {
    return <div></div>;
};

export default ChartInit;
