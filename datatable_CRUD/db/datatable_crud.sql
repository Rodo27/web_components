-- phpMyAdmin SQL Dump
-- version 4.9.7
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 21-08-2023 a las 18:56:41
-- Versión del servidor: 5.7.36
-- Versión de PHP: 5.6.40

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `datatable_crud`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `laboratorio`
--

DROP TABLE IF EXISTS `laboratorio`;
CREATE TABLE IF NOT EXISTS `laboratorio` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `laboratorio`
--

INSERT INTO `laboratorio` (`id`, `nombre`) VALUES
(1, 'AbbVie Farmacéuticos, S.A. de C.V. (ALLERGAN AESTHETICS)'),
(2, 'Bayer de México, S.A. de C.V.'),
(3, 'Bonarum Pharma México'),
(4, 'Eli Lilly y Compañía de México, S.A. de C.V.'),
(5, 'Ferring, S.A. de C.V.'),
(6, 'Galderma México, S.A. de C.V.'),
(7, 'Genomma Lab Internacional, S.A.B. de C.V.'),
(8, 'GlaxoSmithKline México, S.A. de C.V.'),
(9, 'Importadora y Manufacturera Bruluart, S.A.'),
(10, 'Laboratorio PISA, S.A. de C.V.'),
(11, 'Laboratorios Cryofarma, S.A. de C.V.'),
(12, 'Landsteiner Scientific, S.A. de C.V.'),
(13, 'Merck, S.A. de C.V.'),
(14, 'M8 Pharmaceuticals'),
(15, 'Novartis Farmacéutica, S.A. de C.V.');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
