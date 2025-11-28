const parseCursor = (cursor) => {
  if (!cursor) return null;

  try {
    return JSON.parse(Buffer.from(cursor, 'base64').toString('utf-8'));
  } catch (error) {
    return null;
  }
};

export default parseCursor;
