import React from "react";

function page__about() {
    return (
        <div className="container h-screen w-3/4 mx-auto pt-32 ">
            <h1 className="">About Space Digest</h1>
            <p className="w-2/4 block">
                This is an informational website created as a personal project,
                for fans of Nasa, SpaceX and space in general. Here you will
                find data and media,past and future space missions.
            </p>
            <p className="w-2/4 block mt-6">
                Special thanks to the teams at NASA and SpaceX for providing and
                maintaining all the data this website is built upon.
            </p>
            <p className="w-2/4 block mt-6">
                The plan for the future includes further development for to
                improve the experience. Feel free to say hey at:
            </p>
            <p className="w-2/4 block mt-6">hey@spacedigest.live</p>
            <p className="w-2/4 block mt-6">Thanks for visiting :)</p>
        </div>
    );
}

export default page__about;
