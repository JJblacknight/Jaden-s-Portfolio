import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-primary-foreground p-4 text-center">
      <div className="flex flex-col items-center justify-between gap-4">
        <p className="text-sm text-primary">
          &copy; {new Date().getFullYear()} Jaden Frimpong. All rights reserved.
        </p>
        <div className="flex gap-4">
          <a href="https://github.com/JJblacknight" target="_blank" rel="noopener noreferrer" className="text-primary">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/jaden-frimpong-146b86213/" target="_blank" rel="noopener noreferrer" className="text-primary">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
