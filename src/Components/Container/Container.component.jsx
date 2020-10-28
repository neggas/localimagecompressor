import React from "react";
import "./Container.style.css";

import { UploadButton } from '../UploadButton/UploadButton.component'
import { CompressButton } from '../CompressButton/CompressButton.component'
import { DownloadButton } from '../DownloadButton/DownloadButton.component'
import { Image } from '../Image/Image.component'
import { Notice } from '../Notice/Notice.component'

export const Container = ({ name, handleOnChange, image, compressedLink, isUpload, compress }) => {
  return (
    <div className="row card-container">
      <div className="col-md-12">
        <UploadButton
          name={name}
          handleOnChange={handleOnChange}
        />
      </div>

      <div className="row image-container">
        {isUpload ? <Image image={image} /> : null}
        {isUpload ? <CompressButton label="compresser" compress={compress} /> : null}

        {compressedLink ? <Image image={compressedLink} /> : null}
        {compressedLink ? <DownloadButton compressedLink={compressedLink} /> : null}

        {(isUpload === false && compressedLink === '') ? <Notice /> : null}

      </div>


    </div>
  );
};
