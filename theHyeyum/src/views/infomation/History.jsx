import {} from 'react'

const History = () => {
  return (
    <div className="">
      <h3 className="pt-6">(주) 더혜윰의 시간을 소개합니다.</h3>

      <div className="history-grid relative">
          <div className="history-content flex mt-10 justify-between">
            <p className="year">2024년</p>
            <ul className="text-lg">
              <li className="">벤처기업 인증 (제 2024 0207030017호)</li>
            </ul>
          </div>
          <div className="history-content flex mt-10 justify-between">
            <p className="year">2022년</p>
            <ul className="text-lg flex items-center">
              <li>여성기업 인증</li>
            </ul>
          </div>
          <div className="history-content flex mt-10 justify-between">
            <p className="year">2021년 ~ 2022년</p>
            <ul className="text-lg flex items-center">
              <li>주식회사 더 혜윰 설립 및 합병</li>
            </ul>
          </div>
          <div className="history-content flex mt-10 justify-between">
            <p className="year">2008년</p>
            <ul className="text-lg flex items-center">
              <li>김포 사업장 &apos;형제가구&lsquo;</li>
            </ul>
          </div>
          <div className="history-content flex mt-10 justify-between">
            <p className="year">199*년</p>
            <ul className="text-lg flex items-center">
              <li>인천 강화 &apos;형제가구&lsquo;</li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default History