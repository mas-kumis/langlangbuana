import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface PromoRequestBody {
  title: string;
  price: string;
  description: string;
  image: string;
}
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  if (!id) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  try {
    const promo = await prisma.promo.delete({
      where: {
        id: id,
      },
    });
    if (!promo) {
      return NextResponse.json({ message: "Promo not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Promo deleted successfully", promo });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  if (!id) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  try {
    const { title, price, description, image }: PromoRequestBody =
      await req.json();
    const promo = await prisma.promo.update({
      where: {
        id: id,
      },
      data: {
        title,
        price,
        description,
        image,
      },
    });
    if (!promo) {
      return NextResponse.json({ message: "Promo not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Promo updated successfully", promo });
  } catch (error) {
    console.error("Error occurred:", error);
  }
}

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  if (!id) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  try {
    const promo = await prisma.promo.findUnique({ where: { id: id } });
    if (!promo) {
      return NextResponse.json({ message: "Promo not found" }, { status: 404 });
    }
    return NextResponse.json({ promo });
  } catch (error) {
    console.error("Error occurred:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
