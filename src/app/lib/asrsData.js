let asrsData = [
  {
    id: 0,
    question:
      "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
    choices: [
      {
        answer: "Never",
        score: 0,
      },
      {
        answer: "Rarely",
        score: 1,
      },
      {
        answer: "Sometimes",
        score: 2,
      },
      {
        answer: "Often",
        score: 3,
      },
      {
        answer: "Very Often",
        score: 4,
      },
    ],
  },
  {
    id: 1,
    question:
      "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
    choices: [
      {
        answer: "Never",
        score: 0,
      },
      {
        answer: "Rarely",
        score: 1,
      },
      {
        answer: "Sometimes",
        score: 2,
      },
      {
        answer: "Often",
        score: 3,
      },
      {
        answer: "Very Often",
        score: 4,
      },
    ],
  },
  {
    id: 2,
    question:
      "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
    choices: [
      {
        answer: "Never",
        score: 0,
      },
      {
        answer: "Rarely",
        score: 1,
      },
      {
        answer: "Sometimes",
        score: 2,
      },
      {
        answer: "Often",
        score: 3,
      },
      {
        answer: "Very Often",
        score: 4,
      },
    ],
  },
  {
    id: 3,
    question:
      "When you're in a conversation, how often do you find yourself finishing the sentences of the people you are talking to before they can finish them themselves?",
    choices: [
      {
        answer: "Never",
        score: 0,
      },
      {
        answer: "Rarely",
        score: 1,
      },
      {
        answer: "Sometimes",
        score: 2,
      },
      {
        answer: "Often",
        score: 3,
      },
      {
        answer: "Very Often",
        score: 4,
      },
    ],
  },
  {
    id: 4,
    question: "How often do you put things off until the last minute?",
    choices: [
      {
        answer: "Never",
        score: 0,
      },
      {
        answer: "Rarely",
        score: 1,
      },
      {
        answer: "Sometimes",
        score: 2,
      },
      {
        answer: "Often",
        score: 3,
      },
      {
        answer: "Very Often",
        score: 4,
      },
    ],
  },
  {
    id: 5,
    question:
      "How often do you depend on others to keep your life in order and attend to details?",
    choices: [
      {
        answer: "Never",
        score: 0,
      },
      {
        answer: "Rarely",
        score: 1,
      },
      {
        answer: "Sometimes",
        score: 2,
      },
      {
        answer: "Often",
        score: 3,
      },
      {
        answer: "Very Often",
        score: 4,
      },
    ],
  },
];
let mongasrsData = [
  {
    id: 0,
    question:
      "Хүнтэй ярихад хэлж байгаа зүйлсэд нь төвлөрөх танд хэцүү байдаг уу?",
    choices: [
      {
        answer: "Үгүй",
        score: 0,
      },
      {
        answer: "Бараг л үгүй",
        score: 1,
      },
      {
        answer: "Заримдаа",
        score: 2,
      },
      {
        answer: "Ихэвчлэн",
        score: 3,
      },
      {
        answer: "Үргэлж",
        score: 4,
      },
    ],
  },
  {
    id: 1,
    question: "Та хурал, хичээлийн цагаар суух ёстой байтал босч хөдөлдөг үү?",
    choices: [
      {
        answer: "Үгүй",
        score: 0,
      },
      {
        answer: "Бараг л үгүй",
        score: 1,
      },
      {
        answer: "Заримдаа",
        score: 2,
      },
      {
        answer: "Ихэвчлэн",
        score: 3,
      },
      {
        answer: "Үргэлж",
        score: 4,
      },
    ],
  },
  {
    id: 2,
    question:
      "Чөлөөт цаг гарахад та ихэвчлэн сандарч, тайван амарч чаддагүй уу?",
    choices: [
      {
        answer: "Үгүй",
        score: 0,
      },
      {
        answer: "Бараг л үгүй",
        score: 1,
      },
      {
        answer: "Заримдаа",
        score: 2,
      },
      {
        answer: "Ихэвчлэн",
        score: 3,
      },
      {
        answer: "Үргэлж",
        score: 4,
      },
    ],
  },
  {
    id: 3,
    question:
      "Та харилцан ярьж байгаа хүнийхээ хэлэх гэж байгаа үгсийг ихэвчлэн хэлж дуусгахаас өмнө та хэлдэг үү?",
    choices: [
      {
        answer: "Үгүй",
        score: 0,
      },
      {
        answer: "Бараг л үгүй",
        score: 1,
      },
      {
        answer: "Заримдаа",
        score: 2,
      },
      {
        answer: "Ихэвчлэн",
        score: 3,
      },
      {
        answer: "Үргэлж",
        score: 4,
      },
    ],
  },
  {
    id: 4,
    question: "Та ихэвчлэн зүйлсийг сүүлчийн минутад хийдэг үү?",
    choices: [
      {
        answer: "Үгүй",
        score: 0,
      },
      {
        answer: "Бараг л үгүй",
        score: 1,
      },
      {
        answer: "Заримдаа",
        score: 2,
      },
      {
        answer: "Ихэвчлэн",
        score: 3,
      },
      {
        answer: "Үргэлж",
        score: 4,
      },
    ],
  },
  {
    id: 5,
    question:
      "Та амьдралаа эмх цэгцтэй байлгахын тулд ихэвчлэн бусад хүмүүс нарийн ширийн зүйлсийг харч танд тусална гэж найддаг уу?",
    choices: [
      {
        answer: "Үгүй",
        score: 0,
      },
      {
        answer: "Бараг л үгүй",
        score: 1,
      },
      {
        answer: "Заримдаа",
        score: 2,
      },
      {
        answer: "Ихэвчлэн",
        score: 3,
      },
      {
        answer: "Үргэлж",
        score: 4,
      },
    ],
  },
];
export default asrsData;
export { mongasrsData };
