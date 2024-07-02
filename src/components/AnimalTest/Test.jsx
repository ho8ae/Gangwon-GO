import React, { useState } from 'react';
import StartPage from './StartPage';
import TestPage from './TestPage';
import ResultPage from './ResultPage';

const questions = [
    { question: "강원도는 서울보다 생각보다 할게 많다고 생각한다.", options: [{ label: "Yes", value: "S" }, { label: "No", value: "N" }] },
    { question: "나는 강원도가 따뜻해서 좋다고 하는 사람이 싫다.", options: [{ label: "Yes", value: "S" }, { label: "No", value: "N" }] },
    { question: "옛날에 호랑이가 많았다고 하는데 믿지 않는 편이다.", options: [{ label: "Yes", value: "S" }, { label: "No", value: "N" }] },
    { question: "강원도에서 놀러 갈 때 인스타에 저장해둔 걸 확인하고 가는 편이다.", options: [{ label: "Yes", value: "J" }, { label: "No", value: "P" }] },
    { question: "강원도 여행 계획을 세우는 것이 좋다.", options: [{ label: "Yes", value: "J" }, { label: "No", value: "P" }] },
    { question: "강원도의 자연경관을 보며 감동하는 편이다.", options: [{ label: "Yes", value: "F" }, { label: "No", value: "T" }] },
    { question: "동물을 좋아하지만 직접 키우는 것은 힘들다고 생각한다.", options: [{ label: "Yes", value: "I" }, { label: "No", value: "E" }] },
    { question: "강원도의 맛집을 선택할 때, 리뷰의 논리적인 분석을 더 중요시한다.", options: [{ label: "Yes", value: "T" }, { label: "No", value: "F" }] },
    { question: "길에서 강아지를 보면 인사를 하고 싶다.", options: [{ label: "Yes", value: "E" }, { label: "No", value: "I" }] },
    { question: "강원도에서 야생동물을 보는 것은 흥미롭다.", options: [{ label: "Yes", value: "S" }, { label: "No", value: "N" }] },
    { question: "여가 시간에는 보통 혼자 보내는 것을 좋아한다.", options: [{ label: "Yes", value: "I" }, { label: "No", value: "E" }] },
    { question: "여행 계획을 철저하게 세우는 편이다.", options: [{ label: "Yes", value: "J" }, { label: "No", value: "P" }] },
    { question: "즉흥적인 여행을 즐긴다.", options: [{ label: "Yes", value: "P" }, { label: "No", value: "J" }] },
    { question: "강원도의 관광 명소를 선택할 때, 그 장소의 역사적 배경이 더 중요하다.", options: [{ label: "Yes", value: "T" }, { label: "No", value: "I" }] },
    { question: "여행지에서 현지인과 대화하는 것을 즐긴다.", options: [{ label: "Yes", value: "E" }, { label: "No", value: "I" }] },
    { question: "새로운 맛집을 찾아다니는 것을 좋아한다.", options: [{ label: "Yes", value: "E" }, { label: "No", value: "I" }] },
  { question: "강원도 여행 중 계획된 일정에서 벗어나지 않는 것이 중요하다.", options: [{ label: "Yes", value: "T" }, { label: "No", value: "F" }] },
  { question: "강원도의 특산물을 먹어보고 싶다.", options: [{ label: "Yes", value: "S" }, { label: "No", value: "N" }] },
  { question: "맛집 리스트를 미리 작성해놓는다.", options: [{ label: "Yes", value: "J" }, { label: "No", value: "P" }] },
  { question: "식당의 분위기보다는 음식의 맛이 더 중요하다.", options: [{ label: "Yes", value: "T" }, { label: "No", value: "F" }] }
// E8 7 N6 T1 J5
  // Add more questions here...
];

const calculateResult = (answers) => {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  answers.forEach(answer => {
    scores[answer] += 1;
  });

  const type = `${scores.E >= scores.I ? 'E' : 'I'}${scores.S >= scores.N ? 'S' : 'N'}${scores.T >= scores.F ? 'T' : 'F'}${scores.J >= scores.P ? 'J' : 'P'}`;

  const descriptions = {
    ENFJ: '때로는 우아한 백조',
    ENFP: '천방지축 수달',
    ENTJ: '강원도의 왕 호랑이',
    ENTP: '선택과 집중의 도마뱀',
    ESFJ: '부지런한 소',
    ESFP: '나는 자유분방 호랑나비',
    ESTJ: '정직한 맷돼지',
    ESTP: '현실적인 싸이고 오소리',
    INFJ: '스르륵 스르륵 소시오 뱀',
    INFP: '나는 여기저기 고라니',
    INTJ: '우두머리의 늑대',
    INTP: '저를 본다면 행운이 사슴',
    ISFJ: '평화를 매번 상징하는 비둘기',
    ISFP: '강원도에서 날 본다면 신고해 곰',
    ISTJ: '강원도 산양은 유명하지',
    ISTP: '빙어 대축제 오실?',
  };

  return {
    type,
    description: descriptions[type] || 'Unknown personality type'
  };
}

const Test = () => {
  const [page, setPage] = useState('start');
  const [answers, setAnswers] = useState([]);

  const handleStartClick = () => {
    setPage('test');
  }

  const handleAnswer = (questionIndex, answer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);
  }

  const handleFinishTest = () => {
    const result = calculateResult(answers);
    setPage('result');
    setAnswers(result);
  }

  return (
    <div>
      {page === 'start' && <StartPage onStartClick={handleStartClick} />}
      {page === 'test' && <TestPage questions={questions} onAnswer={handleAnswer} onFinish={handleFinishTest} />}
      {page === 'result' && <ResultPage result={answers} />}
    </div>
  );
}

export default Test;
