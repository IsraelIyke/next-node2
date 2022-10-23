import { useEffect, useState } from "react";

export default function Home() {
  const [val, setVal] = useState("https://www.theguardian.com/uk");
  const [valu, setValu] = useState();
  useEffect(() => {
    postInfo();
  }, []);
  async function postInfo() {
    if (val == "") {
      return;
    }
    const res = await fetch("http://localhost:8000", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        parcel: val,
      }),
    });

    fetch("http://localhost:8000/results")
      .then((response) => {
        return response.json();
      })
      .then((data) => setValu(data)
      .catch((err) => console.log(err));
  }

  return <>{valu}</>;
}
