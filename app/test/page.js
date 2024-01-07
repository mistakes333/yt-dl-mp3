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
        <h1 className="content_title">YouTube to MP3 Converter</h1>
        <p className="content_description">
          Transform YouTube videos into MP3s in just a few clicks!
        </p>
        <form onSubmit={handleSubmit} className="form">
          <input
            ref={inputUrlRef}
            placeholder="Paste a Youtube video URL link..."
            className="form_input"
            type="text"
          />
          <button type="submit" className="form_button">
            Search
          </button>
        </form>
        {urlResult ? (
          <a
            target="_blank"
            rel="noreferrer"
            href={urlResult}
            className="download_btn"
          >
            Download MP3
          </a>
        ) : (
          ""
        )}
      </section>
      </div>
 )
    }
