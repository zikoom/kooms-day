/**
 * 이름을 감싼 동그란 꽃이 둘러진 원
 */


import styles from 'assets/scss/components/NamePlate.module.scss'
import { useSelector } from 'react-redux';



export default function NamePlate(){
  const userThumbnail = useSelector(state => state.firebaseManager.userinfo.photoURL) || '';
  return (
    <div className={styles['plate-container']}>
      <div className={styles['plate-content']} style={{backgroundImage: userThumbnail.length > 0 ? `url(${userThumbnail})` : ''}}>

      </div>

    </div>
  )
}