document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      { id: 1, name: "Cincin Batu Tipe A", img: "cincin_A.jpg", price: 15000 },
      { id: 2, name: "Cincin Batu Tipe B", img: "cincin_B.jpg", price: 15000 },
      { id: 3, name: "Cincin Batu Tipe C", img: "cincin_C.jpg", price: 15000 },
      { id: 4, name: "Cincin Batu Tipe D", img: "cincin_D.jpg", price: 15000 },
    ],
  }));
});
