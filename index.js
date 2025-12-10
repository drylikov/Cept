
/**
 * Intercept all calls to `context[key]` (e.g., `console.log`).
 * From now on, when the original method would be called, `callback` is used
 * instead.
 * Calling `stop` reverts everything back to normal.
 *
 * @param {unknown} context Context object
 * @param {string|number} name Field where the original method lives
 * @param {Function} callback Interceptor
 */
export function cept(context, name, callback) {
  // @ts-expect-error: assume indexable.
  const original = context[name]

  // @ts-expect-error: assume it was a function.
  context[name] = callback

  return stop

  /**
   * `stop` function that reverts everything back to normal.
   */
  function stop() {
    // @ts-expect-error: this is fine.
    context[name] = original
  }
}
