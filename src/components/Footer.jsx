function Footer() {
  return (
    <footer>
        <section className="footer-content">
          <div className="footer-left">
            <div>
              <img
                src="/assets/iteration-2/footer/logo-footer.svg"
                alt="Teknolojik Yemekler"
              />
            </div>

            <ul>
              <li>
                <div className="lokasyon">
                  <img
                    src="/assets/iteration-2/footer/icons/icon-1.png"
                    alt="Lokasyon"
                  />
                  <p>
                    341 Londondery Road, İstanbul, Türkiye
                  </p>
                </div>
              </li>

              <li>
                <div className="mail">
                  <img
                    src="/assets/iteration-2/footer/icons/icon-2.png"
                    alt="E-posta"
                  />
                  <p>
                    aciktim@teknolojikyemekler.com
                  </p>
                </div>
              </li>

              <li>
                <div className="tel">
                  <img
                    src="/assets/iteration-2/footer/icons/icon-3.png"
                    alt="Telefon"
                  />
                  <p>
                    +90 216 123 45 67
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="footer-center">
            <div>
              <h2>Hot Menu</h2>
            </div>

            <ul>
              <li>
                <a href="#">Terminal Pizza</a>
              </li>

              <li>
                <a href="#">5 Kişilik Hackathlon Pizza</a>
              </li>

              <li>
                <a href="#">useEffect Tavuklu Pizza</a>
              </li>

              <li>
                <a href="#">Beyaz Console Frosty</a>
              </li>

              <li>
                <a href="#">Testler Geçti Mutlu Burger</a>
              </li>

              <li>
                <a href="#">Position Absolute Acı Burger</a>
              </li>
            </ul>
          </div>

          <div className="footer-right">
            <div>
              <h2>Instagram</h2>
            </div>

            <div className="footer-insta">
              <img
                src="/assets/iteration-2/footer/insta/li-0.png"
                alt="Instagram 1"
              />

              <img
                src="/assets/iteration-2/footer/insta/li-1.png"
                alt="Instagram 2"
              />

              <img
                src="/assets/iteration-2/footer/insta/li-2.png"
                alt="Instagram 3"
              />

              <img
                src="/assets/iteration-2/footer/insta/li-3.png"
                alt="Instagram 4"
              />

              <img
                src="/assets/iteration-2/footer/insta/li-4.png"
                alt="Instagram 5"
              />

              <img
                src="/assets/iteration-2/footer/insta/li-5.png"
                alt="Instagram 6"
              />
            </div>
          </div>
        </section>

        <section className="footer-bottom">
          <p>© 2026 Teknolojik Yemekler.</p>

          <img
            src="/assets/iteration-2/footer/icons/icon-4.png"
            alt="Twitter"
          />
        </section>
      </footer>
  );
}

export default Footer;