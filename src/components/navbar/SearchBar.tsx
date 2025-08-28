"use client";

import { useState } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SearchBar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative flex items-center">
      {/* Search Icon Button */}
      <Button
        variant="ghost"
        size="icon"
        className="p-2 md:hidden" // mobile only
        onClick={() => setOpen((prev) => !prev)}
      >
        <Search className="w-5 h-5" />
      </Button>

      {/* Desktop input always visible */}
      <div className="hidden md:block w-64 lg:w-96">
        <Input
          type="text"
          placeholder="Search..."
          className="w-full rounded-lg shadow-md focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Mobile Expandable Input */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:hidden bg-background/80">
          <div className="relative w-full max-w-md">
            <Input
              type="text"
              placeholder="Search..."
              autoFocus
              className="absolute top-8 right-0 w-full rounded-lg shadow-md focus:ring-2 focus:ring-blue-500 flex items-center justify-center"
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-8 right-0 flex items-center"
              onClick={() => setOpen(false)}
            >
              <X className="w-5 h-5" />
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
