import * as React from 'react';
import { Button } from 'react-bootstrap';

const HiddenEmail = React.lazy(() => import('./HiddenEmail'));

const ContactEmail = ({ emailKey }) => {
    const [showingEmail, setShowingEmail] = React.useState(false);

    const email = showingEmail ? (
        <HiddenEmail emailKey={emailKey} />
    ) : (
        <Button
            size="sm"
            onClick={() => setShowingEmail(true)}
        >
            Show Email
        </Button>
    );
    return (
        <React.Suspense fallback={<div>loading...</div>}>
            {email}
        </React.Suspense>
    );
};

export default ContactEmail;
