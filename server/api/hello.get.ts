import { defineEventHandler } from "h3";

export default defineEventHandler(async (event) => {
  return {
    title: 'Hello World',
  }
});