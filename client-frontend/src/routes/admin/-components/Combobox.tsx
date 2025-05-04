import {
  Combobox as Combo,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
  Field,
  Label,
} from '@headlessui/react';
import { Observable } from '@legendapp/state';
import { use$, useObservable } from '@legendapp/state/react';
import { GoCheckCircle } from 'react-icons/go';

type ComboboxProps<T, M> = {
  options$: Observable<T[]>;
  selected$: Observable<M extends boolean ? T[] : T | null>;
  optionKey: keyof T;
  filterKey: keyof T;
  placeholder?: string;
  label?: string;
  multiple?: M;
};

export default function Combobox<T, M>({
  options$,
  selected$,
  optionKey,
  filterKey,
  placeholder,
  label,
  multiple,
}: ComboboxProps<T, M>) {
  const query$ = useObservable('');
  const query = use$(query$);
  const selected = use$(selected$) as T | T[] | null;
  const options = use$<T[]>(options$);

  const filteredOptions =
    query === ''
      ? options
      : options.filter((option) => {
          const value = option[filterKey];
          if (typeof value !== 'string') return false;
          return value.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <Field className="h-70 w-40">
      <Label className="text-sm font-semibold">{label}</Label>
      <Combo
        multiple={!!multiple}
        // @ts-expect-error: selected type mismatch expected by headless UI component
        value={selected}
        // @ts-expect-error: selected type mismatch expected by headless UI component
        onChange={(v) => selected$.set(v)}
        onClose={() => query$.set('')}
      >
        <ComboboxInput
          className="input-primary"
          aria-label="Assignees"
          placeholder={placeholder}
          onChange={(event) => query$.set(event.target.value)}
        />
        <ComboboxOptions
          anchor="bottom start"
          className="flex h-50 w-40 flex-col rounded-b-md border-2 border-t-0 bg-white"
          static
        >
          {filteredOptions.map((opt) => (
            <ComboboxOption
              key={opt[optionKey] as string}
              value={opt}
              className="data-focus:bg-primary-light flex w-full cursor-pointer items-center justify-between gap-2 text-nowrap"
            >
              {String(opt[filterKey])}

              <GoCheckCircle
                size={15}
                className={
                  Array.isArray(selected)
                    ? selected
                        .map((selectedOpt) => selectedOpt[optionKey])
                        .includes(opt[optionKey])
                      ? ''
                      : 'invisible'
                    : selected?.[optionKey] === opt[optionKey]
                      ? ''
                      : 'invisible'
                }
              />
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </Combo>
    </Field>
  );
}
