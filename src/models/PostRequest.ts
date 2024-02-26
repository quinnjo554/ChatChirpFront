export interface PostRequest {
    userId: string;
    text: string;
    createdAt: Date;
    source: string;
    truncated: boolean;
    inReplyToStatusId?: number | null;
    inReplyToScreenName?: string | null;
    inReplyToUserId?: number | null;
    likeCount: number;
    contentLinkUrl:string | null;
    videoUrl: string | null;
}
export function createPostRequest(userId:string, text:string, contentLink?:string, videoLink?:string ) {
    //need to keep tract if this is a users first time on the sight.
    //then promt them with a modal 
    return {
    userId: userId,
    text: text,
    createdAt:new Date(),
    source: "Web",
    truncated: false,
    inReplyToStatusId:  0,
    inReplyToScreenName: "",
    inReplyToUserId:  0,
    likeCount: 0,
    contentLinkUrl:contentLink ?? null,
    videoUrl: videoLink ?? null,
    };
}