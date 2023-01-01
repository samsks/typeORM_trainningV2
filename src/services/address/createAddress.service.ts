import { IAddress } from "../../interfaces/address.interface";
import { User } from "../../entities";
import { Address } from "../../entities";
import AppDataSource from "../../data-source";

const createAddressService = async (
  addressData: IAddress,
  userId: number
): Promise<Address> => {
  console.log("entrei no service");

  const addressRepository = AppDataSource.getRepository(Address);
  const userRepository = AppDataSource.getRepository(User);

  const newAddress = addressRepository.create(addressData);
  await addressRepository.save(newAddress);

  await userRepository.update(
    {
      id: userId,
    },
    {
      address: newAddress,
    }
  );
  console.log("passei service");

  return newAddress;
};

export default createAddressService;
