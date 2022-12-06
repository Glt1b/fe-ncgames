import { useContext } from "react";
import { UserContext } from "../contexts/User.js";

export default function Header() {
    const { user, setUser } = useContext(UserContext);

    return (
        <div className="App-header">
            <h1>Welcome to NC Games</h1>
            <img src="../img/profileImg.jpg" alt="profile image" />
            <p>You logged in as <b>{user.username}</b></p>
        </div>
    )
};