"use client";
import ThemeToggler from "@/components/theme/themeToggler";
import { copyToClipboard } from "@/utils/helpers";
import React from "react";

const Page = () => {
  const command = "npm run storybook";

  return (
    <div
      className="home"
      style={{
        maxWidth: "60rem",
        margin: "0 auto",
        padding: "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "2rem",
        }}
      >
        <h1
          style={{
            fontSize: "1.5rem",
            fontWeight: 600,
            margin: 0,
          }}
        >
          Component Documentation
        </h1>
        <ThemeToggler />
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        <p
          style={{
            color: "#4a5568",
            fontSize: "1rem",
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          Launch Storybook to explore components with interactive documentation:
        </p>

        <div
          style={{
            position: "relative",
            backgroundColor: "#f7fafc",
            borderRadius: "0.5rem",
            padding: "1rem",
            border: "1px solid #e2e8f0",
          }}
        >
          <pre
            style={{
              margin: 0,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <code
              style={{
                fontFamily: "monospace",
                fontSize: "0.875rem",
                color: "#2b6cb0",
              }}
            >
              {command}
            </code>
            <button
              onClick={() => copyToClipboard(command)}
              style={{
                padding: "0.375rem 0.75rem",
                borderRadius: "0.375rem",
                backgroundColor: "#4299e1",
                color: "white",
                border: "none",
                cursor: "pointer",
                fontSize: "0.875rem",
                fontWeight: 500,
                transition: "background-color 0.2s",
              }}
            >
              Copy
            </button>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default Page;
