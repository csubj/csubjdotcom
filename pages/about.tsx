import Header from "../components/header";
import Layout from "../components/layout";
import Container from "../components/container";

function About() {
  return (
    <Layout preview={true}>
      <Container>
        <Header />
        Hey there! I'm Cj
      </Container>
    </Layout>
  );
}

export default About;
