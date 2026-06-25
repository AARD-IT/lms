/** Converts newline-separated text into the same bullet list HTML used on the original site. */
export function toUL(text) {
  const lines = text.split('\n').filter((line) => line.trim() !== '')
  return `<ul>
        ${lines.map((line) => `<li><span class="theullsddots"><i class="fa-solid fa-circle-check"></i><span>${line}</li>`).join('')}
    </ul>`
}
