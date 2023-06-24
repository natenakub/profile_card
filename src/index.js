import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

function toThaiDateString(date) {
  let monthNames = [
    "มกราคม",
    "กุมภาพันธ์",
    "มีนาคม",
    "เมษายน",
    "พฤษภาคม",
    "มิถุนายน",
    "กรกฎาคม",
    "สิงหาคม.",
    "กันยายน",
    "ตุลาคม",
    "พฤศจิกายน",
    "ธันวาคม",
  ];

  let year = date.getFullYear() + 543;
  let month = monthNames[date.getMonth()];
  let numOfDay = date.getDate();

  let hour = date.getHours().toString().padStart(2, "0");
  let minutes = date.getMinutes().toString().padStart(2, "0");
  let second = date.getSeconds().toString().padStart(2, "0");

  return `${numOfDay} ${month} ${year} ` + `${hour}:${minutes}:${second} น.`;
}

// let date1 = new Date();
// console.log(toThaiDateString(date1));

function MyDateTime() {
  const dateNow = new Date();
  const thaiDateString = toThaiDateString(dateNow);
  return <div>{thaiDateString}</div>;
}

function App() {
  return (
    <div className="card">
      <Avatar />

      <div className="data">
        <Intro />
        <SkillList />
      </div>

      <MyDateTime />
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill color="orange" skill="PHP" emoji="Professional" />
      <Skill color="blue" skill="React" emoji="Professional" />
      <Skill color="pink" skill="Javascript" emoji="Professional" />
      <Skill color="red" skill="Laravel" emoji="Professional" />
    </div>
  );
}

function Skill(props) {
  return (
    <div className="skill" style={{ backgroundColor: props.color }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
    </div>
  );
}

function Intro() {
  return (
    <div>
      <h1>นายณัฐวุฒิ บรรเรืองทอง</h1>
      <p>
        <b>นักศึกษาปริญญาโท</b>
        <br />
        สาขาวิชาเทคโนโลยีสารสนเทศและนวัตกรรมดิจิตัล
        <br />
        คณะวิทยาศาสตร์ มหาวิทยาลัยอุบลราชธานี
        <br />
        วันจันทร์ ถึง ศุกร์ 08.30 - 16.30 เป็นนักวิชาการคอมพิวเตอร์
        <br />
        วันจันทร์ ถึง ศุกร์ 16.30 - 24.00 เป็น Programmer
        <br />
        วันเสาร์ ถึง อาทิตย์ เป็นนักศึกษาระดับปริญญาโท
      </p>
    </div>
  );
}

function Avatar() {
  return (
    <img src="image/BKP06153.JPG" alt="Natthawut_B" className="avatar"></img>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
