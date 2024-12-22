import { HeaderTecsany } from "@/components/header";
import { HomeSection } from "@/components/home";
import { InfoPatinSection } from "@/components/infopatins";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <HeaderTecsany/>
      <HomeSection/>
      <InfoPatinSection/>
    </>
  );
}
