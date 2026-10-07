import { useState } from "react";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Order({ selectedPizza }) {
  const navigate = useNavigate();
  const [size, setSize] = useState("Orta");
  const [dough, setDough] = useState("Normal");
  const [ingredients, setIngredients] = useState([]);
  const [note, setNote] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [name, setName] = useState("");

  const ingredientList = [
    "Pepperoni",
    "Sosis",
    "Kanada Jambonu",
    "Tavuk Izgara",
    "Soğan",
    "Domates",
    "Sarımsak",
    "Biber",
    "Zeytin",
    "Mısır",
    "Sucuk",
    "Jalapeno",
    "Brokoli",
    "Ananas",
    "Kabak"
  ];

  const ingredientPrice = 5;

  const handleIngredientChange = (ingredient) => {
  if (ingredients.includes(ingredient)) {
    setIngredients(
      ingredients.filter((item) => item !== ingredient)
    );
  } else {
    if (ingredients.length >= 10) {
      return;
    }

    setIngredients([...ingredients, ingredient]);
  }
};

  const extraPrice = ingredients.length * ingredientPrice;
  const totalPrice = (selectedPizza?.price || 0) * quantity + extraPrice;

  const handleSubmit = () => {
  const orderData = {
    isim: name,
    boyut: size,
    malzemeler: ingredients,
    siparisNotu: note,
    miktar: quantity,
    hamur: dough,
  };

  axios.post(
  "https://reqres.in/api/collections/pizza/records?project_id=53713",
  {
    data: orderData,
  },
  {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": import.meta.env.VITE_REQRES_API_KEY,
      "X-Reqres-Env": "prod",
    },
  }
)
    .then((response) => {
      console.log(response.data);
      navigate("/success");
    });
};

  return (
    <>
      {/* ÜST BAR */}
      <header className="order-header">
        <div className="order-header-content">
          <img
            className="order-logo-img"
            src="/assets/iteration-1/logo.svg"
            alt="Teknolojik Yemekler Logo"
            onClick={() => navigate("/")}
          />
           <div className="order-breadcrumb">
              <span
                className="breadcrumb-home"
                onClick={() => navigate("/")}
              >
                Anasayfa
              </span>

              {" / Siparişler / "}
              <span>Sipariş Ver</span>
            </div>
          
        </div>
      </header>

      {/* ÜRÜN BİLGİSİ */}
      <main className="order-page">
        <div className="order-product">

          <div className="order-product-info">

            <h1>{selectedPizza?.name}</h1>

            <div className="product-price-rating">
              <strong>{selectedPizza?.price}₺</strong>

              <div>
                <span>4.9</span>
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

            <p>En az 4, En fazla 10 malzeme seçebilirsin. 5₺</p>

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

          {/* İSİM */}
          <section className="name-section">
            <h3>İsminiz</h3>

            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Adınızı giriniz"
            />
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
                disabled={
                  name.trim().length < 3 ||
                  ingredients.length < 4
                }
                onClick={handleSubmit}
              >
                SİPARİŞ VER
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
    </>
  );
}

export default Order;