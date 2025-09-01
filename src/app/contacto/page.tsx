import ContactForm from '@/components/forms/ContactForm';
import { SectionHeader } from '@/components/custom/SectionHeader';
import { InfoPanel } from '@/components/custom/InfoPanel';

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-10 space-y-8">
      <SectionHeader title="Contacto" subtitle="Dejanos tu consulta y te respondemos a la brevedad." />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2">
          <ContactForm />
        </div>
        <InfoPanel>
          <p className="mb-2"><b>Email:</b> <a className="underline hover:text-olive-800" href="mailto:marketing@kosvaspy.com">marketing@kosvaspy.com</a></p>
          <p className="mb-2"><b>WhatsApp:</b> +595 981 179 689</p>
          <p className="text-sm text-brown-700 mb-4">Horario: Lun–Vie 9:00–18:00 (GMT-4)</p>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/kosvaspy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-olive-800"
            >
              Instagram
            </a>
            <span className="text-cream-300">|</span>
            <a
              href="https://www.facebook.com/profile.php?id=61565202375719"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-olive-800"
            >
              Facebook
            </a>
          </div>
        </InfoPanel>
      </div>
    </div>
  );
}
