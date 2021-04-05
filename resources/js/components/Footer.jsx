import React from 'react';
import ReactDOM from 'react-dom';
import FooterLink from './FooterLink';

function Footer({ data }) {
    const { laravelVersion, phpVersion } = data;
    return (
        <>
            <div className="text-center text-sm text-gray-500 sm:text-left">
                <div className="flex items-center">
                    <FooterLink url="https://laravel.bigcartel.com" text="Shop" />
                    <FooterLink url="https://github.com/sponsors/taylorotwell" text="Sponsor" classTxt="ml-4" />
                </div>
            </div>

            <div className="ml-4 text-center text-sm text-gray-500 sm:text-right sm:ml-0">
                Laravel v
                {laravelVersion}
                {' '}
                (PHP v
                {phpVersion}
                )
            </div>
        </>
    );
}

ReactDOM.render(
    <Footer data={window.footerVars} />,
    document.getElementById('footer'),
);
