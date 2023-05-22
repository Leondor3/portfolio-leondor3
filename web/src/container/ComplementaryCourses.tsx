"use client";
import React, { useState, useContext } from "react";
import { Check, Code, Student } from "@phosphor-icons/react";
import { ThemeContext } from "@/theme-context";
import { MockupCourses } from "@/mockup";

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
    <div className="flex flex-col gap-4 h-max">
      <div className="flex gap-4 items-center">
        <div
          className={`${
            theme == false ? "bg-bg-dark-secundary" : "bg-slate-400"
          }  p-2 max-w-max rounded-md`}
        >
          <Student size={24} fill="#2563eb" />
        </div>
        <h1
          className={`${
            theme == false ? "text-light" : "text-dark"
          } text-3xl font-bold`}
        >
          Educação
        </h1>
      </div>
      <div
        className={`${
          theme == false ? "bg-bg-dark-secundary" : "bg-white"
        } shadow-lg w-full`}
      >
        {MockupCourses.cursos.map((curso, index) => (
          <div className="p-4 flex flex-col space-y-2 after:h-px after:w-full after:bg-gray-500 after:mt-4" key={index}>
            <div className="flex justify-between">
              <h1
                className={`${theme == false ? "text-white" : "text-zinc-900"}`}
              >
                {curso.title}
              </h1>
              <span
                className={`${
                  curso.state ? "text-green-400" : "text-orange-400"
                } italic`}
              >
                {curso.state ? "Concluido" : "Incompleto"}
              </span>
            </div>
            <p className="text-sm mt-2">{curso.description}</p>
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
