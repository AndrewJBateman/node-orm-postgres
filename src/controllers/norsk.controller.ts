import { Request, Response } from "express";
import { NorskPetroleum } from "../entity/NorskPetroleum";

// CREATE
export const createNorskData = async (req: Request, res: Response) => {
  try {
    const {
      field_name,
      area,
      status,
      disc_year,
      orig_res,
      rem_res,
      prod_start,
      operator,
    } = req.body;
    const data = new NorskPetroleum();
    data.field_name = field_name;
    data.area = area;
    data.status = status;
    data.disc_year = disc_year;
    data.orig_res = orig_res;
    data.rem_res = rem_res;
    data.prod_start = prod_start;
    data.operator = operator;

    return res.json(await data.save());
  } catch (error) {
    if (error instanceof Error) {
      return res.json(500).json({ message: error.message });
    }
  }
};

// READ ALL
export const getNorskData = async (req: Request, res: Response) => {
  try {
    return res.json(await NorskPetroleum.find());
  } catch (error) {
    if (error instanceof Error) {
      return res.json(500).json({ message: error.message });
    }
  }
};

// UPDATE ONE
export const updateNorskData = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await NorskPetroleum.findOneBy({ id: +req.params.id });

    if (!data)
      return res.status(404).json({ message: "There is no data with that id" });

    await NorskPetroleum.update({ id: +id }, req.body);
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.sendStatus(500).json({ message: error.message });
    }
  }
};

// DELETE ONE
export const deleteNorskData = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    return (await NorskPetroleum.delete({ id: +id })).affected === 0
      ? res
          .status(404)
          .json({ message: "Matching data not found or not deleted" })
      : res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};

// READ ONE
export const getNorskDataDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    return res.json(await NorskPetroleum.findOneBy({ id: +id }));
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
