import React from 'react'
import ReactDom from 'react-dom'

export default function Modal({ open, children, title, onClose }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div className="overlayBackground" />
            <div className="modal">
                <div className="modal-header">
                <div className="modalTitle">
                        {title}
                    </div>
                    <button className="close-button" onClick={onClose}>&times;</button>
                </div>
                <div className="children">
                    {children}
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}
