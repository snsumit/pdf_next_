'use client';
import Navbar from "../../components/Navbar";
import FileUpload from "../../components/FileUpload";
import { useState } from "react";

export default function PdfToWord() {
  const [downloadLink, setDownloadLink] = useState("");

  const handleFileUpload = (response: { file_path?: string; message?: string }) => {
    if (response.file_path) {
      const normalizedPath = response.file_path.replace(/\\/g, '/');
      const filename = normalizedPath.split('/').pop();
      setDownloadLink(
        `http://127.0.0.1:5000/api/pdf-to-word/download/${encodeURIComponent(filename)}`
      );
    } else {
      console.error("Unexpected response structure", response);
      alert("Failed to process the file upload response. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <Navbar />
      <main className="container mx-auto p-8 max-w-4xl">
        <div className="text-center mb-12 mt-14">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">PDF to Word Converter</h1>
          <p className="text-gray-600 text-lg">
            Convert your PDF files to editable Word documents in seconds
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
          <div className="space-y-6">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="p-3 bg-blue-100 rounded-full">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
              </div>
              <span className="text-2xl text-gray-600">→</span>
              <div className="p-3 bg-blue-100 rounded-full">
                <svg
                  className="w-8 h-8 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
                  ></path>
                </svg>
              </div>
            </div>

            <FileUpload
              apiUrl="http://127.0.0.1:5000/api/pdf-to-word/"
              onFileUpload={handleFileUpload}
              fileKey="file"
            />
          </div>
        </div>

        {downloadLink && (
          <div className="mt-4 text-center">
            <a href={downloadLink} className="text-blue-600 underline" download>
              Download Converted File
            </a>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Conversion</h3>
            <p className="text-gray-600">Convert your files quickly and efficiently</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">High Quality</h3>
            <p className="text-gray-600">Maintain formatting and layout accuracy</p>
          </div>
          <div className="p-6 bg-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Secure</h3>
            <p className="text-gray-600">Your files are automatically deleted after conversion</p>
          </div>
        </div>
      </main>
    </div>
  );
}
