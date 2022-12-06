import { useContext } from "react";
import { UserContext } from "../contexts/User.js";
import profilePic from '../img/profileImg.jpg'

export default function Header() {
    const { user, setUser } = useContext(UserContext);

    return (
        <div className="App-header">
            <h1>Welcome to NC Games</h1>
            <img id="profileImg" src={profilePic }alt="profile image" />
            <p>You logged in as <b>{user.username}</b></p>
        </div>
    )
};