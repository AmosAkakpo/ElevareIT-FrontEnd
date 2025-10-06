import React, { useState, useEffect } from "react";

const TypewriterText = ({
  words = ["creative", "hardworking", "performing"], // array of words
  prefix = "We are very ", // optional static text before typing
  textColor = "text-gray-100", // tailwind text color
  cursorColor = "border-orange-500", // tailwind border color for cursor
  textSize = "text-2xl", // tailwind size
  typingSpeed = 100, // speed per character (ms)
  deletingSpeed = 50, // speed per character when deleting (ms)
  pauseTime = 1000, // pause after full word (ms)
}) => {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? deletingSpeed : typingSpeed;

    const handleTyping = () => {
      setText((prev) =>
        isDeleting
          ? currentWord.substring(0, prev.length - 1)
          : currentWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    const timer = setTimeout(handleTyping, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex]);

  return (
    <p className={`${textSize} font-semibold ${textColor}`}>
      {prefix && <span>{prefix}</span>}
      <span className={`border-r-[0.12em] ${cursorColor} pr-1 animate-pulse`}>
        {text}
      </span>
    </p>
  );
};

export default TypewriterText;
