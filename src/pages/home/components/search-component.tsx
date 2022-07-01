import { InputLabel, FormControl, Select, Grid, Button } from "@mui/material";
import AssistantDirectionIcon from "@mui/icons-material/AssistantDirection";
import styled from "@emotion/styled";
import Image from "next/image";

import { useState } from "react";

import * as Images from "./images";

interface SearchProps {
  onCityChanged: (city: string) => void;
}

export default function Component({ onCityChanged }: SearchProps) {
  const [city, onCityChanging] = useState("");

  const handleOnChange = (ev: any) => onCityChanging(ev.target.value);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} xl={6}>
        <DivContainer>
          <DivTitle>Co-create the future of your city!</DivTitle>
          <DivSubtitle>
            Join us in the effort to empower actions towards sustainable
            environmental development. Get informed and participate in
            gathering, analysis and visualization of environmental data to
            contribute for a better tomorrow.
          </DivSubtitle>
          <FormControlExtended>
            <InputLabel htmlFor="grouped-native-select">Select city</InputLabel>
            <Select
              native
              defaultValue={city}
              id="grouped-native-select"
              label="Select a city"
              onChange={handleOnChange}
            >
              <option aria-label="None" value="Select a city" />
              {getCountries().map((country, i) => (
                <optgroup key={country.name} label={country.name}>
                  {country.cities.map((city, j) => (
                    <option key={city.name} value={city.name}>
                      {city.name}
                    </option>
                  ))}
                </optgroup>
              ))}
            </Select>
          </FormControlExtended>
          <div>&nbsp;</div>
          <Button
            variant="contained"
            endIcon={<AssistantDirectionIcon />}
            disabled={city === ""}
            onClick={() => onCityChanged(city)}
          >
            View map
          </Button>
        </DivContainer>
      </Grid>
      <Grid item xs={12} xl={6}>
        <DivContainer2>
          <Image src={Images.GraphicHeaderImage} alt="" />
          <div>&nbsp;</div>
        </DivContainer2>
      </Grid>
    </Grid>
  );
}

function getCountries() {
  return [
    {
      name: "Germany",
      cities: [{ name: "Berlin" }],
    },
    {
      name: "Macedonia",
      cities: [{ name: "Bitola" }, { name: "Skopje" }, { name: "Tetovo" }],
    },
    {
      name: "Romania",
      cities: [
        { name: "Bucharest" },
        { name: "Brasov" },
        { name: "Cluj-Napoca" },
        { name: "Iasi" },
        { name: "Oradea" },
        { name: "TarguMures" },
      ],
    },
  ];
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

const DivTitle = styled.div`
  padding: 30px;
  font-size: x-large;
`;

const DivSubtitle = styled.div`
  padding: 40px;
  font-size: larger;
  text-align: center;
`;

const FormControlExtended = styled(FormControl)`
  min-width: 50%;
`;

const DateInput = styled.input`
  padding: 10px;
  margin: 5px;
  /* border-radius: 1px; */
`;
