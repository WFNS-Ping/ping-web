"use client";
import FixedBottomCTA from "@/components/BottomFixedButton";
import Checkbox from "@/components/Checkbox";
import Input from "@/components/Input";
import PasswordInput from "@/components/PasswordInput";
import useInput from "@/hooks/useInput";
import { cn } from "@/utils/cn";
import { useState } from "react";

const SignUpForm = () => {
  const [privacyPolicy, setPrivacyPolicy] = useState(false);
  const [locationInformation, setLocationInformation] = useState(false);
  const { value: id, onChange: onIdChange } = useInput("");
  const { value: name, onChange: onNameChange } = useInput("");
  const { value: password, onChange: onPasswordChange } = useInput("");
  const { value: passwordCheck, onChange: onPasswordCheckChange } =
    useInput("");

  return (
    <>
      <form className={cn("flex", "flex-col", "gap-y-4")} action="">
        <Input
          value={name}
          onChange={onNameChange}
          type="text"
          name="name"
          placeholder="이름"
        />
        <Input
          value={id}
          onChange={onIdChange}
          type="text"
          name="id"
          placeholder="아이디"
        />
        <PasswordInput
          value={password}
          onChange={onPasswordChange}
          name="password"
          placeholder="비밀번호"
          autoComplete="off"
          maxLength={20}
          showPasswordCheck
        />
        <PasswordInput
          value={passwordCheck}
          onChange={onPasswordCheckChange}
          name="passwordCheck"
          placeholder="비밀번호 확인"
          autoComplete="off"
          maxLength={20}
          showPasswordCheck
        />
        <ul className={cn("mt-6", "flex", "flex-col", "gap-y-1")}>
          <li>
            <Checkbox
              checked={privacyPolicy}
              onChange={() => setPrivacyPolicy(!privacyPolicy)}
            >
              <span
                className={cn(
                  "description",
                  "flex",
                  "gap-x-1",
                  "text-black-400"
                )}
              >
                <strong className="description text-black-950">[필수]</strong>
                이용약관 및 개인정보처리방침
              </span>
            </Checkbox>
          </li>
          <li>
            <Checkbox
              checked={locationInformation}
              onChange={() => setLocationInformation(!locationInformation)}
            >
              <span
                className={cn(
                  "description",
                  "flex",
                  "gap-x-1",
                  "text-black-400"
                )}
              >
                <strong className="description  text-black-950">[필수]</strong>
                위치정보 수집 및 알람 수신 동의
              </span>
            </Checkbox>
          </li>
        </ul>
      </form>
      <FixedBottomCTA bgColor="black">회원가입</FixedBottomCTA>
    </>
  );
};

export default SignUpForm;
