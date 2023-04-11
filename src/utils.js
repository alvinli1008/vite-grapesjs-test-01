const getPngHtml = (png) => {
  const img = new Image();
  img.src = png;
  img.style.width = "100%";
  img.style.objectFit = "cover";
  img.style.aspectRatio = "1.81";
  return img.outerHTML;
};
export { getPngHtml };
