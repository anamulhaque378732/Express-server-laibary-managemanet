import { pool } from "../../config/db";
import { jwtHelpers } from "../../utils/jwtHelpers";
import { passwordHelpers } from "../../utils/passwordHelpers";
import { IUser } from "./auth.interface";

const { hashpassword, compareHashPassword } = passwordHelpers;

const registerUser = async (payload: IUser) => {
  const { name, email, password, role } = payload;
  const pass = await hashpassword(password);
  const result = await pool.query(
    ` 
    INSERT INTO users(
    name,email,password,role)
    VALUES($1,$2,$3,$4) RETURNING *`,
    [name, email, pass, role],
  );

  return result.rows[0];
};

const loginUser = async (email: string, password: string) => {
  const isUserEsists = await pool.query<IUser>(
    ` SELECT * FROM users WHERE 
    email=$1
    `,
    [email],
  );

  const user = isUserEsists.rows[0];

  if (!user || !compareHashPassword(password, user.password)) {
    const error = new Error("Invalid email or password");
    throw error;
  }

  const token = jwtHelpers.genarateToken({
    id: user.id,
    email: user.email,
    role: user.role,
  });
  return { user, token };
};

export const authService = {
  registerUser,
  loginUser,
};
