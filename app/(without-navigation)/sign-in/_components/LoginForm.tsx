"use client";
import FixedBottomCTA from "@/components/BottomFixedButton";
import Button from "@/components/Button";
import Input from "@/components/Input";
import PasswordInput from "@/components/PasswordInput";
import useAppRouter from "@/hooks/useAppRouter";
import useInput from "@/hooks/useInput";
import useIsApp from "@/hooks/useIsApp";
import { cn } from "@/utils/cn";
import { sendNativeEvent } from "@/utils/sendNativeEvent";
import { login } from "apis/fetcher/auth";
import React from "react";

const LoginForm = () => {
  const { value: id, onChange: onIdChange } = useInput("");
  const { value: password, onChange: onPasswordChange } = useInput("");
  const { push } = useAppRouter();
  const { isApp } = useIsApp();

  const onLogin = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const data = await login({ userId: id, password });
      if (data.code === "success") {
        if (isApp) {
          sendNativeEvent({
            type: "AUTH_TOKEN_EVENT",
            params: { ...data.data },
          });
        } else {
          console.log(data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <form>
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
          <Button onClick={onLogin} type="button" size="normal" bgColor="black">
            로그인
          </Button>
          <span
            role="button"
            className={cn(
              "underline",
              "description",
              "text-black-950",
              "mt-2",
              "text-center"
            )}
            onClick={() => {
              push("/sign-up");
            }}
          >
            Ping 회원 가입하기
          </span>
        </div>
      </form>
      <FixedBottomCTA.TypeB
        leftButton={
          <span className={cn("text-black-950", "body3")}>아이디 찾기</span>
        }
        rightButton={
          <span className={cn("text-black-950", "body3")}>비밀번호 찾기</span>
        }
      />
    </>
  );
};

export default LoginForm;
