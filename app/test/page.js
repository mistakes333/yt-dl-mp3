// test/page.js

import { useRef, useState } from "react";
import { youtube_parser } from "@mt333/utils";
import './../globals.css';

export default function Home() {
  const inputUrlRef = useRef();
  const [urlResult, setUrlResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const youtubeID = youtube_parser(inputUrlRef.current.value);

    try {
      const response = await fetch("/api/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ youtubeID }),
      });

      if (response.ok) {
        const data = await response.json();
        setUrlResult(data.link);
      } else {
        console.error("Failed to fetch");
      }
    } catch (err) {
      console.error(err);
    }

    inputUrlRef.current.value = "";
  };

  return (
    <div className="app">
      <section className="content">
        {/* ... your existing JSX */}
      </section>
    </div>
  );
          }
        
