export default function createInt8TypedArray(length, position, value) {
  // If position is invalid, throw an error
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Create a buffer of "length" bytes
  const buffer = new ArrayBuffer(length);

  // DataView lets us read/write specific types into the buffer
  const view = new DataView(buffer);

  // Write an Int8 value at the given position
  view.setInt8(position, value);

  return view;
}
