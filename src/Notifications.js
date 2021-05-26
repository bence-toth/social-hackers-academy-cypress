import "./Notifications.css";

const Notifications = ({ checkIns }) => {
  const relevantCheckIns = checkIns.filter(
    (checkIn) => checkIn.shouldShowNotification
  );
  return (
    <div className="notifications">
      {relevantCheckIns.map((notification) => (
        <div class="notification">
          Your mood ({notification.mood}) was registered.
        </div>
      ))}
    </div>
  );
};

export default Notifications;
