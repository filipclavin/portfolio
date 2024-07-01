import React, { memo, useEffect, useRef, useState } from "react";
import { Container } from "./style";

interface TypewriterProps extends React.HTMLAttributes<HTMLSpanElement> {
  texts: string[];
  msBetweenChars: number;
  msBetweenTexts: number;
}

let intervalHandle: NodeJS.Timeout;
let timeoutHandle: NodeJS.Timeout;
const Typewriter = ({
  texts,
  msBetweenChars,
  msBetweenTexts,
  ...htmlProps
}: TypewriterProps) => {
  const [displayText, setDisplayText] = useState<string>("");
  const [textIndex, setTextIndex] = useState<number>(0);

  const ref = useRef<HTMLSpanElement>(null);

  const targetText =
    texts[textIndex] && texts[textIndex].replace(/<[^>]*>/g, "");

  useEffect(() => {
    clearInterval(intervalHandle);

    if (!targetText) return;

    intervalHandle = setInterval(() => {
      setDisplayText((prev) => {
        if (prev === targetText) {
          clearInterval(intervalHandle);
          clearTimeout(timeoutHandle);
          ref.current?.classList.add("typing");

          timeoutHandle = setTimeout(() => {
            if (texts[textIndex + 1] !== undefined) {
              setTextIndex(textIndex + 1);
            }
          }, msBetweenTexts);

          return texts[textIndex];
        }

        if (prev === texts[textIndex - 1]) {
          return texts[textIndex - 1].replace(/<[^>]*>/g, "");
        }

        ref.current?.classList.remove("typing");

        if (targetText.startsWith(prev)) {
          return prev + targetText[prev.length];
        }

        return prev.slice(0, -1);
      });
    }, msBetweenChars);

    return () => {
      clearInterval(intervalHandle);
    };
  }, [textIndex, texts, msBetweenChars, msBetweenTexts]);

  const typing = displayText != texts[textIndex];
  const done = textIndex === texts.length - 1 && !typing;

  return (
    <Container
      dangerouslySetInnerHTML={{
        __html: displayText,
      }}
      {...htmlProps}
      className={
        htmlProps.className + (typing ? " typing" : done ? " done" : "")
      }
    />
  );
};

export default memo(Typewriter);
