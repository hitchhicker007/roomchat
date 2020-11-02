import React from 'react'
import './Popup.css'
import ReactDOM from 'react-dom'

function Popup() {

    var popupCloseHandler = () => {
        let modal = document.getElementById("myModal");
        ReactDOM.findDOMNode(modal).style.display = "none";
    }

    return (
        <div>
            <div id="myModal" className="modal">
                <div className="modal-content">
                    <span onClick={popupCloseHandler} className="close">&times;</span>
                    <p>This APP is developed by <a href="http://hitchhicker.tech/">Hitch Hicker</a>.</p>
                </div>
            </div>
        </div>
    )
}

export default Popup
