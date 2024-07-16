import { FaTrash } from 'react-icons/fa';

const ResultTable = ({ tableData }) => {
    return (
        <div className="w-full overflow-y-auto">
            <table className="result-table w-full">
                <thead className="text-xs md:text-base">
                    <tr className="bg-blue-300">
                        <th colSpan={11}>Voters Data</th>
                    </tr>
                    <tr className="bg-orange-300">
                        <th>No</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>State</th>
                        <th>Candidate</th>
                        <th>IP</th>
                        <th>Device</th>
                        <th>Voted At</th>
                        {/* <th>Action</th> */}
                    </tr>
                </thead>

                <tbody>
                    {tableData.map((item, i) => (
                        <tr
                            key={i}
                            className="text-xs odd:bg-white even:bg-gray-100 md:text-sm [&>td]:max-w-40 [&>td]:truncate "
                        >
                            <td className="text-center">{i + 1}</td>
                            <td className="max-w-56 truncate">{item.name}</td>
                            <td className="max-w-56 truncate">{item.email}</td>
                            <td className="max-w-56 truncate">{item.gender}</td>
                            <td className="max-w-56 truncate">{item.age}</td>
                            <td className="">{item.state}</td>
                            <td>{item.candidate}</td>
                            <td>
                                <a target="_blank" className="text-primary-600" href={`http://ipinfo.io/${item.ip}`}>
                                    {item?.ip || 'n/a'}
                                </a>
                            </td>
                            <td>
                                <a
                                    target="_blank"
                                    className="text-primary-600"
                                    href={`https://uaparser.js.org/?ua=${item?.userAgent}`}
                                >
                                    Click here
                                </a>
                            </td>
                            <td
                                title={new Date(item.createdAt).toLocaleString('en-IN', {
                                    dateStyle: 'full',
                                    timeStyle: 'medium',
                                    timeZone: 'Asia/Kolkata',
                                })}
                            >
                                {new Date(item.createdAt).toLocaleString('en-IN', {
                                    dateStyle: 'short',
                                    timeStyle: 'short',
                                    timeZone: 'Asia/Kolkata',
                                })}
                            </td>
                            {/* <td>
                            <div className="flex gap-3">
                                <button className="btn gap-3 bg-red-500 px-3 py-1.5 text-xs ">
                                    <span>Delete</span>
                                    <FaTrash />
                                </button>
                            </div>
                        </td> */}
                        </tr>
                    ))}

                    {tableData.length === 0 && (
                        <tr>
                            <td colSpan={11} className="!py-12 text-center text-gray-600">
                                No Record found!
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
            <p className="text-sm italic text-gray-600 md:text-base mt-2">* max 200 results per page</p>
        </div>
    );
};

export default ResultTable;
