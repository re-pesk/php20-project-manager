import React from 'react';
import Panel from './grid/Panel';

export default function Grid() {
    const data = [
        {
            link: {
                url: 'https://laravel.com/docs',
                linkText: 'Documentation',
            },
            description:
            `Laravel has wonderful, thorough documentation covering every aspect of the framework.
            Whether you are new to the framework or have previous experience with Laravel,
            we recommend reading all of the documentation from beginning to end.`,
        },
        {
            link: {
                url: 'https://laracasts.com',
                linkText: 'Laracasts',
            },
            description:
            `Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development.
            Check them out, see for yourself, and massively level up your development skills in the process.`,
        },
        {
            link: {
                url: 'https://laracasts.com',
                linkText: 'Laracasts',
            },
            description:
            `Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development.
            Check them out, see for yourself, and massively level up your development skills in the process.`,
        },
        {
            link: {
                linkText: 'Vibrant Ecosystem',
            },
            description: (
                <>
                    Laravel&apos;s robust library of first-party tools and libraries, such as
                    {' '}
                    <a href="https://forge.laravel.com" className="underline">Forge</a>
                    ,
                    {' '}
                    <a href="https://vapor.laravel.com" className="underline">Vapor</a>
                    ,
                    {' '}
                    <a href="https://nova.laravel.com" className="underline">Nova</a>
                    , and
                    {' '}
                    <a href="https://envoyer.io" className="underline">Envoyer</a>
                    {' '}
                    help you take your projects to the next level. Pair them with powerful open source libraries like
                    <a href="https://laravel.com/docs/billing" className="underline">Cashier</a>
                    ,
                    {' '}
                    <a href="https://laravel.com/docs/dusk" className="underline">Dusk</a>
                    ,
                    {' '}
                    <a href="https://laravel.com/docs/broadcasting" className="underline">Echo</a>
                    ,
                    {' '}
                    <a href="https://laravel.com/docs/horizon" className="underline">Horizon</a>
                    ,
                    {' '}
                    <a href="https://laravel.com/docs/sanctum" className="underline">Sanctum</a>
                    ,
                    {' '}
                    <a href="https://laravel.com/docs/telescope" className="underline">Telescope</a>
                    , and more.
                </>
            ),
        },
    ];
    return (
        <div id="grid" className="mt-8 bg-white dark:bg-gray-800 overflow-hidden shadow sm:rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2">
                {data.map(
                    (panelData, index) => {
                        const { link, description } = panelData;
                        const key = `key-${index + 1}`;
                        return (<Panel key={key} link={link} description={description} />);
                    },
                )}
            </div>
        </div>
    );
}
