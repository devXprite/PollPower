import { StatesList } from '@/data/IndianStates';
import { z } from 'zod';

const voterSchema = z.object({
    name: z
        .string({ required_error: 'Name is required.' })
        .min(3, { message: 'Name is too short. Please enter a valid name.' })
        .max(255)
        .trim(),

    email: z
        .string({ required_error: 'Email is required.' })
        .email({ message: 'Email is not valid. Please enter a valid email.' })
        .max(255)
        .toLowerCase(),

    age: z
        .number({ required_error: 'Age is required.' })
        .int({ message: 'Age should be a number.' })
        .min(18, { message: 'You must be 18 years or older to vote.' })
        .max(200, { message: 'Please enter a valid age.' }),

    gender: z
        .string({ required_error: 'Gender is required' })
        .refine(gender => ['male', 'female', 'others'].includes(gender), {
            message: 'Please select a valid gender.',
        }),

    state: z
        .string({ required_error: 'State is required. Please select a state.' })
        .refine(state => StatesList.includes(state), { message: 'State is not valid.' }),

    // district: z
    //     .string({ required_error: 'District is required. Please select a district.' })
    //     .refine(district => DistrictsList(state).includes(district), {
    //         message: 'District is not valid for the selected state.',
    //     }),
});

export default voterSchema;
