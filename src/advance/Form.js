import React from "react";
import "./Form.css";
import { useForm } from "react-hook-form";

const Form = () => {
  const { handleSubmit, register } = useForm();

  const onSubmit = (data) => {
    let queryParams = encodeURIComponent(data.url);
    let url = "https://api.shrtco.de/v2/shorten";
    let request = new Request(url, {
      method: "POST",
      headers: new Headers({
        "content-type": "application/x-www-form-urlencoded",
      }),
      body: `url=${queryParams}`,
    });
    fetch(request).then((res) => {
      console.log(res);
    });

    // fetch(`https://api.shrtco.de/v2/shorten`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/x-www-form-urlencoded",
    //   },
    //   body: `url=${queryParams}`,
    // }).then((res) => {
    //   console.log(res);
    // });
  };

  return (
    <form className="wrapper" onSubmit={handleSubmit(onSubmit)}>
      <img src="./images/bg-shorten-desktop.svg" alt="bg shorten" />
      <input name="url" placeholder="Shorten a link here..." ref={register} />
      <button className="button-small">Shorten it!</button>
    </form>
  );
};

export default Form;
