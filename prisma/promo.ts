import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createPromo = async (
  title: string,
  price: string,
  description: string
) => {
  const promo = await prisma.promo.create({
    data: {
      title,
      price,
      description,
    },
  });
  return promo;
};

export const getAllPromo = async () => {
  const promo = await prisma.promo.findMany();
  return promo;
};

export const deletePromo = async (id: string) => {
  const promo = await prisma.promo.delete({
    where: {
      id: id,
    },
  });
  return promo;
};
