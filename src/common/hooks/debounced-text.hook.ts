import * as React from 'react';

export const useDebouncedText = (text: string, delay: number) => {
  const [debouncedText, setDebouncedText] = React.useState<string>(text);

  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedText(text);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [text, delay]);

  return { debouncedText };
};
