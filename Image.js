import React, { useRef } from 'react';

const CopyImage = () => {
  const imageRef = useRef(null);

  // Function to copy the image URL to the clipboard
  const copyImage = () => {
    if (imageRef.current) {
      // Create a temporary input element to copy the text to the clipboard
      const tempInput = document.createElement('input');
      tempInput.value = imageRef.current.src;

      // Append the input element to the document
      document.body.appendChild(tempInput);

      // Select the input content
      tempInput.select();
      tempInput.setSelectionRange(0, 99999);

      // Copy the content to the clipboard
      document.execCommand('copy');

      // Remove the temporary input element
      document.body.removeChild(tempInput);

      alert('Image URL copied to clipboard');
    }
  };

  return (
    <div>
      {/* Image element with a ref to access its source URL */}
      <img
        ref={imageRef}
        src="https://nest.whatsmenu.page/uploads/restorants/28172315-3e1a-40d4-aca5-6628f5573b2a_cover.jpg"
        alt="Copy this image"
        width="100%"
        
       
      />
 
      {/* Button to trigger the copy function */}
    
    </div>
  );
};

export default CopyImage;
