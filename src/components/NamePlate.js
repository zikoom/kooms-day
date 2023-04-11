/**
 * 이름을 감싼 동그란 꽃이 둘러진 원
 */


import PropTypes from 'prop-types'

import styles from 'assets/scss/components/NamePlate.module.scss'
import { useSelector } from 'react-redux';



export default function NamePlate({name}){
  const userThumbnail = useSelector(state => state.firebaseManager.userinfo.photoURL);
  console.log('userThumbnail: ', userThumbnail);
  return (
    <div className={styles['plate-container']}>
      <div className={styles['plate-content']} style={{backgroundImage: userThumbnail.length > 0 ? `url(${userThumbnail})` : ''}}>

      </div>
    </div>
  )
}

NamePlate.defaultProps = {
  name: 'no name'
}

NamePlate.propTypes = {
  name: PropTypes.string
}