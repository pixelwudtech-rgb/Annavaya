/* eslint-disable no-param-reassign */
import { faker } from "@faker-js/faker";
import { RANDOMIZE } from "../app/constants.js";
import type { Products } from "../types/entities.js";

// Temporary in-memory products (no JSON import)
const productsStaticData: Products = [];

export function getProducts(randomize = RANDOMIZE) {
  console.log("getProducts");

  if (!randomize) return productsStaticData;

  return productsStaticData.map((p) => ({
    ...p,
    price: faker.commerce.price(),
    technology: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
  }));
}
