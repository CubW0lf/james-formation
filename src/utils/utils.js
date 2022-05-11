export const strLimit = (string, limit) => {
  const trimmed = string.substring(0, limit);
  return trimmed.substring(0, Math.min(trimmed.length, trimmed.lastIndexOf(" ")));
};

export const toPhoneNumber = (string) => {
  return string.match(/(.{1,2})/g).join(" ");
};
