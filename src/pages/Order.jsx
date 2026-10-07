import { useState } from "react";

function Order({ setPage, selectedPizza }) {
  const [size, setSize] = useState("Orta");
  const [dough, setDough] = useState("Normal");
  const [ingredients, setIngredients] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);

  const ingredientList = [
    "Pepperoni",
    "Sosis",
    "Jambon",
    "Mantar",
    "Ananas",
    "Tavuk",
    "Soğan",
    "Sarımsak",
    "Biber",
    "Zeytin",
    "Mısır",
    "Sucuk",
    "Domates",
    "Brokoli",
  ];

  const ingredientPrice = 5;

  const handleIngredientChange = (ingredient) => {
    if (ingredients.includes(ingredient)) {
      setIngredients(
        ingredients.filter((item) => item !== ingredient)
      );
    } else {
      setIngredients([...ingredients, ingredient]);
    }
  };

  const extraPrice = ingredients.length * ingredientPrice;
  const totalPrice =
    (selectedPizza?.price || 0) * quantity + extraPrice;

  return (
    <>
      {/* ÜST BAR */}
      <header className="order-header">
        <div className="order-header-content">
          <img
            className="order-logo-img"
            src="/assets/iteration-1/logo.svg"
            alt="Teknolojik Yemekler Logo"
            onClick={() => setPage("home")}
          />
          <button
            className="order-logo"
            onClick={() => setPage("home")}
          >
            Teknolojik Yemekler
          </button>
        </div>
      </header>

      {/* ÜRÜN BİLGİSİ */}
      <main className="order-page">
        <div className="order-product">
          <img
            className="order-pizza-image"
            src="/assets/iteration-2/pictures/food-2.png"
            alt={selectedPizza?.name}
          />

          <div className="order-product-info">
            <div className="breadcrumb">
              Anasayfa / Siparişler /{" "}
              <span>Sipariş Ver</span>
            </div>

            <h1>{selectedPizza?.name}</h1>

            <div className="product-price-rating">
              <strong>{selectedPizza?.price}₺</strong>

              <div>
                <span>4.9</span>
                <span>60</span>
              </div>
            </div>

            <p className="product-description">
              Teknolojik Yemekler'in birbirinden lezzetli
              pizzalarından birini seçtin. Şimdi pizzanı
              istediğin gibi özelleştir ve siparişini oluştur.
            </p>
          </div>
        </div>

        {/* SEÇİMLER */}
        <div className="order-options">
          {/* BOYUT */}
          <div className="option-row">
            <div>
              <h3>Boyut Seç</h3>

              <div className="size-options">
                <label>
                  <input
                    type="radio"
                    name="size"
                    value="Küçük"
                    checked={size === "Küçük"}
                    onChange={(e) => setSize(e.target.value)}
                  />
                  Küçük
                </label>

                <label>
                  <input
                    type="radio"
                    name="size"
                    value="Orta"
                    checked={size === "Orta"}
                    onChange={(e) => setSize(e.target.value)}
                  />
                  Orta
                </label>

                <label>
                  <input
                    type="radio"
                    name="size"
                    value="Büyük"
                    checked={size === "Büyük"}
                    onChange={(e) => setSize(e.target.value)}
                  />
                  Büyük
                </label>
              </div>
            </div>

            {/* HAMUR */}
            <div>
              <h3>Hamur Seç</h3>

              <select
                value={dough}
                onChange={(e) => setDough(e.target.value)}
              >
                <option value="Normal">Normal Hamur</option>
                <option value="İnce">İnce Hamur</option>
                <option value="Kalın">Kalın Hamur</option>
              </select>
            </div>
          </div>

          {/* MALZEMELER */}
          <section className="ingredients-section">
            <h3>Ek Malzemeler</h3>

            <p>En fazla 10 malzeme seçebilirsin.</p>

            <div className="ingredients-grid">
              {ingredientList.map((ingredient) => (
                <label key={ingredient}>
                  <input
                    type="checkbox"
                    checked={ingredients.includes(ingredient)}
                    onChange={() =>
                      handleIngredientChange(ingredient)
                    }
                  />

                  {ingredient}
                </label>
              ))}
            </div>
          </section>

          {/* NOT */}
          <section className="note-section">
            <h3>Sipariş Notu</h3>

            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Siparişine eklemek istediğin bir not var mı?"
            />
          </section>

          {/* ALT KISIM */}
          <div className="order-bottom">
            {/* ADET */}
            <div className="quantity">
              <button
                type="button"
                onClick={() =>
                  setQuantity((prev) => Math.max(1, prev - 1))
                }
              >
                -
              </button>

              <span>{quantity}</span>

              <button
                type="button"
                onClick={() =>
                  setQuantity((prev) => prev + 1)
                }
              >
                +
              </button>
            </div>

            {/* TOPLAM */}
            <div className="order-summary">
              <h3>Sipariş Toplamı</h3>

              <div>
                <span>Seçimler</span>
                <strong>{extraPrice}₺</strong>
              </div>

              <div>
                <span>Toplam</span>
                <strong>{totalPrice}₺</strong>
              </div>

              <button
                className="order-submit"
                type="button"
              >
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Order;