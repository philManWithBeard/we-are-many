const questions = [
  {
    title: "who",
    question: "Who does this issue affect?",
    answers: [
      { answer: "Me personally", label: "mePersonally" },
      { answer: "My children", label: "myChildren" },
      { answer: "My relatives", label: "myRelatives" },
      { answer: "My friends", label: "myFriends" },
      { answer: "My colleagues", label: "myColleagues" },
    ],
  },
  {
    title: "what",
    question: "What does this affect?",
    answers: [
      { answer: "My physical health", label: "physicalHealth" },
      { answer: "My mental health", label: "mentalHealth" },
      { answer: "My ability to afford essentials", label: "Essentials" },
      { answer: "My ability to afford non-essentials", label: "nonEssentials" },
    ],
  },
  {
    title: "affect",
    question: "How much does this issue affect me?",
    answers: [
      { answer: "My biggest issue", label: "biggestIssue" },
      { answer: "Affects me a lot", label: "affectsLot" },
      { answer: "Affects me", label: "affects" },
      { answer: "Affects me a little", label: "affectsLittle" },
      { answer: "Doesn't affect me", label: "doesNotAffect" },
    ],
  },
];

export default questions;
