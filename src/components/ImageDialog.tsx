import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { Button } from "./ui/button";

export function ImageDialog({ src, alt }: { src: string; alt: string }) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <img
          src={src}
          alt={alt}
          className="max-h-[50vh] object-contain mx-auto"
        />
      </DialogTrigger>
      <DialogContent className="max-w-[80vw] max-h-[90vh] w-auto">
        <img src={src} alt={alt} />
        <DialogFooter>
          <Button asChild>
            <a
              href="/Green_Building_Solutions_-_Broschüre_2024.pdf"
              target="_blank"
            >
              PDF Download
            </a>
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
