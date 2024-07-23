import { getRequestConfig } from "next-intl/server";
import axios from "axios";

const getLocales = async () => {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/messages`
  );
  return data;
};

export default getRequestConfig(async () => {
  const locale = "es";
  const messages = await getLocales();
  return {
    locale,
    messages,
  };
});
