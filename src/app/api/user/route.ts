import { dbConnect } from "@/lib/dbConnect";
import { User } from "@/models/user.model";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  dbConnect();
  const { username, email, password } = await req.json();

  const user = await User.create({
    username,
    email,
    password,
  });

  return Response.json({
    message: "new user created",
    user,
  });
}
