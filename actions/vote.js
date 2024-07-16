'use server';

import { db } from '@/lib/db';
import { isRedirectError } from 'next/dist/client/components/redirect';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

const vote = async party => {
    const voterId = cookies().get('voterId')?.value;
    if (!voterId) return { ok: false, error: 'Access Denied!' };

    try {
        const isAlreadyVoted = await db.vote.findFirst({
            where: { id: voterId },
            select: { candidate: true },
        });

        console.log(isAlreadyVoted);
        if (isAlreadyVoted?.candidate) return { ok: false, error: 'You have already voted! You cannot vote again.' };

        const response = await db.vote.update({ where: { id: voterId }, data: { candidate: party.code } });
        redirect('/success');
    } catch (error) {
        if (isRedirectError(error)) throw error;
        console.log(error);

        return {
            ok: false,
            error: 'Something went wrong! Please try again later.',
        };
    }
};

export default vote;
