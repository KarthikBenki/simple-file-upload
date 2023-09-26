import React from 'react'

const AddAttachments = () => {

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
        console.log(files);
        console.log(files[0].name);
    }

  return (
    <div>
        <button onClick={handleAttachmentClick}>Add Attchments</button>
    </div>
  )
}

export default AddAttachments