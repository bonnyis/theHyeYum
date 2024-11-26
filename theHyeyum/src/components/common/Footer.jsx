import footerLogo from "@img/footer_logo.png"
const Footer = () => {
  return (
    <footer className="border-t border-t-logoColor bg-logoColor">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex text-gray py-9">
           <div className="md:w-2/5 w-full flex justify-center">
              <img src={footerLogo} alt="blackLogo" className="w-32 opacity-50" />
            </div>
            <div className="">
              <p className="text-center">주소 : 경기 김포시 대곶면 옹정로17번길 11 
              <span className="ml-2">Tel. 010-2589-9018</span>
              <span className="ml-2">Fax. 031-988-6535</span>
            </p>
            <p className="text-center text-gray pb-4">COPYRIGHT© TheHyeYum. All Rights Reserve</p>
            </div>
        </div>
      </div>
    
    </footer>
  )
}

export default Footer