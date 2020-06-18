import AOS from "aos";
import "aos/dist/aos.css";

export default ({ app }) => {
  app.AOS = new AOS.init({
    // once: true,
    easing: 'linear',
    duration: 800,
  });
};
