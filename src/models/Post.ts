interface Post {
    userId: string;
    id: string;
    text: string;
    createdAt: Date;
    source: string;
    truncated: boolean;
    inReplyToStatusId?: number | null;
    inReplyToScreenName?: string | null;
    inReplyToUserId?: number | null;
    likeCount: number;
    points: number;
}
