import { instanceAxios } from "../../Utilities/InstanceAxios/instanceAxios";

export const getPopularDatas = async () => {
  const response = await instanceAxios("/restaurant_popularData");
  return response.data.data;
};
