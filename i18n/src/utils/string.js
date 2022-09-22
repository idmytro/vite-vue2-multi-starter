export function filename(path) {
  return path
    .split(/(\\|\/)/g)
    .pop()
    .replace(/\.[^/.]+$/, '');
}
