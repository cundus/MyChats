import { IBodyRegister } from "@src/types/auth";
import * as authServices from "./service";
import { TypedRequestBody } from "@src/types/common";

const registerController = async (req: TypedRequestBody<IBodyRegister>, res: Response): Promise<void> => {
   try {
      const { body } = req;

      const registering = await authServices.registerService(body);
   } catch (error) {}
};
