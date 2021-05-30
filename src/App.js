import './App.css';

function App() {
  return (
    <div>
      <div id="progressbar"></div>
      <div id="scrollpath"></div>
      <section>
        <b><h2>CREATIVE SCROLL PROGRESS BAR</h2></b>
        <br />
        <br />
        <p>
          La fórmula del semiverseno es una importante ecuación para la navegación astronómica, en cuanto al cálculo de la distancia de círculo máximo entre dos puntos de un globo sabiendo su longitud y su latitud. Es un caso especial de una fórmula más general de trigonometría esférica, la ley de los semiversenos, que relaciona los lados y ángulos de los "triángulos esféricos".1

          Estos nombres derivan del hecho que suele expresarse en términos de la función semiverseno (haversine en inglés), dada por

          haversin(θ) = sin2(θ/2)
          Las fórmulas también podrían estar escritas en términos de cualquier múltiplo del semiverseno, como la antigua función verseno (el doble del semiverseno).

          Pero históricamente, el semiverseno tuvo una ligera ventaja en su uso en el mar ya que su máximo es "1", por lo que las tablas logarítmicas de sus valores podían acabar con el valor cero. Hoy en día, la forma del semiverseno sigue siendo interesante, ya que no tiene ningún coeficiente delante de la función sin2.

          En la época anterior a las calculadoras digitales, el uso de tablas náuticas detalladas para el semiverseno, semiverseno/inverso y sus logaritmos (para ayudar en las multiplicaciones) ahorró a los navegantes calcular los cuadrados de los senos, el cálculo de raíces cuadradas, etc., un proceso arduo y que podía agravar los pequeños errores (ver también verseno). En el caso del cálculo de longitud por las distancias lunares de José de Mendoza, redujo el proceso de 30 pasos a 7.
        </p>
      </section>
      <script type="text/javascript">
        {
          document.addEventListener("DOMContentLoaded", function () {
            let progress = document.getElementById("progressbar");
            let totalHeight = document.body.scrollHeight - window.innerHeight;
            window.onscroll = function () {
              let progressHeight = (window.pageYOffset / totalHeight) * 100;
              progress.style.height = progressHeight + "%";
            }
          })}
      </script>

    </div>
  );
}

export default App;
