export default function Input({
  register,
  name,
  label,
  validation,
  error,
  placeholder,
  password,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name}>{label}</label>
      <input
        {...register(name, validation)}
        type="text"
        placeholder={placeholder}
        className="p-2 border focus:outline-none rounded-md focus-within:border-black"
      />

      {error && <p className="text-red-500 text-sm">{error.message}</p>}
    </div>
  );
}
