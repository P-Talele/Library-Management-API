import { Request, Response } from "express";
import { BookService } from "./service";
import { message } from "../../helper/message";

export class BookController {
    private service: BookService;

    constructor() {
        this.service = new BookService();
    }

    async create(req: Request, res: Response) {
        try {

            const { title, author } = req.body

            const result = await this.service.createBook(title, author);

            return res.status(201).json({
                code: 201,
                success: true,
                message: message.book.create,
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


    async booklist(req: Request, res: Response) {
        try {

            const { page, list, search } = req.query

            const result = await this.service.Booklist(page, list, search)

            return res.status(201).json({
                code: 201,
                success: true,
                message: message.book.booklist,
                data: result
            });
        } catch (error: any) {
            return res.status(400).json({
                code: 400,
                success: false,
                message: error.message
            });
        }
    }


    async UpdateBook(req: Request, res: Response) {
        try {
            const { title, id } = req.body

            const result = await this.service.updateBook(title, id)

            return res.status(201).json({
                code: 201,
                success: true,
                message: message.book.update,
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
    async DeleteBook(req: Request, res: Response) {
        try {
            const { id } = req.body

            console.log("req.body", req.body)

            const result = await this.service.deleteIBook(id)

            return res.status(201).json({
                code: 201,
                success: true,
                message: message.book.delete,
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
