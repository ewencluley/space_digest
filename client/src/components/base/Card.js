import React from "react";
import { Link } from "react-router-dom";
import spacex from "../../img/spacex.png";

function Card({ key, image, title, tag1, tag2, tag3 }) {
    return (
        <div key={key} className="max-w-sm rounded overflow-hidden shadow-lg">
            <Link className="block text-black text-2xl" to="/launch">
                <a>
                    <img
                        className="w-full py-8 px-8"
                        src={image ? image : spacex}
                        alt="Sunset in the mountains"
                    />

                    <div className="px-6 py-4">
                        <div className="font-bold text-xl mb-2">{title}</div>
                        <p className="text-gray-700 text-base"></p>
                    </div>
                    <div className="flex justify-between bg-gray-200 px-6 py-4">
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            Launch {tag1}
                        </span>
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700">
                            {tag2}
                        </span>
                        <span className="inline-block px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                            {tag3}
                        </span>
                    </div>
                </a>
            </Link>
        </div>
    );
}

export default Card;