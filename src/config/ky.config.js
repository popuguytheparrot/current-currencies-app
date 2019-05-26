import ky from "ky";

export const instance = ky.create({
  prefixUrl:
    process.env.NODE_ENV === "production" && "https://api.exchangeratesapi.io"
});

