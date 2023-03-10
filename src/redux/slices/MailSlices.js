import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: [
    {
      id: 1,
      author: "Bihan Viranga",
      email: "dgjrrrl@gmail.com",
      subject: "Lorem ipsum, or lipsum as it is sometimes known",
      content:
        "With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
      mailStatus: "inbox",
    },
    {
      id: 2,
      author: "Bihan Viranga",
      email: "djjjjjj@gmail.com",
      subject: "Lorem ipsum, or lipsum as it is sometimes known",
      content:
        "With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
      mailStatus: "sent",
    },
    {
      id: 3,
      author: "Bihan Viranga",
      email: "dkmdfgpotw@gmail.com",
      subject: "Lorem ipsum, or lipsum as it is sometimes known",
      content:
        "With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
      mailStatus: "inbox",
    },
    {
      id: 4,
      author: "Bihan Viranga",
      email: "drktporktpok@gmail.com",
      subject: "Lorem ipsum, or lipsum as it is sometimes known",
      content:
        "With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
      mailStatus: "sent",
    },
    {
      id: 5,
      author: "Bihan Viranga",
      email: "dkrpotk@gmail.com",
      subject: "Lorem ipsum, or lipsum as it is sometimes known",
      content:
        "With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
      mailStatus: "inbox",
    },
    {
      id: 6,
      author: "Bihan Viranga",
      email: "dq]qp]@gmail.com",
      subject: "Lorem ipsum, or lipsum as it is sometimes known",
      content:
        "With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
      mailStatus: "draft",
    },
    {
      id: 7,
      author: "Bihan Viranga",
      email: "dnkeoj@gmail.com",
      subject: "Lorem ipsum, or lipsum as it is sometimes known",
      content:
        "With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
      mailStatus: "inbox",
    },
    {
      id: 8,
      author: "Bihan Viranga",
      email: "dp-o4o@gmail.com",
      subject: "Lorem ipsum, or lipsum as it is sometimes known",
      content:
        "With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
      mailStatus: "spam",
    },
    {
      id: 9,
      author: "Bihan Viranga",
      email: "drpk-o@gmail.com",
      subject: "Lorem ipsum, or lipsum as it is sometimes known",
      content:
        "With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
      mailStatus: "inbox",
    },
    {
      id: 10,
      author: "Bihan Viranga",
      email: "dmbop@gmail.com",
      subject: "Lorem ipsum, or lipsum as it is sometimes known",
      content:
        "With the online text generator you can process your personal Lorem Ipsum enriching it with html elements that define its structure, with the possibility to insert external links, but not only.",
      mailStatus: "spam",
    },
  ],
};

export const mailSlice = createSlice({
  name: "mailData",
  initialState,
  reducers: {
    // add new mail object item to object list
    sendNewMail: (state, action) => {
      state.value.push(action.payload);
    },
  },
});

export const { sendNewMail } = mailSlice.actions;

export default mailSlice.reducer;
