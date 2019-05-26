import { instance as ky } from "../config/ky.config";
import { createEffect } from "effector";

import { setCurrencies } from "../store";

export const getCurrencies = createEffect("getCurrencies").use(() =>
    ky.get("/latest").json()
);

getCurrencies.done.watch(setCurrencies);
