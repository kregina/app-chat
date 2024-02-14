export const isMessageFromCurrentUser =
  (currentUserId: number | undefined, messageFromUserId: number) =>
    currentUserId === messageFromUserId;