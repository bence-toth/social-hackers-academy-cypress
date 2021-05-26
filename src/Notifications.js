import locale from "./locale";

import "./Notifications.css";

const Notifications = ({ checkIns }) => {
  const relevantCheckIns = checkIns.filter(
    (checkIn) => checkIn.shouldShowNotification
  );
  return (
    <div className="notifications">
      {relevantCheckIns.map((notification) => (
        <div className="notification" key={notification.time}>
          Your {locale.mood(notification.mood)} mood was registered.
        </div>
      ))}
    </div>
  );
};

export default Notifications;
