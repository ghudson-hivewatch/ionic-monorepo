import styles from './header.module.scss';
import { IonButton } from '@ionic/react';
import '@ionic/react/css/core.css';

/* eslint-disable-next-line */
export interface HeaderProps {}

export function Header(props: HeaderProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Header!</h1>
      <IonButton class="button">Round Button</IonButton>
    </div>
  );
}

export default Header;
