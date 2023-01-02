import { IAddress } from "../../interfaces/address.interface";
import { User, Address } from "../../entities";
import AppDataSource from "../../data-source";

const createAddressService = async (
  addressData: IAddress,
  userId: number
): Promise<Address> => {
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

  return newAddress;
};

export default createAddressService;
