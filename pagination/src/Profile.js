import { useContext } from "react";
import { AppContext } from "./context";

const Profile = () => {
  const { profileUsers, handleNavButton, index } = useContext(AppContext);
  return (
    <article className="profile-container">
      <div className="profile-wrapper">
        {profileUsers.map((item) => {
          const { id, login, avatar_url, html_url } = item;
          return (
            <div className="profile" key={id}>
              <img src={avatar_url} alt={login} />
              <h3>{login}</h3>
              <a href={html_url}>View Profile</a>
            </div>
          );
        })}
      </div>
      <div className="btn-container">
        <button className="btn btn-nav" onClick={() => handleNavButton("prev")}>
          Prev
        </button>
        {profileUsers.map((item, i) => {
          return (
            <button
              className={i === index ? "btn active" : "btn"}
              key={item.id}
              onClick={() => handleNavButton(i + 1)}
            >
              {i + 1}
            </button>
          );
        })}
        <button className="btn btn-nav" onClick={() => handleNavButton("next")}>
          Next
        </button>
      </div>
    </article>
  );
};

export default Profile;
