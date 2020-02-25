import React, { Component } from "react";
class Media extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            mediaData: null
        };
    }
    async componentDidMount() {
        await fetch("/api/images/image")
            .then(res => res.json())
            .then(mediaData => {
                this.setState(
                    {
                        isLoaded: true,
                        mediaData: {
                            date: mediaData.date,
                            title: mediaData.title,
                            explanation: mediaData.explanation,
                            url: mediaData.url,
                            hdurl: mediaData.hdurl,
                            media_type: mediaData.media_type
                        }
                    },
                    () => console.log("Media fetched! --->>>", mediaData)
                );
            })
            .catch(error => console.error("Error:", error));
    }

    render() {
        const { error, isLoaded, mediaData } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div className="container mx-auto">
                    <h3>Loading...</h3>
                </div>
            );
        } else if (mediaData.media_type !== "video") {
            return (
                <div className="container mx-auto text-center">
                    <div className="flex justify-center">
                        <h2 className="text-2xl mb-2 uppercase">Daily image</h2>
                    </div>
                    <img
                        className="w-full mx-auto rounded-lg mb-12 "
                        src={mediaData.url}
                        alt="Media from space"
                    />
                    <div className="container mx-auto flex pr-48 py-10 text-left">
                        <p className="w-1/3 inline-block flex-1 bg-gray-100 text-2xl font-bold pl-5 pt-5">
                            {mediaData.title}
                        </p>
                        <p className="w-2/3 text-2xl font-light mx-auto px-16 pt-5 ">
                            {mediaData.explanation}
                        </p>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="container mx-auto text-center">
                    <div className="flex justify-center">
                        <h2 className="text-2xl mb-2 uppercase">
                            Daily image {mediaData.date}
                        </h2>
                    </div>
                    {/* <video
                        style={{ width: "100%" }}
                        src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4"
                        controls
                        autoPlay
                        muted
                    /> */}

                    <video
                        src={mediaData.url}
                        className="w-full container mx-auto"
                        controls
                        autoPlay
                        muted
                    />
                    <div className="container mx-auto flex pr-48 py-10 text-left">
                        <p className="w-1/3 inline-block flex-1 bg-gray-100 text-2xl font-bold pl-5 pt-5">
                            {mediaData.title}
                        </p>
                        <p className="w-2/3 text-2xl font-light mx-auto px-16 pt-5 ">
                            {mediaData.explanation}
                        </p>
                    </div>
                </div>
            );
        }
    }
}
export default Media;