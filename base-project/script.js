const btn = document.getElementById(`btn`);
const notificationsContainer = document.getElementById(`notifications-container`);
let numberOfNotifications = notificationsContainer.children.length;

const addNewNotification = () => {
    const notification = document.createElement(`div`);
    notification.classList.add(`notification`);
    const text = document.createTextNode(`new notification${++numberOfNotifications}!`);
    notification.appendChild(text);
    notificationsContainer.appendChild(notification);
};

setInterval(() => {
    if (notificationsContainer.children.length !== 0) notificationsContainer.firstElementChild.remove(), --numberOfNotifications;
}, 1500);

btn.addEventListener(`click`, addNewNotification);