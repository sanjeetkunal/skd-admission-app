// src/forms/ApplyForm.tsx
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  countryCode: string;
  mobile: string;
  state: string;
  city: string;
  program: string;
  course: string;
  consent: boolean;
};

const STATES = ["Rajasthan", "Haryana", "Punjab", "Delhi", "Gujarat"];
const CITIES = ["Hanumangarh", "Jaipur", "Bikaner", "Jodhpur", "Udaipur"];
const PROGRAMS = ["UG Programs", "PG Programs", "Diploma", "Certificate"];
const COURSES = ["BBA", "BCA", "B.Sc.", "MBA", "MCA", "M.Sc."];

export default function ApplyForm() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>({
    defaultValues: { countryCode: "+91" }
  });

  const onSubmit = (data: FormValues) => {
    console.log("Apply:", data);
    // TODO: send to backend
  };

  const baseField =
    "w-full h-10 rounded border border-slate-300 bg-white px-3 text-[14px] outline-none " +
    "placeholder:text-slate-500 focus:border-[#0b3c86] focus:ring-2 focus:ring-[#0b3c86]/20";

  const baseSelect =
    "w-full h-10 rounded border border-slate-300 bg-white px-3 text-[14px] outline-none " +
    "focus:border-[#0b3c86] focus:ring-2 focus:ring-[#0b3c86]/20";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
      {/* Full name */}
      <input
        className={baseField}
        placeholder="Full Name"
        {...register("name", { required: true, minLength: 2 })}
      />
      {errors.name && (
        <p className="text-xs text-red-600 -mt-1">Please enter valid Full Name!</p>
      )}

      {/* Email */}
      <input
        type="email"
        className={baseField}
        placeholder="Email Address"
        {...register("email", { required: true })}
      />

      {/* Country code + Mobile */}
      <div className="grid grid-cols-[110px_1fr] gap-2">
        <div className="relative">
          <select
            className={baseSelect + " pr-8"}
            {...register("countryCode")}
          >
            <option value="+91">🇮🇳 +91</option>
            <option value="+971">🇦🇪 +971</option>
            <option value="+1">🇺🇸 +1</option>
          </select>
          {/* tiny caret */}
          <span className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-slate-500">
            ▾
          </span>
        </div>
        <input
          type="tel"
          className={baseField}
          placeholder="Mobile Number"
          {...register("mobile", { required: true })}
        />
      </div>

      {/* Selects */}
      <select className={baseSelect} defaultValue="" {...register("state", { required: true })}>
        <option value="" disabled>--Select State--</option>
        {STATES.map((s) => <option key={s} value={s}>{s}</option>)}
      </select>

      <select className={baseSelect} defaultValue="" {...register("city", { required: true })}>
        <option value="" disabled>--Select City --</option>
        {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>

      <select className={baseSelect} defaultValue="" {...register("program", { required: true })}>
        <option value="" disabled>--Select Program --</option>
        {PROGRAMS.map((p) => <option key={p} value={p}>{p}</option>)}
      </select>

      <select className={baseSelect} defaultValue="" {...register("course", { required: true })}>
        <option value="" disabled>--Select Course--</option>
        {COURSES.map((c) => <option key={c} value={c}>{c}</option>)}
      </select>

      {/* Consent */}
      <label className="mt-1 flex items-start gap-2 text-[13px] text-slate-700">
        <input
          type="checkbox"
          className="mt-[3px] h-4 w-4 rounded border-slate-300 text-[#0b3c86] focus:ring-[#0b3c86]"
          {...register("consent", { required: true })}
        />
        <span>
          I agree to receive information regarding my submitted enquiry *
        </span>
      </label>

      {/* Submit */}
      <button
        type="submit"
        className="inline-flex h-10 w-full items-center justify-center rounded bg-[#2f7d77] px-4 text-[15px] font-semibold text-white hover:bg-[#2a6f6a] focus:outline-none focus:ring-2 focus:ring-[#2f7d77]/30"
      >
        Submit
      </button>
    </form>
  );
}
