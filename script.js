
// Целевая дата: 6 утра 10 февраля 2025 года по MSK
const targetDate = new Date('2025-04-01T06:00:00+03:00');

// Массив с аудиофайлами
const audioFiles = [
    'audio/audio1.mp3',
    'audio/audio2.mp3',
    'audio/audio3.mp3'
];

let currentAudioIndex = 0; // Индекс текущего аудиофайла
const audio = new Audio(audioFiles[currentAudioIndex]); // Объект Audio

function updateTimer() {
    const now = new Date(); // Текущее время
    const difference = targetDate - now; // Разница в миллисекундах

    // Если время истекло
    if (difference <= 0) {
        document.getElementById('timer').textContent = 'Время пришло!';
        return;
    }

    // Вычисляем дни, часы, минуты и секунды
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    // const milliseconds = Math.floor((difference % 1000));

    // Форматируем вывод
    document.getElementById('timer').textContent =
        `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Кнопка для разрешения воспроизведения
document.getElementById('playButton').addEventListener('click', () => {
    audio.play().then(() => {
        console.log("Воспроизведение разрешено!");
        // Скрываем кнопку
        document.getElementById('playButton').style.display = 'none';
    }).catch(error => {
        console.error("Ошибка воспроизведения аудио:", error);
    });
});

// Запускаем таймер
setInterval(updateTimer, 0.00001);

// Обновляем таймер сразу при загрузке страницы
updateTimer();

// Данные для карточек
let codewarsCount = 0; // Счётчик задач Codewars
let workoutData = {}; // Данные тренировок
let orderDetails = { // Данные заказа
    date: "Не указано",
    description: "Не указано",
    link: "#"
};

// Обновляем счётчик задач Codewars
function incrementCodewars() {
    codewarsCount++;
    document.getElementById("codewarsCount").textContent = codewarsCount;
}

// Добавляем детали заказа
function addOrderDetails() {
    const date = prompt("Введите дату заказа:");
    const description = prompt("Введите описание заказа:");
    const link = prompt("Введите ссылку на заказ:");

    if (date && description && link) {
        orderDetails.date = date;
        orderDetails.description = description;
        orderDetails.link = link;

        document.getElementById("orderDate").textContent = orderDetails.date;
        document.getElementById("orderDescription").textContent = orderDetails.description;
        document.getElementById("orderLink").href = orderDetails.link;
        document.getElementById("orderLink").textContent = "Перейти к заказу";
    } else {
        alert("Все поля должны быть заполнены!");
    }
}

// Создаём календарь
function createCalendar() {
    const calendar = document.getElementById("calendar");
    const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"];

    days.forEach((day, index) => {
        const dayElement = document.createElement("div");
        dayElement.className = "day";
        dayElement.textContent = day;
        dayElement.addEventListener("click", () => showWorkoutDescription(index + 1));
        calendar.appendChild(dayElement);
    });
}

// Показываем описание тренировки
function showWorkoutDescription(day) {
    const description = prompt(`Опишите тренировку для дня ${day}:`);
    if (description) {
        workoutData[day] = description;
        document.getElementById("workoutDescription").value = `День ${day}: ${description}`;
    }
}

// Инициализация
document.addEventListener("DOMContentLoaded", () => {
    createCalendar();
});