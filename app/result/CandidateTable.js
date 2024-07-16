const CandidateTable = ({tableData, totalVotes}) => {
  return (
    <table className="result-table mx-auto mt-8 w-full text-center">
    <thead>
        <tr className="bg-blue-300">
            <th colSpan={5} className="md:text-lg">
                Result By Votes
            </th>
        </tr>
        <tr className="bg-orange-300 text-sm md:text-base">
            <th>No</th>
            <th>Party</th>
            <th>Code</th>
            <th>Share</th>
            <th>Votes</th>
        </tr>
    </thead>

    <tbody>
        {tableData.map((item, i) => (
            <tr key={i} className="text-sm md:text-base">
                <td>{i + 1}</td>
                <td className="text-left text-xs md:text-sm">{item.name}</td>
                <td>{item.code}</td>
                <td>{item.share}%</td>
                <td className="bg-red-200">{item.votes}</td>
            </tr>
        ))}
    </tbody>

    <tfoot>
        <tr>
            <td colSpan={4} className="text-left font-semibold">
                Total Votes:
            </td>
            <td className="bg-gray-200">{totalVotes}</td>
        </tr>
    </tfoot>
</table>
  )
}

export default CandidateTable