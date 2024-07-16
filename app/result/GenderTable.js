const GenderTable = ({ tableData }) => {
    return (
        <table className="result-table mx-auto mt-2 w-full text-center">
            <thead>
                <tr className="bg-blue-300">
                    <th colSpan={7} className="md:text-lg">
                        Result By Gender
                    </th>
                </tr>
                <tr className="bg-orange-300 text-sm md:text-base [&>th]:py-1">
                    <th rowSpan={2}>No</th>
                    <th rowSpan={2}>Party</th>
                    <th colSpan={2}>FeMale</th>
                    <th colSpan={2}>Male</th>
                </tr>
                <tr className="bg-orange-300 text-xs md:text-sm [&>th]:py-1">
                    <th>Vote</th>
                    <th>Share</th>
                    <th>Vote</th>
                    <th>Share</th>
                </tr>
            </thead>

            <tbody>
                {tableData.map((item, i) => (
                    <tr key={i} className="text-sm md:text-base">
                        <td>{i + 1}</td>
                        <td className="text-left text-xs md:text-sm">{item.name}</td>

                        <td className="bg-pink-200">{item.female.votes}</td>
                        <td className="bg-pink-200">{item.female.share}%</td>
                        <td className="bg-red-200">{item.male.votes}</td>
                        <td className="bg-red-200">{item.male.share}%</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default GenderTable;
