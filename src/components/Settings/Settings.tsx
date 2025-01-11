import useSettingsStore from '@/stores/settings';
import styles from './Settings.module.scss';

const Settings = () => {
  const { theme, toggleTheme } = useSettingsStore();

  return (
    <div>
      <h1 className={styles.titleSettings}>Current Theme: {theme}</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
};

export default Settings;