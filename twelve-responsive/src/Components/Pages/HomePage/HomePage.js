import React from "react";
import HeroSection from "../HeroSection/HeroSection";
import  {homeObjOne, homeObjTwo, homeObjThree, homeObjFour} from "../Data/Data";
const HomePage = () => {
    return(
        <>
            <HeroSection {...homeObjOne}/>
            <HeroSection {...homeObjThree}/>
            <HeroSection {...homeObjTwo}/>
            <HeroSection {...homeObjFour}/>
        </>
    )
}

export default HomePage;