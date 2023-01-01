import { Request, Response } from "express";
import { IAddress } from "../../interfaces/address.interface";
import { createAddressService } from "../../services/address";

const createAddressController = async (req: Request, res: Response) => {
  console.log("entrei no controller");

  const address: IAddress = req.body;
  const userId = req.user.id;

  const newAddress = await createAddressService(address, userId);

  return res.status(201).json(newAddress);
};

export default createAddressController;
