import React from 'react'

const Popup = () => {
  return (
    <div>
      <div className="popup">
        <span>Are you sure?</span>
        <div className="popup__btns">
          <button onClick={()=>{console.log("confirm button clicked")}} className="popup__btn">Confirm</button>
          <button  onClick={()=>{console.log("Cancel button clicked")}} className="popup__btn popup__btn--cancel">Cancel</button>
        </div>
      </div>
      <div className="backdrop"></div>
    </div>
  )
}
export default Popup;