"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "sonner";
import IconError from "@/assets/icons/icon_error.svg";
import { setClarityTag, trackClarityEvent } from "@/utils/clarity";
import { cn } from "@/utils/cn";
import ButtonYelow from "../ButtonYelow";

type Props = {
  title?: string;
  className?: string;
  service: string;
  imageUrl?: string;
  prise?: number;
};

type FormDataInputs = {
  email: string;
  name: string;
  phone: string;
};

function FormGetUserData({
  title = "Заповни заявку на майстер-клас",
  className,
  service,
  imageUrl,
  prise,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormDataInputs>();

  const onSubmit: SubmitHandler<FormDataInputs> = async (dataUser) => {
    trackClarityEvent("lead_form_submit_attempt");
    setClarityTag("service", service);

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        body: JSON.stringify({
          ...dataUser,
          service,
          imageUrl,
          prise,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (data.success) {
        trackClarityEvent("lead_form_submit_success");
        toast.success("Запит відправлено успішно!");
      } else {
        trackClarityEvent("lead_form_submit_error");
        toast.error("Помилка при надсиланні!");
      }
    } catch (error) {
      console.error("Error:", error);
      trackClarityEvent("lead_form_submit_network_error");
      toast.error("Помилка мережі або сервера. Спробуйте ще раз.");
    }
  };

  return (
    <form
      className={cn("mt-7", className)}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <h2 className="textH4 text-main_blue mb-2 text-center uppercase">
        {title}
      </h2>
      <ul className="mb-2 flex w-full flex-col gap-2">
        {(["email", "phone", "name"] as const).map((field) => {
          return (
            <li key={field}>
              <label htmlFor={field} className="sr-only">
                {field}
              </label>
              <input
                {...register(field, {
                  required: "Це поле обов'язкове",
                  ...(field === "email" && {
                    pattern: {
                      value: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
                      message: "Невірний email формат",
                    },
                  }),
                  ...(field === "name" && {
                    minLength: {
                      value: 2,
                      message: "Ім'я повинно містити щонайменше 2 символи",
                    },
                    maxLength: {
                      value: 20,
                      message: "Ім'я повинно містити не більше 20 символів",
                    },
                  }),
                  ...(field === "phone" && {
                    minLength: {
                      value: 10,
                      message:
                        "Номер телефону повинен містити щонайменше 10 цифр",
                    },
                  }),
                })}
                className={cn(
                  "border-grey_stroke_logo placeholder:text-text w-full rounded-3xl border px-6 py-[11px]",
                  errors[field] && "border-error border-2",
                )}
                type={
                  field === "phone"
                    ? "tel"
                    : field === "email"
                      ? "email"
                      : "text"
                }
                id={field}
                name={field}
                placeholder={
                  field === "phone"
                    ? "Телефон"
                    : field === "email"
                      ? "Email"
                      : "Ім'я"
                }
              />
              {errors[field] && (
                <div className="flex items-center gap-1 pl-6">
                  <IconError className="h-5 w-5" />
                  <span role="alert" className="helper_text">
                    {errors[field].message}
                  </span>
                </div>
              )}
            </li>
          );
        })}
      </ul>
      <div className="flex justify-end">
        <ButtonYelow
          title={isSubmitting ? "Обробляємо..." : "Замовити"}
          disabled={isSubmitting}
          className="py-3 md:max-w-fit"
          type="submit"
        />
      </div>
    </form>
  );
}

export default FormGetUserData;
