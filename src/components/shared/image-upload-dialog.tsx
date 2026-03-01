'use client';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import { ActionResult } from '@/lib/actions/action.type';
import { cn, simLoading } from '@/lib/utils';
import { Loader2 } from 'lucide-react';
import Image from 'next/image';
import { ReactNode, useRef, useState, useTransition } from 'react';

type ImageUploadDialogProps = {
  trigger: ReactNode;
  intialUrl?: string | null;
  title: string;
  imageClassName?: string;
  onUpload: (file: File) => Promise<ActionResult>;
};

export default function ImageUploadDialog({
  trigger,
  intialUrl,
  title,
  imageClassName,
  onUpload
}: ImageUploadDialogProps) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const inputEl = useRef<HTMLInputElement | null>(null);
  const [isPending, startTransition] = useTransition();

  const imageUrl = file ? URL.createObjectURL(file) : intialUrl;

  const handleClickUpload = () => {
    startTransition(async () => {
      if (file) await onUpload(file);
      setOpen(false);
    });
  };

  return (
    <>
      {isPending && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-100">
          <Loader2 className="animate-spin text-primary" />
        </div>
      )}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent
          className="sm:max-w-3xl"
          onInteractOutside={(e) => {
            if (isPending) e.preventDefault();
          }}
          onEscapeKeyDown={(e) => {
            if (isPending) e.preventDefault();
          }}
        >
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
          </DialogHeader>
          <div>
            <div
              className={cn(
                'relative bg-muted flex justify-center items-center overflow-hidden rounded-lg',
                imageClassName
              )}
            >
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt="User cover"
                  fill
                  className="object-cover"
                />
              )}
            </div>
          </div>
          <DialogFooter className="sm:justify-start">
            {!file ? (
              <Button
                onClick={() => {
                  inputEl.current?.click();
                }}
              >
                Choose photo
              </Button>
            ) : (
              <>
                <Button disabled={isPending} onClick={handleClickUpload}>
                  Upload
                </Button>
                <Button
                  variant="outline"
                  onClick={() => {
                    setFile(null);
                    setOpen(false);
                    if (inputEl.current) inputEl.current.value = '';
                  }}
                  disabled={isPending}
                >
                  Cancel
                </Button>
              </>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <input
        type="file"
        className="hidden"
        ref={inputEl}
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />
    </>
  );
}
