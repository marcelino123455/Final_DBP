// src/imageLoader.js

function importAll(r) {
    return r.keys().map(r);
  }
  
  const images = importAll(require.context('./static', false, /\.(jpg|jpeg|png|gif|svg)$/));
  
  export default images;
  