import "./App.css";
import DemoRef from "./BaiHoc1_9_DemoRef/DemoRef";
import ProductList from "./BaiTap1_3/ProductList";
import DanhSachPhone from "./BaiTap1_5/DanhSachPhone";
import CarStore from "./BaiTap1_7/CarStore";
import BaiTapOanTuXi from "./BaiTapOanTuXi/BaiTapOanTuXi";
import EXCPhoneRedux from "./BaiTapPhoneRedux/EXCPhoneRedux";
import BaiTapTaiXiu from "./BaiTapTaiXiuRedux/BaiTapTaiXiu";
import ExerciseCartPhone from "./CartPhone/ExerciseCartPhone";
import dataShoes from "./Data/dataShoes.json";



function App() {
  return (
    // Bài tập 1-3
    // <div className="container-fluid">
    //   <div
    //     className="row "
    //     // style={{ minHeight: "783px" }}
    //   >
    //     <div className="col-4" style={{maxHeight:window.innerHeight}}>
    //       <div
    //         className="nav justify-content-center flex-column nav-pills me-3"
    //         id="v-pills-tab"
    //         role="tablist"
    //         aria-orientation="vertical"
    //         style={{height:'100%'}}
    //       >
    //         <button
    //           className="nav-link active"
    //           id="v-pills-home-tab"
    //           data-bs-toggle="pill"
    //           data-bs-target="#v-pills-home"
    //           type="button"
    //           role="tab"
    //           aria-controls="v-pills-home"
    //           aria-selected="true"

    //         >
    //           Home
    //         </button>
    //         <button
    //           className="nav-link"
    //           id="v-pills-profile-tab"
    //           data-bs-toggle="pill"
    //           data-bs-target="#v-pills-profile"
    //           type="button"
    //           role="tab"
    //           aria-controls="v-pills-profile"
    //           aria-selected="false"
    //         >
    //           Shop
    //         </button>
    //       </div>
    //     </div>
    //     <div className="col-8">
    //       <h1 className="text-center">Shop shoes</h1>
    //       <div className="tab-content" id="v-pills-tabContent">
    //         <div
    //           className="tab-pane fade show active"
    //           id="v-pills-home"
    //           role="tabpanel"
    //           aria-labelledby="v-pills-home-tab"
    //         >
    //           <ProductList propsDataShoes = {dataShoes}/>
    //         </div>
    //         <div
    //           className="tab-pane fade"
    //           id="v-pills-profile"
    //           role="tabpanel"
    //           aria-labelledby="v-pills-profile-tab"
    //         >
    //           go fai
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="App">
      {/* <EXCPhoneRedux/> */}
      {/* <ExerciseCartPhone/> */}
      {/* <BaiTapTaiXiu/> */}
      <BaiTapOanTuXi/>
    </div>
  );
}

export default App;
