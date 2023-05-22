"use client";

import React, { useState, useContext } from "react";
import { Check, Code } from "@phosphor-icons/react";
import { ThemeContext } from "@/theme-context";
import { MockupJobs } from "@/mockupJobs";

interface PropsJobs {
  id: String;
  title: String;
  institution: String;
  duration: String;
  link: String;
  descriptions: {
    id: string;
    description: string;
  }[];
}

export default function Jobs() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="flex flex-col gap-4 h-max">
      <div className="flex gap-4 items-center">
        <div
          className={`${
            theme == false ? "bg-bg-dark-secundary" : "bg-slate-400"
          }  p-2 max-w-max rounded-md`}
        >
          <Code size={24} fill="#2563eb" />
        </div>
        <h1
          className={`${
            theme == false ? "text-light" : "text-zinc-800"
          } text-3xl font-bold`}
        >
          Trabalho
        </h1>
      </div>
      {MockupJobs.jobs.map((item, key) => {
        return (
          <div
            key={key}
            className={`${
              theme == false ? "bg-[#1c1f27]" : "bg-white"
            } shadow-lg w-full`}
          >
            <div className="p-4 flex flex-col">
              <div className="flex justify-between">
                <h1
                  className={`${
                    theme == false ? "text-light" : "text-zinc-800"
                  } font-bold`}
                >
                  {item.title}
                </h1>
                <a className="underline italic text-green-400">
                  Ir para o site
                </a>
              </div>
              <p
                className={`${
                  theme == false ? "text-light" : "text-zinc-800"
                } text-sm`}
              >
                Cargo: <b className="">{item.position}</b>
              </p>
              <p
                className={`${
                  theme == false ? "text-light" : "text-zinc-800"
                } text-sm`}
              >
                {item.duration} ~ Atualmente
              </p>
              <ul className="flex flex-col items-start gap-4 mt-4">
                {item.tasks.map((task) => (
                  <li
                    className={`${
                      theme == false ? "text-light" : "text-zinc-800"
                    } flex items-start gap-2`}
                    key={task.id}
                  >
                    <Check size={24} color="#2563eb" weight="bold" />
                    {task.task}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}
