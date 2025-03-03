import { Card } from "./components/Card";
import { Inventory } from "./components/Inventory";
import { Tests } from "./components/Tests";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  let cardData = [
    {
      id: 0,
      title: "Myths Debunked",
      imageSrc: "/Dontron.jpg",
      imageId: "(Donatello, a confirmed autistic character, from ROTTMNT)",
      description:
        "There are many misconceptions about ASD, whether it be that the disorder is caused by vacciness or that those who have ASD are sociopaths. Here, I'll debunk some of the most common stereotypes and myths.",
    },
    {
      id: 1,
      title: "Hyperfixations",
      imageSrc: "/Sonic-Logo.png",
      imageId:
        "(Sonic, a franchise known for its overwhelmingly large amount of autistic fans)",
      description:
        "Are hyperfixations simply a fancy name for obsessions, and are they exclusively an ASD thing? With social media popularizing the word, it's hard to tell. However, would you believe me if I said it's neither?",
    },
    {
      id: 2,
      title: "Stimming",
      imageSrc: "/stimming.gif",
      imageId: "(Laios from Dungeon Meshi stimming before fighting)",
      description:
        "Some believe stimming to only be hand-flapping or leg boucing, but in reality, stimming can come in many different forms. There's even different types of stimming, and neurotypical people stim too!",
    },
    {
      id: 3,
      title: "Alexithymia",
      imageSrc: "/Alexithymia.jpg",
      imageId: "(Emotional blindness)",
      description:
        "Alexithymia is when a person struggles with identifying and experiencing emotions. However having Alexithymia does not guarentee ASD, but check out the article if you relate to the description. ",
    },
    {
      id: 4,
      title: "Meltdowns & Shutdowns",
      imageSrc: "/Meltdowns.jpg",
      imageId: "(Can be a common occurrence from those  with ASD)",
      description:
        "Due to difficulty in regulating emotions, autistic individuals may have a 'meltdown' or, often immediately after, a 'shutdown.' There are ways you can identify and help them, luckily, and I'll list them here.",
    },
    {
      id: 5,
      title: "Dyspraxia",
      imageSrc: "/Dyspraxia.gif",
      imageId:
        "(Usagi from Sailor Moon, a character highly thought to have dyspraxia)",
      description:
        "Dyspraxia often overlaps with ASD, as many autistic individuals have 'bad' motor skills, and are more clumsy in general. This does not mean the person is in any way 'dumb', as it only affects physical movement.",
    },
    {
      id: 6,
      title: "Textures & ASD",
      imageSrc: "/Texture.gif",
      imageId: "(Saiki Kusuo from The Disastrous Life of Saiki K)",
      description:
        "Chances are you already know about the autsitic stereotype that those with ASD only eat simple foods, adn are picky. But, did you know that this is caused by issues with texture, or that those with ASD sometimes like 'werird' foods because of it?",
    },
  ];
  let testData = [
    {
      id: 0,
      imageSrc: "/tbh (2).png",
      imageId:
        "(Created by Twitter user @acmeiku, the 'tbh creature' is jokingly used as a symbol of ASD online)",
      title: "AQ",
      description:
        "The Autism Spectrum Quotient (AQ) is a 50-item questionnare designed to measure how many autistic traits an individual shows.",
    },
    {
      id: 1,
      imageSrc: "/btw.png",
      imageId:
        "(@dragon_catz on Twitter created the 'btw creature' as a symbol for those with ADHD)",
      title: "ASRS-v1.1",
      description:
        "The Adult ADHD Self-Report Scale (ASRS v1.1) is an 18-item questionnaire designed to measure Attention Deficit Hyperactivity Disorder (ADHD) traits.",
    },
    {
      id: 2,
      imageSrc: "/TAS.webp",
      imageId: "(A self-report questionnare)",
      title: "TAS",
      description:
        "The Toronto Alexithymia Scale(TAS) is a 20-item questionnaire designed to measure how many Alexithymia traits an individual shows.",
    },
  ];
  let inventoryData = [
    {
      id: 0,
      title: "Education",
      description:
        "Within the website, I included multiple articles about ASD in hopes of educating those who are curios about the disorder. As autism is a spectrum, two autsitic people will never have the exact same level of symptoms, but it's always important to know about these symptoms.",
    },
    {
      id: 1,
      title: "Questionnares",
      description:
        "There are a few questionnares to take for those interested in calculating how many traits they exhibit of ASD, ADHD, and Alexithymia. These are not official diagnoses, and are simply tools for people to use to decide on whether or not to contact a professional for an evaluation.",
    },
  ];
  return (
    <div className="bg-sky-700 ">
      <div
        id="Home"
        className="h-screen flex flex-col justify-center items-center text-white"
      >
        <div className="bg-sky-900 w-full flex justify-center fixed top-0 z-10">
          <Link className="m-4 text-lg" href={"#Home"}>
            Home
          </Link>
          <Link className="m-4 text-lg" href={"#About"}>
            About
          </Link>
          <Link className="m-4 text-lg" href={"#Articles"}>
            Articles
          </Link>
          <Link className="m-4 text-lg" href={"#Tests"}>
            Tests
          </Link>
        </div>
        <div className="flex justify-around items-center m-24">
          <div className="flex-col w-1/2">
            <p className="text-5xl font-bold">ASD-Assist</p>
            <p className="text-xl mt-7 w-11/12">
              A website designed to debunk false stereotypes and spread
              awareness of Autistic Spectrum Disorder(ASD). Take some
              self-assessments, read some fun articles, and simply enjoy
              yourself.
            </p>
          </div>
          <Image
            className="rounded-lg motion-safe:animate-[bounce_2s_ease-out_infinite] mt-14"
            src="/Sonic-Logo.gif"
            width={450}
            height={450}
            alt="sonk"
          />
        </div>
      </div>
      <div className="bg-sky-50 text-sky-950" id="About">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold mt-16">About</p>
          <p className="w-5/12 m-5 text-center">
            In Mongolia, with mental health still not being given enough
            attention, misinformation runs rampant. Inspired by
            "embrace-autism", and determined to reduce the stigma in the
            disorder, I took extra care to get my facts straight and have the
            necessary tools for spreading awareness.
          </p>
          <div className="flex justify-around" key={"Inventory"}>
            {inventoryData.map((d, h) => (
              <Inventory data={d} key={h} />
            ))}
          </div>
        </div>
      </div>
      <div id="Articles" className="bg-white text-sky-950">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold mt-16">Articles</p>
          <p className="w-5/12 m-5 text-center">
            Have you wanted to learn more about ASD? Perhaps a close friend or
            family has been diagnosed with ASD and you'd like to help them as
            best as you can? Or maybe it's just for fun, in any case, please
            enjoy yourself in the articles written here!
          </p>
        </div>
        <div className="flex flex-wrap justify-around " key={"Card"}>
          {cardData.map((e, i) => (
            <Card data={e} key={i} />
          ))}
        </div>
      </div>
      <div id="Tests" className="bg-sky-50 text-sky-950">
        <div className="flex flex-col items-center">
          <p className="text-4xl font-bold mt-16">Tests</p>
          <p className="w-5/12 m-5 text-center">
            Have you ever thought you might have Autism Spectrum disorder(ASD)?
            If so, why not take a quick test to check? Disclaimer, this is not
            at all an official diagnosis, simply a tool to put you in the right
            direction. If you finish the ASD quotients, please try out the ADHD
            test, as AuDHD is more common than you'd think.
          </p>
          <div className="flex flex-wrap justify-around " key={"Tests"}>
            {testData.map((f, j) => (
              <Tests data={f} key={j} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
