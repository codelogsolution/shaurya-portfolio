import { useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_\\/[]{}—=+*^?#";

type ScrambleTextProps = {
  words: string[];
  interval?: number;
  className?: string;
};

/**
 * Text-scramble effect — cycles through words with a
 * decrypt-style character shuffle (the "hacker reveal" trend).
 */
const ScrambleText = ({
  words,
  interval = 3200,
  className,
}: ScrambleTextProps) => {
  const [text, setText] = useState(words[0] ?? "");
  const textRef = useRef(words[0] ?? "");

  useEffect(() => {
    let raf = 0;
    let timeout: ReturnType<typeof setTimeout>;

    const scrambleTo = (next: string) => {
      const previous = textRef.current;
      const length = Math.max(previous.length, next.length);
      const start = performance.now();
      const duration = 750;

      const step = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        let output = "";

        for (let i = 0; i < length; i += 1) {
          if (i < progress * length) {
            output += next[i] ?? "";
          } else {
            output += GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          }
        }

        setText(output);

        if (progress < 1) {
          raf = requestAnimationFrame(step);
        } else {
          textRef.current = next;
          setText(next);
        }
      };

      raf = requestAnimationFrame(step);
    };

    const schedule = () => {
      timeout = setTimeout(() => {
        const current = words.indexOf(textRef.current);
        const next = words[(current + 1) % words.length];
        scrambleTo(next);
        schedule();
      }, interval);
    };

    schedule();

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(raf);
    };
  }, [words, interval]);

  return <span className={className}>{text}</span>;
};

export default ScrambleText;