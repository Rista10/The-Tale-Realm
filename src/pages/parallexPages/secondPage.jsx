function FeatureComponent() {
    return (
      <div
        className="feature-component flex flex-col bg-[image:var(--src)] bg-[center_center] bg-100% 100% bg-no-repeat rounded-[28px] overflow-hidden"
        style={{ '--src': `url(${'/assets/59e3a4b864c13253cccbeb3d633fc167.png'})` }}>
        <div className="flex flex-col w-[86.54%] min-h-[367px] mt-[96px] mx-auto mb-[215px]">
          <div className="flex flex-col w-[1089px] h-[68px] absolute left-[25px] right-6 top-0 bottom-[299px]">

            <h1 className="font-bold text-[57px] leading-[1.19] font-InriaSerif text-black underline w-[179px] h-[68px] absolute left-0 right-auto top-0 bottom-auto">
              WRITE
            </h1>
            <h1 className="font-bold text-[57px] leading-[1.19] font-InriaSerif text-black underline w-[147px] h-[68px] absolute left-[438px] right-auto top-0 bottom-auto">
              READ
            </h1>
            <h1 className="font-bold text-[57px] leading-[1.19] font-InriaSerif text-black underline w-[245px] h-[68px] absolute left-[844px] right-auto top-0 bottom-auto">
              EXPLORE
            </h1>
          </div>
          <h1 className="flex justify-center font-bold text-[57px] leading-[1.19] font-InriaSerif text-[rgb(85,85,85)] text-center w-[1138px] h-[204px] absolute left-0 right-auto top-[163px] bottom-auto">
            With tale realm share your stories with the world and explore the endless realm of stories
          </h1>
        </div>
      </div>
    );
  }
  
  export default FeatureComponent;