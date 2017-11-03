// environment
export const inNode = typeof window === 'undefined';
export const env = inNode ? global : window;
