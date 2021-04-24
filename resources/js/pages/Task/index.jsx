import React from "react";
import { useParams } from "react-router-dom";
import classNames from "classnames";
import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { useSidebarContext } from "../../context/SidebarContext";
import Tasks from "./Tasks/Tasks";

export default function ProjectTasks() {
    const { isOpen } = useSidebarContext;
    let { project } = useParams();

    return (
        <Container
            fluid
            className={classNames("content", { "is-open": isOpen })}
        >
            <Header title="Project Tasks" />
            <Tasks id={project} />

            <Footer />
        </Container>
    );
}
