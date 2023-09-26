function createDefaultUser(name:string, email:string) {
    return {
        name: name,
        email: email,
        points: 100,
        screenName: "quinn123",
        description: "This is my profile",
        protected: false,
        verified: true,
        followersCount: 500,
        friendsCount: 200,
        listedCount: 50,
        favouritesCount: 300,
        statusesCount: 1000,
        profileBannerUrl: "https://example.com/banner.jpg",
        profileImageUrlHttps: "https://example.com/profile.jpg",
        defaultProfile: false,
        defaultProfileImage: false,
        hashedPassword: "asddwdasfasfasf"
    };
}

export default createDefaultUser;
