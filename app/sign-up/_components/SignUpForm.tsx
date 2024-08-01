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
        <div className={cn("pl-4")}>
          <Checkbox
            label={
              <>
                <strong>[필수]</strong> 이용약관 및 개인정보처리방침
              </>
            }
            checked={privacyPolicy}
            onChange={() => setPrivacyPolicy(!privacyPolicy)}
            className={cn("mb-1")}
          />
          <Checkbox
            label={
              <>
                <strong>[필수]</strong> 위치정보 수집 및 알람 수신 동의
              </>
            }
            checked={locationInformation}
            onChange={() => setLocationInformation(!locationInformation)}
          />
        </div>
      </form>
      <FixedBottomCTA bgColor="black">회원가입</FixedBottomCTA>
    </>
  );
};

export default SignUpForm;
