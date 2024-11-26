import {} from 'react'

const Greetings = () => {
  return (
    <div className="font-medium greetings">
      <ul className="p-10">
        <li>안녕하십니까?</li>
        <li>(주) 더혜윰은 업소용 가구를 개발, 제작하는 전문업체로 사회와 더불어 함께하는 경영을 실현하고, 그 책임과 노력을 다하고 있습니다.</li>
        <li>더 혜윰의 <span>&apos;혜윰&lsquo;</span>은 순 우리말로 <span>&apos;생각&lsquo;</span>이란 뜻입니다.
          모든 제품은 사람과 함께 할 때 의미가 있다는 생각으로 편의성과 디자인을 맞추어 설계하고 제작하고 있습니다.</li>
        <li>당사는 자체기술과 연구를 통한 축적된 경험을 바탕으로 30년 이상의 전문 기술가치를 사회의 경제적인 성장과 발전을 위해 폭넓게 제품을 보급함으로써 건강한 기업으로 성장해 나갈 것을 약속드립니다.</li>
        <br/>
        <li>감사합니다.</li>
      </ul>
      <div className="flex justify-end">
        <strong >더 혜윰 대표 최보람</strong>
      </div>

    </div>
  )
}

export default Greetings