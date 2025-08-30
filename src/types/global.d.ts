export {}

declare global {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const mappls: any
  interface Window {
    initMap1?: () => void
  }
}
