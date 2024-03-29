import { isValidElement } from "react";
import PropTypes from 'prop-types'

const CommonPopup = (props) => {
  const {isOpen, close, confirm, innerComponent} = props;

  const DefaultContent = (props) => {
    const {close, confirm} = props;
    return (
      <div style={{background : '#D3CAC4', width: '200px', height: '200px'}}>
        <div>
          컨텐츠컨텐츠컨텐츠컨텐츠
        </div>
        <div>
          <button onClick={confirm ? confirm : () => {}}>확인</button>
          <button onClick={close}>취소</button>
        </div>
      </div>
    )
  };

  return (
    <div className={isOpen ? 'dialog-container active' : 'dialog-container'}>
      {isValidElement(innerComponent) ? <innerComponent /> : <DefaultContent close={close} confirm={confirm} />}
      <div className="backdrop"></div>
    </div>
  )

};

CommonPopup.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
  confirm: PropTypes.func,
}

export default CommonPopup;


