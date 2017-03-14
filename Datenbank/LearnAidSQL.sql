-- phpMyAdmin SQL Dump
-- version 4.6.5.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Erstellungszeit: 14. Mrz 2017 um 13:35
-- Server-Version: 10.1.21-MariaDB
-- PHP-Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Datenbank: `learnaid`
--
CREATE DATABASE IF NOT EXISTS `learnaid` DEFAULT CHARACTER SET latin1 COLLATE latin1_swedish_ci;
USE `learnaid`;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `easycard`
--

CREATE TABLE `easycard` (
  `id_easyCard` int(11) NOT NULL,
  `easyAnswer` text NOT NULL,
  `easyQuestion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `hardcard`
--

CREATE TABLE `hardcard` (
  `id_hardcard` int(11) NOT NULL,
  `hardQuestion` text NOT NULL,
  `hardAnswer` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `haseasycard`
--

CREATE TABLE `haseasycard` (
  `id` int(11) NOT NULL,
  `id_topic` int(11) NOT NULL,
  `id_easycard` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `hashardcard`
--

CREATE TABLE `hashardcard` (
  `id` int(11) NOT NULL,
  `id_topic` int(11) NOT NULL,
  `id_hardcard` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `hasmediumcards`
--

CREATE TABLE `hasmediumcards` (
  `id` int(11) NOT NULL,
  `id_topic` int(11) NOT NULL,
  `id_mediumcard` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `mediumcard`
--

CREATE TABLE `mediumcard` (
  `id_mediumCard` int(11) NOT NULL,
  `mediumAnswer` text NOT NULL,
  `mediumQuestion` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Tabellenstruktur für Tabelle `topic`
--

CREATE TABLE `topic` (
  `id_topic` int(11) NOT NULL,
  `name` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Daten für Tabelle `topic`
--

INSERT INTO `topic` (`id_topic`, `name`) VALUES
(1, 'Ionic'),
(2, 'PHP'),
(3, 'Schach'),
(4, 'Hello World');

--
-- Indizes der exportierten Tabellen
--

--
-- Indizes für die Tabelle `easycard`
--
ALTER TABLE `easycard`
  ADD PRIMARY KEY (`id_easyCard`);

--
-- Indizes für die Tabelle `hardcard`
--
ALTER TABLE `hardcard`
  ADD PRIMARY KEY (`id_hardcard`);

--
-- Indizes für die Tabelle `haseasycard`
--
ALTER TABLE `haseasycard`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `hashardcard`
--
ALTER TABLE `hashardcard`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `hasmediumcards`
--
ALTER TABLE `hasmediumcards`
  ADD PRIMARY KEY (`id`);

--
-- Indizes für die Tabelle `mediumcard`
--
ALTER TABLE `mediumcard`
  ADD PRIMARY KEY (`id_mediumCard`);

--
-- Indizes für die Tabelle `topic`
--
ALTER TABLE `topic`
  ADD PRIMARY KEY (`id_topic`);

--
-- AUTO_INCREMENT für exportierte Tabellen
--

--
-- AUTO_INCREMENT für Tabelle `easycard`
--
ALTER TABLE `easycard`
  MODIFY `id_easyCard` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `hardcard`
--
ALTER TABLE `hardcard`
  MODIFY `id_hardcard` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `haseasycard`
--
ALTER TABLE `haseasycard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `hashardcard`
--
ALTER TABLE `hashardcard`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `hasmediumcards`
--
ALTER TABLE `hasmediumcards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `mediumcard`
--
ALTER TABLE `mediumcard`
  MODIFY `id_mediumCard` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT für Tabelle `topic`
--
ALTER TABLE `topic`
  MODIFY `id_topic` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
