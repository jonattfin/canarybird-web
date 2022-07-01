import { Grid } from "@mui/material";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

import * as Images from "./images";

const StyC = getStyledComponents();

export default function Component() {
  return (
    <Grid container spacing={1}>
      <Grid item xl={2}>
        <StyC.LogoComponent>
          <Link href="/">
            <a>
              <Image src={Images.LogoImage} alt="" />
            </a>
          </Link>
        </StyC.LogoComponent>
      </Grid>
      <Grid item xl={10}>
        <StyC.NavComponent>
          <StyC.DivLink>
            <a href="#about">About us</a>
          </StyC.DivLink>
        </StyC.NavComponent>
      </Grid>
    </Grid>
  );
}

function getStyledComponents() {
  const LogoComponent = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 30px;
  `;

  const NavComponent = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;

    padding: 30px;
  `;

  const DivLink = styled.div`
    padding: 10px;
  `;

  return {
    LogoComponent,
    NavComponent,
    DivLink,
  };
}
