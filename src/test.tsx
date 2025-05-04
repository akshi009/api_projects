import { useEffect, useState } from "react";
import "./App.css";

function Test() {
  const [data, setData] = useState("");
  const [namein, setNmaein] = useState("");

  const getdata = async () => {
    try {
      const res = await fetch(
        "https://8e33-2405-201-5c11-7060-ecdb-2efa-970a-690b.ngrok-free.app/",
        {
          method: "GET",
          headers: {
            "ngrok-skip-browser-warning": "true",
            Authrization: "Token iloveyou",
          },
          redirect: "follow",
        }
      ).then((data) => data.json());

      setData(res.message);
    } catch (error) {
      console.log("Cant get the data ", error);
    }
  };

  const postdata = async () => {
    try {
      const res = await fetch(
        `https://8e33-2405-201-5c11-7060-ecdb-2efa-970a-690b.ngrok-free.app/?name=${namein}`,
        {
          // method:"POST",
          headers: {
            "ngrok-skip-browser-warning": "true",
            Authrization: "Token iloveyou",
          },
        }
      );

      const data = await res.json();
      setData(data.message);
    } catch (error) {
      console.log(error, "postdat:error");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <input
      value={namein}
        onChange={(e) => setNmaein(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter"){ postdata(); setNmaein('')}
        }}
        placeholder="enter your name"
      ></input>{" "}
      <button onClick={() => postdata()}>submit</button>
      <div style={{ margin: "40px", fontFamily: "fantasy", fontSize: "50px" }}>
        {data || "no data"}
      </div>
    </>
  );
}

export default Test;
