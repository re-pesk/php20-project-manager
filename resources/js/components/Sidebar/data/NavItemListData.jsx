import {
    faHome,
    faPaperPlane,
    faQuestion,
    faBug,
    faInfoCircle,
    faChartLine,
} from '@fortawesome/free-solid-svg-icons';

const navItemListData = [
    { href: '/', icon: faHome, text: 'Home' },
    { href: '/dashboard', icon: faChartLine, text: 'Dashboard' },
    { href: '/empty', icon: faInfoCircle, text: 'About' },
    { href: '/logged-in', icon: faQuestion, text: 'Is User Logged in?' },
    { href: '/example', icon: faQuestion, text: 'Auth Example' },
    { href: '/test', icon: faBug, text: 'Error' },
    { href: '/contact', icon: faPaperPlane, text: 'Contact' },
];

export default navItemListData;
