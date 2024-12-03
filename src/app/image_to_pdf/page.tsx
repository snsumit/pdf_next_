'use client';
import Navbar from "../../components/Navbar";
import FileUpload from "../../components/FileUpload";
import { useState } from "react";

export default function ImageToPdf() {
  const [downloadLink, setDownloadLink] = useState("");

  const handleFileUpload = (response: { download_url: string; message: string }) => {
    if (!response.download_url) {
      console.error("Invalid download URL received from the server.");
      return;
    }

    
    const fullUrl = `http://127.0.0.1:5000${response.download_url}`;
    setDownloadLink(fullUrl);
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto p-6 max-w-5xl">
          {/* Hero Section */}
          <div className="text-center mt-14 mb-12">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Image to PDF Converter
            </h1>
            <p className="text-gray-600 text-lg">
              Convert your images to PDF files instantly. Support for JPG, PNG,
              and other image formats.
            </p>
          </div>

          {/* Main conversion section */}
          <div className="bg-white rounded-xl shadow-md p-8 mb-8">
            <div className="space-y-6">
              {/* Upload section */}
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-8">
                <FileUpload
                  apiUrl="http://127.0.0.1:5000/api/image-to-pdf/"
                  onFileUpload={handleFileUpload}
                  fileKey="files[]"
                />
              </div>

              {/* Download link */}
              {downloadLink && (
                <div className="mt-6 text-center">
                  <a
                    href={downloadLink}
                    className="text-blue-600 underline z-20"
                    download
                  >
                    Download Converted PDF
                  </a>
                </div>
              )}
              {/* Features section */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-4">
                  <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Multiple Formats</h3>
                  <p className="text-gray-600 text-sm">
                    Support for JPG, PNG, WEBP
                  </p>
                </div>

                <div className="text-center p-4">
                  <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-green-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Fast Conversion</h3>
                  <p className="text-gray-600 text-sm">Convert files in seconds</p>
                </div>

                <div className="text-center p-4">
                  <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-6 h-6 text-purple-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      />
                    </svg>
                  </div>
                  <h3 className="font-semibold">Secure Process</h3>
                  <p className="text-gray-600 text-sm">
                    Files deleted after conversion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>


       

      </main>
    </>
  );
}
