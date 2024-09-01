import isLokiRunning from '@loki/is-loki-running'

function waitForDocumentLoaded (): Promise<void> {
  if (document.readyState === 'loading') {
    return new Promise<void>((resolve) => {
      document.addEventListener('DOMContentLoaded', () => resolve())
    })
  }

  return Promise.resolve()
}

function enablePointerEvents (): void {
  const styleElement = document.createElement('style')
  document.documentElement.appendChild(styleElement)
  styleElement.sheet?.insertRule('* {pointer-events: auto !important}')
}

export async function enableEventsForLoki (): Promise<void> {
  if (!isLokiRunning())
    return

  await waitForDocumentLoaded()
  enablePointerEvents()
}
