import type {UseFormRegisterReturn} from "react-hook-form";
import type {ChangeEvent} from "react";

type SmartTextareaProps = {
    id: string;
    label: string;
    placeholder?: string;
    rows?: number;
    register: UseFormRegisterReturn;
    error?: string;
    backendError?: string;
    onInputReset?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
    className?: string;
};

export const SmartTextArea = ({
                                  id,
                                  label,
                                  placeholder,
                                  rows = 4,
                                  register,
                                  error,
                                  backendError,
                                  onInputReset,
                                  className = "",
                              }: SmartTextareaProps) => {

    const showError = error || backendError;

    return (
        <div className="flex flex-col gap-1 w-full">
            <label htmlFor={id} className="font-semibold text-sm text-slate-800 dark:text-sky-100">
                {label}
            </label>
            <textarea
                id={id}
                placeholder={placeholder}
                rows={rows}
                {...register}
                onChange={(e) => {
                    register.onChange(e);
                    onInputReset?.(e)
                }}
                className={`px-3 py-2 rounded-md border outline-none border-zinc-300 dark:border-slate-600 bg-white dark:bg-slate-900 
                    ${showError ? "border-red-600 dark:border-red-400" : "border-slate-700"} 
                    focus:ring-2 focus:ring-customBlue ${className}`}
            />
            <div className="min-h-[1rem]">
                {showError && (
                    <p
                        className={`text-sm font-semibold text-red-600 dark:text-red-400 mt-0`}>
                        *{backendError || error}
                    </p>
                )}
            </div>
        </div>
    )
}