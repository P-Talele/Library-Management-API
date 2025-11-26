import { IsString, IsNotEmpty, IsMongoId } from "class-validator";

export class CreateBookDTO {
  @IsNotEmpty({ message: "Book title is required" })
  @IsString()
  title!: string;

  @IsNotEmpty({ message: "Author ID is required" })
  @IsMongoId({ message: "Invalid author ID" })
  author!: string;
}

export class UpdateBookDTO {
  @IsString()
  title!: string;
  @IsNotEmpty({ message: "Book ID is required" })
  @IsMongoId({ message: "Invalid author ID" })
  id!: string;
}


export class dleteBookDTO {
  @IsNotEmpty({ message: "Book ID is required" })
  @IsMongoId({ message: "Invalid book ID" })
  id!: string;
}