import { Header } from "@src/pages/components/Header";

const title = "About Page";
const discription = "Lorem ipsum dolor sit amet.";

export const About = () => {
  return (
    <div>
      <Header title={title} discription={discription}/>
    </div>
  );
}