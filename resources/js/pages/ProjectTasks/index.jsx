import React from 'react';
import ConfirmDeleteModal from '../../components/ConfirmDeleteModal';
import Tasks from './Tasks/Tasks';

export default function ProjectTasks() {
    return (
        <>
            <ConfirmDeleteModal itemNameToDelete="task" />
            <Tasks />
        </>
    );
}
