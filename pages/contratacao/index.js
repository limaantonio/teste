import Footer from '../../components/Footer';
const Contratacao = () => {
  return(
    <>
    <div className="flex m-4 mt-8 h-screen flex-col ">
      <h1 className="text-red2 font-bold text-3xl">Contratação</h1>
      <div className="flex flex-col mt-14">
        <h1>Crédito Permitido:</h1>
        <button className="bg-white mt-4  border-2 border-red h-12 rounded-2xl text-red font-bold">R$ 99.456,89</button>
      </div>
      <div className="flex flex-col mt-14">
        <h1>Valor da Parcela:</h1>
        <button className="bg-white mt-4  border-2 border-red h-12 rounded-2xl text-red font-bold">R$ 665,00</button>
      </div>
      <div className="flex flex-col items-center mt-24 space-y-8">
        <h1>PLANOS E TAXAS</h1>
        <div className="space-x-40">
          <span className="text-red">200 meses</span>
          <span className="text-red">R$ 34,55/mês</span>
        </div>
        <button className="bg-red mt-4 w-full h-12 rounded-2xl text-white">CONTRATAR</button>
      </div>
  
    </div>
    <Footer/>
    </>
  )
}

export default Contratacao;