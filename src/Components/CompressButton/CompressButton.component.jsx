import React from "react"
import "./CompressButton.style.css"
export const CompressButton = ({ label, compress }) => {
    return <button className="btn-primary compressbtn col-md-3" onClick={compress}>{label}</button>
}