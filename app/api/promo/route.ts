import { NextResponse, NextRequest } from "next/server";
import { getAllPromo, createPromo, deletePromo } from "@/prisma/promo";

interface PromoRequestBody {
  title: string;
  price: string;
  description: string;
  image : string
}
export async function GET() {
  const promo = await getAllPromo();
  return NextResponse.json(promo);
}

export async function POST(req: NextRequest) {
  const { title, price, description, image }: PromoRequestBody =
    await req.json();
  if (!title || !price || !description) {
    return NextResponse.json({ message: "Missing fields" });
  }

  const newPromo = await createPromo(title, price, description, image);
  return NextResponse.json(newPromo);
}

export async function DELETE(req: NextRequest) {
  const { searchParams } = new URL(req.url); // Create URL object to access query parameters
  const id = searchParams.get("id");
  if (!id) {
    return NextResponse.json({ message: "Missing fields" }, { status: 400 });
  }

  try {
    const promo = await deletePromo(id);
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
