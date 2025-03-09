import aqData from "../lib/testData";

export default function AQ() {
  return (
    <>
      <p>The AQ-10</p>
      <div>
        {aqData.map((val, ind) => {
          return (
            <div key={ind}>
              <p>{val.question}</p>
              {val.choices.map((v, i) => {
                return <p key={i}>{v.answer}</p>;
              })}
            </div>
          );
        })}
      </div>
    </>
  );
}
