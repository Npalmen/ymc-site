import { cn } from "@/lib/cn";

const fieldBase =
  "w-full min-h-12 rounded-[var(--radius-md)] border border-border bg-surface px-4 py-2.5 text-body text-ink shadow-[var(--shadow-subtle)] transition-[border-color,box-shadow] duration-[var(--motion-fast)] placeholder:text-ink-subtle hover:border-border-strong focus-visible:border-focus focus-visible:shadow-none focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-60 motion-reduce:transition-none";

type FieldProps = {
  id: string;
  label: string;
  className?: string;
  helperText?: string;
  error?: string;
  appearance?: "label" | "plain";
  children: React.ReactNode;
};

export function Field({
  id,
  label,
  helperText,
  error,
  className,
  appearance = "label",
  children,
}: FieldProps) {
  return (
    <div className={cn("flex flex-col gap-1.5", className)}>
      <label
        htmlFor={id}
        className={
          appearance === "plain" ? "text-body-sm font-medium text-ink" : "text-label text-ink-muted"
        }
      >
        {label}
      </label>
      {children}
      {error ? (
        <p className="text-body-sm text-error" role="alert">
          {error}
        </p>
      ) : helperText ? (
        <p className="text-body-sm text-ink-subtle">{helperText}</p>
      ) : null}
    </div>
  );
}

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & { hasError?: boolean };

export function Input({ className, hasError, ...props }: InputProps) {
  return (
    <input
      className={cn(fieldBase, hasError && "border-error focus-visible:border-error", className)}
      {...props}
    />
  );
}

type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & { hasError?: boolean };

export function Textarea({ className, hasError, ...props }: TextareaProps) {
  return (
    <textarea
      className={cn(
        fieldBase,
        "min-h-28 resize-y py-3",
        hasError && "border-error focus-visible:border-error",
        className,
      )}
      {...props}
    />
  );
}

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & { hasError?: boolean };

export function Select({ className, hasError, children, ...props }: SelectProps) {
  return (
    <select
      className={cn(
        fieldBase,
        "select-chevron",
        hasError && "border-error focus-visible:border-error",
        className,
      )}
      {...props}
    >
      {children}
    </select>
  );
}

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & { label: string };

export function Checkbox({ label, className, id, ...props }: CheckboxProps) {
  const inputId = id ?? props.name;
  return (
    <label className={cn("flex min-h-11 cursor-pointer items-start gap-3", className)}>
      <input
        type="checkbox"
        id={inputId}
        className="mt-1 size-4 shrink-0 rounded-[var(--radius-sm)] border border-border-strong accent-brand"
        {...props}
      />
      <span className="text-body-sm text-ink">{label}</span>
    </label>
  );
}
