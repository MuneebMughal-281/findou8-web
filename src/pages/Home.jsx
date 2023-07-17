import { Card } from "@src/pages/components/Card";
import { Header } from "@src/pages/components/Header";
import Background from "../assets/images/banners/team.jpg"


const title = "360° Digital Solutions Under One Roof";
const discription = "We make good engineers. They, in turn, make good software.";
const button = "lets talk";
const path = "contact";
export const Home = () => {
  return (
    <div>
      <Header background={Background} title={title} discription={discription} button={button} path={path}/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  );
}