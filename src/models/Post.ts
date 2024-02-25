interface Post {
    id: string;
    userId: string;
    text: string;
    createdAt: string;
    source: string;
    truncated: boolean;
    inReplyToStatusId?: number | null;
    inReplyToScreenName?: string | null;
    inReplyToUserId?: number | null;
    likeCount: number;
    points: number;
    contentLinkUrl:string | null;
    videoUrl: string | null;
}
