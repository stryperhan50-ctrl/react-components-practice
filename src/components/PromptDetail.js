import React from 'react';
import './PromptDetail.css';

// A reusable Section component to keep the code DRY
const Section = ({ emoji, title, children }) => (
  <section className="prompt-section">
    <div className="section-header">
      <h2>{emoji} {title}</h2>
      <button className="copy-button">복사</button>
    </div>
    <div className="section-content">
      {children}
    </div>
  </section>
);

function PromptDetail() {
  return (
    <main className="prompt-container">
      <Section emoji="🛒" title="판매용 설명 (Description)">
        <p>더 이상 이메일 작성으로 고민하지 마세요! '전문적인 이메일 작성 비서' 프롬프트는 어떤 목적이든 완벽하고 전문적인 이메일을 순식간에 만들어 드립니다. 회의 요청부터 피드백, 감사 메시지까지, 필요한 정보와 원하는 톤만 입력하면 AI가 맞춤형 이메일을 작성해줍니다. 다양한 AI 모델에서 탁월한 성능을 발휘하도록 최적화되어 있어, 명확하고 간결하며 효과적인 커뮤니케이션을 보장합니다. 바쁜 전문가, 마케터, 혹은 깔끔한 이메일 작성을 원하는 모든 분들께 필수적인 도구입니다!</p>
      </Section>

      <Section emoji="📖" title="사용 설명서 (Instructions)">
        <p>이 프롬프트를 사용하는 방법은 다음과 같습니다:</p>
        <ol>
          <li>제공된 핵심 프롬프트 텍스트를 복사합니다.</li>
          <li>프롬프트 내의 중괄호 `{{...}}`로 표시된 변수들을 사용자 상황에 맞게 수정합니다. 예를 들어:
            <ul>
              <li>`{{이메일_목적}}`: '신제품 출시 회의 요청'</li>
              <li>`{{수신자_이름}}`: '김민수 팀장님'</li>
              <li>`{{포함할_핵심_정보}}`: '5월 15일 오후 3시에 203호 회의실에서 진행, 주요 안건은 시장 분석 및 마케팅 전략 논의'</li>
              <li>`{{원하는_톤}}`: '정중하면서도 효율적인'</li>
              <li>`{{구체적인_요청_또는_다음_단계}}`: '참석 가능 여부 회신 및 논의하고 싶은 추가 안건 전달 요청'</li>
            </ul>
          </li>
          <li>수정된 프롬프트를 선호하는 AI 모델 (예: ChatGPT, Bard, Claude 등)에 입력하고 실행합니다. 이 프롬프트는 다양한 AI 모델에서 범용적으로 잘 작동하도록 설계되었습니다.</li>
          <li>생성된 이메일을 검토하고 필요에 따라 세부 내용을 조율하여 최종본을 완성합니다.</li>
        </ol>
      </Section>

      <Section emoji="✨" title="생성 예시 (Example Output)">
        <p>네, 숙련된 이메일 작성 전문가로서 요청하신 `{{이메일_목적}}`을 위한 전문적인 이메일 템플릿을 작성해 드립니다. 아래 템플릿을 활용하여 각 `{{ }}` 부분에 맞게 정보를 채워 넣으시면 됩니다.</p>
        <pre className="code-block">
          <code>
**제목: [{`{{이메일_목적}}`} 관련] {`{{핵심_내용을_함축하는_제목}}` }**

**수신:** {`{{수신자_이름}}`}님께

**발신:** [보내는 사람 이름] 드림

**날짜:** YYYY년 MM월 DD일

안녕하세요, {`{{수신자_이름}}`}님.

바쁘신 와중에도 잠시 시간을 내어 주셔서 감사합니다. 본 이메일은 **{`{{이메일_목적}}`}**과 관련하여 중요한 내용을 전달드리고자 작성되었습니다.

저희는 **{`{{원하는_톤}}`}**을 유지하며, 다음의 **{`{{포함할_핵심_정보}}`}**를 명확하고 간결하게 전달드리고자 합니다.

---

**[핵심 정보]**

*   {`{{포함할_핵심_정보}}`}
    *   [필요시, 세부 내용 1]
    *   [필요시, 세부 내용 2]
*   [추가적인 핵심 정보 또는 배경 설명]

본 정보가 {`{{수신자_이름}}`}님의 이해를 돕고, 관련 사안을 처리하시는 데 도움이 되기를 바랍니다.

---

**[구체적인 요청 또는 다음 단계]**

이와 관련하여 {`{{수신자_이름}}`}님께 다음과 같은 **{`{{구체적인_요청_또는_다음_단계}}`}**를 제안드립니다.

*   {`{{구체적인_요청_또는_다음_단계}}`}에 대한 명확한 설명
*   [필요시, 요청 기한 또는 예상 소요 시간]
*   [필요시, 관련 자료 첨부 여부 또는 참조 사항]

궁금한 점이 있으시거나 도움이 필요하시면 언제든지 [회신] 주시거나, [연락처]로 편하게 연락 주십시오.

바쁘신 와중에 귀한 시간 내어주셔서 다시 한번 감사드립니다.
{`{{수신자_이름}}`}님의 답변을 기다리겠습니다.

**[인사말 - 예시: 정중하게, 또는 협조에 감사하며]**
*   예시 1: 감사합니다.
*   예시 2: 협조에 깊이 감사드립니다.

**[보내는 사람 정보]**

[보내는 사람 이름]
[보내는 사람 직책/부서]
[회사명]
[연락처]
[이메일 주소]

---

**참고:**
*   `{`{{원하는_톤}}`}`에 따라 구체적인 문장 표현이나 어조가 달라질 수 있습니다. 위의 예시는 정중하고 전문적인 톤을 기본으로 합니다.
*   `제목` 부분은 이메일 내용을 가장 잘 나타낼 수 있도록 구체적으로 작성해 주시는 것이 좋습니다.
          </code>
        </pre>
      </Section>

      <Section emoji="🔑" title="제출용 프롬프트 (Your Prompt)">
        <p>당신은 숙련된 이메일 작성 전문가입니다. {`{{이메일_목적}}`}을 위한 전문적인 이메일을 작성해주세요. 이메일은 {`{{수신자_이름}}`}에게 보내는 것이며, {`{{포함할_핵심_정보}}`}를 명확하고 간결하게 전달해야 합니다. {`{{원하는_톤}}`}을 유지하고, {`{{구체적인_요청_또는_다음_단계}}`}를 포함해주세요.</p>
      </Section>

      <Section emoji="🖼️" title="썸네일 프롬프트 아이디어 (Thumbnail Prompt Idea)">
        <p>A professional, minimalist image of a sleek, glowing digital interface displaying an email draft, with a subtle AI assistant icon integrated. A hand is elegantly typing on a modern, transparent keyboard in a sophisticated, well-lit office environment. The color palette is calming blues and silvers, suggesting efficiency and advanced technology. High resolution, concept art.</p>
      </Section>
    </main>
  );
}

export default PromptDetail;
