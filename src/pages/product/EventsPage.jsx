import React from "react";
import Events from "../home/Events";

const EventsPage = () => {
    return (
        <section className="bg-violet-100 sm:py-16">
            <div className="flex flex-col gap-12 wrapper">
                <Events inPage={true} />
                <Events inPage={true} />
                <Events inPage={true} />
            </div>
        </section>
    );
};

export default EventsPage;
