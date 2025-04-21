import React from 'react';

const FormPage = () => {
  const googleFormEmbedCode = `
    <iframe 
      src="https://docs.google.com/forms/d/e/1FAIpQLScWebrU7OIMYOdmxiyF30iajcoywVDxzVspDpSWCAvqVokUcw/viewform?embedded=true"
      width="100%" 
      height="923" 
      frameborder="0" 
      marginheight="0" 
      marginwidth="0">読み込んでいます…</iframe>
  `;

  return (
    <div className="flex justify-center mt-10">
      <div
        className="w-full max-w-3xl border-4 border-gray-300 shadow-lg p-4 rounded-lg bg-white"
        dangerouslySetInnerHTML={{ __html: googleFormEmbedCode }}
      />
    </div>
  );
};

export default FormPage;
