import React from 'react';
import { saveAs } from 'file-saver';


interface DownloadButtonProps {
    image: string; // Image file path
    filename: string; // File name for download
}

const DownloadButton: React.FC<DownloadButtonProps> = ({ image, filename }) => {
    const downloadImage = () => {
        saveAs(image, filename);
    };

    return (
        <button onClick={downloadImage}>
            Download {filename}
        </button>
    );
}

export default DownloadButton;
