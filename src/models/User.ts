type UserResponse = {
    id: string;
    name: string;
    email: string;
    hashedPassword: string;
    points: number;
    screenName: string;
    description: string;
    protected: boolean;
    verified: boolean;
    followersCount: number;
    friendsCount: number;
    favouritesCount: number;
    statusesCount: number;
    createdAt: string; // Date type if it's a JavaScript Date string
    profileBannerUrl: string;
    profileImageUrlHttps: string;
    defaultProfile: boolean;
    defaultProfileImage: boolean;
};

export default UserResponse;
