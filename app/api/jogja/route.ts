import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface JogjaData {
  title: string;
  price: string;
  description: string;
  image: string;
}

export async function GET() {
  try {
    const data = await prisma.jogja.findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function POST(req: NextRequest) {
  const { title, price, description, image }: JogjaData = await req.json();
  if (!title || !price || !description || !image) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }
  try {
    const newData = await prisma.jogja.create({
      data: {
        title,
        price,
        description,
        image,
      },
    });
    return NextResponse.json(newData);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
