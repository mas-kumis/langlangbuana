import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  if (!id) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  try {
    const promo = await prisma.jogja.delete({
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

export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  const { id } = params;
  if (!id) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  try {
    const promo = await prisma.jogja.findUnique({ where: { id: id } });
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
