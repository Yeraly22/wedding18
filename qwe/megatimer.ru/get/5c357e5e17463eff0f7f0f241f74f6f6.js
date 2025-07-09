(function () {
    var timerId = "5c357e5e17463eff0f7f0f241f74f6f6";
    // Уникализируем id, если на странице уже есть такой таймер
    while (document.getElementById("timer" + timerId)) {
        timerId = timerId + "0";
    }
    // Вставляем контейнер для таймера
    document.write("<div id='timer" + timerId + "' style='min-width:227px;height:40px;'></div>");

    // Подключаем скрипт таймера
    var timerScript = document.createElement("script");
    timerScript.src = "https://megatimer.ru/timer/timer.min.js?v=1";

    // Функция инициализации таймера
    var initTimer = function (runNow) {
        var timer = new MegaTimer(timerId, {
            "view": [1, 1, 1, 1],
            "type": {
                "currentType": "3",
                "params": {
                    "weekdays": [1, 1, 1, 1, 1, 1, 1],  // Все дни недели
                    "usertime": true,  // Используем время пользователя
                    "time": "00:00",  // Начало отсчёта
                    "tz": 300,  // Часовой пояс (для Алматы +3)
                    "hours": "987",  // 125 часов (пример)
                    "minutes": "60"  // 60 минут в часе
                }
            },
            "design": {
                "type": "text",
                "params": {
                    "number-font-family": {
                        "family": "Comfortaa",
                        "link": "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "number-font-size": "28",
                    "number-font-color": "#000000",
                    "separator-margin": "9",
                    "separator-on": true,
                    "separator-text": ":",
                    "text-on": true,
                    "text-font-family": {
                        "family": "Comfortaa",
                        "link": "<link href='//fonts.googleapis.com/css?family=Comfortaa&subset=latin,cyrillic' rel='stylesheet' type='text/css'>"
                    },
                    "text-font-size": "12",
                    "text-font-color": "#000000"
                }
            },
            "designId": 1,
            "theme": "white",
            "width": 227,
            "height": 40
        });
        if (runNow != null) timer.run();
    };

    timerScript.onload = initTimer;
    timerScript.onreadystatechange = function () {
        if (timerScript.readyState == "loaded") initTimer(1);
    };
    var head = document.head || document.getElementsByTagName("head")[0];
    head.appendChild(timerScript);
})();