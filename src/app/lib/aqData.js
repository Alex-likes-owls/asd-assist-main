let aqData = [
  {
    id: 0,
    question: "I often notice small sounds when others do not.",
    choices: [
      {
        answer: "Definitely agree",
        score: 1,
      },
      {
        answer: "Slightly agree",
        score: 1,
      },
      {
        answer: "Slightly disagree",
        score: 0,
      },
      {
        answer: "Definitely disagree",
        score: 0,
      },
    ],
  },
  {
    id: 1,
    question:
      "When I’m reading a story, I find it difficult to work out the characters’ intentions.",
    choices: [
      {
        answer: "Definitely agree",
        score: 1,
      },
      {
        answer: "Slightly agree",
        score: 1,
      },
      {
        answer: "Slightly disagree",
        score: 0,
      },
      {
        answer: "Definitely disagree",
        score: 0,
      },
    ],
  },
  {
    id: 2,
    question:
      " I find it easy to 'read between the lines' when someone is talking to me.",
    choices: [
      {
        answer: "Definitely agree",
        score: 0,
      },
      {
        answer: "Slightly agree",
        score: 0,
      },
      {
        answer: "Slightly disagree",
        score: 1,
      },
      {
        answer: "Definitely disagree",
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question:
      "I usually concentrate more on the whole picture, rather than the small details.",
    choices: [
      {
        answer: "Definitely agree",
        score: 0,
      },
      {
        answer: "Slightly agree",
        score: 0,
      },
      {
        answer: "Slightly disagree",
        score: 1,
      },
      {
        answer: "Definitely disagree",
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: "I know how to tell if someone listening to me is getting bored.",
    choices: [
      {
        answer: "Definitely agree",
        score: 0,
      },
      {
        answer: "Slightly agree",
        score: 0,
      },
      {
        answer: "Slightly disagree",
        score: 1,
      },
      {
        answer: "Definitely disagree",
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: "I find it easy to do more than one thing at once.",
    choices: [
      {
        answer: "Definitely agree",
        score: 0,
      },
      {
        answer: "Slightly agree",
        score: 0,
      },
      {
        answer: "Slightly disagree",
        score: 1,
      },
      {
        answer: "Definitely disagree",
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question:
      "I find it easy to work out what someone is thinking or feeling just by looking at their face.",
    choices: [
      {
        answer: "Definitely agree",
        score: 0,
      },
      {
        answer: "Slightly agree",
        score: 0,
      },
      {
        answer: "Slightly disagree",
        score: 1,
      },
      {
        answer: "Definitely disagree",
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question:
      "If there is an interruption, I can switch back to what I was doing very quickly.",
    choices: [
      {
        answer: "Definitely agree",
        score: 0,
      },
      {
        answer: "Slightly agree",
        score: 0,
      },
      {
        answer: "Slightly disagree",
        score: 1,
      },
      {
        answer: "Definitely disagree",
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: "I like to collect information about categories of things.",
    choices: [
      {
        answer: "Definitely agree",
        score: 1,
      },
      {
        answer: "Slightly agree",
        score: 1,
      },
      {
        answer: "Slightly disagree",
        score: 0,
      },
      {
        answer: "Definitely disagree",
        score: 0,
      },
    ],
  },
  {
    id: 9,
    question: "I find it difficult to work out people’s intentions.",
    choices: [
      {
        answer: "Definitely agree",
        score: 1,
      },
      {
        answer: "Slightly agree",
        score: 1,
      },
      {
        answer: "Slightly disagree",
        score: 0,
      },
      {
        answer: "Definitely disagree",
        score: 0,
      },
    ],
  },
];
let mongaqData = [
  {
    id: 0,
    question: "Бусдын анзаардаггүй дуу чимээг би ихэвчлэн анзаардаг.",
    choices: [
      {
        answer: "Санал нийлж байна",
        score: 1,
      },
      {
        answer: "Бага зэрэг санал нийлж байна",
        score: 1,
      },
      {
        answer: "Бага зэрэг санал нийлэхгүй байна",
        score: 0,
      },
      {
        answer: "Санал нийлэхгүй байна",
        score: 0,
      },
    ],
  },
  {
    id: 1,
    question: "Ном уншихад дүрүүдийн санаа бодлыг ойлгох хэцүү байдаг.",
    choices: [
      {
        answer: "Санал нийлж байна",
        score: 1,
      },
      {
        answer: "Бага зэрэг санал нийлж байна",
        score: 1,
      },
      {
        answer: "Бага зэрэг санал нийлэхгүй байна",
        score: 0,
      },
      {
        answer: "Санал нийлэхгүй байна",
        score: 0,
      },
    ],
  },
  {
    id: 2,
    question: " Бусдын хэлсэн үгсийн далд утгыг ойлгох амархан байдаг.",
    choices: [
      {
        answer: "Санал нийлж байна",
        score: 0,
      },
      {
        answer: "Бага зэрэг санал нийлж байна",
        score: 0,
      },
      {
        answer: "Бага зэрэг санал нийлэхгүй байна",
        score: 1,
      },
      {
        answer: "Санал нийлэхгүй байна",
        score: 1,
      },
    ],
  },
  {
    id: 3,
    question: "Би аливаа асуудлыг бүхэлд нь хардаг.",
    choices: [
      {
        answer: "Санал нийлж байна",
        score: 0,
      },
      {
        answer: "Бага зэрэг санал нийлж байна",
        score: 0,
      },
      {
        answer: "Бага зэрэг санал нийлэхгүй байна",
        score: 1,
      },
      {
        answer: "Санал нийлэхгүй байна",
        score: 1,
      },
    ],
  },
  {
    id: 4,
    question: "Надтай ярьж байгаа хүн уйдаж эхэлж байгааг би анзаарч чаддаг.",
    choices: [
      {
        answer: "Санал нийлж байна",
        score: 0,
      },
      {
        answer: "Бага зэрэг санал нийлж байна",
        score: 0,
      },
      {
        answer: "Бага зэрэг санал нийлэхгүй байна",
        score: 1,
      },
      {
        answer: "Санал нийлэхгүй байна",
        score: 1,
      },
    ],
  },
  {
    id: 5,
    question: "Нэгээс олон юм зэрэг хийх амархан.",
    choices: [
      {
        answer: "Санал нийлж байна",
        score: 0,
      },
      {
        answer: "Бага зэрэг санал нийлж байна",
        score: 0,
      },
      {
        answer: "Бага зэрэг санал нийлэхгүй байна",
        score: 1,
      },
      {
        answer: "Санал нийлэхгүй байна",
        score: 1,
      },
    ],
  },
  {
    id: 6,
    question:
      "Хэн нэгэн юу бодож, мэдэрч байгааг би царайнаас нь хараад мэдэж чаддаг.",
    choices: [
      {
        answer: "Санал нийлж байна",
        score: 0,
      },
      {
        answer: "Бага зэрэг санал нийлж байна",
        score: 0,
      },
      {
        answer: "Бага зэрэг санал нийлэхгүй байна",
        score: 1,
      },
      {
        answer: "Санал нийлэхгүй байна",
        score: 1,
      },
    ],
  },
  {
    id: 7,
    question:
      "Хэрэв саад гарвал би хийж байсан зүйлдээ маш хурдан эргэн шилжиж чадна.",
    choices: [
      {
        answer: "Санал нийлж байна",
        score: 0,
      },
      {
        answer: "Бага зэрэг санал нийлж байна",
        score: 0,
      },
      {
        answer: "Бага зэрэг санал нийлэхгүй байна",
        score: 1,
      },
      {
        answer: "Санал нийлэхгүй байна",
        score: 1,
      },
    ],
  },
  {
    id: 8,
    question: "Би олон төрлийн зүйлсийн тухай мэдээлэл цуглуулах дуртай.",
    choices: [
      {
        answer: "Санал нийлж байна",
        score: 1,
      },
      {
        answer: "Бага зэрэг санал нийлж байна",
        score: 1,
      },
      {
        answer: "Бага зэрэг санал нийлэхгүй байна",
        score: 0,
      },
      {
        answer: "Санал нийлэхгүй байна",
        score: 0,
      },
    ],
  },
  {
    id: 9,
    question: "Би бусдын бодол, саналыг ойлгоход хэцүү байдаг.",
    choices: [
      {
        answer: "Санал нийлж байна",
        score: 1,
      },
      {
        answer: "Бага зэрэг санал нийлж байна",
        score: 1,
      },
      {
        answer: "Бага зэрэг санал нийлэхгүй байна",
        score: 0,
      },
      {
        answer: "Санал нийлэхгүй байна",
        score: 0,
      },
    ],
  },
];
export default aqData;
export { mongaqData };
