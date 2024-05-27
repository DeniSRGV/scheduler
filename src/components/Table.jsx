import Shifts from "./Shifts";
import "./Table.css";
import { CalendarOutlined } from "@ant-design/icons";

const truncateText = (text, maxLength = 30) => {
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }
  return text;
};
const scheduleData = [
  {
    title: "ДМ СПБ Академ Парк 5871",
    totalHours: "370:00",
    city: "г Санкт-петербург, пр-кт Гражданский 120",
    hours: "370:00",
  },
  {
    title: "ДМ СПБ Академ Атмосфера 1841",
    totalHours: "340:00",
    city: "г Санкт-петербург,  Коменданская пл.1",
    hours: "340:00",
  },
  {
    title: "ДМ СПБ Болкания Нова 1808",
    totalHours: "320:00",
    city: "г Санкт-петербург, Балканская пл 5",
    hours: "320:00",
  },
  {
    title: "ДМ СПБ Гран Каньон 5301",
    totalHours: "310:00",
    city: "г Санкт-петербург, пр-кт Энгельса 154",
    hours: "310:00",
  },
];

const Table = () => {
  return (
    <div className="schedule-table">
      <div className="title-shop">
        <div className="title">
          Детский мир
          <div className="total-hours">1340</div>
        </div>
      </div>
      {scheduleData.map((elem, index) => (
        <div key={index} className="section">
          <div className="section-header">
            <div className="title-shop">
              <div className="title">
                {elem.title}
                <span>{truncateText(elem.city)}</span>
              </div>
              <div className="total-hours">{elem.hours}</div>
            </div>
            <div className="title-shop-description">
              <div className="description">
                <CalendarOutlined
                  style={{
                    marginRight: "5px",
                  }}
                />
                Работа на кассе
              </div>
              <div className="total-hours">{elem.totalHours}</div>
            </div>
          </div>
          <div className="shifts">
            <Shifts />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Table;
