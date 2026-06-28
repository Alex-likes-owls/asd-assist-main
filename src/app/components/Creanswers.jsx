export function Creanswers() {
  let number = 1;
  return (
    <div className="flex items-center justify-evenly">
      <div className="md:flex-row flex-col flex items-center">
        <label className="text-lg font-semibold mr-3" htmlFor="title">
          Answer{number + 1}:
        </label>
        <input
          className="rounded-lg h-9 w-1/2 border border-sky-950"
          type="text"
          name="question"
          id="question"
        />
      </div>
      <div className="flex md:flex-row flex-col items-center">
        <label className="text-lg font-semibold mr-3" htmlFor="title">
          Value{number + 1}:
        </label>
        <input
          className="rounded-lg h-9 border w-1/2 border-sky-950"
          type="text"
          name="question"
          id="question"
        />
      </div>
    </div>
  );
}
