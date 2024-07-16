import PoliticalParties from '@/data/PoliticalParties';
import { db } from './db';
import { groupBy, sumBy } from 'lodash';

const getVotesByCandidate = async () => {
    const votesData = await db.vote.groupBy({
        by: ['candidate', 'gender'],
        where: { candidate: { not: null } },
        _count: { _all: true },
    });

    const totalVotes = votesData.reduce((p, c) => p + c._count._all, 0);

    const result = Object.values(groupBy(votesData, 'candidate'))
        .map(item => {
            const party = PoliticalParties.find(party => party.code === item[0].candidate);
            const votes = sumBy(item, entry => entry._count._all);

            return {
                votes,
                share: ((votes / totalVotes) * 100).toFixed(1),
                candidate: item[0].candidate,
                male: {
                    votes: sumBy(item, entry => (entry.gender === 'male' ? entry._count._all : 0)),
                    share: (
                        (sumBy(item, entry => (entry.gender === 'male' ? entry._count._all : 0)) / votes) *
                        100
                    ).toFixed(0),
                },
                female: {
                    votes: sumBy(item, entry => (entry.gender === 'female' ? entry._count._all : 0)),
                    share: (
                        (sumBy(item, entry => (entry.gender === 'female' ? entry._count._all : 0)) / votes) *
                        100
                    ).toFixed(0),
                },
                ...party,
            };
        })
        .sort((a, b) => b.votes - a.votes);

   

    return result;
};

export default getVotesByCandidate;
