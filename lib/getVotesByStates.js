import { db } from './db';
import { groupBy, sumBy } from 'lodash';

const getVotesByStates = async () => {
    const votesData = await db.vote.groupBy({
        by: ['state', 'candidate'],
        where: { candidate: { not: null } },
        _count: {
            _all: true,
        },
    });

  
    const statesGroup = Object.values(groupBy(votesData, 'state'));
    const totalVotes = votesData.reduce((p, c) => p + c._count._all, 0);

    const resultObj = statesGroup.map(item => {
        const votes = sumBy(item, entry => entry._count._all);
        const winner = item.sort((b, a) => a._count._all - b._count._all)[0];

        return {
            votes,
            share: ((votes / totalVotes) * 100).toFixed(0),
            state: item[0].state,
            winner: {
                candidate: winner.candidate,
                votes: winner._count._all,
                share: ((winner._count._all / votes) * 100).toFixed(0),
            },
        };
    });
    // .sort((a, b) => b.votes - a.votes);

    return resultObj;
};

export default getVotesByStates;
