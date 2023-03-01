import React from 'react'
// import "./Navbar"

export const DownloadButton = props => {
  const downloadFile = () => {
    window.location.href = "https://docs.google.com/document/d/1S0qEDqOw00y6Uni-snqjItDrg5v3aIdPtVHcnm3X_To/edit"
  }
  return (
            <button  id = "download"onClick={downloadFile}>Download Resume</button>
  )
}
