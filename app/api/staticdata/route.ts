import path from "path";
import { promises as fs } from "fs";

import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Find the absolute path of the "json" directory
    const jsonDirectory = path.join(process.cwd(), "json");
    // Read the "data.json" file
    const tickets = await fs.readFile(
      jsonDirectory + "/dataHeader.json",
      "utf8"
    );
    // Return the content of the data file in JSON format
    return NextResponse.json(JSON.parse(tickets), { status: 200 });
    // res.status(200).send(JSON.parse(fileContents));
  } catch (err) {
    return NextResponse.json(
      { message: "failed to fetch data" },
      { status: 500 }
    );
  }
}

export async function POST(req: any) {
  try {
    const body = await req.json();
    const ticketData = body.formData;

    // await Ticket.create(ticketData);
    // Find the absolute path of the "json" directory
    const jsonDirectory = path.join(process.cwd(), "json");
    // Read the "data.json" file
    const tickets = await fs.readFile(
      jsonDirectory + "/dataHeader.json",
      "utf8"
    );
    // Return the content of the data file in JSON format
    return NextResponse.json(JSON.parse(tickets), { status: 200 });
    // res.status(200).send(JSON.parse(fileContents));
  } catch (err) {
    return NextResponse.json(
      { message: "failed to fetch data" },
      { status: 500 }
    );
  }
}
