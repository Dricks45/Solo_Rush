import { useState } from 'react'
import Datas from './assets/images/Datas';
import HeaderWeb from './assets/components/HeaderWeb';
import Card from './assets/components/Card';
import ChooseCard from './assets/components/ChooseCard';
import Anim from './assets/components/animation/Anim';
import './style.scss';

function App() {

  const [chooseCard, setChooseCard] = useState(0);

  const handleFormer = () => {
    setChooseCard(chooseCard - 1)
  };

  const handleNext = () => {
    setChooseCard(chooseCard + 1)
  };

  const data = Datas[chooseCard];

  return (
    <>
      <HeaderWeb/>
      
      <section className='body'>
        <Card data={data} />
        <div>
          <ChooseCard
          chooseCard={chooseCard}
          handleFormer={handleFormer}
          handleNext={handleNext}
          data={Datas} />
        </div>
      </section>
      <Anim/>
      <footer>&copy; Cédric Bodereau 2023</footer>
    </>
  )
}

export default App
