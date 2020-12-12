export interface OpenAndClosableInterface<T> {
  open(): T;
  close(): T;
}

export interface RequestableInterface<T> {
  getState(): T;
}

export interface FeedableInterface<U, T> {
  feed(amount: U): T;
}