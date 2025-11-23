// app/api/entries/route.js
import dbConnect from "../../../lib/db.js";
import Entry from "../../../models/entry.js";

export async function GET() {
  try {
    // 1) Connect to the database
    await dbConnect();

    // 2) Get all entries from the collection
    const entries = await Entry.find({}).lean();

    // 3) Return them as JSON
    return new Response(JSON.stringify(entries), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching entries:", error);
    return new Response(JSON.stringify({ message: "Error fetching entries" }), {
      status: 500,
    });
  }
}
