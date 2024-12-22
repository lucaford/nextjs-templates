import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_CONNECTION_STRING || "";
let client = null;
let clientPromise: any = null;

if (!clientPromise) {
  client = new MongoClient(mongoUri);
  clientPromise = client.connect();
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db("landings");
    const pagesCollection = db.collection("pages");

    const page = await pagesCollection.findOne({
      projectName: process.env.NEXT_PUBLIC_PROJECT_NAME,
    });

    return NextResponse.json(page.texts, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: "Failed to read file" }, { status: 500 });
  }
}
