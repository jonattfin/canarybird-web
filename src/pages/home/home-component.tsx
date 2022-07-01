import styled from "@emotion/styled";
import { Grid } from "@mui/material";

import * as Components from "./components";

const DivFooter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export interface HomeProps {
  onCityChanged: (city: string) => void;
}

export default function Component({ onCityChanged }: HomeProps) {
  return (
    <Grid container spacing={1}>
      <Grid item xl={3} />
      <Grid item xl={6}>
        <Components.HeaderComponent />
      </Grid>
      <Grid item xl={3} />

      <Grid item xl={3} />
      <Grid item xl={6}>
        <Components.SearchComponent {...{ onCityChanged }} />
      </Grid>
      <Grid item xl={3} />

      <Grid item xl={3} />
      <Grid item xl={6}>
        <Components.InfoComponent />
      </Grid>
      <Grid item xl={3} />

      <Grid item xl={3} />
      <Grid item xs={12} xl={6}>
        <DivFooter>
          <div>Feel the pulse of your city!</div>
          <div>© 2021 pulse.eco. All rights reserved.</div>
        </DivFooter>
      </Grid>
      <Grid item xl={3} />
      <div>&nbsp;</div>
    </Grid>
  );
}
