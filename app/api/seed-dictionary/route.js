// app/api/dictionary/route.js
import { NextResponse } from "next/server";
import { connectToDB } from "@/lib/mongodb";

export async function GET() {
  try {
    // Connect to MongoDB and get the db object
    const { db } = await connectToDB();

    // Select the "dictionary" collection inside your "elysia" database
    const collection = db.collection("dictionary");

    // Get ALL documents from the collection
    // "find({})" means "find everything"
    const termsCursor = collection.find({});

    // Convert the cursor into a real array of objects
    const terms = await termsCursor.toArray();

    // Return the terms as JSON
    return NextResponse.json(terms);
  } catch (error) {
    console.error("Error fetching dictionary:", error);

    return NextResponse.json(
      { message: "Failed to fetch dictionary", error: error.message },
      { status: 500 }
    );
  }
}
