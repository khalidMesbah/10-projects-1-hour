const btn = document.getElementById(`btn`);
const notificationsContainer = document.getElementById(`notifications-container`);
let numberOfNotifications = notificationsContainer.children.length;

const addNewNotification = () => {
    const notification = document.createElement(`div`);
    notification.classList.add(`notification`);
    const text = document.createTextNode(`new notification${++numberOfNotifications}!`);
    notification.appendChild(text);
    notificationsContainer.prepend(notification);
};

setInterval(() => {
    if (notificationsContainer.children.length !== 0) notificationsContainer.lastElementChild.remove(), --numberOfNotifications;
}, 1500);

btn.addEventListener(`click`, addNewNotification);