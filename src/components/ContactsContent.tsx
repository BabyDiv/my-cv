export default function ContactsContent() {
  return (
    <section className="flex justify-around contacts items-center">
      <div>
        <h1 className="sr-only">Contacts</h1>
        <p className="uppercase text-[var(--color-font-primary)] font-[300] passage tracking-[-0.1em]">I would</p>
        <p className="uppercase text-[var(--color-font-primary)] font-[900] tracking-[-0.1em] passage">Love to</p>
        <p className="uppercase text-[var(--color-font-primary)] font-[400] tracking-[-0.1em] passage">Hear from</p>
        <p className="uppercase text-[var(--color-font-primary)] font-[400] tracking-[-0.1em] passage">You</p>
      </div>
      <div>
        <img src="/dog.svg" alt="dog"></img>
      </div>
    </section>
  )
}