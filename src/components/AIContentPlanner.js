import React, { useState } from 'react';
import { Brain, Target, Calendar, TrendingUp, Lightbulb, Users, Search, FileText } from 'lucide-react';

const AIContentPlanner = () => {
  const [topic, setTopic] = useState('');
  const [platform, setPlatform] = useState('blog');
  const [audience, setAudience] = useState('general');
  const [contentType, setContentType] = useState('educational');
  const [result, setResult] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const platforms = [
    { value: 'blog', label: '블로그/웹사이트' },
    { value: 'youtube', label: 'YouTube' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'tiktok', label: 'TikTok' },
    { value: 'newsletter', label: '뉴스레터' }
  ];

  const audiences = [
    { value: 'general', label: '일반 대중' },
    { value: 'professionals', label: '전문가/직장인' },
    { value: 'students', label: '학생/취준생' },
    { value: 'entrepreneurs', label: '창업가/사업가' },
    { value: 'creators', label: '크리에이터' },
    { value: 'seniors', label: '시니어층' }
  ];

  const contentTypes = [
    { value: 'educational', label: '교육/정보성' },
    { value: 'entertainment', label: '오락/재미' },
    { value: 'inspirational', label: '영감/동기부여' },
    { value: 'howto', label: '가이드/튜토리얼' },
    { value: 'review', label: '리뷰/평가' },
    { value: 'trend', label: '트렌드/뉴스' }
  ];

  const generatePrompt = () => {
    const platformText = platforms.find(p => p.value === platform)?.label || platform;
    const audienceText = audiences.find(a => a.value === audience)?.label || audience;
    const typeText = contentTypes.find(t => t.value === contentType)?.label || contentType;

    return `당신은 전문 콘텐츠 기획자입니다. 다음 조건에 맞는 콘텐츠 기획안을 작성해주세요:\n\n**주제**: ${topic}\n**플랫폼**: ${platformText}\n**타겟 오디언스**: ${audienceText}\n**콘텐츠 유형**: ${typeText}\n\n다음 형식으로 답변해주세요:\n\n## 📋 콘텐츠 개요\n- 핵심 메시지와 목적\n\n## 🎯 타겟 분석\n- 오디언스 특성과 니즈\n- 관심사와 행동 패턴\n\n## 💡 콘텐츠 아이디어 (5개)\n1. [제목] - 간단한 설명\n2. [제목] - 간단한 설명\n3. [제목] - 간단한 설명\n4. [제목] - 간단한 설명\n5. [제목] - 간단한 설명\n\n## 🔍 SEO 키워드 추천\n- 메인 키워드: \n- 롱테일 키워드: \n\n## 📅 콘텐츠 캘린더 (4주)\n**1주차**: \n**2주차**: \n**3주차**: \n**4주차**: \n\n## 📈 성과 측정 지표\n- 추천 KPI와 측정 방법\n\n## 💬 콘텐츠 톤앤매너\n- 권장하는 말투와 스타일`;
  };

  const handleGenerate = () => {
    if (!topic.trim()) {
      alert('주제를 입력해주세요!');
      return;
    }
    
    setIsGenerating(true);
    const prompt = generatePrompt();
    setResult(prompt);
    
    // 실제 생성 효과를 위한 딜레이
    setTimeout(() => {
      setIsGenerating(false);
    }, 1000);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(result);
    alert('프롬프트가 복사되었습니다!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 p-6">
      <div className="max-w-4xl mx-auto">
        {/* 헤더 */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Brain className="h-10 w-10 text-purple-600" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              AI 콘텐츠 기획자
            </h1>
          </div>
          <p className="text-gray-600 text-lg">
            전문적인 콘텐츠 기획 프롬프트를 자동으로 생성합니다
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* 입력 패널 */}
          <div className="bg-white rounded-2xl shadow-xl p-6 h-fit">
            <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
              <Lightbulb className="h-6 w-6 text-yellow-500" />
              콘텐츠 정보 입력
            </h2>

            <div className="space-y-6">
              {/* 주제 입력 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  콘텐츠 주제 *
                </label>
                <input
                  type="text"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="예: 개발자를 위한 시간 관리 방법"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                />
              </div>

              {/* 플랫폼 선택 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  플랫폼
                </label>
                <select
                  value={platform}
                  onChange={(e) => setPlatform(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                >
                  {platforms.map(p => (
                    <option key={p.value} value={p.value}>{p.label}</option>
                  ))}
                </select>
              </div>

              {/* 타겟 오디언스 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  타겟 오디언스
                </label>
                <select
                  value={audience}
                  onChange={(e) => setAudience(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                >
                  {audiences.map(a => (
                    <option key={a.value} value={a.value}>{a.label}</option>
                  ))}
                </select>
              </div>

              {/* 콘텐츠 유형 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  콘텐츠 유형
                </label>
                <select
                  value={contentType}
                  onChange={(e) => setContentType(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent outline-none transition-all"
                >
                  {contentTypes.map(t => (
                    <option key={t.value} value={t.value}>{t.label}</option>
                  ))}
                </select>
              </div>

              <button
                onClick={handleGenerate}
                disabled={isGenerating}
                className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transform hover:scale-105 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isGenerating ? '생성 중...' : '프롬프트 생성하기'}
              </button>
            </div>
          </div>

          {/* 결과 패널 */}
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-semibold flex items-center gap-2">
                <Target className="h-6 w-6 text-blue-500" />
                생성된 프롬프트
              </h2>
              {result && (
                <button
                  onClick={copyToClipboard}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium transition-all"
                >
                  복사하기
                </button>
              )}
            </div>

            {result ? (
              <div className="bg-gray-50 rounded-lg p-4 max-h-96 overflow-y-auto">
                <pre className="whitespace-pre-wrap text-sm text-gray-700 font-mono leading-relaxed">
                  {result}
                </pre>
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-gray-300" />
                <p>주제를 입력하고 프롬프트 생성하기 버튼을 눌러주세요</p>
              </div>
            )}
          </div>
        </div>

        {/* 사용 가이드 */}
        <div className="mt-12 bg-white rounded-2xl shadow-xl p-6">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Search className="h-5 w-5 text-green-500" />
            사용 가이드
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-purple-600 font-bold">1</span>
              </div>
              <h4 className="font-semibold mb-2">주제 입력</h4>
              <p className="text-sm text-gray-600">구체적이고 명확한 콘텐츠 주제를 입력하세요</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-blue-600 font-bold">2</span>
              </div>
              <h4 className="font-semibold mb-2">조건 선택</h4>
              <p className="text-sm text-gray-600">플랫폼, 타겟, 콘텐츠 유형을 선택하세요</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-green-600 font-bold">3</span>
              </div>
              <h4 className="font-semibold mb-2">프롬프트 활용</h4>
              <p className="text-sm text-gray-600">생성된 프롬프트를 AI에게 입력하여 사용하세요</p>
            </div>
          </div>
        </div>

        {/* 푸터 */}
        <div className="text-center mt-8 text-gray-500 text-sm">
          <p>💡 팀 과제용 프롬프트 샵 컴포넌트 | 중급 프롬프트 도구</p>
        </div>
      </div>
    </div>
  );
};

export default AIContentPlanner;
