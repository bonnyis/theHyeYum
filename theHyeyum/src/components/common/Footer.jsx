import footerLogo from "@img/footer_logo.png"
const Footer = () => {
  return (
    <footer className=" border-t border-t-logoColor bg-logoColor">
      <div className="">
        <div className="p-5 flex items-center justify-center text-gray font-">
           <div>
              <img src={footerLogo} alt="blackLogo" className="w-32 opacity-50" />
            </div>
            <ul className="ml-5"> 
            <li>주소: <span>경기 김포시 대곶면 대곶북로 351-26 (경기 김포시 대곶면 석정리 48-21)</span></li>
            <li>대표번호: 031-997-2738</li>
            {/* <li className="text-center">Copyright© TheHyeYum. All Rights Reserve</li> */}
          </ul>
     
        </div>
        </div>
        <p className="text-center text-gray pb-4">Copyright© TheHyeYum. All Rights Reserve</p>
    </footer>
  )
}

export default Footer