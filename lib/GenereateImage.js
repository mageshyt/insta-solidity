export const generateImage = (seed) => {
  return `https://avatars.dicebear.com/api/pixel-art/${seed}.svg`;
};

export const TruncateAccount = (account) => {
  return `${account.slice(0, 6)}...${account.slice(-4)}`;
};
