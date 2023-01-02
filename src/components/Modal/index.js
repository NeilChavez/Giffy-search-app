import ReactDOM from "react-dom"

import "./Modal.css"
function Modal({ children, onClose }) {
    const handleClick = (e) => {
        e.stopPropagation()
    }
    const handleClose = (e) => {
        e.preventDefault();
        onClose()
    }
    return (
        <div className="Modal" onClick={handleClick}>
            <div className="Modal-content">
                <button onClick={handleClose} className="Close-modal">✖️</button>
                <p className="Modal-msg"> You need to be logged in to like the gifs.</p>
                {children}
            </div>
        </div>
    )
}

export default function ModalPortal({ children, onClose }) {
    // createPortal necesita dos parametros:
    //  - El primero es lo que queremos renderizar
    //  - El segundo es donde lo queremos renderizar
    return ReactDOM.createPortal(<Modal onClose={onClose}>{children}</Modal>, document.getElementById("Modal-root"))
}