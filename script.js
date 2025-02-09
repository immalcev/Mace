// Целевая дата: 6 утра 10 февраля 2025 года по MSK
const targetDate = new Date('2025-02-10T06:00:00+03:00');

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

    // Форматируем вывод
    document.getElementById('timer').textContent = 
        `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

// Запускаем таймер
setInterval(updateTimer, 1000);

// Обновляем таймер сразу при загрузке страницы
updateTimer();

const audio = new Audio('notification.mp3');
audio.play();