/** Reusable, layout-neutral entrance animation for existing page elements. */
export function revealProps(delay = 0) {
  return {
    initial: { opacity: 0, y: 18 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.16 },
    transition: {
      duration: 0.55,
      delay,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  };
}
