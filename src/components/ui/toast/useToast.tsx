// src/components/ui/toast/useToast.tsx
"use client";

import React from "react";
import { toast } from "sonner";

type ToastVariant = "default" | "success" | "error" | "warning" | "info";

interface ShowToastOptions {
  title: React.ReactNode;
  description?: React.ReactNode;
  variant?: ToastVariant;
  duration?: number;
}

export function useToast() {
  function getVariantClass(v: ToastVariant = "default") {
    switch (v) {
      case "success":
        return "border-green-500 bg-green-50";
      case "error":
        return "border-red-500 bg-red-50";
      case "warning":
        return "border-yellow-500 bg-yellow-50";
      case "info":
        return "border-blue-500 bg-blue-50";
      default:
        return "border-gray-300 bg-white";
    }
  }

  function showToast({
    title,
    description,
    variant = "default",
    duration = 4000,
  }: ShowToastOptions) {
    toast.custom(
      (id) => (
        <div
          className={`w-full max-w-md p-4 rounded-md shadow-md border ${getVariantClass(
            variant
          )}`}
        >
          <div className="flex items-start justify-between gap-2">
            <div className="space-y-1">
              <p className="font-semibold text-sm">{title}</p>
              {description && (
                <p className="text-xs text-muted-foreground leading-tight">
                  {description}
                </p>
              )}
            </div>
            <button
              onClick={() => toast.dismiss(id)}
              className="text-xs text-gray-400 hover:text-gray-600"
            >
              ×
            </button>
          </div>
        </div>
      ),
      { duration }
    );
  }

  return { toast: showToast };
}
