import { db } from '@/lib/db';
import LoginBox from './LoginBox';
import ResultTable from './ResultTable';
import SearchBox from './SearchBox';
import { Suspense } from 'react';

export const metadata = { title: 'Admin' };


const page = async ({ searchParams: { key, ...searchParams } }) => {
    // await sleep();
    if (!key || key !== process.env.ADMIN_KEY) return <LoginBox isInvalid={Boolean(key)} />;

    const query = {
        where: {
            name: { contains: searchParams?.voterName, mode: 'insensitive' },
            email: { contains: searchParams?.email, mode: 'insensitive' },

            gender: searchParams?.gender,
            state: searchParams?.state,
            candidate: searchParams?.candidate,

            createdAt: {
                gte: searchParams?.startDate ? new Date(searchParams?.startDate) : undefined,
                lte: searchParams?.endDate ? new Date(searchParams?.endDate) : undefined,
            },
        },
        orderBy: {
            [searchParams?.orderBy || 'createdAt']: searchParams?.order || 'desc',
        },
        take: 200,
    };

    const result = await db.vote.findMany(query);

    return (
         <div className="mx-auto max-w-screen-xl px-3 py-16">
            <SearchBox admin_key={key} {...searchParams} />
            <ResultTable tableData={result} />
        </div>
    );
};

export default page;
