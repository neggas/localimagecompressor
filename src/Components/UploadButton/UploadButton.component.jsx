import React from "react"
import "./UploadButton.style.css"

export const UploadButton = ({name,handleOnChange})=>{
    return (
        <div className="upload-btn-wrapper">
            <button className="btn"><i className="fa fa-upload" style={{
                      "fontSize":80,
                      "color":"green"
            }}></i></button>
            <input type="file" name={name} onChange={handleOnChange}/>
        </div>
    )
}