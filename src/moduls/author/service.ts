
import { authorModel } from "../../model/author";
import { message } from "../../helper/message";

export class AuthorService {
    private authorModel: typeof authorModel;


    constructor() {
        this.authorModel = authorModel
    }

    async craeteAuthor(name: string, email: string, mobile: number) {
        const existing = await this.authorModel.findOne({ email });
        if (existing) throw {
            status: 400, message: message.author.email
        };

        const user = await this.authorModel.create({
            name,
            email,
            mobile
        });

        return user;
    }

}
