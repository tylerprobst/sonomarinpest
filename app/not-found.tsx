import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-semibold uppercase tracking-wider text-brand-blue">
        404
      </p>
      <h1 className="mt-2 text-3xl font-bold text-slate-900">Page not found</h1>
      <p className="mt-3 text-slate-600">
        That page may have moved. Try our homepage or services list - or call us
        if you need help right away.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/">Go home</Button>
        <Button href="/services/" variant="outline">
          Services
        </Button>
        <Button href="/contact/" variant="green">
          Contact
        </Button>
      </div>
    </div>
  );
}
