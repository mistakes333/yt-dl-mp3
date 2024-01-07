// api/convert.js

import axios from "axios";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { youtubeID } = req.body;

    const rapidApiKeys = [
      "0649dc83c2msh88ac949854b30c2p1f2fe8jsn871589450eb3",
      "84ee3485d6msh33016273685d45ap1177f5jsnf739c4da8f29",
      // Add more keys as needed
    ];

    let currentApiKeyIndex = 0;

    const getNextApiKey = () => {
      const apiKey = rapidApiKeys[currentApiKeyIndex];
      currentApiKeyIndex = (currentApiKeyIndex + 1) % rapidApiKeys.length;
      return apiKey;
    };

    const apiKey = getNextApiKey();
    const url = `https://youtube-mp36.p.rapidapi.com/dl?id=${youtubeID}`;

    try {
      const response = await axios.get(url, {
        headers: {
          "X-RapidAPI-Key": apiKey,
          "X-RapidAPI-Host": "youtube-mp36.p.rapidapi.com",
        },
      });

      res.status(200).json({ link: response.data.link });
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
