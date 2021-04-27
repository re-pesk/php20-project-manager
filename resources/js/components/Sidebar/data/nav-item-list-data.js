import {
    faHome,
    faPaperPlane,
    faQuestion,
    faBug,
    faInfoCircle,
    faChartLine,
    faProjectDiagram,
} from '@fortawesome/free-solid-svg-icons';

export default [
    { href: '/', icon: faHome, text: 'Home' },
    { href: '/dashboard', icon: faChartLine, text: 'Dashboard' },
    { href: '/projects', icon: faProjectDiagram, text: 'Projects' },
    { href: '/empty', icon: faInfoCircle, text: 'About' },
    { href: '/logged-in', icon: faQuestion, text: 'Is User Logged in?' },
    // { href: '/example', icon: faQuestion, text: 'Auth Example' },
    { href: '/test', icon: faBug, text: 'Error' },
    { href: '/contact', icon: faPaperPlane, text: 'Contact' },
];
