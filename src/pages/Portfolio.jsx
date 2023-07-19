import { Header } from "@src/pages/components/Header";

const title = "Portfolio Page";
const discription = "Lorem ipsum dolor sit amet.";

export const Portfolio = () => {
  return (
    <div>
      <Header title={title} discription={discription}/>
    </div>
  );
}