import { defineDb, defineTable, column } from "astro:db";

const User = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    firstName: column.text(),
    lastName: column.text(),
    email: column.text(),
  },
});

const Campaign = defineTable({
  columns: {
    id: column.number({ primaryKey: true }),
    title: column.text(),
    description: column.text(),
  },
});

const QuestionType = defineTable({
  columns: {
    campaignId: column.number({ references: () => Campaign.columns.id }),
    id: column.number({ primaryKey: true }),
    title: column.text(),
    body: column.text(),
  },
});

const Question = defineTable({
  columns: {
    campaignId: column.number({ references: () => Campaign.columns.id }),
    id: column.number({ primaryKey: true }),
    title: column.text(),
    body: column.text(),
  },
});

const Answer = defineTable({
  columns: {
    questionId: column.number({ references: () => Question.columns.id }),
    id: column.number({ primaryKey: true }),
    answer: column.text(),
    body: column.text(),
  },
});

const UserAnswer = defineTable({
  columns: {
    answerId: column.number({ references: () => Answer.columns.id }),
    userId: column.number({ references: () => User.columns.id }),
    createdOn: column.date(),
  },
});

export default defineDb({
  tables: { UserAnswer, Answer, Question, QuestionType, User, Campaign },
});
