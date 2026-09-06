"use client";

import React, { useMemo } from "react";
import katex from "katex";
import { decodeUnicodeEscapes } from "@/lib/utils";

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

    // Data files may contain literal \uXXXX escapes — decode first.
    const decoded = decodeUnicodeEscapes(content);

    // Split text by display math ($$...$$ or \\[...\\]) first
    const blockMathRegex = /(\$\$[\s\S]*?\$\$|\\\[[\s\S]*?\\\])/g;
    const blocks = decoded.split(blockMathRegex);

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
              className="my-3 overflow-x-auto rounded-2xl border-2 border-[#4c4f69] bg-[#8839ef]/10 p-3.5 text-center text-[#4c4f69] shadow-[3px_3px_0_#4c4f69]"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <pre key={bIdx} className="my-2 rounded-xl border-2 border-[#4c4f69] bg-[#df8e1d]/15 p-2 font-mono text-xs overflow-x-auto text-[#4c4f69]">{math}</pre>;
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
              className="my-3 overflow-x-auto rounded-2xl border-2 border-[#4c4f69] bg-[#8839ef]/10 p-3.5 text-center text-[#4c4f69] shadow-[3px_3px_0_#4c4f69]"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          );
        } catch {
          return <pre key={bIdx} className="my-2 rounded-xl border-2 border-[#4c4f69] bg-[#df8e1d]/15 p-2 font-mono text-xs overflow-x-auto text-[#4c4f69]">{math}</pre>;
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
  const parts = useMemo(() => renderInlineTokens(text, "t"), [text]);

  return <>{parts}</>;
}

// Matching inline math ($...$, \(...\)), bold (**...**), italic (*...*), code (`...`)
const tokenRegex = /(\$(?:\\\$|[^$])+\$|\\\([\s\S]*?\\\)|\*\*[^*]+\*\*|\*[^*]+\*|`[^`]+`)/g;

function renderInlineTokens(text: string, keyPrefix: string): React.ReactNode[] {
  const tokens = text.split(tokenRegex);

  return tokens.map((part, idx) => {
    const key = `${keyPrefix}-${idx}`;
    if (!part) return null;

    // Inline math: $...$
    if (part.startsWith("$") && part.endsWith("$") && part.length > 2 && !part.startsWith("$$")) {
      const math = part.slice(1, -1).trim();
      try {
        const html = katex.renderToString(math, { displayMode: false, throwOnError: false });
        return (
          <span
            key={key}
            className="inline-block rounded-lg border border-[#8839ef]/30 bg-[#8839ef]/10 px-1.5 text-[#4c4f69]"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch {
        return <code key={key} className="rounded-lg border-2 border-[#4c4f69] bg-[#df8e1d]/15 px-1 text-xs text-[#4c4f69]">{math}</code>;
      }
    }

    // Inline math: \(...\)
    if (part.startsWith("\\(") && part.endsWith("\\)")) {
      const math = part.slice(2, -2).trim();
      try {
        const html = katex.renderToString(math, { displayMode: false, throwOnError: false });
        return (
          <span
            key={key}
            className="inline-block rounded-lg border border-[#8839ef]/30 bg-[#8839ef]/10 px-1.5 text-[#4c4f69]"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        );
      } catch {
        return <code key={key} className="rounded-lg border-2 border-[#4c4f69] bg-[#df8e1d]/15 px-1 text-xs text-[#4c4f69]">{math}</code>;
      }
    }

    // Bold: **...** (recurse so math inside bold also renders)
    if (part.startsWith("**") && part.endsWith("**") && part.length >= 4) {
      return (
        <strong key={key} className="font-bold text-[#8839ef]">
          {renderInlineTokens(part.slice(2, -2), `${key}b`)}
        </strong>
      );
    }

    // Italic: *...* (recurse for nested math)
    if (part.startsWith("*") && part.endsWith("*") && part.length >= 2) {
      return (
        <em key={key} className="italic font-medium text-[#ea76cb]">
          {renderInlineTokens(part.slice(1, -1), `${key}i`)}
        </em>
      );
    }

    // Inline code: `...` (kept literal — no math inside code)
    if (part.startsWith("`") && part.endsWith("`") && part.length >= 2) {
      return (
        <code
          key={key}
          className="rounded-lg border-2 border-[#4c4f69] bg-[#e6e9ef] px-1.5 py-0.5 text-[0.84em] font-bold text-[#8839ef]"
        >
          {part.slice(1, -1)}
        </code>
      );
    }

    return <span key={key}>{part}</span>;
  });
}
