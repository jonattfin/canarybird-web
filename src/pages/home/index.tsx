import { useRouter } from "next/router";

import HomeComponent from "./home-component";

export default function Component() {
  const router = useRouter();
  const onCityChanged = (city: string) => {
    if (!city) return;

    router.push(`/details/${city}`);
  };

  return <HomeComponent {...{ onCityChanged }} />;
}
