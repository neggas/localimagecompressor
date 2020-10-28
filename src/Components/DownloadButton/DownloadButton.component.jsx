import React from "react"
import "./DownloadButton.style.css"
export const DownloadButton = ({ compressedLink }) => {
    return <a className="btn-primary download col-md-3" href={compressedLink} download>Telecharger</a>
}