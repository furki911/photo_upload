export function dataURLtoFile(dataURL, fileName) {
  return new Promise((resolve, reject) => {
    // Convert the data URL to a Blob
    const blob = dataURLtoBlob(dataURL);

    // Create a File object from the Blob
    const file = new File([blob], fileName || "image.png", { type: blob.type });

    resolve(file);
  });
}

export const getFileExtensionFromBase64 = (base64String) =>
  (base64String?.match(/^data:[a-zA-Z0-9]+\/([a-zA-Z0-9-.+]+);base64,/) ||
    [])[1] || null;

export function dataURLtoBlob(dataURL) {
  const arr = dataURL.split(",");
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while (n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new Blob([u8arr], { type: mime });
}
