"use client";

import React, { useEffect, useRef } from "react";
import Prism from "prismjs";
import PrismJsx from "prismjs/components/prism-jsx.min";
import "prismjs/themes/prism-tomorrow.css";
import ClipboardJS from "clipboard";

export default function Code(props) {
  const lang = props.language;
  const code = props.code;
  const file = props.file;

  const codeRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  useEffect(() => {
    const clipboard = new ClipboardJS(buttonRef.current, {
      target: () => codeRef.current,
    });

    return () => {
      clipboard.destroy();
    };
  }, []);

  return (
    <div className="my-8 mx-auto max-w-[830px] px-4 pb-2 Code bg-[#09090a] rounded">
      <div className="text-[#787878] flex justify-between items-center py-2 text-lg px-2 mb-0">
        <span className="mb-0">{file}</span>
        <div
          ref={buttonRef}
          data-clipboard-text={code}
          className="mb-0 cursor-pointer p-2 rounded hover:bg-[#1a1a1c] border-[1px] border-[hsla(0,0%,56%,.2)]"
        >
          <svg
            className="mb-0"
            width="30"
            height="30"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
          >
            <rect
              width="30"
              height="30"
              stroke="none"
              fill="#787878"
              opacity="0"
            />
            <g transform="matrix(1.43 0 0 1.43 12 12)">
              <path
                style={{
                  stroke: "none",
                  strokeWidth: 1,
                  strokeDasharray: "none",
                  strokeLinecap: "butt",
                  strokeDashoffset: 0,
                  strokeLinejoin: "miter",
                  strokeMiterlimit: 4,
                  fill: "#787878",
                  fillRule: "nonzero",
                  opacity: 1,
                }}
                transform="translate(-8, -7.5)"
                d="M 2.5 1 C 1.675781 1 1 1.675781 1 2.5 L 1 10.5 C 1 11.324219 1.675781 12 2.5 12 L 4 12 L 4 12.5 C 4 13.324219 4.675781 14 5.5 14 L 13.5 14 C 14.324219 14 15 13.324219 15 12.5 L 15 4.5 C 15 3.675781 14.324219 3 13.5 3 L 12 3 L 12 2.5 C 12 1.675781 11.324219 1 10.5 1 Z M 2.5 2 L 10.5 2 C 10.78125 2 11 2.21875 11 2.5 L 11 10.5 C 11 10.78125 10.78125 11 10.5 11 L 2.5 11 C 2.21875 11 2 10.78125 2 10.5 L 2 2.5 C 2 2.21875 2.21875 2 2.5 2 Z M 12 4 L 13.5 4 C 13.78125 4 14 4.21875 14 4.5 L 14 12.5 C 14 12.78125 13.78125 13 13.5 13 L 5.5 13 C 5.21875 13 5 12.78125 5 12.5 L 5 12 L 10.5 12 C 11.324219 12 12 11.324219 12 10.5 Z"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      </div>
      <pre className="rounded" style={{ marginTop: 0 + "px" }}>
        <code ref={codeRef} className={`language-${lang}`}>
          {code}
        </code>
      </pre>
    </div>
  );
}
