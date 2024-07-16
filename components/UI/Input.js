'use client';

import { twMerge } from 'tailwind-merge';
import { sentenceCase } from 'change-case';

const Input = ({ label, name, type, placeholder, options, span, value, ...props }) => {
    const className =
        'block w-full rounded-md border border-gray-400 p-2 text-sm shadow outline-none focus:border-2 focus:border-primary-500 focus:invalid:bg-red-50 focus:invalid:border-red-500 focus:bg-primary-50 bg-gray-50 md:text-base';

    const InputEl = () => {
        if (type === 'textarea') {
            return (
                <textarea
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    className={twMerge(className, 'min-h-56 text-sm md:min-h-40')}
                    {...props}
                >
                    {value}
                </textarea>
            );
        }

        if (type == 'select') {
            return (
                <select
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    className={className}
                    defaultValue={value}
                    {...props}
                >
                    {props?.required && (
                        <option disabled selected value>
                            select an option
                        </option>
                    )}
                    {options?.map(option => (
                        <option key={option.value} value={option.value}>
                            {option?.label || option?.value}
                        </option>
                    ))}
                </select>
            );
        }

        return (
            <input
                type={type ?? 'text'}
                name={name}
                id={name}
                className={className}
                // className='block w-full rounded-md border-2 border-gray-600  p-2 text-sm shadow-md outline-none focus:border-2 focus:border-primary-500 focus:bg-primary-50 bg-gray-50 md:text-base 2xl:p-2.5'
                placeholder={placeholder || `Enter ${label}`}
                defaultValue={type === 'file' ? undefined : props.defaultValue}
                value={value}
                {...props}
            />
        );
    };

    return (
        <div className={`${span ? 'md:col-span-2' : ''}`}>
            {label && (
                <label htmlFor={name} className="mb-0.5 block text-xs text-gray-800 md:text-sm 2xl:text-base">
                    {label ?? sentenceCase(name)} {props.required && '*'}
                </label>
            )}

            {InputEl()}
        </div>
    );
};

export default Input;
