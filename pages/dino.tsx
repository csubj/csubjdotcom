import Header from "../components/header";
import Layout from "../components/layout";
import Container from "../components/container";

function Dino() {
  return (
        <iframe src="https://chromedino.com/" scrolling="no" width="100%" height="100%" loading="lazy" style={{ 'position': 'absolute', 'width': '100%', 'height': '100%', 'z-index': '999' }}></iframe>
  );
}

export default Dino;
