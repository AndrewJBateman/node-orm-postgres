import { Request, Response } from "express";
import { Data } from "../entity/Data";

export const createData = async (req: Request, res: Response) => {
  try {
    const { area, zone } = req.body;
    const data = new Data();
    data.area = area;
    data.zone = zone;

    return res.json(await data.save());
  } catch (error) {
    if (error instanceof Error) {
      return res.json(500).json({ message: error.message });
    }
  }
};

export const getData = async (req: Request, res: Response) => {
  try {
    return res.json(await Data.find());
  } catch (error) {
    if (error instanceof Error) {
      return res.json(500).json({ message: error.message });
    }
  }
};

export const updateData = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const data = await Data.findOneBy({ id: +req.params.id });

    if (!data)
      return res.status(404).json({ message: "There is no data with that id" });

    await Data.update({ id: +id }, req.body);
    return res.sendStatus(204);
  } catch (error) {
    if (error instanceof Error) {
      return res.sendStatus(500).json({ message: error.message });
    }
  }
};

export const deleteData = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    return (await Data.delete({ id: +id })).affected === 0
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

export const getDataDetail = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    return res.json(await Data.findOneBy({ id: +id }));
  } catch (error) {
    if (error instanceof Error) {
      return res.status(500).json({ message: error.message });
    }
  }
};
