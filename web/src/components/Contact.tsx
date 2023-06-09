"use client";

import { useState, useRef, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@/common/Input";
import { Button } from "@/common/Button";
import { TitleSide } from "@/container/TitleSide";
import { ThemeContext } from "@/context/theme-context";

const schema = yup
  .object({
    username: yup.string().required("Por favor, digite seu nome."),
    subject: yup.string().required("Por favor, digite o assunto."),
    message: yup.string().required("Por favor, digite sua mensagem."),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

export default function Contact() {
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

  const formRef = useRef<HTMLFormElement>(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(isLoading);
  };

  return (
    <div className="py-16 md:py-20 lg:py-28  mb-32 w-full gap-6 max-lg:px-6 max-lg:flex-col">
      <div className="container">
        <div className="flex items-start justify-center">
          <TitleSide />
          <div className="w-96 items-start flex flex-col">
            <form
              className="w-full"
              onSubmit={handleSubmit(onSubmit)}
              ref={formRef}
            >
              <div className="flex flex-col gap-4">
                <div className="flex flex-col">
                  <label
                    className={`${
                      theme == false ? "text-slate-400" : "text-zinc-800"
                    }`}
                  >
                    Seu Nome:
                  </label>
                  <Input
                    placeholder="Digite seu nome"
                    register={register("username")}
                  />
                  <p className="text-red-600 mt-2">
                    {errors.username?.message}
                  </p>
                </div>
                <div className="flex flex-col">
                  <label
                    className={`${
                      theme == false ? "text-slate-400" : "text-zinc-800"
                    }`}
                  >
                    Assunto:
                  </label>
                  <Input
                    placeholder="Digite seu nome"
                    register={register("subject")}
                  />
                  <p className="text-red-600 mt-2">{errors.subject?.message}</p>
                </div>
                <div className="flex flex-col">
                  <label
                    className={`${
                      theme == false ? "text-slate-400" : "text-zinc-800"
                    }`}
                  >
                    Messagem:
                  </label>
                  <textarea
                    className={`${
                      theme == false ? "bg-bg-dark-secundary" : "bg-zinc-200"
                    } p-2 rounded-lg mt-2 focus:border-zinc-700 focus:border outline-none placeholder:text-zinc-500`}
                    placeholder="Do que você precisa?"
                    {...register("message")}
                  />
                  <p className="text-red-600 mt-2">{errors.message?.message}</p>
                </div>
                <Button isHighlight disabled={isLoading}>
                  <span className="text-white">Entrar em Contato</span>
                </Button>
                {showMessage && (
                  <div className="text-green-500 text-sm rounded-lg mt-2">
                    {message}
                  </div>
                )}
                {showErrorMessage && (
                  <div className="text-red-500 text-sm rounded-lg mt-2">
                    {errorMessage}
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
