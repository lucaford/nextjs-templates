import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const mongoUri = process.env.MONGODB_CONNECTION_STRING;
const projectName = process.env.NEXT_PUBLIC_PROJECT_NAME;

let client: MongoClient | null = null;
let clientPromise: Promise<MongoClient>;

try {
  if (!client) {
    client = new MongoClient(mongoUri || "");
    clientPromise = client.connect();
  }
} catch (err) {
  console.error("Error initializing MongoDB client:", err);
  throw new Error("Failed to initialize MongoDB connection.");
}

export async function GET() {
  let clientInstance: MongoClient;

  try {
    clientInstance = await clientPromise;
  } catch (connectionError) {
    console.error("Database connection error:", connectionError);
    return NextResponse.json(
      { error: "Failed to connect to the database. Please try again later." },
      { status: 500 }
    );
  }

  try {
    const db = clientInstance.db("landings");
    const pagesCollection = db.collection("pages");

    const page = await pagesCollection.findOne({ projectName });

    if (!page || !page.images) {
      return NextResponse.json(
        { error: "No images found for the specified project." },
        { status: 404 }
      );
    }

    return NextResponse.json(page.images, { status: 200 });
  } catch (queryError) {
    console.error("Error querying the database:", queryError);
    return NextResponse.json(
      { error: "Failed to retrieve data from the database." },
      { status: 500 }
    );
  }
}
