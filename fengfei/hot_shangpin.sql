-- phpMyAdmin SQL Dump
-- version 4.5.2
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: 2017-02-23 09:30:57
-- 服务器版本： 10.1.10-MariaDB
-- PHP Version: 7.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `huiji`
--

-- --------------------------------------------------------

--
-- 表的结构 `hot_shangpin`
--

CREATE TABLE `hot_shangpin` (
  `img` varchar(50) DEFAULT NULL,
  `name` varchar(15) CHARACTER SET utf8 DEFAULT NULL,
  `need_num` int(11) DEFAULT NULL,
  `join_num` int(11) DEFAULT NULL,
  `hot` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- 转存表中的数据 `hot_shangpin`
--

INSERT INTO `hot_shangpin` (`img`, `name`, `need_num`, `join_num`, `hot`) VALUES
('img/phone.png', '商品名称1', 123456, 2222, 1),
('img/phone.png', '商品名称2', 123456, 2222, 1),
('img/phone.png', '商品名称3', 123456, 2222, 1),
('img/phone.png', '商品名称4', 123456, 2222, 1),
('img/phone.png', '商品名称5', 123456, 2222, 1),
('img/phone.png', '商品名称6', 123456, 2222, 1),
('img/phone.png', '商品名称7', 123456, 2222, 1),
('img/phone.png', '商品名称8', 123456, 2222, 1),
('img/phone.png', '商品名称9', 123456, 2222, 2),
('img/phone.png', '商品名称10', 123456, 2222, 2),
('img/phone.png', '商品名称11', 123456, 2222, 2),
('img/phone.png', '商品名称12', 123456, 2222, 2),
('img/phone.png', '商品名称13', 123456, 2222, 2),
('img/phone.png', '商品名称14', 123456, 2222, 3),
('img/phone.png', '商品名称15', 123456, 2222, 3),
('img/phone.png', '商品名称17', 123456, 2222, 3),
('img/phone.png', '商品名称19', 123456, 2222, 4),
('img/phone.png', '商品名称16', 123456, 2222, 3),
('img/phone.png', '商品名称20', 123456, 2222, 4),
('img/phone.png', '商品名称21', 123456, 2222, 4),
('img/phone.png', '商品名称22', 123456, 2222, 4),
('img/phone.png', '商品名称23', 123456, 2222, 4),
('img/phone.png', '商品名称24', 123456, 2222, 5),
('img/phone.png', '商品名称25', 123456, 2222, 5),
('img/phone.png', '商品名称26', 123456, 2222, 5),
('img/phone.png', '商品名称27', 123456, 2222, 5),
('img/phone.png', '商品名称28', 123456, 2222, 5),
('img/phone.png', '商品名称29', 123456, 2222, 6),
('img/phone.png', '商品名称30', 123456, 2222, 6),
('img/phone.png', '商品名称31', 123456, 2222, 6),
('img/phone.png', '商品名称18', 123456, 2222, 3),
('img/phone.png', '商品名称32', 123456, 2222, 6),
('img/phone.png', '商品名称34', 123456, 2222, 7),
('img/phone.png', '商品名称35', 123456, 2222, 7),
('img/phone.png', '商品名称36', 123456, 2222, 7),
('img/phone.png', '商品名称37', 123456, 2222, 7),
('img/phone.png', '商品名称38', 123456, 2222, 7),
('img/phone.png', '商品名称39', 123456, 2222, 8),
('img/phone.png', '商品名称40', 123456, 2222, 8),
('img/phone.png', '商品名称41', 123456, 2222, 8),
('img/phone.png', '商品名称42', 123456, 2222, 8),
('img/phone.png', '商品名称43', 123456, 2222, 8),
('img/phone.png', '商品名称44', 123456, 2222, 9),
('img/phone.png', '商品名称45', 123456, 2222, 9),
('img/phone.png', '商品名称46', 123456, 2222, 9),
('img/phone.png', '商品名称47', 123456, 2222, 9),
('img/phone.png', '商品名称48', 123456, 2222, 9),
('img/phone.png', '商品名称49', 123456, 2222, 9),
('img/phone.png', '商品名称50', 123456, 2222, 9),
('img/phone.png', '商品名称51', 123456, 2222, 9),
('img/phone.png', '商品名称52', 123456, 2222, 9),
('img/phone.png', '商品名称53', 123456, 2222, 9),
('img/phone.png', '商品名称54', 123456, 2222, 9),
('img/phone.png', '商品名称55', 123456, 2222, 9),
('img/phone.png', '商品名称56', 123456, 2222, 9),
('img/phone.png', '商品名称57', 123456, 2222, 9),
('img/phone.png', '商品名称58', 123456, 2222, 9),
('img/phone.png', '商品名称59', 123456, 2222, 9),
('img/phone.png', '商品名称60', 123456, 2222, 9),
('img/phone.png', '商品名称61', 123456, 2222, 9),
('img/phone.png', '商品名称62', 123456, 2222, 9),
('img/phone.png', '商品名称63', 123456, 2222, 9),
('img/phone.png', '商品名称64', 123456, 2222, 9),
('img/phone.png', '商品名称65', 123456, 2222, 9),
('img/phone.png', '商品名称66', 123456, 2222, 9),
('img/phone.png', '商品名称67', 123456, 2222, 9),
('img/phone.png', '商品名称68', 123456, 2222, 9),
('img/phone.png', '商品名称69', 123456, 2222, 9),
('img/phone.png', '商品名称70', 123456, 2222, 9),
('img/phone.png', '商品名称71', 123456, 2222, 9),
('img/phone.png', '商品名称72', 123456, 2222, 9),
('img/phone.png', '商品名称73', 123456, 2222, 9),
('img/phone.png', '商品名称33', 123456, 2222, 6),
('img/phone.png', '商品名称74', 123456, 2222, 9);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
