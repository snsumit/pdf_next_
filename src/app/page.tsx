'use client'
import Navbar from "../components/Navbar";
import { Button } from "@/components/ui/Button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-gray-50 pt-16"> {/* Added pt-16 for navbar height */}
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Welcome to UtilityTool
            </h1>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Convert your files easily with our professional tools
            </p>
            <Button 
              variant="secondary"
              className="font-semibold text-blue-600 px-8 py-3"
              onClick={() => router.push('/pdf_to_word')}
            >
              Get Started
            </Button>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Feature Card 1 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  PDF to Word
                </h2>
                <p className="text-gray-600">
                  Convert PDF documents to editable Word files with high accuracy.
                </p>
              </div>

              {/* Feature Card 2 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Image to PDF
                </h2>
                <p className="text-gray-600">
                  Transform your images into professional PDF documents instantly.
                </p>
              </div>

              {/* Feature Card 3 */}
              <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                <h2 className="text-xl font-semibold mb-4 text-gray-800">
                  Easy to Use
                </h2>
                <p className="text-gray-600">
                  Simple and intuitive interface for quick file conversions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}