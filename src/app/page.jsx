import { Card } from "./components/Card";
import { Tests } from "./components/Tests";

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
        "Stimming is not only hand-flapping, it can come in many different forms. Read more to learn about the variety of stimming.",
    },
  ];
  let testData = [
    {
      id: 0,
      imageSrc: "/tbh.png",
      imageId:
        "(Created by Twitter user @acmeiku, the 'tbh creature' is jokingly used as a symbol of ASD online)",
      title: "RAADS-R",
      description:
        "A self-assesment tool for those who suspect they might have ASD.",
    },
  ];
  console.log(cardData);
  return (
    <div key={Card}>
      {cardData.map((e) => (
        <Card data={e} />
      ))}
      <div>
        {testData.map((f) => (
          <Tests data={f} />
        ))}
      </div>
    </div>
  );
}
