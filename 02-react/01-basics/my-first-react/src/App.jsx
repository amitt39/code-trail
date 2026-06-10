import { Route, Routes } from "react-router-dom";
import AutoFocus from "./AutoFocus";
import Counter from "./Counter";
import Footer from "./Footer";
import Header from "./Header";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList";
import Timer from "./Timer";
import UserProfile from "./UserProfile";
import LoginForm from "./components/LoginForm";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import CallbackDemo from "./hooks/CallbackDemo";
import ExpensiveCalc from "./hooks/ExpensiveCalc";
import ThemeSwitcher from "./hooks/ThemeSwitcher";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import InputLogger from "./state/InputLogger";
import StopWatch from "./state/StopWatch";
import CounterUseReduce from "./hooks/CounterUseReduce";
function App() {
  return (
    <>
      <Header name="Amit" city="Ahmedabad" />
      <CounterUseReduce />
      <Navbar />
      <LoginForm />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <ProductCard price={69000} inStock={true} />
      <ProductCard name={"Macbook M4"} price={125000} inStock={true} />
      <ProductCard name={"Airpods"} price={25000} inStock={false} />
      <ProductCard name={"Apple Watch"} />
      <ThemeSwitcher />
      <CallbackDemo />
      <ExpensiveCalc />
      <InputLogger />
      <StopWatch />
      <AutoFocus />
      <SearchBar />
      <Timer />
      <TaskList />
      <UserProfile />
      <Counter />
      <Footer />
    </>
  );
}

export default App;
