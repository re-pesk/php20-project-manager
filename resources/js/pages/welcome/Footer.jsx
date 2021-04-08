import React from 'react';
import FooterLink from './footer/FooterLink';

export default function Footer({ data }) {
    const { laravelVersion, phpVersion } = data;
    return (
        <div id="footer" className="flex justify-center mt-4 sm:items-center sm:justify-between">
            <div className="text-center text-sm text-gray-500 sm:text-left">
                <div className="flex items-center">
                    <FooterLink url="https://laravel.bigcartel.com" text="Shop" />
                    <FooterLink url="https://github.com/sponsors/taylorotwell" text="Sponsor" classTxt="ml-4" />
                </div>
            </div>
            <div className="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0">
                {`Laravel v${laravelVersion}`}
                {' '}
                {`(PHP v${phpVersion})`}
            </div>
        </div>
    );
}
