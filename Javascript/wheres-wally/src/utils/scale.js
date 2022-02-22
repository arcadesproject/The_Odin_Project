const getXY = (e) => {
  const { target } = e;
  console.log(target);
  //get equivalent to offsetX, offsetY or nativeEvent.offsetX etc.
  const rect = e.target.getBoundingClientRect();
  var x = e.clientX - rect.left;
  var y = e.clientY - rect.top;
  //width of source image, scale to know how much smaller
  const naturalWidth = target.naturalWidth;
  const scale = getScale(target.scrollWidth, naturalWidth);
  //get middle point to know how much to add to values
  //   const center = getCenter(target.scrollWidth, target.scrollHeight);
  //   const relX = x - center.x;
  //   const relY = y - center.y;
  //   //get scaled value
  //   const scaledX = relX * scale;
  //   const scaledY = relY * scale;
  const scaledX = x * scale;
  const scaledY = y * scale;
  //add back to middle points for true value
  //   console.log(Number((scaledX + center.x).toFixed(5)), Number((scaledY + center.y).toFixed(5)));
  // console.log('x: ' + Number(scaledX.toFixed(5)), 'y: ' + Number(scaledY.toFixed(5)));
  return {
    x: Number(scaledX.toFixed(5)),
    y: Number(scaledY.toFixed(5)),
  };
};

const getScale = (width, naturalWidth) => {
  return naturalWidth / width;
};

// const getCenter = (width, height) => {
//   const left = width / 2;
//   const top = height / 2;
//   return { x: left, y: top };
// };

export default getXY;
