import { useEffect } from 'react'

export default function HeroSection() {
  useEffect(() => {
    const points = ["Data Analytics", "Data Engineering", "BI", "Machine Learning", "Statistics", "Agentic AI"]
    const listItems = document.querySelectorAll("#typingList li")
    let currentIndex = 0

    function fadeIn(element, duration = 1000) {
      element.style.opacity = 0
      element.style.display = "flex"
      element.style.transition = `opacity ${duration}ms ease`
      setTimeout(() => { element.style.opacity = 1 }, 50)
    }

    function showItemsOneByOne() {
      if (currentIndex < points.length) {
        const li = listItems[currentIndex]
        li.innerHTML = ""
        const startSpan = document.createElement("span")
        startSpan.innerHTML = '<i class="fa-solid fa-circle" style="font-size:10px; margin-right:8px;"></i>'
        const textNode = document.createTextNode(points[currentIndex])
        li.appendChild(startSpan)
        li.appendChild(textNode)
        li.style.opacity = "0"
        li.style.listStyle = "none"
        li.style.marginBottom = "10px"
        fadeIn(li, 800)
        currentIndex++
        setTimeout(showItemsOneByOne, 1000)
      }
    }

    listItems.forEach(li => li.style.opacity = "0")
    showItemsOneByOne()
  }, [])

  return (
    <section className="bannerhome thelmsbanners" style={{ backgroundImage: "url('/assets/frontend/default/images/img/thebannerhome.png')" }}>
      <div className="container-fluid p-0 h-100">
        <div className="thebannerrowws h-100">
          <div className="row h-100">
            <div className="col-md-7 p-0">
              <div className="thebluebacckkss h-100">
                <img src="/assets/frontend/default/images/img/thebacgrrounndss.png" alt="" />
              </div>
            </div>
            <div className="col-md-5 p-0">
              <div className="thebannervideos thelmsbannerimg">
                <img src="/assets/frontend/default/images/img/thelmmssbanners1.jpeg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="bannerhomemains h-100">
          <div className="thebannercontents thelmsbannercontents">
            <a href="https://analyticsavenue.in/" style={{ textDecoration: 'none', display: 'inline-block' }}>
              <small className="thebannersmall" style={{ cursor: 'pointer' }}>Powered By Analytics Avenue</small>
            </a>
            <h2 className="thebannerh2">Build Your Ai Portfolio like <br /> Top 5% Data Experts </h2>
            <p className="thebannerp">Rebuild the projects worked by data experts across 10+ domains</p>
            <ul className="thebannerssulss" id="typingList" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, max-content)', columnGap: '40px', rowGap: '15px', paddingLeft: 0 }}>
              <li></li><li></li><li></li><li></li><li></li><li></li>
            </ul>
            <div className="thebannerctabtnsedtech">
              <a
                href="#liveBatchesSection"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("liveBatchesSection")?.scrollIntoView({ behavior: "smooth" });
                }}
                className="thebannerbtn theedtechbanbtn2"
              >
                Explore All Programs <span className="theedtechbanspanbts">&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
