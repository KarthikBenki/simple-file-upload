import React, { useState } from 'react'

const AddAttachments = () => {

    const [attachments, setAttachments] = useState([])

   const handleAttachmentClick = (event) =>{
        event.preventDefault();
        const fileInput = document.createElement('input');
        fileInput.type = "file";
        fileInput.multiple = false;
        fileInput.onchange  = handleAttachmentChange;
        fileInput.click()
    }

    const handleAttachmentChange = (event) => {
        console.log(event);
        const files = event.target.files;
        setAttachments([...attachments,...files])
        console.log(typeof files);
        console.log(files);
        console.log(files[0].name);
    }

  return (
    <div>
        <button onClick={handleAttachmentClick}>Add Attchments</button>
        <ul>
        {attachments.map(attachment=>{
            return <li key={attachment}>{attachment.name}</li>
        })}
        </ul>
    </div>
  )
}

export default AddAttachments