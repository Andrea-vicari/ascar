import React from 'react'
import { useSelector} from 'react-redux'

function PrivacyPage() {

  const themeType = useSelector((state) => state.counter.value)
  let bgType, textType, textColor;
  themeType == "ligth" ? bgType = "bg-body-secondary" : bgType = "bg-dark"
  themeType == "ligth" ? textType = "" : textType = "text-bg-dark"
  themeType == "ligth" ? textColor = "" : textColor = "text-body-secondary"

  return (
    <>
    <div className='container-fluid pt-5 mt-5 bg-stripe'>
      <div className='container text-center mt-5 pb-5'>
        <h1 className='display-2 text-white text-uppercase'>Privacy & Cookie</h1>
      </div>
    </div>
    <section className={"pt-2 pb-2" + " " + bgType + " " + textType}>

      <div className="container">
          <div className='col-lg-12'>
            <h1 className="section-title">Privacy Policy</h1>
            <p className='fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, nulla quae aperiam itaque facilis iusto sit ex recusandae consequuntur repellendus iure. Eveniet maiores quibusdam vitae iste quidem quis repellat! Illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odit aut veritatis, voluptates placeat corporis quia commodi omnis tenetur expedita. Quod animi autem eum ipsum iure ipsam quas qui fugit.</p>
            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur nam odit distinctio sint impedit animi ipsam culpa exercitationem, placeat deleniti perferendis repellendus dolorum, doloribus corrupti ad numquam error est quidem vel alias esse voluptatem? Ducimus ad laboriosam soluta voluptatibus temporibus reprehenderit doloribus sed eligendi aspernatur vitae praesentium eum totam nam tenetur, voluptate minima dignissimos id inventore minus voluptatum nulla blanditiis? Cupiditate vero, nisi minima rerum esse commodi debitis quas perferendis obcaecati, eaque unde reiciendis dolorem mollitia quam? Saepe voluptate rem odio consectetur. Quae minus qui odit. Quis, labore earum?</p>
            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur nam odit distinctio sint impedit animi ipsam culpa exercitationem, placeat deleniti perferendis repellendus dolorum, doloribus corrupti ad numquam error est quidem vel alias esse voluptatem? Ducimus ad laboriosam soluta voluptatibus temporibus reprehenderit doloribus sed eligendi aspernatur vitae praesentium eum totam nam tenetur, voluptate minima dignissimos id inventore minus voluptatum nulla blanditiis? Cupiditate vero, nisi minima rerum esse commodi debitis quas perferendis obcaecati, eaque unde reiciendis dolorem mollitia quam? Saepe voluptate rem odio consectetur. Quae minus qui odit. Quis, labore earum?</p>
            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur nam odit distinctio sint impedit animi ipsam culpa exercitationem, placeat deleniti perferendis repellendus dolorum, doloribus corrupti ad numquam error est quidem vel alias esse voluptatem? Ducimus ad laboriosam soluta voluptatibus temporibus reprehenderit doloribus sed eligendi aspernatur vitae praesentium eum totam nam tenetur, voluptate minima dignissimos id inventore minus voluptatum nulla blanditiis? Cupiditate vero, nisi minima rerum esse commodi debitis quas perferendis obcaecati, eaque unde reiciendis dolorem mollitia quam? Saepe voluptate rem odio consectetur. Quae minus qui odit. Quis, labore earum?</p>
            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur nam odit distinctio sint impedit animi ipsam culpa exercitationem, placeat deleniti perferendis repellendus dolorum, doloribus corrupti ad numquam error est quidem vel alias esse voluptatem? Ducimus ad laboriosam soluta voluptatibus temporibus reprehenderit doloribus sed eligendi aspernatur vitae praesentium eum totam nam tenetur, voluptate minima dignissimos id inventore minus voluptatum nulla blanditiis? Cupiditate vero, nisi minima rerum esse commodi debitis quas perferendis obcaecati, eaque unde reiciendis dolorem mollitia quam? Saepe voluptate rem odio consectetur. Quae minus qui odit. Quis, labore earum?</p>
            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur nam odit distinctio sint impedit animi ipsam culpa exercitationem, placeat deleniti perferendis repellendus dolorum, doloribus corrupti ad numquam error est quidem vel alias esse voluptatem? Ducimus ad laboriosam soluta voluptatibus temporibus reprehenderit doloribus sed eligendi aspernatur vitae praesentium eum totam nam tenetur, voluptate minima dignissimos id inventore minus voluptatum nulla blanditiis? Cupiditate vero, nisi minima rerum esse commodi debitis quas perferendis obcaecati, eaque unde reiciendis dolorem mollitia quam? Saepe voluptate rem odio consectetur. Quae minus qui odit. Quis, labore earum?</p>
            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur nam odit distinctio sint impedit animi ipsam culpa exercitationem, placeat deleniti perferendis repellendus dolorum, doloribus corrupti ad numquam error est quidem vel alias esse voluptatem? Ducimus ad laboriosam soluta voluptatibus temporibus reprehenderit doloribus sed eligendi aspernatur vitae praesentium eum totam nam tenetur, voluptate minima dignissimos id inventore minus voluptatum nulla blanditiis? Cupiditate vero, nisi minima rerum esse commodi debitis quas perferendis obcaecati, eaque unde reiciendis dolorem mollitia quam? Saepe voluptate rem odio consectetur. Quae minus qui odit. Quis, labore earum?</p>
            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur nam odit distinctio sint impedit animi ipsam culpa exercitationem, placeat deleniti perferendis repellendus dolorum, doloribus corrupti ad numquam error est quidem vel alias esse voluptatem? Ducimus ad laboriosam soluta voluptatibus temporibus reprehenderit doloribus sed eligendi aspernatur vitae praesentium eum totam nam tenetur, voluptate minima dignissimos id inventore minus voluptatum nulla blanditiis? Cupiditate vero, nisi minima rerum esse commodi debitis quas perferendis obcaecati, eaque unde reiciendis dolorem mollitia quam? Saepe voluptate rem odio consectetur. Quae minus qui odit. Quis, labore earum?</p>
            <p className='fs-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias, nulla quae aperiam itaque facilis iusto sit ex recusandae consequuntur repellendus iure. Eveniet maiores quibusdam vitae iste quidem quis repellat! Illo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis odit aut veritatis, voluptates placeat corporis quia commodi omnis tenetur expedita. Quod animi autem eum ipsum iure ipsam quas qui fugit.</p>
            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur nam odit distinctio sint impedit animi ipsam culpa exercitationem, placeat deleniti perferendis repellendus dolorum, doloribus corrupti ad numquam error est quidem vel alias esse voluptatem? Ducimus ad laboriosam soluta voluptatibus temporibus reprehenderit doloribus sed eligendi aspernatur vitae praesentium eum totam nam tenetur, voluptate minima dignissimos id inventore minus voluptatum nulla blanditiis? Cupiditate vero, nisi minima rerum esse commodi debitis quas perferendis obcaecati, eaque unde reiciendis dolorem mollitia quam? Saepe voluptate rem odio consectetur. Quae minus qui odit. Quis, labore earum?</p>
            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur nam odit distinctio sint impedit animi ipsam culpa exercitationem, placeat deleniti perferendis repellendus dolorum, doloribus corrupti ad numquam error est quidem vel alias esse voluptatem? Ducimus ad laboriosam soluta voluptatibus temporibus reprehenderit doloribus sed eligendi aspernatur vitae praesentium eum totam nam tenetur, voluptate minima dignissimos id inventore minus voluptatum nulla blanditiis? Cupiditate vero, nisi minima rerum esse commodi debitis quas perferendis obcaecati, eaque unde reiciendis dolorem mollitia quam? Saepe voluptate rem odio consectetur. Quae minus qui odit. Quis, labore earum?</p>
            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur nam odit distinctio sint impedit animi ipsam culpa exercitationem, placeat deleniti perferendis repellendus dolorum, doloribus corrupti ad numquam error est quidem vel alias esse voluptatem? Ducimus ad laboriosam soluta voluptatibus temporibus reprehenderit doloribus sed eligendi aspernatur vitae praesentium eum totam nam tenetur, voluptate minima dignissimos id inventore minus voluptatum nulla blanditiis? Cupiditate vero, nisi minima rerum esse commodi debitis quas perferendis obcaecati, eaque unde reiciendis dolorem mollitia quam? Saepe voluptate rem odio consectetur. Quae minus qui odit. Quis, labore earum?</p>
            <p className='fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis aspernatur nam odit distinctio sint impedit animi ipsam culpa exercitationem, placeat deleniti perferendis repellendus dolorum, doloribus corrupti ad numquam error est quidem vel alias esse voluptatem? Ducimus ad laboriosam soluta voluptatibus temporibus reprehenderit doloribus sed eligendi aspernatur vitae praesentium eum totam nam tenetur, voluptate minima dignissimos id inventore minus voluptatum nulla blanditiis? Cupiditate vero, nisi minima rerum esse commodi debitis quas perferendis obcaecati, eaque unde reiciendis dolorem mollitia quam? Saepe voluptate rem odio consectetur. Quae minus qui odit. Quis, labore earum?</p>
          </div>
      </div>

    </section>

    </>
  )
}

export default PrivacyPage