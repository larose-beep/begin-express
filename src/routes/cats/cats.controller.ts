import { TControllerFC } from ".";
import * as service from "./cats.service";
import { food } from "../../services";

export const cats: TControllerFC = (req, res, next) => {
  res.status(200).json({ cats: service.cats() });
};

export const feeding: TControllerFC = (req, res, next) => {
  const [fish] = food.foods();
  res.status(200).json(food.feeding("cat", fish));
};
