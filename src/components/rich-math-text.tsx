"use client";

import React, { useMemo } from "react";
import katex from "katex";

interface RichMathTextProps {
  content: string;
  className?: string;
}

/**
 * Safely renders text with KaTeX formulas ($...$, \(...\), $$...$$) and markdown bold/italic/code.
 */
export function RichMathText({ content, className = "" }: RichMathTextProps) {
  const renderedContent = useMemo(() => {
    if (!content) return null;

    // Split text by display math ($$...$$ or \\[...\\]) first
    const blockMathRegex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\])/g;
    const blocks = content.split(blockMathRegex);

    return blocks.map((block, bIdx) => {
      if (!block) return null;

      // Check if display math $$...$$
      if (block.startsWith("$$") && block.endsWith("$$") && block.length >= 4) {
        const math = block.slice(2, -2).trim();
        try {
          const html = katex.renderToString(math, { displayMode: true, throwOnError: false });
          return (
            <div
              key={bIdx}
              className="my-3 overflow-x-auto rounded border border-white/10 bg-black/40 p-2.5 text-center text-[#f2a89e]"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <pre key={bIdx} className="my-2 text-amber-300 font-mono text-xs overflow-x-auto">{math}</pre>;
        }
      }

      // Check if display math \[...\]
      if (block.startsWith("\\[") && block.endsWith("\\]") && block.length >= 4) {
        const math = block.slice(2, -2).trim();
        try {
          const html = katex.renderToString(math, { displayMode: true, throwOnError: false });
          return (
            <div
              key={bIdx}
              className="my-3 overflow-x-auto rounded border border-white/10 bg-black/40 p-2.5 text-center text-[#f2a89e]"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <pre key={bIdx} className="my-2 text-amber-300 font-mono text-xs overflow-x-auto">{math}</pre>;
        }
      }

      // Inside normal block: split by paragraphs
      const paragraphs = block.split(/\n\n+/);

      return (
        <React.Fragment key={bIdx}>
          {paragraphs.map((para, pIdx) => {
            const lines = para.split("\n");
            return (
              <p key={pIdx} className="mb-2.5 last:mb-0 leading-relaxed text-inherit">
                {lines.map((line, lIdx) => (
                  <React.Fragment key={lIdx}>
                    {lIdx > 0 && <br />}
                    <InlineFormattedText text={line} />
                  </React.Fragment>
                ))}
              </p>
            );
          })}
        </React.Fragment>
      );
    });
  }, [content]);

  return <div className={`rich-math-content ${className}`}>{renderedContent}</div>;
}

function InlineFormattedText({ text }: { text: string }) {
  const parts = useMemo(() => {
    // Matching inline math ($...$, \(...\)), bold (**...**), italic (*...*), code (`...`)
    const tokenRegex = /(\$(?:\\\$|[^$])+\$|\\\([\s\S]*?\\\)|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;
    const tokens = text.split(tokenRegex);

    return tokens.map((part, idx) => {
      if (!part) return null;

      // Inline math: $...$
      if (part.startsWith("$") && part.endsWith("$") && part.length > 2 && !part.startsWith("$$")) {
        const math = part.slice(1, -1).trim();
        try {
          const html = katex.renderToString(math, { displayMode: false, throwOnError: false });
          return (
            <span
              key={idx}
              className="inline-block px-1 text-[#f2a89e]"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <code key={idx} className="font-mono text-xs text-amber-300">{math}</code>;
        }
      }

      // Inline math: \(...\)
      if (part.startsWith("\\(") && part.endsWith("\\)")) {
        const math = part.slice(2, -2).trim();
        try {
          const html = katex.renderToString(math, { displayMode: false, throwOnError: false });
          return (
            <span
              key={idx}
              className="inline-block px-1 text-[#f2a89e]"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <code key={idx} className="font-mono text-xs text-amber-300">{math}</code>;
        }
      }

      // Bold: **...**
      if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
        return (
          <strong key={idx} className="font-semibold text-[#f0e9df]">
            {part.slice(2, -2)}
          </strong>
        );
      }

      // Italic: *...*
      if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
        return (
          <em key={idx} className="italic text-[#d6cec3]">
            {part.slice(1, -1)}
          </em>
        );
      }

      // Inline code: `...`
      if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
        return (
          <code
            key={idx}
            className="rounded border border-white/15 bg-white/[0.06] px-1.5 py-0.5 font-mono text-[0.84em] text-[#38bdf8]"
          >
            {part.slice(1, -1)}
          </code>
        );
      }

      return <span key={idx}>{part}</span>;
    });
  }, [text]);

  return <>{parts}</>;
}
