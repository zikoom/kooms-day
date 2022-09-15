import "./Clone2.scss"

const makeIMGURL = (name, min, max) => {
  let URL = `//cdn.shopify.com/s/files/1/0086/4865/4895/files/${name}_376x376_crop_center.gif`;

  if(min && max){

  }else if(!min){

  }else if(!max){

  }

  return URL;
}

function Clone2(){
  return (
    <div className="clone2">
      <header className="clone2"></header>
      <main className="clone2">
        <div className="content-box-container">
          <div className="content-box">
            <div className="left-half">
              <picture>
                <source media="(max-width: 375px)" srcSet="//cdn.shopify.com/s/files/1/0086/4865/4895/files/Tote_Bag_376x376_crop_center.gif?v=1653663698"></source>
                <source media="(max-width: 699px) and (min-width: 376px)" srcSet="//cdn.shopify.com/s/files/1/0086/4865/4895/files/Tote_Bag_699x699_crop_center.gif?v=1653663698"></source>
                <source media="(min-width: 700px) and (max-width: 1280px)" srcSet="//cdn.shopify.com/s/files/1/0086/4865/4895/files/Tote_Bag_640x640_crop_center.gif?v=1653663698 1x,
//cdn.shopify.com/s/files/1/0086/4865/4895/files/Tote_Bag_1280x1280_crop_center.gif?v=1653663698 2x"></source>
                <source media="(min-width: 1281px) and (max-width: 1600px)" srcSet="//cdn.shopify.com/s/files/1/0086/4865/4895/files/Tote_Bag_800x800_crop_center.gif?v=1653663698 1x,
//cdn.shopify.com/s/files/1/0086/4865/4895/files/Tote_Bag_1600x1600_crop_center.gif?v=1653663698 2x"></source>
                <source media="(min-width: 1601px)" srcSet="//cdn.shopify.com/s/files/1/0086/4865/4895/files/Tote_Bag_960x960_crop_center.gif?v=1653663698 1x,
//cdn.shopify.com/s/files/1/0086/4865/4895/files/Tote_Bag_1920x1920_crop_center.gif?v=1653663698 2x"></source>
                <img src="//cdn.shopify.com/s/files/1/0086/4865/4895/files/Tote_Bag_960x960_crop_center.gif?v=1653663698" alt="이미지 입니다"></img>
              </picture>
              <div>

              </div>

            </div>
            <div className="right-half">

            </div>
          </div>
        </div>
      </main>
      <footer className="clone2"></footer>
    </div>
  )
}

export default Clone2;