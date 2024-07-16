import Input from '@/components/UI/Input';
import SubmitBtn from '@/components/UI/SubmitBtn';
import { StatesList } from '@/data/IndianStates';
import PoliticalParties from '@/data/PoliticalParties';
import { redirect } from 'next/navigation';
import { FaSearch } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

const inputFields = [
    {
        name: 'voterName',
        label: 'Search By Name',
        placeholder: 'Enter something to search...',
        type: 'text',
    },

    {
        name: 'email',
        label: 'Search By Email',
        placeholder: 'Enter something to search...',
        type: 'text',
    },

    {
        name: 'gender',
        type: 'select',
        label: 'Gender',
        options: [{ value: 'male' }, { value: 'female' }, { value: 'others' }],
    },

    {
        name: 'state',
        label: 'State',
        type: 'select',
        options: StatesList.map(e => ({ label: e })),
    },
    {
        name: 'candidate',
        label: 'Candidate',
        type: 'select',
        options: PoliticalParties.map(e => ({ value: e.code, label: e.name })),
    },
    {
        name: 'startDate',
        label: 'Start Date',
        type: 'date',
    },
    {
        name: 'endDate',
        label: 'End Date',
        type: 'date',
    },
    {
        name: 'orderBy',
        label: 'Sort By',
        type: 'select',
        options: [
            { value: 'name' },
            { value: 'email' },
            { value: 'createdAt', label: 'Date', selected: true },
            { value: 'age' },
            { value: 'state' },
            { value: 'ip' },
            { value: 'candidate' },
        ],
    },
    {
        name: 'order',
        label: 'Order',
        type: 'select',
        options: [
            {
                value: 'asc',
                label: 'Ascending',
            },
            {
                value: 'desc',
                label: 'Descending',
                selected: true,
            },
        ],
    },
];

const SearchBox = ({ admin_key, ...searchParams }) => {
    const formAction = async formData => {
        'use server';

        const { voterName, gender, state, candidate, email, startDate, endDate, orderBy, order } =
            Object.fromEntries(formData);

        const searchParams = new URLSearchParams();
        searchParams.append('key', admin_key);

        if (voterName) searchParams.append('voterName', voterName);
        if (email) searchParams.append('email', email);

        if (gender && gender != 'none') searchParams.append('gender', gender);
        if (state && state != 'none') searchParams.append('state', state);
        if (candidate && candidate != 'none') searchParams.append('candidate', candidate);

        if (startDate) searchParams.append('startDate', startDate);
        if (endDate) searchParams.append('endDate', endDate);

        if (orderBy && orderBy != 'none') searchParams.append('orderBy', orderBy);
        if (order && order != 'none') searchParams.append('order', order);

        redirect(`/admin?${searchParams.toString()}`);
    };

    return (
        <div className="mb-8 rounded-md bg-white p-4 shadow-xl md:p-6">
            <input type="checkbox" name="filterOpen" id="searchFilter" className="peer hidden" defaultChecked={true} />
            <h2 className="flex items-center justify-between text-lg font-medium text-primary-800 md:text-2xl peer-checked:[&>label]:rotate-180 ">
                <span>Search Filters</span>

                <label
                    htmlFor="searchFilter"
                    className="block cursor-pointer text-sm text-primary-800  transition-all "
                >
                    <MdKeyboardArrowDown className="text-2xl md:text-4xl" />
                </label>
            </h2>

            <form
                action={formAction}
                className="mt-3 hidden gap-2 peer-checked:grid md:grid-cols-5 md:gap-5 md:gap-y-3 md:[&_label]:text-sm "
            >
                {inputFields.map(item => (
                    <Input
                        key={item.name}
                        defaultValue={searchParams[item.name]}
                        {...item}
                        options={item.type == 'select' && [{ value: 'none', label: 'Any' }, ...item.options]}
                    />
                ))}

                <SubmitBtn classname="btn mt-auto h-min py-2">
                    <span>Search</span>
                    <FaSearch />
                </SubmitBtn>
            </form>
        </div>
    );
};

export default SearchBox;
