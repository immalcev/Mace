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