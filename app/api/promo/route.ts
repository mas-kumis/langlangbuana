import { NextResponse, NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface PromoRequestBody {
  title: string;
  price: string;
  description: string;
  image: string;
}
export async function GET() {
  try {
    const data = await prisma.promo.findMany();
    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Internal server error" });
  }
}

export async function POST(req: NextRequest) {
  const { title, price, description, image }: PromoRequestBody =
    await req.json();
  if (!title || !price || !description) {
    return NextResponse.json({ message: "Missing fields" });
  }

  const newPromo = await prisma.promo.create({
    data: {
      title,
      price,
      description,
      image,
    },
  });
  return NextResponse.json(newPromo);
}
