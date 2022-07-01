import { Grid, Button } from "@mui/material";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import styled from "@emotion/styled";
import Image from "next/image";

import * as Images from "./images";

export default function Component() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} xl={12} id="about">
        <DivContainer3>
          <DivTitleWithLine>About canarybird.io</DivTitleWithLine>
          <DivSubtitle>
            canarybird.io is a crowdsourcing platform, which gathers and
            presents environmental data. Our network of sensor installations and
            other third-party sources gathers the data and translates them into
            visual and easy to understand information. You can learn about the
            pollution, humidity, temperature or noise in your surroundings with
            just a few clicks. Even better, you can participate in expanding our
            network and setup your own devices, to enrich the data sourcing.
          </DivSubtitle>
          <div>&nbsp;</div>
          <DivTitleWithLine>
            Participate and help the network grow!
          </DivTitleWithLine>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>
            <Image src={Images.WorldMapImage} alt="" />
          </div>
        </DivContainer3>
      </Grid>
      <Grid item xs={12} xl={12}>
        <DivContainer4>
          <div>
            <div>
              <SmallImage src={Images.ConnectImage} alt=""></SmallImage>
            </div>
            <SmallTitle>Connect</SmallTitle>
            <div>
              Do you want to see your city on our map? Start a local initiative,
              tell us the data your city needs and build a community!
            </div>
          </div>
          <div>
            <div>
              <SmallImage src={Images.HackImage} alt=""></SmallImage>
            </div>
            <SmallTitle>Hack</SmallTitle>
            <div>
              All of the canarybird.io data is available to the public! Feel
              free to use our REST API for research and development of your own
              applications.
            </div>
          </div>
          <div>
            <div>
              <SmallImage src={Images.InspireImage} alt=""></SmallImage>
            </div>
            <SmallTitle>Inspire</SmallTitle>
            <div>
              Feeling creative? You can become a contributor to our team! Wed
              love to hear your ideas and recommendations for improvement.
            </div>
          </div>
        </DivContainer4>
      </Grid>
      <Grid item xs={12} xl={12}>
        <DivParticipate>
          <Button variant="contained" endIcon={<VolunteerActivismIcon />}>
            Participate
          </Button>
        </DivParticipate>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </Grid>
      <Grid item xs={12} xl={12}></Grid>
    </Grid>
  );
}

// Styled Components

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const DivContainer2 = styled(DivContainer)`
  justify-content: space-around;
  height: 60vh;
`;

const DivContainer3 = styled(DivContainer)`
  justify-content: flex-start;
  height: 60vh;
`;

const DivContainer4 = styled.div`
  display: flex;
  flex-direction: row;
  height: 120vh;
  justify-content: center;
  align-items: center;

  text-align: center;
`;

const DivTitle = styled.div`
  padding: 30px;
  font-size: x-large;
`;

const DivTitleWithLine = styled(DivTitle)`
  border-bottom: 2px solid goldenrod;
`;

const DivSubtitle = styled.div`
  padding: 40px;
  font-size: larger;
  text-align: center;
`;

const DivParticipate = styled.div`
  text-align: center;
`;

const SmallImage = styled(Image)`
  background-color: #111165;
  border-radius: 50%;
  min-width: 50px;
`;

const SmallTitle = styled.div`
  font-size: larger;
  padding: 20px;
`;
