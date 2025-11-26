import { BookModel } from '../../model/book';

export class BookService {
    private bookModel: typeof BookModel;

    constructor() {
        this.bookModel = BookModel;
    }

    async createBook(title: any, author: any) {
        const book = await this.bookModel.create({
            title,
            author
        });
        return book;
    }

    async Booklist(page: any = 1, limit: any = 10, search: any = "") {
        const skip = (page - 1) * limit;

        const pipeline: any[] = [
            {
                $lookup: {
                    from: "authors",
                    localField: "author",
                    foreignField: "_id",
                    as: "author"
                }
            },
            { $unwind: "$author" },
        ];

        if (search) {
            pipeline.push({
                $match: {
                    $or: [
                        { title: { $regex: search, $options: "i" } },
                        { "author.name": { $regex: search, $options: "i" } }
                    ]
                }
            });
        }
        pipeline.push({
            $facet: {
                data: [
                    { $skip: skip },
                    { $limit: limit },
                    {
                        $project: {
                            _id: 1,
                            title: 1,
                            author: "$author.name",
                            createdAt: 1,
                        }
                    }
                ],
                totalCount: [
                    { $count: "count" }
                ]
            }
        });
        pipeline.push({
            $project: {
                data: 1,
                total: { $arrayElemAt: ["$totalCount.count", 0] },
            }
        });

        const result = await this.bookModel.aggregate(pipeline);

        return {
            data: result[0]?.data || [],
            total: result[0]?.total || 0,
        };
    }

    async updateBook(title: any, id: any) {

        console.log("title:", title)
        console.log("_id:", id)


        const book = await this.bookModel.findOneAndUpdate(
            { _id: id },
            { $set: { title } },
        );
        return book;
    }


    async deleteIBook(id: any) {

        const book = await this.bookModel.findByIdAndDelete(id)

        return book;
    }



}
