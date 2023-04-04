export {};

declare global {
  /**
   * Now declare things that go in the global namespace,
   * or augment existing declarations in the global namespace.
   */
  interface Post {
    id?: string;
    title: string;
    content: string;
    ownerId?: string;
    ownerName?: string;
    createdAt?: string;
  }

}