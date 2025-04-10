"use client";

import { useState, useEffect } from "react";
import axios from "axios";

const RecordTable = () => {
  const [records, setRecords] = useState(null);

  useEffect(() => {
    axios.get("/api/testRecord").then((res) => {
      if (res.status === 200) {
        setRecords(res.data.data);
      }
    });
  }, []);

  if (!records) {
    return (
      <div className="w-1/2 flex items-center justify-center">
        <p>Loading ...</p>
      </div>
    );
  }

  const mapTestName = (name) => {
    switch (name) {
      case "asrsTest":
        return "ASRS Test";
      case "aqTest":
        return "AQ Test";
      case "tasTest":
        return "TAS Test";
      default:
        return "Autism test";
    }
  };

  return (
    <div className="md:w-1/2 w-2/3 justify-self-center flex justify-center items-center">
      {records.length === 0 ? (
        <div className="flex items-center justify-center">
          <p>No data to display</p>
        </div>
      ) : (
        <div className="w-full flex flex-col max-h-[270px] overflow-y-auto">
          <div className="w-full flex justify-between mb-4 font-semibold">
            <p className="w-3/5">Time</p>
            <p className="w-1/5 ">Test</p>
            <p className="w-1/5 text-right">Score</p>
          </div>
          {records.map((val, ind) => {
            return (
              <div key={ind} className="flex justify-between w-full mb-4">
                <p className="w-3/5">
                  {new Date(parseInt(val.ts)).toLocaleString()}
                </p>
                <p className="w-1/5">{mapTestName(val.testName)}</p>
                <p className="w-1/5 text-right">{val.score}</p>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default RecordTable;
