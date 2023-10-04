
import { randomUUID } from "crypto";
function createDefaultUser(name:string, email:string) {
    //need to keep tract if this is a users first time on the sight.
    //then promt them with a modal 
    return {
        name: name,
        email: email,
        points: 0,
        screenName: email,
        description: "This is my profile",
        protected: false,
        verified: false,
        followersCount: 0,
        friendsCount: 0,
        listedCount: 0,
        favouritesCount: 0,
        statusesCount: 0,
        profileBannerUrl: "https://example.com/banner.jpg",
        profileImageUrlHttps: "https://example.com/profile.jpg",
        defaultProfile: false,
        defaultProfileImage: false,
        hashedPassword: crypto.randomUUID().toString()
    };
}

export default createDefaultUser;
