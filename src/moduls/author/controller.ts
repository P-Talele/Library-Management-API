import { Request, Response } from "express";
import { AuthorService } from "./service";
import { message } from "./../../helper/message";


export class AuthorController {
    private authorService: AuthorService;

    constructor() {
        this.authorService = new AuthorService();
    }

    async craeteAuthor(req: Request, res: Response) {
        try {
            const { name, email, mobile } = req.body;

            const result = await this.authorService.craeteAuthor(name, email, mobile);

            return res.status(201).json({
                code: 201,
                success: true,
                message: message.author.create,
                data: {}
            });
        } catch (error: any) {
            return res.status(400).json({
                code: 400,
                success: false,
                message: error.message
            });
        }
    }

}
