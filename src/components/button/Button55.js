import PropTypes from 'prop-types'

// import styles from '../'

export default function Button55({text, clickEvent}){

  console.log(text, clickEvent);

  return (
    <button onClick={clickEvent}>{text}</button>
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