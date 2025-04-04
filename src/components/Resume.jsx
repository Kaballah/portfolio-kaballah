import React, { useRef } from 'react';
// import PDFViewer from 'pdf-viewer-reactjs';
import './Resume.css';

function Resume() {
  const resumeContainerRef = useRef(null);
  const iframeRef = useRef(null);
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/Resume.pdf';
    link.download = 'resume.pdf'; // Suggest a filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleWheelScroll = (event) => {
    const iframe = iframeRef.current;
    if (!iframe) return;

    const iframeDocument = iframe.contentDocument?.documentElement;
    if (!iframeDocument) return;

    const iframeScrollHeight = iframeDocument.scrollHeight;
    const iframeClientHeight = iframeDocument.clientHeight;
    const iframeScrollTop = iframeDocument.scrollTop;
    const scrollDown = event.deltaY > 0;

    // Check if the iframe is scrollable
    if (iframeScrollHeight > iframeClientHeight) {
      if (scrollDown && iframeScrollTop + iframeClientHeight < iframeScrollHeight) {
        // Scroll iframe down if not at the bottom
        iframeDocument.scrollTop += event.deltaY;
        event.preventDefault(); // Prevent default section scroll
      } else if (!scrollDown && iframeScrollTop > 0) {
        // Scroll iframe up if not at the top
        iframeDocument.scrollTop += event.deltaY;
        event.preventDefault(); // Prevent default section scroll
      }
    }
    // return false; // Prevent default scroll
  };

  return (
    <div
      className="resume-container"
      ref={resumeContainerRef}
      onWheel={handleWheelScroll}
    >
      {/* Removed Resume Title */}
      {/* <iframe
        src="/src/assets/Resume.pdf"
        // width="900vw"
        // height="1000px"
        allow="fullscreen"
        title="Resume PDF"
        ref={iframeRef}
      ></iframe> */}
      <iframe
          src={`/src/assets/Resume.pdf`}
          title="Resume"
          width="70%"
          // height="100%"
        allow="fullscreen"
        />
      
      <button className="download-button" onClick={handleDownload}>
        Download <br></br> Resume
      </button>
    </div>
  );
}

export default Resume;