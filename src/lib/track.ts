export function track(event: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined') {
    const w = window as unknown as { gtag?: (...args: unknown[]) => void };
    w.gtag?.('event', event, params || {});
  }
}
