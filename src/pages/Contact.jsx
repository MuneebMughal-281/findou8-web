import { Header } from "@src/pages/components/Header";

const title = "Contact Page";
const discription = "Lorem ipsum dolor sit amet.";

export const Contact = () => {
  return (
    <div>
      <Header title={title} discription={discription}/>
    </div>
  );
}