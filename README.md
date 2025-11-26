# Library-Management-API

# npm install -D ts-node-dev





# 1. Create Author

# Create a new author.
# POST /author
# Request Body
# {
#  "name": "Prashant",
#  "mobile": 9130231926,
#  "email": "patil@mail.com"
# }



# 1 . Create Book

# POST /create-book

# Create a new book for an existing author.

# Request Body
# {
#   "title": "Pushpa",
#  "author": "6926d422b41c904236a67f5d"
# }



# 2. Book List (with Search + Pagination)

# GET /book-list

# Query Params
# Name	Type	Required	Example	Description
# page	number	No	1	Page number
# limit	number	No	10	Items per page
# search	string	No	war	Search by book title or author name
# Success Response
# {
#  "message": "Book list retrieved successfully.",
#  "page": 1,
#  "limit": 10,
#  "total": 3,
#  "data": [
#    {
#      "_id": "6926f679d7d380a613d31cbd",
#      "title": "Pushpa",
#      "author": {
#        "_id": "6926d422b41c904236a67f5d",
#        "name": "Prashant",
#        "email": "patil@mail.com"
#      }
#    }
#  ]
# }

# 3. Update Book

# PATCH :/book-update

# Request Body
# {
 #  "id": "6926f679d7d380a613d31cbd",
 # "title": "War"
# }


# 4. Delete Book

# DELETE :/delete

# Request Body
# {
#   "id": "6926f679d7d380a613d31cbd"
# }
 
