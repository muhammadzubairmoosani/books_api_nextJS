import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      throw new Error("Invalid request method. Only GET requests are allowed.");
    }

    const headers = {
      Accept: "applicaiton/json",
      "Content-Type": "application/json",
      "x-api-key": process.env.NEXT_APP_API_KEY || "",
    };
    const jsonResponse = await fetch(
      "https://books-list-api.vercel.app/books",
      { headers }
    );

    const books = await jsonResponse.json();
    res.status(200).json(books);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
}
