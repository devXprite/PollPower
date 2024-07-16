import HalfDoughnut from './HalfDoughnut';
import { unstable_noStore } from 'next/cache';
import getVotesByCandidate from '@/lib/getVotesByCandidate';
import CandidateTable from './CandidateTable';
import GenderTable from './GenderTable';
import GenderChart from './GenderChart';
import getVotesByStates from '@/lib/getVotesByStates';
import StatesTable from './StatesTable';
import StateChart from './StateChart';
import ChartInit from '@/components/ChartInit';


export const metadata = { title: 'Results' };


const page = async () => {
    unstable_noStore();

    const votesByCandidate = await getVotesByCandidate();
    const totalVotes = votesByCandidate.reduce((p, c) => p + c.votes, 0);

    const votesByStates = await getVotesByStates();

    return (
        <div className="mx-auto max-w-screen-xl px-3 py-10">
            <ChartInit />

            <HalfDoughnut data={votesByCandidate} />
            <CandidateTable tableData={votesByCandidate} totalVotes={totalVotes} />

            <GenderChart chartData={votesByCandidate} />
            <GenderTable tableData={votesByCandidate} />

            <StateChart chartData={votesByStates} />
            <StatesTable tableData={votesByStates} />
        </div>
    );
};

export default page;
