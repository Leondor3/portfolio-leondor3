"use client";

import { useState, useRef, useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Input from "@/common/Input";
import { Button } from "@/common/Button";
import TitleSide from "@/container/TitleSide";
import { ThemeContext } from "@/context/theme-context";
import { api } from "@/lib/api";
import { LinkedinLogo } from "@phosphor-icons/react";

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

  const onSubmit: SubmitHandler<FormData> = async (formData) => {
    try {
      const response = await api.post("/whatsapp", {
        message: message,
      });

      if (response.data.success) {
        alert("Mensagem enviada com sucesso!");
        setMessage("");
      } else {
        alert(
          "Erro ao enviar a mensagem. Por favor, tente novamente mais tarde."
        );
      }
    } catch (error) {
      console.error(error);
      alert(
        "Erro ao enviar a mensagem. Por favor, tente novamente mais tarde."
      );
    }
  };

  return (
    <div className="mb-32 w-full gap-6 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="flex items-start justify-center max-lg:flex-col max-lg:px-6">
          <TitleSide />
        </div>
      </div>
    </div>
  );
}
