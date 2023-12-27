import Arrivals from "./components/layout/Arrivals"
import BestSeller from "./components/layout/BestSeller"
import Discount from "./components/layout/Discount"
import Footer from "./components/layout/Footer"
import Navber from "./components/layout/Navber"
import Phone from "./components/layout/Phone"
import Special from "./components/layout/Special"
import Search from "./components/layout/Search"
import Banner from "./components/layout/Banner"
import Service from "./components/layout/Service"
import Clock1 from './assets/clock1.png'
import Clock2 from './assets/clock2.png'
import Basket from './assets/basket.png'
import Doll from './assets/doll.png'
import Cap from './assets/cap.png'
import Table from './assets/table.png'
import Headphone from './assets/headphone.png'
import Sunglass from './assets/sunglass.png'
import Vase from './assets/vase.png'
import Bag1 from './assets/bag1.png'
import Bag2 from './assets/bag2.png'
import Pot from './assets/pot.png'
import Vasket from './assets/vasket.png'
import Clock3 from './assets/clock3.png'
import Product from './components/layout/Product'
import About from "./components/layout/About"
import Contacts from "./components/layout/Contacts"
import Login from "./components/layout/Login"
import Acount from "./components/layout/Acount"
import Number from "./components/layout/Number"
import Product2 from './components/layout/Product2'
import SignUp from "./components/layout/Signup"
import Cart from "./components/layout/Cart"
import Checkout from "./components/layout/Checkout"


function App() {


  return (
    <>
      <Navber/>
      <Search/>
      <Banner/>
      <Service/>
      <Discount/>
      <Arrivals clock1src={Clock1} clock2src={Clock2} basketsrc={Basket} dollsrc={Doll} product1badge="New" product2badge="New"/>
      <BestSeller vasesrc={Vase} bag1src={Bag1} bag2src={Bag2} potsrc={Pot}/>
      <Phone/>
      <Special cap={Cap} table={Table} headphone={Headphone} sunglass={Sunglass} capOffer="New" tableOffer="New" headphoneOffer="New" sunglassOffer="New"/>
      <Product pot={Pot} headphone={Headphone} table={Table} cap={Cap} clock3={Clock3} bag2={Bag2} sunglass={Sunglass} vasket={Vasket} Clock1={Clock1} potOffer="New" headphoneOffer="-10%" clock3Offer="New" sunglassOff="-10%" tableOffer="-15%" capOffer="-10%" potPrice="$44.00" headphonePrice="$44.00" tablePrice="$44.00" capPrice="$44.00" clock3Price="$44.00" bag2Price="$44.00" sunglassPrice="$44.00" TablePrice="$44.00" oldCapPrice="$44.00" vasketPrice="$44.00" clock1Price="$44.00" oldSunglassPrice="$44.00"/>
      <Product2 Vasket={Vasket} Sunglass={Sunglass} Headphone={Headphone} Table={Table}/>
      <About/>
      <Contacts/>
      <Login/>
      <SignUp/>
      <Acount/>
      <Cart/>
      <Checkout/>
      <Number/>
      <Footer/>
    </>
  )
}

export default App
