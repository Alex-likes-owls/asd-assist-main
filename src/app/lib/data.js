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
    title: "Dyspraxia",
    imageSrc: "/Dyspraxia.gif",
    imageId:
      "(Usagi from Sailor Moon, a character highly thought to have dyspraxia)",
    description:
      "Dyspraxia often overlaps with ASD, as many autistic individuals have 'bad' motor skills, and are more clumsy in general. This does not mean the person is in any way 'dumb', as it only affects physical movement.",
  },
  {
    id: 5,
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
let pagesData = [
  {
    title: "About",
    description:
      "In Mongolia, with mental health still not being given enough attention, misinformation runs rampant. Inspired by 'embrace-autism', and determined to reduce the stigma in the disorder, I took extra care to get my facts straight and have the necessary tools for spreading awareness.",
    arr: inventoryData,
  },
  {
    title: "Articles",
    description:
      " Have you wanted to learn more about ASD? Perhaps a close friend or family has been diagnosed with ASD and you'd like to help them as best as you can? Or maybe it's just for fun, in any case, please enjoy yourself in the articles written here!",
    arr: cardData,
  },
  {
    title: "Tests",
    description:
      "Have you ever thought you might have Autism Spectrum disorder(ASD)? If so, why not take a quick test to check? Disclaimer, this is not at all an official diagnosis, simply a tool to put you in the right direction. If you finish the ASD quotients, please try out the ADHD test, as AuDHD is more common than you'd think.",
    arr: testData,
  },
];

export default pagesData;
export { mongpagesData };

let mongcardData = [
  {
    id: 0,
    title: "Худал мэдээллүүд",
    imageSrc: "/Dontron.jpg",
    imageId: "(ROTTMNT-ийн Донателло, батлагдсан аутизмтай дүр)",
    description:
      "Аутизмтай холбоотой олон ташаа ойлголтууд байдаг. Үүнд вакцинуудаас болж аутизм үүсдэг гэх мэт, эсвэл аутизмтай хүмүүс социопат байдаг гэсэн ташаа ойлголт орно. Энд би хамгийн түгээмэл стереотипуудаас заримыг нь худал болохыг тодруулна.",
  },
  {
    id: 1,
    title: "Гиперфокус",
    imageSrc: "/Sonic-Logo.png",
    imageId: "(Соник, олон аутизмтай сонирхогчидтойгоороо алдартай)",
    description:
      "Гиперфокус нь нэг шоу, кино зэрэгт хэдэн сар донтох гэсэн утгатай бол энэ нь зөвхөн аутизмын шинж тэмдэг үү эсвэл хүн бүхэн ийм байдаг уу? Сошиал медиа үгийг түгээмэл хэрэглэж, утгыг нь алдуулсан тул хэлэхэд хэцүү байдаг.",
  },
  {
    id: 2,
    title: "Өвөрмөц үйлдэл",
    imageSrc: "/stimming.gif",
    imageId: "(Dungeon Meshi-ээс Лайос тулааны өмнө өвөрмөц үйлдэл хийх)",
    description:
      "Гар, хөлөө савах эсвэл сонин дуу гаргахыг stimming гэдэг ба энэ нь олон янз байдлаар илэрч болдог. Аутизмтай хүмүүс энэхүү үйлдлүүдыг олон давтан хийдэг боловч энгийн хүн ч бас адил үйлдэл хийдгээрээ stimming их сонирхолтой!",
  },
  {
    id: 3,
    title: "Алекситимиа",
    imageSrc: "/Alexithymia.jpg",
    imageId: "(Сэтгэл хөдлөлийг танихгүй байх)",
    description:
      "Алекситимиа гэдэг нь хүн өөрийнхөө мэдрэмжийг тодорхойлох, эсвэл сэтгэл хөдлөл мэдрэхэд хүндрэлтэй байхыг хэлдэг. Гэвч Алекситимиатай байх нь аутизмтай байхыг баталж чадахгүй, гэхдээ та өөрийгөө энэ тодорхойлолттой адил гэж бодож байвал нийтлэлийг уншиж үзээрэй.",
  },
  {
    id: 4,
    title: "Диспраксиа",
    imageSrc: "/Dyspraxia.gif",
    imageId:
      "(Sailor Moon-ийн Усаги болох диспраксиатай гэж олон хүн боддог дүр)",
    description:
      "Диспраксиа нь олон аутизмтай хүний хувьд давхар тохиолддог бөгөөд эдгээр хүмүүс 'муу' хөдөлгөөний ур чадвартай байдаг ба ерөнхийдөө илүү болхи байдаг. Энэ нь тухайн хүнийг 'тэнэг' гэсэн үг биш, учир нь энэ нь зөвхөн биеийн хөдөлгөөнд л нөлөөлдөг.",
  },
  {
    id: 5,
    title: "Текстур ба Аутизм",
    imageSrc: "/Texture.gif",
    imageId: "(The Disastrous Life of Saiki K-ийн Саики Кусүо)",
    description:
      "Та магадгүй аутизмтай хүмүүс зөвхөн энгийн хоол иддэг гэсэн стереотипийг мэдэж байгаа байх. Гэвч та энэ нь хоолны текстуртэй холбоотой ба аутизмтай хүмүүс заримдаа текстураас шалтгаалан танд 'сонин' байх хоол иддэг гэдгийг мэдэх үү?",
  },
];
let mongtestData = [
  {
    id: 0,
    imageSrc: "/tbh (2).png",
    imageId:
      "(Twitter хэрэглэгч @acmeiku бүтээсэн, 'tbh creature' нь онлайнд аутизмтай холбоотой байдлаар хэрэглэгддэг)",
    title: "AQ",
    description:
      "The Autism Spectrum Quotient (AQ) нь хувь хүн хэдэн аутизмын шинж тэмдэгтэй болохыг хэмжих зорилготой 50 асуулттай тест юм.",
  },
  {
    id: 1,
    imageSrc: "/btw.png",
    imageId:
      "(@dragon_catz Twitter дээр 'btw creature' -ийг ADHD-тэй хүмүүст зориулсан бэлгэдэл болгон бүтээсэн)",
    title: "ASRS-v1.1",
    description:
      "Насанд хүрэгчдийн ADHD Өөрийгөө Тодорхойлох Үнэлгээ (ASRS v1.1) нь Анхаарал Дутмагших, Хэт Хөдөлгөөнтөх эмгэг (ADHD)-ын шинж тэмдгийг хэмжих зорилготой 18 асуулттай асуулга юм.",
  },
  {
    id: 2,
    imageSrc: "/TAS.webp",
    imageId: "(Өөрийгөө тодорхойлох асуулга)",
    title: "TAS",
    description:
      "Торонто Алекситимиа Скала (TAS) нь хувь хүн хэдэн Алекситимиа шинж тэмдэгтэй болохыг хэмжих зорилготой 20 асуулттай тест юм.",
  },
];
let monginventoryData = [
  {
    id: 0,
    title: "Мэдээлэл",
    description:
      "Вэбсайтад би аутизмтай холбоотой олон нийтлэл оруулсан бөгөөд энэ нь уг өвчнийг сонирхож буй хүмүүст мэдээлэл олгох зорилготой. Хоёр аутизмтай хүн яг адилхан шинж тэмдгүүдийг үзүүлдэггүй боловч аутизмын шинж тэмдгүүдийн талаар мэдэх нь үргэлж чухал байдаг.",
  },
  {
    id: 1,
    title: "Асуулга",
    description:
      "Аутизм, ADHD, болон Алекситимиагийн шинж тэмдгүүдийг хэр их үзүүлж байгаагаа тооцох сонирхолтой хүмүүст зориулсан хэд хэдэн асуулга бий. Эдгээр нь албан ёсны оношлогоо биш бөгөөд мэргэжлийн хүнтэй холбоо барих шаардлагатай эсэхийг шийдэхэд зориулсан хэрэгсэл юм.",
  },
];
let mongpagesData = [
  {
    title: "Тухай",
    description:
      "Монголд сэтгэл зүйн эрүүл мэндийг хангалттай анхаардаггүй учраас ташаа мэдээлэл өргөн тархаж байна. 'embrace-autism' хөтөлбөрөөс санаа авч, уг өвчний тухай буруу ойлголтыг багасгах зорилгоор би бусдад зөв мэдээлэл түгээх хэрэгслүүдийг бүрдүүлэхэд анхаарал тавьсан.",
    arr: monginventoryData,
  },
  {
    title: "Нийтлэлүүд",
    description:
      "Та ASD-ийн талаар илүү ихийг сурахыг хүссэн үү? Магадгүй ойр дотны найз эсвэл гэр бүлд тань ASD оношлогдсон бөгөөд тэдэнд туслахыг хүсч байна уу? Магадгүй энэ нь танд зөвхөн хөгжилтэй зүйл байж болох юм, ямар ч гэсэн энд бичигдсэн нийтлэлүүдийг уншиж үзээрэй!",
    arr: mongcardData,
  },
  {
    title: "Шалгалтууд",
    description:
      "Та өөртийгөө Аутизмтай байх магадлалтай гэж бодож байсан уу? Хэрвээ тийм бол, энд бичигдсэн тестүүдийг туршиж үзнэ үү? Энэ нь албан ёсны оношлогоо биш, зөвхөн танд зөв чиглэлд хүргэх хэрэгсэл юм. Хэрвээ та ASD-ын тестийг хийсэн бол, ADHD-ийн тестийг туршаарай, учир нь энэ хоёр таны бодсоноос илүү түгээмэл хамт илэрдэг.",
    arr: mongtestData,
  },
];
