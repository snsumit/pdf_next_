'use client'
import { useState } from "react";
import { Button } from "./ui/Button";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer" 
            onClick={() => router.push('/')}
          >
            <span className="text-2xl font-bold text-gray-800">
              Utility<span className="text-blue-500">Tool</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Button
              variant="ghost"
              className="font-medium"
              onClick={() => router.push('/')}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="font-medium"
              onClick={() => router.push('/pdf_to_word')}
            >
              PDF to Word
            </Button>
            <Button
              variant="ghost"
              className="font-medium"
              onClick={() => router.push('/image_to_pdf')}
            >
              Image to PDF
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" className="p-2" onClick={toggleMobileMenu}>
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col items-center space-y-1 mt-2">
            <Button
              variant="ghost"
              className="font-medium"
              onClick={() => {
                router.push('/');
                setIsMobileMenuOpen(false);
              }}
            >
              Home
            </Button>
            <Button
              variant="ghost"
              className="font-medium"
              onClick={() => {
                router.push('/pdf_to_word');
                setIsMobileMenuOpen(false);
              }}
            >
              PDF to Word
            </Button>
            <Button
              variant="ghost"
              className="font-medium"
              onClick={() => {
                router.push('/image_to_pdf');
                setIsMobileMenuOpen(false);
              }}
            >
              Image to PDF
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}