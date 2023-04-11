/**
 * 이름을 감싼 동그란 꽃이 둘러진 원
 */


import PropTypes from 'prop-types'

import styles from 'assets/scss/components/NamePlate.module.scss'



export default function NamePlate({name}){
  console.log('styles: ', styles);
  return (
    // <div style={{position: 'relative', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    // <div style={{backgroundImage: `url(${'./assets/img/NameFlower4.svg'})`, position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    <div className={styles['plate-container']}>

      <p> {name} </p>
    </div>
  )
}

NamePlate.defaultProps = {
  name: 'no name'
}

NamePlate.propTypes = {
  name: PropTypes.string
}