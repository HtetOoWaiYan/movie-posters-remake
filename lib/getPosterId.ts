export const getPosterId = (file_path: String) => {
  return file_path.split(".")[0].split("/")[1];
};

export const getPosterFilePath = (posterId: String) => {
  return `/${posterId}.jpg`;
};
