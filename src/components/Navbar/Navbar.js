import styles from './Navbar.module.css';

function Navbar(props) {
  const { image, name, role } = props.userProfile;
  // TODO - add fallback when userimage doesn't exist
  const profileAvatar = image + "?size=40";
  return (
    <nav className={styles.nav} role="navigation" aria-label="Main">
      <img className={styles.avatar} alt="Profile avatar" src={profileAvatar} />
      <ul>
        <li className={styles.name}>
          {name}
        </li>
        <li className={styles.role}>
          {role}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;