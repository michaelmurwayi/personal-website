import { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';

export interface TypewriterEffectProps {
  /** Tags to cycle through. Each is typed, held, deleted, then the next starts. */
  words: readonly string[];
  /** Milliseconds per character while typing. */
  typingSpeed?: number;
  /** Milliseconds per character while deleting. */
  deletingSpeed?: number;
  /** Hold time after a word is fully typed, before it starts deleting. */
  pauseBeforeDelete?: number;
  /** Brief gap after a word is deleted, before the next one is typed. */
  pauseBeforeNext?: number;
  /** Fired whenever the active (current) word index changes, e.g. so a slideshow
   * indicator can highlight the corresponding dot. */
  onActiveIndexChange?: (index: number) => void;
}

const Caret = styled('span')({
  display: 'inline-block',
  width: 3,
  height: '1em',
  marginLeft: 2,
  backgroundColor: 'currentColor',
  animation: 'caret-blink 0.9s step-end infinite',
});

// Renders `text` plus a subtle typing hint that it is still in progress.
const TypeCaret = () => <Caret aria-hidden="true" />;

/**
 * Cycles through `words` with a typewriter effect: each tag types out one
 * character at a time, pauses, deletes, then moves on to the next tag.
 */
export const TypewriterEffect = ({
  words,
  typingSpeed = 75,
  deletingSpeed = 40,
  pauseBeforeDelete = 1800,
  pauseBeforeNext = 350,
  onActiveIndexChange,
}: TypewriterEffectProps) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [deleting, setDeleting] = useState(false);

  const length = words.length;
  const currentWord = length > 0 ? words[wordIndex % length] ?? '' : '';

  // Notify the parent whenever the active word changes (slideshow indicator).
  useEffect(() => {
    onActiveIndexChange?.(wordIndex);
  }, [wordIndex, onActiveIndexChange]);

  useEffect(() => {
    if (length === 0) return;

    // Choose how long to wait before the next character change.
    let delay: number;
    if (deleting) {
      delay = text.length === 0 ? pauseBeforeNext : deletingSpeed;
    } else {
      delay = text.length === currentWord.length ? pauseBeforeDelete : typingSpeed;
}

    const timer = window.setTimeout(() => {
      if (deleting) {
        if (text.length === 0) {
          // Finished deleting the previous tag — start typing the next one.
          setDeleting(false);
          setWordIndex((wordIndex + 1) % length);
        } else {
          setText(text.slice(0, -1));
        }
      } else if (text.length < currentWord.length) {
        setText(currentWord.slice(0, text.length + 1));
      } else {
        // Finished typing — switch to delete mode after the hold duration.
        setDeleting(true);
      }
    }, delay);

    return () => window.clearTimeout(timer);
  }, [
    text,
    deleting,
    wordIndex,
    currentWord,
    length,
    typingSpeed,
    deletingSpeed,
    pauseBeforeDelete,
    pauseBeforeNext,
  ]);

  return (
    <>
      {text}
      <TypeCaret />
    </>
  );
};