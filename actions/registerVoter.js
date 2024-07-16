'use server';

import { db } from '@/lib/db';
import { cookies, headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { isRedirectError } from 'next/dist/client/components/redirect';
import voterSchema from '@/lib/voterSchema';

const registerVoter = async ({ email, name, state, age, gender }) => {
    const validationResult = voterSchema.safeParse({
        email,
        name,
        state,
        age: parseInt(age),
        gender,
    });

    if (!validationResult.success) {
        return {
            ok: false,
            error: validationResult.error.errors[0].message,
        };
    }

    const ip = headers().get('x-forwarded-for') || headers().get('x-real-ip');
    const userAgent = headers().get('User-Agent');

    try {
        const oldVoter = await db.vote.findFirst({ where: { email: validationResult.data.email } });

        if (oldVoter) {
            return {
                ok: false,
                error: 'A User already exist with this email. Please try again with a different email.',
            };
        }

        const response = await db.vote.create({
            data: {
                ...validationResult.data,
                ip,
                userAgent,
            },
        });

        cookies().set('voterId', response.id);
        cookies().set('voterName', name);

        redirect(`/vote`);
    } catch (error) {
        if (isRedirectError(error)) throw error;
        console.log(error);

        return {
            ok: false,
            error: 'Something went wrong! Please try again later.',
        };
    }
};

export { registerVoter };
