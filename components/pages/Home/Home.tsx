import React from "react";
import CompetitionEvent from "./CompetitionEvent";
import DashboardImg from "./DashboardImg";
import HowItWorks from "./HowItworks";
import JoinDiscord from "./JoinDiscord";
import SliderBar from "./SliderBar";
import { HomeDiv } from "./StyledHome";

const Home = () => {
  return (
    <HomeDiv>
      <DashboardImg />
      <SliderBar />
      <CompetitionEvent />
      <HowItWorks />
      <JoinDiscord />
    </HomeDiv>
  );
};

export default Home;
