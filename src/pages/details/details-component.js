import styled from "@emotion/styled";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Fragment } from "react";

import CircularProgress from "@mui/material/CircularProgress";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";

import * as Components from "./components";
import * as Images from "./images";
import { Measurements } from "./measurements";

export default function Component({
  value,
  handleChange,
  inProgress,
  measurements,
  city,
  devices,
}) {
  return (
    <div>
      <HeaderContainer>
        <Image src={Images.LogoImage} alt="" />

        <MenuContainer>
          <CityTitle>
            <Breadcrumbs aria-label="breadcrumb">
              <Link href="/">
                <a>Home</a>
              </Link>
              <Link href="/">
                <a>{city}</a>
              </Link>
            </Breadcrumbs>
          </CityTitle>
          <Link href="/">
            <a>Explore data</a>
          </Link>
          <Link href="/">
            <a>Participate</a>
          </Link>
          <Link href="/">
            <a>App store</a>
          </Link>

          <Link href="/">
            <a>Play store</a>
          </Link>
          <Link href="/">
            <a>Register</a>
          </Link>
        </MenuContainer>
      </HeaderContainer>

      <FlexContainer>
        <CustomTabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          sx={{ borderRight: 1, borderColor: "divider" }}
        >
          {Measurements.map(({ Icon, label }, index) => (
            <Tab
              key={`tab_${index}`}
              icon={Icon}
              iconPosition="bottom"
              label={label}
            />
          ))}
        </CustomTabs>
        <Flex1Container>
          {inProgress && <CircularProgress />}
          {!inProgress && (
            <TabPanel {...{ title: Measurements[value].title, measurements }} />
          )}
        </Flex1Container>
        {RenderDynamicMap(devices)}
      </FlexContainer>
    </div>
  );
}

function TabPanel({ measurements, title }) {
  return (
    <Fragment>
      <div>{title}</div>
      <div>&nbsp;</div>
      <Components.LineComponent data={measurements} />
      <div>&nbsp;</div>
    </Fragment>
  );
}

function RenderDynamicMap(sensors) {
  const Map = dynamic(
    () => import("./components/map-component"), // replace '@components/map' with your component's location
    { ssr: false } // This line is important. It's what prevents server-side render
  );
  return <Map sensors={sensors} />;
}

// Styled Components

const FlexContainer = styled.div`
  display: flex;

  display: flex;
  height: 100vh;
  justify-content: flex-start;
  align-items: center;
`;

const Flex1Container = styled.div`
  display: flex;
  flex-direction: column;

  display: flex;
  height: 40vh;
  justify-content: center;
  align-items: center;

  background-color: white;
  min-width: 20vw;
`;

const HeaderContainer = styled.div`
  display: flex;
  height: 6vh;
  justify-content: flex-start;
  align-items: center;
`;

const CityTitle = styled.p`
  text-transform: capitalize;
  padding: 0px 20px;
`;

const MenuContainer = styled.div`
  display: flex;
  height: 6vh;
  justify-content: flex-end;
  align-items: center;

  padding-left: 20px;

  a {
    padding: 10px;
  }
`;

const CustomTabs = styled(Tabs)`
  background-color: white;
  height: 40vh;
`;
