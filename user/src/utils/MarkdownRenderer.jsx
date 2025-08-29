import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

const MarkdownRenderer = ({ response }) => {
  return (
    <div className="p-2 markdown-response w-full max-w-full overflow-hidden">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          code({ className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return match ? (
              <div className="overflow-x-auto rounded-lg">
                <SyntaxHighlighter
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                  className="text-sm"
                >
                  {String(children).replace(/\n$/, "")}
                </SyntaxHighlighter>
              </div>
            ) : (
              <code className="bg-gray-200 px-1 py-0.5 rounded text-sm break-words whitespace-pre-wrap">
                {children}
              </code>
            );
          },
          p({ children }) {
            return (
              <p className="break-words whitespace-pre-wrap">{children}</p>
            );
          },
          a({ href, children }) {
            return (
              <a
                href={href}
                className="text-blue-400 underline break-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                {children}
              </a>
            );
          },
          table({ children }) {
            return (
              <div className="overflow-x-auto">
                <table className="table-auto border-collapse">{children}</table>
              </div>
            );
          },
        }}
      >
        {response}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
