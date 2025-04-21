"use client";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

type CalendlyModalProps = {
  trigger: React.ReactNode;
};

export const CalendlyModal = ({ trigger }: CalendlyModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-4xl w-full h-[700px] p-0 overflow-hidden">
        <iframe
          src="https://calendly.com/tunombre/llamada-30-min"
          width="100%"
          height="100%"
          frameBorder="0"
          title="Agendar llamada"
        />
      </DialogContent>
    </Dialog>
  );
};
