import React from 'react';

const StatesTable = ({ tableData, totalVotes }) => {
    return (
        <table className="result-table mx-auto mt-8 w-full text-center">
            <thead>
                <tr className="bg-blue-300">
                    <th colSpan={6} className="md:text-lg">
                        Statewise Results
                    </th>
                </tr>
                <tr className="bg-orange-300 text-sm md:text-base">
                    <th rowSpan={2}>No</th>
                    <th rowSpan={2}>State</th>
                    <th colSpan={2}>Winner</th>
                    <th colSpan={2}>Total</th>
                </tr>
                <tr className="bg-orange-300 text-xs md:text-sm [&>th]:py-1">
                    <th>Party</th>
                    <th>Votes</th>
                    <th>Votes</th>
                    <th>Share</th>
                </tr>
            </thead>

            <tbody>
                {tableData.map((item, i) => (
                    <tr key={i} className="text-sm md:text-base">
                        <td>{i + 1}</td>
                        <td className="text-left text-xs md:text-sm">{item.state}</td>
                        <td className='bg-purple-200' >{item.winner.candidate}</td>
                        <td className='bg-purple-200' >{item.winner.votes}</td>
                        <td className='bg-red-200' >{item.votes}</td>
                        <td className='bg-red-200' >{item.share}%</td>
                    </tr>
                ))}
            </tbody>

            {/* <tfoot>
                <tr>
                    <td colSpan={4} className="text-left font-semibold">
                        Total Votes:
                    </td>
                    <td className="bg-gray-300">{totalVotes}</td>
                </tr>
            </tfoot> */}
        </table>
    );
};

export default StatesTable;
