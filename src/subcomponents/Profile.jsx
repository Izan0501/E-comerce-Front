import React from "react";
import "../css/profile.css";

export const Profile = () => {
    return (
        <>
            <div class="btn-group">
                <button
                    id="drop-btn"
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    data-bs-toggle="dropdown"
                    data-bs-auto-close="outside"
                    aria-expanded="false"
                ></button>
                <ul id="prof-menu" class="dropdown-menu">
                    <li>
                        <a class="drop-item">
                            Welcome <span className="prof-txt"></span>
                        </a>
                    </li>
                    
                </ul>
            </div>
        </>
    );
};

export default Profile;
