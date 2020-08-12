export type EventWithTarget<T = EventTarget> = Event & {
  target: T | null;
};
