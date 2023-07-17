import React from "react";
import Events from "./Events";

const EventsPage = () => {
    return (
        <section className="py-16">
            <div className="wrapper">
                <Events />
                <Events />
                <Events />
            </div>
        </section>
    );
};

export default EventsPage;
