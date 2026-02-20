export function ContactForm() {
  return (
    <form className="card mt-6 grid gap-4" aria-label="Kontaktní formulář">
      <label className="text-sm font-medium">Jméno<input className="mt-1 w-full rounded-lg border border-brand-border p-3" required /></label>
      <label className="text-sm font-medium">E-mail<input type="email" className="mt-1 w-full rounded-lg border border-brand-border p-3" required /></label>
      <label className="text-sm font-medium">Telefon<input className="mt-1 w-full rounded-lg border border-brand-border p-3" required /></label>
      <label className="text-sm font-medium">Typ poptávky
        <select className="mt-1 w-full rounded-lg border border-brand-border p-3" defaultValue="Terasa">
          <option>Terasa</option><option>Fasáda</option><option>WPC</option><option>Sauna</option><option>Interiér</option><option>Jiné</option>
        </select>
      </label>
      <label className="text-sm font-medium">Město / místo realizace (volitelné)<input className="mt-1 w-full rounded-lg border border-brand-border p-3" /></label>
      <label className="text-sm font-medium">Zpráva<textarea className="mt-1 min-h-28 w-full rounded-lg border border-brand-border p-3" required /></label>
      <p className="text-sm text-slate-600">Ceny připravujeme individuálně dle typu materiálu, rozměrů a rozsahu realizace.</p>
      <button type="submit" className="btn-primary w-fit">Odeslat poptávku</button>
    </form>
  );
}
