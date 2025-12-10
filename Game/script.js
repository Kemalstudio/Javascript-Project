"use strict";

      // Элементы
      const player0Element = document.querySelector(".player--0");
      const player1Element = document.querySelector(".player--1");
      const score0Element = document.getElementById("score--0");
      const score1Element = document.getElementById("score--1");
      const current0Element = document.getElementById("current--0");
      const current1Element = document.getElementById("current--1");

      const diceElement = document.querySelector(".dice");
      const btnNew = document.querySelector(".btn--new");
      const btnRoll = document.querySelector(".btn--roll");
      const btnHold = document.querySelector(".btn--hold");
      const fireworksContainer = document.querySelector(".fireworks-container");

      let totalScores, currnetScore, activePlayer, isPlaying;

      // Функция инициализации игры
      const initGame = function () {
        totalScores = [0, 0];
        currnetScore = 0;
        activePlayer = 0;
        isPlaying = true;

        score0Element.textContent = 0;
        score1Element.textContent = 0;
        current0Element.textContent = 0;
        current1Element.textContent = 0;

        diceElement.classList.add("hidden");
        player0Element.classList.remove("player--winner");
        player1Element.classList.remove("player--winner");
        player0Element.classList.add("player--active");
        player1Element.classList.remove("player--active");

        btnRoll.disabled = false;
        btnHold.disabled = false;
        
        // Очищаем салют, если нажали новую игру во время салюта
        fireworksContainer.innerHTML = '';
      };

      initGame();

      const switchPlayer = function () {
        document.getElementById(`current--${activePlayer}`).textContent = 0;
        currnetScore = 0;
        activePlayer = activePlayer === 0 ? 1 : 0;
        player0Element.classList.toggle("player--active");
        player1Element.classList.toggle("player--active");
      };

      // ======== ЛОГИКА ПРОФЕССИОНАЛЬНОГО САЛЮТА ========
      
      // Вспомогательная функция для случайного числа
      function random(min, max) {
        return Math.random() * (max - min) + min;
      }

      // Создание одного взрыва в конкретных координатах (x, y)
      function createExplosion(x, y) {
        const particleCount = 50; // Количество частиц в одном взрыве
        const colors = [
          '#ff0040', '#ff00ff', '#4000ff', '#00ffff', 
          '#00ff40', '#ffff00', '#ff8000', '#ffffff'
        ];
        
        // Выбираем случайный цвет для этого взрыва (или можно делать разноцветным)
        const mainColor = colors[Math.floor(Math.random() * colors.length)];

        for (let i = 0; i < particleCount; i++) {
          const p = document.createElement("div");
          p.classList.add("particle");
          
          // Случайный размер частиц
          const size = random(4, 8) + "px";
          p.style.width = size;
          p.style.height = size;
          
          // Цвет (либо все одного цвета, либо случайный из палитры)
          p.style.backgroundColor = Math.random() > 0.5 ? mainColor : colors[Math.floor(Math.random() * colors.length)];
          
          // Позиция старта (центр взрыва)
          p.style.left = x + "px";
          p.style.top = y + "px";

          // Физика разлета
          // Угол и расстояние
          const angle = random(0, Math.PI * 2);
          const velocity = random(50, 200); // Радиус разлета
          
          // Вычисляем конечную точку (tx, ty)
          // Добавляем немного "гравитации" к ty (плюс к Y тянет вниз)
          const tx = Math.cos(angle) * velocity;
          const ty = Math.sin(angle) * velocity + random(50, 100); 

          p.style.setProperty("--tx", `${tx}px`);
          p.style.setProperty("--ty", `${ty}px`);

          // Добавляем в контейнер
          fireworksContainer.appendChild(p);

          // Удаляем частицу из DOM после анимации (1 сек)
          setTimeout(() => {
            p.remove();
          }, 1000);
        }
      }

      // Функция запуска салюта на 8 секунд
      function startProfessionalFireworks() {
        const duration = 8000; // 8 секунд
        const end = Date.now() + duration;

        // Интервал создания взрывов
        const interval = setInterval(function() {
          if (Date.now() > end) {
            return clearInterval(interval);
          }

          const x = random(window.innerWidth * 0.1, window.innerWidth * 0.9);
          const y = random(window.innerHeight * 0.1, window.innerHeight * 0.6);

          createExplosion(x, y);
        }, 300); 
      }


      btnRoll.addEventListener("click", function () {
        if (isPlaying) {
          const diceNumber = Math.trunc(Math.random() * 6) + 1;

          diceElement.classList.remove("hidden");
          diceElement.src = `img/dice${diceNumber}.png`;

          if (diceNumber !== 1) {
            currnetScore += diceNumber;
            document.getElementById(`current--${activePlayer}`).textContent = currnetScore;
          } else {
            switchPlayer();
          }
        }
      });

      btnHold.addEventListener("click", function () {
        if (isPlaying) {
          totalScores[activePlayer] += currnetScore;
          document.getElementById(`score--${activePlayer}`).textContent = totalScores[activePlayer];

          if (totalScores[activePlayer] >= 100) {
            isPlaying = false;
            diceElement.classList.add("hidden");

            document
              .querySelector(`.player--${activePlayer}`)
              .classList.add("player--winner");
            document
              .querySelector(`.player--${activePlayer}`)
              .classList.remove("player--active");
              
            btnRoll.disabled = true;
            btnHold.disabled = true;

            // ЗАПУСК УЛУЧШЕННОГО САЛЮТА
            startProfessionalFireworks();
          } else {
            switchPlayer();
          }
        }
      });

      btnNew.addEventListener("click", initGame); 