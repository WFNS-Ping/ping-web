"use client";
import FixedBottomCTA from "@/components/BottomFixedButton";
import Button from "@/components/Button";
import Input from "@/components/Input";
import PasswordInput from "@/components/PasswordInput";
import useInput from "@/hooks/useInput";
import { cn } from "@/utils/cn";
import React from "react";

const Login = () => {
  const { value: id, onChange: onIdChange } = useInput("");
  const { value: password, onChange: onPasswordChange } = useInput("");
  return (
    <>
      <form action="">
        <Input
          value={id}
          onChange={onIdChange}
          type="text"
          name="id"
          placeholder="아이디"
          className={cn("mb-4")}
        />
        <PasswordInput
          value={password}
          onChange={onPasswordChange}
          name="password"
          placeholder="비밀번호"
        />
        <div className={cn("mt-10", "flex", "flex-col", "justify-center")}>
          <Button size="normal" bgColor="white">
            로그인
          </Button>
          <span
            role="button"
            className={cn(
              "underline",
              "description",
              "text-black-50",
              "mt-2",
              "text-center"
            )}
          >
            Ping 회원 가입하기
          </span>
        </div>
      </form>
      <FixedBottomCTA.TypeB
        leftButton={
          <span className={cn("text-black-50", "body3")}>아이디 찾기</span>
        }
        rightButton={
          <span className={cn("text-black-50", "body3")}>비밀번호 찾기</span>
        }
      />
    </>
  );
};

export default Login;
