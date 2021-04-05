import React from 'react';

export default function FooterLink({ classTxt, text, url }) {
    return (
        <>
            <svg
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`${classTxt || ''} -mt-px w-5 h-5 text-gray-400`}
            >
                {/* eslint-disable-next-line max-len */}
                <path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>

            <a href={url} className="ml-1 underline">{text}</a>
        </>
    );
}
