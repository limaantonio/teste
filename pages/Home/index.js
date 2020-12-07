import Nav from '../../components/nav'

const Home = () => {
  return (
    <>
      <Nav />
      <div className="flex flex-row items-center justify-center p-16">
        <img src="./Ellipse.png" alt=""/>
      </div>
      <div className="flex flex-row space-x-2 bg-white p-4 rounded-md ">
        <img className="w-12 h-12"  src="./bb.png" alt=""/>
        <div>
          <span className="text-2xl text-blue font-bold">Banco do Brasil</span>
          <p className="text-sm">Você tem XX,XX R$ em título de capitalização</p>
          </div>
      </div>
    </>
  )
}

export default Home;