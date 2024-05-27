import { Fragment } from "react";

const possibleNames = [
  "ЛебАА",
  "СтепАА",
  "СмирАИ",
  "КучАИ",
  "ТкаИИ",
  "КорРИ",
  "АлеСО",
  "СтепАИ",
  "КудПВ",
  "ИмуЗГ",
  "ТруСА",
];

const getRandomName = () => {
  const randomIndex = Math.floor(Math.random() * possibleNames.length);
  return possibleNames[randomIndex];
};
const Shifts = () => {
  return (
    <>
      {new Array(Math.floor(Math.random() * (20 - 7 + 1)) + 10)
        .fill(null)
        .map((_, index) => (
          <div key={index} className="shift-block">
            {Math.random() < 0.2 ? (
              <span>&nbsp;</span>
            ) : (
              <Fragment>
                10-21
                <span>3528Р</span>
                <span>{getRandomName()}</span>
              </Fragment>
            )}
          </div>
        ))}
    </>
  );
};

export default Shifts;
