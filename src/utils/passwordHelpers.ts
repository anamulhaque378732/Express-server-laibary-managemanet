import bcrypt from "bcrypt";

const hashpassword = async (plainPassword: string) => {
  return await bcrypt.hash(plainPassword, 10);
};

const compareHashPassword = async (
  plainPassword: string,
  hashpassword: string,
) => {
  return await bcrypt.compare(plainPassword, hashpassword);
};

export const passwordHelpers = {
  hashpassword,
  compareHashPassword,
};
