import { isValidElement } from "react";
import PropTypes from 'prop-types'

const CommonPopup = (props) => {
  const {isOpen, close, confirm, innerComponent} = props;

  const defaultContent = () => {
    return (
      <div style={{background : '#D3CAC4', width: '200px', height: '200px'}}>
        <div>
          컨텐츠
        </div>
        <div>
          버튼 존
          <button>확인</button>
          <button onClick={close}>취소</button>
        </div>
      </div>
    )
  };

  return (
    <div className={isOpen ? 'dialog-container active' : 'dialog-container'}>
      {isValidElement(innerComponent) ? innerComponent : defaultContent()}
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


