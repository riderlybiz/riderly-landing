import React, { useState } from "react";
import styled from "styled-components";

const ModalOverlay = styled.div`
  position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
  background: rgba(0,0,0,0.5); display: flex; align-items: center; justify-content: center; z-index: 1000;
`;

const ModalContent = styled.div`
  background: #fff; border-radius: 12px; width: 80%; max-width: 480px; padding: 32px 24px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
  line-height: 28px;
`;

const ScrollBox = styled.div`
  border: 1px solid #ddd; border-radius: 8px; padding: 16px; height: 120px; overflow-y: auto; margin-bottom: 16px;
  font-size: 14px; line-height: 20px; background: #fafafa;
`;

const CheckboxRow = styled.div`
  display: flex; align-items: center; margin-bottom: 12px;
  font-size: 12px; line-height: 12px;
  input { margin-right: 8px; }
`;

const Button = styled.button`
  width: 100%; padding: 12px 0; border: none; border-radius: 8px;
  background: ${({ disabled }) => disabled ? "#ccc" : "#FF6F00"};
  color: #fff; font-size: 16px; font-weight: bold; cursor: ${({ disabled }) => disabled ? "not-allowed" : "pointer"};
  margin-top: 12px;
`;

export default function ConsentModal({ open, onClose, onSubmit }) {
  const [agreeRequired, setAgreeRequired] = useState(false);
  const [agreeMarketing, setAgreeMarketing] = useState(false);

  if (!open) return null;

  return (
    <ModalOverlay>
      <ModalContent>
        <h2>Riderly 사전 등록 개인정보 수집 및 이용 동의서</h2>
        <ScrollBox>
          {/* 여기에 개인정보 수집 및 이용 약관 내용을 넣으세요 */}
          <p>Riderly는 사전 등록 신청을 위해 아래와 같은 개인정보를 수집·이용합니다. 내용을 확인하신 후 동의 여부를 결정해 주세요.</p>

          <p><strong>1. 수집 항목</strong></p>
          <ul>
            <li>- 이름</li>
            <li>- 휴대전화번호</li>
            <li>- 이메일 주소</li>
          </ul>

          <p><strong>2. 수집 및 이용 목적</strong></p>
          <ul>
            <li>- Riderly 서비스 사전 등록 접수 및 사용자 관리</li>
            <li>- 서비스 출시 관련 공지사항 전달</li>
            <li>- 이벤트 및 프로모션 정보 제공 (선택 동의 시)</li>
          </ul>

          <p><strong>3. 보유 및 이용 기간</strong></p>
          <ul>
            <li>- 수집일로부터 1년 또는 이용자의 삭제 요청 시까지 보관 후 지체 없이 파기</li>
          </ul>

          <p><strong>4. 동의 거부 권리 및 불이익 안내</strong></p>
          <ul>
            <li>- 개인정보 수집·이용 동의는 거부하실 수 있으며, 이 경우 사전 등록이 제한될 수 있습니다.</li>
          </ul>

          <p><strong>5. 마케팅 목적 수신 동의 (선택)</strong></p>
          <ul>
            <li>- Riderly는 선택적으로 마케팅 및 이벤트 정보 등을 문자 또는 이메일로 제공할 수 있습니다.</li>
            <li>- 동의하지 않더라도 사전 등록은 가능합니다.</li>
          </ul>

          <p>※ 위 내용을 충분히 숙지하였으며, 개인정보 수집 및 이용에 동의합니다.</p>
        </ScrollBox>
        <CheckboxRow>
          <input
            type="checkbox"
            id="agreeRequired"
            checked={agreeRequired}
            onChange={e => setAgreeRequired(e.target.checked)}
          />
          <label htmlFor="agreeRequired">
            (필수) 위 내용을 모두 읽고, 개인정보 수집 및 이용에 동의합니다.
          </label>
        </CheckboxRow>
        <CheckboxRow>
          <input
            type="checkbox"
            id="agreeMarketing"
            checked={agreeMarketing}
            onChange={e => setAgreeMarketing(e.target.checked)}
          />
          <label htmlFor="agreeMarketing">
            (선택 동의) 위 내용을 모두 읽고, 마케팅·광고성 정보 수신에 동의합니다.
          </label>
        </CheckboxRow>
        <Button
          disabled={!agreeRequired}
          onClick={() => {
            onSubmit({ agreeRequired, agreeMarketing });
            onClose();
          }}
        >
          사전 신청
        </Button>
        <Button style={{ background: "#eee", color: "#333", marginTop: 8 }} onClick={onClose}>닫기</Button>
      </ModalContent>
    </ModalOverlay>
  );
}