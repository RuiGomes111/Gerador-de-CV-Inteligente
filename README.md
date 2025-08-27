# 📄 Gerador de Currículo Inteligente com Preview em Tempo Real

Uma aplicação **React moderna** que permite aos usuários criar currículos profissionais com **preview instantâneo**.
Este é o **primeiro módulo** de um projeto em duas etapas que demonstra conceitos avançados de **React** e **TailwindCSS**.

---

## 🚀 Tecnologias Utilizadas

* ⚛️ **React 19**
* 📘 **TypeScript**
* 🎨 **TailwindCSS v4**
* ⚡ **Vite**

---

## 🎯 Conceitos em Foco

Este projeto foi desenvolvido para aprofundar os fundamentos do React:

* ✅ **Formulários Controlados** – gerenciamento avançado de estado em inputs e textareas
* ✅ **Layout Desktop** – uso de Grid e Flexbox com TailwindCSS v4
* ✅ **Sincronização de Estado** – preview em tempo real
* ✅ **Componentização** – arquitetura escalável de componentes
* ✅ **Listas Dinâmicas** – adicionar e remover itens dinamicamente

---

## 💻 Foco Desktop

> Este projeto foi projetado **exclusivamente para desktop/laptop**.

📌 Motivos para não priorizar responsividade nesta fase:

* Foco total nos **conceitos React** fundamentais
* Simplicidade no **CSS** para priorizar **JavaScript**
* Currículos são tipicamente criados em desktops
* Evita complexidade extra desnecessária

---

## 🖼️ Conceito da Aplicação

**Layout Split-Screen** (tela dividida 50/50):

* 📋 **Esquerda**: Formulário completo para entrada de dados
* 👀 **Direita**: Preview atualizado em tempo real
* 🖥️ Layout fixo otimizado para **desktop**

---

## 📝 Estrutura do Formulário

1. **Dados Pessoais** – Nome, Email, Telefone, LinkedIn, Resumo
2. **Habilidades** – Lista dinâmica com níveis de proficiência
3. **Experiências** – Lista dinâmica de experiências profissionais

---

## ⚡ Funcionalidades Core

* ⚡ **Preview Instantâneo** – mudanças aparecem em tempo real
* ➕ **Listas Dinâmicas** – adicionar/remover habilidades e experiências
* 🖥️ **Layout Desktop** – interface otimizada para telas grandes
* 🎨 **Design Profissional** – interface clean e moderna

---

## 📚 Conceitos React Praticados

1. **Estado Compartilhado Avançado**

   * Estado central para todo o currículo
   * Sincronização entre formulário e preview
   * Gerenciamento de listas dinâmicas

2. **Componentes Controlados**

   * Inputs e textareas controlados com validação
   * Componentes reutilizáveis para listas

3. **Props e Lifting State Up**

   * Comunicação entre componentes pai/filho
   * Callbacks para atualização de estado
   * Estratégias para evitar props drilling

4. **Renderização Condicional Avançada**

   * Exibição condicional baseada em estado
   * Indicação visual de campos vazios
   * Estados de loading e validação

---

## ✅ Requisitos Funcionais

### 01 - Layout Split-Screen

* Tela dividida em duas colunas iguais
* Scroll independente em cada seção

### 02 - Formulário de Dados Pessoais

* Campos: Nome, Email, Telefone, LinkedIn
* Textarea para resumo profissional
* Validação em tempo real
* Contador de caracteres para resumo

### 03 - Gerenciamento de Habilidades

* Lista dinâmica de habilidades
* Input para nome da habilidade
* Seletor de nível (Básico / Intermediário / Avançado)
* Botões adicionar/remover

### 04 - Gerenciamento de Experiências

* Lista dinâmica de experiências profissionais
* Campos: Empresa, Cargo, Período, Descrição
* Checkbox para marcar "Trabalho atual"
* Validação de datas

### 05 - Preview em Tempo Real

* Atualização instantânea ao digitar
* Layout profissional do currículo
* Indicação visual para campos vazios

---

## 📦 Como Rodar o Projeto

```bash
# Clonar o repositório
git clone https://github.com/SEU-USUARIO/nome-do-repo.git

# Acessar a pasta
cd nome-do-repo

# Instalar dependências
npm install

# Rodar o projeto
npm run dev
```

---

## 📌 Próximos Passos (Parte 2)

Na segunda etapa deste projeto serão adicionadas funcionalidades extras como:

* Exportação do currículo em **PDF**
* Suporte a **templates personalizáveis**
* Melhorias no design e usabilidade

---

📢 **Contribuições são bem-vindas!**
Este projeto foi criado com foco no **aprendizado prático** de React e TailwindCSS.


