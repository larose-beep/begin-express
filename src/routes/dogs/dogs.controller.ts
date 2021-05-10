import { TControllerFC } from ".";
import * as service from "./dogs.service";
import { food } from "../../services";

export const dogs: TControllerFC = (req, res, next) => {
  res.status(200).json({ dogs: service.dogs() });
};

export const feeding: TControllerFC = (req, res, next) => {
  const [, meat] = food.foods();
  res.status(200).json(food.feeding("dog", meat));
};
