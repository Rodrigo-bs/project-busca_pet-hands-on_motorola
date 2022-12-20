-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12-Ago-2022 às 01:14
-- Versão do servidor: 10.4.24-MariaDB
-- versão do PHP: 7.4.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `w11082022_buscapet`
--

-- --------------------------------------------------------
-- comando  para criação da base de dados
DROP SCHEMA  IF EXISTS  pet_search;
CREATE DATABASE pet_search;
USE pet_search;
--
-- Estrutura da tabela `ad`
--

CREATE TABLE `ad` (
  `id_ad` int(10) NOT NULL,
  `ad_title` varchar(255) NOT NULL,
  `ad_description` text DEFAULT NULL,
  `ad_photos` text DEFAULT NULL,
  `ad_date_register` datetime NOT NULL,
  `ad_localization` text NOT NULL,
  `ad_recompense` varchar(30) DEFAULT NULL,
  `id_type_ad_fk` int(10) NOT NULL,
  `id_pet_fk` int(10) NOT NULL,
  `id_user_fk` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `ad`
--

INSERT INTO `ad` (`id_ad`, `ad_title`, `ad_description`, `ad_photos`, `ad_date_register`, `ad_localization`, `ad_recompense`, `id_type_ad_fk`, `id_pet_fk`, `id_user_fk`) VALUES
(1, 'Cachorro lost', 'Meu cachorro acabou fugindo de casa, é um vira-lata caramelo, ele está com uma coleira vermelha.', 'http://localhost:5050/photos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 1, 1, 1),
(2, 'Cachorro lost', 'Meu cachorro acabou fugindo de casa, é um Basenji , ele está com uma coleira azul.', 'http://localhost:5050/photos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 1, 1, 2),
(3, 'gato lost', 'Meu gato acabou fugindo de casa, é um Persa, ele está com uma coleira vermelha e atende por xanin.', 'http://localhost:5050/photos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 1, 1, 3),
(4, 'gato lost', 'Meu gato acabou fugindo de casa, é um Ragdoll fêmea e atende por bolinha.', 'http://localhost:5050/photos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 1, 1, 4),
(5, 'gato lost', 'Meu gato acabou fugindo de casa, é um Sphynx raro, atende por maria', 'http://localhost:5050/photos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 1, 1, 5),
(6, 'Cachorro found', 'Cachorro found nas proximidades do bosque', 'http://localhost:5050/photos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 2, 1, 1),
(7, 'Cachorro found', 'Cachorro found nas proximidades da biblioteca pública do centro da cidade', 'http://localhost:5050/photos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 2, 1, 2),
(8, 'gato found', 'gato found nas proximidades do tucumã', 'http://localhost:5050/photos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 2, 1, 3),
(9, 'gato found', 'gato found nas proximidades do são francisco', 'http://localhost:5050/photos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 2, 1, 4),
(10, 'gato found', 'gato found nas proximidades do bola preta', 'http://localhost:5050/photos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 2, 1, 5);




-- --------------------------------------------------------

--
-- Estrutura da tabela `category`
--

CREATE TABLE `category` (
  `id_category` int(10) NOT NULL,
  `category_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `category`
--

INSERT INTO `category` (`id_category`, `category_name`) VALUES
(1, 'cachorro'),
(2, 'Gato');

-- --------------------------------------------------------

--
-- Estrutura da tabela `color`
--

CREATE TABLE `color` (
  `id_color` int(10) NOT NULL,
  `color_name` varchar(60) NOT NULL,
  `color_hexadecimal` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `color`
--

INSERT INTO `color` (`id_color`, `color_name`, `color_hexadecimal`) VALUES
(1, 'marrom', 'aa7700'),
(2, 'Vermelho', 'ffcdd2'),
(3, 'Cinza', 'dcedc8');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pet`
--

CREATE TABLE `pet` (
  `id_pet` int(10) NOT NULL,
  `pet_name` varchar(100) DEFAULT NULL,
  `pet_description` text DEFAULT NULL,
  `pet_photo` varchar(255) NOT NULL,
  `pet_date_register` datetime NOT NULL,
  `pet_lost` int(11) NOT NULL,
  `id_color_pelagem_fk` int(10) NOT NULL,
  `id_fur_fk` int(10) NOT NULL,
  `id_category_fk` int(10) NOT NULL,
  `id_race_fk` int(10) NOT NULL,
  `id_user_fk` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pet`
--

INSERT INTO `pet` (`id_pet`, `pet_name`, `pet_description`, `pet_photo`, `pet_date_register`, `pet_lost`, `id_color_pelagem_fk`, `id_fur_fk`, `id_category_fk`, `id_race_fk`, `id_user_fk`) VALUES
(1, 'Pedrin', 'Um cachorro bonitão, caramelo de nascença, fui achado no quintal da vó do meu dono.', '', '2022-08-12 01:07:00', 0, 1, 3, 1, 1, 1),
(2, 'Allanis', 'Um gato fofinho, achado na rua esperança, não possui coleira logo não sei quem é meu dono', '', '04-13-2001 09:45:51', 0, 2, 2, 2, 11, 2),
(3, 'Alfredo', 'Um cachorro, foi achado brincando na rua botafogo', '', '04-13-2001 09:45:510', 0, 3, 1, 1, 2, 3),
(4, 'Ubi', 'Um gato muito fofo, found agora há pouco, está alimentado e hidratado.', '', '04-13-2001 09:45:51', 0, 1, 1, 2, 12, 4),
(5, 'Frajola', 'Um cachorro esperto e brincalhão', '', '04-13-2001 09:45:51', 0, 2, 3, 1, 3, 5),
(6, 'Mingau', 'Gato fofo e brincalhão, tem coleira de identificação', '', '04-13-2001 09:45:51', 0, 3, 2, 2, 13, 6),
(7, 'Louie', 'Um cachorro pra lá de esperto, found aqui na rua de casa', '', '04-13-2001 09:45:51', 0, 1, 3, 1, 4, 7),
(8, 'Harry', 'Gato found na rua esperança', '', '04-13-2001 09:45:51', 0, 2, 2, 2, 14, 8),
(9, 'Clark', 'Cachorro found na baixada da sobral', '', '04-13-2001 09:45:51', 0, 3, 1, 1, 5, 9),
(10, 'Felicity', 'Gato found nas intermediações do ramal do sucesso', '', '04-13-2001 09:45:51', 0, 1, 1, 2, 15, 10);

-- --------------------------------------------------------

--
-- Estrutura da tabela `fur`
--

CREATE TABLE `fur` (
  `id_fur` int(11) NOT NULL,
  `fur_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `fur`
--

INSERT INTO `fur` (`id_fur`, `fur_name`) VALUES
(3, 'grande'),
(2, 'médio'),
(1, 'pequeno');

-- --------------------------------------------------------

--
-- Estrutura da tabela `race`
--

CREATE TABLE `race` (
  `id_race` int(10) NOT NULL,
  `race_name` varchar(100) NOT NULL,
  `id_category_fk` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `race`
--

INSERT INTO `race` (`id_race`, `race_name`, `id_category_fk`) VALUES
(1, 'vira-lata', 1),
(2, 'Akita', 1),
(3, 'Basset hound', 1),
(4, 'Beagle', 1),
(5, 'Border Collie', 1),
(6, 'Basenji', 1),
(7, 'Pastor Alemão', 1),
(8, 'Bobtail', 1),
(9, 'Chihuahua', 1),
(10, 'Dobermann', 1),
(11, 'Persa', 2),
(12, 'Maine Coon', 2),
(13, 'Angorá', 2),
(14, 'Sphynx', 2),
(15, 'Ragdoll', 2),
(16, 'Ashera', 2),
(17, 'American Shorthair', 2),
(18, 'Exótico', 2),
(19, 'SRD', 2),
(20, 'British Shorthair', 2);

-- --------------------------------------------------------

--
-- Estrutura da tabela `typead`
--

CREATE TABLE `typead` (
  `id_type_ad` int(10) NOT NULL,
  `type_ad_name` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `typead`
--

INSERT INTO `typead` (`id_type_ad`, `type_ad_name`) VALUES
(2, 'found'),
(1, 'lost');

-- --------------------------------------------------------

--
-- Estrutura da tabela `user`
--

CREATE TABLE `user` (
  `id_user` int(10) NOT NULL,
  `user_name` varchar(100) NOT NULL,
  `user_email` varchar(100) NOT NULL,
  `user_password` varchar(100) NOT NULL,
  `user_cpf` varchar(11) NOT NULL,
  `user_phone` varchar(20) DEFAULT NULL,
  `user_photo` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `user`
--

INSERT INTO `user` (`id_user`, `user_name`, `user_email`, `user_password`, `user_cpf`, `user_phone`, `user_photo`) VALUES
(1, 'Rodrigo da Silva', 'rodrigo.bs.548@gmail.com', 'e8d95a51f3af4a3b134bf6bb680a213a', '86057766091', '5568984151312', NULL),
(2, 'Cleyciane Farias', 'fariascleycianedelima@gmail.com', 'e8d95a51f3af4a3b134bf6bb680a213a', '83966939002', '68999609155', NULL),
(3, 'Weguir Brito', 'weguir@gmail.com', 'e8d95a51f3af4a3b134bf6bb680a213a', '24775585010', '8226357453', NULL),
(4, 'John Brooks', 'john@gmail.com', 'e8d95a51f3af4a3b134bf6bb680a213a', '08943848056', '11692006758', NULL),
(5, 'Molly Fowler', 'molly@gmail.com', 'e8d95a51f3af4a3b134bf6bb680a213a', '80304217026', '11566908524', NULL),
(6, 'Brian Ramirez', 'brian@gmail.com', 'e8d95a51f3af4a3b134bf6bb680a213a', '44002339017', '11574031266', NULL),
(7, 'Paul Young', 'paul@gmail.com', 'e8d95a51f3af4a3b134bf6bb680a213a', '40507987004', '11797191127', NULL),
(8, 'Teresa Mcgee', 'teresa@gmail.com', 'e8d95a51f3af4a3b134bf6bb680a213a', '92845156022', '11863137049', NULL),
(9, 'David Gomez', 'david@gmail.com', 'e8d95a51f3af4a3b134bf6bb680a213a', '04728243095', '11738691588', NULL),
(10, 'Alexandra Walton', 'alexandra@gmail.com', 'e8d95a51f3af4a3b134bf6bb680a213a', '35484244064', '11726700300', NULL);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `viewadfound`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `viewadfound` (
`id_ad` int(10)
,`id_user_ad` int(10)
,`id_pet_ad` int(10)
,`title_ad` varchar(255)
,`name_user_ad` varchar(100)
,`name_pet_ad` varchar(100)
,`phone_user_ad` varchar(20)
,`description_ad` text
,`description_pet_ad` text
,`photos_ad` text
,`photo_user_ad` varchar(255)
,`photo_pet_ad` varchar(255)
,`name_category_pet_ad` varchar(100)
,`name_race_pet_ad` varchar(100)
,`name_fur_pet_ad` varchar(100)
,`name_color_pet_ad` varchar(60)
,`hexadecimal_color_pet_ad` varchar(6)
,`localization_ad` text
,`date_register_ad` datetime
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `viewadlost`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `viewadlost` (
`id_ad` int(10)
,`id_user_ad` int(10)
,`id_pet_ad` int(10)
,`title_ad` varchar(255)
,`name_user_ad` varchar(100)
,`name_pet_ad` varchar(100)
,`recompense_ad` varchar(30)
,`phone_user_ad` varchar(20)
,`description_ad` text
,`description_pet_ad` text
,`photos_ad` text
,`photo_user_ad` varchar(255)
,`photo_pet_ad` varchar(255)
,`name_category_pet_ad` varchar(100)
,`name_race_pet_ad` varchar(100)
,`name_fur_pet_ad` varchar(100)
,`name_color_pet_ad` varchar(60)
,`hexadecimal_color_pet_ad` varchar(6)
,`localization_ad` text
,`date_register_ad` datetime
);

-- --------------------------------------------------------

--
-- Estrutura para vista `viewadfound`
--
DROP TABLE IF EXISTS `viewadfound`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `viewadfound`  AS SELECT `a`.`id_ad` AS `id_ad`, `u`.`id_user` AS `id_user_ad`, `p`.`id_pet` AS `id_pet_ad`, `a`.`ad_title` AS `title_ad`, `u`.`user_name` AS `name_user_ad`, `p`.`pet_name` AS `name_pet_ad`, `u`.`user_phone` AS `phone_user_ad`, `a`.`ad_description` AS `description_ad`, `p`.`pet_description` AS `description_pet_ad`, `a`.`ad_photos` AS `photos_ad`, `u`.`user_photo` AS `photo_user_ad`, `p`.`pet_photo` AS `photo_pet_ad`, `ca`.`category_name` AS `name_category_pet_ad`, `r`.`race_name` AS `name_race_pet_ad`, `por`.`fur_name` AS `name_fur_pet_ad`, `c`.`color_name` AS `name_color_pet_ad`, `c`.`color_hexadecimal` AS `hexadecimal_color_pet_ad`, `a`.`ad_localization` AS `localization_ad`, `a`.`ad_date_register` AS `date_register_ad` FROM ((((((`ad` `a` join `user` `u` on(`a`.`id_user_fk` = `u`.`id_user`)) join `pet` `p` on(`a`.`id_pet_fk` = `p`.`id_pet`)) join `fur` `por` on(`p`.`id_fur_fk` = `por`.`id_fur`)) join `color` `c` on(`p`.`id_color_pelagem_fk` = `c`.`id_color`)) join `category` `ca` on(`p`.`id_category_fk` = `ca`.`id_category`)) join `race` `r` on(`p`.`id_race_fk` = `r`.`id_race`)) WHERE `a`.`id_type_ad_fk` = 2;

-- --------------------------------------------------------

--
-- Estrutura para vista `viewadlost`
--
DROP TABLE IF EXISTS `viewadlost`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `viewadlost`  AS SELECT `a`.`id_ad` AS `id_ad`, `u`.`id_user` AS `id_user_ad`, `p`.`id_pet` AS `id_pet_ad`, `a`.`ad_title` AS `title_ad`, `u`.`user_name` AS `name_user_ad`, `p`.`pet_name` AS `name_pet_ad`, `a`.`ad_recompense` AS `recompense_ad`, `u`.`user_phone` AS `phone_user_ad`, `a`.`ad_description` AS `description_ad`, `p`.`pet_description` AS `description_pet_ad`, `a`.`ad_photos` AS `photos_ad`, `u`.`user_photo` AS `photo_user_ad`, `p`.`pet_photo` AS `photo_pet_ad`, `ca`.`category_name` AS `name_category_pet_ad`, `r`.`race_name` AS `name_race_pet_ad`, `por`.`fur_name` AS `name_fur_pet_ad`, `c`.`color_name` AS `name_color_pet_ad`, `c`.`color_hexadecimal` AS `hexadecimal_color_pet_ad`, `a`.`ad_localization` AS `localization_ad`, `a`.`ad_date_register` AS `date_register_ad` FROM ((((((`ad` `a` join `user` `u` on(`a`.`id_user_fk` = `u`.`id_user`)) join `pet` `p` on(`a`.`id_pet_fk` = `p`.`id_pet`)) join `fur` `por` on(`p`.`id_fur_fk` = `por`.`id_fur`)) join `color` `c` on(`p`.`id_color_pelagem_fk` = `c`.`id_color`)) join `category` `ca` on(`p`.`id_category_fk` = `ca`.`id_category`)) join `race` `r` on(`p`.`id_race_fk` = `r`.`id_race`)) WHERE `a`.`id_type_ad_fk` = 1;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `ad`
--
ALTER TABLE `ad`
  ADD PRIMARY KEY (`id_ad`),
  ADD KEY `id_pet_fk` (`id_pet_fk`),
  ADD KEY `id_type_ad_fk` (`id_type_ad_fk`),
  ADD KEY `id_user_fk` (`id_user_fk`);

--
-- Índices para tabela `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id_category`),
  ADD UNIQUE KEY `category_name` (`category_name`);

--
-- Índices para tabela `color`
--
ALTER TABLE `color`
  ADD PRIMARY KEY (`id_color`),
  ADD UNIQUE KEY `color_name` (`color_name`),
  ADD UNIQUE KEY `color_hexadecimal` (`color_hexadecimal`);

--
-- Índices para tabela `pet`
--
ALTER TABLE `pet`
  ADD PRIMARY KEY (`id_pet`),
  ADD KEY `id_category_fk` (`id_category_fk`),
  ADD KEY `id_fur_fk` (`id_fur_fk`),
  ADD KEY `id_race_fk` (`id_race_fk`),
  ADD KEY `id_user_fk` (`id_user_fk`),
  ADD KEY `id_color_pelagem_fk` (`id_color_pelagem_fk`);

--
-- Índices para tabela `fur`
--
ALTER TABLE `fur`
  ADD PRIMARY KEY (`id_fur`),
  ADD UNIQUE KEY `fur_name` (`fur_name`);

--
-- Índices para tabela `race`
--
ALTER TABLE `race`
  ADD PRIMARY KEY (`id_race`),
  ADD UNIQUE KEY `race_name` (`race_name`),
  ADD KEY `id_category_fk` (`id_category_fk`);

--
-- Índices para tabela `typead`
--
ALTER TABLE `typead`
  ADD PRIMARY KEY (`id_type_ad`),
  ADD UNIQUE KEY `type_ad_name` (`type_ad_name`);

--
-- Índices para tabela `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `user_cpf` (`user_cpf`),
  ADD UNIQUE KEY `user_email` (`user_email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `ad`
--
ALTER TABLE `ad`
  MODIFY `id_ad` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `category`
--
ALTER TABLE `category`
  MODIFY `id_category` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `color`
--
ALTER TABLE `color`
  MODIFY `id_color` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `pet`
--
ALTER TABLE `pet`
  MODIFY `id_pet` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `fur`
--
ALTER TABLE `fur`
  MODIFY `id_fur` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `race`
--
ALTER TABLE `race`
  MODIFY `id_race` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `typead`
--
ALTER TABLE `typead`
  MODIFY `id_type_ad` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `user`
--
ALTER TABLE `user`
  MODIFY `id_user` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `ad`
--
ALTER TABLE `ad`
  ADD CONSTRAINT `ad_ibfk_1` FOREIGN KEY (`id_pet_fk`) REFERENCES `pet` (`id_pet`),
  ADD CONSTRAINT `ad_ibfk_2` FOREIGN KEY (`id_type_ad_fk`) REFERENCES `typead` (`id_type_ad`),
  ADD CONSTRAINT `ad_ibfk_3` FOREIGN KEY (`id_user_fk`) REFERENCES `user` (`id_user`);

--
-- Limitadores para a tabela `pet`
--
ALTER TABLE `pet`
  ADD CONSTRAINT `pet_ibfk_1` FOREIGN KEY (`id_category_fk`) REFERENCES `category` (`id_category`),
  ADD CONSTRAINT `pet_ibfk_2` FOREIGN KEY (`id_fur_fk`) REFERENCES `fur` (`id_fur`),
  ADD CONSTRAINT `pet_ibfk_3` FOREIGN KEY (`id_race_fk`) REFERENCES `race` (`id_race`),
  ADD CONSTRAINT `pet_ibfk_4` FOREIGN KEY (`id_user_fk`) REFERENCES `user` (`id_user`),
  ADD CONSTRAINT `pet_ibfk_5` FOREIGN KEY (`id_color_pelagem_fk`) REFERENCES `color` (`id_color`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
