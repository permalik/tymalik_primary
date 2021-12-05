export default function ConfirmationMessage() {
  return (
    <section>
      <p>Thanks for reaching out. I should respond within 24-48 hours.</p>

      <button onClick={() => router.replace('/contact')}></button>
    </section>
  );
}
