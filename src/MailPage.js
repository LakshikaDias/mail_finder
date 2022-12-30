import React from "react";
import { useParams } from "react-router-dom";
import data from "./data";

const MailPage = () => {
  let { id } = useParams();

  //   console.log(id, "hiii mailId");

  const mailContent = data.find((data) => {
    return data.id == id;
  });

  //   console.log(mailContent, "hiiiiii content");
  //   console.log(mailContent, "hiiiiii content");

  return (
    <>
      <p>author:{mailContent.author}</p>
      <p>email:{mailContent.email}</p>
      <p>content:{mailContent.content}</p>
    </>
  );
};

export default MailPage;
