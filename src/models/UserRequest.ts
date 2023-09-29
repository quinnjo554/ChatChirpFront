interface UserRequest {
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
    listedCount:number;
    statusesCount: number;
    profileBannerUrl: string;
    profileImageUrlHttps: string;
    defaultProfile: boolean;
    defaultProfileImage: boolean;
};

export default UserRequest;
