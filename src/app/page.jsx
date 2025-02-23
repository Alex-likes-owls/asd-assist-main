import { Card } from "./components/Card";
import { Tests } from "./Tests";

export default function Home() {
  let cardData = [
    {
      id: 0,
      title: "Myths Debunked",
      imageSrc: "/Dontron.jpg",
      imageId: "(Donatello, a confirmed autistic character, from ROTTMNT)",
      description:
        "There are many misconceptions about ASD, here's 10 of the most common ones.",
    },
    {
      id: 1,
      title: "Hyperfixations",
      imageSrc: "/Sonic-Logo.png",
      imageId:
        "(Sonic, a franchise known for its overwhelmingly large amount of autistic fans)",
      description:
        "Hyperfixations, a common occurence for neurodivergent folks, have a lot of misinformation surrounding it. Here's what the term actually entails.",
    },
    {
      id: 2,
      title: "Stimming",
      imageSrc: "/Fidget spinners.jpg",
      imageId:
        "(Fidget spinners are a type of stim toy autistic individual use for stimming)",
      description:
        "Stimming is not only hand-flapping, it can come in many different forms. Take a look at ",
    },
  ];
  console.log(cardData);
  return (
    <div className="flex flex-col">
      {cardData.map((e) => (
        <Card data={e} />
      ))}
      <div>
      <Tests/>
      </div>
    </div>
  );
}
