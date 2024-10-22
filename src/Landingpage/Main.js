import React from "react";
const Main=()=>{
    return(
        <div className="main">
            <div className="col col1">
                <h2>Your Movies</h2>
                <p>Watch best Pictures movies and tv series on FlixHQ for free, <br/>Download Paragraph Pictures movies and tv series in HD easily.,</p>
                <button type="button">More</button>
            </div>
            <div className="col col2">
                <div className="card card1">
                    <a target="blank" href="https://flixhq.to/movie/watch-joker-folie-a-deux-114916">
                        <img src='./Landingpage/joker1.webp'alt=""/>
                    </a>
                </div>
                <div className="card card2">
                    <a target="blank" href="https://flixhq.to/movie/watch-hacker-trust-no-one-75448">
                        <img src='./Landingpage/hacker.jpg'alt=""/>
                    </a>
                </div>
                <div className="card card3">
                    <a target="blank" href="https://flixhq.to/movie/watch-deadpool-wolverine-111016">
                        <img src='./Landingpage/deadwol.jpg'alt=""/>
                    </a>
                </div>
                <div className="card card4">
                    <a target="blank" href="https://flixhq.to/movie/watch-terminator-dark-fate-9682">
                        <img src='./Landingpage/Darkfate.jpg'alt=""/>
                    </a>
                </div>
                <div className="card card5">
                    <a target="blank" href="https://flixhq.to/movie/watch-the-popes-exorcist-95038">
                        <img src='./Landingpage/popexorcist.jpeg'alt=""/>
                    </a>
                </div>
                <div className="card card6">
                    <a target="blank" href="https://flixhq.to/movie/watch-civil-war-107968">
                        <img src='./Landingpage/Civil-War.jpeg'alt=""/>
                    </a>
                </div>
            </div>
        </div>
    );
}
export default Main;