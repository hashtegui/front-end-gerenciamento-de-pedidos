import Router, { useRouter } from "next/router";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const OsIdPage = () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <>
      <Header></Header>
      <Footer></Footer>
    </>
  );
};

export default OsIdPage;
