import { Grid, Button } from '@mui/material';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import styled from '@emotion/styled';
import Image from 'next/image';

import * as Images from './images';

const StyC = getStyledComponents();

export default function Component() {
  return (
    <Grid container spacing={1}>
      <Grid item xs={12} xl={12} id="about">
        <StyC.DivContainer3>
          <StyC.DivTitleWithLine>
            About pulse.eco
          </StyC.DivTitleWithLine>
          <StyC.DivSubtitle>
            Pulse.eco is a crowdsourcing platform, which gathers and presents environmental data.
            Our network of sensor installations and other third-party sources gathers the data and translates them into visual and easy to understand information.
            You can learn about the pollution, humidity, temperature or noise in your surroundings with just a few clicks.
            Even better, you can participate in expanding our network and setup your own devices, to enrich the data sourcing.
          </StyC.DivSubtitle>
          <div>&nbsp;</div>
          <StyC.DivTitleWithLine>
            Participate and help the network grow!
          </StyC.DivTitleWithLine>
          <div>&nbsp;</div>
          <div>&nbsp;</div>
          <div>
            <Image src={Images.WorldMapImage} alt=""/>
          </div>
        </StyC.DivContainer3>
      </Grid>
      <Grid item xs={12} xl={12}>
        <StyC.DivContainer4>
          <div>
            <div>
              <StyC.SmallImage src={Images.ConnectImage} alt=""></StyC.SmallImage>
            </div>
            <StyC.SmallTitle>
              Connect
            </StyC.SmallTitle>
            <div>
              Do you want to see your city on our map? Start a local initiative, tell us the data your city needs and build a community! See how you can create yourcity.pulse.eco
            </div>
          </div>
          <div>
            <div>
              <StyC.SmallImage src={Images.HackImage} alt=""></StyC.SmallImage>
            </div>
            <StyC.SmallTitle>
              Hack
            </StyC.SmallTitle>
            <div>
              All of the pulse.eco data is available to the public! Feel free to use our REST API for research and development of your own applications.</div>
          </div>
          <div>
            <div>
              <StyC.SmallImage src={Images.InspireImage} alt=""></StyC.SmallImage>
            </div>
            <StyC.SmallTitle>
              Inspire
            </StyC.SmallTitle>
            <div>
              Feeling creative? You can become a contributor to our team! Wed love to hear your ideas and recommendations for improvement.</div>
          </div>
        </StyC.DivContainer4>
      </Grid>
      <Grid item xs={12} xl={12}>
        <StyC.DivParticipate>
          <Button variant="contained" endIcon={<VolunteerActivismIcon />}>Participate</Button>
        </StyC.DivParticipate>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </Grid>
      <Grid item xs={12} xl={12}>

      </Grid>
    </Grid>
  )
}

function getStyledComponents() {
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

  return {
    DivContainer,
    SmallTitle,
    SmallImage,
    DivParticipate,
    DivTitle,
    DivSubtitle,
    DivTitleWithLine,
    DivContainer4,
    DivContainer3,
    DivContainer2
  };
}

