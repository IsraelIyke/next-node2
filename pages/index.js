import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [words, setWords] = useState(null);
  const [website, setWebsite] = useState("http://search1.epizy.com");
  const [keyword, setKeyword] = useState("hello");
  useEffect(() => {
    const options = {
      method: "GET",
      url: "http://localhost:3001/results",
      params: { website: website, keyword: keyword },
    };

    axios
      .request(options)
      .then((response) => {
        console.log(response.data);
        setWords(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return <div>{words}</div>;
}
