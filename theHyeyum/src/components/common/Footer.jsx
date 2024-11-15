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
            <li>주소: <span> 경기 김포시 대곶면 옹정로17번길 11</span></li>
            <li>대표번호: 010-2589-9018</li>
            <li>팩스 : 031-988-6535</li>
            <li>이메일 : theyum21@naver.com </li>
          </ul>
     
        </div>
        </div>
        <p className="text-center text-gray pb-4">Copyright© TheHyeYum. All Rights Reserve</p>
    </footer>
  )
}

export default Footer