import { useState } from "react";
import axios from "axios";
import { Input } from "./ui/Input";
import { Button } from "./ui/Button";
import { Alert } from "./ui/Alert";

export default function FileUpload({
  apiUrl,
  onFileUpload,
  fileKey,
}: {
  apiUrl: string;
  onFileUpload: (response: any) => void;
  fileKey: string;
}) {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      setMessage(""); 
    }
  };

  // Handle file upload
  const handleUpload = async () => {
    if (!file) {
      setMessage("Please select a file to upload.");
      setIsSuccess(false);
      return;
    }

    const formData = new FormData();
    formData.append(fileKey, file); 

    try {
      setUploading(true);
      setMessage(""); 
      setIsSuccess(false);

      
      const response = await axios.post(apiUrl, formData);

      if (response.data && response.data.message) {
       
        onFileUpload(response.data);

       
        setMessage("Upload successful!");
        setIsSuccess(true);
      } else {
        throw new Error("Invalid response from server.");
      }
    } catch (error: any) {
     
      setMessage(
        `Error: ${error.response?.data?.message || "Failed to upload file"}`
      );
      setIsSuccess(false);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-4">
     
      <Input type="file" onChange={handleFileChange} />

     
      <Button onClick={handleUpload} disabled={uploading}>
        {uploading ? "Uploading..." : "Upload"}
      </Button>

     
      {message && (
        <Alert variant={isSuccess ? "success" : "error"}>{message}</Alert>
      )}
    </div>
  );
}
