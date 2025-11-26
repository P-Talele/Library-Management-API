import { IsString, IsNotEmpty, IsEmail, IsNumber } from "class-validator";

export class CreateAuthorDTO {
  @IsNotEmpty({ message: "Name is required" })
  @IsString()
  name!: string;

  @IsNotEmpty({ message: "Mobile number is required" })
  @IsNumber()
  mobile!: number;

  @IsNotEmpty({ message: "Email is required" })
  @IsEmail({}, { message: "Invalid email address" })
  email!: string;
}

export class UpdateAuthorDTO {
  @IsString()
  name?: string;

  @IsNumber()
  mobile?: number;

  @IsEmail({}, { message: "Invalid email address" })
  email?: string;
}
