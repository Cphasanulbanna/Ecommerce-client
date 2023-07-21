import React from "react";
import Events from "../home/Events";

const EventsPage = () => {
    return (
        <section className="py-8 bg-violet-100 sm:py-16">
            <div className="flex flex-col gap-6 sm:gap-12">
                <Events inPage={true} />
                <Events inPage={true} />
                <Events inPage={true} />
            </div>
        </section>
    );
};

export default EventsPage;
