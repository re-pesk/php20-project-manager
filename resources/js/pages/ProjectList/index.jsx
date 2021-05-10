import React from 'react';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal';
import Projects from './Projects/ProjectsList';

export default function ProjectList() {
    return (
        <>
            <ConfirmDeleteModal itemNameToDelete="project" />
            <Projects />
        </>
    );
}
