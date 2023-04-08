import PropTypes from 'prop-types'

import styles from 'assets/scss/button/button55.module.scss'

export default function Button55({text, clickEvent}){
  return (
    <button className={styles.loginbutton} onClick={clickEvent}>{text}</button>
  )
}

Button55.defaultProps = {
  text: '확인',
  clickEvent: () => {console.log('default event')}
}

Button55.propTypes = {
  text: PropTypes.string,
  clickEvent: PropTypes.func
}