import { db } from "@/lib/db";
import { NextResponse } from "next/server";

import { hash } from "bcrypt";
import * as  z from "zod"

const UserSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  })
 

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, username, password } = UserSchema.parse(body);

    //check if the email exists
    const existingUserByEmail = await db.user.findUnique({
      where: { email: email },
    });
    if (existingUserByEmail) {
      return NextResponse.json(
        { user: null, massage: "User with this Email already  exists!" },
        { status: 409 }
      );
    }

    // check if the username exists to db
    const existingUserByUsernmae = await db.user.findUnique({
      where: { username: username },
    });
    if (existingUserByUsernmae) {
      return NextResponse.json(
        { user: null, massage: "User with this username already exists!" },
        { status: 409 }
      );
    }

    //hashing the password before sending to db
    const hashedPassword = await hash(password, 10);

    const newUser = await db.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    const { password: newUserPassword, ...rest } = newUser;

    return NextResponse.json(
      { user: rest, massage: "User created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { massage: "Something went wrong!!" },
      { status: 500 }
    );
  }
}
