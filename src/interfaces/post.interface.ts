export interface IPost {
    author: {
        authorId: string;
        firstname: string;
        lastname: string;
        profilePicture: string;
        linkToProfile: string;
    };
    body: string;
    createdAt: Date;
    likes: string[];
    comments: [];
    _id: string;
}
