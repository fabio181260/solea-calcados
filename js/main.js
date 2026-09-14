// =====================================================
// SOLEÁ CALÇADOS
// CONFIGURAÇÕES
// =====================================================

const WHATSAPP_NUMBER = "244949646647";
const DEFAULT_MESSAGE = "Olá! Gostaria de atendimento da Soleá Calçados.";


// =====================================================
// PRODUTOS
// =====================================================

const products = [

  // ===================================================
  // FEMININO
  // ===================================================

  {
    id: "SOL-F01",
    name: "Scarpin Aurora",
    category: "feminino",
    price: 32900,
    oldPrice: 38500,
    badge: "Novo",
    image: "images/Produtos/feminino/SOL-F01.jpg",
    description: "Scarpin elegante e sofisticado para ocasiões especiais.",
    color: "Preto",
    sizes: [36, 37, 38, 39, 40]
  },

  {
    id: "SOL-F02",
    name: "Glamour Crystal",
    category: "feminino",
    price: 42900,
    oldPrice: 49900,
    badge: "Elegante",
    image: "images/Produtos/feminino/SOL-F02.jpg",
    description: "Sandália feminina elegante com acabamento sofisticado.",
    color: "Prata",
    sizes: [36, 37, 38, 39]
  },

  {
    id: "SOL-F03",
    name: "Milano Black",
    category: "feminino",
    price: 34900,
    oldPrice: 39900,
    badge: "Mais vendido",
    image: "images/Produtos/feminino/SOL-F03.jpg",
    description: "Sandália preta de salto alto com design moderno.",
    color: "Preto",
    sizes: [36, 37, 38, 39, 40]
  },

  {
    id: "SOL-F04",
    name: "Bella White",
    category: "feminino",
    price: 36900,
    oldPrice: 42900,
    badge: "Destaque",
    image: "images/Produtos/feminino/SOL-F04.jpg",
    description: "Calçado feminino elegante para looks sofisticados.",
    color: "Branco",
    sizes: [36, 37, 38, 39]
  },


  // ===================================================
  // MASCULINO
  // ===================================================

  {
    id: "SOL-M01",
    name: "Santoni Black",
    category: "masculino",
    price: 32900,
    oldPrice: 38900,
    badge: "Mais vendido",
    image: "images/Produtos/masculino/SOL-M01.jpg",
    description: "Calçado masculino elegante e versátil para o dia a dia.",
    color: "Preto",
    sizes: [39, 40, 41, 42, 43, 44]
  },

  {
    id: "SOL-M02",
    name: "Verona Classic",
    category: "masculino",
    price: 35900,
    oldPrice: 41900,
    badge: "Clássico",
    image: "images/Produtos/masculino/SOL-M02.jpg",
    description: "Sapato masculino clássico para trabalho e ocasiões formais.",
    color: "Preto",
    sizes: [39, 40, 41, 42, 43, 44]
  },

  {
    id: "SOL-M03",
    name: "Milano Prime",
    category: "masculino",
    price: 38900,
    oldPrice: 44900,
    badge: "Novo",
    image: "images/Produtos/masculino/SOL-M03.jpg",
    description: "Modelo masculino sofisticado com visual contemporâneo.",
    color: "Castanho",
    sizes: [39, 40, 41, 42, 43]
  },

  {
    id: "SOL-M04",
    name: "Urban Leather",
    category: "masculino",
    price: 34900,
    oldPrice: 39900,
    badge: "Destaque",
    image: "images/Produtos/masculino/SOL-M04.jpg",
    description: "Calçado masculino casual para combinações urbanas.",
    color: "Castanho",
    sizes: [39, 40, 41, 42, 43, 44]
  },


  // ===================================================
  // ESPORTIVO
  // ===================================================

  {
    id: "SOL-E01",
    name: "Sprint Max",
    category: "esportivo",
    price: 29900,
    oldPrice: 35900,
    badge: "Mais vendido",
    image: "images/Produtos/esportivo/SOL-E01.jpg",
    description: "Tênis esportivo leve para treino, caminhada e uso diário.",
    color: "Vermelho",
    sizes: [39, 40, 41, 42, 43, 44]
  },

  {
    id: "SOL-E02",
    name: "Air Motion",
    category: "esportivo",
    price: 32900,
    oldPrice: 38900,
    badge: "Novo",
    image: "images/Produtos/esportivo/SOL-E02.jpg",
    description: "Tênis esportivo moderno e confortável para atividades físicas.",
    color: "Branco",
    sizes: [39, 40, 41, 42, 43]
  },

  {
    id: "SOL-E03",
    name: "Runner Pro",
    category: "esportivo",
    price: 35900,
    oldPrice: 41900,
    badge: "Destaque",
    image: "images/Produtos/esportivo/SOL-E03.jpg",
    description: "Tênis pensado para corrida, caminhada e atividades esportivas.",
    color: "Cinza",
    sizes: [39, 40, 41, 42, 43, 44]
  },

  {
    id: "SOL-E04",
    name: "Active Flex",
    category: "esportivo",
    price: 28900,
    oldPrice: 33900,
    badge: "Oferta",
    image: "images/Produtos/esportivo/SOL-E04.jpg",
    description: "Tênis esportivo versátil para treino e uso cotidiano.",
    color: "Azul",
    sizes: [39, 40, 41, 42, 43]
  },


  // ===================================================
  // CASUAL
  // ===================================================

  {
    id: "SOL-C01",
    name: "Urban Classic",
    category: "casual",
    price: 31900,
    oldPrice: 36900,
    badge: "Destaque",
    image: "images/Produtos/casual/SOL-C01.jpg",
    description: "Calçado casual moderno para o dia a dia.",
    color: "Branco",
    sizes: [39, 40, 41, 42, 43]
  },

  {
    id: "SOL-C02",
    name: "Street One",
    category: "casual",
    price: 29900,
    oldPrice: 34900,
    badge: "Novo",
    image: "images/Produtos/casual/SOL-C02.jpg",
    description: "Tênis casual moderno para combinações descontraídas.",
    color: "Branco",
    sizes: [39, 40, 41, 42, 43, 44]
  },

  {
    id: "SOL-C03",
    name: "Comfort Line",
    category: "casual",
    price: 33900,
    oldPrice: 38900,
    badge: "Conforto",
    image: "images/Produtos/casual/SOL-C03.jpg",
    description: "Modelo confortável e elegante para utilizar durante toda a rotina.",
    color: "Castanho",
    sizes: [39, 40, 41, 42, 43]
  },

  {
    id: "SOL-C04",
    name: "City Walk",
    category: "casual",
    price: 30900,
    oldPrice: 35900,
    badge: "Destaque",
    image: "images/Produtos/casual/SOL-C04.jpg",
    description: "Calçado casual versátil para quem procura conforto e estilo.",
    color: "Cinza",
    sizes: [39, 40, 41, 42, 43, 44]
  }

];


// =====================================================
// PRODUTO FUTURO — SOL-F05
// =====================================================
// Quando quiseres adicionar o quinto produto feminino,
// basta copiar este modelo para dentro de "products".
//
// {
//   id: "SOL-F05",
//   name: "Nome do novo produto",
//   category: "feminino",
//   price: 39900,
//   oldPrice: 45900,
//   badge: "Novo",
//   image: "images/Produtos/feminino/SOL-F05.jpg",
//   description: "Descrição do novo produto.",
//   color: "Preto",
//   sizes: [36, 37, 38, 39, 40]
// }


// =====================================================
// // =====================================================
// WHATSAPP
// =====================================================

function isMobileDevice() {
  return /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
}

function whatsappUrl(message = DEFAULT_MESSAGE) {
  const encodedMessage = encodeURIComponent(message);

  return "https://wa.me/" + WHATSAPP_NUMBER + "?text=" + encodedMessage;
}
// =====================================================
// FORMATAÇÃO DO PREÇO
// =====================================================

function formatPrice(value) {
  return new Intl.NumberFormat("pt-AO").format(value) + " Kz";
}

// =====================================================
// MENSAGEM DO PRODUTO
// =====================================================

function productMessage(product) {
  return `Olá! Tenho interesse no ${product.name} (${formatPrice(product.price)}). Pode me informar disponibilidade e numeração?`;
}


// =====================================================
// FALLBACK DE IMAGEM
// =====================================================

function handleImageError(image) {

  image.onerror = null;

  image.src =
    "data:image/svg+xml;charset=UTF-8," +
    encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" width="800" height="800" viewBox="0 0 800 800">
        <rect width="800" height="800" fill="#f3f1ee"/>
        <text x="400" y="370"
              text-anchor="middle"
              font-family="Arial, sans-serif"
              font-size="34"
              fill="#777">
          Soleá Calçados
        </text>
        <text x="400" y="420"
              text-anchor="middle"
              font-family="Arial, sans-serif"
              font-size="20"
              fill="#999">
          Imagem indisponível
        </text>
      </svg>
    `);
}


// =====================================================
// RENDERIZAÇÃO DOS PRODUTOS
// =====================================================

function renderProducts(filter = "todos") {

  const grid = document.getElementById("product-grid");
  const empty = document.getElementById("empty-state");

  if (!grid) {
    return;
  }

  const list = products.filter(
    (item) =>
      filter === "todos" ||
      item.category === filter
  );


  grid.innerHTML = list
    .map(
      (item) => `
        <article class="card">

          <div class="card__image">

            ${
              item.badge
                ? `<span class="badge">${item.badge}</span>`
                : ""
            }

            <img
              src="${item.image}"
              alt="${item.name}"
              loading="lazy"
              onerror="handleImageError(this)"
            >

          </div>

          <div class="card__body">

            <p class="card__cat">
              ${item.category}
            </p>

            <h3>
              ${item.name}
            </h3>

            <div class="price">

              <strong>
                ${formatPrice(item.price)}
              </strong>

              ${
                item.oldPrice
                  ? `<s>${formatPrice(item.oldPrice)}</s>`
                  : ""
              }

            </div>

          <a 
          class="btn btn--primary" 
          href="${whatsappUrl(productMessage(item))}"
          target="_blank" 
          rel="noopener noreferrer"

           > 
             Comprar no WhatsApp 
             </a>
        

          </div>
 
        </article>
      `
    )
    .join("");


  if (empty) {
    empty.hidden = list.length > 0;
  }
}


// =====================================================
// FILTRO ATIVO
// =====================================================

function setActiveFilter(value) {

  document
    .querySelectorAll(".filter")
    .forEach((button) => {

      button.classList.toggle(
        "is-active",
        button.dataset.filter === value
      );

    });
}


// =====================================================
// FILTROS E CATEGORIAS
// =====================================================

document
  .querySelectorAll(".filter, .category-card")
  .forEach((element) => {

    element.addEventListener("click", () => {

      const filter = element.dataset.filter;

      if (!filter) {
        return;
      }

      setActiveFilter(filter);

      if (element.classList.contains("category-card")) {

        const productsSection =
          document.getElementById("produtos");

        if (productsSection) {

          productsSection.scrollIntoView({
            behavior: "smooth"
          });

        }

      }

      renderProducts(filter);

    });

  });


// =====================================================
// MENU MOBILE
// =====================================================

const menuToggle =
  document.getElementById("menu-toggle");

const nav =
  document.getElementById("nav");


if (menuToggle && nav) {

  menuToggle.addEventListener("click", () => {

    const open =
      nav.classList.toggle("is-open");

    menuToggle.setAttribute(
      "aria-expanded",
      String(open)
    );

    menuToggle.setAttribute(
      "aria-label",
      open
        ? "Fechar menu"
        : "Abrir menu"
    );

  });


  nav
    .querySelectorAll("a")
    .forEach((link) => {

      link.addEventListener("click", () => {

        nav.classList.remove("is-open");

        menuToggle.setAttribute(
          "aria-expanded",
          "false"
        );

        menuToggle.setAttribute(
          "aria-label",
          "Abrir menu"
        );

      });

    });

}


// =====================================================
// =====================================================
// // =====================================================
// BOTÕES WHATSAPP
// =====================================================

[
  "header-whatsapp",
  "hero-whatsapp",
  "banner-whatsapp",
  "whatsapp-float",
  "footer-phone"
].forEach((id) => {

  const element = document.getElementById(id);

  if (element) {

    element.setAttribute("href", whatsappUrl());

    element.setAttribute("target", "_blank");
    element.setAttribute("rel", "noopener noreferrer");

  }

});
// ==========================a===========================
// INICIAR PRODUTOS
// =====================================================

renderProducts("todos");

