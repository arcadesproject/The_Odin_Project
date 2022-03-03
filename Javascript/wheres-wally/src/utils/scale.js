//*** Used as a tool to get x,y values for characters on the picture ***//
//
// Then put in data/charInfo.js

// const getXY = (e) => {
//   const { target } = e;
//   console.log(target);
//   //get equivalent to offsetX, offsetY or nativeEvent.offsetX etc.
//   const rect = e.target.getBoundingClientRect();
//   var x = e.clientX - rect.left;
//   var y = e.clientY - rect.top;
//   //width of source image, scale to know how much smaller
//   const naturalWidth = target.naturalWidth;
//   const scale = getScale(target.scrollWidth, naturalWidth);

//   const scaledX = x * scale;
//   const scaledY = y * scale;

//   // console.log('x: ' + Number(scaledX.toFixed(5)), 'y: ' + Number(scaledY.toFixed(5)));
//   return {
//     x: Number(scaledX.toFixed(5)),
//     y: Number(scaledY.toFixed(5)),
//   };
// };

// const getScale = (width, naturalWidth) => {
//   return naturalWidth / width;
// };

// export default getXY;
