'use client';
import { useState } from 'react';

export default function ContactForm() {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<boolean | null>(null);
  const [err, setErr] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setOk(null);
    setErr(null);
    const fd = new FormData(e.currentTarget);
    const payload = Object.fromEntries(fd.entries());

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.ok) throw new Error(data?.message || 'No se pudo enviar');
      setOk(true);
      if (typeof window !== 'undefined') {
        const w = window as unknown as { gtag?: (...args: unknown[]) => void };
        w.gtag?.('event', 'contact_submit');
      }
      e.currentTarget.reset();
    } catch (e: unknown) {
      const msg = e instanceof Error ? e.message : 'Error';
      setOk(false);
      setErr(msg);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          required
          placeholder="Nombre y apellido"
          aria-label="Nombre y apellido"
          className="input"
        />
        <input
          type="email"
          name="email"
          required
          placeholder="Correo electrónico"
          aria-label="Correo electrónico"
          inputMode="email"
          className="input"
        />
      </div>
      <input
        name="phone"
        placeholder="Teléfono (con código de país, ej. +595...)"
        aria-label="Teléfono"
        inputMode="tel"
        pattern="^[+0-9 ()-]{6,}$"
        className="input"
      />
      {/* Honeypot */}
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <textarea
        name="message"
        required
        minLength={10}
        placeholder="Mensaje (incluí la propiedad de interés y cualquier detalle relevante)"
        aria-label="Mensaje"
        className="input min-h-32"
      />
      <p className="text-xs text-brown-700">
        Al enviar, aceptas nuestra política de privacidad. Usaremos tus datos sólo para contactarte sobre tu consulta.
      </p>
      <button disabled={loading} className="px-5 py-3 rounded-lg bg-olive-800 text-cream-50 hover:bg-olive-700">
        {loading ? 'Enviando…' : 'Enviar'}
      </button>
      <p className="sr-only" aria-live="polite">
        {loading ? 'Enviando' : ok ? 'Enviado' : ok === false ? 'Error' : ''}
      </p>
      {ok && <p className="text-olive-800">¡Gracias! Recibimos tu mensaje y te contactaremos pronto.</p>}
      {ok === false && <p className="text-red-700">{err || 'No se pudo enviar. Intenta nuevamente más tarde.'}</p>}
    </form>
  );
}

