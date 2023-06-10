"use client";
import React, { useState, useContext } from "react";
import { Check, Code, Student } from "@phosphor-icons/react";
import { ThemeContext } from "@/context/theme-context";
import { MockupCourses } from "@/data/mockup";

interface PropsCourses {
  id: String;
  title: String;
  institution: String;
  duration: String;
  link: String;
  issued: String;
  state: Boolean;
}

export default function ComplementaryCourses() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex h-max flex-col gap-4">
      <div className="flex items-center gap-4">
        <div
          className={`${
            theme == false ? "bg-bg-dark-secundary" : "bg-slate-400"
          }  max-w-max rounded-md p-2`}
        >
          <Student size={24} fill="#2563eb" />
        </div>
        <h1
          className={`${
            theme == false ? "text-light" : "text-dark"
          } text-3xl font-bold max-sm:text-2xl`}
        >
          Educação
        </h1>
      </div>
      <div
        className={`${
          theme == false ? "bg-bg-dark-secundary" : "bg-white"
        } w-full shadow-lg`}
      >
        {MockupCourses.cursos.map((curso, index) => (
          <div
            className="flex flex-col space-y-4 p-4 after:mt-4 after:h-px after:w-full after:bg-gray-500"
            key={index}
          >
            <div className="flex justify-between max-sm:flex-col max-sm:gap-2">
              <h1 className={`${theme == false ? "text-light" : "text-dark"}`}>
                {curso.title}
              </h1>
              <span
                className={`${
                  curso.state == "Concluído"
                    ? "text-green-400"
                    : "text-orange-400"
                } italic`}
              >
                {curso.state}
              </span>
            </div>
            <p
              className={`${
                theme == false ? "text-light" : "text-dark"
              } text-sm}`}
            >
              {curso.description}
            </p>
            <span
              className={`${
                theme == false ? "text-light" : "text-dark"
              } text-sm`}
            >
              {" "}
              Duração: {curso.duration}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
