import React, { Component } from "react";
import Loader from "./base/Loader";
import Moment from "react-moment";

class MarsWeather extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            solData: null
        };
    }

    async componentDidMount() {
        await fetch("/api/mars-weather/weather")
            .then(res => res.json())
            .then(solData => {
                this.setState(
                    {
                        error: null,
                        isLoaded: true,
                        solData
                    },
                    () => console.log("Weather fetched! --->>>", solData)
                );
            })
            .catch(error => console.error(error));
    }

    render() {
        const { error, isLoaded, solData } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return (
                <div className="text-center">
                    <Loader className="inline-block" />
                </div>
            );
        } else {
            return (
                <div className="mx-auto md:pr-30 text-left">
                    <h2 className="block mb:w-9/12 mx-auto">
                        Weather on Mars equator
                    </h2>
                    <p className="mx-auto">
                        InSight is taking daily weather measurements
                        (temperature, wind, pressure) on the surface of Mars at
                        Elysium Planitia, a flat, smooth plain near Mars’
                        equator.
                    </p>

                    <div className="md:w-full mx-auto py-8">
                        <div className="my-8 bg-gray-100 py-4 px-4">
                            <p className="block">
                                <strong>Sol</strong>{" "}
                                {solData[solData.length - 1].marsSol}
                            </p>
                            <p>
                                <strong>Earth date:</strong>{" "}
                                <Moment format="DD/MM">
                                    {solData[solData.length - 1].earth_date}
                                </Moment>
                            </p>
                            <p>
                                <strong>Season:</strong>{" "}
                                {solData[solData.length - 1].season}
                            </p>
                            <p>
                                <strong>high: </strong>
                                {solData[solData.length - 1].temperature.max}° F
                            </p>
                            <p>
                                <strong>low: </strong>
                                {solData[solData.length - 1].temperature.min}° F
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row mx-auto">
                            {solData.map(data => {
                                return (
                                    <div
                                        className="flex-1 text-xs bg-gray-100 py-5"
                                        key={data.marsSol}
                                    >
                                        <ul>
                                            <li className="text-xs md:pl-4 ">
                                                <strong>Sol: </strong>
                                                {data.marsSol}
                                            </li>

                                            <li className="text-xs md:pl-4 ">
                                                <strong>Earth date: </strong>
                                                <Moment format="DD/MM">
                                                    {data.earth_date}
                                                </Moment>
                                            </li>
                                            <li className="text-xs md:pl-4 ">
                                                <strong>high: </strong>
                                                {data.temperature.max}° F
                                            </li>
                                            <li className="text-xs md:pl-4 ">
                                                <strong>low: </strong>
                                                {data.temperature.min}° F
                                            </li>
                                        </ul>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default MarsWeather;
