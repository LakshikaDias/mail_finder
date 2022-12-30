import React from "react";
import { useNavigate } from "react-router-dom";
import data from "./data";

function Home() {
  let navigate = useNavigate();

  return (
    <>
      {data.map((data) => {
        // console.log(data.id, "data");
        return (
          <div>
            <button
              onClick={() => {
                navigate(`/mail/${data.id}`);
              }}
            >
              {data.author}
            </button>
          </div>
        );
      })}
    </>
  );
}

export default Home;
