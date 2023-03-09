import { IComment } from "@/components/Posts/Comment";

export interface IPost {
    author: {
        _id: string;
        firstname: string;
        lastname: string;
        profilePicture: string;
        linkToProfile: string;
    };
    body: string;
    createdAt: Date;
    likes: string[];
    comments: IComment[];
    _id: string;
}
