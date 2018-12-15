-- phpMyAdmin SQL Dump
-- version 4.7.7
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Дек 15 2018 г., 12:24
-- Версия сервера: 5.7.20
-- Версия PHP: 7.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `avolution`
--

-- --------------------------------------------------------

--
-- Структура таблицы `brings`
--

CREATE TABLE `brings` (
  `id` int(11) NOT NULL,
  `name` char(64) DEFAULT NULL,
  `category` char(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `brings`
--

INSERT INTO `brings` (`id`, `name`, `category`) VALUES
(1, 'Не обычный', 'Личный рост'),
(2, 'Не обычный', 'Личный рост'),
(3, 'Не обычный', 'Личный рост'),
(4, 'Странный', 'Личный рост'),
(5, 'Гений', 'Личный рост'),
(6, 'аппфывк', 'Творчество'),
(7, 'аппфывк', 'Творчество'),
(8, 'junior Fullstack', 'Карьера');

-- --------------------------------------------------------

--
-- Структура таблицы `tasks`
--

CREATE TABLE `tasks` (
  `id` int(11) NOT NULL,
  `name` char(64) DEFAULT NULL,
  `bring` char(64) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Дамп данных таблицы `tasks`
--

INSERT INTO `tasks` (`id`, `name`, `bring`) VALUES
(1, 'Язык тела', 'Не обычный'),
(2, 'Прочитать 120 книг', 'Гений'),
(3, 'Пройти курс по Английсскому', 'Странный'),
(4, 'Пройти курс  по ускоренному обучению', 'Странный'),
(5, 'Прочитать 60 книг', 'Не обычный');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `brings`
--
ALTER TABLE `brings`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `brings`
--
ALTER TABLE `brings`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT для таблицы `tasks`
--
ALTER TABLE `tasks`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
