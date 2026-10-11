/*
      Interacciones ligeras para la previsualización:
      - búsqueda local
      - selección de categorías
      - favoritos
      - navegación inferior
      - mensajes contextuales
    */

    const toast = document.getElementById("toast");
    const searchInput = document.getElementById("searchInput");
    const restaurants = [...document.querySelectorAll(".restaurant")];
    const categories = [...document.querySelectorAll(".category")];
    const navButtons = [...document.querySelectorAll(".nav-btn")];

    function showToast(message) {
      toast.textContent = message;
      toast.classList.add("show");
      window.clearTimeout(showToast.timer);
      showToast.timer = window.setTimeout(() => toast.classList.remove("show"), 1700);
    }

    searchInput.addEventListener("input", (event) => {
      const term = event.target.value.trim().toLowerCase();

      restaurants.forEach((restaurant) => {
        const searchable = `${restaurant.dataset.name} ${restaurant.dataset.tags}`.toLowerCase();
        restaurant.style.display = searchable.includes(term) ? "" : "none";
      });
    });

    categories.forEach((button) => {
      button.addEventListener("click", () => {
        categories.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");

        const category = button.dataset.category;
        showToast(`Categoría: ${button.textContent.trim()}`);

        // La demo solo filtra los comercios que tienen relación con "comida".
        restaurants.forEach((restaurant) => {
          restaurant.style.display =
            category === "comida" || category === "más" ? "" : "none";
        });
      });
    });

    document.querySelectorAll(".heart").forEach((heart) => {
      heart.addEventListener("click", (event) => {
        event.stopPropagation();
        heart.classList.toggle("liked");
        heart.textContent = heart.classList.contains("liked") ? "♥" : "♡";
        showToast(heart.classList.contains("liked") ? "Agregado a favoritos" : "Eliminado de favoritos");
      });
    });

    restaurants.forEach((restaurant) => {
      restaurant.addEventListener("click", () => {
        showToast(`Abrir ${restaurant.dataset.name}`);
      });
    });

    navButtons.forEach((button) => {
      button.addEventListener("click", () => {
        navButtons.forEach((item) => item.classList.remove("active"));
        button.classList.add("active");
        showToast(button.dataset.view);
      });
    });

    document.getElementById("promoButton").addEventListener("click", () => {
      showToast("Promoción activada");
    });

    document.getElementById("allCategories").addEventListener("click", () => {
      showToast("Vista de todas las categorías");
    });

    document.getElementById("seeMore").addEventListener("click", () => {
      showToast("Más comercios disponibles");
    });
