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
DROP SCHEMA  IF EXISTS  busca_pet;
CREATE DATABASE busca_pet;
USE busca_pet;
--
-- Estrutura da tabela `anuncio`
--

CREATE TABLE `anuncio` (
  `id_anuncio` int(10) NOT NULL,
  `anuncio_titulo` varchar(255) NOT NULL,
  `anuncio_descricao` text DEFAULT NULL,
  `anuncio_fotos` text DEFAULT NULL,
  `anuncio_data_cadastro` datetime NOT NULL,
  `anuncio_localizacao` text NOT NULL,
  `anuncio_recompensa` varchar(30) DEFAULT NULL,
  `id_tipo_anuncio_fk` int(10) NOT NULL,
  `id_pet_fk` int(10) NOT NULL,
  `id_usuario_fk` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `anuncio`
--

INSERT INTO `anuncio` (`id_anuncio`, `anuncio_titulo`, `anuncio_descricao`, `anuncio_fotos`, `anuncio_data_cadastro`, `anuncio_localizacao`, `anuncio_recompensa`, `id_tipo_anuncio_fk`, `id_pet_fk`, `id_usuario_fk`) VALUES
(1, 'Cachorro perdido', 'Meu cachorro acabou fugindo de casa, é um vira-lata caramelo, ele está com uma coleira vermelha.', 'http://localhost:5050/fotos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 1, 1, 1),
(2, 'Cachorro perdido', 'Meu cachorro acabou fugindo de casa, é um Basenji , ele está com uma coleira azul.', 'http://localhost:5050/fotos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 1, 1, 2),
(3, 'gato perdido', 'Meu gato acabou fugindo de casa, é um Persa, ele está com uma coleira vermelha e atende por xanin.', 'http://localhost:5050/fotos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 1, 1, 3),
(4, 'gato perdido', 'Meu gato acabou fugindo de casa, é um Ragdoll fêmea e atende por bolinha.', 'http://localhost:5050/fotos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 1, 1, 4),
(5, 'gato perdido', 'Meu gato acabou fugindo de casa, é um Sphynx raro, atende por maria', 'http://localhost:5050/fotos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 1, 1, 5),
(6, 'Cachorro encontrado', 'Cachorro encontrado nas proximidades do bosque', 'http://localhost:5050/fotos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 2, 1, 1),
(7, 'Cachorro encontrado', 'Cachorro encontrado nas proximidades da biblioteca pública do centro da cidade', 'http://localhost:5050/fotos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 2, 1, 2),
(8, 'gato encontrado', 'gato encontrado nas proximidades do tucumã', 'http://localhost:5050/fotos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 2, 1, 3),
(9, 'gato encontrado', 'gato encontrado nas proximidades do são francisco', 'http://localhost:5050/fotos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 2, 1, 4),
(10, 'gato encontrado', 'gato encontrado nas proximidades do bola preta', 'http://localhost:5050/fotos/caramelo-pedrin', '2022-08-12 01:09:29', '-9.951821727794258, -67.838037274028', NULL, 2, 1, 5);




-- --------------------------------------------------------

--
-- Estrutura da tabela `categoria`
--

CREATE TABLE `categoria` (
  `id_categoria` int(10) NOT NULL,
  `categoria_nome` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `categoria`
--

INSERT INTO `categoria` (`id_categoria`, `categoria_nome`) VALUES
(1, 'cachorro'),
(2, 'Gato');

-- --------------------------------------------------------

--
-- Estrutura da tabela `cor`
--

CREATE TABLE `cor` (
  `id_cor` int(10) NOT NULL,
  `cor_nome` varchar(60) NOT NULL,
  `cor_hexadecimal` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `cor`
--

INSERT INTO `cor` (`id_cor`, `cor_nome`, `cor_hexadecimal`) VALUES
(1, 'marrom', 'aa7700'),
(2, 'Vermelho', 'ffcdd2'),
(3, 'Cinza', 'dcedc8');

-- --------------------------------------------------------

--
-- Estrutura da tabela `pet`
--

CREATE TABLE `pet` (
  `id_pet` int(10) NOT NULL,
  `pet_nome` varchar(100) DEFAULT NULL,
  `pet_descricao` text DEFAULT NULL,
  `pet_foto` varchar(255) NOT NULL,
  `pet_data_cadastro` datetime NOT NULL,
  `pet_perdido` int(11) NOT NULL,
  `id_cor_pelagem_fk` int(10) NOT NULL,
  `id_porte_fk` int(10) NOT NULL,
  `id_categoria_fk` int(10) NOT NULL,
  `id_raca_fk` int(10) NOT NULL,
  `id_usuario_fk` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `pet`
--

INSERT INTO `pet` (`id_pet`, `pet_nome`, `pet_descricao`, `pet_foto`, `pet_data_cadastro`, `pet_perdido`, `id_cor_pelagem_fk`, `id_porte_fk`, `id_categoria_fk`, `id_raca_fk`, `id_usuario_fk`) VALUES
(1, 'Pedrin', 'Um cachorro bonitão, caramelo de nascença, fui achado no quintal da vó do meu dono.', '', '2022-08-12 01:07:00', 0, 1, 3, 1, 1, 1),
(2, 'Allanis', 'Um gato fofinho, achado na rua esperança, não possui coleira logo não sei quem é meu dono', '', '04-13-2001 09:45:51', 0, 2, 2, 2, 11, 2),
(3, 'Alfredo', 'Um cachorro, foi achado brincando na rua botafogo', '', '04-13-2001 09:45:510', 0, 3, 1, 1, 2, 3),
(4, 'Ubi', 'Um gato muito fofo, encontrado agora há pouco, está alimentado e hidratado.', '', '04-13-2001 09:45:51', 0, 1, 1, 2, 12, 4),
(5, 'Frajola', 'Um cachorro esperto e brincalhão', '', '04-13-2001 09:45:51', 0, 2, 3, 1, 3, 5),
(6, 'Mingau', 'Gato fofo e brincalhão, tem coleira de identificação', '', '04-13-2001 09:45:51', 0, 3, 2, 2, 13, 6),
(7, 'Louie', 'Um cachorro pra lá de esperto, encontrado aqui na rua de casa', '', '04-13-2001 09:45:51', 0, 1, 3, 1, 4, 7),
(8, 'Harry', 'Gato encontrado na rua esperança', '', '04-13-2001 09:45:51', 0, 2, 2, 2, 14, 8),
(9, 'Clark', 'Cachorro encontrado na baixada da sobral', '', '04-13-2001 09:45:51', 0, 3, 1, 1, 5, 9),
(10, 'Felicity', 'Gato encontrado nas intermediações do ramal do sucesso', '', '04-13-2001 09:45:51', 0, 1, 1, 2, 15, 10);

-- --------------------------------------------------------

--
-- Estrutura da tabela `porte`
--

CREATE TABLE `porte` (
  `id_porte` int(11) NOT NULL,
  `porte_nome` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `porte`
--

INSERT INTO `porte` (`id_porte`, `porte_nome`) VALUES
(3, 'grande'),
(2, 'médio'),
(1, 'pequeno');

-- --------------------------------------------------------

--
-- Estrutura da tabela `raca`
--

CREATE TABLE `raca` (
  `id_raca` int(10) NOT NULL,
  `raca_nome` varchar(100) NOT NULL,
  `id_categoria_fk` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `raca`
--

INSERT INTO `raca` (`id_raca`, `raca_nome`, `id_categoria_fk`) VALUES
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
-- Estrutura da tabela `tipoanuncio`
--

CREATE TABLE `tipoanuncio` (
  `id_tipo_anuncio` int(10) NOT NULL,
  `tipo_anuncio_nome` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tipoanuncio`
--

INSERT INTO `tipoanuncio` (`id_tipo_anuncio`, `tipo_anuncio_nome`) VALUES
(2, 'encontrado'),
(1, 'Perdido');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `id_usuario` int(10) NOT NULL,
  `usuario_nome` varchar(100) NOT NULL,
  `usuario_email` varchar(100) NOT NULL,
  `usuario_senha` varchar(100) NOT NULL,
  `usuario_cpf` varchar(11) NOT NULL,
  `usuario_telefone` varchar(20) DEFAULT NULL,
  `usuario_foto` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`id_usuario`, `usuario_nome`, `usuario_email`, `usuario_senha`, `usuario_cpf`, `usuario_telefone`, `usuario_foto`) VALUES
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
-- Estrutura stand-in para vista `viewanuncioencontrado`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `viewanuncioencontrado` (
`id_anuncio` int(10)
,`id_usuario_anuncio` int(10)
,`id_pet_anuncio` int(10)
,`titulo_anuncio` varchar(255)
,`nome_usuario_anuncio` varchar(100)
,`nome_pet_anuncio` varchar(100)
,`telefone_usuario_anuncio` varchar(20)
,`descricao_anuncio` text
,`descricao_pet_anuncio` text
,`fotos_anuncio` text
,`foto_usuario_anuncio` varchar(255)
,`foto_pet_anuncio` varchar(255)
,`nome_categoria_pet_anuncio` varchar(100)
,`nome_raca_pet_anuncio` varchar(100)
,`nome_porte_pet_anuncio` varchar(100)
,`nome_cor_pet_anuncio` varchar(60)
,`hexadecimal_cor_pet_anuncio` varchar(6)
,`localizacao_anuncio` text
,`data_cadastro_anuncio` datetime
);

-- --------------------------------------------------------

--
-- Estrutura stand-in para vista `viewanuncioperdido`
-- (Veja abaixo para a view atual)
--
CREATE TABLE `viewanuncioperdido` (
`id_anuncio` int(10)
,`id_usuario_anuncio` int(10)
,`id_pet_anuncio` int(10)
,`titulo_anuncio` varchar(255)
,`nome_usuario_anuncio` varchar(100)
,`nome_pet_anuncio` varchar(100)
,`recompensa_anuncio` varchar(30)
,`telefone_usuario_anuncio` varchar(20)
,`descricao_anuncio` text
,`descricao_pet_anuncio` text
,`fotos_anuncio` text
,`foto_usuario_anuncio` varchar(255)
,`foto_pet_anuncio` varchar(255)
,`nome_categoria_pet_anuncio` varchar(100)
,`nome_raca_pet_anuncio` varchar(100)
,`nome_porte_pet_anuncio` varchar(100)
,`nome_cor_pet_anuncio` varchar(60)
,`hexadecimal_cor_pet_anuncio` varchar(6)
,`localizacao_anuncio` text
,`data_cadastro_anuncio` datetime
);

-- --------------------------------------------------------

--
-- Estrutura para vista `viewanuncioencontrado`
--
DROP TABLE IF EXISTS `viewanuncioencontrado`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `viewanuncioencontrado`  AS SELECT `a`.`id_anuncio` AS `id_anuncio`, `u`.`id_usuario` AS `id_usuario_anuncio`, `p`.`id_pet` AS `id_pet_anuncio`, `a`.`anuncio_titulo` AS `titulo_anuncio`, `u`.`usuario_nome` AS `nome_usuario_anuncio`, `p`.`pet_nome` AS `nome_pet_anuncio`, `u`.`usuario_telefone` AS `telefone_usuario_anuncio`, `a`.`anuncio_descricao` AS `descricao_anuncio`, `p`.`pet_descricao` AS `descricao_pet_anuncio`, `a`.`anuncio_fotos` AS `fotos_anuncio`, `u`.`usuario_foto` AS `foto_usuario_anuncio`, `p`.`pet_foto` AS `foto_pet_anuncio`, `ca`.`categoria_nome` AS `nome_categoria_pet_anuncio`, `r`.`raca_nome` AS `nome_raca_pet_anuncio`, `por`.`porte_nome` AS `nome_porte_pet_anuncio`, `c`.`cor_nome` AS `nome_cor_pet_anuncio`, `c`.`cor_hexadecimal` AS `hexadecimal_cor_pet_anuncio`, `a`.`anuncio_localizacao` AS `localizacao_anuncio`, `a`.`anuncio_data_cadastro` AS `data_cadastro_anuncio` FROM ((((((`anuncio` `a` join `usuario` `u` on(`a`.`id_usuario_fk` = `u`.`id_usuario`)) join `pet` `p` on(`a`.`id_pet_fk` = `p`.`id_pet`)) join `porte` `por` on(`p`.`id_porte_fk` = `por`.`id_porte`)) join `cor` `c` on(`p`.`id_cor_pelagem_fk` = `c`.`id_cor`)) join `categoria` `ca` on(`p`.`id_categoria_fk` = `ca`.`id_categoria`)) join `raca` `r` on(`p`.`id_raca_fk` = `r`.`id_raca`)) WHERE `a`.`id_tipo_anuncio_fk` = 22  ;

-- --------------------------------------------------------

--
-- Estrutura para vista `viewanuncioperdido`
--
DROP TABLE IF EXISTS `viewanuncioperdido`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `viewanuncioperdido`  AS SELECT `a`.`id_anuncio` AS `id_anuncio`, `u`.`id_usuario` AS `id_usuario_anuncio`, `p`.`id_pet` AS `id_pet_anuncio`, `a`.`anuncio_titulo` AS `titulo_anuncio`, `u`.`usuario_nome` AS `nome_usuario_anuncio`, `p`.`pet_nome` AS `nome_pet_anuncio`, `a`.`anuncio_recompensa` AS `recompensa_anuncio`, `u`.`usuario_telefone` AS `telefone_usuario_anuncio`, `a`.`anuncio_descricao` AS `descricao_anuncio`, `p`.`pet_descricao` AS `descricao_pet_anuncio`, `a`.`anuncio_fotos` AS `fotos_anuncio`, `u`.`usuario_foto` AS `foto_usuario_anuncio`, `p`.`pet_foto` AS `foto_pet_anuncio`, `ca`.`categoria_nome` AS `nome_categoria_pet_anuncio`, `r`.`raca_nome` AS `nome_raca_pet_anuncio`, `por`.`porte_nome` AS `nome_porte_pet_anuncio`, `c`.`cor_nome` AS `nome_cor_pet_anuncio`, `c`.`cor_hexadecimal` AS `hexadecimal_cor_pet_anuncio`, `a`.`anuncio_localizacao` AS `localizacao_anuncio`, `a`.`anuncio_data_cadastro` AS `data_cadastro_anuncio` FROM ((((((`anuncio` `a` join `usuario` `u` on(`a`.`id_usuario_fk` = `u`.`id_usuario`)) join `pet` `p` on(`a`.`id_pet_fk` = `p`.`id_pet`)) join `porte` `por` on(`p`.`id_porte_fk` = `por`.`id_porte`)) join `cor` `c` on(`p`.`id_cor_pelagem_fk` = `c`.`id_cor`)) join `categoria` `ca` on(`p`.`id_categoria_fk` = `ca`.`id_categoria`)) join `raca` `r` on(`p`.`id_raca_fk` = `r`.`id_raca`)) WHERE `a`.`id_tipo_anuncio_fk` = 11  ;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `anuncio`
--
ALTER TABLE `anuncio`
  ADD PRIMARY KEY (`id_anuncio`),
  ADD KEY `id_pet_fk` (`id_pet_fk`),
  ADD KEY `id_tipo_anuncio_fk` (`id_tipo_anuncio_fk`),
  ADD KEY `id_usuario_fk` (`id_usuario_fk`);

--
-- Índices para tabela `categoria`
--
ALTER TABLE `categoria`
  ADD PRIMARY KEY (`id_categoria`),
  ADD UNIQUE KEY `categoria_nome` (`categoria_nome`);

--
-- Índices para tabela `cor`
--
ALTER TABLE `cor`
  ADD PRIMARY KEY (`id_cor`),
  ADD UNIQUE KEY `cor_nome` (`cor_nome`),
  ADD UNIQUE KEY `cor_hexadecimal` (`cor_hexadecimal`);

--
-- Índices para tabela `pet`
--
ALTER TABLE `pet`
  ADD PRIMARY KEY (`id_pet`),
  ADD KEY `id_categoria_fk` (`id_categoria_fk`),
  ADD KEY `id_porte_fk` (`id_porte_fk`),
  ADD KEY `id_raca_fk` (`id_raca_fk`),
  ADD KEY `id_usuario_fk` (`id_usuario_fk`),
  ADD KEY `id_cor_pelagem_fk` (`id_cor_pelagem_fk`);

--
-- Índices para tabela `porte`
--
ALTER TABLE `porte`
  ADD PRIMARY KEY (`id_porte`),
  ADD UNIQUE KEY `porte_nome` (`porte_nome`);

--
-- Índices para tabela `raca`
--
ALTER TABLE `raca`
  ADD PRIMARY KEY (`id_raca`),
  ADD UNIQUE KEY `raca_nome` (`raca_nome`),
  ADD KEY `id_categoria_fk` (`id_categoria_fk`);

--
-- Índices para tabela `tipoanuncio`
--
ALTER TABLE `tipoanuncio`
  ADD PRIMARY KEY (`id_tipo_anuncio`),
  ADD UNIQUE KEY `tipo_anuncio_nome` (`tipo_anuncio_nome`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`id_usuario`),
  ADD UNIQUE KEY `usuario_cpf` (`usuario_cpf`),
  ADD UNIQUE KEY `usuario_email` (`usuario_email`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `anuncio`
--
ALTER TABLE `anuncio`
  MODIFY `id_anuncio` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `categoria`
--
ALTER TABLE `categoria`
  MODIFY `id_categoria` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `cor`
--
ALTER TABLE `cor`
  MODIFY `id_cor` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `pet`
--
ALTER TABLE `pet`
  MODIFY `id_pet` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `porte`
--
ALTER TABLE `porte`
  MODIFY `id_porte` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de tabela `raca`
--
ALTER TABLE `raca`
  MODIFY `id_raca` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de tabela `tipoanuncio`
--
ALTER TABLE `tipoanuncio`
  MODIFY `id_tipo_anuncio` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `id_usuario` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `anuncio`
--
ALTER TABLE `anuncio`
  ADD CONSTRAINT `anuncio_ibfk_1` FOREIGN KEY (`id_pet_fk`) REFERENCES `pet` (`id_pet`),
  ADD CONSTRAINT `anuncio_ibfk_2` FOREIGN KEY (`id_tipo_anuncio_fk`) REFERENCES `tipoanuncio` (`id_tipo_anuncio`),
  ADD CONSTRAINT `anuncio_ibfk_3` FOREIGN KEY (`id_usuario_fk`) REFERENCES `usuario` (`id_usuario`);

--
-- Limitadores para a tabela `pet`
--
ALTER TABLE `pet`
  ADD CONSTRAINT `pet_ibfk_1` FOREIGN KEY (`id_categoria_fk`) REFERENCES `categoria` (`id_categoria`),
  ADD CONSTRAINT `pet_ibfk_2` FOREIGN KEY (`id_porte_fk`) REFERENCES `porte` (`id_porte`),
  ADD CONSTRAINT `pet_ibfk_3` FOREIGN KEY (`id_raca_fk`) REFERENCES `raca` (`id_raca`),
  ADD CONSTRAINT `pet_ibfk_4` FOREIGN KEY (`id_usuario_fk`) REFERENCES `usuario` (`id_usuario`),
  ADD CONSTRAINT `pet_ibfk_5` FOREIGN KEY (`id_cor_pelagem_fk`) REFERENCES `cor` (`id_cor`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;