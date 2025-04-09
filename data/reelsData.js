import users from "./users";
// import MaterialIcons from '@expo/vector-icons/MaterialIcons';
// const verfiedIcon = <MaterialIcons name="verified" size={14} color="dodgerblue" />;

export default [
    {
        id: 1,
        video: require("../assets/Video/video.mp4"),
        avatar: users[0].image,
        user: users[0].username,
        verifiedIcon: users[0].verfiedIcon,
        caption: "This is a sample caption for video 1",
        likes: 120,
        comments: 30,
        shares: 10,
        musicName: 'Cool Vibes 🎶',
    },
    {
        id: 2,
        video: require("../assets/Video/video1.mp4"),
        avatar: users[1].image,
        user: users[1].username,
        verifiedIcon: users[2].verfiedIcon,
        caption: "This is a sample caption for video 2",
        likes: 200,
        comments: 50,
        shares: 20,
        musicName: 'Chill Beats 🎶',
    },
    {
        id: 3,
        video: require("../assets/Video/video2.mp4"),
        avatar: users[2].image,
        user: users[2].username,
        verifiedIcon: users[3].verfiedIcon,
        caption: "This is a sample caption for video 3",
        likes: 300,
        comments: 70,
        shares: 30,
        musicName: 'Dance Party 🎶',
    },
    {
        id: 4,
        video: require("../assets/Video/video3.mp4"),
        avatar: users[3].image,
        user: users[3].username,
        verifiedIcon: users[4].verfiedIcon,
        caption: "This is a sample caption for video 4",
        likes: 400,
        comments: 90,
        shares: 40,
        musicName: 'Epic Moments 🎶',
    },
]