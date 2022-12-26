import ReactDOM from "react-dom";

import "./Modal.css"
function Modal({ children, onClose }) {
    const handleClick = (e) => {
        e.stopPropagation()
    }
    return (
        <div className="Modal" onClick={handleClick}>
            <div className="Modal-content">
                <button onClick={(e) => {
                    e.preventDefault();
                    onClose()
                }}>✖️</button>
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