import { Request, Response } from "express";

import { Pet } from "../models/pet";
import { CreateMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
let query: string = req.query.q as string;
let list = Pet.getFromName(query)
  res.render("pages/page", {
      menu: CreateMenuObject(""),
      list
     
  });
};
