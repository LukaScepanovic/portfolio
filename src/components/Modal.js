import React from 'react'
import ReactDom from 'react-dom'

export default function Modal({ refClose, open, children, title, onClose, videoSrc, link }) {
    if (!open) return null

    return ReactDom.createPortal(
        <>
            <div ref={refClose} className="overlayBackground" id="overlayBackground"/>
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
                <video width="620" height="400" controls>
                    <source src={videoSrc} type="video/mp4">
                    </source>
                </video>
                <a href={link} className="links" target="_blank" rel="noreferrer">Checkout the demo code</a>
            </div>
        </>,
        document.getElementById('portal')
    )
}
