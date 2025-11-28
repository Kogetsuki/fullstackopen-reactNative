const serializeCursor = (payload) =>
  Buffer.from(JSON.stringify(payload)).toString('base64');

export default serializeCursor;
