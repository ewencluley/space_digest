import React from "react";

function Header() {
    return (
        <header className="container mx-auto text-black text-center">
            <div className="mb-20">
                <h1 className="inline-block w-7/12 mx-auto bg-teal-300 text-7xl font-semibold leading-none mt-20 mb-10 text-left">
                    Space digest.
                </h1>
                <h2 className="w-3/4 mx-auto text-3xl leading-snug ">
                    "Space is for everybody. It's not just for a few people in
                    science or math, or for a select group of astronauts. That's
                    our new frontier out there, and it's everybody's business to
                    know about space."
                </h2>
                <p className="pt-3">CHRISTA MCAULIFFE, December 6, 1985</p>
            </div>
        </header>
    );
}

export default Header;
