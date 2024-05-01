import "./App.css";
import Layout from "./components/Layout/Layout";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {
  return (
    <Layout>
      <ItemListContainer saludo={"Bienvenidos!!"} />
    </Layout>
  );
}

export default App;
